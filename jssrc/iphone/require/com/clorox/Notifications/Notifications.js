define(function() {
    return function(controller) {
        var Notifications = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Notifications",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "Notifications"), extendConfig({}, controller.args[1], "Notifications"), extendConfig({}, controller.args[2], "Notifications"));
        Notifications.setDefaultUnit(kony.flex.DP);
        var flxComponentMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxComponentMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxComponentMain"), extendConfig({}, controller.args[1], "flxComponentMain"), extendConfig({}, controller.args[2], "flxComponentMain"));
        flxComponentMain.setDefaultUnit(kony.flex.DP);
        var flxNotifMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNotifMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNotifMain"), extendConfig({}, controller.args[1], "flxNotifMain"), extendConfig({}, controller.args[2], "flxNotifMain"));
        flxNotifMain.setDefaultUnit(kony.flex.DP);
        var flxNotifHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "42dp",
            "id": "flxNotifHeader",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxNotifHeader"), extendConfig({}, controller.args[1], "flxNotifHeader"), extendConfig({}, controller.args[2], "flxNotifHeader"));
        flxNotifHeader.setDefaultUnit(kony.flex.DP);
        var lblNotifHeader = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblNotifHeader",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFFFFFSSPB36px258",
            "textStyle": {},
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblNotifHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNotifHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNotifHeader"));
        var flxNotifSetting = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxNotifSetting",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "35dp",
            "skin": "slFbox",
            "width": "13%",
            "zIndex": 10
        }, controller.args[0], "flxNotifSetting"), extendConfig({}, controller.args[1], "flxNotifSetting"), extendConfig({}, controller.args[2], "flxNotifSetting"));
        flxNotifSetting.setDefaultUnit(kony.flex.DP);
        var lblNotificationIcon = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "id": "lblNotificationIcon",
            "isVisible": false,
            "right": "0dp",
            "skin": "sknLblFFFFRightArrow",
            "text": "g",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblNotificationIcon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNotificationIcon"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNotificationIcon"));
        flxNotifSetting.add(lblNotificationIcon);
        var lblNotifIcon = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "id": "lblNotifIcon",
            "isVisible": true,
            "right": "35dp",
            "skin": "sknLblFFFFFClorox200",
            "text": "g",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNotifIcon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNotifIcon"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNotifIcon"));
        flxNotifHeader.add(lblNotifHeader, flxNotifSetting, lblNotifIcon);
        var flxNotifyEmpty = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNotifyEmpty",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNotifyEmpty"), extendConfig({}, controller.args[1], "flxNotifyEmpty"), extendConfig({}, controller.args[2], "flxNotifyEmpty"));
        flxNotifyEmpty.setDefaultUnit(kony.flex.DP);
        var lblNoNotification = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblNoNotification",
            "isVisible": true,
            "skin": "sknLbl94a3b312Px",
            "text": kony.i18n.getLocalizedString("i18n.clorox.NoNotification"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNoNotification"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoNotification"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNoNotification"));
        flxNotifyEmpty.add(lblNoNotification);
        var flxSegment = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSegment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSegment"), extendConfig({}, controller.args[1], "flxSegment"), extendConfig({}, controller.args[2], "flxSegment"));
        flxSegment.setDefaultUnit(kony.flex.DP);
        var segmentNotifications = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "lblNotifDate": "",
                "lblNotifMessage": "",
                "lblNotifyIcon": ""
            }],
            "groupCells": false,
            "height": "99%",
            "id": "segmentNotifications",
            "isVisible": false,
            "left": "30dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "segTransparent",
            "rowSkin": "segTransparent",
            "rowTemplate": "flxNotification",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "31398300",
            "separatorRequired": false,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxLine": "flxLine",
                "flxNotifDisplay": "flxNotifDisplay",
                "flxNotifDisplayMsgs": "flxNotifDisplayMsgs",
                "flxNotification": "flxNotification",
                "flxNotifySub": "flxNotifySub",
                "flxSpace": "flxSpace",
                "lblNotifDate": "lblNotifDate",
                "lblNotifMessage": "lblNotifMessage",
                "lblNotifyIcon": "lblNotifyIcon"
            },
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "segmentNotifications"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segmentNotifications"), extendConfig({
            "bounces": false,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": false
        }, controller.args[2], "segmentNotifications"));
        flxSegment.add(segmentNotifications);
        flxNotifMain.add(flxNotifHeader, flxNotifyEmpty, flxSegment);
        flxComponentMain.add(flxNotifMain);
        Notifications.add(flxComponentMain);
        return Notifications;
    }
})