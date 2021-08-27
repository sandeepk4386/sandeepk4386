define(function() {
    return function(controller) {
        var Chat = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Chat",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "Chat"), extendConfig({}, controller.args[1], "Chat"), extendConfig({}, controller.args[2], "Chat"));
        Chat.setDefaultUnit(kony.flex.DP);
        var flxMainChat = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainChat",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainChat"), extendConfig({}, controller.args[1], "flxMainChat"), extendConfig({}, controller.args[2], "flxMainChat"));
        flxMainChat.setDefaultUnit(kony.flex.DP);
        var flxChatEmpty = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxChatEmpty",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxChatEmpty"), extendConfig({}, controller.args[1], "flxChatEmpty"), extendConfig({}, controller.args[2], "flxChatEmpty"));
        flxChatEmpty.setDefaultUnit(kony.flex.DP);
        var lblNoChatMessage = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblNoChatMessage",
            "isVisible": true,
            "skin": "sknLbl94a3b312Px",
            "text": kony.i18n.getLocalizedString("i18n.clorox.noChatMessage"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNoChatMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoChatMessage"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNoChatMessage"));
        flxChatEmpty.add(lblNoChatMessage);
        var segmentChat = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "70dp",
            "data": [{
                "imgChat1": "",
                "imgChat2": "",
                "lblDate": "",
                "lblLine1": "",
                "lblLine2": "",
                "lblMessage1": "",
                "lblMessage2": "",
                "lblName1": "",
                "lblName2": ""
            }],
            "groupCells": false,
            "id": "segmentChat",
            "isVisible": false,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "releaseToPullRefreshI18NKey": "i18n.clorox.releaseToRefresh",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "segChatBg",
            "rowTemplate": "flxMainChat",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxData1": "flxData1",
                "flxData2": "flxData2",
                "flxLeftChat1": "flxLeftChat1",
                "flxMainChat": "flxMainChat",
                "flxMainContainer": "flxMainContainer",
                "flxName1": "flxName1",
                "flxName2": "flxName2",
                "flxRightChat2": "flxRightChat2",
                "imgChat1": "imgChat1",
                "imgChat2": "imgChat2",
                "lblDate": "lblDate",
                "lblLine1": "lblLine1",
                "lblLine2": "lblLine2",
                "lblMessage1": "lblMessage1",
                "lblMessage2": "lblMessage2",
                "lblName1": "lblName1",
                "lblName2": "lblName2",
                "lblTime1": "lblTime1",
                "lblTime2": "lblTime2"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segmentChat"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segmentChat"), extendConfig({}, controller.args[2], "segmentChat"));
        var flxShareBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxShareBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "24dp",
            "isModalContainer": false,
            "right": "24dp",
            "skin": "sknFlxBg1c214eRad4Px",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxShareBar"), extendConfig({}, controller.args[1], "flxShareBar"), extendConfig({}, controller.args[2], "flxShareBar"));
        flxShareBar.setDefaultUnit(kony.flex.DP);
        var txtBoxShare = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "sknTxtBoxFFFFFF14Px",
            "height": "100%",
            "id": "txtBoxShare",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "placeholder": "Type a new message",
            "secureTextEntry": false,
            "skin": "sknTxtBoxFFFFFF14Px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtBoxShare"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtBoxShare"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "sknTxtBoxFFFFFF14Px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtBoxShare"));
        var lblShareBtn = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblShareBtn",
            "isVisible": true,
            "right": "16dp",
            "skin": "sknLblSendIcon",
            "text": "r",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblShareBtn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblShareBtn"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblShareBtn"));
        flxShareBar.add(txtBoxShare, lblShareBtn);
        flxMainChat.add(flxChatEmpty, segmentChat, flxShareBar);
        var flxTeamList = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "50dp",
            "clipBounds": true,
            "id": "flxTeamList",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "24dp",
            "isModalContainer": false,
            "skin": "sknFlxWhiteRounded4Px",
            "width": "70%",
            "zIndex": 100
        }, controller.args[0], "flxTeamList"), extendConfig({}, controller.args[1], "flxTeamList"), extendConfig({}, controller.args[2], "flxTeamList"));
        flxTeamList.setDefaultUnit(kony.flex.DP);
        var segMention = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "8dp",
            "data": [{
                "lblEmailId": "Text",
                "lblName": ""
            }],
            "groupCells": false,
            "id": "segMention",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegWhite",
            "rowSkin": "sknSegWhite",
            "rowTemplate": "flxMention",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa46",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "8dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxMention": "flxMention",
                "lblEmailId": "lblEmailId",
                "lblName": "lblName"
            },
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "segMention"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segMention"), extendConfig({}, controller.args[2], "segMention"));
        var rdTeamsList = new kony.ui.RadioButtonGroup(extendConfig({
            "id": "rdTeamsList",
            "isVisible": false,
            "left": "0dp",
            "skin": "slRadioButtonGroup",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "rdTeamsList"), extendConfig({
            "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rdTeamsList"), extendConfig({}, controller.args[2], "rdTeamsList"));
        flxTeamList.add(segMention, rdTeamsList);
        Chat.add(flxMainChat, flxTeamList);
        return Chat;
    }
})