/**
 * Created by Team HCL.
 * Copyright (c) 2020 HCL Inc. All rights reserved.
 */
/**
 * @controller: Line Chart UDW
 * @author: Suresh Jallipalli
 * @category: Reusable Component
 * @componentVersion: 1.0
 * @description: Generates line chart by taking the required parameters as input
 */
define("com/clorox/linechart/userlinechartController", function() {
    var deviceUtil = require("DeviceUtil");
    return {
        _chartHeight: 500,
        /**
         * @function constructor
         * @private
         * @params {Object} baseConfig, layoutConfig, pspConfig
         */
        constructor: function() {
            kony.print("----------Entering constructor---------");
            //Provide some default values for chart properties
            this._chartProperties = {
                _lineColor: "#1B9ED9",
                //         _minValue: "0",
                _pointWidth: (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.NDF")) ? "5" : "9",
                _gridLineColor: "#313983",
                _rightMargin: "30",
                _leftMargin: "25",
                _bottomMargin: "40",
                _yAxisLabelAlign: "right",
                _labelX: "25",
                _labelY: "5",
                _xAxisLineColor: "#313983",
                _xAxisTickWidth: "2",
                _xAxisTickColor: "#313983",
                _xAxisTickPositions: "[" + gblGraphXTickPositions + "]",
                _xAxisLabelColor: "#FFFFFF",
                _yAxisLabelColor: "#FFFFFF",
                _yAxisLabelFormat: "{value}",
                _yAxisTickAmount: "7",
                _legendItemDistance: (deviceUtil.isiPhone()) ? "4" : "5",
                _legendSymbolWidth: (deviceUtil.isiPhone()) ? "22" : "25",
                _legendBottomMargin: "15",
                _legendTopMargin: "-15",
                _legendAlign: "top",
                _legendColor: "#FFFFFF",
                _legendHiddenColor: "#8585ad",
                _opacity: "1",
                _legendFontSize: (deviceUtil.isiPhone()) ? "12px" : "14px",
                _legendFontFamily: "Roboto",
                _yAxisLabelsFormatter: "function(){if(this.value >= 1000000){var value1 =this.value/1000000 ;if (value1 % 1) {return Highcharts.numberFormat(value1, 2)+'M';}else{return value1+'M';}}else if (this.value >= 1000){var value2=this.value/1000 ;if (value2 % 1) {return Highcharts.numberFormat(value2, 2)+'k';}else{return value2+'k';}}else{var value3=this.value;if (value3 % 1) {return Highcharts.numberFormat(value3, 2);}else{return value3;}}}"
            };
            this._chartTitle = "";
            //       this._chartData = [];
            //       this._linesData = [];
            //Global event for detecting page loaded in HTML - only for Web 
            /* chart_lineChart_defined_global = function(state){
              if(state ==='ready'){
                this.showGridChart(false);
              }
            }.bind(this); */
            //Below doLayout is required to get the Browser Frame size for calc chart size
            this.view.brwLineChart.doLayout = this.onLayoutChart.bind(this);
            //Event for detecting page loaded in HTML - for Native 
            this.view.brwLineChart.onPageFinished = this.showGridChart.bind(this, false);
            var urlConf = {
                URL: "linechart/index.html",
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            this.view.brwLineChart.requestURLConfig = urlConf;
            kony.print("----------Exiting constructor ---------");
        },
        /**
         * @function initGetterSetters
         * @private
         * @description: Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
            this.hexCodeFormat = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
            kony.print('----------Entering initGettersSetters Function---------');
            /* defineSetter(this, 'minValue', function (val) {
               kony.print('----------Entering minValue Setter---------');
               try {
                 if (!isNaN(parseInt(val))) {
                   this._chartProperties._minValue = val;
                 } else {
                   this._chartProperties._minValue = 0;
                 }
               } catch (exception) {
                 kony.print(JSON.stringify(exception));
                 if (exception.Error === 'NotNumber') {
                   throw exception;
                 }
               }
               kony.print('----------Exiting maxValue Setter---------');
             });*/
            defineSetter(this, 'chartData', function(val) {
                kony.print('----------Entering chartData Setter---------');
                this._chartData = val;
                kony.print('----------Exiting chartData Setter---------');
            });
            defineSetter(this, 'linesData', function(val) {
                kony.print('----------Entering linesData Setter---------');
                this._linesData = val;
                kony.print('----------Exiting linesData Setter---------');
            });
            defineSetter(this, 'xAxisTickPositions', function(val) {
                kony.print('----------Entering linesData Setter---------');
                this._chartProperties._xAxisTickPositions = val;
                kony.print('----------Exiting xAxisTickPositions Setter---------');
            });
            defineSetter(this, 'pointWidth', function(val) {
                kony.print('----------Entering pointWidth Setter---------');
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._pointWidth = val;
                    } else {
                        this._chartProperties._pointWidth = "9";
                    }
                } catch (exception) {
                    kony.print(JSON.stringify(exception));
                    if (exception.Error === 'NotNumber') {
                        throw exception;
                    }
                }
                kony.print('----------Exiting pointWidth Setter---------');
            });
            kony.print('----------Exiting initGettersSetters Function---------');
        },
        /**
         * @function onLayoutChart
         * @access exposed to user
         * @param
         * @description: Gets the Height in dp of the Browser Widget so as to get the Chart height
         */
        onLayoutChart: function() {
            var brwHeight = this.view.brwLineChart.frame.height;
            if (deviceUtil.isTablet() || deviceUtil.isiPad()) {
                this._chartHeight = brwHeight * 0.9;
            } else {
                this._chartHeight = brwHeight * 0.87; //Remove some space for display of legend
            }
        },
        /**
         * @function createChart
         * @access exposed to user
         * @param {JSON} dataSet
         * @description: generates line chart by taking the data and the other params as input
         */
        createChart: function(dataSet, linesData, reloadGraph) {
            kony.print("----------Entering createChart Function---------");
            try {
                var lineName, lineColor;
                var series = [];
                var lines = [];
                var noOfSeries = 0;
                if (dataSet !== null && dataSet !== undefined && dataSet !== "" && dataSet.length !== 0) {
                    var hdrData = dataSet.schema;
                    noOfSeries = hdrData.length;
                    var chartData = dataSet.data;
                    //First Index is the Label Names
                    //Data starts from second index
                    for (var index in hdrData) {
                        var colID = hdrData[index].columnID;
                        series[index] = chartData.map(function(obj) {
                            if (index > 0) {
                                return Number(obj["" + colID]);
                            } else {
                                return obj["" + colID];
                            }
                        });
                    }
                } else {
                    throw {
                        "Error": "noData",
                        "message": "Data not passed to chart"
                    };
                }
                if (linesData !== null && linesData !== undefined && linesData !== "" && linesData.length !== 0) {
                    var hdrLineData = linesData.schema;
                    noOfLines = hdrLineData.length;
                    var lineData = linesData.data;
                    //First Index is the Label Names
                    //Data starts from second index
                    for (var j in hdrLineData) {
                        var lineID = hdrLineData[j].columnID;
                        lines[j] = lineData.map(function(obj) {
                            return obj["" + lineID];
                        });
                    }
                } else {
                    throw {
                        "Error": "noData",
                        "message": "Data not passed to chart"
                    };
                }
                if (this.validateAllParams(this._chartTitle, series, lines, this._chartProperties)) {
                    var seriesData = "";
                    for (var i = 1; i < noOfSeries; i++) {
                        seriesData += '{index:' + parseInt(lines[7][i - 1]) + ',pointWidth: ' + this._chartProperties._pointWidth + ',name: ' + JSON.stringify(lines[0][i - 1]) + ',data: ' + JSON.stringify(series[i]) + ',showInLegend: true,color:' + JSON.stringify(lines[1][i - 1]) + ',dashStyle:' + JSON.stringify(lines[6][i - 1]) + ',type:' + JSON.stringify(lines[5][i - 1]) + ',marker:{symbol:' + JSON.stringify(lines[2][i - 1]) + ',fillColor:' + JSON.stringify(lines[3][i - 1]) + ',lineWidth:' + parseInt(lines[4][i - 1]) + ' ,enabled: ' + false + ',lineColor:null}},';
                    }
                    this._chartProperties._xAxisTickPositions = "[" + gblGraphXTickPositions + "]";
                    var highChartData = '{chart:{panning:{enabled:' + true + ',type:"xy"}, pinchType: "xy", zoomType: "xy", height:' + this._chartHeight + ',marginBottom:' + this._chartProperties._bottomMargin + ',marginRight:' + this._chartProperties._rightMargin + ',marginLeft:' + this._chartProperties._leftMargin + ',style:{fontFamily:"Roboto"}},title: {' + 'text:' + JSON.stringify(this._chartTitle) + ', align:"left" }, scrollbar: {enabled: false},' + 'yAxis: {tickAmount:' + JSON.stringify(this._chartProperties._yAxisTickAmount) + ',endOnTick: ' + false + ',opposite: ' + true + ',gridLineColor: ' + JSON.stringify(this._chartProperties._gridLineColor) + ', title: {text:' + JSON.stringify(this._chartProperties._yAxisTitle) + '},labels:{formatter: ' + this._chartProperties._yAxisLabelsFormatter + ', align:' + JSON.stringify(this._chartProperties._yAxisLabelAlign) + ',x:' + this._chartProperties._labelX + ',y:' + this._chartProperties._labelY + ',style:{color: ' + JSON.stringify(this._chartProperties._yAxisLabelColor) + '}}},' + 'xAxis: {categories: ' + JSON.stringify(series[0]) + ',lineColor: ' + JSON.stringify(this._chartProperties._xAxisLineColor) + ',tickWidth: ' + JSON.stringify(this._chartProperties._xAxisTickWidth) + ',tickColor: ' + JSON.stringify(this._chartProperties._xAxisTickColor) + ',tickPositions: ' + this._chartProperties._xAxisTickPositions + ',labels:{style:{color: ' + JSON.stringify(this._chartProperties._xAxisLabelColor) + ', fontFamily:"Roboto"}}},' + 'legend:{itemHiddenStyle:{color:' + JSON.stringify(this._chartProperties._legendHiddenColor) + '},itemHoverStyle:{color:' + null + '},itemDistance:' + this._chartProperties._legendItemDistance + ', symbolWidth:' + this._chartProperties._legendSymbolWidth + ',itemMarginTop:' + this._chartProperties._legendTopMargin + ',itemMarginBottom :' + this._chartProperties._legendBottomMargin + ',verticalAlign: ' + JSON.stringify(this._chartProperties._legendAlign) + ', itemStyle: {color:' + JSON.stringify(this._chartProperties._legendColor) + ',fontSize:' + JSON.stringify(this._chartProperties._legendFontSize) + ',fontFamily:' + JSON.stringify(this._chartProperties._legendFontFamily) + '} },' + 'plotOptions:{series: {states: {inactive:{opacity:' + this._chartProperties._opacity + '}, hover: { enabled: ' + false + '}}}},' + 'tooltip:{followTouchMove:' + false + '},' + 'series: [' + seriesData + '],}';
                    this.view.flxBrowserTop.isVisible = false;
                    this.view.brwLineChart.evaluateJavaScript('Highcharts.chart("lineChartContainer",' + highChartData + '); Highcharts.setOptions({lang:{thousandsSep: ""}})');
                    this.view.forceLayout();
                    kony.print("----------Exiting createChart Function---------");
                    return true;
                }
            } catch (exception) {
                kony.print(JSON.stringify(exception));
                if (exception.Error === "noData") {
                    throw (exception);
                }
            }
        },
        /**
         * @function validateData
         * @private
         * @param {String/Array/JSON} data
         * @param {String(datatype)} type
         * @description: validates the data param based on the corresponding type param
         */
        validateData: function(data, type) {
            kony.print("----------Entering validateData Function---------");
            try {
                if (type === 'array') {
                    kony.print("----------Exiting validateData Function---------");
                    return Array.isArray(data);
                } else if (typeof data === type) {
                    kony.print("----------Exiting validateData Function---------");
                    return true;
                } else {
                    kony.print("----------Exiting validateData Function---------");
                    return false;
                }
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        /**
         * @function validateAllParams
         * @private
         * @params {String} title, color, xAxisTitle, yAxisTitle
         * @params {JS Array} labels, series 
         * @description: invokes the validation of all params and returns a true only if all are validated
         */
        validateAllParams: function(title, series, lines, properties) {
            kony.print("----------Entering validateAllParams Function---------");
            try {
                if (!this.validateData(title, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for title " + JSON.stringify(title)
                    };
                }
                if (!this.validateData(lines, 'array')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong datatype for labels " + JSON.stringify(labels)
                    };
                }
                if (!this.validateData(series, 'array')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong datatype for series " + JSON.stringify(series1)
                    };
                }
            } catch (exception) {
                kony.print(JSON.stringify(exception));
                if (exception.Error === "Invalid Datatype") {
                    throw (exception);
                }
            }
            kony.print("----------Exiting validateAllParams Function---------");
            return true;
        },
        /**
         * @function showGridChart
         * @param dataSet 
         * @description creates the chart with the data in the data grid on browser load
         */
        showGridChart: function(reloadGraph) {
            try {
                kony.print("inside showGrid method");
                if (this._chartData.length !== 0) {
                    this.createChart(this._chartData, this._linesData, reloadGraph);
                } else {
                    throw {
                        "Error": "NoData",
                        "message": "No data in data grid"
                    };
                }
            } catch (exception) {
                if (exception.Error === "NoData") {
                    kony.print(JSON.stringify(exception));
                }
            }
        }
    };
});
define("com/clorox/linechart/linechartControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/clorox/linechart/linechartController", ["com/clorox/linechart/userlinechartController", "com/clorox/linechart/linechartControllerActions"], function() {
    var controller = require("com/clorox/linechart/userlinechartController");
    var actions = require("com/clorox/linechart/linechartControllerActions");
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
