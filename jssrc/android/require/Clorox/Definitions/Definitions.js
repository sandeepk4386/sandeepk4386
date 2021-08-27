define(function() {
    return function(controller) {
        var Definitions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Definitions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknDefinitions",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "Definitions"), extendConfig({}, controller.args[1], "Definitions"), extendConfig({}, controller.args[2], "Definitions"));
        Definitions.setDefaultUnit(kony.flex.DP);
        var flxSegDefinition = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSegDefinition",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "8%",
            "isModalContainer": false,
            "skin": "sknFlxTransparent",
            "top": "0dp",
            "width": "84%",
            "zIndex": 1
        }, controller.args[0], "flxSegDefinition"), extendConfig({}, controller.args[1], "flxSegDefinition"), extendConfig({}, controller.args[2], "flxSegDefinition"));
        flxSegDefinition.setDefaultUnit(kony.flex.DP);
        var segDefinitions = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "RichDefnitionDesc": "",
                "lblDefinitionHeader": ""
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segDefinitions",
            "isVisible": true,
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegDefinitionsFFFFFF",
            "rowSkin": "sknSegDefinitionsFFFFFF",
            "rowTemplate": "flxDefinitionsTemplate",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "RichDefnitionDesc": "RichDefnitionDesc",
                "flxDefinitionsTemplate": "flxDefinitionsTemplate",
                "lblDefinitionHeader": "lblDefinitionHeader"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segDefinitions"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segDefinitions"), extendConfig({
            "dockSectionHeaders": false
        }, controller.args[2], "segDefinitions"));
        flxSegDefinition.add(segDefinitions);
        Definitions.add(flxSegDefinition);
        return Definitions;
    }
})