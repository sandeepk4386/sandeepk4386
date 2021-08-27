define("Clorox/Feedback/userFeedbackController", function() {
    var Utils = require("UtilsCL");
    var deviceUtil = require("DeviceUtil");
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.applyBindings();
        },
        applyBindings: function() {
            this.view.preShow = this.preShow;
            this.view.flxFeedback.onClick = this.onFeedbackClick;
        },
        preShow: function() {
            try {
                var currFrm = kony.application.getCurrentForm();
                if (deviceUtil.isTablet()) {
                    currFrm.Feedback.width = "5%";
                    currFrm.Feedback.height = "175dp";
                }
            } catch (e) {
                kony.print("Exception in  preShow feedback :" + JSON.stringify(e));
            }
        },
        onFeedbackClick: function() {
            try {
                var currFrm = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currFrm)) {
                    currFrm.FeedbackPopup.setVisibility(true);
                }
            } catch (e) {
                kony.print("Exception in  display feedback :" + JSON.stringify(e));
            }
        }
    };
});
define("Clorox/Feedback/FeedbackControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("Clorox/Feedback/FeedbackController", ["Clorox/Feedback/userFeedbackController", "Clorox/Feedback/FeedbackControllerActions"], function() {
    var controller = require("Clorox/Feedback/userFeedbackController");
    var actions = require("Clorox/Feedback/FeedbackControllerActions");
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
