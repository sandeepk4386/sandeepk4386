define("flxNotification", function() {
    return function(controller) {
        var flxNotification = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNotification",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxNotification.setDefaultUnit(kony.flex.DP);
        var flxNotifDisplay = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNotifDisplay",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTransparent",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxNotifDisplay.setDefaultUnit(kony.flex.DP);
        var flxNotifySub = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "flxNotifySub",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "16dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxNotifySub.setDefaultUnit(kony.flex.DP);
        var lblNotifyIcon = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblNotifyIcon",
            "isVisible": true,
            "left": "12dp",
            "skin": "sknLblNotifyBellWhiteRead",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxNotifDisplayMsgs = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNotifDisplayMsgs",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "86%",
            "zIndex": 1
        }, {}, {});
        flxNotifDisplayMsgs.setDefaultUnit(kony.flex.DP);
        var lblNotifDate = new kony.ui.Label({
            "id": "lblNotifDate",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl94A3B3SSPR14px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblNotifMessage = new kony.ui.Label({
            "id": "lblNotifMessage",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblWhiteBold16Px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "2dp",
            "width": "99%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxNotifDisplayMsgs.add(lblNotifDate, lblNotifMessage);
        flxNotifySub.add(lblNotifyIcon, flxNotifDisplayMsgs);
        var flxSpace = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxSpace",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSpace.setDefaultUnit(kony.flex.DP);
        flxSpace.add();
        var flxLine = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlx313983",
            "top": "0dp",
            "width": "95%",
            "zIndex": 1
        }, {}, {});
        flxLine.setDefaultUnit(kony.flex.DP);
        flxLine.add();
        flxNotifDisplay.add(flxNotifySub, flxSpace, flxLine);
        flxNotification.add(flxNotifDisplay);
        return flxNotification;
    }
})