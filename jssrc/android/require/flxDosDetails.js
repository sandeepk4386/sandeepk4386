define("flxDosDetails", function() {
    return function(controller) {
        var flxDosDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "23dp",
            "id": "flxDosDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxDosDetails.setDefaultUnit(kony.flex.DP);
        var lblOrderName = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblOrderName",
            "isVisible": true,
            "left": "0dp",
            "right": "15%",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblOrdersValue = new kony.ui.Label({
            "bottom": "1dp",
            "centerY": "50%",
            "id": "lblOrdersValue",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLblFFFFSSPR16px114",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDosDetails.add(lblOrderName, lblOrdersValue);
        return flxDosDetails;
    }
})