var Utils = require("UtilsCL");
define("userfrmNotificationsController", {
    onNavigate: function() {
        try {
            this.applyBindings();
        } catch (e) {
            kony.print("Exception in onnavigate" + e);
        }
    },
    applyBindings: function() {
        try {
            this.view.preShow = this.onPreshow.bind(this);
            this.view.postShow = this.onPostShow;
            this.view.onDeviceBack = function() {};
            this.view.flxGenericError.isVisible = false;
            this.view.flxGenericError.onClick = () => {};
            this.view.FeedbackPopup.onTouchEnd = function() {};
            this.view.onOrientationChange = Utils.feedbackOrientationChange;
        } catch (e) {
            kony.print("Exception in apply bindings" + e);
        }
    },
    onPreshow: function() {
        try {
            Utils.feedbackOrientationChange();
            this.view.TopBottomNavigation.makeTabActive(2);
            this.view.FeedbackPopup.setVisibility(false);
            if (isFeedbackEnable) {
                this.view.Feedback.setVisibility(true);
            } else {
                this.view.Feedback.setVisibility(false);
            }
            this.view.loadingIndicator.setVisibility(false);
        } catch (e) {
            kony.print("Exception in preshow" + e);
        }
    },
    onPostShow: function() {
        try {
            kony.print("onPostShow Notification Controller");
            kmsUtil.onlinePushHandler(true);
            gblIsForeground = true;
        } catch (e) {
            kony.print("Exception in Notifications PostShow");
        }
    }
});
define("frmNotificationsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmNotificationsController", ["userfrmNotificationsController", "frmNotificationsControllerActions"], function() {
    var controller = require("userfrmNotificationsController");
    var controllerActions = ["frmNotificationsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
