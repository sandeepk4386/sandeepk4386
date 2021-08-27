define(function() {
    return function(controller) {
        var DosDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "DosDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "DosDetails"), extendConfig({}, controller.args[1], "DosDetails"), extendConfig({}, controller.args[2], "DosDetails"));
        DosDetails.setDefaultUnit(kony.flex.DP);
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
            "textStyle": {},
            "top": "5dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
            "top": "5dp",
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
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblOrdersHead"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOrdersHead"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblOrdersHead"));
        var lblOrderTypeShareIcon = new kony.ui.Label(extendConfig({
            "id": "lblOrderTypeShareIcon",
            "isVisible": true,
            "onTouchEnd": controller.AS_shareIconTouchEnd_haa46a85c19b4157bc98626940e2e825,
            "right": "0dp",
            "skin": "sknLblA7DCECShare",
            "text": "0",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblOrderTypeShareIcon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOrderTypeShareIcon"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblOrderTypeShareIcon"));
        flxDosHead.add(lblOrdersHead, lblOrderTypeShareIcon);
        var segDosDetails = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
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
                "flxOrdersHead": "flxOrdersHead",
                "lblOrdersHead": "lblOrdersHead",
                "lblOrdersValue": "lblOrdersValue"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segDosDetails"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segDosDetails"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_ROW_SELECT,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segDosDetails"));
        flxDosDetail.add(lblHeader, flxDosHead, segDosDetails);
        DosDetails.add(flxDosDetail);
        return DosDetails;
    }
})