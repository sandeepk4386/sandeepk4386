define(function() {
    return function(controller) {
        var DOS = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "DOS",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "DOS"), extendConfig({}, controller.args[1], "DOS"), extendConfig({}, controller.args[2], "DOS"));
        DOS.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxScrollMain = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": false,
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxScrollMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFbox",
            "top": "0dp",
            "verticalScrollIndicator": false,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxScrollMain"), extendConfig({}, controller.args[1], "flxScrollMain"), extendConfig({}, controller.args[2], "flxScrollMain"));
        flxScrollMain.setDefaultUnit(kony.flex.DP);
        var DOSHeader = new com.DOS.DOSHeader(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "id": "DOSHeader",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "overrides": {
                "DOSHeader": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "height": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "DOSHeader"), extendConfig({
            "overrides": {}
        }, controller.args[1], "DOSHeader"), extendConfig({
            "overrides": {}
        }, controller.args[2], "DOSHeader"));
        var flxOverViewContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxOverViewContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOverViewContainer"), extendConfig({}, controller.args[1], "flxOverViewContainer"), extendConfig({}, controller.args[2], "flxOverViewContainer"));
        flxOverViewContainer.setDefaultUnit(kony.flex.DP);
        var flxOrdersHead = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxOrdersHead",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOrdersHead"), extendConfig({}, controller.args[1], "flxOrdersHead"), extendConfig({}, controller.args[2], "flxOrdersHead"));
        flxOrdersHead.setDefaultUnit(kony.flex.DP);
        var lblOrdersHead = new kony.ui.Label(extendConfig({
            "id": "lblOrdersHead",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFFFFFSSPSB24px",
            "text": kony.i18n.getLocalizedString("i18.clorox.overView"),
            "textStyle": {},
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
        var lblOrdersShareIcon = new kony.ui.Label(extendConfig({
            "bottom": "1dp",
            "id": "lblOrdersShareIcon",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLblA7DCECShare",
            "text": "0",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblOrdersShareIcon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOrdersShareIcon"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblOrdersShareIcon"));
        flxOrdersHead.add(lblOrdersHead, lblOrdersShareIcon);
        var flxDailyOrders = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "68dp",
            "id": "flxDailyOrders",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGSemiRounded",
            "top": "8dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDailyOrders"), extendConfig({}, controller.args[1], "flxDailyOrders"), extendConfig({}, controller.args[2], "flxDailyOrders"));
        flxDailyOrders.setDefaultUnit(kony.flex.DP);
        var flxAverageDailyOrders = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxAverageDailyOrders",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "13dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAverageDailyOrders"), extendConfig({}, controller.args[1], "flxAverageDailyOrders"), extendConfig({}, controller.args[2], "flxAverageDailyOrders"));
        flxAverageDailyOrders.setDefaultUnit(kony.flex.DP);
        var lblAvgDailyOrders = new kony.ui.Label(extendConfig({
            "id": "lblAvgDailyOrders",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblA7DCECSSPSB16px100",
            "text": kony.i18n.getLocalizedString("i18.clorox.avgDaily"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAvgDailyOrders"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAvgDailyOrders"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAvgDailyOrders"));
        var lblAvgDailyOrdersCount = new kony.ui.Label(extendConfig({
            "id": "lblAvgDailyOrdersCount",
            "isVisible": true,
            "right": "16dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAvgDailyOrdersCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAvgDailyOrdersCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAvgDailyOrdersCount"));
        flxAverageDailyOrders.add(lblAvgDailyOrders, lblAvgDailyOrdersCount);
        var flxAvgDailyOrdersCountLabels = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "22dp",
            "id": "flxAvgDailyOrdersCountLabels",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAvgDailyOrdersCountLabels"), extendConfig({}, controller.args[1], "flxAvgDailyOrdersCountLabels"), extendConfig({}, controller.args[2], "flxAvgDailyOrdersCountLabels"));
        flxAvgDailyOrdersCountLabels.setDefaultUnit(kony.flex.DP);
        var flxNewOrders = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNewOrders",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxNewOrders"), extendConfig({}, controller.args[1], "flxNewOrders"), extendConfig({}, controller.args[2], "flxNewOrders"));
        flxNewOrders.setDefaultUnit(kony.flex.DP);
        var lblNewOrders = new kony.ui.Label(extendConfig({
            "id": "lblNewOrders",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNewOrders"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNewOrders"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNewOrders"));
        var lblNewOrdersCount = new kony.ui.Label(extendConfig({
            "id": "lblNewOrdersCount",
            "isVisible": true,
            "left": "1dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNewOrdersCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNewOrdersCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNewOrdersCount"));
        flxNewOrders.add(lblNewOrders, lblNewOrdersCount);
        var flxIAvgDailyIndexValues = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxIAvgDailyIndexValues",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "16dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "flxIAvgDailyIndexValues"), extendConfig({}, controller.args[1], "flxIAvgDailyIndexValues"), extendConfig({}, controller.args[2], "flxIAvgDailyIndexValues"));
        flxIAvgDailyIndexValues.setDefaultUnit(kony.flex.DP);
        var lblAvgDailyOrdersIndexCount = new kony.ui.Label(extendConfig({
            "id": "lblAvgDailyOrdersIndexCount",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAvgDailyOrdersIndexCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAvgDailyOrdersIndexCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAvgDailyOrdersIndexCount"));
        var lblAvgDailyOrdersIndex = new kony.ui.Label(extendConfig({
            "id": "lblAvgDailyOrdersIndex",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAvgDailyOrdersIndex"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAvgDailyOrdersIndex"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAvgDailyOrdersIndex"));
        flxIAvgDailyIndexValues.add(lblAvgDailyOrdersIndexCount, lblAvgDailyOrdersIndex);
        flxAvgDailyOrdersCountLabels.add(flxNewOrders, flxIAvgDailyIndexValues);
        flxDailyOrders.add(flxAverageDailyOrders, flxAvgDailyOrdersCountLabels);
        var flxMTDOrdersMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "68dp",
            "id": "flxMTDOrdersMain",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGSemiRounded",
            "top": "8dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMTDOrdersMain"), extendConfig({}, controller.args[1], "flxMTDOrdersMain"), extendConfig({}, controller.args[2], "flxMTDOrdersMain"));
        flxMTDOrdersMain.setDefaultUnit(kony.flex.DP);
        var flxMTDOrders = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxMTDOrders",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "13dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMTDOrders"), extendConfig({}, controller.args[1], "flxMTDOrders"), extendConfig({}, controller.args[2], "flxMTDOrders"));
        flxMTDOrders.setDefaultUnit(kony.flex.DP);
        var lblMTDOrders = new kony.ui.Label(extendConfig({
            "id": "lblMTDOrders",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblA7DCECSSPSB16px100",
            "text": kony.i18n.getLocalizedString("i18.clorox.mtdOrders"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMTDOrders"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMTDOrders"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMTDOrders"));
        var lblMTDOrdersCount = new kony.ui.Label(extendConfig({
            "id": "lblMTDOrdersCount",
            "isVisible": true,
            "right": "16dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMTDOrdersCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMTDOrdersCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMTDOrdersCount"));
        flxMTDOrders.add(lblMTDOrders, lblMTDOrdersCount);
        var flxMTDOrderLabels = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "22dp",
            "id": "flxMTDOrderLabels",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMTDOrderLabels"), extendConfig({}, controller.args[1], "flxMTDOrderLabels"), extendConfig({}, controller.args[2], "flxMTDOrderLabels"));
        flxMTDOrderLabels.setDefaultUnit(kony.flex.DP);
        var flxChg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxChg",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxChg"), extendConfig({}, controller.args[1], "flxChg"), extendConfig({}, controller.args[2], "flxChg"));
        flxChg.setDefaultUnit(kony.flex.DP);
        var lblYAChg = new kony.ui.Label(extendConfig({
            "id": "lblYAChg",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblYAChg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblYAChg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblYAChg"));
        var lblYAChgCount = new kony.ui.Label(extendConfig({
            "id": "lblYAChgCount",
            "isVisible": true,
            "left": "1dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblYAChgCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblYAChgCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblYAChgCount"));
        flxChg.add(lblYAChg, lblYAChgCount);
        var flxIndexValues = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxIndexValues",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "16dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "flxIndexValues"), extendConfig({}, controller.args[1], "flxIndexValues"), extendConfig({}, controller.args[2], "flxIndexValues"));
        flxIndexValues.setDefaultUnit(kony.flex.DP);
        var lblMTDIndexCount = new kony.ui.Label(extendConfig({
            "id": "lblMTDIndexCount",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMTDIndexCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMTDIndexCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMTDIndexCount"));
        var lbMTDIndex = new kony.ui.Label(extendConfig({
            "id": "lbMTDIndex",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lbMTDIndex"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbMTDIndex"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lbMTDIndex"));
        flxIndexValues.add(lblMTDIndexCount, lbMTDIndex);
        flxMTDOrderLabels.add(flxChg, flxIndexValues);
        flxMTDOrdersMain.add(flxMTDOrders, flxMTDOrderLabels);
        var flxMTDShipmentsMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "68dp",
            "id": "flxMTDShipmentsMain",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGSemiRounded",
            "top": "8dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMTDShipmentsMain"), extendConfig({}, controller.args[1], "flxMTDShipmentsMain"), extendConfig({}, controller.args[2], "flxMTDShipmentsMain"));
        flxMTDShipmentsMain.setDefaultUnit(kony.flex.DP);
        var flxMTDShipments = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxMTDShipments",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "13dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMTDShipments"), extendConfig({}, controller.args[1], "flxMTDShipments"), extendConfig({}, controller.args[2], "flxMTDShipments"));
        flxMTDShipments.setDefaultUnit(kony.flex.DP);
        var lblMTDOrdersMain = new kony.ui.Label(extendConfig({
            "id": "lblMTDOrdersMain",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblEEB64FSSPSB16px100",
            "text": kony.i18n.getLocalizedString("i18.clorox.mtdShipments"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMTDOrdersMain"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMTDOrdersMain"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMTDOrdersMain"));
        var lblMTDShipmentsMain = new kony.ui.Label(extendConfig({
            "id": "lblMTDShipmentsMain",
            "isVisible": true,
            "right": "16dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMTDShipmentsMain"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMTDShipmentsMain"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMTDShipmentsMain"));
        flxMTDShipments.add(lblMTDOrdersMain, lblMTDShipmentsMain);
        var flxMTDOrdersChild = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "22dp",
            "id": "flxMTDOrdersChild",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMTDOrdersChild"), extendConfig({}, controller.args[1], "flxMTDOrdersChild"), extendConfig({}, controller.args[2], "flxMTDOrdersChild"));
        flxMTDOrdersChild.setDefaultUnit(kony.flex.DP);
        var flxYAChange = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxYAChange",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxYAChange"), extendConfig({}, controller.args[1], "flxYAChange"), extendConfig({}, controller.args[2], "flxYAChange"));
        flxYAChange.setDefaultUnit(kony.flex.DP);
        var lblYAChange = new kony.ui.Label(extendConfig({
            "id": "lblYAChange",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblYAChange"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblYAChange"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblYAChange"));
        var lblYAChangeCount = new kony.ui.Label(extendConfig({
            "id": "lblYAChangeCount",
            "isVisible": true,
            "left": "1dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblYAChangeCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblYAChangeCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblYAChangeCount"));
        flxYAChange.add(lblYAChange, lblYAChangeCount);
        var flxMTDSHipmentsParent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMTDSHipmentsParent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "16dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "flxMTDSHipmentsParent"), extendConfig({}, controller.args[1], "flxMTDSHipmentsParent"), extendConfig({}, controller.args[2], "flxMTDSHipmentsParent"));
        flxMTDSHipmentsParent.setDefaultUnit(kony.flex.DP);
        var lblMTDShipIndexCount = new kony.ui.Label(extendConfig({
            "id": "lblMTDShipIndexCount",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMTDShipIndexCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMTDShipIndexCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMTDShipIndexCount"));
        var lblMTDShipIndex = new kony.ui.Label(extendConfig({
            "id": "lblMTDShipIndex",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMTDShipIndex"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMTDShipIndex"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMTDShipIndex"));
        flxMTDSHipmentsParent.add(lblMTDShipIndexCount, lblMTDShipIndex);
        flxMTDOrdersChild.add(flxYAChange, flxMTDSHipmentsParent);
        flxMTDShipmentsMain.add(flxMTDShipments, flxMTDOrdersChild);
        var segOverview = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "groupCells": false,
            "id": "segOverview",
            "isVisible": true,
            "left": "0",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "segTransparent",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxAverageDailyOrders": "flxAverageDailyOrders",
                "flxAvgDailyOrdersCountLabels": "flxAvgDailyOrdersCountLabels",
                "flxDOSOverview": "flxDOSOverview",
                "flxDailyOrders": "flxDailyOrders",
                "flxIAvgDailyIndexValues": "flxIAvgDailyIndexValues",
                "flxNewOrders": "flxNewOrders",
                "lblAvgDailyOrders": "lblAvgDailyOrders",
                "lblAvgDailyOrdersCount": "lblAvgDailyOrdersCount",
                "lblAvgDailyOrdersIndex": "lblAvgDailyOrdersIndex",
                "lblAvgDailyOrdersIndexCount": "lblAvgDailyOrdersIndexCount",
                "lblNewOrders": "lblNewOrders",
                "lblNewOrdersCount": "lblNewOrdersCount"
            },
            "width": "100%"
        }, controller.args[0], "segOverview"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segOverview"), extendConfig({}, controller.args[2], "segOverview"));
        flxOverViewContainer.add(flxOrdersHead, flxDailyOrders, flxMTDOrdersMain, flxMTDShipmentsMain, segOverview);
        var flxAdditionalMetricUnit = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAdditionalMetricUnit",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAdditionalMetricUnit"), extendConfig({}, controller.args[1], "flxAdditionalMetricUnit"), extendConfig({}, controller.args[2], "flxAdditionalMetricUnit"));
        flxAdditionalMetricUnit.setDefaultUnit(kony.flex.DP);
        var flxAdditionalMetricsMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxAdditionalMetricsMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAdditionalMetricsMain"), extendConfig({}, controller.args[1], "flxAdditionalMetricsMain"), extendConfig({}, controller.args[2], "flxAdditionalMetricsMain"));
        flxAdditionalMetricsMain.setDefaultUnit(kony.flex.DP);
        var flxAdditionalMetricHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxAdditionalMetricHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "flxAdditionalMetricHeader"), extendConfig({}, controller.args[1], "flxAdditionalMetricHeader"), extendConfig({}, controller.args[2], "flxAdditionalMetricHeader"));
        flxAdditionalMetricHeader.setDefaultUnit(kony.flex.DP);
        var lblAdditionalMetrics = new kony.ui.Label(extendConfig({
            "centerY": "50.10%",
            "id": "lblAdditionalMetrics",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFFFFFSSPSB24px",
            "text": "Additional Metrics",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAdditionalMetrics"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAdditionalMetrics"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAdditionalMetrics"));
        var lblAdditionalMetricsDown = new kony.ui.Label(extendConfig({
            "centerY": "55%",
            "id": "lblAdditionalMetricsDown",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLblFFFFFClorox",
            "text": "h",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAdditionalMetricsDown"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAdditionalMetricsDown"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAdditionalMetricsDown"));
        flxAdditionalMetricHeader.add(lblAdditionalMetrics, lblAdditionalMetricsDown);
        var lblAdditionalMetricShareIcon = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAdditionalMetricShareIcon",
            "isVisible": false,
            "right": "0dp",
            "skin": "sknLblA7DCECShare",
            "text": "0",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAdditionalMetricShareIcon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAdditionalMetricShareIcon"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAdditionalMetricShareIcon"));
        flxAdditionalMetricsMain.add(flxAdditionalMetricHeader, lblAdditionalMetricShareIcon);
        var flxAdditionalMetricsExpand = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAdditionalMetricsExpand",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAdditionalMetricsExpand"), extendConfig({}, controller.args[1], "flxAdditionalMetricsExpand"), extendConfig({}, controller.args[2], "flxAdditionalMetricsExpand"));
        flxAdditionalMetricsExpand.setDefaultUnit(kony.flex.DP);
        var segAdditionalMetricsNew = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "groupCells": false,
            "id": "segAdditionalMetricsNew",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "segRowSkin",
            "rowSkin": "segRowSkin",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxDOSExpand": "flxDOSExpand",
                "flxRow1": "flxRow1",
                "lblName": "lblName",
                "lblValue": "lblValue"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segAdditionalMetricsNew"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segAdditionalMetricsNew"), extendConfig({}, controller.args[2], "segAdditionalMetricsNew"));
        flxAdditionalMetricsExpand.add(segAdditionalMetricsNew);
        flxAdditionalMetricUnit.add(flxAdditionalMetricsMain, flxAdditionalMetricsExpand);
        var DOSBusinessCustomers = new com.DOS.DOSBusinessCustomers(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "id": "DOSBusinessCustomers",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "overrides": {
                "DOSBusinessCustomers": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "height": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "DOSBusinessCustomers"), extendConfig({
            "overrides": {}
        }, controller.args[1], "DOSBusinessCustomers"), extendConfig({
            "overrides": {}
        }, controller.args[2], "DOSBusinessCustomers"));
        var flxSpace = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxSpace",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSpace"), extendConfig({}, controller.args[1], "flxSpace"), extendConfig({}, controller.args[2], "flxSpace"));
        flxSpace.setDefaultUnit(kony.flex.DP);
        flxSpace.add();
        flxScrollMain.add(DOSHeader, flxOverViewContainer, flxAdditionalMetricUnit, DOSBusinessCustomers, flxSpace);
        flxMain.add(flxScrollMain);
        DOS.add(flxMain);
        return DOS;
    }
})