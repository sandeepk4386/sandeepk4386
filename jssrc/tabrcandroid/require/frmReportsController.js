define("userfrmReportsController", {
    //Type your controller code here 
    onNavigate: function() {
        this.applyBindings();
        this.view.TopBottomNavigation.hidebackButton(true);
    },
    applyBindings: function() {
        this.view.preShow = this.onPreshow;
        this.view.postShow = this.onPostshow;
        this.view.onDeviceBack = function() {};
    },
    onPreshow: function() {
        try {
            this.view.TopBottomNavigation.makeTabActive(1);
            this.view.Content.setSegData();
            this.view.flxError.onClick = function() {};
            this.view.FeedbackPopup.onTouchEnd = function() {};
            this.view.FeedbackPopup.setVisibility(false);
            if (isFeedbackEnable === true) {
                this.view.Feedback.setVisibility(true);
            } else {
                this.view.Feedback.setVisibility(false);
            }
        } catch (exception) {}
    },
    onPostshow: function() {}
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
