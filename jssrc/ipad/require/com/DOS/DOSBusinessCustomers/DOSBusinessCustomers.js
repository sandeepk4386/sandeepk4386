define(function() {
    return function(controller) {
        var DOSBusinessCustomers = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "DOSBusinessCustomers",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "DOSBusinessCustomers"), extendConfig({}, controller.args[1], "DOSBusinessCustomers"), extendConfig({}, controller.args[2], "DOSBusinessCustomers"));
        DOSBusinessCustomers.setDefaultUnit(kony.flex.DP);
        var flxBusCustMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxBusCustMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBusCustMain"), extendConfig({}, controller.args[1], "flxBusCustMain"), extendConfig({}, controller.args[2], "flxBusCustMain"));
        flxBusCustMain.setDefaultUnit(kony.flex.DP);
        var flxBusinessUnitMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxBusinessUnitMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBusinessUnitMain"), extendConfig({}, controller.args[1], "flxBusinessUnitMain"), extendConfig({}, controller.args[2], "flxBusinessUnitMain"));
        flxBusinessUnitMain.setDefaultUnit(kony.flex.DP);
        var flxBusinesslabels = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "57dp",
            "id": "flxBusinesslabels",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBusinesslabels"), extendConfig({}, controller.args[1], "flxBusinesslabels"), extendConfig({}, controller.args[2], "flxBusinesslabels"));
        flxBusinesslabels.setDefaultUnit(kony.flex.DP);
        var lblBusiness = new kony.ui.Label(extendConfig({
            "id": "lblBusiness",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFFFFFSSPSB24px",
            "text": kony.i18n.getLocalizedString("i18.clorox.businessUnits"),
            "textStyle": {},
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblBusiness"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBusiness"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBusiness"));
        var lblBusinessChildHead = new kony.ui.Label(extendConfig({
            "bottom": "5dp",
            "id": "lblBusinessChildHead",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblA7DCEC16pxNormal",
            "textStyle": {},
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblBusinessChildHead"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBusinessChildHead"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBusinessChildHead"));
        var lblBusinnesUnitShareIcon = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblBusinnesUnitShareIcon",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLblA7DCECShare",
            "text": "0",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBusinnesUnitShareIcon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBusinnesUnitShareIcon"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBusinnesUnitShareIcon"));
        flxBusinesslabels.add(lblBusiness, lblBusinessChildHead, lblBusinnesUnitShareIcon);
        var flxBusinessSegment = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxBusinessSegment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBusinessSegment"), extendConfig({}, controller.args[1], "flxBusinessSegment"), extendConfig({}, controller.args[2], "flxBusinessSegment"));
        flxBusinessSegment.setDefaultUnit(kony.flex.DP);
        var segBusiness = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }],
            "groupCells": false,
            "id": "segBusiness",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegRowSkin",
            "rowSkin": "sknSegRowSkin",
            "rowTemplate": "flxDOSMain",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxDOSMain": "flxDOSMain",
                "flxLeft1": "flxLeft1",
                "flxLeft2": "flxLeft2",
                "flxLeft3": "flxLeft3",
                "flxMain": "flxMain",
                "flxSpace1": "flxSpace1",
                "flxSpace2": "flxSpace2",
                "flxSpace3": "flxSpace3",
                "lblCount1": "lblCount1",
                "lblCount2": "lblCount2",
                "lblCount3": "lblCount3",
                "lblName1": "lblName1",
                "lblName2": "lblName2",
                "lblName3": "lblName3"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segBusiness"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segBusiness"), extendConfig({
            "bounces": false,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_ROW_SELECT,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": false
        }, controller.args[2], "segBusiness"));
        var segBusinessChild = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblCount": "",
                "lblName": ""
            }, {
                "lblCount": "",
                "lblName": ""
            }, {
                "lblCount": "",
                "lblName": ""
            }, {
                "lblCount": "",
                "lblName": ""
            }, {
                "lblCount": "",
                "lblName": ""
            }, {
                "lblCount": "",
                "lblName": ""
            }, {
                "lblCount": "",
                "lblName": ""
            }, {
                "lblCount": "",
                "lblName": ""
            }, {
                "lblCount": "",
                "lblName": ""
            }, {
                "lblCount": "",
                "lblName": ""
            }],
            "groupCells": false,
            "id": "segBusinessChild",
            "isVisible": false,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegRowSkin",
            "rowSkin": "sknSegRowSkin",
            "rowTemplate": "flxBusinessUnits",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxBusinessUnits": "flxBusinessUnits",
                "flxContainer": "flxContainer",
                "flxMain": "flxMain",
                "flxSpace": "flxSpace",
                "lblCount": "lblCount",
                "lblName": "lblName"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segBusinessChild"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segBusinessChild"), extendConfig({
            "bounces": false,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_ROW_SELECT,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": false
        }, controller.args[2], "segBusinessChild"));
        flxBusinessSegment.add(segBusiness, segBusinessChild);
        flxBusinessUnitMain.add(flxBusinesslabels, flxBusinessSegment);
        var flxCustomerMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCustomerMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "8dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCustomerMain"), extendConfig({}, controller.args[1], "flxCustomerMain"), extendConfig({}, controller.args[2], "flxCustomerMain"));
        flxCustomerMain.setDefaultUnit(kony.flex.DP);
        var flxCustomersLabels = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "57dp",
            "id": "flxCustomersLabels",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCustomersLabels"), extendConfig({}, controller.args[1], "flxCustomersLabels"), extendConfig({}, controller.args[2], "flxCustomersLabels"));
        flxCustomersLabels.setDefaultUnit(kony.flex.DP);
        var lblCustomersHead = new kony.ui.Label(extendConfig({
            "id": "lblCustomersHead",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFFFFFSSPSB24px",
            "text": kony.i18n.getLocalizedString("i18.clorox.top10Customers"),
            "textStyle": {},
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblCustomersHead"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCustomersHead"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCustomersHead"));
        var lblCustomersChildHead = new kony.ui.Label(extendConfig({
            "bottom": "5dp",
            "id": "lblCustomersChildHead",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblA7DCEC16pxNormal",
            "textStyle": {},
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblCustomersChildHead"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCustomersChildHead"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCustomersChildHead"));
        var lblCustomerShareIcon = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblCustomerShareIcon",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLblA7DCECShare",
            "text": "0",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCustomerShareIcon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCustomerShareIcon"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCustomerShareIcon"));
        flxCustomersLabels.add(lblCustomersHead, lblCustomersChildHead, lblCustomerShareIcon);
        var flxCustomersSegment = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCustomersSegment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCustomersSegment"), extendConfig({}, controller.args[1], "flxCustomersSegment"), extendConfig({}, controller.args[2], "flxCustomersSegment"));
        flxCustomersSegment.setDefaultUnit(kony.flex.DP);
        var segCustomers = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }, {
                "lblCount1": "",
                "lblCount2": "",
                "lblName1": "",
                "lblName2": ""
            }],
            "groupCells": false,
            "id": "segCustomers",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegRowSkin",
            "rowSkin": "sknSegRowSkin",
            "rowTemplate": "flxDOSMain",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxDOSMain": "flxDOSMain",
                "flxLeft1": "flxLeft1",
                "flxLeft2": "flxLeft2",
                "flxLeft3": "flxLeft3",
                "flxMain": "flxMain",
                "flxSpace1": "flxSpace1",
                "flxSpace2": "flxSpace2",
                "flxSpace3": "flxSpace3",
                "lblCount1": "lblCount1",
                "lblCount2": "lblCount2",
                "lblCount3": "lblCount3",
                "lblName1": "lblName1",
                "lblName2": "lblName2",
                "lblName3": "lblName3"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segCustomers"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segCustomers"), extendConfig({
            "bounces": false,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_ROW_SELECT,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": false
        }, controller.args[2], "segCustomers"));
        flxCustomersSegment.add(segCustomers);
        flxCustomerMain.add(flxCustomersLabels, flxCustomersSegment);
        flxBusCustMain.add(flxBusinessUnitMain, flxCustomerMain);
        DOSBusinessCustomers.add(flxBusCustMain);
        return DOSBusinessCustomers;
    }
})