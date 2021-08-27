define("flxMain", function() {
    return function(controller) {
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxTransparent",
            "width": "100%"
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxContentRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxContentRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBlueRounded",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxContentRow.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label({
            "centerY": "50%",
            "height": "41dp",
            "id": "lblHeading",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblWhiteSemiBold",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxContentRow.add(lblHeading);
        var flxSpace = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxSpace",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "90%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSpace.setDefaultUnit(kony.flex.DP);
        flxSpace.add();
        flxMain.add(flxContentRow, flxSpace);
        return flxMain;
    }
})