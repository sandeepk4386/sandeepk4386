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
            "height": "68dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
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
            "height": "58dp",
            "id": "flxLeft1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGCustomRounded",
            "top": "0dp",
            "width": "29%",
            "zIndex": 1
        }, {}, {});
        flxLeft1.setDefaultUnit(kony.flex.DP);
        var lblName1 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblName1",
            "isVisible": true,
            "left": "16dp",
            "maxNumberOfLines": 2,
            "skin": "sknLblFFFFFSSPB16px100",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "0dp",
            "width": "52%",
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
            "right": "16dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxSpace1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "9dp",
            "id": "flxSpace1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxLoadMain",
            "top": "58dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSpace1.setDefaultUnit(kony.flex.DP);
        flxSpace1.add();
        flxLeft1.add(lblName1, lblCount1, flxSpace1);
        var flxLeft2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "58dp",
            "id": "flxLeft2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "23dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGSemiRounded",
            "top": "0dp",
            "width": "31%",
            "zIndex": 1
        }, {}, {});
        flxLeft2.setDefaultUnit(kony.flex.DP);
        var lblName2 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblName2",
            "isVisible": true,
            "left": "16dp",
            "maxNumberOfLines": 2,
            "skin": "sknLblFFFFFSSPB16px100",
            "textStyle": {},
            "top": "0dp",
            "width": "65%",
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
            "right": "16dp",
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
            "height": "9dp",
            "id": "flxSpace2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "58dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSpace2.setDefaultUnit(kony.flex.DP);
        flxSpace2.add();
        flxLeft2.add(lblName2, lblCount2, flxSpace2);
        var flxLeft3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "58dp",
            "id": "flxLeft3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "23dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGSemiRounded",
            "top": "0dp",
            "width": "31%",
            "zIndex": 1
        }, {}, {});
        flxLeft3.setDefaultUnit(kony.flex.DP);
        var lblName3 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblName3",
            "isVisible": true,
            "left": "16dp",
            "maxNumberOfLines": 2,
            "skin": "sknLblFFFFFSSPB16px100",
            "textStyle": {},
            "top": "0dp",
            "width": "65%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblCount3 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCount3",
            "isVisible": true,
            "right": "16dp",
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
        var flxSpace3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "9dp",
            "id": "flxSpace3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "58dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSpace3.setDefaultUnit(kony.flex.DP);
        flxSpace3.add();
        flxLeft3.add(lblName3, lblCount3, flxSpace3);
        flxMain.add(flxLeft1, flxLeft2, flxLeft3);
        flxDOSMain.add(flxMain);
        return flxDOSMain;
    }
})