define("flxExpandCollapse", function() {
    return function(controller) {
        var flxExpandCollapse = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxExpandCollapse",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxExpandCollapse.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxLeft1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLeft1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "4dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxLeft1.setDefaultUnit(kony.flex.DP);
        var lblName1 = new kony.ui.Label({
            "id": "lblName1",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblFFFFFSSPB16px100",
            "textStyle": {},
            "top": "8dp",
            "width": "77%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblCount1 = new kony.ui.Label({
            "id": "lblCount1",
            "isVisible": true,
            "right": "16dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {},
            "top": "10dp",
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
        flxLeft1.add(lblName1, lblCount1);
        var flxLeft2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLeft2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxLeft2.setDefaultUnit(kony.flex.DP);
        var lblName2 = new kony.ui.Label({
            "id": "lblName2",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblFFFFFSSPB16px100",
            "textStyle": {},
            "top": "8dp",
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblCount2 = new kony.ui.Label({
            "id": "lblCount2",
            "isVisible": true,
            "right": "22dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {},
            "top": "10dp",
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
        flxLeft2.add(lblName2, lblCount2);
        flxMain.add(flxLeft1, flxLeft2);
        flxExpandCollapse.add(flxMain);
        return flxExpandCollapse;
    }
})