define("flxAppGuide", function() {
    return function(controller) {
        var flxAppGuide = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAppGuide",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAppGuide.setDefaultUnit(kony.flex.DP);
        var ImageGuide = new kony.ui.Image2({
            "centerX": "50%",
            "height": "95%",
            "id": "ImageGuide",
            "isVisible": true,
            "skin": "slImage",
            "src": "scrn1.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAppGuide.add(ImageGuide);
        return flxAppGuide;
    }
})