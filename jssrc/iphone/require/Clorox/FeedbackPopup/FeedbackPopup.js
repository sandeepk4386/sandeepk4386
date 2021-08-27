define(function() {
    return function(controller) {
        var FeedbackPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "FeedbackPopup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBlack53Opacity",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "FeedbackPopup"), extendConfig({}, controller.args[1], "FeedbackPopup"), extendConfig({}, controller.args[2], "FeedbackPopup"));
        FeedbackPopup.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "534dp",
            "id": "flxPopup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxpopupBg080F3F",
            "width": "82%",
            "zIndex": 1
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "45dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "14dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var lblFeedback = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblFeedback",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblWhite24Px",
            "text": kony.i18n.getLocalizedString("i18n.clorox.Feedback"),
            "textStyle": {},
            "top": 0,
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "lblFeedback"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFeedback"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFeedback"));
        var flxClose = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxClose",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "1%",
            "skin": "slFbox",
            "width": "15%",
            "zIndex": 1
        }, controller.args[0], "flxClose"), extendConfig({}, controller.args[1], "flxClose"), extendConfig({}, controller.args[2], "flxClose"));
        flxClose.setDefaultUnit(kony.flex.DP);
        var lblClose = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblClose",
            "isVisible": true,
            "skin": "sknCrossIcon",
            "text": "l",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblClose"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblClose"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblClose"));
        flxClose.add(lblClose);
        flxHeader.add(lblFeedback, flxClose);
        var flxFeedbackType = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "48dp",
            "id": "flxFeedbackType",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlx1c214e",
            "top": "69dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "flxFeedbackType"), extendConfig({}, controller.args[1], "flxFeedbackType"), extendConfig({}, controller.args[2], "flxFeedbackType"));
        flxFeedbackType.setDefaultUnit(kony.flex.DP);
        var lblSubject = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblSubject",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblWhiteNormal16px",
            "text": kony.i18n.getLocalizedString("i18n.clorox.Subject"),
            "textStyle": {},
            "top": "0dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "lblSubject"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSubject"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSubject"));
        var flxDropDown = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxDropDown",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "width": "20%",
            "zIndex": 100
        }, controller.args[0], "flxDropDown"), extendConfig({}, controller.args[1], "flxDropDown"), extendConfig({}, controller.args[2], "flxDropDown"));
        flxDropDown.setDefaultUnit(kony.flex.DP);
        var lblDropdown = new kony.ui.Label(extendConfig({
            "centerX": "50.00%",
            "centerY": "50.00%",
            "height": "100%",
            "id": "lblDropdown",
            "isVisible": true,
            "skin": "sknLbldropdown",
            "text": "i",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDropdown"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDropdown"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDropdown"));
        flxDropDown.add(lblDropdown);
        flxFeedbackType.add(lblSubject, flxDropDown);
        var flxStar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxStar",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "134dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "flxStar"), extendConfig({}, controller.args[1], "flxStar"), extendConfig({}, controller.args[2], "flxStar"));
        flxStar.setDefaultUnit(kony.flex.DP);
        var lblStar1 = new kony.ui.Label(extendConfig({
            "id": "lblStar1",
            "isVisible": true,
            "left": "25.50%",
            "skin": "sknStarWhite",
            "text": "m",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStar1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStar1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblStar1"));
        var lblStar2 = new kony.ui.Label(extendConfig({
            "id": "lblStar2",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknStarWhite",
            "text": "m",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStar2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStar2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblStar2"));
        var lblStar3 = new kony.ui.Label(extendConfig({
            "id": "lblStar3",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknStarWhite",
            "text": "m",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStar3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStar3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblStar3"));
        var lblStar4 = new kony.ui.Label(extendConfig({
            "id": "lblStar4",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknStarWhite",
            "text": "m",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStar4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStar4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblStar4"));
        var lblStar5 = new kony.ui.Label(extendConfig({
            "id": "lblStar5",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknStarWhite",
            "text": "m",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStar5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStar5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblStar5"));
        flxStar.add(lblStar1, lblStar2, lblStar3, lblStar4, lblStar5);
        var flxfeedbackInput = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "289dp",
            "id": "flxfeedbackInput",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlx1c214e",
            "top": "133dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "flxfeedbackInput"), extendConfig({}, controller.args[1], "flxfeedbackInput"), extendConfig({}, controller.args[2], "flxfeedbackInput"));
        flxfeedbackInput.setDefaultUnit(kony.flex.DP);
        var txtFeedback = new kony.ui.TextArea2(extendConfig({
            "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_SENTENCES,
            "centerX": "50%",
            "focusSkin": "skntxtWhite",
            "height": "270dp",
            "id": "txtFeedback",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
            "maxTextLength": null,
            "numberOfVisibleLines": 3,
            "placeholder": kony.i18n.getLocalizedString("i18n.clorox.txtFeedbackInput"),
            "skin": "skntxtWhite",
            "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
            "top": "16dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtFeedback"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [2, 2, 2, 2],
            "paddingInPixel": false
        }, controller.args[1], "txtFeedback"), extendConfig({
            "autoCorrect": true,
            "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
            "showCloseButton": true,
            "showProgressIndicator": false,
            "placeholderSkin": "defTextAreaPlaceholder"
        }, controller.args[2], "txtFeedback"));
        flxfeedbackInput.add(txtFeedback);
        var flxSegdropdown = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSegdropdown",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "30%",
            "isModalContainer": false,
            "skin": "sknFlxWhiteRounded4Px",
            "top": "109dp",
            "width": "59%",
            "zIndex": 1
        }, controller.args[0], "flxSegdropdown"), extendConfig({}, controller.args[1], "flxSegdropdown"), extendConfig({}, controller.args[2], "flxSegdropdown"));
        flxSegdropdown.setDefaultUnit(kony.flex.DP);
        var segdropdown = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "8dp",
            "data": [{
                "lblFeedbackSelect": ""
            }],
            "groupCells": false,
            "id": "segdropdown",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegWhite",
            "rowSkin": "sknSegWhite",
            "rowTemplate": "flxFeedbackMain",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "8dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxFeedbackDopdown": "flxFeedbackDopdown",
                "flxFeedbackMain": "flxFeedbackMain",
                "lblFeedbackSelect": "lblFeedbackSelect"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segdropdown"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segdropdown"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segdropdown"));
        flxSegdropdown.add(segdropdown);
        var flxCharLimit = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxCharLimit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "431dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "flxCharLimit"), extendConfig({}, controller.args[1], "flxCharLimit"), extendConfig({}, controller.args[2], "flxCharLimit"));
        flxCharLimit.setDefaultUnit(kony.flex.DP);
        var lblCharLimit = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblCharLimit",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl94A3B3",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCharLimit"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCharLimit"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCharLimit"));
        flxCharLimit.add(lblCharLimit);
        var flxBtnFeedback = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "24dp",
            "clipBounds": true,
            "height": "48dp",
            "id": "flxBtnFeedback",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBtnFeedback"), extendConfig({}, controller.args[1], "flxBtnFeedback"), extendConfig({}, controller.args[2], "flxBtnFeedback"));
        flxBtnFeedback.setDefaultUnit(kony.flex.DP);
        var btnSendFeedback = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtn0AC7C2",
            "height": "100%",
            "id": "btnSendFeedback",
            "isVisible": true,
            "skin": "sknBtn0AC7C2",
            "text": kony.i18n.getLocalizedString("i18n.clorox.sendfeedback"),
            "top": "0dp",
            "width": "55%",
            "zIndex": 1
        }, controller.args[0], "btnSendFeedback"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSendFeedback"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSendFeedback"));
        flxBtnFeedback.add(btnSendFeedback);
        flxPopup.add(flxHeader, flxFeedbackType, flxStar, flxfeedbackInput, flxSegdropdown, flxCharLimit, flxBtnFeedback);
        flxMain.add(flxPopup);
        var flxAlertPopupMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAlertPopupMain",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAlertPopupMain"), extendConfig({}, controller.args[1], "flxAlertPopupMain"), extendConfig({}, controller.args[2], "flxAlertPopupMain"));
        flxAlertPopupMain.setDefaultUnit(kony.flex.DP);
        var flxAlertPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxAlertPopup",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxErrorWhiteBgRound",
            "width": "72%",
            "zIndex": 1
        }, controller.args[0], "flxAlertPopup"), extendConfig({}, controller.args[1], "flxAlertPopup"), extendConfig({}, controller.args[2], "flxAlertPopup"));
        flxAlertPopup.setDefaultUnit(kony.flex.DP);
        var lblInnerPopupFeedback = new kony.ui.Label(extendConfig({
            "id": "lblInnerPopupFeedback",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLb1C214E24Px",
            "text": kony.i18n.getLocalizedString("i18n.clorox.Feedback"),
            "textStyle": {},
            "top": "23dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblInnerPopupFeedback"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblInnerPopupFeedback"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblInnerPopupFeedback"));
        var lblDescriptionMsg = new kony.ui.Label(extendConfig({
            "id": "lblDescriptionMsg",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblBlackNormal16px",
            "text": kony.i18n.getLocalizedString("i18n.clorox.FeedbackStatusSuccessMsg"),
            "textStyle": {},
            "top": "22dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblDescriptionMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescriptionMsg"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDescriptionMsg"));
        var flxPopupButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "18dp",
            "clipBounds": true,
            "id": "flxPopupButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "30dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxPopupButtons"), extendConfig({}, controller.args[1], "flxPopupButtons"), extendConfig({}, controller.args[2], "flxPopupButtons"));
        flxPopupButtons.setDefaultUnit(kony.flex.DP);
        var btnYes = new kony.ui.Button(extendConfig({
            "bottom": "0dp",
            "focusSkin": "sknBtnYesNo1C214EFont",
            "height": "43dp",
            "id": "btnYes",
            "isVisible": true,
            "right": "36dp",
            "skin": "sknBtnYesNo1C214EFont",
            "text": kony.i18n.getLocalizedString("i18.clorox.ok"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnYes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnYes"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnYes"));
        var btnNo = new kony.ui.Button(extendConfig({
            "bottom": "0dp",
            "focusSkin": "sknBtnYesNo1C214EFont",
            "height": "43dp",
            "id": "btnNo",
            "isVisible": true,
            "right": "145dp",
            "skin": "sknBtnYesNo1C214EFont",
            "text": kony.i18n.getLocalizedString("i18n.clorox.no"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNo"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNo"));
        flxPopupButtons.add(btnYes, btnNo);
        flxAlertPopup.add(lblInnerPopupFeedback, lblDescriptionMsg, flxPopupButtons);
        flxAlertPopupMain.add(flxAlertPopup);
        FeedbackPopup.add(flxMain, flxAlertPopupMain);
        return FeedbackPopup;
    }
})