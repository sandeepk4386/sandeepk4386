define(function() {
    return function(controller) {
        var SharePopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "SharePopup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTransparent",
            "top": "0dp",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "SharePopup"), extendConfig({}, controller.args[1], "SharePopup"), extendConfig({}, controller.args[2], "SharePopup"));
        SharePopup.setDefaultUnit(kony.flex.DP);
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPopup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "sknBgSharePopUp",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var flxSharePopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "67%",
            "clipBounds": true,
            "height": "66%",
            "id": "flxSharePopup",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSharePopup"), extendConfig({}, controller.args[1], "flxSharePopup"), extendConfig({}, controller.args[2], "flxSharePopup"));
        flxSharePopup.setDefaultUnit(kony.flex.DP);
        var flxTitle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10%",
            "id": "flxTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "16dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxTitle"), extendConfig({}, controller.args[1], "flxTitle"), extendConfig({}, controller.args[2], "flxTitle"));
        flxTitle.setDefaultUnit(kony.flex.DP);
        var lblSharePopUp = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblSharePopUp",
            "isVisible": true,
            "left": 0,
            "skin": "sknLblFFFFFFRobotoBold24Px",
            "text": kony.i18n.getLocalizedString("i18n.clorox.shareToDosChannel"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSharePopUp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSharePopUp"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSharePopUp"));
        var flxClose = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "60%",
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
        var lblCrossIcon = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "80%",
            "id": "lblCrossIcon",
            "isVisible": true,
            "skin": "sknCrossIcon",
            "text": "l",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblCrossIcon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCrossIcon"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCrossIcon"));
        flxClose.add(lblCrossIcon);
        flxTitle.add(lblSharePopUp, flxClose);
        var flxSnapshot = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "centerX": "50%",
            "clipBounds": true,
            "enableScrolling": true,
            "height": "65%",
            "horizontalScrollIndicator": true,
            "id": "flxSnapshot",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknFlxScrollBorder313983Rad8Px",
            "top": "15dp",
            "verticalScrollIndicator": true,
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxSnapshot"), extendConfig({}, controller.args[1], "flxSnapshot"), extendConfig({}, controller.args[2], "flxSnapshot"));
        flxSnapshot.setDefaultUnit(kony.flex.DP);
        var flxImages = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxImages",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknBorder313983Rad8Px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxImages"), extendConfig({}, controller.args[1], "flxImages"), extendConfig({}, controller.args[2], "flxImages"));
        flxImages.setDefaultUnit(kony.flex.DP);
        var imgHeader = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "id": "imgHeader",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "imgHeader"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgHeader"), extendConfig({}, controller.args[2], "imgHeader"));
        var imgContent = new kony.ui.Image2(extendConfig({
            "bottom": "12dp",
            "centerX": "50%",
            "id": "imgContent",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "3dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "imgContent"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgContent"), extendConfig({}, controller.args[2], "imgContent"));
        flxImages.add(imgHeader, imgContent);
        flxSnapshot.add(flxImages);
        var flxShareBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10%",
            "id": "flxShareBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "90dp",
            "isModalContainer": false,
            "skin": "sknFlxBg1c214eRad4Px",
            "top": "18dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxShareBar"), extendConfig({}, controller.args[1], "flxShareBar"), extendConfig({}, controller.args[2], "flxShareBar"));
        flxShareBar.setDefaultUnit(kony.flex.DP);
        var txtAreaShare = new kony.ui.TextArea2(extendConfig({
            "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
            "focusSkin": "skntxtWhite",
            "id": "txtAreaShare",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "maxTextLength": 1000,
            "numberOfVisibleLines": 3,
            "placeholder": kony.i18n.getLocalizedString("i18n.clorox.EnterYourMessage"),
            "skin": "skntxtWhite",
            "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
            "top": "5dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "txtAreaShare"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [2, 2, 2, 2],
            "paddingInPixel": false
        }, controller.args[1], "txtAreaShare"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
            "showCloseButton": true,
            "showProgressIndicator": false,
            "placeholderSkin": "defTextAreaPlaceholder"
        }, controller.args[2], "txtAreaShare"));
        var lblShareBtn = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblShareBtn",
            "isVisible": true,
            "right": "15dp",
            "skin": "sknLblSendIcon",
            "text": "r",
            "textStyle": {},
            "top": 0,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblShareBtn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblShareBtn"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblShareBtn"));
        flxShareBar.add(txtAreaShare, lblShareBtn);
        flxSharePopup.add(flxTitle, flxSnapshot, flxShareBar);
        flxPopup.add(flxSharePopup);
        SharePopup.add(flxPopup);
        return SharePopup;
    }
})