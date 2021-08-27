var Utils = require("UtilsCL");
define("userfrmDosChartController", {
    overviewType: "",
    APIOverviewSuccessResponse: null,
    dosDataForChart: null,
    tabName: "current_month",
    hdrName: null,
    responseData: [],
    onNavigate: function(dosChartData) {
        try {
            dosMainRef = this;
            gblGraphData = dosChartData[1];
            this.overviewType = dosChartData;
            this.view.catalog.selComponent = "Line Chart (HighCharts)";
            this.applyBindings();
            this.view.lblCrntMnthLine.isVisible = true;
            this.view.lblCrntMnthLine.skin = "sknLbl0AC7C2Bg";
            this.view.lblCurrentMonth.skin = "sknLbl0AC7C2SSPR16px";
            this.view.lblPrvsMnthLine.isVisible = false;
            this.view.lblPreviousMonth.skin = "sknLbl94A3B3RR14px";
        } catch (e) {
            kony.print("In on navigate exception::" + e);
        }
    },
    applyBindings: function() {
        try {
            dosChartRefernce = this;
            this.view.preShow = this.preShow;
            this.view.postShow = this.onPostShow;
            this.view.onOrientationChange = Utils.feedbackOrientationChange;
            this.view.onDeviceBack = function() {};
            this.view.lblCurrentMonth.onTouchEnd = this.monthTabClick.bind(this, "current_month", false);
            this.view.lblPreviousMonth.onTouchEnd = this.monthTabClick.bind(this, "previous_month", false);
            this.view.flxGenericError.isVisible = false;
            this.view.flxGenericError.onClick = () => {};
            this.view.FeedbackPopup.onTouchEnd = function() {};
        } catch (e) {
            kony.print("In on applyBindings exception::" + e);
        }
    },
    onPostShow: function() {
        try {
            var currForm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currForm)) {
                currForm.DOSDetailsTablet.ShareIconOnTouchEnd = Utils.shareFFI.bind(this, this.view.DOSHeader, this.view.DOSDetailsTablet);
            }
            this.view.lblChartShare.onTouchEnd = Utils.shareFFI.bind(this, this.view.DOSHeader, this.view.flxGraph);
            gblIsForeground = true;
        } catch (e) {
            kony.print("In on PostShow exception::" + e);
        }
    },
    preShow: function() {
        try {
            hdrName = gblChartDataBackHead[(gblChartDataBackHead.length) - 1];
            this.view.DOSDetailsTablet.setFormDosData(this.overviewType);
            this.view.Definitions.setSegData();
            this.view.TopBottomNavigation.makeTabActive(1);
            this.view.TopBottomNavigation.disableDefinitions();
            this.view.TopBottomNavigation.flxResetClick = this.resetClick;
            this.view.FeedbackPopup.setVisibility(false);
            Utils.feedbackOrientationChange();
            if (isFeedbackEnable) {
                this.view.Feedback.setVisibility(true);
            } else {
                this.view.Feedback.setVisibility(false);
            }
            if (isShareIconEnable === "true") {
                this.view.flxChartShareIcon.setVisibility(true);
            } else {
                this.view.flxChartShareIcon.setVisibility(false);
            }
        } catch (e) {
            kony.print("In on preshow exception::" + e);
        }
    },
    orientationChange: function() {
        try {
            if (kony.os.getDeviceCurrentOrientation() === constants.DEVICE_ORIENTATION_LANDSCAPE) {
                this.view.flxCurrentMonth.width = "16%";
                this.view.flxPreviousMonth.width = "16%";
                this.view.flxCurrentMonth.right = "60%";
                this.view.flxPreviousMonth.left = "60%";
                this.view.FeedbackPopup.setVisibility(false);
                this.view.TopBottomNavigation.setVisibility(false);
                this.view.DOSHeader.flxHeading = true;
                this.view.DOSHeader.flxLabelDef = false;
                this.view.DOSHeader.flxLabelDefWorkdays = false;
                this.view.DOSHeader.flxTopHead = false;
                this.view.DOSDetailsTablet.setVisibility(false);
                this.view.lblLine.setVisibility(false);
                this.view.DOSBusinessCustomersTablet.setVisibility(false);
                this.view.flxChart.top = "4%";
                this.view.flxChart.left = "6%";
                this.view.flxChart.right = "6%";
                this.view.flxChart.width = "88%";
                this.view.flxChart.height = "94%";
                this.view.catalog.top = "3%";
                this.view.catalog.height = "78%";
                this.view.flxGraph.height = "100%";
                this.view.flxTab.top = "12dp";
                this.view.flxScrlDos.setContentOffset({
                    x: "0%",
                    y: "0%"
                }, true);
                this.view.flxScrlDos.enableScrolling = false;
                this.view.TopBottomNavigation.disableDefinitions();
                this.view.Feedback.setVisibility(false);
                this.view.flxChartShareIcon.setVisibility(false);
                this.view.SharePopup.setVisibility(false);
            } else {
                this.view.flxCurrentMonth.width = "30%";
                this.view.flxPreviousMonth.width = "30%";
                this.view.flxCurrentMonth.right = "48%";
                this.view.flxPreviousMonth.left = "48%";
                this.view.TopBottomNavigation.setVisibility(true);
                this.view.DOSHeader.flxHeading = true;
                this.view.DOSHeader.flxLabelDef = true;
                this.view.DOSHeader.flxLabelDefWorkdays = true;
                this.view.DOSHeader.flxTopHead = true;
                this.view.DOSDetailsTablet.setVisibility(true);
                this.view.lblLine.setVisibility(true);
                this.view.DOSBusinessCustomersTablet.setVisibility(true);
                this.view.flxChart.top = "7%";
                this.view.flxChart.bottom = "8%";
                this.view.flxChart.left = "12.5%";
                this.view.flxChart.right = "12.5%";
                this.view.flxChart.width = "87%";
                this.view.flxChart.height = "85%";
                this.view.catalog.top = "26dp";
                this.view.catalog.height = "350dp";
                this.view.flxGraph.height = "420dp";
                this.view.flxTab.top = "5dp";
                this.view.flxScrlDos.enableScrolling = true;
                if (isShareIconEnable === "true") {
                    this.view.flxChartShareIcon.setVisibility(true);
                } else {
                    this.view.flxChartShareIcon.setVisibility(false);
                }
                if (isFeedbackEnable) {
                    this.view.Feedback.setVisibility(true);
                } else {
                    this.view.Feedback.setVisibility(false);
                }
            }
            if (this.view.lblCurrentMonth.skin === "sknLbl0AC7C2SSPR16px") {
                this.monthTabClick("current_month", true, true);
            } else if (this.view.lblPreviousMonth.skin === "sknLbl0AC7C2SSPR16px") {
                this.monthTabClick("previous_month", true, true);
            }
        } catch (e) {
            kony.print("In on orientationChange exception::" + e);
        }
    },
    monthTabClick: function(tabName, refreshData, orientationChange = false) {
        try {
            if (Utils.isNetworkAvailable()) {
                this.tabName = tabName;
                if (tabName === "current_month") {
                    if (this.view.lblCurrentMonth.skin === "sknLbl0AC7C2SSPR16px" && !refreshData) {
                        return;
                    }
                    this.view.lblPrvsMnthLine.isVisible = false;
                    this.view.lblCrntMnthLine.isVisible = true;
                    this.view.lblCrntMnthLine.skin = "sknLbl0AC7C2Bg";
                    this.view.lblCurrentMonth.skin = "sknLbl0AC7C2SSPR16px";
                    this.view.lblPreviousMonth.skin = "sknLbl94A3B3RR14px";
                    this.refreshChartData(1, orientationChange);
                } else {
                    if (this.view.lblPreviousMonth.skin === "sknLbl0AC7C2SSPR16px" && !refreshData) {
                        return;
                    }
                    this.view.lblCrntMnthLine.isVisible = false;
                    this.view.lblPrvsMnthLine.isVisible = true;
                    this.view.lblPrvsMnthLine.skin = "sknLbl0AC7C2Bg";
                    this.view.lblPreviousMonth.skin = "sknLbl0AC7C2SSPR16px";
                    this.view.lblCurrentMonth.skin = "sknLbl94A3B3RR14px";
                    this.refreshChartData(2, orientationChange);
                }
            }
        } catch (e) {
            kony.print("In on monthTabClick exception::" + e);
        }
    },
    refreshChartData: function(index, orientationChange = false) {
        try {
            var operationName = null;
            var query = gblChartMetricQuery + "|chart_data|period:" + this.tabName;
            var requestMethod = Utils.getRequestMethod(gblSelectedOverviewType, true);
            if (orientationChange && orientationChange === true) {
                if (!Utils.isNullorEmpty(query)) {
                    GlobalServices.getOverview({
                        "query": query
                    }, DOS.serviceName, requestMethod, null, this.fetchChartDataSuccessCallBack.bind(this, orientationChange), this.fetchChartDataFailureCallBack);
                }
            } else {
                let chartData = this.getChartdata(hdrName, index);
                if (Utils.isNullorEmpty(chartData)) {
                    if (!Utils.isNullorEmpty(query)) {
                        GlobalServices.getOverview({
                            "query": query
                        }, DOS.serviceName, requestMethod, null, this.fetchChartDataSuccessCallBack.bind(this, orientationChange), this.fetchChartDataFailureCallBack);
                    }
                } else {
                    gblGraphData = chartData;
                    this.view.catalog.addLineChart(true);
                    Utils.hideLoadingIndicator();
                }
            }
        } catch (e) {
            Utils.hideLoadingIndicator();
            kony.print("Exception in goToDosChart:: " + e);
        }
    },
    fetchChartDataSuccessCallBack: function(orientationChange = false, response) {
        try {
            if (!Utils.isNullorEmpty(response)) {
                gblGraphData = response.records[0];
                if (!(orientationChange && orientationChange === true)) this.setChartData(gblChartDataBackHead[gblChartDataBackHead.length - 1], response.records[0]);
                this.view.catalog.addLineChart(true);
                Utils.hideLoadingIndicator();
            }
        } catch (e) {
            Utils.hideLoadingIndicator();
            kony.print("Exception in fetchChartDataSuccessCallBack:: " + e);
        }
    },
    setChartData: function(headerName, chartData) {
        try {
            if (chartDataMap.has(gblSelectedOverviewType)) {
                if (chartDataMap.get(gblSelectedOverviewType).has(headerName)) {
                    var responseData = chartDataMap.get(gblSelectedOverviewType).get(headerName);
                    responseData.push(chartData);
                    chartDataMap.get(gblSelectedOverviewType).set(headerName, responseData);
                } else {
                    this.responseData.push(chartData);
                    chartDataMap.get(gblSelectedOverviewType).set(headerName, this.responseData);
                }
            }
        } catch (e) {
            kony.print("Exception in setChartData:: " + e);
        }
    },
    getChartdata: function(headerName, index) {
        try {
            if (chartDataMap.has(gblSelectedOverviewType)) {
                let temp = chartDataMap.get(gblSelectedOverviewType);
                if (temp.has(headerName)) {
                    if (temp.get(headerName).length >= index && temp.get(headerName)[index]) {
                        return temp.get(headerName)[index];
                    } else {
                        return "";
                    }
                }
            }
        } catch (e) {
            kony.print("Exception in getChartdata:: " + e);
        }
    },
    fetchChartDataFailureCallBack: function(error) {
        try {
            var message = kony.i18n.getLocalizedString("i18n.chartFailure.error") + ErrorCodes.DOS_DATA_FAILURE;
            Utils.hideLoadingIndicator();
            var currForm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)) {
                currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"), message, kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
                currForm.flxGenericError.setVisibility(true);
            }
        } catch (e) {
            kony.print("Exception in fetchChartDataFailure func" + e);
        }
    },
    resetClick: function() {
        try {
            Utils.showLoadingIndicator();
            myBusinessMap.clear();
            metricsOverview = [];
            isDosChartResetClick = true;
            gblIsSecondLevel = false;
            var dosData = (gblDosDataArray[0]);
            gblDosDataArray = [];
            gblDosDataArray.push(dosData);
            var dosHeading = dosDataBackHead[0];
            dosDataBackHead = [];
            dosDataBackHead.push(dosHeading);
            gblGraphData = [];
            var nav = new kony.mvc.Navigation("frmDOSHome");
            nav.navigate(gbldosData_Arr[0]);
        } catch (e) {
            kony.print("Exception in resetClick:: " + e);
        }
    },
    backNav: function() {
        try {
            Utils.showLoadingIndicator();
            if (gblChartDataArray.length > 1) {
                gblChartDataArray.pop();
                gblChartDataBackHead.pop();
                this.view.DOSDetailsTablet.setSegmentsData(true);
                hdrName = gblChartDataBackHead[gblChartDataBackHead.length - 1];
                gblChartMetricQuery = gblChartDataArray[gblChartDataArray.length - 1].query;
                this.monthTabClick("current_month", true);
            } else {
                let prevForm = kony.application.getPreviousForm();
                gblIsChartBackNav = true;
                if (prevForm && prevForm.id === "frmLogin") {
                    gblIsChartBackNav = false;
                } else if (gblIsNotificationBack) {
                    fetchDOSData("frmDOSHome", gblDOSHomeQuery);
                    gblIsNotificationBack = false;
                }
                Utils.backNavigate(G_Navigation_History);
            }
        } catch (e) {
            kony.print("Exception in backNav:: " + e);
        }
    },
    businessOnClick: function(name, query, rowIndex) {
        try {
            Utils.showLoadingIndicator();
            if (gblChartDataBackHead[0] === gblTotalClorox && (gblChartDataBackHead.length === 1)) {
                hdrName = name;
            } else {
                hdrName = gblChartDataBackHead.length >= 1 ? this.view.DOSHeader.lblHeadName + " • " + name : name;
            }
            gblChartMetricQuery = query;
            var dataAvailable = false;
            if (chartDataMap.has(gblSelectedOverviewType)) {
                var temp = chartDataMap.get(gblSelectedOverviewType);
                if (temp.has(hdrName)) {
                    dataAvailable = true;
                    gblChartDataBackHead.push(hdrName);
                    gblChartDataArray.push(temp.get(hdrName)[0]);
                    this.view.flxScrlDos.setContentOffset({
                        x: "0%",
                        y: "0%"
                    }, true);
                    this.view.DOSDetailsTablet.setSegmentsData(true);
                    gblGraphData = temp.get(hdrName)[1];
                    this.view.catalog.addLineChart(true);
                }
            }
            if (!dataAvailable) {
                var requestMethod = Utils.getRequestMethod(gblSelectedOverviewType);
                if (!Utils.isNullorEmpty(query)) {
                    GlobalServices.getOverview({
                        "query": query
                    }, DOS.serviceName, requestMethod, null, this.getOverviewDataSuccess, this.getOverviewDataFailure);
                }
            }
        } catch (e) {
            Utils.hideLoadingIndicator();
            kony.print("Exception in businessOnClick:: " + e);
        }
    },
    businessChildOnClick: function(name, query, rowIndex) {
        try {
            Utils.showLoadingIndicator();
            gblChartMetricQuery = query;
            var lblStr = (this.view.DOSHeader.lblHeadName).lastIndexOf("•");
            hdrName = gblChartDataBackHead.length >= 1 ? this.view.DOSHeader.lblHeadName + " • " + name : name;
            var dataAvailable = false;
            if (chartDataMap.has(gblSelectedOverviewType)) {
                var temp = chartDataMap.get(gblSelectedOverviewType);
                if (temp.has(hdrName)) {
                    dataAvailable = true;
                    gblChartDataBackHead.push(hdrName);
                    gblChartDataArray.push(temp.get(hdrName)[0]);
                    this.view.flxScrlDos.setContentOffset({
                        x: "0%",
                        y: "0%"
                    }, true);
                    this.view.DOSDetailsTablet.setSegmentsData(true);
                    gblGraphData = temp.get(hdrName)[1];
                    this.view.catalog.addLineChart(true);
                }
            }
            if (!dataAvailable) {
                var requestMethod = Utils.getRequestMethod(gblSelectedOverviewType);
                if (!Utils.isNullorEmpty(query)) {
                    GlobalServices.getOverview({
                        "query": query
                    }, DOS.serviceName, requestMethod, null, this.getOverviewDataSuccess, this.getOverviewDataFailure);
                }
            }
        } catch (e) {
            Utils.hideLoadingIndicator();
            kony.print("Exception in businessChildOnClick:: " + e);
        }
    },
    customerOnClickData: function(name, query, rowIndex) {
        try {
            Utils.showLoadingIndicator();
            gblChartMetricQuery = query;
            var dataAvailable = false;
            var lblStr = (this.view.DOSHeader.lblHeadName).lastIndexOf("•");
            if (gblChartDataBackHead[0] === gblTotalClorox && (gblChartDataBackHead.length === 1)) {
                hdrName = name;
            } else {
                hdrName = gblChartDataBackHead.length >= 1 ? this.view.DOSHeader.lblHeadName + " • " + name : name;
            }
            if (chartDataMap.has(gblSelectedOverviewType)) {
                var temp = chartDataMap.get(gblSelectedOverviewType);
                if (temp.has(hdrName)) {
                    dataAvailable = true;
                    gblChartDataBackHead.push(hdrName);
                    gblChartDataArray.push(temp.get(hdrName)[0]);
                    this.view.flxScrlDos.setContentOffset({
                        x: "0%",
                        y: "0%"
                    }, true);
                    this.view.DOSDetailsTablet.setSegmentsData(true);
                    gblGraphData = temp.get(hdrName)[1];
                    this.view.catalog.addLineChart(true);
                }
            }
            if (!dataAvailable) {
                var requestMethod = Utils.getRequestMethod(gblSelectedOverviewType);
                if (!Utils.isNullorEmpty(query)) {
                    GlobalServices.getOverview({
                        "query": query
                    }, DOS.serviceName, requestMethod, null, this.getOverviewDataSuccess, this.getOverviewDataFailure);
                }
            }
        } catch (e) {
            Utils.hideLoadingIndicator();
            kony.print("Exception in customerOnClickData:: " + e);
        }
    },
    //getOverview service success call back
    getOverviewDataSuccess: function(response) {
        try {
            if (!Utils.isNullorEmpty(response) && !Utils.isNullorEmpty(response.records[0]) && !Utils.isNullorEmpty(response.records[0].Common)) {
                gblChartDataBackHead.push(hdrName);
                this.responseData = [];
                this.responseData.push(response.records[0]);
                gblChartDataArray.push(response.records[0]);
                this.view.flxScrlDos.setContentOffset({
                    x: "0%",
                    y: "0%"
                }, true);
                this.view.DOSDetailsTablet.setSegmentsData(true);
                var operationName = null;
                var query = (response.records[0].query) + "|chart_data|period:current_month";
                var requestMethod = Utils.getRequestMethod(gblSelectedOverviewType, true);
                if (!Utils.isNullorEmpty(query)) {
                    GlobalServices.getOverview({
                        "query": query
                    }, DOS.serviceName, requestMethod, null, this.fetchGraphDataSuccessCallBack, this.getOverviewDataFailure);
                }
            } else {
                Utils.hideLoadingIndicator();
                var message = kony.i18n.getLocalizedString("i18n.clorox.DosDataError") + ErrorCodes.DOS_DATA_FAILURE;
                var currForm = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)) {
                    currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"), message, kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
                    currForm.flxGenericError.setVisibility(true);
                }
            }
        } catch (e) {
            Utils.hideLoadingIndicator();
            kony.print("Exception in getOverviewDataSuccess:: " + e);
        }
    },
    //getOverview service Failure call back
    getOverviewDataFailure: function() {
        try {
            Utils.hideLoadingIndicator();
            var message = kony.i18n.getLocalizedString("i18n.clorox.DosDataError") + ErrorCodes.DOS_DATA_FAILURE;
            var currForm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)) {
                currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"), message, kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
                currForm.flxGenericError.setVisibility(true);
            }
        } catch (e) {
            kony.print("Exception in getOverviewDataFailure " + e);
        }
    },
    fetchGraphDataSuccessCallBack: function(response) {
        try {
            if (!Utils.isNullorEmpty(response)) {
                gblGraphData = response.records[0];
                this.responseData.push(response.records[0]);
                chartDataMap.get(gblSelectedOverviewType).set(hdrName, this.responseData);
                this.view.catalog.addLineChart(true);
                this.view.lblPrvsMnthLine.isVisible = false;
                this.view.lblCrntMnthLine.isVisible = true;
                this.view.lblCrntMnthLine.skin = "sknLbl0AC7C2Bg";
                this.view.lblCurrentMonth.skin = "sknLbl0AC7C2SSPR16px";
                this.view.lblPreviousMonth.skin = "sknLbl94A3B3RR14px";
                Utils.hideLoadingIndicator();
            }
        } catch (e) {
            Utils.hideLoadingIndicator();
            var message = kony.i18n.getLocalizedString("i18n.clorox.DosDataError") + ErrorCodes.DOS_DATA_FAILURE;
            var currForm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)) {
                currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"), message, kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
                currForm.flxGenericError.setVisibility(true);
            }
        }
    },
});
define("frmDosChartControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmDosChartController", ["userfrmDosChartController", "frmDosChartControllerActions"], function() {
    var controller = require("userfrmDosChartController");
    var controllerActions = ["frmDosChartControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
