define(function() {
    return function(controller) {
        var DOSHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "DOSHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "DOSHeader"), extendConfig({}, controller.args[1], "DOSHeader"), extendConfig({}, controller.args[2], "DOSHeader"));
        DOSHeader.setDefaultUnit(kony.flex.DP);
        var flxHeaderMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHeaderMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderMain"), extendConfig({}, controller.args[1], "flxHeaderMain"), extendConfig({}, controller.args[2], "flxHeaderMain"));
        flxHeaderMain.setDefaultUnit(kony.flex.DP);
        var flxTopHead = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxTopHead",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTopHead"), extendConfig({}, controller.args[1], "flxTopHead"), extendConfig({}, controller.args[2], "flxTopHead"));
        flxTopHead.setDefaultUnit(kony.flex.DP);
        var lblDate = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblDate",
            "isVisible": true,
            "skin": "sknLblFFFFSSPB24px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDate"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDate"));
        var lblRefresh = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblRefresh",
            "isVisible": false,
            "left": "5dp",
            "skin": "sknLblRefresh",
            "text": "n",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRefresh"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRefresh"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRefresh"));
        flxTopHead.add(lblDate, lblRefresh);
        var flxLabelDef = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLabelDef",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLabelDef"), extendConfig({}, controller.args[1], "flxLabelDef"), extendConfig({}, controller.args[2], "flxLabelDef"));
        flxLabelDef.setDefaultUnit(kony.flex.DP);
        var lblTimeElapsed = new kony.ui.Label(extendConfig({
            "id": "lblTimeElapsed",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl94A3B3SSPL14px87",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "lblTimeElapsed"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTimeElapsed"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTimeElapsed"));
        var lblWorkDaysRemaining = new kony.ui.Label(extendConfig({
            "id": "lblWorkDaysRemaining",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl94A3B3SSPL14px87",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "54%",
            "zIndex": 1
        }, controller.args[0], "lblWorkDaysRemaining"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWorkDaysRemaining"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblWorkDaysRemaining"));
        flxLabelDef.add(lblTimeElapsed, lblWorkDaysRemaining);
        var flxLabelDefWorkdays = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLabelDefWorkdays",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLabelDefWorkdays"), extendConfig({}, controller.args[1], "flxLabelDefWorkdays"), extendConfig({}, controller.args[2], "flxLabelDefWorkdays"));
        flxLabelDefWorkdays.setDefaultUnit(kony.flex.DP);
        var lblNoOfWorkDays = new kony.ui.Label(extendConfig({
            "id": "lblNoOfWorkDays",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl94A3B3SSPL14px87",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "lblNoOfWorkDays"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoOfWorkDays"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNoOfWorkDays"));
        var lblNoOfYAWorkDays = new kony.ui.Label(extendConfig({
            "id": "lblNoOfYAWorkDays",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl94A3B3SSPL14px87",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "54%",
            "zIndex": 1
        }, controller.args[0], "lblNoOfYAWorkDays"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoOfYAWorkDays"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNoOfYAWorkDays"));
        flxLabelDefWorkdays.add(lblNoOfWorkDays, lblNoOfYAWorkDays);
        var flxHeading = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeading"), extendConfig({}, controller.args[1], "flxHeading"), extendConfig({}, controller.args[2], "flxHeading"));
        flxHeading.setDefaultUnit(kony.flex.DP);
        var lblHeadName = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblHeadName",
            "isVisible": true,
            "skin": "sknLblFFFFFSSPB16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "98%",
            "zIndex": 1
        }, controller.args[0], "lblHeadName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeadName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHeadName"));
        flxHeading.add(lblHeadName);
        flxHeaderMain.add(flxTopHead, flxLabelDef, flxLabelDefWorkdays, flxHeading);
        DOSHeader.add(flxHeaderMain);
        return DOSHeader;
    }
})