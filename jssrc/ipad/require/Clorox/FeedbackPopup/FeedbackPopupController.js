define("Clorox/FeedbackPopup/userFeedbackPopupController", function() {
    var Utils = require("UtilsCL");
    var deviceUtil = require("DeviceUtil");
    var AppConstants = require("AppConstants");
    var isClosePopup = false;
    var isSelecedRating = false;
    var isSelectedFeedbackReview = false;
    var rating;
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.applyBindings();
        },
        applyBindings: function() {
            try {
                this.view.preShow = this.preShow;
                this.view.flxFeedbackType.onClick = this.onShowSeg;
                this.view.segdropdown.onRowClick = this.segOnClick;
                this.view.flxClose.onClick = this.onClosePopup;
                this.view.btnSendFeedback.onClick = this.onSendFeedback;
                this.view.btnYes.onClick = this.onClickYes;
                this.view.btnNo.onClick = this.onClickNo;
                this.view.txtFeedback.onTextChange = this.onChangingText;
                this.view.txtFeedback.onTouchStart = this.hideSegdropdown;
                this.view.txtFeedback.maxTextLength = AppConstants.FEEDBACK_MAX;
                this.view.flxAlertPopupMain.onClick = function() {};
                for (var i = 1; i <= 5; i++) {
                    this.view["lblStar" + i].onTouchStart = this.feedbackRating.bind(this, i);
                }
            } catch (exception) {
                kony.print("Exception in applyBinding :: " + exception);
            }
        },
        preShow: function() {
            try {
                this.setSegData();
                this.view.lblSubject.text = kony.i18n.getLocalizedString("i18n.clorox.Subject");
                this.view.txtFeedback.placeholder = kony.i18n.getLocalizedString("i18n.clorox.txtFeedbackInput");
                this.view.flxSegdropdown.setVisibility(false);
                isSelecedRating = false;
                for (var i = 1; i <= 5; i++) {
                    this.view["lblStar" + i].skin = "sknStarWhite";
                }
                this.view.flxfeedbackInput.top = "133dp";
                this.view.flxfeedbackInput.height = "289dp";
                if (deviceUtil.isAndroidPhone()) {
                    this.view.lblClose.centerY = "53%";
                } else {
                    this.view.lblClose.centerY = "50%";
                }
                if (deviceUtil.isTablet()) {
                    this.view.btnSendFeedback.width = "30%";
                    this.view.flxDropDown.width = "10%";
                    this.view.flxSegdropdown.left = "54%";
                    this.view.flxSegdropdown.width = "38%";
                    this.view.flxSegdropdown.top = "107dp";
                    this.view.flxAlertPopup.width = "45%";
                    this.view.flxFeedbackType.width = "90%";
                    this.view.flxHeader.width = "90%";
                    this.view.lblFeedback.left = "0%";
                    this.view.flxfeedbackInput.width = "90%";
                    this.view.txtFeedback.width = "99%";
                    this.view.flxPopup.width = "76%";
                    this.view.lblStar1.left = "39%";
                } else if (deviceUtil.isMobile()) {
                    this.view.btnSendFeedback.width = "55%";
                    this.view.flxDropDown.width = "20%";
                }
                this.view.txtFeedback.text = "";
                if (this.view.txtFeedback.text.length < AppConstants.FEEDBACK_MIN) {
                    this.view.lblCharLimit.text = kony.i18n.getLocalizedString("i18n.clorox.CharacterLimit") + " " + "0" + " " + "/" + " " + AppConstants.FEEDBACK_MAX;
                }
            } catch (exception) {
                kony.print("Exception in preShow :: " + exception);
            }
        },
        hideDropdown: function() {
            try {
                this.view.flxSegdropdown.setVisibility(false);
                this.view.flxMain.onClick = function() {};
            } catch (e) {
                kony.print("Exception in hideDropDown " + e);
            }
        },
        hideSegdropdown: function() {
            try {
                this.view.flxSegdropdown.setVisibility(false);
            } catch (e) {
                kony.print("Exception in hideSegdropdown " + e);
            }
        },
        onShowSeg: function() {
            try {
                if (this.view.flxSegdropdown.isVisible === true) {
                    this.view.flxSegdropdown.setVisibility(false);
                } else {
                    this.view.flxSegdropdown.setVisibility(true);
                    this.view.flxMain.onClick = this.hideDropdown;
                }
            } catch (e) {
                kony.print("Exception in onShowSeg " + e);
            }
        },
        setSegData: function() {
            try {
                var masterDataArray = [];
                var res = gblAppConfig.UpgradeInfo[AppConstants.FEEDBACK_VALUES];
                var feedbackValues = res.split(",");
                for (var i = 0; i < feedbackValues.length; i++) {
                    var dataToSet = {
                        "lblFeedbackSelect": Utils.trimSpaces(feedbackValues[i])
                    };
                    masterDataArray.push(dataToSet);
                }
                this.view.segdropdown.removeAll();
                this.view.segdropdown.setData(masterDataArray);
            } catch (exception) {
                kony.print("Exception in setSegData :: " + exception);
            }
        },
        segOnClick: function() {
            try {
                var selectedData = this.view.segdropdown.selectedRowItems[0];
                this.view.lblSubject.text = selectedData.lblFeedbackSelect;
                this.view.flxSegdropdown.setVisibility(false);
                if (this.view.lblSubject.text === "Review/Feedback") {
                    this.view.flxStar.setVisibility(true);
                    this.view.flxfeedbackInput.top = "172dp";
                    this.view.flxfeedbackInput.height = "249dp";
                    isSelectedFeedbackReview = true;
                } else {
                    this.view.flxStar.setVisibility(false);
                    this.view.flxfeedbackInput.top = "133dp";
                    this.view.flxfeedbackInput.height = "289dp";
                    for (var i = 1; i <= 5; i++) {
                        this.view["lblStar" + i].skin = "sknStarWhite";
                    }
                    isSelectedFeedbackReview = false;
                }
            } catch (exception) {
                kony.print("Exception in segOnClick :: " + exception);
            }
        },
        onClosePopup: function() {
            try {
                isClosePopup = true;
                this.view.lblDescriptionMsg.text = kony.i18n.getLocalizedString("i18n.clorox.FeedbackDismssStatusMsg");
                this.view.btnYes.text = kony.i18n.getLocalizedString("i18n.clorox.yes");
                this.view.btnNo.text = kony.i18n.getLocalizedString("i18n.clorox.no");
                this.view.btnNo.setVisibility(true);
                this.view.flxSegdropdown.setVisibility(false);
                this.view.flxAlertPopupMain.setVisibility(true);
            } catch (e) {
                kony.print("Exception in onClosePopup :: " + e);
            }
        },
        onSendFeedback: function() {
            try {
                if ((this.view.lblSubject.text === kony.i18n.getLocalizedString("i18n.clorox.Subject")) || (this.view.txtFeedback.text.length < AppConstants.FEEDBACK_MIN) || (isSelectedFeedbackReview === true && isSelecedRating === false)) {
                    this.showValidationMsg();
                } else {
                    Utils.showLoadingIndicator();
                    var inputParam = {
                        "feedback_comment": this.view.txtFeedback.text,
                        "subject": this.view.lblSubject.text,
                        "rating": rating
                    }
                    GlobalServices.getOverview({}, FeedBack.serviceName, FeedBack.updateFeedback, inputParam, this.feedbackSuccessCallBack, this.feedbackFailureCallBack);
                }
                this.view.flxSegdropdown.setVisibility(false);
            } catch (exception) {
                kony.print("Exception in onSendFeedback :: " + JSON.stringify(exception));
            }
        },
        feedbackSuccessCallBack: function(response) {
            Utils.hideLoadingIndicator();
            try {
                this.view.flxPopup.setVisibility(false);
                this.view.lblDescriptionMsg.text = kony.i18n.getLocalizedString("i18n.clorox.FeedbackStatusSuccessMsg");
                this.view.btnYes.text = kony.i18n.getLocalizedString("i18.clorox.ok");
                this.view.btnNo.setVisibility(false);
                this.view.flxAlertPopupMain.setVisibility(true);
                this.view.flxSegdropdown.setVisibility(false);
                kony.print("Inside feedback Success ::" + JSON.stringify(response));
            } catch (exception) {
                kony.print("Exception in feedbackSuccessCallBack :: " + JSON.stringify(exception));
            }
        },
        feedbackFailureCallBack: function(error) {
            Utils.hideLoadingIndicator();
            kony.print("Inside feedback failure ::" + JSON.stringify(error));
            this.view.lblDescriptionMsg.text = "Unable to submit the feedback. Please try again later."; //kony.i18n.getLocalizedString("i18n.clorox.PleaseSelectSubject");
            this.view.btnYes.text = kony.i18n.getLocalizedString("i18.clorox.ok");
            this.view.btnNo.setVisibility(false);
            this.view.flxAlertPopupMain.setVisibility(true);
        },
        onClickYes: function() {
            try {
                if ((this.view.lblSubject.text === kony.i18n.getLocalizedString("i18n.clorox.Subject") || this.view.txtFeedback.text.length < AppConstants.FEEDBACK_MIN || (isSelectedFeedbackReview === true && isSelecedRating === false)) && isClosePopup !== true) {
                    this.view.flxAlertPopupMain.setVisibility(false);
                    return;
                }
                if ((this.view.lblSubject.text !== kony.i18n.getLocalizedString("i18n.clorox.Subject") && this.view.txtFeedback.text.length >= AppConstants.FEEDBACK_MIN) || isClosePopup === true) {
                    this.view.flxAlertPopupMain.setVisibility(false);
                    var currFrm = kony.application.getCurrentForm();
                    if (!Utils.isNullorEmpty(currFrm)) {
                        currFrm.FeedbackPopup.setVisibility(false);
                    }
                    this.view.flxPopup.setVisibility(true);
                    isClosePopup = false;
                    isSelectedFeedbackReview = false;
                    isSelecedRating = false;
                    this.view.txtFeedback.text = "";
                    this.view.txtFeedback.placeholder = kony.i18n.getLocalizedString("i18n.clorox.txtFeedbackInput");
                    this.view.lblSubject.text = kony.i18n.getLocalizedString("i18n.clorox.Subject");
                    this.view.lblCharLimit.text = kony.i18n.getLocalizedString("i18n.clorox.CharacterLimit") + " " + this.view.txtFeedback.text.length + " " + "/" + " " + AppConstants.FEEDBACK_MAX;
                    this.view.flxSegdropdown.setVisibility(false);
                    this.view.flxStar.setVisibility(false);
                    this.view.flxfeedbackInput.top = "133dp";
                    this.view.flxfeedbackInput.height = "289dp";
                    for (var i = 1; i <= 5; i++) {
                        this.view["lblStar" + i].skin = "sknStarWhite";
                    }
                }
            } catch (e) {
                kony.print("Exception in onClickYes" + e);
            }
        },
        onClickNo: function() {
            try {
                this.view.flxAlertPopupMain.setVisibility(false);
                this.view.flxSegdropdown.setVisibility(false);
                isClosePopup = false;
            } catch (e) {
                kony.print("Exception in onClickNo" + e);
            }
        },
        showValidationMsg() {
            try {
                if ((this.view.lblSubject.text === kony.i18n.getLocalizedString("i18n.clorox.Subject")) || (this.view.lblSubject.text === kony.i18n.getLocalizedString("i18n.clorox.Subject") && this.view.txtFeedback.text.length < AppConstants.FEEDBACK_MIN)) {
                    this.view.lblDescriptionMsg.text = kony.i18n.getLocalizedString("i18n.clorox.PleaseSelectSubject");
                    this.view.btnYes.text = kony.i18n.getLocalizedString("i18.clorox.ok");
                    this.view.btnNo.setVisibility(false);
                    this.view.flxAlertPopupMain.setVisibility(true);
                } else if (this.view.txtFeedback.text.length < AppConstants.FEEDBACK_MIN) {
                    this.view.lblDescriptionMsg.text = kony.i18n.getLocalizedString("i18n.clorox.PleaseEnterMinText");
                    this.view.btnYes.text = kony.i18n.getLocalizedString("i18.clorox.ok");
                    this.view.btnNo.setVisibility(false);
                    this.view.flxAlertPopupMain.setVisibility(true);
                }
                if (isSelectedFeedbackReview === true && isSelecedRating === false) {
                    this.view.lblDescriptionMsg.text = kony.i18n.getLocalizedString("i18n.clorox.PleaseSelectRating");
                    this.view.btnYes.text = kony.i18n.getLocalizedString("i18.clorox.ok");
                    this.view.btnNo.setVisibility(false);
                    this.view.flxAlertPopupMain.setVisibility(true);
                }
            } catch (e) {
                kony.print("Exception in showValidationMsg" + e);
            }
        },
        onChangingText: function() {
            this.view.lblCharLimit.text = kony.i18n.getLocalizedString("i18n.clorox.CharacterLimit") + " " + this.view.txtFeedback.text.length + " " + "/" + " " + AppConstants.FEEDBACK_MAX;
        },
        feedbackRating: function(selectedValue) {
            try {
                rating = selectedValue;
                for (var i = 1; i <= selectedValue; i++) {
                    this.view["lblStar" + i].skin = "sknLblStar0AC7C2";
                    if (i >= 1) {
                        isSelecedRating = true;
                    }
                }
                if (selectedValue !== 5) {
                    for (var s = 5; s > selectedValue; s--) {
                        this.view["lblStar" + s].skin = "sknStarWhite";
                        if (s === 0) {
                            isSelecedRating = false;
                        }
                    }
                }
            } catch (exception) {
                kony.print("Exception in feedbackRating :: " + exception);
            }
        }
    };
});
define("Clorox/FeedbackPopup/FeedbackPopupControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("Clorox/FeedbackPopup/FeedbackPopupController", ["Clorox/FeedbackPopup/userFeedbackPopupController", "Clorox/FeedbackPopup/FeedbackPopupControllerActions"], function() {
    var controller = require("Clorox/FeedbackPopup/userFeedbackPopupController");
    var actions = require("Clorox/FeedbackPopup/FeedbackPopupControllerActions");
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
