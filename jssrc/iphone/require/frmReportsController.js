define("userfrmReportsController", {
    onNavigate: function() {
        this.applyBindings();
        this.view.TopBottomNavigation.hidebackButton(true);
    },
    applyBindings: function() {
        this.view.preShow = this.onPreshow;
        this.view.onDeviceBack = function() {};
    },
    onPreshow: function() {
        try {
            this.view.TopBottomNavigation.makeTabActive(1);
            this.view.Content.setSegData();
            this.view.flxError.onClick = function() {};
            this.view.FeedbackPopup.onTouchEnd = function() {};
            this.view.FeedbackPopup.setVisibility(false);
            if (isFeedbackEnable) {
                this.view.Feedback.setVisibility(true);
            } else {
                this.view.Feedback.setVisibility(false);
            }
        } catch (e) {
            kony.print("exception in preshow " + JSON.stringify(e));
        }
    }
});
define("frmReportsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmReportsController", ["userfrmReportsController", "frmReportsControllerActions"], function() {
    var controller = require("userfrmReportsController");
    var controllerActions = ["frmReportsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
