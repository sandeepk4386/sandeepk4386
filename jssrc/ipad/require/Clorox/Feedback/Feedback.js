define(function() {
    return function(controller) {
        var Feedback = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "isMaster": true,
            "height": "165dp",
            "id": "Feedback",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "width": "8%",
            "zIndex": 1
        }, controller.args[0], "Feedback"), extendConfig({}, controller.args[1], "Feedback"), extendConfig({}, controller.args[2], "Feedback"));
        Feedback.setDefaultUnit(kony.flex.DP);
        var flxFeedback = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "165dp",
            "id": "flxFeedback",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFeedback"), extendConfig({}, controller.args[1], "flxFeedback"), extendConfig({}, controller.args[2], "flxFeedback"));
        flxFeedback.setDefaultUnit(kony.flex.DP);
        var imFeedback = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imFeedback",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "feedback.png",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imFeedback"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imFeedback"), extendConfig({}, controller.args[2], "imFeedback"));
        flxFeedback.add(imFeedback);
        Feedback.add(flxFeedback);
        return Feedback;
    }
})