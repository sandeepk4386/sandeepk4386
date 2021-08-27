define(function() {
    return function(controller) {
        var catalog = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "catalog",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "catalog"), extendConfig({}, controller.args[1], "catalog"), extendConfig({}, controller.args[2], "catalog"));
        catalog.setDefaultUnit(kony.flex.DP);
        var linechart = new com.clorox.linechart(extendConfig({
            "height": "100%",
            "id": "linechart",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "linechart": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "linechart"), extendConfig({
            "overrides": {}
        }, controller.args[1], "linechart"), extendConfig({
            "overrides": {}
        }, controller.args[2], "linechart"));
        linechart.chartData = {
            "data": [],
            "schema": [{
                "columnHeaderTemplate": null,
                "columnHeaderText": "Label Name",
                "columnHeaderType": "text",
                "columnID": "lblName",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "b105ebe59709499daec52b0a9d64f91b"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Offshore",
                "columnHeaderType": "text",
                "columnID": "dataVal1",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "h92c1d53595b44098881ae95f1b207c9"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Onsite",
                "columnHeaderType": "text",
                "columnID": "dataVal2",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "eb0f3e4b60824b3da44f364395111637"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Off-On",
                "columnHeaderType": "text",
                "columnID": "dataVal3",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "d2bac2a31f5a43e183b4b1129c377e0c"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Nearshore",
                "columnHeaderType": "text",
                "columnID": "dataVal4",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "d3af2c25bb7f430a8fe1292fd538c176"
            }]
        };
        linechart.linesData = {
            "data": [],
            "schema": [{
                "columnHeaderTemplate": null,
                "columnHeaderText": "Line Name",
                "columnHeaderType": "text",
                "columnID": "lineName",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "je9475c4fad449b28bdbd080e719ab51"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Line Color",
                "columnHeaderType": "text",
                "columnID": "lineColor",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "b5bcd31ce85140ab8f37fdbbe7c89e80"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Marker Symbol",
                "columnHeaderType": "text",
                "columnID": "markerSymbol",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "h02e20ff41fe46bebe7c94cabe2819d6"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Marker Fill Color",
                "columnHeaderType": "text",
                "columnID": "markerFillColor",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "hda6522c90b44915a05b9019f46483d3"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Marker Line Width",
                "columnHeaderType": "text",
                "columnID": "markerLineWidth",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "b5ce9001769342bea4f147a09a5b17b4"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Line Type",
                "columnHeaderType": "text",
                "columnID": "lineType",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "cb708b14e5ab482d99b368ba01449159"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Dash Type",
                "columnHeaderType": "text",
                "columnID": "dashType",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "e2e36bc208c548b5a180f50ef74c266f"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Index",
                "columnHeaderType": "text",
                "columnID": "index",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "e808c2da54394f7da42b36ad802ba001"
            }]
        };
        linechart.minValue = "";
        linechart.maxValue = "";
        linechart.intervalValue = "";
        linechart.xAxisTitle = "x-axis";
        linechart.yAxisTitle = "y-axis";
        linechart.chartTitle = "";
        linechart.titleFontColor = "";
        linechart.titleFontSize = "";
        catalog.add(linechart);
        return catalog;
    }
})