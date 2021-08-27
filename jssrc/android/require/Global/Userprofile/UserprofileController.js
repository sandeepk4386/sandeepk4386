define("Global/Userprofile/userUserprofileController", function() {
    var Utils = require("UtilsCL");
    var deviceUtil = require("DeviceUtil");
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.applyBindings();
        },
        applyBindings: function() {
            this.view.preShow = this.preShow;
            this.view.flxBiomerticMain.onClick = this.onClickBiometricToogle;
            this.view.flxFeedbackToogleMain.onClick = this.onClickFeedbackToogle;
            this.view.btnSendfeedback.onClick = this.showFeedbackPoup;
            this.view.btnUserLogout.onClick = this.logOutApp;
            this.view.flxNavGuideToogleMain.onClick = this.onClickNavGuideToogle;
            if (gblEnableNavGuide === "true") {
                this.view.flxNavGuide.setVisibility(true);
            } else {
                this.view.flxNavGuide.setVisibility(false);
            }
            if (this.checkBiometricSupport()) {
                this.view.flxBiometric.setVisibility(true);
            } else {
                this.view.flxBiometric.setVisibility(false);
            }
            kony.application.setApplicationCallbacks({
                onforeground: this.onAppForeground
            });
        },
        onAppForeground: function() {
            isDeviceBiometricSupported = this.checkBiometricSupport();
            if (!isDeviceBiometricSupported) {
                this.view.flxBiometricswtch.skin = "sknToggleGrey";
                this.view.flxRoundToggle.left = "7dp";
            }
        },
        preShow: function() {
            try {
                this.view.lblVersion.text = kony.i18n.getLocalizedString("i18.clorox.lbl_Version") + " " + appConfig.appVersion;
                if (!Utils.isNullorEmpty(gblPartyName)) {
                    var str = gblPartyName;
                    var res = str.split(" ");
                    var str1 = "",
                        str2 = "";
                    if (!Utils.isNullorEmpty(res)) {
                        str1 = res[0].charAt(0);
                    }
                    if (!Utils.isNullorEmpty(res[1])) {
                        str2 = res[1].charAt(0);
                    }
                }
                this.view.lblUserName.text = gblPartyName;
                this.view.lblUserEmail.text = gblPartyEmail;
                isDeviceBiometricSupported = this.checkBiometricSupport();
                if (kony.store.getItem('isUserBioMetricEnabled') && isDeviceBiometricSupported) {
                    this.view.flxBiometricswtch.skin = "sknToggle0AC7C2OP66";
                    this.view.flxRoundToggle.left = "20.5dp";
                } else {
                    this.view.flxBiometricswtch.skin = "sknToggleGrey";
                    this.view.flxRoundToggle.left = "7dp";
                }
                if (isFeedbackEnable) {
                    this.view.flxFeedbackToggle.skin = "sknToggle0AC7C2OP66";
                    this.view.flxFeedbacktoogleRound.left = "20.5dp";
                } else if (!isFeedbackEnable) {
                    this.view.flxFeedbackToggle.skin = "sknToggleGrey";
                    this.view.flxFeedbacktoogleRound.left = "7dp";
                }
                if (deviceUtil.isAndroidPhone()) {
                    this.view.flxButtons.top = "2.5%";
                } else if (deviceUtil.isiPhone() && deviceUtil.isiPad()) {
                    this.view.flxButtons.top = "0%";
                }
                if (deviceUtil.isTablet()) {
                    this.view.btnSendfeedback.width = "23.5%";
                    this.view.btnUserLogout.width = "23.5%";
                    this.view.flxBottom.height = "12%";
                    this.view.btnSendfeedback.left = "25%";
                    this.view.flxBottom.bottom = "1%";
                } else if (deviceUtil.isMobile()) {
                    this.view.btnSendfeedback.width = "40%";
                    this.view.btnUserLogout.width = "40%";
                    this.view.flxBottom.height = "13%";
                    this.view.btnSendfeedback.left = "8.5%";
                }
                var CheckedToggle = kony.store.getItem("CheckedToggle");
                if (CheckedToggle) {
                    this.view.flxNavGuideToggle.skin = "sknToggle0AC7C2OP66";
                    this.view.flxNavGuidetoogleRound.left = "20.5dp";
                } else {
                    this.view.flxNavGuideToggle.skin = "sknToggleGrey";
                    this.view.flxNavGuidetoogleRound.left = "7dp";
                }
            } catch (exception) {
                kony.print("Exception in preShow" + exception);
            }
        },
        /**
         * @function checkBiometricSupport
         * @description checking device supports biometric or not for custom login UI
         * @private
         * @return {boolean} true/false
         */
        checkBiometricSupport: function() {
            try {
                var status = parseInt(kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID).toString());
                if (status == 5000) {
                    gblBiometricSupport = true;
                    return true;
                }
                return false;
            } catch (exception) {
                kony.print("Exception in checkBiometricSupport" + exception);
            }
        },
        onClickBiometricToogle: function() {
            try {
                if (Utils.isNetworkAvailable()) {
                    var typeID = this.getBiometryTypeOfDevice();
                    isDeviceBiometricSupported = this.checkBiometricSupport();
                    var currFrm = kony.application.getCurrentForm();
                    if (!Utils.isNullorEmpty(currFrm) && currFrm.id === "frmUserProfile") {
                        if (!isDeviceBiometricSupported) {
                            currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"), kony.i18n.getLocalizedString("i18.clorox.BioMetricFinegrPrintText").replace(/Fingerprint/ig, typeID), kony.i18n.getLocalizedString("i18.clorox.ok"), this.onClickOk);
                            currFrm.flxGenericError.setVisibility(true);
                            return;
                        }
                        if (this.view.flxBiometricswtch.skin === "sknToggle0AC7C2OP66") {
                            currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.conformation"), kony.i18n.getLocalizedString("i18n.clorox.disableBiometric").replace(/Fingerprint/ig, typeID), kony.i18n.getLocalizedString("i18n.clorox.disable"), this.onClickEnbaleOrDisable, kony.i18n.getLocalizedString("i18n.clorox.cancel"), this.onClickCancel);
                            currFrm.flxGenericError.setVisibility(true);
                        } else {
                            currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.conformation"), kony.i18n.getLocalizedString("i18n.clorox.enableBiometric").replace(/Fingerprint/ig, typeID), kony.i18n.getLocalizedString("i18n.clorox.enable"), this.onClickEnbaleOrDisable, kony.i18n.getLocalizedString("i18n.clorox.cancel"), this.onClickCancel);
                            currFrm.flxGenericError.setVisibility(true);
                        }
                    }
                }
            } catch (exception) {
                kony.print("Exception in Biometrictoggle---" + exception);
            }
        },
        animationEnd: function() {
            if (this.view.flxBiometricswtch.skin === "sknToggle0AC7C2OP66") {
                this.view.flxBiometricswtch.skin = "sknToggleGrey";
                kony.store.removeItem("isUserBioMetricEnabled");
            } else {
                this.view.flxBiometricswtch.skin = "sknToggle0AC7C2OP66";
                kony.store.setItem('isUserBioMetricEnabled', true);
            }
        },
        logOutApp: function() {
            try {
                if (Utils.isNetworkAvailable()) {
                    kony.net.clearCookies();
                    myBusinessMap.clear();
                    chartDataMap.clear();
                    metricsOverview = [];
                    this.destroyForms();
                    gblDosDataArray = [];
                    dosDataBackHead = [];
                    if (deviceUtil.isiOS) {
                        isAlreadyLoggedIn = false;
                    }
                    notificationType = "";
                    var nav = new kony.mvc.Navigation("frmLogin");
                    nav.navigate();
                }
            } catch (e) {
                kony.print("Exception in logout " + e);
            }
        },
        destroyForms: function() {
            try {
                var formName = "";
                for (var i = 0; i < G_All_Forms.length; i++) {
                    if ((G_All_Forms[i] !== "frmUserProfile")) {
                        formName = G_All_Forms[i];
                    }
                    kony.application.destroyForm(formName);
                }
            } catch (e) {
                kony.print("Exception in destroy forms " + e);
            }
        },
        onClickEnbaleOrDisable: function() {
            try {
                var currFrm = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currFrm) && currFrm.id === "frmUserProfile") {
                    currFrm.flxGenericError.setVisibility(false);
                }
                if (this.view.flxBiometricswtch.skin === "sknToggle0AC7C2OP66") {
                    this.view.flxRoundToggle.animate(kony.ui.createAnimation({
                        "0": {
                            "left": "20.5dp",
                            "stepConfig": {
                                "timingFunction": kony.anim.LINEAR
                            }
                        },
                        "100": {
                            "left": "7dp",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    }), {
                        "delay": 0,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0.3
                    }, {
                        "animationEnd": this.animationEnd
                    });
                } else {
                    this.view.flxRoundToggle.animate(kony.ui.createAnimation({
                        "0": {
                            "left": "7dp",
                            "stepConfig": {
                                "timingFunction": kony.anim.LINEAR
                            }
                        },
                        "100": {
                            "left": "20.5dp",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    }), {
                        "delay": 0,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0.3
                    }, {
                        "animationEnd": this.animationEnd
                    });
                }
            } catch (exception) {
                kony.print("Exception in BiometrictoggleAnimation---" + exception);
            }
        },
        onClickCancel: function() {
            var currFrm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currFrm) && currFrm.id === "frmUserProfile") {
                currFrm.flxGenericError.setVisibility(false);
            }
            this.view.flxBiomerticMain.onClick = this.onClickBiometricToogle;
        },
        onClickOk: function() {
            var currFrm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currFrm) && currFrm.id === "frmUserProfile") {
                currFrm.flxGenericError.setVisibility(false);
            }
        },
        getBiometryTypeOfDevice: function() {
            try {
                var promptMessage = ""; //kony.i18n.getLocalizedString("i18.clorox.Signin.text");
                promptMessage += kony.i18n.getLocalizedString("i18n.clorox.fingerPrint");
                return promptMessage;
            } catch (exception) {
                kony.print("error at getBiometryTypeOfDevice---" + exception);
            }
        },
        onClickFeedbackToogle: function() {
            try {
                if (Utils.isNetworkAvailable()) {
                    if (deviceUtil.isAndroid()) {
                        this.view.flxFeedbackToogleMain.onClick = function() {};
                    }
                    if (this.view.flxFeedbackToggle.skin === "sknToggle0AC7C2OP66") {
                        this.view.flxFeedbacktoogleRound.animate(kony.ui.createAnimation({
                            "0": {
                                "left": "20.5dp",
                                "stepConfig": {
                                    "timingFunction": kony.anim.LINEAR
                                }
                            },
                            "100": {
                                "left": "7dp",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.3
                        }, {
                            "animationEnd": this.animationEndFeedback
                        });
                    } else {
                        this.view.flxFeedbacktoogleRound.animate(kony.ui.createAnimation({
                            "0": {
                                "left": "7dp",
                                "stepConfig": {
                                    "timingFunction": kony.anim.LINEAR
                                }
                            },
                            "100": {
                                "left": "20.5dp",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.3
                        }, {
                            "animationEnd": this.animationEndFeedback
                        });
                    }
                }
            } catch (exception) {
                kony.print("Exception in Feedbacktoggleanimation---" + exception);
            }
        },
        animationEndFeedback: function() {
            if (this.view.flxFeedbackToggle.skin === "sknToggle0AC7C2OP66") {
                this.view.flxFeedbackToggle.skin = "sknToggleGrey";
                isFeedbackEnable = false;
                kony.store.setItem("isUserDisableFeedback", false);
            } else {
                this.view.flxFeedbackToggle.skin = "sknToggle0AC7C2OP66";
                isFeedbackEnable = true;
                kony.store.setItem("isUserDisableFeedback", true);
            }
            this.view.flxFeedbackToogleMain.onClick = this.onClickFeedbackToogle;
        },
        showFeedbackPoup: function() {
            var currFrm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currFrm) && currFrm.id === "frmUserProfile") {
                currFrm.FeedbackPopup.setVisibility(true);
            }
        },
        onClickNavGuideToogle: function() {
            try {
                if (Utils.isNetworkAvailable()) {
                    this.view.flxNavGuideToogleMain.onClick = function() {};
                    if (this.view.flxNavGuideToggle.skin === "sknToggle0AC7C2OP66") {
                        this.view.flxNavGuidetoogleRound.animate(kony.ui.createAnimation({
                            "0": {
                                "left": "20.5dp",
                                "stepConfig": {
                                    "timingFunction": kony.anim.LINEAR
                                }
                            },
                            "100": {
                                "left": "7dp",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.3
                        }, {
                            "animationEnd": this.animationEndNavGuide
                        });
                    } else {
                        this.view.flxNavGuidetoogleRound.animate(kony.ui.createAnimation({
                            "0": {
                                "left": "7dp",
                                "stepConfig": {
                                    "timingFunction": kony.anim.LINEAR
                                }
                            },
                            "100": {
                                "left": "20.5dp",
                                "stepConfig": {
                                    "timingFunction": kony.anim.EASE
                                }
                            }
                        }), {
                            "delay": 0,
                            "iterationCount": 1,
                            "fillMode": kony.anim.FILL_MODE_FORWARDS,
                            "duration": 0.3
                        }, {
                            "animationEnd": this.animationEndNavGuide
                        });
                    }
                }
            } catch (exception) {
                kony.print("Exception in Feedbacktoggleanimation---" + exception);
            }
        },
        animationEndNavGuide: function() {
            if (this.view.flxNavGuideToggle.skin === "sknToggle0AC7C2OP66") {
                this.view.flxNavGuideToggle.skin = "sknToggleGrey";
                kony.store.setItem("CheckedToggle", false);
            } else {
                this.view.flxNavGuideToggle.skin = "sknToggle0AC7C2OP66";
                kony.store.setItem("CheckedToggle", true);
            }
            this.view.flxNavGuideToogleMain.onClick = this.onClickNavGuideToogle;
        },
    };
});
define("Global/Userprofile/UserprofileControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("Global/Userprofile/UserprofileController", ["Global/Userprofile/userUserprofileController", "Global/Userprofile/UserprofileControllerActions"], function() {
    var controller = require("Global/Userprofile/userUserprofileController");
    var actions = require("Global/Userprofile/UserprofileControllerActions");
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
