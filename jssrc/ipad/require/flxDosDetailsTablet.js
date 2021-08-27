define("flxDosDetailsTablet", function() {
    return function(controller) {
        var flxDosDetailsTablet = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxDosDetailsTablet",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxDosDetailsTablet.setDefaultUnit(kony.flex.DP);
        var lblOrderName = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblOrderName",
            "isVisible": true,
            "left": "0dp",
            "right": "15%",
            "skin": "sknLblFFFFFFRL100",
            "textStyle": {},
            "top": "0dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblOrdersValue = new kony.ui.Label({
            "bottom": "1dp",
            "centerY": "50%",
            "height": "100%",
            "id": "lblOrdersValue",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {},
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxDosDetailsTablet.add(lblOrderName, lblOrdersValue);
        return flxDosDetailsTablet;
    }
})