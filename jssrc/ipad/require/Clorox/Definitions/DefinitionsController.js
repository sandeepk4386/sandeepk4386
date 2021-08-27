define("Clorox/Definitions/userDefinitionsController", function() {
    var Utils = require("UtilsCL");
    var deviceUtil = require("DeviceUtil");
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.view.onClick = function() {};
            this.applyBindings();
        },
        applyBindings: function() {
            this.view.preShow = this.onPreShow;
        },
        onPreShow: function() {
            if (deviceUtil.isTablet()) {
                this.view.flxSegDefinition.top = "1%";
                this.view.flxSegDefinition.height = "99%";
            } else if (deviceUtil.isMobile()) {
                this.view.flxSegDefinition.top = "0%";
                this.view.flxSegDefinition.height = "100%";
            }
        },
        setSegData: function() {
            try {
                var masterDataArray = [];
                var dataDesc = [];
                var dataArray = JSON.parse(gblAppConfig.UpgradeInfo[AppConstants.DEFINITIONS]);
                for (const key in dataArray) {
                    if (dataArray.hasOwnProperty(key)) {
                        var segmentData = {
                            "lblDefinitionHeader": key,
                            "RichDefnitionDesc": dataArray[key]
                        };
                        masterDataArray.push(segmentData);
                    }
                }
                this.view.segDefinitions.setData(masterDataArray);
            } catch (exception) {
                kony.print("Exception in setSegData :: " + exception);
            }
        },
    };
});
define("Clorox/Definitions/DefinitionsControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("Clorox/Definitions/DefinitionsController", ["Clorox/Definitions/userDefinitionsController", "Clorox/Definitions/DefinitionsControllerActions"], function() {
    var controller = require("Clorox/Definitions/userDefinitionsController");
    var actions = require("Clorox/Definitions/DefinitionsControllerActions");
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
