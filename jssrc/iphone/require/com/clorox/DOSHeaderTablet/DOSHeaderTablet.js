define(function() {
    return function(controller) {
        var DOSHeaderTablet = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "DOSHeaderTablet",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "DOSHeaderTablet"), extendConfig({}, controller.args[1], "DOSHeaderTablet"), extendConfig({}, controller.args[2], "DOSHeaderTablet"));
        DOSHeaderTablet.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTop"), extendConfig({}, controller.args[1], "flxTop"), extendConfig({}, controller.args[2], "flxTop"));
        flxTop.setDefaultUnit(kony.flex.DP);
        var lblDate = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblDate",
            "isVisible": true,
            "skin": "sknLblFFFFSSPB24px",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDate"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDate"));
        flxTop.add(lblDate);
        var flxLabelDef = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLabelDef",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLabelDef"), extendConfig({}, controller.args[1], "flxLabelDef"), extendConfig({}, controller.args[2], "flxLabelDef"));
        flxLabelDef.setDefaultUnit(kony.flex.DP);
        var lblTimeElapsed = new kony.ui.Label(extendConfig({
            "id": "lblTimeElapsed",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl94A3B3SSPL14px87",
            "text": kony.i18n.getLocalizedString("i18.clorox.timeElapsed"),
            "textStyle": {},
            "top": "2dp",
            "width": "22%",
            "zIndex": 1
        }, controller.args[0], "lblTimeElapsed"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTimeElapsed"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTimeElapsed"));
        var lblWorkDaysRemaining = new kony.ui.Label(extendConfig({
            "id": "lblWorkDaysRemaining",
            "isVisible": true,
            "left": "25%",
            "skin": "sknLbl94A3B3SSPL14px87",
            "text": kony.i18n.getLocalizedString("i18.clorox.workDaysRemaining"),
            "textStyle": {},
            "top": "2dp",
            "width": "22%",
            "zIndex": 1
        }, controller.args[0], "lblWorkDaysRemaining"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWorkDaysRemaining"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblWorkDaysRemaining"));
        var lblNoOfWorkDays = new kony.ui.Label(extendConfig({
            "id": "lblNoOfWorkDays",
            "isVisible": true,
            "left": "50%",
            "skin": "sknLbl94A3B3SSPL14px87",
            "text": kony.i18n.getLocalizedString("i18.clorox.nfWorkDays"),
            "textStyle": {},
            "top": "2dp",
            "width": "22%",
            "zIndex": 1
        }, controller.args[0], "lblNoOfWorkDays"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoOfWorkDays"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNoOfWorkDays"));
        var lblNoOfYAWorkDays = new kony.ui.Label(extendConfig({
            "id": "lblNoOfYAWorkDays",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl94A3B3SSPL14px87",
            "text": kony.i18n.getLocalizedString("i18.clorox.yaNFWorkdays"),
            "textStyle": {},
            "top": "2dp",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "lblNoOfYAWorkDays"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoOfYAWorkDays"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNoOfYAWorkDays"));
        flxLabelDef.add(lblTimeElapsed, lblWorkDaysRemaining, lblNoOfWorkDays, lblNoOfYAWorkDays);
        var flxHeading = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeading"), extendConfig({}, controller.args[1], "flxHeading"), extendConfig({}, controller.args[2], "flxHeading"));
        flxHeading.setDefaultUnit(kony.flex.DP);
        var lblHeadName = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblHeadName",
            "isVisible": true,
            "skin": "sknLblFFFFFSSPB16px100",
            "textStyle": {},
            "top": "0dp",
            "width": "98%",
            "zIndex": 1
        }, controller.args[0], "lblHeadName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeadName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblHeadName"));
        flxHeading.add(lblHeadName);
        var flxSpace = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8dp",
            "id": "flxSpace",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSpace"), extendConfig({}, controller.args[1], "flxSpace"), extendConfig({}, controller.args[2], "flxSpace"));
        flxSpace.setDefaultUnit(kony.flex.DP);
        flxSpace.add();
        flxMain.add(flxTop, flxLabelDef, flxHeading, flxSpace);
        DOSHeaderTablet.add(flxMain);
        return DOSHeaderTablet;
    }
})