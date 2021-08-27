define(function() {
    return function(controller) {
        var TopBottomNavigation = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "TopBottomNavigation",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "TopBottomNavigation"), extendConfig({}, controller.args[1], "TopBottomNavigation"), extendConfig({}, controller.args[2], "TopBottomNavigation"));
        TopBottomNavigation.setDefaultUnit(kony.flex.DP);
        var flxCmpMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxTransparent",
            "height": "100%",
            "id": "flxCmpMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCmpMain"), extendConfig({}, controller.args[1], "flxCmpMain"), extendConfig({}, controller.args[2], "flxCmpMain"));
        flxCmpMain.setDefaultUnit(kony.flex.DP);
        var flxMainBgToastNotification = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainBgToastNotification",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainBgToastNotification"), extendConfig({}, controller.args[1], "flxMainBgToastNotification"), extendConfig({}, controller.args[2], "flxMainBgToastNotification"));
        flxMainBgToastNotification.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "54dp",
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "-100dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxInnerContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxInnerContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBackgrounds121212",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxInnerContainer"), extendConfig({}, controller.args[1], "flxInnerContainer"), extendConfig({}, controller.args[2], "flxInnerContainer"));
        flxInnerContainer.setDefaultUnit(kony.flex.DP);
        var lblNewNotifications = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblNewNotifications",
            "isVisible": true,
            "left": "16dp",
            "maxNumberOfLines": 2,
            "skin": "sknLblffffffOpa60RobotoReg14Px",
            "text": "MTD Orders vs YA Index exceeds 100",
            "textStyle": {},
            "top": "0dp",
            "width": "75%",
            "zIndex": 5
        }, controller.args[0], "lblNewNotifications"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNewNotifications"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNewNotifications"));
        var btnView = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnBG121212FC0AC7C2",
            "height": "100%",
            "id": "btnView",
            "isVisible": false,
            "right": "8dp",
            "skin": "sknBtnBG121212FC0AC7C2",
            "text": kony.i18n.getLocalizedString("i18n.clorox.view"),
            "width": "69dp",
            "zIndex": 1
        }, controller.args[0], "btnView"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnView"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnView"));
        var lblView = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblView",
            "isVisible": true,
            "right": "8dp",
            "skin": "sknLbl0ac7c216pxNormal",
            "text": kony.i18n.getLocalizedString("i18n.clorox.view"),
            "textStyle": {
                "letterSpacing": 1
            },
            "width": "69dp",
            "zIndex": 1
        }, controller.args[0], "lblView"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblView"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblView"));
        flxInnerContainer.add(lblNewNotifications, btnView, lblView);
        var flxLine = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxLineFFFFFFOpa12",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLine"), extendConfig({}, controller.args[1], "flxLine"), extendConfig({}, controller.args[2], "flxLine"));
        flxLine.setDefaultUnit(kony.flex.DP);
        flxLine.add();
        flxMainContainer.add(flxInnerContainer, flxLine);
        flxMainBgToastNotification.add(flxMainContainer);
        var flxTopBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8%",
            "id": "flxTopBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTopBar"), extendConfig({}, controller.args[1], "flxTopBar"), extendConfig({}, controller.args[2], "flxTopBar"));
        flxTopBar.setDefaultUnit(kony.flex.DP);
        var lblBack = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblBack",
            "isVisible": true,
            "left": "6%",
            "skin": "sknLblchevronWhiteSelected",
            "text": "1",
            "textStyle": {},
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "lblBack"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBack"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBack"));
        var flxDosHdr = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "46.20%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxDosHdr",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "flxDosHdr"), extendConfig({}, controller.args[1], "flxDosHdr"), extendConfig({}, controller.args[2], "flxDosHdr"));
        flxDosHdr.setDefaultUnit(kony.flex.DP);
        var lblHeader = new kony.ui.Label(extendConfig({
            "centerX": "44%",
            "centerY": "50%",
            "id": "lblHeader",
            "isVisible": true,
            "skin": "sknLblFFFFSSPB24px",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblHeader"));
        var lblInfo = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblInfo",
            "isVisible": false,
            "skin": "sknlblInformation",
            "text": "j",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblInfo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblInfo"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblInfo"));
        flxDosHdr.add(lblHeader, lblInfo);
        var flxReset = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50.00%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxReset",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_flxResetClick_e198a5fa2ba1485f9bccbaf0e8f93ce2,
            "right": "9%",
            "skin": "slFbox",
            "width": "12%",
            "zIndex": 1
        }, controller.args[0], "flxReset"), extendConfig({}, controller.args[1], "flxReset"), extendConfig({}, controller.args[2], "flxReset"));
        flxReset.setDefaultUnit(kony.flex.DP);
        var lblReset = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblReset",
            "isVisible": true,
            "right": 0,
            "skin": "sknLbl94A3B3SSPL14px87",
            "text": kony.i18n.getLocalizedString("i18.clorox.reset"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReset"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReset"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReset"));
        flxReset.add(lblReset);
        flxTopBar.add(lblBack, flxDosHdr, flxReset);
        var flxBottomBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "8%",
            "id": "flxBottomBar",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBottomBar"), extendConfig({}, controller.args[1], "flxBottomBar"), extendConfig({}, controller.args[2], "flxBottomBar"));
        flxBottomBar.setDefaultUnit(kony.flex.DP);
        var flxBottomNav1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBottomNav1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": 0,
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flxBottomNav1"), extendConfig({}, controller.args[1], "flxBottomNav1"), extendConfig({}, controller.args[2], "flxBottomNav1"));
        flxBottomNav1.setDefaultUnit(kony.flex.DP);
        var lblBottomNav1 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblBottomNav1",
            "isVisible": true,
            "skin": "sknLblchevronWhiteSelected",
            "text": "3",
            "textStyle": {
                "lineSpacing": 20
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBottomNav1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBottomNav1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBottomNav1"));
        flxBottomNav1.add(lblBottomNav1);
        var flxBottomNav2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBottomNav2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": 0,
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flxBottomNav2"), extendConfig({}, controller.args[1], "flxBottomNav2"), extendConfig({}, controller.args[2], "flxBottomNav2"));
        flxBottomNav2.setDefaultUnit(kony.flex.DP);
        var lblBottomNav2 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblBottomNav2",
            "isVisible": true,
            "skin": "sknLblchevronGrey",
            "text": "c",
            "textStyle": {
                "lineSpacing": 20
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBottomNav2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBottomNav2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBottomNav2"));
        var lblNotifyUnread = new kony.ui.Label(extendConfig({
            "centerX": "54%",
            "centerY": "44%",
            "id": "lblNotifyUnread",
            "isVisible": false,
            "skin": "sknLblNotifyUnread",
            "text": "o",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNotifyUnread"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNotifyUnread"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNotifyUnread"));
        flxBottomNav2.add(lblBottomNav2, lblNotifyUnread);
        var flxBottomNav3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBottomNav3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": 0,
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flxBottomNav3"), extendConfig({}, controller.args[1], "flxBottomNav3"), extendConfig({}, controller.args[2], "flxBottomNav3"));
        flxBottomNav3.setDefaultUnit(kony.flex.DP);
        var lblBottomNav3 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblBottomNav3",
            "isVisible": true,
            "skin": "sknLblchevronGrey",
            "text": "",
            "textStyle": {
                "lineSpacing": 20
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBottomNav3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBottomNav3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBottomNav3"));
        flxBottomNav3.add(lblBottomNav3);
        var flxBottomNav4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBottomNav4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": 0,
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flxBottomNav4"), extendConfig({}, controller.args[1], "flxBottomNav4"), extendConfig({}, controller.args[2], "flxBottomNav4"));
        flxBottomNav4.setDefaultUnit(kony.flex.DP);
        var lblBottomNav4 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblBottomNav4",
            "isVisible": true,
            "skin": "sknLblchevronGrey",
            "text": "2",
            "textStyle": {
                "lineSpacing": 20
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBottomNav4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBottomNav4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBottomNav4"));
        flxBottomNav4.add(lblBottomNav4);
        var flxBottomNav5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBottomNav5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": 0,
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flxBottomNav5"), extendConfig({}, controller.args[1], "flxBottomNav5"), extendConfig({}, controller.args[2], "flxBottomNav5"));
        flxBottomNav5.setDefaultUnit(kony.flex.DP);
        var lblBottomNav5 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblBottomNav5",
            "isVisible": true,
            "skin": "sknLblchevronGrey",
            "text": "b",
            "textStyle": {
                "lineSpacing": 20
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBottomNav5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBottomNav5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBottomNav5"));
        flxBottomNav5.add(lblBottomNav5);
        flxBottomBar.add(flxBottomNav1, flxBottomNav2, flxBottomNav3, flxBottomNav4, flxBottomNav5);
        flxCmpMain.add(flxMainBgToastNotification, flxTopBar, flxBottomBar);
        TopBottomNavigation.add(flxCmpMain);
        return TopBottomNavigation;
    }
})