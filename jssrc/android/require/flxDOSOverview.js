define("flxDOSOverview", function() {
    return function(controller) {
        var flxDOSOverview = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDOSOverview",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxDOSOverview.setDefaultUnit(kony.flex.DP);
        var flxGroupMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "68dp",
            "id": "flxGroupMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGSemiRounded",
            "top": "8dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxGroupMain.setDefaultUnit(kony.flex.DP);
        var flxGroupValue = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxGroupValue",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "13dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxGroupValue.setDefaultUnit(kony.flex.DP);
        var lblGroupName = new kony.ui.Label({
            "id": "lblGroupName",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblA7DCECSSPSB16px100",
            "text": kony.i18n.getLocalizedString("i18.clorox.mtdOrders"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblGroupValue = new kony.ui.Label({
            "id": "lblGroupValue",
            "isVisible": true,
            "right": "16dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxGroupValue.add(lblGroupName, lblGroupValue);
        var flxChangeNIndex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "22dp",
            "id": "flxChangeNIndex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxChangeNIndex.setDefaultUnit(kony.flex.DP);
        var flxChangeValues = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxChangeValues",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "60%",
            "zIndex": 1
        }, {}, {});
        flxChangeValues.setDefaultUnit(kony.flex.DP);
        var lblChangeValue = new kony.ui.Label({
            "id": "lblChangeValue",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblChangeCount = new kony.ui.Label({
            "id": "lblChangeCount",
            "isVisible": true,
            "left": "1dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxChangeValues.add(lblChangeValue, lblChangeCount);
        var flxIndexValues = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxIndexValues",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "16dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "45%",
            "zIndex": 1
        }, {}, {});
        flxIndexValues.setDefaultUnit(kony.flex.DP);
        var lblIndexCount = new kony.ui.Label({
            "id": "lblIndexCount",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lbIndexValue = new kony.ui.Label({
            "id": "lbIndexValue",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxIndexValues.add(lblIndexCount, lbIndexValue);
        flxChangeNIndex.add(flxChangeValues, flxIndexValues);
        flxGroupMain.add(flxGroupValue, flxChangeNIndex);
        flxDOSOverview.add(flxGroupMain);
        return flxDOSOverview;
    }
})