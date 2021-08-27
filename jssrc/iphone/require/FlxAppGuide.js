define("FlxAppGuide", function() {
    return function(controller) {
        var FlxAppGuide = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "sknFlxAppGuideD7E2EC",
            "height": "100%",
            "id": "FlxAppGuide",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxAppGuideD7E2EC",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        FlxAppGuide.setDefaultUnit(kony.flex.DP);
        var ImageGuide = new kony.ui.Image2({
            "centerX": "50%",
            "height": "100%",
            "id": "ImageGuide",
            "isVisible": true,
            "skin": "slImage",
            "src": "scrn1.png",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlxAppGuide.add(ImageGuide);
        return FlxAppGuide;
    }
})