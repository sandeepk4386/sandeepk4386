define("Clorox/loadingIndicator/userloadingIndicatorController", function() {
    var deviceUtil = require("DeviceUtil");
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.applyBindings();
        },
        applyBindings: function() {
            this.view.flxLoadMain.onClick = function() {};
            if (deviceUtil.isTablet()) {
                this.view.lblLoading.top = "103dp";
                this.view.lblLoading.skin = "sknLblSSPR15000000";
            } else {
                this.view.lblLoading.top = "73dp";
                this.view.lblLoading.skin = "sknLblSSPR11000000";
            }
        }
    };
});
define("Clorox/loadingIndicator/loadingIndicatorControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("Clorox/loadingIndicator/loadingIndicatorController", ["Clorox/loadingIndicator/userloadingIndicatorController", "Clorox/loadingIndicator/loadingIndicatorControllerActions"], function() {
    var controller = require("Clorox/loadingIndicator/userloadingIndicatorController");
    var actions = require("Clorox/loadingIndicator/loadingIndicatorControllerActions");
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
