define("flxNotifSett", function() {
    return function(controller) {
        var flxNotifSett = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNotifSett",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxNotifSett.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblNotifSettName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblNotifSettName",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblFFFFFFRobotoLight16Px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxSegToggleMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxSegToggleMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "36dp",
            "skin": "sknflxBioMain",
            "top": "2dp",
            "width": "42dp",
            "zIndex": 1
        }, {}, {});
        flxSegToggleMain.setDefaultUnit(kony.flex.DP);
        var flxSegPushSwtch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "14dp",
            "id": "flxSegPushSwtch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleE5E5E5",
            "width": "34dp",
            "zIndex": 1
        }, {}, {});
        flxSegPushSwtch.setDefaultUnit(kony.flex.DP);
        flxSegPushSwtch.add();
        var flxRoundToggle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "49%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxRoundToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleRoundE5E5E5",
            "width": "20dp",
            "zIndex": 1
        }, {}, {});
        flxRoundToggle.setDefaultUnit(kony.flex.DP);
        flxRoundToggle.add();
        flxSegToggleMain.add(flxSegPushSwtch, flxRoundToggle);
        flxMain.add(lblNotifSettName, flxSegToggleMain);
        flxNotifSett.add(flxMain);
        return flxNotifSett;
    }
})