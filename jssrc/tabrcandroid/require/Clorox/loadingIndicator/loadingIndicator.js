define(function() {
    return function(controller) {
        var loadingIndicator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "loadingIndicator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "loadingIndicator"), extendConfig({}, controller.args[1], "loadingIndicator"), extendConfig({}, controller.args[2], "loadingIndicator"));
        loadingIndicator.setDefaultUnit(kony.flex.DP);
        var flxLoadMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLoadMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxLoadMain",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLoadMain"), extendConfig({}, controller.args[1], "flxLoadMain"), extendConfig({}, controller.args[2], "flxLoadMain"));
        flxLoadMain.setDefaultUnit(kony.flex.DP);
        var flxLoad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "18.50%",
            "id": "flxLoad",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBGFFFFFBorderfafafa",
            "top": "0dp",
            "width": "72%",
            "zIndex": 1
        }, controller.args[0], "flxLoad"), extendConfig({}, controller.args[1], "flxLoad"), extendConfig({}, controller.args[2], "flxLoad"));
        flxLoad.setDefaultUnit(kony.flex.DP);
        var imgLoad = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "61%",
            "height": "35%",
            "id": "imgLoad",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "loading_indicator.gif",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "imgLoad"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLoad"), extendConfig({}, controller.args[2], "imgLoad"));
        var lblLoading = new kony.ui.Label(extendConfig({
            "id": "lblLoading",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknLblSSPR15000000",
            "text": kony.i18n.getLocalizedString("i18.clorox.Loading"),
            "textStyle": {},
            "top": "80dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblLoading"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLoading"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLoading"));
        flxLoad.add(imgLoad, lblLoading);
        flxLoadMain.add(flxLoad);
        loadingIndicator.add(flxLoadMain);
        return loadingIndicator;
    }
})