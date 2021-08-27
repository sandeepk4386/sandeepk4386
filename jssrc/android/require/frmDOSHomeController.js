var Utils = require("UtilsCL");
define("userfrmDOSHomeController", {
    onNavigate: function(doadosData) {
        try {
            this.applyBindings(doadosData);
        } catch (e) {
            kony.print("In on navigate exception::" + JSON.stringify(e));
        }
    },
    applyBindings: function(doadosData) {
        DOSHomeReference = this;
        this.view.preShow = this.preShow.bind(this, doadosData);
        this.view.postShow = this.onPostShow;
        this.view.TopBottomNavigation.lblHeader = true;
        this.view.TopBottomNavigation.flxResetClick = this.resetClick;
        this.view.AppGuide.visibleGuide();
        this.view.onDeviceBack = function() {};
        kony.store.setItem("userName", gblPartyName);
        this.view.flxGenericError.isVisible = false;
        this.view.flxGenericError.onClick = () => {};
        this.view.FeedbackPopup.onTouchEnd = function() {};
    },
    backNav: function() {
        try {
            this.view.DOS.backNav();
        } catch (e) {
            kony.print("In backNav exception::" + JSON.stringify(e));
        }
    },
    preShow: function(doadosData) {
        try {
            this.view.DOS.setFormData(doadosData);
            this.view.Definitions.setSegData();
            var prevFrm = kony.application.getPreviousForm();
            if (displayNavGuide === true) {
                if (gblEnableNavGuide === "true" && !refreshCheckForTutorial) {
                    refreshCheckForTutorial = false;
                    var CheckedToggle = kony.store.getItem("CheckedToggle");
                    if (Utils.isNullorEmpty(CheckedToggle)) {
                        CheckedToggle = true;
                        kony.store.setItem("CheckedToggle", true);
                    }
                    if (!Utils.isNullorEmpty(prevFrm)) {
                        if (prevFrm.id === "frmLogin" && CheckedToggle === true && onYesClickCheckForTutorial === false) {
                            this.view.AppGuide.setVisibility(true);
                            this.view.TopBottomNavigation.tobBarVisibilityOff();
                        } else {
                            this.view.AppGuide.setVisibility(false);
                            this.view.TopBottomNavigation.tobBarVisibilityOn();
                        }
                    }
                }
            } else {
                this.view.AppGuide.setVisibility(false);
                this.view.TopBottomNavigation.tobBarVisibilityOn();
            }
            this.view.TopBottomNavigation.makeTabActive(1);
            this.view.Definitions.setVisibility(false);
            this.view.FeedbackPopup.setVisibility(false);
            if (isFeedbackEnable) {
                this.view.Feedback.setVisibility(true);
            } else {
                this.view.Feedback.setVisibility(false);
            }
        } catch (exception) {
            Utils.hideLoadingIndicator();
            kony.print("Exception in Preshow ::" + JSON.stringify(exception));
        }
    },
    hideAppGuide: function() {
        try {
            if (!Utils.isNetworkAvailable()) {
                onYesClickCheckForTutorial = true;
            }
            this.view.AppGuide.setVisibility(false);
        } catch (e) {
            Utils.hideLoadingIndicator();
            kony.print("exception in hideAppGuide ::" + JSON.stringify(e));
        }
    },
    onTopBottomVisibility: function() {
        this.view.TopBottomNavigation.tobBarVisibilityOn();
    },
    onPostShow: function() {
        try {
            kony.application.destroyForm("frmDosChart");
            var prevForm = kony.application.getPreviousForm();
            if (!Utils.isNullorEmpty(prevForm)) {
                if (prevForm.id === "frmLogin") {
                    this.getUnreadMessagesCount();
                }
            }
        } catch (exception) {
            Utils.hideLoadingIndicator();
            kony.print("exception in postshow ::" + JSON.stringify(exception));
        }
    },
    resetClick: function() {
        try {
            this.view.DOS.reset();
        } catch (e) {
            kony.print("Exception in resetClick " + JSON.stringify(e));
        }
    },
    getUnreadMessagesCount: function() {
        try {
            var deviceId = kony.store.getItem("userId");
            if (!Utils.isNullorEmpty(deviceId)) {
                var inputParam = {
                    ksid: deviceId,
                    status: "Submitted",
                    startElement: "0",
                    elementsPerPage: "1"
                };
                kony.print("inside getUnreadMessagesCount inputParam : " + JSON.stringify(inputParam));
                GlobalServices.callIntegrationServices(GetPushMessage.serviceName, GetPushMessage.getMessageCount, this.getMessagesCountSuccessCallback, inputParam, false, false, this.getMessagesCountErrorCallback);
            }
        } catch (exception) {
            Utils.hideLoadingIndicator();
            kony.print("Exception in updateNotifications : " + JSON.stringify(exception));
            return;
        }
    },
    getMessagesCountSuccessCallback: function(response) {
        try {
            kony.print("inside getMessagesCountSuccessCallback response : " + JSON.stringify(response));
            UserStore.setUserParam(StoreKeys.NotificationUnreadCount, 0);
            var unreadCount = 0;
            if (!Utils.isNullorEmpty(response)) {
                if (!Utils.isNullorEmpty(response.response[0]) && response.response[0] !== {}) {
                    unreadCount = response.response[0].submittedMessages;
                }
                kony.print("inside getMessagesCountSuccessCallback unread message count : " + unreadCount);
                UserStore.setUserParam(StoreKeys.NotificationUnreadCount, unreadCount);
                kmsUtil.setNotificationCount();
            } else {
                UserStore.setUserParam(StoreKeys.NotificationUnreadCount, 0);
                kmsUtil.setNotificationCount();
            }
            if (!Utils.isNullorEmpty(kony.application.getCurrentForm().loadingIndicator)) {
                kony.application.getCurrentForm().loadingIndicator.isVisible = false;
            }
        } catch (e) {
            kony.print("Exception in getMessagesCountSuccessCallback : " + JSON.stringify(e));
            Utils.hideLoadingIndicator();
            if (!Utils.isNullorEmpty(kony.application.getCurrentForm().loadingIndicator)) {
                kony.application.getCurrentForm().loadingIndicator.isVisible = false;
            }
        }
    },
    getMessagesCountErrorCallback: function(error) {
        if (!Utils.isNullorEmpty(kony.application.getCurrentForm().loadingIndicator)) {
            kony.application.getCurrentForm().loadingIndicator.isVisible = false;
        }
        Utils.hideLoadingIndicator();
        UserStore.setUserParam(StoreKeys.NotificationUnreadCount, 0);
        kmsUtil.setNotificationCount();
        kony.print("In getMessagesCountErrorCallback:: " + JSON.stringify(error));
    },
});
define("frmDOSHomeControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmDOSHomeController", ["userfrmDOSHomeController", "frmDOSHomeControllerActions"], function() {
    var controller = require("userfrmDOSHomeController");
    var controllerActions = ["frmDOSHomeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
