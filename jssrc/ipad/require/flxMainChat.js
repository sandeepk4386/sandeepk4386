define("flxMainChat", function() {
    return function(controller) {
        var flxMainChat = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMainChat",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMainChat.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "24dp",
            "isModalContainer": false,
            "right": "24dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var lblLine1 = new kony.ui.Label({
            "height": "1dp",
            "id": "lblLine1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFFFFFFBg",
            "textStyle": {},
            "top": "10dp",
            "width": "200dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblDate = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDate",
            "isVisible": true,
            "left": "14dp",
            "skin": "sknLblFFFFFF14PxRobotoNormal",
            "textStyle": {},
            "top": "11dp",
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
        var lblLine2 = new kony.ui.Label({
            "centerY": "50%",
            "height": "1dp",
            "id": "lblLine2",
            "isVisible": true,
            "left": "14dp",
            "skin": "sknLblFFFFFFBg",
            "textStyle": {},
            "top": "0dp",
            "width": "200dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxMainContainer.add(lblLine1, lblDate, lblLine2);
        var flxLeftChat1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLeftChat1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxLeftChat1.setDefaultUnit(kony.flex.DP);
        var flxData1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxData1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "24dp",
            "isModalContainer": false,
            "skin": "sknFlxBg1c214eRad4Px",
            "top": "10dp",
            "width": "70%",
            "zIndex": 1
        }, {}, {});
        flxData1.setDefaultUnit(kony.flex.DP);
        var flxName1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxName1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxName1.setDefaultUnit(kony.flex.DP);
        var lblName1 = new kony.ui.Label({
            "id": "lblName1",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblDescFFFFFF",
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
        var lblTime1 = new kony.ui.Label({
            "id": "lblTime1",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLbl94A3B3",
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
        flxName1.add(lblName1, lblTime1);
        var imgChat1 = new kony.ui.Image2({
            "bottom": "12dp",
            "centerX": "50%",
            "id": "imgChat1",
            "imageWhenFailed": "spinner.gif",
            "imageWhileDownloading": "spinner.gif",
            "isVisible": true,
            "skin": "slImage",
            "src": "spinner.gif",
            "top": "17dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblMessage1 = new kony.ui.RichText({
            "bottom": 12,
            "id": "lblMessage1",
            "isVisible": true,
            "left": "16dp",
            "linkSkin": "defRichTextLink",
            "skin": "sknRichChatRegFFFFFF100",
            "top": "5dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxData1.add(flxName1, imgChat1, lblMessage1);
        flxLeftChat1.add(flxData1);
        var flxRightChat2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRightChat2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "reverseLayoutDirection": false,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRightChat2.setDefaultUnit(kony.flex.DP);
        var flxData2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxData2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "right": "16dp",
            "skin": "sknFlxBg1c214eRad4Px",
            "top": "10dp",
            "width": "70%",
            "zIndex": 1
        }, {}, {});
        flxData2.setDefaultUnit(kony.flex.DP);
        var flxName2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxName2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxName2.setDefaultUnit(kony.flex.DP);
        var lblName2 = new kony.ui.Label({
            "id": "lblName2",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblDescFFFFFF",
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
        var lblTime2 = new kony.ui.Label({
            "id": "lblTime2",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLbl94A3B3",
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
        flxName2.add(lblName2, lblTime2);
        var imgChat2 = new kony.ui.Image2({
            "bottom": "12dp",
            "centerX": "50%",
            "id": "imgChat2",
            "imageWhenFailed": "icon.png",
            "imageWhileDownloading": "spinner.gif",
            "isVisible": true,
            "right": 0,
            "skin": "slImage",
            "src": "spinner.gif",
            "top": "17dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblMessage2 = new kony.ui.RichText({
            "bottom": 12,
            "id": "lblMessage2",
            "isVisible": true,
            "left": "16dp",
            "linkSkin": "defRichTextLink",
            "skin": "sknRichChatRegFFFFFF100",
            "top": "5dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxData2.add(flxName2, imgChat2, lblMessage2);
        flxRightChat2.add(flxData2);
        flxMainChat.add(flxMainContainer, flxLeftChat1, flxRightChat2);
        return flxMainChat;
    }
})