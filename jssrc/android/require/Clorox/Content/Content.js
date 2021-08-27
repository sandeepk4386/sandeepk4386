define(function() {
    return function(controller) {
        var Content = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Content",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "Content"), extendConfig({}, controller.args[1], "Content"), extendConfig({}, controller.args[2], "Content"));
        Content.setDefaultUnit(kony.flex.DP);
        var flxTitle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "42dp",
            "id": "flxTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "31dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "flxTitle"), extendConfig({}, controller.args[1], "flxTitle"), extendConfig({}, controller.args[2], "flxTitle"));
        flxTitle.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblTitle",
            "isVisible": true,
            "left": 0,
            "skin": "sknLblWhiteBold",
            "text": kony.i18n.getLocalizedString("i18.clorox.Content"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTitle"));
        flxTitle.add(lblTitle);
        var flxContent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "225dp",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "31dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "126dp",
            "width": "83%",
            "zIndex": 1
        }, controller.args[0], "flxContent"), extendConfig({}, controller.args[1], "flxContent"), extendConfig({}, controller.args[2], "flxContent"));
        flxContent.setDefaultUnit(kony.flex.DP);
        var segContent = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "data": [{
                "lblHeading": ""
            }, {
                "lblHeading": ""
            }, {
                "lblHeading": ""
            }],
            "groupCells": false,
            "height": "255dp",
            "id": "segContent",
            "isVisible": true,
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegContent",
            "rowSkin": "sknSegContent",
            "rowTemplate": "flxMain",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxContentRow": "flxContentRow",
                "flxMain": "flxMain",
                "flxSpace": "flxSpace",
                "lblHeading": "lblHeading"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segContent"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segContent"), extendConfig({}, controller.args[2], "segContent"));
        flxContent.add(segContent);
        Content.add(flxTitle, flxContent);
        return Content;
    }
})