define("com/clorox/DOSHeaderTablet/userDOSHeaderTabletController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        setHeaderData: function(commonData, header) {
            try {
                this.view.lblHeadName.text = header;
                this.view.lblDate.text = commonData.date ? (new Date(commonData.date).toLocaleString('en-us', {
                    month: 'long',
                    year: 'numeric',
                    day: 'numeric'
                })) : "";
                this.view.lblTimeElapsed.text = (commonData.timeelapsed ? (commonData.timeelapsed + " ") : "") + kony.i18n.getLocalizedString("i18.clorox.timeElapsed");
                this.view.lblWorkDaysRemaining.text = (commonData.remaining_workdays ? (commonData.remaining_workdays) : "") + " " + kony.i18n.getLocalizedString("i18.clorox.workDaysRemaining");
                this.view.lblNoOfWorkDays.text = (commonData.num_work_days ? commonData.num_work_days : "") + " " + kony.i18n.getLocalizedString("i18.clorox.nfWorkDays");
                this.view.lblNoOfYAWorkDays.text = (commonData.ya_num_work_days ? commonData.ya_num_work_days : "") + " " + kony.i18n.getLocalizedString("i18.clorox.yaNFWorkdays");
            } catch (e) {
                kony.print("Exception in setHeaderData:: " + e);
            }
        },
    };
});
define("com/clorox/DOSHeaderTablet/DOSHeaderTabletControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/clorox/DOSHeaderTablet/DOSHeaderTabletController", ["com/clorox/DOSHeaderTablet/userDOSHeaderTabletController", "com/clorox/DOSHeaderTablet/DOSHeaderTabletControllerActions"], function() {
    var controller = require("com/clorox/DOSHeaderTablet/userDOSHeaderTabletController");
    var actions = require("com/clorox/DOSHeaderTablet/DOSHeaderTabletControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "lblHeadName", function(val) {
            this.view.lblHeadName.text = val;
        });
        defineGetter(this, "lblHeadName", function() {
            return this.view.lblHeadName.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
