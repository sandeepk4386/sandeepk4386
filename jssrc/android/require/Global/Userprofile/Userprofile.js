define(function() {
    return function(controller) {
        var Userprofile = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Userprofile",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "Userprofile"), extendConfig({}, controller.args[1], "Userprofile"), extendConfig({}, controller.args[2], "Userprofile"));
        Userprofile.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTransparent",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "11%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxUserProfile = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxUserProfile",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "36dp",
            "skin": "slFbox",
            "top": "0%",
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flxUserProfile"), extendConfig({}, controller.args[1], "flxUserProfile"), extendConfig({}, controller.args[2], "flxUserProfile"));
        flxUserProfile.setDefaultUnit(kony.flex.DP);
        var lblProfileIcon = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblProfileIcon",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknUserprofile",
            "text": "f",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblProfileIcon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblProfileIcon"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblProfileIcon"));
        flxUserProfile.add(lblProfileIcon);
        var lblUserProfile = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "52dp",
            "id": "lblUserProfile",
            "isVisible": true,
            "left": "31dp",
            "skin": "sknlblWhiteBold257",
            "text": kony.i18n.getLocalizedString("i18.clorox.UserProfile"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "67%",
            "zIndex": 1
        }, controller.args[0], "lblUserProfile"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserProfile"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUserProfile"));
        flxHeader.add(flxUserProfile, lblUserProfile);
        var flxBody = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxBody",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "21%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBody"), extendConfig({}, controller.args[1], "flxBody"), extendConfig({}, controller.args[2], "flxBody"));
        flxBody.setDefaultUnit(kony.flex.DP);
        var flxName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxName",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxName"), extendConfig({}, controller.args[1], "flxName"), extendConfig({}, controller.args[2], "flxName"));
        flxName.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "lblName",
            "isVisible": true,
            "left": "31dp",
            "skin": "sknlblWhite",
            "text": kony.i18n.getLocalizedString("i18.clorox.Name"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "lblName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblName"));
        var lblUserName = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "lblUserName",
            "isVisible": true,
            "right": "36dp",
            "skin": "sknlblWhiteLite",
            "text": "Chau Banks",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "64%",
            "zIndex": 1
        }, controller.args[0], "lblUserName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUserName"));
        flxName.add(lblName, lblUserName);
        var flxEmail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxEmail",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEmail"), extendConfig({}, controller.args[1], "flxEmail"), extendConfig({}, controller.args[2], "flxEmail"));
        flxEmail.setDefaultUnit(kony.flex.DP);
        var lblEmail = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "lblEmail",
            "isVisible": true,
            "left": "31dp",
            "skin": "sknlblWhite",
            "text": kony.i18n.getLocalizedString("i18.clorox.Email"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "lblEmail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmail"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEmail"));
        var lblUserEmail = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "lblUserEmail",
            "isVisible": true,
            "right": "36dp",
            "skin": "sknlblWhiteLite",
            "text": "c.banks@clorox.com",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "64%",
            "zIndex": 1
        }, controller.args[0], "lblUserEmail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserEmail"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUserEmail"));
        flxEmail.add(lblEmail, lblUserEmail);
        var flxRole = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxRole",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRole"), extendConfig({}, controller.args[1], "flxRole"), extendConfig({}, controller.args[2], "flxRole"));
        flxRole.setDefaultUnit(kony.flex.DP);
        var lblRole = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "lblRole",
            "isVisible": true,
            "left": "31dp",
            "skin": "sknlblWhite",
            "text": kony.i18n.getLocalizedString("i18.clorox.Role"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "lblRole"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRole"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRole"));
        var lblUserRole = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "lblUserRole",
            "isVisible": true,
            "right": "36dp",
            "skin": "sknlblWhiteLite",
            "text": "User’s Occupation Title",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblUserRole"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserRole"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUserRole"));
        flxRole.add(lblRole, lblUserRole);
        var flxBiometric = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxBiometric",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBiometric"), extendConfig({}, controller.args[1], "flxBiometric"), extendConfig({}, controller.args[2], "flxBiometric"));
        flxBiometric.setDefaultUnit(kony.flex.DP);
        var lblBiometric = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "lblBiometric",
            "isVisible": true,
            "left": "32dp",
            "skin": "sknlblWhite",
            "text": kony.i18n.getLocalizedString("i18.clorox.Biometric"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblBiometric"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBiometric"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblBiometric"));
        var flxBiomerticMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxBiomerticMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "36dp",
            "skin": "sknflxBioMain",
            "width": "42dp",
            "zIndex": 1
        }, controller.args[0], "flxBiomerticMain"), extendConfig({}, controller.args[1], "flxBiomerticMain"), extendConfig({}, controller.args[2], "flxBiomerticMain"));
        flxBiomerticMain.setDefaultUnit(kony.flex.DP);
        var flxBiometricswtch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "12dp",
            "id": "flxBiometricswtch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleGrey",
            "width": "32dp",
            "zIndex": 1
        }, controller.args[0], "flxBiometricswtch"), extendConfig({}, controller.args[1], "flxBiometricswtch"), extendConfig({}, controller.args[2], "flxBiometricswtch"));
        flxBiometricswtch.setDefaultUnit(kony.flex.DP);
        flxBiometricswtch.add();
        var flxRoundToggle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxRoundToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleRound0AC7C2",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxRoundToggle"), extendConfig({}, controller.args[1], "flxRoundToggle"), extendConfig({}, controller.args[2], "flxRoundToggle"));
        flxRoundToggle.setDefaultUnit(kony.flex.DP);
        flxRoundToggle.add();
        flxBiomerticMain.add(flxBiometricswtch, flxRoundToggle);
        flxBiometric.add(lblBiometric, flxBiomerticMain);
        var flxFeedback = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxFeedback",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFeedback"), extendConfig({}, controller.args[1], "flxFeedback"), extendConfig({}, controller.args[2], "flxFeedback"));
        flxFeedback.setDefaultUnit(kony.flex.DP);
        var lblFeedback = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "lblFeedback",
            "isVisible": true,
            "left": "32dp",
            "skin": "sknlblWhite",
            "text": kony.i18n.getLocalizedString("i18n.clorox.feedbackTab"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblFeedback"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFeedback"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFeedback"));
        var flxFeedbackToogleMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxFeedbackToogleMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "36dp",
            "skin": "sknflxBioMain",
            "width": "42dp",
            "zIndex": 1
        }, controller.args[0], "flxFeedbackToogleMain"), extendConfig({}, controller.args[1], "flxFeedbackToogleMain"), extendConfig({}, controller.args[2], "flxFeedbackToogleMain"));
        flxFeedbackToogleMain.setDefaultUnit(kony.flex.DP);
        var flxFeedbackToggle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "12dp",
            "id": "flxFeedbackToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleGrey",
            "width": "32dp",
            "zIndex": 1
        }, controller.args[0], "flxFeedbackToggle"), extendConfig({}, controller.args[1], "flxFeedbackToggle"), extendConfig({}, controller.args[2], "flxFeedbackToggle"));
        flxFeedbackToggle.setDefaultUnit(kony.flex.DP);
        flxFeedbackToggle.add();
        var flxFeedbacktoogleRound = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxFeedbacktoogleRound",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleRound0AC7C2",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxFeedbacktoogleRound"), extendConfig({}, controller.args[1], "flxFeedbacktoogleRound"), extendConfig({}, controller.args[2], "flxFeedbacktoogleRound"));
        flxFeedbacktoogleRound.setDefaultUnit(kony.flex.DP);
        flxFeedbacktoogleRound.add();
        flxFeedbackToogleMain.add(flxFeedbackToggle, flxFeedbacktoogleRound);
        flxFeedback.add(lblFeedback, flxFeedbackToogleMain);
        var flxNavGuide = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxNavGuide",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNavGuide"), extendConfig({}, controller.args[1], "flxNavGuide"), extendConfig({}, controller.args[2], "flxNavGuide"));
        flxNavGuide.setDefaultUnit(kony.flex.DP);
        var lblNavGuide = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "lblNavGuide",
            "isVisible": true,
            "left": "32dp",
            "skin": "sknlblWhite",
            "text": kony.i18n.getLocalizedString("i18.clorox.NavigationGuide"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblNavGuide"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNavGuide"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNavGuide"));
        var flxNavGuideToogleMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxNavGuideToogleMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "36dp",
            "skin": "sknflxBioMain",
            "width": "42dp",
            "zIndex": 1
        }, controller.args[0], "flxNavGuideToogleMain"), extendConfig({}, controller.args[1], "flxNavGuideToogleMain"), extendConfig({}, controller.args[2], "flxNavGuideToogleMain"));
        flxNavGuideToogleMain.setDefaultUnit(kony.flex.DP);
        var flxNavGuideToggle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "12dp",
            "id": "flxNavGuideToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleGrey",
            "width": "32dp",
            "zIndex": 1
        }, controller.args[0], "flxNavGuideToggle"), extendConfig({}, controller.args[1], "flxNavGuideToggle"), extendConfig({}, controller.args[2], "flxNavGuideToggle"));
        flxNavGuideToggle.setDefaultUnit(kony.flex.DP);
        flxNavGuideToggle.add();
        var flxNavGuidetoogleRound = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxNavGuidetoogleRound",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleRound0AC7C2",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxNavGuidetoogleRound"), extendConfig({}, controller.args[1], "flxNavGuidetoogleRound"), extendConfig({}, controller.args[2], "flxNavGuidetoogleRound"));
        flxNavGuidetoogleRound.setDefaultUnit(kony.flex.DP);
        flxNavGuidetoogleRound.add();
        flxNavGuideToogleMain.add(flxNavGuideToggle, flxNavGuidetoogleRound);
        flxNavGuide.add(lblNavGuide, flxNavGuideToogleMain);
        flxBody.add(flxName, flxEmail, flxRole, flxBiometric, flxFeedback, flxNavGuide);
        var flxBottom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "3%",
            "clipBounds": true,
            "height": "14%",
            "id": "flxBottom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "reverseLayoutDirection": false,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBottom"), extendConfig({}, controller.args[1], "flxBottom"), extendConfig({}, controller.args[2], "flxBottom"));
        flxBottom.setDefaultUnit(kony.flex.DP);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1.50%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnSendfeedback = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnbroder0ac7c2",
            "height": "95%",
            "id": "btnSendfeedback",
            "isVisible": true,
            "left": "8.50%",
            "skin": "sknBtnbroder0ac7c2",
            "text": kony.i18n.getLocalizedString("i18n.clorox.sendfeedback"),
            "top": "0dp",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "btnSendfeedback"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSendfeedback"), extendConfig({}, controller.args[2], "btnSendfeedback"));
        var btnUserLogout = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnbroder0ac7c2",
            "height": "95%",
            "id": "btnUserLogout",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknBtnbroder0ac7c2",
            "text": kony.i18n.getLocalizedString("i18.clorox.Logout"),
            "top": "0dp",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "btnUserLogout"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnUserLogout"), extendConfig({}, controller.args[2], "btnUserLogout"));
        flxButtons.add(btnSendfeedback, btnUserLogout);
        var flxLblVersion = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30%",
            "id": "flxLblVersion",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "16%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLblVersion"), extendConfig({}, controller.args[1], "flxLblVersion"), extendConfig({}, controller.args[2], "flxLblVersion"));
        flxLblVersion.setDefaultUnit(kony.flex.DP);
        var lblVersion = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "lblVersion",
            "isVisible": true,
            "skin": "sknlblWhiteLite",
            "text": kony.i18n.getLocalizedString("i18.clorox.lbl_Version"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "55%",
            "zIndex": 1
        }, controller.args[0], "lblVersion"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVersion"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblVersion"));
        flxLblVersion.add(lblVersion);
        flxBottom.add(flxButtons, flxLblVersion);
        flxMain.add(flxHeader, flxBody, flxBottom);
        Userprofile.add(flxMain);
        return Userprofile;
    }
})