define(function() {
    return function(controller) {
        var GenericError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "GenericError",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTransparent",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "GenericError"), extendConfig({}, controller.args[1], "GenericError"), extendConfig({}, controller.args[2], "GenericError"));
        GenericError.setDefaultUnit(kony.flex.DP);
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
        var flxAlert = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "48%",
            "clipBounds": true,
            "id": "flxAlert",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxErrorWhiteBgRound",
            "width": "280dp",
            "zIndex": 1
        }, controller.args[0], "flxAlert"), extendConfig({}, controller.args[1], "flxAlert"), extendConfig({}, controller.args[2], "flxAlert"));
        flxAlert.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "skin": "sknLblBule",
            "textStyle": {},
            "top": "23dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTitle"));
        var flxDesc = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxDesc",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "flxDesc"), extendConfig({}, controller.args[1], "flxDesc"), extendConfig({}, controller.args[2], "flxDesc"));
        flxDesc.setDefaultUnit(kony.flex.DP);
        var lblDescription = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblBlack60",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDescription"));
        flxDesc.add(lblDescription);
        var flxBottom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "45dp",
            "id": "flxBottom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "19dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxBottom"), extendConfig({}, controller.args[1], "flxBottom"), extendConfig({}, controller.args[2], "flxBottom"));
        flxBottom.setDefaultUnit(kony.flex.DP);
        var btnyes = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnNoYes",
            "height": "100%",
            "id": "btnyes",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknBtnNoYes",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnyes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnyes"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnyes"));
        var btnNo = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnNoYes",
            "height": "100%",
            "id": "btnNo",
            "isVisible": true,
            "right": "8%",
            "skin": "sknBtnNoYes",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNo"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnNo"));
        flxBottom.add(btnyes, btnNo);
        flxAlert.add(lblTitle, flxDesc, flxBottom);
        flxMain.add(flxAlert);
        GenericError.add(flxMain);
        return GenericError;
    }
})