define(function() {
    return function(controller) {
        var DOSDetailsTablet = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "DOSDetailsTablet",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "DOSDetailsTablet"), extendConfig({}, controller.args[1], "DOSDetailsTablet"), extendConfig({}, controller.args[2], "DOSDetailsTablet"));
        DOSDetailsTablet.setDefaultUnit(kony.flex.DP);
        var flxDosDetail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDosDetail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDosDetail"), extendConfig({}, controller.args[1], "flxDosDetail"), extendConfig({}, controller.args[2], "flxDosDetail"));
        flxDosDetail.setDefaultUnit(kony.flex.DP);
        var lblHeader = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblHeader",
            "isVisible": false,
            "left": "155dp",
            "skin": "sknLblFFFFFSSPB16px100",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHeader"));
        var flxDosHead = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDosHead",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDosHead"), extendConfig({}, controller.args[1], "flxDosHead"), extendConfig({}, controller.args[2], "flxDosHead"));
        flxDosHead.setDefaultUnit(kony.flex.DP);
        var lblOrdersHead = new kony.ui.Label(extendConfig({
            "id": "lblOrdersHead",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblA7DCECRB16px114",
            "text": kony.i18n.getLocalizedString("i18.clorox.orders"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblOrdersHead"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOrdersHead"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblOrdersHead"));
        var lblOrderTypeShareIcon = new kony.ui.Label(extendConfig({
            "id": "lblOrderTypeShareIcon",
            "isVisible": true,
            "onTouchEnd": controller.AS_ShareIconOnTouchEnd_c62b40b7986046349542833d05717a01,
            "right": "0dp",
            "skin": "sknLblA7DCECShare",
            "text": "0",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblOrderTypeShareIcon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOrderTypeShareIcon"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblOrderTypeShareIcon"));
        flxDosHead.add(lblOrdersHead, lblOrderTypeShareIcon);
        var segDosDetails = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblOrderName": "Average Daily Orders To Go vs YA Index",
                "lblOrdersValue": "3000"
            }],
            "groupCells": false,
            "id": "segDosDetails",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxDosDetails",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "4dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxDosDetails": "flxDosDetails",
                "lblOrderName": "lblOrderName",
                "lblOrdersValue": "lblOrdersValue"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segDosDetails"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segDosDetails"), extendConfig({}, controller.args[2], "segDosDetails"));
        flxDosDetail.add(lblHeader, flxDosHead, segDosDetails);
        DOSDetailsTablet.add(flxDosDetail);
        return DOSDetailsTablet;
    }
})