define("flxDOSMain", function() {
    return function(controller) {
        var flxDOSMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDOSMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxDOSMain.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
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
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxLeft1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGSemiRounded",
            "top": "0dp",
            "width": "48.50%",
            "zIndex": 1
        }, {}, {});
        flxLeft1.setDefaultUnit(kony.flex.DP);
        var lblName1 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblName1",
            "isVisible": true,
            "left": "13dp",
            "skin": "sknLblFFFFFSSPB16px100",
            "textStyle": {},
            "top": "0dp",
            "width": "60%",
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
            "centerY": "50%",
            "id": "lblCount1",
            "isVisible": true,
            "right": "13dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {},
            "top": "0dp",
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
        var flxSpace1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxSpace1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "45dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSpace1.setDefaultUnit(kony.flex.DP);
        flxSpace1.add();
        flxLeft1.add(lblName1, lblCount1, flxSpace1);
        var flxLeft2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxLeft2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlx1C214EBGSemiRounded",
            "top": "0dp",
            "width": "48.50%",
            "zIndex": 1
        }, {}, {});
        flxLeft2.setDefaultUnit(kony.flex.DP);
        var lblName2 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblName2",
            "isVisible": true,
            "left": "13dp",
            "skin": "sknLblFFFFFSSPB16px100",
            "textStyle": {},
            "top": "0dp",
            "width": "60%",
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
            "centerY": "50%",
            "id": "lblCount2",
            "isVisible": true,
            "right": "13dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {},
            "top": "0dp",
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
        var flxSpace2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxSpace2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "45dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSpace2.setDefaultUnit(kony.flex.DP);
        flxSpace2.add();
        flxLeft2.add(lblName2, lblCount2, flxSpace2);
        flxMain.add(flxLeft1, flxLeft2);
        flxDOSMain.add(flxMain);
        return flxDOSMain;
    }
})