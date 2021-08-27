define("com/clorox/catalog/usercatalogController", function() {
    var Utils = require("UtilsCL");
    var deviceUtil = require("DeviceUtil");
    return {
        /* First Function invoked after navigation*/
        _selComponent: null,
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.applyBindings();
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineGetter(this, 'selComponent', () => {
                return this._selComponent;
            });
            defineSetter(this, 'selComponent', value => {
                this._selComponent = value;
            });
        },
        /* Method where widgets bindings are configured  */
        applyBindings: function() {
            this.view.preShow = this.onPreShow.bind(this);
        },
        /* Method callback on pre show of the form  */
        onPreShow: function() {
            switch (this._selComponent) {
                case "Line Chart (HighCharts)":
                    this.addLineChart(false);
                    break;
                default:
                    alert("Please select a valid component");
                    break;
            }
            kony.application.dismissLoadingScreen();
        },
        addLineChart: function(reloadChart) {
            try {
                var lblType1, lblType2, lblType3 = "";
                var lblName1, lblName2 = "";
                var ndfArray = [];
                var dateArray = [];
                var dateArrayAlternate = [];
                gblGraphXTickPositions = [];
                if (!Utils.isNullorEmpty(gblGraphData) && !Utils.isNullorEmpty(gblGraphData.data)) {
                    if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.mtdOrders")) {
                        lblType1 = "mtd_orders";
                        lblType2 = "mtd_orders_ya";
                        lblType3 = "ndf";
                        lblName1 = "MTD Orders";
                        lblName2 = "MTD Orders YA";
                    } else if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.avgDaily")) {
                        lblType1 = "new_orders";
                        lblType2 = "avg_daily_orders";
                        lblType3 = "ndf";
                        lblName1 = "New Orders";
                        lblName2 = "ADO";
                    } else if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.mtdShipments")) {
                        lblType1 = "mtd_shipments";
                        lblType2 = "mtd_shipments_ya";
                        lblType3 = "ndf";
                        lblName1 = (deviceUtil.isTablet() || deviceUtil.isiPad()) ? "MTD Shipments" : "MTD Ship";
                        lblName2 = (deviceUtil.isTablet() || deviceUtil.isiPad()) ? "MTD Shipment YA" : "MTD Ship YA";
                    } else if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.NDF")) {
                        lblType1 = "mtd_orders";
                        lblType2 = "mtd_shipments";
                        lblType3 = "ndf";
                        lblName1 = "MTD Orders";
                        lblName2 = (deviceUtil.isTablet() || deviceUtil.isiPad()) ? "MTD Shipments" : "MTD Ship";
                    }
                }
                dateArray = [];
                for (let i = 0; i < gblGraphData.data.length; i++) {
                    ndfArray.push(gblGraphData.data[i].ndf);
                    let date = parseInt(gblGraphData.data[i].date.substring(6, 8));
                    dateArray.push(i);
                    if (!gblGraphData.data[i].date.includes("-")) {
                        gblGraphData.data[i].date = Utils.formatdateMonth(gblGraphData.data[i].date);
                    }
                }
                dateArrayAlternate = [];
                dateArrayAlternate = dateArray.filter((element, index) => index % 2 === 0);
                gblGraphXTickPositions = dateArrayAlternate;
                let ndfMax = Math.max.apply(null, ndfArray);
                var lineSkin = (lblName2 === "MTD Ship YA" || lblName2 === "MTD Shipment YA") ? "#EEB64F" : "#A7DCEC";
                var isLine = true;
                var pointWidth = "9";
                var line2Skin = "#A7DCEC";
                if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.NDF")) {
                    lineSkin = "#EEB64F";
                    line2Skin = "#0AC7C2";
                    isLine = false;
                    pointWidth = "5";
                }
                this.view.linechart.chartData = {
                    "data": gblGraphData.data,
                    "schema": [{
                        "columnHeaderTemplate": null,
                        "columnHeaderText": "Label Name",
                        "columnHeaderType": "text",
                        "columnID": "date",
                        "columnText": "Not Defined",
                        "columnType": "text",
                        "kuid": "b105ebe59709499daec52b0a9d64f91b"
                    }, {
                        "columnHeaderTemplate": null,
                        "columnHeaderText": "NDF",
                        "columnHeaderType": "text",
                        "columnID": lblType3,
                        "columnText": "Not Defined",
                        "columnType": "text",
                        "kuid": "h92c1d53595b44098881ae95f1b207c9"
                    }, {
                        "columnHeaderTemplate": null,
                        "columnHeaderText": "MTD Orders YA",
                        "columnHeaderType": "text",
                        "columnID": lblType2,
                        "columnText": "Not Defined",
                        "columnType": "text",
                        "kuid": "eb0f3e4b60824b3da44f364395111637"
                    }, {
                        "columnHeaderTemplate": null,
                        "columnHeaderText": "MTD Orders",
                        "columnHeaderType": "text",
                        "columnID": lblType1,
                        "columnText": "Not Defined",
                        "columnType": "text",
                        "kuid": "d2bac2a31f5a43e183b4b1129c377e0c"
                    }]
                };
                this.view.linechart.xAxisTitle = "";
                this.view.linechart.chartTitle = "";
                this.view.linechart.yAxisTitle = "";
                this.view.linechart.titleFontColor = "#000000";
                this.view.linechart.titleFontSize = "12";
                this.view.linechart.pointWidth = pointWidth;
                this.view.linechart.gridLineColor = "#313983";
                this.view.linechart.rightMargin = "30";
                this.view.linechart.leftMargin = "25";
                this.view.linechart.yAxisLabelAlign = "right";
                this.view.linechart.labelX = "25";
                this.view.linechart.labelY = "5";
                this.view.linechart.xAxisTickWidth = "2";
                this.view.linechart.xAxisTickPositions = "[" + gblGraphXTickPositions + "]";
                this.view.linechart.xAxisTickColor = "#313983";
                this.view.linechart.xAxisLineColor = "#313983";
                this.view.linechart.yAxisLabelsFormatter = "function(){if(this.value >= 1000000) {return this.value/1000000 + 'M';}else if (this.value >= 1000) {return this.value/1000 + 'K';}else{return this.value}}";
                this.view.linechart.linesData = {
                    "data": [{
                        "lineColor": "#C597FF",
                        "lineName": "NDF",
                        "markerFillColor": "#C597FF",
                        "markerLineWidth": "1",
                        "markerSymbol": "circle", //'circle', 'square','diamond', 'triangle' and 'triangle-down'.
                        "lineType": "line",
                        "dashType": "solid",
                        "index": ""
                    }, {
                        "lineColor": lineSkin,
                        "lineName": lblName2,
                        "markerFillColor": lineSkin,
                        "markerLineWidth": (isLine === false) ? "" : "1",
                        "markerSymbol": (isLine === false) ? "" : "circle",
                        "lineType": (isLine === false) ? "column" : "line",
                        "dashType": (isLine === false) ? "" : "shortdot",
                        "index": "2"
                    }, {
                        "lineColor": (lblName1 === "MTD Ship" || lblName1 === "MTD Shipments") ? "#EEB64F" : line2Skin,
                        "lineName": lblName1,
                        "markerFillColor": (lblName1 === "MTD Ship" || lblName1 === "MTD Shipments") ? "#EEB64F" : line2Skin,
                        "markerLineWidth": "",
                        "markerSymbol": "",
                        "lineType": "column",
                        "dashType": "",
                        "index": "1"
                    }],
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
                if (reloadChart || gblReloadChart) {
                    gblReloadChart = false;
                    reloadChart = true;
                    this.view.linechart.showGridChart(reloadChart);
                }
            } catch (e) {
                kony.print("Exception in addLineChart  ::" + e);
            }
        },
    };
});
define("com/clorox/catalog/catalogControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/clorox/catalog/catalogController", ["com/clorox/catalog/usercatalogController", "com/clorox/catalog/catalogControllerActions"], function() {
    var controller = require("com/clorox/catalog/usercatalogController");
    var actions = require("com/clorox/catalog/catalogControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
