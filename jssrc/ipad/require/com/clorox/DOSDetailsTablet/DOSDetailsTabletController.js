define("com/clorox/DOSDetailsTablet/userDOSDetailsTabletController", function() {
    var Utils = require("UtilsCL");
    var AppConstants = require("AppConstants");
    var dosData_Arr = [];
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.applyBindings();
        },
        applyBindings: function() {
            if (isShareIconEnable === "true") {
                this.view.lblOrderTypeShareIcon.setVisibility(true);
            } else {
                this.view.lblOrderTypeShareIcon.setVisibility(false);
            }
        },
        setFormDosData: function(dosChartData) {
            try {
                dosData_Arr = dosChartData[0];
                this.view.lblOrdersHead.text = gblSelectedOverviewType;
                if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.mtdShipments")) {
                    this.view.lblOrdersHead.skin = "sknLblEEB64F16px114";
                } else if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.NDF")) {
                    this.view.lblOrdersHead.skin = "sknLblC597FF114RMedium";
                } else {
                    this.view.lblOrdersHead.skin = "sknLblA7DCECRB16px114";
                }
                if (!Utils.isNullorEmpty(dosData_Arr)) {
                    this.setSegmentsData(false);
                }
            } catch (e) {
                kony.print("Exception in setFormData:: " + e);
            }
        },
        setSegmentsData: function(businessClick) {
            try {
                var k, data, headerName;
                if (businessClick) {
                    dosData_Arr = gblChartDataArray;
                    headerName = gblChartDataBackHead[(gblChartDataBackHead.length) - 1];
                } else {
                    headerName = dosDataBackHead[(dosDataBackHead.length) - 1]
                }
                if (!Utils.isNullorEmpty(dosData_Arr) && dosData_Arr.length >= 1) {
                    k = dosData_Arr.length - 1;
                    data = dosData_Arr[k];
                } else {
                    k = 0;
                    data = dosData_Arr;
                }
                dosChartRefernce.view.TopBottomNavigation.flxReset = true;
                dosChartRefernce.view.TopBottomNavigation.lblBack = true;
                if (!Utils.isNullorEmpty(data)) {
                    if (!Utils.isNullorEmpty(data.metric) && !Utils.isNullorEmpty(data.Common)) this.setDataDetails(data.metric, data.Common[0]);
                    if (!Utils.isNullorEmpty(data.Common)) dosChartRefernce.view.DOSHeader.setHeaderData(data.Common[0], headerName);
                    if (!Utils.isNullorEmpty(data.Products)) {
                        dosChartRefernce.view.DOSBusinessCustomersTablet.top = "30dp";
                        dosChartRefernce.view.DOSBusinessCustomersTablet.setBusinessData(data.Products, k, data.Common[0]);
                    } else {
                        dosChartRefernce.view.DOSBusinessCustomersTablet.top = "-16dp";
                        dosChartRefernce.view.DOSBusinessCustomersTablet.setBusinessDataOff();
                    }
                    if (!Utils.isNullorEmpty(data.Customers)) {
                        dosChartRefernce.view.DOSBusinessCustomersTablet.setCustomersData(data.Customers, data.Common[0]);
                    } else {
                        dosChartRefernce.view.DOSBusinessCustomersTablet.setCustomersDataOff();
                    }
                }
                dosChartRefernce.view.DOSHeader.setFocus(true);
                Utils.hideLoadingIndicator();
            } catch (e) {
                kony.print("Exception in setSegmentsData:: " + e);
            }
        },
        setDataDetails: function(data, commonData) {
            try {
                var segData = [];
                var skinValue;
                var tempValue = [];
                if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.mtdOrders")) {
                    for (let i = 0; i < data.length; i++) {
                        tempValue = parseInt(data[i].value);
                        if (data[i].kpi_name === AppConstants.ODR_MTD_ORDERS_VS_MTD_YA_ORDERS_INDEX) {
                            if (!Utils.isNullorEmpty(data[i].value)) {
                                skinValue = ((data[i].value).replace(/,/g, '') >= 100) ? "sknLbl0AC7C2SSPR16px100" : "sknLblE34547SSPR16px100";
                            } else {
                                skinValue = "sknLblFFFFFFRL100";
                            }
                        } else if (data[i].kpi_name === AppConstants.ODR_MTD_ORDERS_YA_CHANGE) {
                            if (!Utils.isNullorEmpty(data[i].value)) {
                                skinValue = ((data[i].value).replace(/,/g, '') >= 0) ? "sknLbl0AC7C2SSPR16px100" : "sknLblE34547SSPR16px100";
                                tempValue = (data[i].value > 0) ? "+" + parseInt(data[i].value).toLocaleString('en-US') : parseInt(data[i].value).toLocaleString('en-US');
                            } else {
                                skinValue = "sknLblFFFFFFRL100";
                            }
                        } else {
                            skinValue = "sknLblFFFFFFRL100";
                        }
                        var temp = {
                            "lblOrderName": data[i].name,
                            "lblOrdersValue": {
                                text: tempValue.toLocaleString('en-US'),
                                skin: skinValue
                            },
                        };
                        segData.push(temp);
                    }
                } else if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.avgDaily")) {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].kpi_name === AppConstants.ADO_AVG_DAILY_ORDERS_VS_YA_INDEX) {
                            if (!Utils.isNullorEmpty(data[i].value)) {
                                skinValue = ((data[i].value).replace(/,/g, '') <= 100) ? "sknLbl0AC7C2SSPR16px100" : "sknLblE34547SSPR16px100";
                            } else {
                                skinValue = "sknLblFFFFFFRL100";
                            }
                        } else {
                            skinValue = "sknLblFFFFFFRL100";
                        }
                        var temp = {
                            "lblOrderName": data[i].name,
                            "lblOrdersValue": {
                                text: (parseInt(data[i].value).toLocaleString('en-US')),
                                skin: skinValue
                            },
                        };
                        segData.push(temp);
                    }
                } else if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.mtdShipments")) {
                    for (let i = 0; i < data.length; i++) {
                        tempValue = parseInt(data[i].value);
                        if (data[i].kpi_name === AppConstants.SHIP_MTD_SHIPMENTS_YA_INDEX) {
                            if (!Utils.isNullorEmpty(data[i].value)) {
                                skinValue = ((data[i].value).replace(/,/g, '') >= 100) ? "sknLbl0AC7C2SSPR16px100" : "sknLblE34547SSPR16px100";
                            } else {
                                skinValue = "sknLblFFFFFFRL100";
                            }
                        } else if (data[i].kpi_name === AppConstants.SHIP_MTD_SHIPMENTS_YA_CHANGE) {
                            if (!Utils.isNullorEmpty(data[i].value)) {
                                skinValue = ((data[i].value).replace(/,/g, '') >= 0) ? "sknLbl0AC7C2SSPR16px100" : "sknLblE34547SSPR16px100";
                                tempValue = (data[i].value > 0) ? "+" + parseInt(data[i].value).toLocaleString('en-US') : parseInt(data[i].value).toLocaleString('en-US');
                            } else {
                                skinValue = "sknLblFFFFFFRL100";
                            }
                        } else if (data[i].kpi_name === AppConstants.SHIP_MTD_SHIPMENTS_VS_NDF) {
                            var timeElapsed = commonData.timeelapsed.split("%", 1);
                            if (!Utils.isNullorEmpty(timeElapsed) && timeElapsed.length > 0 && kony.os.toNumber(data[i].value) >= kony.os.toNumber(timeElapsed[0])) {
                                skinValue = "sknLbl0AC7C2SSPR16px100";
                            } else {
                                skinValue = "sknLblE34547SSPR16px100";
                            }
                        } else {
                            skinValue = "sknLblFFFFFFRL100";
                        }
                        var temp = {
                            "lblOrderName": data[i].name,
                            "lblOrdersValue": {
                                text: tempValue.toLocaleString('en-US'),
                                skin: skinValue
                            },
                        };
                        segData.push(temp);
                    }
                } else {
                    for (let i = 0; i < data.length; i++) {
                        tempValue = parseInt(data[i].value);
                        skinValue = "sknLblFFFFFSSPR16px100";
                        if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.NDF")) {
                            if (data[i].kpi_name === AppConstants.NDF_MTD_SHIPMENTS_VS_NDF || data[i].kpi_name === AppConstants.NDF_MTD_ORDERS_VS_NDF) { // AS FOR NDF BOTH ARE INDEX VALUES
                                if (!Utils.isNullorEmpty(data[i].value)) {
                                    skinValue = ((data[i].value).replace(/,/g, '') > 100) ? "sknLbl0AC7C2SSPR16px100" : "sknLblE34547SSPR16px100";
                                }
                            } else if (data[i].kpi_name === AppConstants.ODR_MTD_ORDERS_YA_CHANGE) { //change value not coming in res
                                if (!Utils.isNullorEmpty(data[i].value)) {
                                    skinValue = ((data[i].value).replace(/,/g, '') >= 0) ? "sknLbl0AC7C2SSPR16px100" : "sknLblE34547SSPR16px100";
                                    tempValue = (data[i].value > 0) ? "+" + parseInt(data[i].value).toLocaleString('en-US') : parseInt(data[i].value).toLocaleString('en-US');
                                }
                            }
                        }
                        var mtd = {
                            "lblOrderName": data[i].name,
                            "lblOrdersValue": {
                                text: tempValue.toLocaleString('en-US'),
                                skin: skinValue
                            },
                        };
                        segData.push(mtd);
                    }
                }
                this.view.segDosDetails.removeAll();
                this.view.segDosDetails.setData(segData);
            } catch (e) {
                kony.print("Exception in setDataDetails:: " + e);
            }
        },
    };
});
define("com/clorox/DOSDetailsTablet/DOSDetailsTabletControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/clorox/DOSDetailsTablet/DOSDetailsTabletController", ["com/clorox/DOSDetailsTablet/userDOSDetailsTabletController", "com/clorox/DOSDetailsTablet/DOSDetailsTabletControllerActions"], function() {
    var controller = require("com/clorox/DOSDetailsTablet/userDOSDetailsTabletController");
    var actions = require("com/clorox/DOSDetailsTablet/DOSDetailsTabletControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_ShareIconOnTouchEnd_c62b40b7986046349542833d05717a01 = function() {
        if (this.ShareIconOnTouchEnd) {
            this.ShareIconOnTouchEnd.apply(this, arguments);
        }
    }
    return controller;
});
