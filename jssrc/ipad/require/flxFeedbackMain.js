define("flxFeedbackMain", function() {
    return function(controller) {
        var flxFeedbackMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxFeedbackMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxFeedbackMain.setDefaultUnit(kony.flex.DP);
        var flxFeedbackDopdown = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFeedbackDopdown",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxFeedbackDopdown.setDefaultUnit(kony.flex.DP);
        var lblFeedbackSelect = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblFeedbackSelect",
            "isVisible": true,
            "left": "13dp",
            "skin": "sknLblNormal1C214E",
            "text": "Lable",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxFeedbackDopdown.add(lblFeedbackSelect);
        flxFeedbackMain.add(flxFeedbackDopdown);
        return flxFeedbackMain;
    }
})