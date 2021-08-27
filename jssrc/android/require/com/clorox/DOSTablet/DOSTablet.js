define(function() {
    return function(controller) {
        var DOSTablet = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "DOSTablet",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "DOSTablet"), extendConfig({}, controller.args[1], "DOSTablet"), extendConfig({}, controller.args[2], "DOSTablet"));
        DOSTablet.setDefaultUnit(kony.flex.DP);
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
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
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
        var flxTopContent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTopContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTopContent"), extendConfig({}, controller.args[1], "flxTopContent"), extendConfig({}, controller.args[2], "flxTopContent"));
        flxTopContent.setDefaultUnit(kony.flex.DP);
        var flxOrdersContent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxOrdersContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOrdersContent"), extendConfig({}, controller.args[1], "flxOrdersContent"), extendConfig({}, controller.args[2], "flxOrdersContent"));
        flxOrdersContent.setDefaultUnit(kony.flex.DP);
        var flxOrdersHead = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxOrdersHead",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOrdersHead"), extendConfig({}, controller.args[1], "flxOrdersHead"), extendConfig({}, controller.args[2], "flxOrdersHead"));
        flxOrdersHead.setDefaultUnit(kony.flex.DP);
        var lblOrdersHead = new kony.ui.Label(extendConfig({
            "id": "lblOrdersHead",
            "isVisible": true,
            "left": "3dp",
            "skin": "sknLblFFFFFSSPSB24px",
            "text": kony.i18n.getLocalizedString("i18.clorox.overView"),
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
        var lblOrdersShareIcon = new kony.ui.Label(extendConfig({
            "bottom": "1dp",
            "id": "lblOrdersShareIcon",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLblA7DCECShare",
            "text": "0",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
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
        var flxOverview = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxOverview",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOverview"), extendConfig({}, controller.args[1], "flxOverview"), extendConfig({}, controller.args[2], "flxOverview"));
        flxOverview.setDefaultUnit(kony.flex.DP);
        var flxDailyOrdersMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxDailyOrdersMain",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGCustomRounded",
            "top": "5dp",
            "width": "48.20%",
            "zIndex": 1
        }, controller.args[0], "flxDailyOrdersMain"), extendConfig({}, controller.args[1], "flxDailyOrdersMain"), extendConfig({}, controller.args[2], "flxDailyOrdersMain"));
        flxDailyOrdersMain.setDefaultUnit(kony.flex.DP);
        var flxAvgDailyOrdersCountLabels = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxAvgDailyOrdersCountLabels",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "6dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAvgDailyOrdersCountLabels"), extendConfig({}, controller.args[1], "flxAvgDailyOrdersCountLabels"), extendConfig({}, controller.args[2], "flxAvgDailyOrdersCountLabels"));
        flxAvgDailyOrdersCountLabels.setDefaultUnit(kony.flex.DP);
        var lblAvgDailyOrders = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAvgDailyOrders",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblA7DCECRB16px114",
            "text": kony.i18n.getLocalizedString("i18.clorox.avgDaily"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
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
            "centerY": "50%",
            "id": "lblAvgDailyOrdersCount",
            "isVisible": true,
            "right": "16dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAvgDailyOrdersCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAvgDailyOrdersCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAvgDailyOrdersCount"));
        flxAvgDailyOrdersCountLabels.add(lblAvgDailyOrders, lblAvgDailyOrdersCount);
        var flxNewOrders = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24dp",
            "id": "flxNewOrders",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": false,
            "left": "16dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "35dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "flxNewOrders"), extendConfig({}, controller.args[1], "flxNewOrders"), extendConfig({}, controller.args[2], "flxNewOrders"));
        flxNewOrders.setDefaultUnit(kony.flex.DP);
        var lblNewOrders = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblNewOrders",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
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
            "centerY": "50%",
            "id": "lblNewOrdersCount",
            "isVisible": true,
            "left": "1dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
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
        var flxIAvgDailyndexValues = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24dp",
            "id": "flxIAvgDailyndexValues",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "16dp",
            "skin": "slFbox",
            "top": "35dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "flxIAvgDailyndexValues"), extendConfig({}, controller.args[1], "flxIAvgDailyndexValues"), extendConfig({}, controller.args[2], "flxIAvgDailyndexValues"));
        flxIAvgDailyndexValues.setDefaultUnit(kony.flex.DP);
        var lblAvgDailyOrdersIndexCount = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAvgDailyOrdersIndexCount",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAvgDailyOrdersIndexCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAvgDailyOrdersIndexCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAvgDailyOrdersIndexCount"));
        var lblAvgDailyOrdersIndex = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAvgDailyOrdersIndex",
            "isVisible": true,
            "right": "1dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAvgDailyOrdersIndex"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAvgDailyOrdersIndex"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAvgDailyOrdersIndex"));
        flxIAvgDailyndexValues.add(lblAvgDailyOrdersIndexCount, lblAvgDailyOrdersIndex);
        flxDailyOrdersMain.add(flxAvgDailyOrdersCountLabels, flxNewOrders, flxIAvgDailyndexValues);
        var flxMTDOrdersList = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxMTDOrdersList",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "right": "2dp",
            "skin": "slFbox",
            "top": "5dp",
            "width": "48.20%",
            "zIndex": 1
        }, controller.args[0], "flxMTDOrdersList"), extendConfig({}, controller.args[1], "flxMTDOrdersList"), extendConfig({}, controller.args[2], "flxMTDOrdersList"));
        flxMTDOrdersList.setDefaultUnit(kony.flex.DP);
        var flxMTDOrdersMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMTDOrdersMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGCustomRounded",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMTDOrdersMain"), extendConfig({}, controller.args[1], "flxMTDOrdersMain"), extendConfig({}, controller.args[2], "flxMTDOrdersMain"));
        flxMTDOrdersMain.setDefaultUnit(kony.flex.DP);
        var flxMtdOrdersCountLabel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxMtdOrdersCountLabel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "6dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMtdOrdersCountLabel"), extendConfig({}, controller.args[1], "flxMtdOrdersCountLabel"), extendConfig({}, controller.args[2], "flxMtdOrdersCountLabel"));
        flxMtdOrdersCountLabel.setDefaultUnit(kony.flex.DP);
        var lblMTDOrders = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblMTDOrders",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblA7DCECRB16px114",
            "text": kony.i18n.getLocalizedString("i18.clorox.mtdOrders"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMTDOrders"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMTDOrders"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMTDOrders"));
        var lblMtdOrdersCount = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblMtdOrdersCount",
            "isVisible": true,
            "right": "16dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMtdOrdersCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMtdOrdersCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMtdOrdersCount"));
        flxMtdOrdersCountLabel.add(lblMTDOrders, lblMtdOrdersCount);
        var flxChg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24dp",
            "id": "flxChg",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "16dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "35dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "flxChg"), extendConfig({}, controller.args[1], "flxChg"), extendConfig({}, controller.args[2], "flxChg"));
        flxChg.setDefaultUnit(kony.flex.DP);
        var lblYAChg = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblYAChg",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
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
            "centerY": "50%",
            "id": "lblYAChgCount",
            "isVisible": true,
            "left": "1dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
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
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24dp",
            "id": "flxIndexValues",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "16dp",
            "skin": "slFbox",
            "top": "35dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "flxIndexValues"), extendConfig({}, controller.args[1], "flxIndexValues"), extendConfig({}, controller.args[2], "flxIndexValues"));
        flxIndexValues.setDefaultUnit(kony.flex.DP);
        var lblMTDIndexCount = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblMTDIndexCount",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMTDIndexCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMTDIndexCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMTDIndexCount"));
        var lbMTDIndex = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lbMTDIndex",
            "isVisible": true,
            "right": "1dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
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
        flxMTDOrdersMain.add(flxMtdOrdersCountLabel, flxChg, flxIndexValues);
        flxMTDOrdersList.add(flxMTDOrdersMain);
        var flxMTDShipmentsMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxMTDShipmentsMain",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2dp",
            "isModalContainer": false,
            "skin": "sknFlx1C214EBGCustomRounded",
            "top": "85dp",
            "width": "48.20%",
            "zIndex": 1
        }, controller.args[0], "flxMTDShipmentsMain"), extendConfig({}, controller.args[1], "flxMTDShipmentsMain"), extendConfig({}, controller.args[2], "flxMTDShipmentsMain"));
        flxMTDShipmentsMain.setDefaultUnit(kony.flex.DP);
        var flxMTDOrdersChild = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxMTDOrdersChild",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "6dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMTDOrdersChild"), extendConfig({}, controller.args[1], "flxMTDOrdersChild"), extendConfig({}, controller.args[2], "flxMTDOrdersChild"));
        flxMTDOrdersChild.setDefaultUnit(kony.flex.DP);
        var lblMTDOrdersMain = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblMTDOrdersMain",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblEEB64FRB16px114",
            "text": kony.i18n.getLocalizedString("i18.clorox.mtdShipments"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
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
            "centerY": "50%",
            "id": "lblMTDShipmentsMain",
            "isVisible": true,
            "right": "16dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMTDShipmentsMain"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMTDShipmentsMain"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMTDShipmentsMain"));
        flxMTDOrdersChild.add(lblMTDOrdersMain, lblMTDShipmentsMain);
        var flxChangevSYA = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24dp",
            "id": "flxChangevSYA",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "16dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "35dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "flxChangevSYA"), extendConfig({}, controller.args[1], "flxChangevSYA"), extendConfig({}, controller.args[2], "flxChangevSYA"));
        flxChangevSYA.setDefaultUnit(kony.flex.DP);
        var lblChangevSYA = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblChangevSYA",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblChangevSYA"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblChangevSYA"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblChangevSYA"));
        var lblChangevSYACount = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblChangevSYACount",
            "isVisible": true,
            "left": "1dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblChangevSYACount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblChangevSYACount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblChangevSYACount"));
        flxChangevSYA.add(lblChangevSYA, lblChangevSYACount);
        var flxMTDSHipmentsParent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24dp",
            "id": "flxMTDSHipmentsParent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "16dp",
            "skin": "slFbox",
            "top": "35dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "flxMTDSHipmentsParent"), extendConfig({}, controller.args[1], "flxMTDSHipmentsParent"), extendConfig({}, controller.args[2], "flxMTDSHipmentsParent"));
        flxMTDSHipmentsParent.setDefaultUnit(kony.flex.DP);
        var lblMTDShipIndexCount = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblMTDShipIndexCount",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl0AC7C2SSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
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
            "centerY": "50%",
            "id": "lblMTDShipIndex",
            "isVisible": true,
            "right": "1dp",
            "skin": "sknLblFFFFFSSPR16px100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
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
        flxMTDShipmentsMain.add(flxMTDOrdersChild, flxChangevSYA, flxMTDSHipmentsParent);
        var segOverview = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lbIndexValue": "asfs",
                "lblIndexCount": "gs"
            }, {
                "lbIndexValue": "asfs",
                "lblIndexCount": "gs"
            }, {
                "lbIndexValue": "asfs",
                "lblIndexCount": "gs"
            }, {
                "lbIndexValue": "asfs",
                "lblIndexCount": "gs"
            }],
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
            "rowTemplate": "flxDOSOverview",
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
                "flxChangeNIndex": "flxChangeNIndex",
                "flxChangeValues": "flxChangeValues",
                "flxDOSOverview": "flxDOSOverview",
                "flxGroupMain": "flxGroupMain",
                "flxGroupValue": "flxGroupValue",
                "flxIndexValues": "flxIndexValues",
                "lbIndexValue": "lbIndexValue",
                "lblChangeCount": "lblChangeCount",
                "lblChangeValue": "lblChangeValue",
                "lblGroupName": "lblGroupName",
                "lblGroupValue": "lblGroupValue",
                "lblIndexCount": "lblIndexCount"
            },
            "width": "100%"
        }, controller.args[0], "segOverview"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segOverview"), extendConfig({}, controller.args[2], "segOverview"));
        flxOverview.add(flxDailyOrdersMain, flxMTDOrdersList, flxMTDShipmentsMain, segOverview);
        flxOrdersContent.add(flxOrdersHead, flxOverview);
        flxTopContent.add(flxOrdersContent);
        var flxAdditionalMetricUnit = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAdditionalMetricUnit",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "32dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAdditionalMetricUnit"), extendConfig({}, controller.args[1], "flxAdditionalMetricUnit"), extendConfig({}, controller.args[2], "flxAdditionalMetricUnit"));
        flxAdditionalMetricUnit.setDefaultUnit(kony.flex.DP);
        var flxAdditionalMetricsMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAdditionalMetricsMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxAdditionalMetricsMain"), extendConfig({}, controller.args[1], "flxAdditionalMetricsMain"), extendConfig({}, controller.args[2], "flxAdditionalMetricsMain"));
        flxAdditionalMetricsMain.setDefaultUnit(kony.flex.DP);
        var flxAdditionalMetrics = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxAdditionalMetrics",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxAdditionalMetrics"), extendConfig({}, controller.args[1], "flxAdditionalMetrics"), extendConfig({}, controller.args[2], "flxAdditionalMetrics"));
        flxAdditionalMetrics.setDefaultUnit(kony.flex.DP);
        var lblAdditionalMetrics = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAdditionalMetrics",
            "isVisible": true,
            "left": "3dp",
            "skin": "sknLblFFFFFSSPSB24px",
            "text": "Additional Metrics",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
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
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAdditionalMetricsDown"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAdditionalMetricsDown"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAdditionalMetricsDown"));
        flxAdditionalMetrics.add(lblAdditionalMetrics, lblAdditionalMetricsDown);
        var lblAdditionalMetricShareIcon = new kony.ui.Label(extendConfig({
            "bottom": "1dp",
            "id": "lblAdditionalMetricShareIcon",
            "isVisible": false,
            "right": "20dp",
            "skin": "sknLblA7DCECShare",
            "text": "0",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAdditionalMetricShareIcon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAdditionalMetricShareIcon"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAdditionalMetricShareIcon"));
        flxAdditionalMetricsMain.add(flxAdditionalMetrics, lblAdditionalMetricShareIcon);
        var flxAdditionalMetricsExpand = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAdditionalMetricsExpand",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "6dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxAdditionalMetricsExpand"), extendConfig({}, controller.args[1], "flxAdditionalMetricsExpand"), extendConfig({}, controller.args[2], "flxAdditionalMetricsExpand"));
        flxAdditionalMetricsExpand.setDefaultUnit(kony.flex.DP);
        var segAdditionalMetricsNew = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblName": "",
                "lblValue": ""
            }],
            "groupCells": false,
            "id": "segAdditionalMetricsNew",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegAdditionalMetrics",
            "rowSkin": "sknSegAdditionalMetrics",
            "rowTemplate": "flxDOSExpand",
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
        var DOSBusinessCustomersTablet = new com.clorox.DOSBusinessCustomersTablet(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "id": "DOSBusinessCustomersTablet",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "32dp",
            "width": "100%",
            "zIndex": 1,
            "overrides": {
                "DOSBusinessCustomersTablet": {
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
        }, controller.args[0], "DOSBusinessCustomersTablet"), extendConfig({
            "overrides": {}
        }, controller.args[1], "DOSBusinessCustomersTablet"), extendConfig({
            "overrides": {}
        }, controller.args[2], "DOSBusinessCustomersTablet"));
        var flxSpace = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxSpace",
            "isVisible": false,
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
        flxScrollMain.add(DOSHeader, flxTopContent, flxAdditionalMetricUnit, DOSBusinessCustomersTablet, flxSpace);
        flxMain.add(flxScrollMain);
        DOSTablet.add(flxMain);
        return DOSTablet;
    }
})