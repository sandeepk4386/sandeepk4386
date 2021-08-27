define("com/DOS/DOSHeader/userDOSHeaderController", function() {
    var deviceUtil = require("DeviceUtil");
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        setDaysUI: function() {
            try {
                if (deviceUtil.isAndroidTab() || deviceUtil.isiPad()) {
                    this.view.lblTimeElapsed.left = "145dp";
                    this.view.lblNoOfWorkDays.left = "145dp";
                    this.view.lblWorkDaysRemaining.right = "110dp";
                    this.view.lblNoOfYAWorkDays.right = "110dp";
                }
            } catch (e) {
                kony.print("Exception in set Days UI for tablet:: " + e);
            }
        },
        setHeaderData: function(commonData, header) {
            try {
                this.setDaysUI();
                var currFrm = kony.application.getCurrentForm().id;
                if (header == "Total Clorox" && currFrm == "frmDOSHome") {
                    this.view.lblRefresh.setVisibility(true);
                } else {
                    this.view.lblRefresh.setVisibility(false);
                }
                this.view.lblHeadName.text = header;
                this.view.lblRefresh.onTouchEnd = this.fetchRefreshData;
                this.view.lblDate.text = commonData.date ? (new Date(commonData.date).toLocaleString('en-us', {
                    timeZone: "GMT",
                    month: 'long',
                    year: 'numeric',
                    day: 'numeric'
                })) : "";
                this.view.lblTimeElapsed.text = ((commonData.timeelapsed || commonData.time_elapsed) ? ((commonData.timeelapsed || commonData.time_elapsed) + " ") : "") + kony.i18n.getLocalizedString("i18.clorox.timeElapsed");
                this.view.lblWorkDaysRemaining.text = (commonData.remaining_workdays ? (commonData.remaining_workdays) : "") + " " + kony.i18n.getLocalizedString("i18.clorox.workDaysRemaining");
                this.view.lblNoOfWorkDays.text = (commonData.num_work_days ? commonData.num_work_days : "") + " " + kony.i18n.getLocalizedString("i18.clorox.nfWorkDays");
                this.view.lblNoOfYAWorkDays.text = (commonData.ya_num_work_days ? commonData.ya_num_work_days : "") + " " + kony.i18n.getLocalizedString("i18.clorox.yaNFWorkdays");
            } catch (e) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in setHeaderData:: " + e);
            }
        },
        fetchRefreshData: function() {
            gblIsRefresh = true;
            refreshCheckForTutorial = true;
            fetchDOSData("frmDOSHome", gblDOSHomeQuery);
        },
        getHeaderLength: function() {
            try {
                var headerval = this.view.lblHeadName.text;
                var headerLength = headerval.length;
                return headerLength;
            } catch (e) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in getHeaderLength :: " + e);
            }
        },
        getHeaderText: function() {
            try {
                var headerval = this.view.lblHeadName.text;
                return headerval;
            } catch (e) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in getHeaderLength :: " + e);
            }
        },
        displayHeading: function() {
            try {
                this.view.flxHeading.setVisibility(true);
                this.view.flxTopHead.setVisibility(false);
                this.view.flxLabelDef.setVisibility(false);
                this.view.flxLabelDefWorkdays.setVisibility(false);
            } catch (e) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in displayHeading :: " + e);
            }
        },
        displayDOSHeader: function() {
            try {
                this.view.flxHeading.setVisibility(true);
                this.view.flxTopHead.setVisibility(true);
                this.view.flxLabelDef.setVisibility(true);
                this.view.flxLabelDefWorkdays.setVisibility(true);
            } catch (e) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in displayDOSHeader :: " + e);
            }
        },
        setRefreshIconVisibility: function(flag) {
            if (flag) {
                this.view.lblRefresh.setVisibility(true);
            } else {
                this.view.lblRefresh.setVisibility(false);
            }
        },
        setHeaderText: function(header) {
            this.view.lblHeadName.text = header;
        }
    };
});
define("com/DOS/DOSHeader/DOSHeaderControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/DOS/DOSHeader/DOSHeaderController", ["com/DOS/DOSHeader/userDOSHeaderController", "com/DOS/DOSHeader/DOSHeaderControllerActions"], function() {
    var controller = require("com/DOS/DOSHeader/userDOSHeaderController");
    var actions = require("com/DOS/DOSHeader/DOSHeaderControllerActions");
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
        defineSetter(this, "flxHeading", function(val) {
            this.view.flxHeading.isVisible = val;
        });
        defineGetter(this, "flxHeading", function() {
            return this.view.flxHeading.isVisible;
        });
        defineSetter(this, "flxTopHead", function(val) {
            this.view.flxTopHead.isVisible = val;
        });
        defineGetter(this, "flxTopHead", function() {
            return this.view.flxTopHead.isVisible;
        });
        defineSetter(this, "flxLabelDef", function(val) {
            this.view.flxLabelDef.isVisible = val;
        });
        defineGetter(this, "flxLabelDef", function() {
            return this.view.flxLabelDef.isVisible;
        });
        defineSetter(this, "flxLabelDefWorkdays", function(val) {
            this.view.flxLabelDefWorkdays.isVisible = val;
        });
        defineGetter(this, "flxLabelDefWorkdays", function() {
            return this.view.flxLabelDefWorkdays.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
