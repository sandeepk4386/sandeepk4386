define("userfrmNotificationSettingsController", {
    onNavigate: function() {
        try {
            this.applyBindings();
        } catch (e) {
            kony.print("Exception in preshow" + e);
        }
    },
    applyBindings: function() {
        try {
            this.view.onDeviceBack = function() {};
            this.view.flxGenericError.isVisible = false;
            this.view.flxGenericError.onClick = () => {};
            this.view.FeedbackPopup.onTouchEnd = function() {};
            this.view.preShow = this.onPreShow;
            this.view.postShow = this.onPostShow;
        } catch (e) {
            kony.print("Exception in applyBindings" + e);
        }
    },
    onPreShow: function() {
        this.view.FeedbackPopup.setVisibility(false);
        if (isFeedbackEnable) {
            this.view.Feedback.setVisibility(true);
        } else {
            this.view.Feedback.setVisibility(false);
        }
    },
    onPostShow: function() {
        gblIsForeground = true;
    }
});
define("frmNotificationSettingsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmNotificationSettingsController", ["userfrmNotificationSettingsController", "frmNotificationSettingsControllerActions"], function() {
    var controller = require("userfrmNotificationSettingsController");
    var controllerActions = ["frmNotificationSettingsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
