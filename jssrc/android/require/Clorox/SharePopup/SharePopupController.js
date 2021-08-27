define("Clorox/SharePopup/userSharePopupController", function() {
    var Utils = require("UtilsCL");
    var deviceUtil = require("DeviceUtil");
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            shareRef = this;
            this.applyBindings();
        },
        applyBindings: function() {
            this.view.lblCrossIcon.onTouchEnd = this.closePopUp;
            this.view.lblShareBtn.onTouchEnd = this.invokeMSIdentityService.bind(this);
            this.view.flxPopup.onClick = function() {};
            if (deviceUtil.isTablet() || deviceUtil.isiPad()) {
                this.view.flxSharePopup.height = "60%";
                this.view.flxSharePopup.width = "60%";
                this.view.flxSharePopup.centerY = "50%";
                this.view.txtAreaShare.top = "0dp";
                this.view.txtAreaShare.height = "100%";
            }
        },
        setImageData: function(header, content) {
            try {
                var headerImgObj = kony.image.createImageFromSnapShot(header);
                var contentImgObj = kony.image.createImageFromSnapShot(content);
                this.view.imgHeader.rawBytes = headerImgObj.getImageAsRawBytes();
                this.view.imgContent.rawBytes = contentImgObj.getImageAsRawBytes();
                var currForm = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.SharePopup) && !Utils.isNullorEmpty(currForm.Feedback)) {
                    currForm.SharePopup.setVisibility(true);
                    this.view.imgHeader.setFocus(true);
                }
            } catch (exception) {
                Kony.print("Exception in setImageData :: " + JSON.stringify(exception));
            }
        },
        closePopUp: function() {
            try {
                var currForm = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)) {
                    currForm.GenericError.btnNoRight = "25%";
                    currForm.GenericError.btnyesRight = "32dp";
                    currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.sharing"), kony.i18n.getLocalizedString("i18.clorox.sharingpopupMsg"), kony.i18n.getLocalizedString("i18n.clorox.yes"), this.onClickYes, kony.i18n.getLocalizedString("i18n.clorox.no"), this.onClickNo);
                    currForm.flxGenericError.setVisibility(true);
                }
            } catch (exception) {
                Kony.print("Exception in closePopUp :: " + JSON.stringify(exception));
            }
        },
        shareToTeams: function() {
            try {
                var txtContent = this.view.txtAreaShare.text;
                if (deviceUtil.isAndroid()) {
                    this.shareImageContentAndroid(txtContent);
                } else if (deviceUtil.isiOS()) {
                    var arr = [txtContent];
                    kony.runOnMainThread(this.shareContentiOS, arr);
                } else {
                    alert("Add share feature to Device Name:: " + deviceName);
                }
            } catch (exception) {
                Kony.print("Exception in shareToTeams :: " + JSON.stringify(exception));
            }
        },
        shareImageContentAndroid: function(content) {
            try {
                var uriImage = this.saveImage();
                var KonyMain = java.import("com.konylabs.android.KonyMain");
                var Intent = java.import("android.content.Intent");
                var share = new Intent("android.intent.action.SEND");
                share.setPackage("com.microsoft.teams");
                share.setType("*/*");
                share.putExtra("android.intent.extra.STREAM", uriImage);
                share.putExtra("android.intent.extra.TEXT", content);
                share.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                KonyMain.getActContext().startActivity(Intent.createChooser(share, content));
            } catch (exception) {
                kony.print("Exception in shareImageContentAndroid:: " + exception);
            }
        },
        saveImage: function() {
            try {
                var uriToImage = null;
                var imgObj = kony.image.createImageFromSnapShot(this.view.flxImages);
                var snapBytes = imgObj.getImageAsRawBytes(kony.image.ENCODE_JPEG);
                var mainLoc = kony.io.FileSystem.getDataDirectoryPath();
                var sharedDir = mainLoc + constants.FILE_PATH_SEPARATOR + "images";
                var sharefolder = new kony.io.File(sharedDir).createDirectory();
                var myFileLoc = sharedDir + constants.FILE_PATH_SEPARATOR + "snapshot.jpg";
                var myFileName = new kony.io.File(myFileLoc).createFile();
                var writing = new kony.io.File(myFileLoc).write(snapBytes);
                if (writing !== null) {
                    kony.print("writing can be done on Non Existing Files");
                } else {
                    kony.print("writing on nonExisting file returns null");
                }
                var Uri = java.import("android.net.Uri");
                var File = java.import("java.io.File");
                var FileProvider = java.import("androidx.core.content.FileProvider");
                var myFile = new kony.io.File(myFileLoc);
                var KonyMain = java.import("com.konylabs.android.KonyMain");
                uriToImage = FileProvider.getUriForFile(KonyMain.getActivityContext(), KonyMain.getAppContext().getPackageName() + ".fileprovider", new File(myFile.fullPath));
                return uriToImage;
            } catch (exception) {
                kony.print("Exception in saveImage:: " + exception);
            }
        },
        shareContentiOS: function(content) {
            try {
                var NSData = objc.import("NSData");
                var UIImage = objc.import("UIImage");
                var imgObj = kony.image.createImageFromSnapShot(this.view.flxImages);
                var snapBytes = imgObj.getImageAsRawBytes(kony.image.ENCODE_JPEG);
                var snapB64 = kony.convertToBase64(snapBytes);
                let anImageData = NSData.alloc().initWithBase64EncodedStringOptions(snapB64);
                let anImage = UIImage.imageWithData(anImageData);
                var activityItems = [content, anImage];
                var applicationActivities = null;
                //SKipping exludeActivities
                var UIActivityViewController = objc.import("UIActivityViewController");
                var UIApplication = objc.import("UIApplication");
                var UIActivity = objc.import("UIActivity");
                var activityController = UIActivityViewController.alloc().initWithActivityItemsApplicationActivities(activityItems, applicationActivities);
                activityController.excludedActivityTypes = ["com.apple.reminders.RemindersEditorExtension", "com.apple.mobilenotes.SharingExtension", "com.google.Drive.ShareExtension", "com.burbn.instagram.shareextension",
                    //UIActivityTypePostToInstagram,
                    UIActivityTypeOpenInIBooks,
                    UIActivityTypePrint,
                    UIActivityTypeAssignToContact,
                    UIActivityTypePostToFacebook,
                    UIActivityTypePostToTwitter,
                    UIActivityTypePostToWeibo,
                    UIActivityTypeMessage,
                    UIActivityTypeMail,
                    UIActivityTypeCopyToPasteboard,
                    UIActivityTypeAssignToContact,
                    UIActivityTypeSaveToCameraRoll,
                    UIActivityTypeAddToReadingList,
                    UIActivityTypePostToFlickr,
                    UIActivityTypePostToVimeo,
                    UIActivityTypePostToTencentWeibo,
                    UIActivityTypeAirDrop
                ];
                UIApplication.sharedApplication().keyWindow.rootViewController.presentViewControllerAnimatedCompletion(activityController, true, function() {});
            } catch (exception) {
                kony.print("Exception in shareContentiOS:: " + exception);
            }
        },
        takeScreenShot: function() {
            try {
                var imgObj = kony.image.createImageFromSnapShot(this.view.flxImages);
                var base64Val = kony.convertToBase64(imgObj.getImageAsRawBytes());
                this.invokePostImage(base64Val);
            } catch (exception) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in takeScreenShot:: " + exception);
            }
        },
        invokePostImage: function(base64Val) {
            try {
                var integrationObj = KNYMobileFabric.getIntegrationService(graphChatAPI.serviceName);
                var textVal = this.view.txtAreaShare.text;
                if (textVal === null || textVal === undefined) {
                    textVal = "";
                }
                var data = {
                    "teamId": gblTeamsId,
                    "channelId": gblTeamChannelId,
                    "base64Val": base64Val,
                    "textVal": textVal
                };
                var headers = {};
                integrationObj.invokeOperation(graphChatAPI.sendImgTxt, headers, data, this.postImageSuccess, this.postImageFailure);
            } catch (exception) {
                Utils.hideLoadingIndicator();
                Kony.print("Exception in invokePostImage :: " + JSON.stringify(exception));
            }
        },
        postImageSuccess: function(responseContent) {
            try {
                var currFrm = kony.application.getCurrentForm();
                kony.print("Send Image response >> " + JSON.stringify(responseContent));
                if (responseContent !== null && responseContent !== undefined && responseContent.rawResponse !== null && responseContent.rawResponse !== undefined && responseContent.rawResponse.id !== null && responseContent.rawResponse.id !== undefined) {
                    Utils.hideLoadingIndicator();
                    if (!Utils.isNullorEmpty(currFrm) && !Utils.isNullorEmpty(currFrm.flxGenericError)) {
                        currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.sharing"), kony.i18n.getLocalizedString("i18n.clorox.SharePopupSuccess"), kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
                        currFrm.flxGenericError.setVisibility(true);
                    }
                    this.onSendSuccess();
                }
            } catch (exception) {
                Utils.hideLoadingIndicator();
                Kony.print("Exception in postImageSuccess :: " + JSON.stringify(exception));
            }
        },
        postImageFailure: function(error) {
            try {
                var currFrm = kony.application.getCurrentForm();
                kony.print("Send Image Failed>>" + JSON.stringify(error));
                if (!Utils.isNullorEmpty(currFrm) && !Utils.isNullorEmpty(currFrm.flxGenericError)) {
                    currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.sharing"), kony.i18n.getLocalizedString("i18n.clorox.SharePopupFailure"), kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
                    currFrm.flxGenericError.setVisibility(true);
                }
                Utils.hideLoadingIndicator();
            } catch (exception) {
                Utils.hideLoadingIndicator();
                Kony.print("Exception in postImageFailure :: " + JSON.stringify(exception));
            }
        },
        invokeMSIdentityService: function() {
            try {
                shareRef = this;
                Utils.showLoadingIndicator();
                /**
                 * Quantum Fabric is auto initialized, only if the Quantum Fabric app is linked in the Quantum Visualizer.
                 * In all other cases the Quantum Fabric initialization code should be written by User if not done
                 * already, for below sample to work.
                 */
                var authClient = KNYMobileFabric.getIdentityService(chatIdentity.identityServiceID);
                authClient.login({
                    "userid": gblUserName,
                    "password": gblPwd
                }, function(response) {
                    //code for success call back
                    shareRef.takeScreenShot();
                }, function(error) {
                    //code for failure call back
                    var currFrm = kony.application.getCurrentForm();
                    var message = kony.i18n.getLocalizedString("i18n.clorox.invalidTeamsLogin") + ErrorCodes.LOGIN_ID_OAUTH;
                    if (!Utils.isNullorEmpty(currFrm) && !Utils.isNullorEmpty(currFrm.flxGenericError)) {
                        currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.sharing"), message, kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
                        currFrm.flxGenericError.setVisibility(true);
                    }
                    Utils.hideLoadingIndicator();
                });
            } catch (exception) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in invokeMSIdentityService :: " + JSON.stringify(exception));
            }
        },
        onSendSuccess: function() {
            try {
                var currForm = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.SharePopup) && !Utils.isNullorEmpty(currForm.Feedback)) {
                    this.view.txtAreaShare.text = "";
                    currForm.SharePopup.setVisibility(false);
                }
            } catch (exception) {
                Utils.hideLoadingIndicator();
                Kony.print("Exception in onSendSuccess :: " + JSON.stringify(exception));
            }
        },
        onClickYes: function() {
            try {
                var currForm = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.SharePopup) && !Utils.isNullorEmpty(currForm.Feedback) && !Utils.isNullorEmpty(currForm.flxGenericError)) {
                    currForm.SharePopup.setVisibility(false);
                    currForm.flxGenericError.setVisibility(false);
                    currForm.GenericError.btnNoRight = "8%";
                    currForm.GenericError.btnyesRight = "20dp";
                    this.view.txtAreaShare.text = "";
                }
            } catch (exception) {
                Utils.hideLoadingIndicator();
                Kony.print("Exception in onClickYes:: " + JSON.stringify(exception));
            }
        },
        onClickNo: function() {
            try {
                var currForm = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.SharePopup) && !Utils.isNullorEmpty(currForm.flxGenericError)) {
                    currForm.SharePopup.setVisibility(true);
                    currForm.flxGenericError.setVisibility(false);
                    currForm.GenericError.btnNoRight = "8%";
                    currForm.GenericError.btnyesRight = "20dp";
                }
            } catch (exception) {
                Utils.hideLoadingIndicator();
                Kony.print("Exception in onClickNo:: " + JSON.stringify(exception));
            }
        },
    };
});
define("Clorox/SharePopup/SharePopupControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("Clorox/SharePopup/SharePopupController", ["Clorox/SharePopup/userSharePopupController", "Clorox/SharePopup/SharePopupControllerActions"], function() {
    var controller = require("Clorox/SharePopup/userSharePopupController");
    var actions = require("Clorox/SharePopup/SharePopupControllerActions");
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
