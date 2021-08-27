define(function() {
    return function(controller) {
        var AppGuide = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "AppGuide",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxAppGuideD7E2EC",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "AppGuide"), extendConfig({}, controller.args[1], "AppGuide"), extendConfig({}, controller.args[2], "AppGuide"));
        AppGuide.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlxAppGuideD7E2EC",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "skin": "sknFlxAppGuideD7E2EC",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var lblCross = new kony.ui.Label(extendConfig({
            "centerY": "70%",
            "id": "lblCross",
            "isVisible": true,
            "right": "24dp",
            "skin": "sknLblCrossIcon",
            "text": "l",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCross"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCross"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCross"));
        flxHeader.add(lblCross);
        var flxImageGallery = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxImageGallery",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlxAppGuideD7E2EC",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxImageGallery"), extendConfig({}, controller.args[1], "flxImageGallery"), extendConfig({}, controller.args[2], "flxImageGallery"));
        flxImageGallery.setDefaultUnit(kony.flex.DP);
        var segImages = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "ImageGuide": "scrn1.png"
            }],
            "groupCells": false,
            "height": "95%",
            "id": "segImages",
            "isVisible": true,
            "left": 0,
            "needPageIndicator": true,
            "pageOffDotImage": "dotinactive.png",
            "pageOnDotImage": "dotactive.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegDefinitionsFFFFFF",
            "rowSkin": "sknSegDefinitionsFFFFFF",
            "rowTemplate": "flxAppGuide",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": 0,
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "widgetDataMap": {
                "ImageGuide": "ImageGuide",
                "flxAppGuide": "flxAppGuide"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segImages"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segImages"), extendConfig({}, controller.args[2], "segImages"));
        flxImageGallery.add(segImages);
        flxMain.add(flxHeader, flxImageGallery);
        var flxNavGuideAlert = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNavGuideAlert",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNavGuideAlert"), extendConfig({}, controller.args[1], "flxNavGuideAlert"), extendConfig({}, controller.args[2], "flxNavGuideAlert"));
        flxNavGuideAlert.setDefaultUnit(kony.flex.DP);
        var flxNavAlertPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxNavAlertPopup",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxErrorWhiteBgRound",
            "width": "75%",
            "zIndex": 1
        }, controller.args[0], "flxNavAlertPopup"), extendConfig({}, controller.args[1], "flxNavAlertPopup"), extendConfig({}, controller.args[2], "flxNavAlertPopup"));
        flxNavAlertPopup.setDefaultUnit(kony.flex.DP);
        var lblNavTitle = new kony.ui.Label(extendConfig({
            "id": "lblNavTitle",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLb1C214E24Px",
            "text": kony.i18n.getLocalizedString("i18.clorox.NavigationGuide"),
            "textStyle": {},
            "top": "15dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblNavTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNavTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNavTitle"));
        var lblNavDesc = new kony.ui.Label(extendConfig({
            "id": "lblNavDesc",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblBlackNormal16px",
            "text": kony.i18n.getLocalizedString("i18.clorox.NavConfirm"),
            "textStyle": {},
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblNavDesc"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNavDesc"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNavDesc"));
        var flxCheck = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCheck",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "16dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "24dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxCheck"), extendConfig({}, controller.args[1], "flxCheck"), extendConfig({}, controller.args[2], "flxCheck"));
        flxCheck.setDefaultUnit(kony.flex.DP);
        var lblContent = new kony.ui.Label(extendConfig({
            "id": "lblContent",
            "isVisible": true,
            "left": "32dp",
            "skin": "sknLblContent",
            "text": kony.i18n.getLocalizedString("i18.clorox.NavShowMe"),
            "textStyle": {},
            "top": "1dp",
            "width": "84.62%",
            "zIndex": 1
        }, controller.args[0], "lblContent"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContent"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblContent"));
        var lblSelect = new kony.ui.Label(extendConfig({
            "id": "lblSelect",
            "isVisible": true,
            "left": 0,
            "skin": "sknLblSelect",
            "text": "p",
            "textStyle": {},
            "top": 0,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSelect"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelect"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSelect"));
        flxCheck.add(lblContent, lblSelect);
        var flxNavPopupButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "12dp",
            "clipBounds": true,
            "id": "flxNavPopupButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "17dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxNavPopupButtons"), extendConfig({}, controller.args[1], "flxNavPopupButtons"), extendConfig({}, controller.args[2], "flxNavPopupButtons"));
        flxNavPopupButtons.setDefaultUnit(kony.flex.DP);
        var btnYes = new kony.ui.Button(extendConfig({
            "bottom": "0dp",
            "focusSkin": "sknBtnYesNo1C214EFont",
            "height": "43dp",
            "id": "btnYes",
            "isVisible": true,
            "right": "40dp",
            "skin": "sknBtnYesNo1C214EFont",
            "text": kony.i18n.getLocalizedString("i18n.clorox.yes"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnYes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnYes"), extendConfig({}, controller.args[2], "btnYes"));
        var btnNo = new kony.ui.Button(extendConfig({
            "bottom": "0dp",
            "focusSkin": "sknBtnYesNo1C214EFont",
            "height": "43dp",
            "id": "btnNo",
            "isVisible": true,
            "left": "125dp",
            "skin": "sknBtnYesNo1C214EFont",
            "text": kony.i18n.getLocalizedString("i18n.clorox.no"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNo"), extendConfig({}, controller.args[2], "btnNo"));
        flxNavPopupButtons.add(btnYes, btnNo);
        flxNavAlertPopup.add(lblNavTitle, lblNavDesc, flxCheck, flxNavPopupButtons);
        flxNavGuideAlert.add(flxNavAlertPopup);
        AppGuide.add(flxMain, flxNavGuideAlert);
        return AppGuide;
    }
})