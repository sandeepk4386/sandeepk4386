define(function() {
    return function(controller) {
        var Login = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Login",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "Login"), extendConfig({}, controller.args[1], "Login"), extendConfig({}, controller.args[2], "Login"));
        Login.setDefaultUnit(kony.flex.DP);
        var flxLogin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLogin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlxBg080F3F",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLogin"), extendConfig({}, controller.args[1], "flxLogin"), extendConfig({}, controller.args[2], "flxLogin"));
        flxLogin.setDefaultUnit(kony.flex.DP);
        var flxHome = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHome",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHome"), extendConfig({}, controller.args[1], "flxHome"), extendConfig({}, controller.args[2], "flxHome"));
        flxHome.setDefaultUnit(kony.flex.DP);
        var flxImgLogo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "46%",
            "clipBounds": true,
            "height": "10%",
            "id": "flxImgLogo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "flxImgLogo"), extendConfig({}, controller.args[1], "flxImgLogo"), extendConfig({}, controller.args[2], "flxImgLogo"));
        flxImgLogo.setDefaultUnit(kony.flex.DP);
        var imgLogo = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgLogo",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "clorox_logo.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogo"), extendConfig({}, controller.args[2], "imgLogo"));
        flxImgLogo.add(imgLogo);
        var btnLogin = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnLogin0AC7C2",
            "height": "6%",
            "id": "btnLogin",
            "isVisible": true,
            "left": 0,
            "skin": "sknBtnLogin0AC7C2",
            "text": kony.i18n.getLocalizedString("i18.clorox.Login"),
            "top": "5%",
            "width": "55%",
            "zIndex": 1
        }, controller.args[0], "btnLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogin"), extendConfig({}, controller.args[2], "btnLogin"));
        var flxBiometric = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "20%",
            "id": "flxBiometric",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "flxBiometric"), extendConfig({}, controller.args[1], "flxBiometric"), extendConfig({}, controller.args[2], "flxBiometric"));
        flxBiometric.setDefaultUnit(kony.flex.DP);
        var tapToLoginSymbol = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "40%",
            "id": "tapToLoginSymbol",
            "isVisible": false,
            "skin": "sknLblBG0ac7c2",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3%",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "tapToLoginSymbol"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "retainFlexPositionProperties": false,
            "retainContentAlignment": false
        }, controller.args[1], "tapToLoginSymbol"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "tapToLoginSymbol"));
        var tapToLoginText = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "15%",
            "id": "tapToLoginText",
            "isVisible": false,
            "skin": "sknLblFontWhite85",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "tapToLoginText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tapToLoginText"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "tapToLoginText"));
        flxBiometric.add(tapToLoginSymbol, tapToLoginText);
        flxHome.add(flxImgLogo, btnLogin, flxBiometric);
        var flxIdentity = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxIdentity",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhiteBG",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxIdentity"), extendConfig({}, controller.args[1], "flxIdentity"), extendConfig({}, controller.args[2], "flxIdentity"));
        flxIdentity.setDefaultUnit(kony.flex.DP);
        flxIdentity.add();
        var flxError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxError",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxError"), extendConfig({}, controller.args[1], "flxError"), extendConfig({}, controller.args[2], "flxError"));
        flxError.setDefaultUnit(kony.flex.DP);
        flxError.add();
        var flxCreateCloroxID = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCreateCloroxID",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCreateCloroxID"), extendConfig({}, controller.args[1], "flxCreateCloroxID"), extendConfig({}, controller.args[2], "flxCreateCloroxID"));
        flxCreateCloroxID.setDefaultUnit(kony.flex.DP);
        flxCreateCloroxID.add();
        var flxTouchIDPop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTouchIDPop",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBG000000",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTouchIDPop"), extendConfig({}, controller.args[1], "flxTouchIDPop"), extendConfig({}, controller.args[2], "flxTouchIDPop"));
        flxTouchIDPop.setDefaultUnit(kony.flex.DP);
        var flxTouchID = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "85%",
            "clipBounds": true,
            "height": "23%",
            "id": "flxTouchID",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxWhiteBG",
            "width": "75%",
            "zIndex": 1
        }, controller.args[0], "flxTouchID"), extendConfig({}, controller.args[1], "flxTouchID"), extendConfig({}, controller.args[2], "flxTouchID"));
        flxTouchID.setDefaultUnit(kony.flex.DP);
        var lblTouchID = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblTouchID",
            "isVisible": true,
            "skin": "sknLblBG00000FT125",
            "text": kony.i18n.getLocalizedString("i18.clorox.loginUisngFingerPrint"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTouchID"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTouchID"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTouchID"));
        var lblTouchIDSymbol = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblTouchIDSymbol",
            "isVisible": true,
            "skin": "sknLblBG0ac7c2",
            "text": kony.i18n.getLocalizedString("i18.clorox.LoginBioMetricSymbol"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "18dp",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "lblTouchIDSymbol"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTouchIDSymbol"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTouchIDSymbol"));
        var lblBioMetricText = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblBioMetricText",
            "isVisible": true,
            "skin": "sknLblBG757575FT85",
            "text": kony.i18n.getLocalizedString("i18.clorox.LoginBioMetricText"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBioMetricText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBioMetricText"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblBioMetricText"));
        flxTouchID.add(lblTouchID, lblTouchIDSymbol, lblBioMetricText);
        flxTouchIDPop.add(flxTouchID);
        flxLogin.add(flxHome, flxIdentity, flxError, flxCreateCloroxID, flxTouchIDPop);
        var flxAndroidTouchIDPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAndroidTouchIDPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg080F3F",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxAndroidTouchIDPopup"), extendConfig({}, controller.args[1], "flxAndroidTouchIDPopup"), extendConfig({}, controller.args[2], "flxAndroidTouchIDPopup"));
        flxAndroidTouchIDPopup.setDefaultUnit(kony.flex.DP);
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
            "text": kony.i18n.getLocalizedString("i18n.clorox.lbl_BiometricLogin"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "23dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({
            "textCopyable": false
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
            "text": kony.i18n.getLocalizedString("i18n.clorox.lblBiometric_Description"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescription"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDescription"));
        flxDesc.add(lblDescription);
        var flxBottom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "19dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBottom"), extendConfig({}, controller.args[1], "flxBottom"), extendConfig({}, controller.args[2], "flxBottom"));
        flxBottom.setDefaultUnit(kony.flex.DP);
        var btnNo = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnNoYes",
            "height": "100%",
            "id": "btnNo",
            "isVisible": true,
            "right": "92dp",
            "skin": "sknBtnNoYes",
            "text": kony.i18n.getLocalizedString("i18n.clorox.no"),
            "top": "0dp",
            "width": "80dp",
            "zIndex": 1
        }, controller.args[0], "btnNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNo"), extendConfig({}, controller.args[2], "btnNo"));
        var btnyes = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnNoYes",
            "height": "100%",
            "id": "btnyes",
            "isVisible": true,
            "right": "10dp",
            "skin": "sknBtnNoYes",
            "text": kony.i18n.getLocalizedString("i18n.clorox.yes"),
            "top": "0dp",
            "width": "80dp",
            "zIndex": 1
        }, controller.args[0], "btnyes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnyes"), extendConfig({}, controller.args[2], "btnyes"));
        flxBottom.add(btnNo, btnyes);
        flxAlert.add(lblTitle, flxDesc, flxBottom);
        flxMain.add(flxAlert);
        flxAndroidTouchIDPopup.add(flxMain);
        var GenericError = new Clorox.GenericError(extendConfig({
            "height": "100%",
            "id": "GenericError",
            "isVisible": false,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "overrides": {
                "GenericError": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "GenericError"), extendConfig({
            "overrides": {}
        }, controller.args[1], "GenericError"), extendConfig({
            "overrides": {}
        }, controller.args[2], "GenericError"));
        Login.add(flxLogin, flxAndroidTouchIDPopup, GenericError);
        return Login;
    }
})