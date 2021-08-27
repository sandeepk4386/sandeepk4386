/**
 * Name		:	pushRegistration
 * Author	:	Kony
 * Purpose	:	To register the device to the GCM/APNS.
 **/
var ksid;
var Utils = require("UtilsCL");
var UserStore = require("UserStore");
var StoreKeys = require("StoreKeys");
var ErrorCodes = require("ErrorCodes");
var deviceUtil = require("DeviceUtil");
var GlobalServices = require("GlobalServices");
var DeviceStore = require("DeviceStore");
var kmsUtil = {
    callbackSetCallbacks: function() {
        kony.print("\n\n\n<--------in callbackAndroidSetCallbacks--------->\n\n\n");
        kony.push.setCallbacks({
            onsuccessfulregistration: kmsUtil.regSuccessCallback,
            onfailureregistration: kmsUtil.regFailureCallback,
            onlinenotification: kmsUtil.onlinePushNotificationCallback,
            offlinenotification: kmsUtil.offlinePushNotificationCallback,
            onsuccessfulderegistration: kmsUtil.unRegSuccessCallback,
            onfailurederegistration: kmsUtil.unRegFailureCallback,
            defaultRemoteNotificationCallbackBehaviour: true
        });
    },
    pushNotificationEnableDisable: function() {
        try {
            var emailId = gblPartyEmail;
            var prevEmailId;
            var enablePushNotificationPrompt;
            var enablePushPrompt;
            prevEmailId = UserStore.getItem(StoreKeys.PREV_EMAIL_ID);
            if (!Utils.isNullorEmpty(prevEmailId) && prevEmailId !== emailId) {
                kmsUtil.pushdeRegister();
                enablePushNotificationPrompt = StoreKeys.PUSH_NOTIFICATION_PROMPT + prevEmailId;
                enablePushPrompt = UserStore.setItem(enablePushNotificationPrompt, false);
            }
            enablePushNotificationPrompt = StoreKeys.PUSH_NOTIFICATION_PROMPT + emailId;
            enablePushPrompt = UserStore.getItem(enablePushNotificationPrompt);
            UserStore.setItem(enablePushNotificationPrompt, true);
            if (!enablePushPrompt) {
                if (deviceUtil.isAndroid()) {
                    kony.ui.Alert({
                        "message": kony.i18n.getLocalizedString("i18n.clorox.enablePushNotify"),
                        "alertType": constants.ALERT_TYPE_CONFIRMATION,
                        "alertTitle": kony.i18n.getLocalizedString("i18n.clorox.conformation"),
                        "yesLabel": kony.i18n.getLocalizedString("i18n.clorox.allow"),
                        "noLabel": kony.i18n.getLocalizedString("i18n.clorox.dontAllow"),
                        "alertIcon": "",
                        "alertHandler": kmsUtil.enablePushNotificationHandler
                    }, {});
                } else {
                    kmsUtil.pushRegistration();
                    UserStore.setItem(StoreKeys.PREV_EMAIL_ID, emailId);
                }
            }
        } catch (exception) {
            var message = kony.i18n.getLocalizedString("i18n.clorox.NullCheck") + ErrorCodes.CODE_CHECK_VALIDATION_FAILED;
            kony.print("Exception in pushNotificationEnableDisable : " + exception);
            return;
        }
    },
    enablePushNotificationHandler: function(turnOnPushNoti) {
        try {
            var emailId = gblPartyEmail;
            var prevUser;
            prevUser = UserStore.getItem(StoreKeys.PREV_EMAIL_ID);
            if (turnOnPushNoti) {
                kmsUtil.pushRegistration();
            } else {
                kony.print("inside dont allow flow");
            }
            UserStore.setItem(StoreKeys.PREV_EMAIL_ID, emailId);
        } catch (exception) {
            var message = kony.i18n.getLocalizedString("i18n.clorox.NullCheck") + ErrorCodes.CODE_CHECK_VALIDATION_FAILED;
            kony.print("Exception in enablePushNotificationHandler : " + exception);
            return;
        }
    },
    pushRegistration: function() {
        kony.print("\n\n----in pushRegister----\n");
        if (deviceUtil.isAndroid()) {
            kmsUtil.callbackAndroidRegister();
        } else {
            kmsUtil.callbackiPhoneRegister();
        }
    },
    callbackAndroidRegister: function() {
        var KMSPROP = {
            "senderID": getNotificationSenderId(),
        };
        kony.print("senid:" + KMSPROP.senderID);
        var configToRegister = {
            senderid: KMSPROP.senderID
        };
        kony.push.register(configToRegister);
        kony.print("Registration Done !!!");
    },
    callbackiPhoneRegister: function() {
        kony.print("\n\n\n<--------in callbackiPhoneRegister--------->\n\n\n");
        var notificationTypes = [0, 1, 2];
        kony.push.register(notificationTypes);
        kony.print("Registration Done !!!");
    },
    pushSubscription: function(regId, ostype) {
        try {
            if (ostype === "android") {
                ostype = "androidgcm";
            }
            //opSystem=ostype;
            var deviceId = kony.os.deviceInfo().deviceid;
            var ufid = gblPartyEmail;
            if (!Utils.isNullorEmpty(KNYMobileFabric)) {
                KNYMobileFabric.getMessagingService().register(ostype, deviceId, regId, ufid, this.registerSuccessCallBack, this.regFailureCallback);
            } else {
                var message = kony.i18n.getLocalizedString("i18.clorox.servDownMf") + ErrorCodes.SERVICE_DOWN_KONYMOBILEFABRIC;
                Utils.showErrorAlert(message);
            }
        } catch (e) {
            kony.print("Exception in pushSubscription : " + e);
        }
    },
    registerSuccessCallBack: function(response) {
        try {
            kony.print("inside registerSuccessCallBack response : " + JSON.stringify(response));
            if (!Utils.isNullorEmpty(KNYMobileFabric)) {
                KSID = response.id;
                kony.store.setItem("userId", KSID);
                var ufid = gblPartyEmail;
                var getStoredTimestamp = UserStore.getItem(ufid + "_" + StoreKeys.TIMESTAMP);
                if (Utils.isNullorEmpty(getStoredTimestamp)) {
                    var timestamp = Utils.getTimestamp();
                    UserStore.setItem(ufid + "_" + StoreKeys.TIMESTAMP, timestamp);
                }
                getStoredTimestamp = UserStore.getItem(ufid + "_" + StoreKeys.TIMESTAMP);
                if (KSID !== null && KSID !== undefined && KSID !== "") {
                    kony.store.setItem("isPushRegistered", true);
                    kmsUtil.createUser();
                } else {
                    kony.store.setItem("isPushRegistered", false);
                }
            } else {
                var message = kony.i18n.getLocalizedString("i18n.clorox.NullCheck") + ErrorCodes.CODE_CHECK_VALIDATION_FAILED;
                kony.print("KNYMobileFabric is null in registerSuccessCallBack  ");
            }
        } catch (e) {
            kony.print("Exception in registerSuccessCallBack : " + e);
        }
    },
    pushdeRegister: function() {
        kony.push.deRegister({});
        kony.store.setItem("isPushRegistered", false);
    },
    regSuccessCallback: function(regId) {
        kony.print("\n\n\n<--------in regSuccessAndroidCallback--------->\n\n\n");
        kony.print("\nRegistration Id-->" + JSON.stringify(regId));
        if (deviceUtil.isAndroid()) {
            kmsUtil.pushSubscription(regId, "android");
        } else {
            regId = regId.replace(/ /g, "");
            kmsUtil.pushSubscription(regId, "iphone");
        }
    },
    regFailureCallback: function(errormsg) {
        kony.print("in regFailureCallback : " + errormsg);
        let currForm = kony.application.getCurrentForm();
        if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.ServiceErrorAlert)) {
            var message = kony.i18n.getLocalizedString("i18n.clorox.featureUnavailable");
            //       currForm.ServiceErrorAlert.showErrorPopup(message,ErrorCodes.KMS_REGISTRATION_FAILURE,"");
        }
        kony.print("Registration Failed ");
    },
    onlinePushNotificationCallback: function(msg) {
        try {
            kony.print("inside onlinePushNotificationCallback message : " + JSON.stringify(msg));
            var launchMode = UserStore.getUserParam(StoreKeys.statusBarNotification);
            if (launchMode === undefined || launchMode === null) {
                launchMode = false;
            }
            kony.print("inside onlinePushNotificationCallback launchMode : " + launchMode);
            if (!Utils.isNullorEmpty(msg)) {
                if (deviceUtil.isiOS()) {
                    notificationType = msg.notificationType;
                    pushId = msg.mid;
                } else {
                    notificationType = msg.notificationType;
                    pushId = msg.mid;
                }
            } else {
                notificationType = "";
                pushId = "";
            }
            if (!Utils.isNullorEmpty(isAlreadyLoggedIn) && isAlreadyLoggedIn === true && !launchMode) {
                let currForm = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currForm) && currForm.id === "frmNotifications") {
                    kmsUtil.onlinePushHandler(true);
                }
                if (currForm.id === "frmLogin") {
                    updateNotificationStatus(pushId);
                }
                if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.TopBottomNavigation)) {
                    if (!Utils.isNullorEmpty(msg)) {
                        if (deviceUtil.isiOS()) {
                            if (!Utils.isNullorEmpty(msg.alert.body)) {
                                currForm.TopBottomNavigation.setToastMessage(msg.alert.body);
                            } else {
                                currForm.TopBottomNavigation.setToastMessage(msg.alert);
                            }
                        } else {
                            currForm.TopBottomNavigation.setToastMessage(msg.content);
                        }
                    } else {
                        currForm.TopBottomNavigation.setToastMessage("");
                    }
                    kony.print("inside online notification gblIsForeground : " + gblIsForeground);
                    if (gblIsForeground === false) {
                        gblIsForeground = true;
                        if (notificationType === "dos_data_updated" || notificationType === "mtd_orders_vs_ya_index_exceeds" || notificationType === "mtd_shipments_vs_ndf_exceeds") {
                            updateNotificationStatus(pushId);
                            displayUpdates(notificationType);
                        } else {
                            //               kmsUtil.incrementNotificationCount();
                            updateNotificationStatus(pushId);
                            new kony.mvc.Navigation("frmNotifications").navigate();
                        }
                    } else {
                        currForm.TopBottomNavigation.showNotificationToast();
                        kmsUtil.incrementNotificationCount();
                    }
                } else {
                    kmsUtil.onlinePushHandler(false);
                }
            } else {
                if (kony.application.getCurrentForm().id !== "frmLogin") {
                    UserStore.setUserParam(StoreKeys.statusBarNotification, false);
                    if (notificationType === "dos_data_updated" || notificationType === "mtd_orders_vs_ya_index_exceeds" || notificationType === "mtd_shipments_vs_ndf_exceeds") {
                        updateNotificationStatus(pushId);
                        displayUpdates(notificationType);
                    } else {
                        //           kmsUtil.incrementNotificationCount();
                        updateNotificationStatus(pushId);
                        new kony.mvc.Navigation("frmNotifications").navigate();
                    }
                } else {
                    kmsUtil.onlinePushHandler(false);
                }
            }
        } catch (exception) {
            var message = kony.i18n.getLocalizedString("i18n.clorox.NullCheck") + ErrorCodes.CODE_CHECK_VALIDATION_FAILED;
            kony.print("Exception in onlinePushNotificationCallback : " + exception);
            return;
        }
    },
    onlinePushHandler: function(response) {
        if (response === true) {
            //gblFlagScroll = false;
            kmsUtil.updateNotifications("clickOk");
        } else {
            kmsUtil.updateNotifications("clickCancel");
        }
    },
    /**
     * Name		:	offlinePushNotificationAndroidCallback
     * Author	:	Kony
     * Purpose	:	This function is the callback for the received push msg event while offline
     **/
    offlinePushNotificationCallback: function(msg) {
        try {
            kony.print("inside offlinePushNotificationCallback msg : " + JSON.stringify(msg) + " -> " + isAlreadyLoggedIn);
            var launchMode = UserStore.getUserParam(StoreKeys.statusBarNotification);
            if (launchMode === undefined || launchMode === null) {
                launchMode = false;
            }
            notificationType = msg.notificationType;
            pushId = msg.mid;
            if (isAlreadyLoggedIn) {
                kony.print("inside offlinePushNotificationCallback logged in  : ");
                if (deviceUtil.isiOS()) {
                    if (gblIsForeground === false) {
                        gblIsForeground = true;
                        /** Added to navigate to notifications inbox screen on click of notifications on status bar for iphone **/
                        if (notificationType === "dos_data_updated" || notificationType === "mtd_orders_vs_ya_index_exceeds" || notificationType === "mtd_shipments_vs_ndf_exceeds") {
                            updateNotificationStatus(pushId);
                            displayUpdates(notificationType);
                        } else {
                            //               kmsUtil.incrementNotificationCount();
                            updateNotificationStatus(pushId);
                            new kony.mvc.Navigation("frmNotifications").navigate();
                        }
                        return;
                    }
                }
            } else {
                kony.print("inside offlinePushNotificationCallback else with true");
                UserStore.setUserParam(StoreKeys.statusBarNotification, true);
            }
        } catch (exception) {
            var message = kony.i18n.getLocalizedString("i18n.clorox.NullCheck") + ErrorCodes.CODE_CHECK_VALIDATION_FAILED;
            kony.print("Exception in offlinePushNotificationCallback : " + exception);
            return;
        }
    },
    unRegSuccessCallback: function() {
        kony.print("Unregisterd Succesfully!!");
        //kony.store.setItem("userId","");
        kmsUtil.unsubscribeMFMessaging();
    },
    unRegFailureCallback: function(errormsg) {
        kony.print(" Unregistration Failed!!");
        let currForm = kony.application.getCurrentForm();
        if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.ServiceErrorAlert)) {
            var message = kony.i18n.getLocalizedString("i18n.clorox.featureUnavailable");
        }
        kony.print("Error message: " + JSON.stringify(errormsg));
    },
    unsubscribeMFMessaging: function() {
        try {
            kony.print("\n\n<----------in unsubscribeKMS-------->\n\n");
            KNYMobileFabric.getMessagingService().unregister(function(response) {
                kony.print("\n<----------Unsubscription Success--------> " + JSON.stringify(response));
                //kmsUtil.deleteUser();
            }, function(error) {
                try {
                    let currForm = kony.application.getCurrentForm();
                    if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.ServiceErrorAlert)) {
                        var message = kony.i18n.getLocalizedString("i18n.clorox.featureUnavailable");
                        //////           currForm.ServiceErrorAlert.showErrorPopup(message,ErrorCodes.KMS_DEREGISTRATION_FAILURE);
                    }
                    kony.print("\n<----------Unsubscription Failure--------> " + JSON.stringify(error));
                } catch (e) {
                    kony.print("\n<----------Unsubscription Failure---Inside Catch-----> " + JSON.stringify(error));
                }
            });
        } catch (e) {
            kony.print("Inside unsubscribeMFMessaging ::" + JSON.stringify(e));
        }
    },
    updateNotifications: function(type) {
        try {
            if (!Utils.isNullorEmpty(type) && (type !== "clickCancel")) {
                Utils.showLoadingIndicator();
            }
            var deviceId = kony.store.getItem("userId");
            var inputParam = {
                ksid: deviceId,
                appId: getAppIdForNotification(),
                startElement: "0",
                elementsPerPage: "50",
                ufid: gblPartyEmail
            };
            Utils.showLoadingIndicator();
            kony.print("inside updateNotifications inputParam : " + JSON.stringify(inputParam));
            if (gblIsSessionExpired) {
                Utils.hideLoadingIndicator();
                return;
            }
            GlobalServices.callIntegrationServices(GetPushMessage.serviceName, GetPushMessage.fetchNotification, kmsUtil.getFetchMessagesSuccessCallback.bind(this, type), inputParam, false, true, kmsUtil.getFetchMessagesErrorCallback);
        } catch (exception) {
            Utils.hideLoadingIndicator();
            var message = kony.i18n.getLocalizedString("i18n.clorox.NullCheck") + ErrorCodes.CODE_CHECK_VALIDATION_FAILED;
            kony.print("Exception in updateNotifications : " + exception);
            return;
        }
    },
    getFetchMessagesSuccessCallback: function(type, response) {
        try {
            UserStore.setUserParam(StoreKeys.NotificationUnreadCount, 0);
            var fetchMessage = response.response[0];
            var ufid = gblPartyEmail;
            var currForm = kony.application.getCurrentForm();
            fetchMessage = !Utils.isNullorEmpty(fetchMessage.messages) ? fetchMessage.messages : [];
            UserStore.setItem(StoreKeys.FETCH_MESSAGE + ufid, fetchMessage);
            var unreadCount = 0;
            var totalMessages = [];
            var date = "";
            var formatted_date = "";
            var time = "";
            var pushStatus = "UNREAD";
            var pushTitle = "",
                pushMsg, pushType = "",
                posterImage, pushId = "",
                pushDate, pushRichContent, found = [];
            var isRead = false;
            var msgType = "UNREAD";
            var lblNotifDate;
            var lblNotifMessage = {
                text: pushTitle,
                skin: "sknLblWhiteBold16Px"
            };
            if (!Utils.isNullorEmpty(fetchMessage) && fetchMessage !== []) {
                fetchMessage.sort(kmsUtil.sortNotificationList("lastUpdatedDate"));
                kony.print("inside getFetchMessagesSuccessCallback list after sort : " + JSON.stringify(fetchMessage));
                for (var i = 0; i < fetchMessage.length; i++) {
                    date = fetchMessage[i].lastUpdatedDate;
                    if (deviceUtil.isiOS()) { //[Fetch Service response date format: 2020-02-10 08:50:12.0]
                        //iPhone doesn't work with the format from service so changing it to "2020-02-10T08:50:12" format
                        date = String(date).replace(/ /g, "T");
                        date = String(date).split(".");
                        pushDate = String(date[0]).replace("T", " ");
                        pushDate = String(pushDate).replace(/-/gi, "/");
                    } else {
                        pushDate = fetchMessage[i].lastUpdatedDate;
                    }
                    pushDate = pushDate + "GMT";
                    pushTitle = fetchMessage[i].content;
                    pushId = fetchMessage[i].fetchId
                    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                    var userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    formatted_date = pushDate ? (new Date(pushDate).toLocaleString('en-us', {
                        timezone: userTimeZone,
                        month: 'long',
                        year: 'numeric',
                        day: 'numeric'
                    })) : "";
                    time = pushDate ? (new Date(pushDate).toLocaleString('en-us', {
                        timezone: userTimeZone,
                        hour: 'numeric',
                        minute: 'numeric'
                    })) : "";
                    pushStatus = fetchMessage[i].status;
                    lblNotifDate = formatted_date + " " + "•" + " " + time;
                    var pushIcon;
                    if (pushStatus === "Opened") {
                        isRead = true;
                        msgType = "READ";
                        lblNotifDate = lblNotifDate + " • " + msgType;
                        lblNotifMessage = {
                            text: pushTitle,
                            skin: "sknLblSSPR0f5ae94A3B3"
                        };
                        if (pushType === "dos_data_updated") {
                            pushIcon = {
                                text: "k",
                                skin: "sknLblNotifyHoronIconRead"
                            };
                        } else if (pushType === "mtd_orders_vs_ya_index_exceeds" || pushType === "mtd_shipments_vs_ndf_exceeds") {
                            pushIcon = {
                                text: "c",
                                skin: "sknLblNotifyBellWhiteRead"
                            };
                        } else {
                            pushIcon = {
                                text: "k",
                                skin: "sknLblNotifyHoronIconRead"
                            };
                        }
                    } else if (pushStatus === "Submitted") {
                        unreadCount++;
                        isRead = false;
                        msgType = "UNREAD";
                        lblNotifDate = lblNotifDate + " • " + msgType;
                        lblNotifMessage = {
                            text: pushTitle,
                            skin: "sknLblWhiteBold16Px"
                        };
                        //kony.print("inside getFetchMessagesSuccessCallback unread message count : " + unreadCount);
                        if (pushType === "dos_data_updated") {
                            pushIcon = {
                                text: "k",
                                skin: "sknLblNotifyHoronIcon"
                            };
                        } else if (pushType === "mtd_orders_vs_ya_index_exceeds" || pushType === "mtd_shipments_vs_ndf_exceeds") {
                            pushIcon = {
                                text: "c",
                                skin: "sknLblNotifyBellWhite"
                            };
                        } else {
                            pushIcon = {
                                text: "k",
                                skin: "sknLblNotifyHoronIcon"
                            };
                        }
                    }
                    var tempRecord;
                    if (fetchMessage.length > 1) {
                        tempRecord = {
                            "date": formatted_date,
                            "time": time,
                            "lblNotifDate": lblNotifDate,
                            "lblNotifMessage": lblNotifMessage,
                            "pushId": pushId,
                            "lblNotifyIcon": pushIcon,
                            "flxLine": ".",
                            "isRead": isRead,
                            "msgType": msgType,
                            "pushType": pushType
                        };
                    } else {
                        tempRecord = {
                            "date": formatted_date,
                            "time": time,
                            "lblNotifDate": lblNotifDate,
                            "lblNotifMessage": lblNotifMessage,
                            "pushId": pushId,
                            "lblNotifyIcon": pushIcon,
                            "isRead": isRead,
                            "msgType": msgType,
                            "pushType": pushType
                        };
                    }
                    totalMessages.push(tempRecord);
                }
                UserStore.setUserParam(StoreKeys.NotificationUnreadCount, unreadCount);
                kmsUtil.setNitifyUnread();
                var filterData = kmsUtil.removeDuplicates(totalMessages);
                var launchMode = UserStore.getUserParam(StoreKeys.statusBarNotification);
                kony.print("inside getFetchMessagesSuccessCallback currForm " + currForm.id);
                if (currForm && currForm.Notifications) {
                    if (filterData.length > 0) {
                        currForm.Notifications.setSegmentData(filterData);
                    } else {
                        currForm.Notifications.setNotifyEmpty();
                    }
                }
                kony.print("inside getFetchMessagesSuccessCallback launchMode : " + launchMode);
                kony.print("inside getFetchMessagesSuccessCallback notificationType : " + notificationType);
                kmsUtil.setNotificationCount();
                if (launchMode) {
                    UserStore.setUserParam(StoreKeys.statusBarNotification, false);
                    if (notificationType === "dos_data_updated" || notificationType === "mtd_orders_vs_ya_index_exceeds" || notificationType === "mtd_shipments_vs_ndf_exceeds") {
                        updateNotificationStatus(pushId);
                        if (currForm.id !== "frmNotifications") {
                            displayUpdates(notificationType);
                        }
                    }
                }
            } else {
                var currForm = kony.application.getCurrentForm();
                currForm.Notifications.setNotifyEmpty();
            }
            if (!Utils.isNullorEmpty(kony.application.getCurrentForm().loadingIndicator)) {
                kony.application.getCurrentForm().loadingIndicator.isVisible = false;
            }
            Utils.hideLoadingIndicator();
        } catch (e) {
            kony.print("Exception in getFetchMessagesSuccessCallback : " + e);
            Utils.hideLoadingIndicator();
            if (!Utils.isNullorEmpty(kony.application.getCurrentForm().loadingIndicator)) {
                kony.application.getCurrentForm().loadingIndicator.isVisible = false;
            }
        }
    },
    getFetchMessagesErrorCallback: function(error) {
        if (!Utils.isNullorEmpty(kony.application.getCurrentForm().loadingIndicator)) {
            kony.application.getCurrentForm().loadingIndicator.isVisible = false;
        }
        Utils.hideLoadingIndicator();
        kony.application.getCurrentForm().Notifications.setNotifyEmpty();
        kony.print("In function getFetchMessagesErrorCallback:: " + JSON.stringify(error));
    },
    removeDuplicates: function(data) {
        let newArray = [];
        let uniqueObject = {};
        for (let i in data) {
            objTitle = data[i].pushId;
            uniqueObject[objTitle] = data[i];
        }
        for (i in uniqueObject) {
            newArray.push(uniqueObject[i]);
        }
        return newArray;
    },
    createUser: function() {
        try {
            kony.print("Inside createUser");
            var inputParam = {
                dos_data_updated: "selected",
                mtd_shipments_vs_ndf_exceeds: "unselected",
                mtd_orders_vs_ya_index_exceeds: "unselected",
                firstName: gblPartyName,
                lastName: gblPartyName,
                country: "United States",
                state: "Texas",
                email: gblPartyEmail
            };
            GlobalServices.callIntegrationServices(GetPushMessage.serviceName, GetPushMessage.createUser, kmsUtil.createUserSuccessCallBack, inputParam, false, false, kmsUtil.createUserFailureCallBack);
        } catch (exception) {
            var message = kony.i18n.getLocalizedString("i18n.clorox.NullCheck") + ErrorCodes.CODE_CHECK_VALIDATION_FAILED;
            kony.print("exception in createUser : " + e);
            return;
        }
    },
    createUserSuccessCallBack: function(response) {
        try {
            kony.print("inside createUserSuccessCallBack response : " + JSON.stringify(response));
            var audienceId = response.id;
            kony.store.setItem("AudienceId", audienceId);
        } catch (e) {
            kony.print("Exception in createUserSuccessCallBack : " + e);
        }
    },
    createUserFailureCallBack: function(response) {
        kony.print("inside createUserFailureCallBack response : " + JSON.stringify(response));
        var audienceId = response.id;
        kony.store.setItem("AudienceId", audienceId);
    },
    deleteUser: function() {
        try {
            kony.print("inside deleteUser id : " + kony.store.getItem("AudienceId"));
            var audienceId = kony.store.getItem("AudienceId");
            if (!Utils.isNullorEmpty(audienceId)) {
                var inputParam = {
                    id: audienceId,
                };
                GlobalServices.callIntegrationServices(GetPushMessage.serviceName, GetPushMessage.deleteUser, kmsUtil.deleteUserSuccessCallBack, inputParam, false, true, kmsUtil.deleteUserFailureCallBack);
            } else {
                kony.print("id not found");
            }
        } catch (exception) {
            var message = kony.i18n.getLocalizedString("i18n.clorox.NullCheck") + ErrorCodes.CODE_CHECK_VALIDATION_FAILED;
            kony.print("exception in deleteUser : " + exception);
            return;
        }
    },
    deleteUserSuccessCallBack: function(response) {
        try {
            kony.print("inside deleteUserSuccessCallBack response : " + JSON.stringify(response));
            kony.store.setItem("AudienceId", "");
            ufid = gblPartyEmail;
            UserStore.setUserParam(StoreKeys.NotificationUnreadCount, 0);
            if (deviceUtil.isiOS()) {
                kony.application.setApplicationBadgeValue(0);
            }
            kmsUtil.setNitifyUnread();
            Utils.hideLoadingIndicator();
        } catch (e) {
            kony.print("Exception in deleteUserSuccessCallBack : " + e);
            Utils.hideLoadingIndicator();
        }
    },
    deleteUserFailureCallBack: function(response) {
        kony.print("inside deleteUserFailureCallBack response : " + JSON.stringify(response));
        Utils.hideLoadingIndicator();
    },
    incrementNotificationCount: function() {
        var gblUnreadMsgCount = UserStore.getUserParam(StoreKeys.NotificationUnreadCount);
        gblUnreadMsgCount = Number(gblUnreadMsgCount).toFixed(0)
        gblUnreadMsgCount++;
        UserStore.setUserParam(StoreKeys.NotificationUnreadCount, gblUnreadMsgCount);
        kmsUtil.setNotificationCount();
    },
    decrementNotificationCount: function() {
        var gblUnreadMsgCount = UserStore.getUserParam(StoreKeys.NotificationUnreadCount);
        gblUnreadMsgCount--;
        UserStore.setUserParam(StoreKeys.NotificationUnreadCount, gblUnreadMsgCount);
        kmsUtil.setNotificationCount();
    },
    setNotificationCount: function() {
        var notificationCount = UserStore.getUserParam(StoreKeys.NotificationUnreadCount);
        notificationCount = Number(notificationCount).toFixed(0);
        if (deviceUtil.isiOS()) {
            kony.application.setApplicationBadgeValue(notificationCount);
        }
        kmsUtil.setNitifyUnread();
    },
    setNitifyUnread: function() {
        try {
            var notificationCount = UserStore.getUserParam(StoreKeys.NotificationUnreadCount);
            kony.print("inside setNitifyUnread notificationCount : " + notificationCount);
            notificationCount = Number(notificationCount).toFixed(0);
            let currForm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.TopBottomNavigation)) {
                if (notificationCount > 0) {
                    currForm.TopBottomNavigation.setNitifyUnreadLabel(true);
                } else {
                    currForm.TopBottomNavigation.setNitifyUnreadLabel(false);
                }
            }
        } catch (e) {
            kony.print("Exception in setNitifyUnread : " + e);
        }
    },
    sortNotificationList: function(property) {
        return function(a, b) {
            if (a[property] < b[property]) {
                return 1;
            } else if (a[property] > b[property]) {
                return -1;
            }
            return 0;
        };
    },
    //Push Notifications Permission Popup
    confirmPushNotifications: function() {
        if (deviceUtil.isAndroid()) {
            isNotificationEnable = Utils.checkAndroidNativeSetting();
        } else {
            isNotificationEnable = Utils.checkIosNativeSetting();
        }
        if (isNotificationEnable === 0 || isNotificationEnable === 7 || isNotificationEnable) {
            kmsUtil.pushNotificationEnableDisable();
        }
    }
};