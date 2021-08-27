define("flxDOSOverview", function() {
    return function(controller) {
        var flxDOSOverview = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDOSOverview",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxDOSOverview.setDefaultUnit(kony.flex.DP);
        var flxGroupMain1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "68dp",
            "id": "flxGroupMain1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGSemiRounded",
            "top": "8dp",
            "width": "47%",
            "zIndex": 1
        }, {}, {});
        flxGroupMain1.setDefaultUnit(kony.flex.DP);
        var flxGroupValue1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxGroupValue1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "13dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxGroupValue1.setDefaultUnit(kony.flex.DP);
        var lblGroupName1 = new kony.ui.Label({
            "id": "lblGroupName1",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLblA7DCECSSPSB16px100",
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
        var lblGroupValue1 = new kony.ui.Label({
            "id": "lblGroupValue1",
            "isVisible": true,
            "right": "10dp",
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
        flxGroupValue1.add(lblGroupName1, lblGroupValue1);
        var flxChangeNIndex1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "22dp",
            "id": "flxChangeNIndex1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxChangeNIndex1.setDefaultUnit(kony.flex.DP);
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
        var lblChangeValue1 = new kony.ui.Label({
            "id": "lblChangeValue1",
            "isVisible": true,
            "left": "10dp",
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
        var lblChangeCount1 = new kony.ui.Label({
            "id": "lblChangeCount1",
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
        flxChangeValues.add(lblChangeValue1, lblChangeCount1);
        var flxIndexValues = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxIndexValues",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "45%",
            "zIndex": 1
        }, {}, {});
        flxIndexValues.setDefaultUnit(kony.flex.DP);
        var lblIndexCount1 = new kony.ui.Label({
            "id": "lblIndexCount1",
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
        var lbIndexValue1 = new kony.ui.Label({
            "id": "lbIndexValue1",
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
        flxIndexValues.add(lblIndexCount1, lbIndexValue1);
        flxChangeNIndex1.add(flxChangeValues, flxIndexValues);
        flxGroupMain1.add(flxGroupValue1, flxChangeNIndex1);
        var flxGroupMain2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "68dp",
            "id": "flxGroupMain2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "23dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGSemiRounded",
            "top": "8dp",
            "width": "47%",
            "zIndex": 1
        }, {}, {});
        flxGroupMain2.setDefaultUnit(kony.flex.DP);
        var flxGroupValue2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxGroupValue2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "13dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxGroupValue2.setDefaultUnit(kony.flex.DP);
        var lblGroupName2 = new kony.ui.Label({
            "id": "lblGroupName2",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLblA7DCECSSPSB16px100",
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
        var lblGroupValue2 = new kony.ui.Label({
            "id": "lblGroupValue2",
            "isVisible": true,
            "right": "10dp",
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
        flxGroupValue2.add(lblGroupName2, lblGroupValue2);
        var flxChangeNIndex2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "22dp",
            "id": "flxChangeNIndex2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxChangeNIndex2.setDefaultUnit(kony.flex.DP);
        var flxChangeValues2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxChangeValues2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "60%",
            "zIndex": 1
        }, {}, {});
        flxChangeValues2.setDefaultUnit(kony.flex.DP);
        var lblChangeValue2 = new kony.ui.Label({
            "id": "lblChangeValue2",
            "isVisible": true,
            "left": "10dp",
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
        var lblChangeCount2 = new kony.ui.Label({
            "id": "lblChangeCount2",
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
        flxChangeValues2.add(lblChangeValue2, lblChangeCount2);
        var flxIndexValues2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxIndexValues2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "46%",
            "zIndex": 1
        }, {}, {});
        flxIndexValues2.setDefaultUnit(kony.flex.DP);
        var lblIndexCount2 = new kony.ui.Label({
            "id": "lblIndexCount2",
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
        var lbIndexValue2 = new kony.ui.Label({
            "id": "lbIndexValue2",
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
        flxIndexValues2.add(lblIndexCount2, lbIndexValue2);
        flxChangeNIndex2.add(flxChangeValues2, flxIndexValues2);
        flxGroupMain2.add(flxGroupValue2, flxChangeNIndex2);
        flxDOSOverview.add(flxGroupMain1, flxGroupMain2);
        return flxDOSOverview;
    }
})