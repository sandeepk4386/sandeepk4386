define(function() {
    return function(controller) {
        var NotificationSettings = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "NotificationSettings",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "NotificationSettings"), extendConfig({}, controller.args[1], "NotificationSettings"), extendConfig({}, controller.args[2], "NotificationSettings"));
        NotificationSettings.setDefaultUnit(kony.flex.DP);
        var flxComponentMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxComponentMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxComponentMain"), extendConfig({}, controller.args[1], "flxComponentMain"), extendConfig({}, controller.args[2], "flxComponentMain"));
        flxComponentMain.setDefaultUnit(kony.flex.DP);
        var flxMainNotifSettings = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainNotifSettings",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainNotifSettings"), extendConfig({}, controller.args[1], "flxMainNotifSettings"), extendConfig({}, controller.args[2], "flxMainNotifSettings"));
        flxMainNotifSettings.setDefaultUnit(kony.flex.DP);
        var flxRightArrow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxRightArrow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "36dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "47dp",
            "width": "15%",
            "zIndex": 1
        }, controller.args[0], "flxRightArrow"), extendConfig({}, controller.args[1], "flxRightArrow"), extendConfig({}, controller.args[2], "flxRightArrow"));
        flxRightArrow.setDefaultUnit(kony.flex.DP);
        var lblLeftArrow = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblLeftArrow",
            "isVisible": true,
            "left": "-6dp",
            "skin": "sknLblFFFFRightArrow",
            "text": "1",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLeftArrow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLeftArrow"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLeftArrow"));
        flxRightArrow.add(lblLeftArrow);
        var flxNotifHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNotifHeader",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxNotifHeader"), extendConfig({}, controller.args[1], "flxNotifHeader"), extendConfig({}, controller.args[2], "flxNotifHeader"));
        flxNotifHeader.setDefaultUnit(kony.flex.DP);
        var lblNotifHeader = new kony.ui.Label(extendConfig({
            "id": "lblNotifHeader",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFFFFFSSPB36px258",
            "text": kony.i18n.getLocalizedString("i18.clorox.notificatioSettings"),
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblNotifHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNotifHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNotifHeader"));
        flxNotifHeader.add(lblNotifHeader);
        var flxPushNotif = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPushNotif",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPushNotif"), extendConfig({}, controller.args[1], "flxPushNotif"), extendConfig({}, controller.args[2], "flxPushNotif"));
        flxPushNotif.setDefaultUnit(kony.flex.DP);
        var flxPushNotifCont = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPushNotifCont",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPushNotifCont"), extendConfig({}, controller.args[1], "flxPushNotifCont"), extendConfig({}, controller.args[2], "flxPushNotifCont"));
        flxPushNotifCont.setDefaultUnit(kony.flex.DP);
        var flxPushContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPushContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxPushContainer"), extendConfig({}, controller.args[1], "flxPushContainer"), extendConfig({}, controller.args[2], "flxPushContainer"));
        flxPushContainer.setDefaultUnit(kony.flex.DP);
        var lblPushNotif = new kony.ui.Label(extendConfig({
            "id": "lblPushNotif",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFFFFFFRobotoBold24Px",
            "text": kony.i18n.getLocalizedString("i18.clorox.pushNotification"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPushNotif"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPushNotif"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPushNotif"));
        var lblTurnOnPushNotif = new kony.ui.Label(extendConfig({
            "id": "lblTurnOnPushNotif",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFFFFFFRobotoLight16Px",
            "text": kony.i18n.getLocalizedString("i18.clorox.turnOnPush"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTurnOnPushNotif"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTurnOnPushNotif"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTurnOnPushNotif"));
        flxPushContainer.add(lblPushNotif, lblTurnOnPushNotif);
        var flxToggleMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxToggleMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "36dp",
            "skin": "sknflxBioMain",
            "top": "15dp",
            "width": "42dp",
            "zIndex": 1
        }, controller.args[0], "flxToggleMain"), extendConfig({}, controller.args[1], "flxToggleMain"), extendConfig({}, controller.args[2], "flxToggleMain"));
        flxToggleMain.setDefaultUnit(kony.flex.DP);
        var flxPushSwitch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "14dp",
            "id": "flxPushSwitch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleE5E5E5",
            "width": "34dp",
            "zIndex": 1
        }, controller.args[0], "flxPushSwitch"), extendConfig({}, controller.args[1], "flxPushSwitch"), extendConfig({}, controller.args[2], "flxPushSwitch"));
        flxPushSwitch.setDefaultUnit(kony.flex.DP);
        flxPushSwitch.add();
        var flxRoundToggle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "49%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxRoundToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleRoundE5E5E5",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxRoundToggle"), extendConfig({}, controller.args[1], "flxRoundToggle"), extendConfig({}, controller.args[2], "flxRoundToggle"));
        flxRoundToggle.setDefaultUnit(kony.flex.DP);
        flxRoundToggle.add();
        flxToggleMain.add(flxPushSwitch, flxRoundToggle);
        flxPushNotifCont.add(flxPushContainer, flxToggleMain);
        var flxCustomNotifContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCustomNotifContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "34dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCustomNotifContainer"), extendConfig({}, controller.args[1], "flxCustomNotifContainer"), extendConfig({}, controller.args[2], "flxCustomNotifContainer"));
        flxCustomNotifContainer.setDefaultUnit(kony.flex.DP);
        var lblCustomNotif = new kony.ui.Label(extendConfig({
            "id": "lblCustomNotif",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFFFFFFRobotoBold24Px",
            "text": kony.i18n.getLocalizedString("i18.clorox.customNotification"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCustomNotif"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCustomNotif"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCustomNotif"));
        var lblCustomNotifMsg = new kony.ui.Label(extendConfig({
            "id": "lblCustomNotifMsg",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFFFFFFRobotoLight16Px",
            "text": kony.i18n.getLocalizedString("i18.clorox.customNotifMsg"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCustomNotifMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCustomNotifMsg"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCustomNotifMsg"));
        flxCustomNotifContainer.add(lblCustomNotif, lblCustomNotifMsg);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "16dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblNotifSettName = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblNotifSettName",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFFFFFFRobotoLight16Px",
            "text": kony.i18n.getLocalizedString("i18n.clorox.DOSNotifications"),
            "textStyle": {},
            "top": "0dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblNotifSettName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNotifSettName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNotifSettName"));
        var flxToggleMainCustNotif = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxToggleMainCustNotif",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "36dp",
            "skin": "sknflxBioMain",
            "top": "0dp",
            "width": "42dp",
            "zIndex": 1
        }, controller.args[0], "flxToggleMainCustNotif"), extendConfig({}, controller.args[1], "flxToggleMainCustNotif"), extendConfig({}, controller.args[2], "flxToggleMainCustNotif"));
        flxToggleMainCustNotif.setDefaultUnit(kony.flex.DP);
        var flxPushSwtchCustNotif = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "14dp",
            "id": "flxPushSwtchCustNotif",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleE5E5E5",
            "width": "34dp",
            "zIndex": 1
        }, controller.args[0], "flxPushSwtchCustNotif"), extendConfig({}, controller.args[1], "flxPushSwtchCustNotif"), extendConfig({}, controller.args[2], "flxPushSwtchCustNotif"));
        flxPushSwtchCustNotif.setDefaultUnit(kony.flex.DP);
        flxPushSwtchCustNotif.add();
        var flxRoundToggleCustNotif = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "49%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxRoundToggleCustNotif",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleRoundE5E5E5",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxRoundToggleCustNotif"), extendConfig({}, controller.args[1], "flxRoundToggleCustNotif"), extendConfig({}, controller.args[2], "flxRoundToggleCustNotif"));
        flxRoundToggleCustNotif.setDefaultUnit(kony.flex.DP);
        flxRoundToggleCustNotif.add();
        flxToggleMainCustNotif.add(flxPushSwtchCustNotif, flxRoundToggleCustNotif);
        flxMain.add(lblNotifSettName, flxToggleMainCustNotif);
        flxPushNotif.add(flxPushNotifCont, flxCustomNotifContainer, flxMain);
        var flxSpace = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxSpace",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSpace"), extendConfig({}, controller.args[1], "flxSpace"), extendConfig({}, controller.args[2], "flxSpace"));
        flxSpace.setDefaultUnit(kony.flex.DP);
        flxSpace.add();
        var flxSegment = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSegment",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSegment"), extendConfig({}, controller.args[1], "flxSegment"), extendConfig({}, controller.args[2], "flxSegment"));
        flxSegment.setDefaultUnit(kony.flex.DP);
        var lblTotalClorox = new kony.ui.Label(extendConfig({
            "id": "lblTotalClorox",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFFFFFFRobotoBold20Px",
            "text": kony.i18n.getLocalizedString("i18n.clorox.totalClorox"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTotalClorox"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTotalClorox"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTotalClorox"));
        var segNotificationSettings = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblNotifSettName": ""
            }],
            "groupCells": false,
            "id": "segNotificationSettings",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "segTransparent",
            "rowSkin": "segTransparent",
            "rowTemplate": "flxNotifSett",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorRequired": false,
            "showScrollbars": false,
            "top": "37dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxMain": "flxMain",
                "flxNotifSett": "flxNotifSett",
                "flxRoundToggle": "flxRoundToggle",
                "flxSegPushSwtch": "flxSegPushSwtch",
                "flxSegToggleMain": "flxSegToggleMain",
                "lblNotifSettName": "lblNotifSettName"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segNotificationSettings"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segNotificationSettings"), extendConfig({
            "bounces": false,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": false
        }, controller.args[2], "segNotificationSettings"));
        flxSegment.add(lblTotalClorox, segNotificationSettings);
        flxMainNotifSettings.add(flxRightArrow, flxNotifHeader, flxPushNotif, flxSpace, flxSegment);
        flxComponentMain.add(flxMainNotifSettings);
        NotificationSettings.add(flxComponentMain);
        return NotificationSettings;
    }
})