define("Clorox/Content/userContentController", function() {
    var Utils = require("UtilsCL");
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.view.segContent.onRowClick = this.segOnClick;
        },
        setSegData: function() {
            try {
                var masterDataArray = [];
                var data = [kony.i18n.getLocalizedString("i18.clorox.DOS"),
                    kony.i18n.getLocalizedString("i18.clorox.ADA"),
                    kony.i18n.getLocalizedString("i18.clorox.News")
                ];
                for (var i = 0; i < data.length; i++) {
                    var dataToSet = {
                        "lblHeading": data[i]
                    };
                    masterDataArray.push(dataToSet);
                }
                this.view.segContent.setData(masterDataArray);
            } catch (e) {
                kony.print("error in setSegData" + e);
            }
        },
        segOnClick: function() {
            try {
                var selectedData = this.view.segContent.selectedRowItems[0];
                var navParams = selectedData.lblHeading;
                if (navParams == kony.i18n.getLocalizedString("i18.clorox.DOS")) {
                    Utils.navigate("frmDOSHome", "", G_Navigation_History);
                } else if (navParams == kony.i18n.getLocalizedString("i18.clorox.ADA")) {
                    Utils.navigate("frmADAHome", "", G_Navigation_History);
                }
            } catch (e) {
                kony.print("error on seg row click:" + e);
            }
        }
    };
});
define("Clorox/Content/ContentControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("Clorox/Content/ContentController", ["Clorox/Content/userContentController", "Clorox/Content/ContentControllerActions"], function() {
    var controller = require("Clorox/Content/userContentController");
    var actions = require("Clorox/Content/ContentControllerActions");
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
