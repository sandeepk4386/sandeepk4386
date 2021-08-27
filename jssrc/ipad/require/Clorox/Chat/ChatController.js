define("Clorox/Chat/userChatController", function() {
    var Utils = require("UtilsCL");
    var deviceUtil = require("DeviceUtil");
    var DATE_DECREASE_BY = 7;
    var MIN_CHATS = 20;
    var dateCondition;
    var setDataToSeg = false;
    var isImagePresent = false;
    var isLoadMore = false;
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            chatRef = this;
            gblCollaborationAuthCode = "";
            this.segData = [];
            this.imgCount = 0;
            this.imgServiceCount = 0;
            this.applyBindings();
        },
        applyBindings: function() {
            try {
                this.view.preShow = this.onPreShow;
                this.view.postShow = this.invokeMSIdentityService.bind(this);
                this.view.lblShareBtn.onTouchEnd = this.sendTextFromChat.bind(this);
                this.view.txtBoxShare.onTextChange = this.onTextChangeMessage.bind(this);
                this.view.segMention.onRowClick = this.onClickSegMention;
                this.view.segmentChat.onRowClick = this.onClickChat;
                this.view.segmentChat.scrollingEvents = {
                    "onReachingEnd": this.onLoadMoreChat.bind(),
                    "onPull": this.onPullToRefresh.bind()
                };
            } catch (exception) {
                kony.print("Exception in applyBindings :: " + exception);
            }
        },
        onPreShow: function() {
            this.view.segmentChat.removeAll();
            this.view.flxChatEmpty.setVisibility(false);
            this.view.txtBoxShare.text = "";
            this.view.flxTeamList.setVisibility(false);
        },
        invokeMSIdentityService: function() {
            try {
                Utils.showLoadingIndicator();
                var authClient = null;
                try {
                    authClient = KNYMobileFabric.getIdentityService(chatIdentity.identityServiceID);
                } catch (exception) {
                    kony.print("Error in getting authClient: " + exception);
                }
                authClient.login({
                    "userid": gblUserName,
                    "password": gblPwd
                }, function(response) {
                    //code for success call back
                    kony.print("authLogin is success with response :: " + JSON.stringify(response));
                    authClient.getSecurityAttributes(function(response2) {
                        gblCollaborationAuthCode = response2.access_token;
                        chatRef.postShowChat();
                    }, function(error_response) {
                        //code for failure call back for Security attributes
                        Utils.hideLoadingIndicator();
                        alert("Failed to fetch attributes due to : " + JSON.stringify(error_response));
                    });
                }, function(error) {
                    //code for failure call back
                    alert("Invalid login credentials, Please try again. " + error);
                    Utils.hideLoadingIndicator();
                });
            } catch (exception) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in invokeMSIdentityService :: " + exception);
            }
        },
        postShowChat: function() {
            try {
                //List team members
                this.listTeamMembers();
                this.invokeGetMessages();
            } catch (e) {
                kony.print("Exception in postShowChat" + e);
            }
        },
        invokeGetMessages: function() {
            try {
                chatResp = [];
                var integrationObj = KNYMobileFabric.getIntegrationService(graphChatAPI.serviceName);
                var data = {
                    "teamId": gblTeamsId,
                    "channelId": gblTeamChannelId
                };
                var headers = {};
                integrationObj.invokeOperation(graphChatAPI.getChannelMsg, headers, data, this.getMessagesSuccess, this.getMessagesFailure);
            } catch (e) {
                kony.print("Exception in invokeGetMessages" + e);
            }
        },
        getMessagesSuccess: function(response) {
            try {
                this.fetchChat();
            } catch (e) {
                kony.print("Exception in getMessagesSuccess" + e);
            }
        },
        getMessagesFailure: function(error) {
            kony.print("Get Messages failed : " + JSON.stringify(error));
        },
        fetchChat: function() {
            try {
                gblDate = "";
                isLoadMore = false;
                setDataToSeg = false;
                isImagePresent = false;
                this.view.segmentChat.removeAll();
                this.view.flxChatEmpty.setVisibility(false);
                //Get Delta Messages now (last 7 days only)
                var integrationObj = KNYMobileFabric.getIntegrationService(graphChatAPI.serviceName);
                var currentDate = new Date();
                var oldDate = new Date(currentDate);
                oldDate.setDate(oldDate.getDate() - DATE_DECREASE_BY);
                var year = oldDate.getFullYear();
                var month = oldDate.getMonth() + 1;
                month = "" + month;
                if (month.length == 1) {
                    month = "0" + month;
                }
                var date = oldDate.getDate();
                date = "" + date;
                if (date.length == 1) {
                    date = "0" + date;
                }
                var finalDate = year + "-" + month + "-" + date;
                dateCondition = "lastModifiedDateTime gt " + finalDate + "T00:00:00.000z";
                var data = {
                    "teamId": gblTeamsId,
                    "channelId": gblTeamChannelId,
                    "dateCondition": dateCondition
                };
                var headers = {};
                integrationObj.invokeOperation(graphChatAPI.getChnlMsgsDelta, headers, data, this.getLast7DaysMessagesSuccess, this.getLast7DaysMessagesFailure);
            } catch (e) {
                kony.print("Exception in fetchChat " + e);
            }
        },
        getLast7DaysMessagesSuccess: function(responseContent) {
            try {
                kony.print("Last " + DATE_DECREASE_BY + " days messages Response: " + JSON.stringify(responseContent));
                var messagesArr = (responseContent !== null && responseContent.rawResponse && responseContent.rawResponse !== null) ? responseContent.rawResponse.value : [];
                messagesArr.forEach((msg, index) => {
                    if (msg.messageType !== "systemEventMessage") {
                        if (!Utils.isNullorEmpty(msg.body) && !Utils.isNullorEmpty(msg.body.content)) {
                            chatResp.push(msg);
                        }
                    }
                });
                //Make another service call if $skipToken exists in nextLink
                var nextLink = (responseContent !== null && responseContent.rawResponse !== null) ? responseContent["rawResponse"]["@odata.nextLink"] : "";
                //Make another service call if $skipToken exists in nextLink
                if (!Utils.isNullorEmpty(nextLink) && nextLink.indexOf("$skiptoken") !== -1 && messagesArr.length > 0) {
                    //nextlink has skipToken string
                    //So make another api call to get next set of messages
                    var token = nextLink.substring(nextLink.indexOf("$skiptoken") + 11, nextLink.length);
                    kony.print("skipToken :: " + token);
                    var integrationObj = KNYMobileFabric.getIntegrationService(graphChatAPI.serviceName);
                    var data = {
                        "teamId": gblTeamsId,
                        "channelId": gblTeamChannelId,
                        "dateCondition": dateCondition,
                        "tokenVal": token
                    };
                    var headers = {};
                    integrationObj.invokeOperation(graphChatAPI.getChnlMsgsSkipDelta, headers, data, this.getLast7DaysMessagesSuccess, this.getLast7DaysMessagesFailure);
                } else {
                    this.displayChat();
                }
            } catch (exception) {
                kony.print(" Exception in getLast7DaysMessagesSuccess :: " + JSON.stringify(exception));
                this.displayChat();
            }
        },
        displayChat: function() {
            try {
                if (chatResp.length > 0) {
                    this.view.segmentChat.removeAll();
                    this.view.segmentChat.setVisibility(true);
                    this.view.flxChatEmpty.setVisibility(false);
                    chatResp.reverse();
                    this.displayOnePageChat();
                } else {
                    // No Messages from the channel.
                    this.view.segmentChat.setVisibility(false);
                    this.view.flxChatEmpty.setVisibility(true);
                    Utils.hideLoadingIndicator();
                }
            } catch (exception) {
                kony.print("Exception in displayChat :: " + exception);
            }
        },
        displayOnePageChat: function() {
            try {
                if (chatResp.length > 0) {
                    var onePageChat = chatResp.slice(0, MIN_CHATS);
                    chatResp = chatResp.slice(MIN_CHATS);
                    this.processResponse(onePageChat);
                } else {
                    Utils.hideLoadingIndicator();
                }
            } catch (e) {
                kony.print("Exception in displayOnePageChat " + e);
            }
        },
        isMessageAvailable: function(msg) {
            try {
                let available = false;
                for (var i = 0; i < chatResp.length; i++) {
                    if (chatResp[i].etag == msg.etag) {
                        available = true;
                        break;
                    }
                }
                return available;
            } catch (expection) {
                kony.print("Exception in isMessageAvailable ::" + JSON.stringify(expection));
            }
        },
        getLast7DaysMessagesFailure: function(error) {
            kony.print("Get Last 7 days Messages failed :: " + JSON.stringify(error));
            // Display the chat messages if  available in the chatResponse.
            this.displayChat();
        },
        onLoadMoreChat: function() {
            try {
                Utils.showLoadingIndicator();
                setDataToSeg = false;
                isImagePresent = false;
                isLoadMore = true;
                this.displayOnePageChat();
            } catch (e) {
                kony.print("Exception in onLoadMoreChat ::" + JSON.stringify(e));
            }
        },
        onPullToRefresh: function() {
            try {
                Utils.showLoadingIndicator();
                setDataToSeg = false;
                isImagePresent = false;
                isLoadMore = false;
                chatResp = [];
                this.fetchChat();
            } catch (e) {
                kony.print("Exception in onPullToRefresh ::" + JSON.stringify(e));
            }
        },
        processResponse: function(msgArr) {
            try {
                this.imgCount = 0;
                var segData = [];
                if (msgArr !== null && msgArr !== undefined && msgArr.length > 0) {
                    for (var i = 0; i < msgArr.length; i++) {
                        var msg = msgArr[i];
                        var dToday = new Date();
                        var createdDateTime = msg.createdDateTime;
                        var dCreated = new Date(createdDateTime);
                        var diffTime = Math.abs(dToday - dCreated);
                        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        var date = dCreated.getDate();
                        var month = dCreated.getMonth();
                        var year = dCreated.getFullYear();
                        var monthMap = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        var finalDate = date + " " + monthMap[month] + ", " + year;
                        var time = Utils.getLocaleTimeIn12HrFormat(createdDateTime);
                        //             if(diffDays <= DATE_DECREASE_BY){ //To show only last 7-day chat
                        var body = msg.body;
                        var fromName = "";
                        if (!Utils.isNullorEmpty(msg) && !Utils.isNullorEmpty(msg.from) && !Utils.isNullorEmpty(msg.from.user) && !Utils.isNullorEmpty(msg.from.user.displayName)) {
                            fromName = msg.from.user.displayName;
                        }
                        if (msg.messageType !== "systemEventMessage" && !Utils.isNullorEmpty(fromName)) {
                            if (body.contentType == "text" && body.content !== null && body.content != "") { //This means deleted message
                                var tempData = {
                                    "name": fromName,
                                    "message": body.content,
                                    "img": {
                                        "isVisible": "false"
                                    },
                                    "date": finalDate,
                                    "time": time,
                                    "requrl": "",
                                };
                                segData.push(tempData);
                            } else if (body.contentType == "html") {
                                if (body.content.indexOf("at") !== -1) {
                                    var d = body.content;
                                    d = d.replace('<at id="0">', " ");
                                    d = d.replace("</at>", "");
                                    var tempData3 = {
                                        "name": fromName,
                                        "message": d,
                                        "img": {
                                            "isVisible": "false"
                                        },
                                        "date": finalDate,
                                        "time": time,
                                        "requrl": "",
                                    };
                                    segData.push(tempData3);
                                } else if (body.content.indexOf("img") !== -1) { //HTML & IMAGE ONLY
                                    //INVOKE SERVICE CALL AND GET IMAGE CONTENT
                                    var htmlContent = body.content;
                                    var requrl = htmlContent.substring(htmlContent.lastIndexOf("https"), htmlContent.lastIndexOf("/$value"));
                                    requrl = requrl + "/$value";
                                    var text = htmlContent.substring(htmlContent.lastIndexOf("<p>") + 3, htmlContent.lastIndexOf("</p>"));
                                    var tempData2 = {
                                        "name": fromName,
                                        "message": text,
                                        "img": {
                                            "rawBytes": null,
                                            "isVisible": true
                                        },
                                        "date": finalDate,
                                        "time": time,
                                        "requrl": requrl
                                    };
                                    this.imgCount = this.imgCount + 1;
                                    segData.push(tempData2);
                                }
                            }
                        }
                    }
                }
                //Loop done, set data to segment
                if (segData.length > 0) {
                    this.getImagesAndFinalizeData(segData);
                } else {
                    Utils.hideLoadingIndicator();
                }
            } catch (exception) {
                kony.print("Exception in processResponse ::" + JSON.stringify(exception));
            }
        },
        getImagesAndFinalizeData: function(segData) {
            try {
                this.imgServiceCount = 0;
                this.segData = segData;
                for (var i = 0; i < segData.length; i++) {
                    var rowData = segData[i];
                    if (rowData.requrl !== "") {
                        //Service call for image
                        isImagePresent = true;
                        this.invokeGetImageHTTP(rowData.requrl, i);
                    }
                    if ((i === this.segData.length - 1) && !setDataToSeg && !isImagePresent) {
                        setDataToSeg = true;
                        this.invokeSetSegmentData();
                    }
                }
            } catch (exception) {
                kony.print("Exception in getImagesAndFinalizeData ::" + JSON.stringify(exception));
            }
        },
        invokeSetSegmentData: function() {
            try {
                if (setDataToSeg === true) {
                    this.setSegmentData();
                }
            } catch (exception) {
                kony.print("Exception in invokeSetSegmentData ::" + JSON.stringify(exception));
            }
        },
        invokeGetImageHTTP: function(requrl, i) {
            try {
                var httpclient = new kony.net.HttpRequest();
                httpclient.open(constants.HTTP_METHOD_GET, requrl);
                httpclient.setRequestHeader("Authorization", "Bearer " + gblCollaborationAuthCode);
                httpclient.onReadyStateChange = function() {
                    try {
                        if (httpclient.readyState === 4) {
                            var responseContent = httpclient.response;
                            chatRef.segData[i].img.rawBytes = responseContent;
                            chatRef.imgServiceCount = chatRef.imgServiceCount + 1;
                            kony.print("IMAGES SERVICE COUNT :: " + chatRef.imgServiceCount);
                            if (chatRef.imgServiceCount == chatRef.imgCount) {
                                //All images service calls done
                                setDataToSeg = true;
                                chatRef.invokeSetSegmentData();
                            }
                        }
                    } catch (exception) {
                        kony.print("Exception in invokeGetImageHTT :: " + JSON.stringify(exception));
                    }
                };
                httpclient.send();
            } catch (exception) {
                kony.print("Exception in Outer invokeGetImageHTTP ::" + JSON.stringify(exception));
            }
        },
        /*****End of Teams APIs code*******/
        setSegmentData: function() {
            try {
                var chatData = this.segData;
                var dataToPush = [],
                    data;
                if (Utils.isNullorEmpty(gblDate)) {
                    gblDate = !Utils.isNullorEmpty(chatData[0].date) ? chatData[0].date : "";
                }
                for (var i = 0; i < chatData.length; i++) {
                    if (chatData[i].name !== Utils.setTitleCase(gblPartyName)) {
                        data = this.getSegData(1, chatData[i], i);
                    } else {
                        data = this.getSegData(2, chatData[i], i);
                    }
                    dataToPush.push(data);
                }
                this.view.segmentChat.addAll(dataToPush);
                Utils.hideLoadingIndicator();
                isLoadMore = false;
            } catch (exception) {
                kony.print("Exception in setSegmentData ::" + JSON.stringify(exception));
            }
        },
        getSegData: function(index, chatObj, arrayIndex) {
            try {
                var data = {};
                var chatName = !Utils.isNullorEmpty(chatObj.name) ? chatObj.name : "";
                var chatMessage = !Utils.isNullorEmpty(chatObj.message) ? chatObj.message : "";
                var chatImage = !Utils.isNullorEmpty(chatObj.img) && chatObj.img.isVisible ? chatObj.img.rawBytes : null;
                var chatDate = !Utils.isNullorEmpty(chatObj.date) ? chatObj.date : "";
                var chatTime = !Utils.isNullorEmpty(chatObj.time) ? chatObj.time : "";
                if (arrayIndex === 0 && isLoadMore === false) {
                    data["flxMainContainer"] = {
                        isVisible: true
                    };
                    data["lblLine1"] = {
                        skin: "sknLblFFFFFFBg",
                        text: ""
                    };
                    data["lblDate"] = {
                        text: chatDate
                    };
                    data["lblLine2"] = {
                        skin: "sknLblFFFFFFBg",
                        text: ""
                    };
                } else if (chatDate !== gblDate) {
                    gblDate = chatDate;
                    data["flxMainContainer"] = {
                        isVisible: true
                    };
                    data["lblLine1"] = {
                        skin: "sknLblFFFFFFBg",
                        text: ""
                    };
                    data["lblDate"] = {
                        text: chatDate
                    };
                    data["lblLine2"] = {
                        skin: "sknLblFFFFFFBg",
                        text: ""
                    };
                } else {
                    data["flxMainContainer"] = {
                        isVisible: false
                    };
                }
                if (index == 1) {
                    if (!Utils.isNullorEmpty(chatImage) && !Utils.isNullorEmpty(chatMessage)) {
                        data["lblName1"] = {
                            text: chatName,
                            isVisible: true
                        };
                        data["lblTime1"] = {
                            text: chatTime,
                            isVisible: true
                        };
                        data["lblMessage1"] = {
                            isVisible: true,
                            text: chatMessage
                        };
                        data["imgChat1"] = {
                            isVisible: true,
                            rawBytes: chatImage
                        };
                    } else if (!Utils.isNullorEmpty(chatImage) && Utils.isNullorEmpty(chatMessage)) {
                        data["lblName1"] = {
                            text: chatName,
                            isVisible: true
                        };
                        data["lblTime1"] = {
                            text: chatTime,
                            isVisible: true
                        };
                        data["lblMessage1"] = {
                            isVisible: false
                        };
                        data["imgChat1"] = {
                            isVisible: true,
                            rawBytes: chatImage
                        };
                    } else if (Utils.isNullorEmpty(chatImage) && !Utils.isNullorEmpty(chatMessage)) {
                        data["lblName1"] = {
                            text: chatName,
                            isVisible: true
                        };
                        data["lblTime1"] = {
                            text: chatTime,
                            isVisible: true
                        };
                        data["lblMessage1"] = {
                            isVisible: true,
                            text: chatMessage
                        };
                        data["imgChat1"] = {
                            isVisible: false
                        };
                    }
                    data["flxName2"] = {
                        isVisible: false
                    };
                    data["lblName2"] = {
                        isVisible: false
                    };
                    data["lblTime2"] = {
                        isVisible: false
                    };
                    data["lblMessage2"] = {
                        isVisible: false
                    };
                    data["imgChat2"] = {
                        isVisible: false
                    };
                }
                if (index == 2) {
                    if (!Utils.isNullorEmpty(chatImage) && !Utils.isNullorEmpty(chatMessage)) {
                        data["lblName2"] = {
                            text: chatName,
                            isVisible: true
                        };
                        data["lblTime2"] = {
                            text: chatTime,
                            isVisible: true
                        };
                        data["lblMessage2"] = {
                            isVisible: true,
                            text: chatMessage
                        };
                        data["imgChat2"] = {
                            isVisible: true,
                            rawBytes: chatImage
                        };
                    } else if (!Utils.isNullorEmpty(chatImage) && Utils.isNullorEmpty(chatMessage)) {
                        data["lblName2"] = {
                            text: chatName,
                            isVisible: true
                        };
                        data["lblTime2"] = {
                            text: chatTime,
                            isVisible: true
                        };
                        data["lblMessage2"] = {
                            isVisible: false
                        };
                        data["imgChat2"] = {
                            isVisible: true,
                            rawBytes: chatImage
                        };
                    } else if (Utils.isNullorEmpty(chatImage) && !Utils.isNullorEmpty(chatMessage)) {
                        data["lblName2"] = {
                            text: chatName,
                            isVisible: true
                        };
                        data["lblTime2"] = {
                            text: chatTime,
                            isVisible: true
                        };
                        data["lblMessage2"] = {
                            isVisible: true,
                            text: chatMessage
                        };
                        data["imgChat2"] = {
                            isVisible: false
                        };
                    }
                    data["flxName1"] = {
                        isVisible: false
                    };
                    data["lblName1"] = {
                        isVisible: false
                    };
                    data["lblTime1"] = {
                        isVisible: false
                    };
                    data["lblMessage1"] = {
                        isVisible: false
                    };
                    data["imgChat1"] = {
                        isVisible: false
                    };
                }
                return data;
            } catch (exception) {
                kony.print("Exception in getSegData :: " + exception);
            }
        },
        onClickChat: function() {
            try {
                if (deviceUtil.isiOS()) {
                    try {
                        var UIApplication = objc.import("UIApplication");
                        var NSURL = objc.import("NSURL");
                        var checkurl = NSURL.URLWithString("msteams://");
                        if (UIApplication.sharedApplication().canOpenURL(checkurl)) {
                            // The app is installed
                            kony.application.openURL(gblTeamsUri);
                        } else {
                            // Navigate to App store to install the app.
                            kony.application.openURL(gbliOSAppUrl);
                        }
                    } catch (exception) {
                        // Navigate to App store to install the app.
                        kony.print("Exception in onClickChat while opening iOS Teams." + exception);
                    }
                } else {
                    try {
                        var KonyMain = java.import("com.konylabs.android.KonyMain");
                        var pm = KonyMain.getAppContext().getPackageManager();
                        var x = pm.getPackageInfo(gblAndroidTeamsPkgName, 1);
                        if (!Utils.isNullorEmpty(x.applicationInfo.packageName)) {
                            // The app is installed 
                            kony.application.openURL(gblTeamsUri);
                        } else {
                            // Navigate to Play store to install the app.
                            kony.application.openURL(gblAndroidAppUrl);
                        }
                    } catch (exception) {
                        // Navigate to Play store to install the app.
                        kony.print("Exception in onClickChat while opening Android Teams." + exception);
                    }
                }
            } catch (exception) {
                kony.print("Exception in onClickChat :: " + JSON.stringify(exception));
            }
        },
        sendTextFromChat: function() {
            try {
                var textToSend = this.view.txtBoxShare.text;
                if (textToSend !== null && textToSend !== undefined && textToSend !== "") {
                    Utils.showLoadingIndicator();
                    if (textToSend.indexOf("@") !== -1) {
                        this.sendMentionMessage();
                    } else {
                        var integrationObj = KNYMobileFabric.getIntegrationService(graphChatAPI.serviceName);
                        var operationName = "SendText";
                        var data = {
                            "teamId": gblTeamsId,
                            "channelId": gblTeamChannelId,
                            "textVal": textToSend
                        };
                        var headers = {};
                        integrationObj.invokeOperation(operationName, headers, data, this.sendTextSuccess, this.sendTextFailure);
                    }
                } else {
                    var currFrm = kony.application.getCurrentForm();
                    if (!Utils.isNullorEmpty(currFrm) && !Utils.isNullorEmpty(currFrm.flxGenericError)) {
                        currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.chat"), kony.i18n.getLocalizedString("i18n.clorox.enterText"), kony.i18n.getLocalizedString("i18.clorox.ok"), this.onClickOk);
                        currFrm.flxGenericError.setVisibility(true);
                    }
                }
            } catch (exception) {
                Kony.print("Exception in sendTextFromChat :: " + JSON.stringify(exception));
            }
        },
        onClickOk: function() {
            try {
                var currFrm = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currFrm) && !Utils.isNullorEmpty(currFrm.flxGenericError)) {
                    currFrm.flxGenericError.setVisibility(false);
                }
            } catch (exception) {
                Kony.print("Exception in onClickOK :: " + JSON.stringify(exception));
            }
        },
        sendTextSuccess: function(response) {
            this.view.txtBoxShare.text = "";
            this.invokeGetMessages();
        },
        sendTextFailure: function(error) {
            kony.print("Send Messages failed");
            Utils.hideLoadingIndicator();
        },
        listTeamMembers: function() {
            Utils.showLoadingIndicator();
            var integrationObj = KNYMobileFabric.getIntegrationService(graphChatAPI.serviceName);
            var data = {
                "teamId": gblTeamsId
            };
            var headers = {};
            integrationObj.invokeOperation(graphChatAPI.listTeamMembers, headers, data, this.listTeamSuccess, this.listTeamFailure);
        },
        listTeamSuccess: function(response) {
            try {
                var segData = [];
                if (!Utils.isNullorEmpty(response) && !Utils.isNullorEmpty(response.rawResponse) && !Utils.isNullorEmpty(response.rawResponse.value)) {
                    var list = response.rawResponse.value;
                    for (var i = 0; i < list.length; i++) {
                        var tempData = {
                            "userid": list[i].userId,
                            "lblName": list[i].displayName,
                            "lblEmailId": list[i].email
                        };
                        segData.push(tempData);
                    }
                }
                this.view.segMention.setData(segData);
            } catch (exception) {
                kony.print("Exception in listTeamSuccess :: " + exception);
            }
        },
        listTeamFailure: function(error) {
            kony.print("Listing Team members failed");
        },
        onTextChangeMessage: function() {
            var textMsg = this.view.txtBoxShare.text;
            if (textMsg.slice(-1) == "@") {
                //Last character is @
                this.view.flxTeamList.setVisibility(true);
            } else {
                this.view.flxTeamList.setVisibility(false);
            }
        },
        onClickSegMention: function() {
            try {
                var selRow = this.view.segMention.selectedRowItems[0];
                var displayName = selRow.lblName;
                gblDisplayName = displayName;
                var userid = selRow.userid;
                gblUserId = userid;
                var textMsg = this.view.txtBoxShare.text;
                if (textMsg.indexOf("@") !== -1) {
                    gblMentionMsg = textMsg.substring(0, textMsg.lastIndexOf("@"));
                } else {
                    gblMentionMsg = textMsg;
                }
                this.view.txtBoxShare.text = textMsg + gblDisplayName;
                this.view.flxTeamList.setVisibility(false);
            } catch (exception) {
                kony.print("Exception in onClickSegMention :: " + exception);
            }
        },
        sendMentionMessage: function() {
            Utils.showLoadingIndicator();
            var integrationObj = KNYMobileFabric.getIntegrationService(graphChatAPI.serviceName);
            var data = {
                "teamId": gblTeamsId,
                "channelId": gblTeamChannelId,
                "mentionText": gblDisplayName,
                "displayName": gblDisplayName,
                "userId": gblUserId,
                "textSent": gblMentionMsg
            };
            var headers = {};
            integrationObj.invokeOperation(graphChatAPI.mentionMessage, headers, data, this.sendMentionMessageSuccess, this.sendMentionMessageFailure);
        },
        sendMentionMessageSuccess: function(response) {
            this.view.txtBoxShare.text = "";
            this.invokeGetMessages();
        },
        sendMentionMessageFailure: function(error) {
            kony.print("Sending mention message failed");
            Utils.hideLoadingIndicator();
        },
        onTeamMemSelect: function() {
            var selItem = this.view.rdTeamsList.selectedKeyValue;
            gblUserId = selItem[0];
            gblDisplayName = selItem[1];
            var textMsg = this.view.txtBoxShare.text;
            if (textMsg.indexOf("@") !== -1) {
                gblMentionMsg = textMsg.substring(0, textMsg.lastIndexOf("@"));
            } else {
                gblMentionMsg = textMsg;
            }
            this.view.txtBoxShare.text = textMsg + gblDisplayName;
            this.view.flxTeamList.isVisible = false;
        }
    };
});
define("Clorox/Chat/ChatControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("Clorox/Chat/ChatController", ["Clorox/Chat/userChatController", "Clorox/Chat/ChatControllerActions"], function() {
    var controller = require("Clorox/Chat/userChatController");
    var actions = require("Clorox/Chat/ChatControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
