var Utils = require("UtilsCL");

function displayUpdates(notificationType) {
    try {
        kony.print("inside displayUpdates notificationType : " + notificationType);
        var formName = "";
        var query;
        var prevFrm = kony.application.getPreviousForm();
        if (notificationType === "dos_data_updated") {
            displayNavGuide = false;
            formName = "frmDOSHome";
            query = gblDOSHomeQuery;
            if (gblIsSessionExpired) {
                Utils.hideLoadingIndicator();
                return;
            }
            fetchDOSData(formName, query);
        } else if (notificationType === "mtd_orders_vs_ya_index_exceeds") {
            gblReloadChart = true;
            formName = "frmDosChart";
            gblSelectedOverviewType = kony.i18n.getLocalizedString("i18.clorox.mtdOrders");
            query = getNotifQuery(kony.i18n.getLocalizedString("i18.clorox.mtdOrders"));
            //to refresh the header to intial screen of doschart
            dosDataBackHead = [];
            dosDataBackHead.push(gblTotalClorox);
            if (gblIsSessionExpired) {
                Utils.hideLoadingIndicator();
                return;
            }
            gblIsNotificationBack = true;
            fetchDOSData(formName, query, true);
        } else if (notificationType === "mtd_shipments_vs_ndf_exceeds") {
            gblReloadChart = true;
            gblSelectedOverviewType = kony.i18n.getLocalizedString("i18.clorox.mtdShipments");
            query = getNotifQuery(kony.i18n.getLocalizedString("i18.clorox.mtdShipments"));
            formName = "frmDosChart";
            //to refresh the header to intial screen of doschart
            dosDataBackHead = [];
            dosDataBackHead.push(gblTotalClorox);
            if (gblIsSessionExpired) {
                Utils.hideLoadingIndicator();
                return;
            }
            gblIsNotificationBack = true;
            fetchDOSData(formName, query, true);
        } else {
            //donothing
            if (gblIsSessionExpired) {
                Utils.hideLoadingIndicator();
                return;
            }
            new kony.mvc.Navigation("frmNotifications").navigate();
            Utils.hideLoadingIndicator();
        }
    } catch (e) {
        kony.print("Exception in displayUpdates : " + e);
        Utils.hideLoadingIndicator();
    }
}

function fetchDOSData(formName, query, isNotification) {
    gblFormName = formName;
    GlobalServices.getOverview({
        "query": query
    }, DOS.serviceName, DOS.getOverview, null, getOverviewDataSuccess.bind(this, isNotification), getOverviewDataFailure);
}
//getOverview service success call back
function getOverviewDataSuccess(isNotification, response) {
    try {
        //kony.print("inside getOverviewDataSuccess response : " + JSON.stringify(response));
        if (!Utils.isNullorEmpty(response) && !Utils.isNullorEmpty(response.records[0])) {
            if (gblFormName === "frmDOSHome") {
                gblIsFirstLevel = true;
                isAlreadyLoggedIn = true;
                gblTotalClorox = "Total Clorox";
                gblDosDataArray = [];
                dosDataBackHead = [];
                myBusinessMap.clear();
                metricsOverview = [];
                dosDataBackHead.push(gblTotalClorox);
                var nav = new kony.mvc.Navigation("frmDOSHome");
                nav.navigate(response.records[0]);
            } else if (gblFormName === "frmDosChart") {
                var operationName = null;
                var queryOverview = getQuery(gblSelectedOverviewType);
                if (isNotification) {
                    queryOverview = getNotifQuery(gblSelectedOverviewType);
                }
                gblChartMetricQuery = queryOverview;
                var requestMethod = Utils.getRequestMethod(gblSelectedOverviewType, true);
                var query = queryOverview + "|chart_data|period:current_month";
                APIOverviewSuccessResponse = response.records[0];
                if (!Utils.isNullorEmpty(query)) {
                    GlobalServices.getOverview({
                        "query": query
                    }, DOS.serviceName, requestMethod, null, fetchChartDataSuccessCallBack, fetchChartDataFailureCallBack);
                }
            }
            Utils.hideLoadingIndicator();
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
        kony.print("Exception in ");
        Utils.hideLoadingIndicator();
    }
}
//getOverview service success call back
function getOverviewDataFailure(error) {
    kony.print("inside getOverviewDataFailure response : " + JSON.stringify(error));
    Utils.hideLoadingIndicator();
    //this.view.flxBiometric.isVisible = false;
    var nav = new kony.mvc.Navigation("frmDOSHome");
    nav.navigate();
}

function getNotifQuery() {
    let query = "";
    if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.mtdOrders")) query = gblMTDOrdersQuery;
    else if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.mtdShipments")) query = gblMTDShipmentQuery;
    else query = gblDOSHomeQuery;
    return query;
}

function getQuery(overviewType) {
    let query = "";
    for (var i = 0; i < metricsOverview.length; i++) {
        var groupName = metricsOverview[i].group_name;
        if (overviewType === groupName) {
            gblSelectedOverviewType = groupName;
            query = metricsOverview[i].id;
            if (!Utils.isNullorEmpty(query)) break;
        }
    }
    if (Utils.isNullorEmpty(metricsOverview) || Utils.isEmptyArray(metricsOverview)) {
        if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.mtdOrders")) query = gblMTDOrdersQuery;
        else if (gblSelectedOverviewType === kony.i18n.getLocalizedString("i18.clorox.mtdShipments")) query = gblMTDShipmentQuery;
        else query = gblDOSHomeQuery;
    }
    return query;
}

function getOverviewAPIFailureCallBack(error) {
    kony.print("error. ::" + JSON.stringify(error));
    Utils.hideLoadingIndicator();
    var nav = new kony.mvc.Navigation("frmDosChart");
    nav.navigate();
}

function fetchChartDataSuccessCallBack(response) {
    try {
        if (!Utils.isNullorEmpty(response)) {
            var graphData = [];
            graphData.push(APIOverviewSuccessResponse);
            graphData.push(response.records[0]);
            var temp = new Map();
            temp.set(dosDataBackHead[(dosDataBackHead.length) - 1], graphData);
            chartDataMap.set(gblSelectedOverviewType, temp);
            navToChartScreen(graphData);
        }
        Utils.hideLoadingIndicator();
    } catch (e) {
        kony.print("Exception in fetchChartDataSuccessCallBack:: " + e);
        Utils.hideLoadingIndicator();
    }
}

function navToChartScreen(graphData) {
    try {
        gblChartDataArray = [];
        gblChartDataArray.push(graphData[0]);
        gblChartDataBackHead = [];
        gblChartDataBackHead.push(dosDataBackHead[(dosDataBackHead.length) - 1]);
        var nav = new kony.mvc.Navigation("frmDosChart");
        //     G_Navigation_History.push("frmDOSHome");
        nav.navigate(graphData);
    } catch (e) {
        kony.print("Exception in navToChartScreen:: " + e);
    }
}

function fetchChartDataFailureCallBack(error) {
    kony.print("error. ::" + JSON.stringify(error));
}

function updateNotificationStatus(pushId) {
    try {
        if (gblIsSessionExpired) {
            Utils.hideLoadingIndicator();
            return;
        }
        kony.print("inside updateNotificationStatus pushId : " + pushId);
        var inputParam = {
            mid: pushId,
        };
        GlobalServices.callIntegrationServices(GetPushMessage.serviceName, GetPushMessage.updateNotificationStatus, updateNotificationSuccessCallBack, inputParam, false, true, updateNotificationStatusFailureCallBack);
    } catch (e) {
        kony.print("Exception in updateNotificationStatus : " + e);
        Utils.hideLoadingIndicator();
    }
}

function updateNotificationSuccessCallBack(response) {
    try {
        kony.print("inside updateNotificationSuccessCallBack response : " + JSON.stringify(response));
        if (response.message === "Successfully updated the Message Status") {
            //do nithing
        } else {
            kony.print("Error updating notification status");
            Utils.hideLoadingIndicator();
        }
    } catch (e) {
        kony.print("Exception in updateNotificationSuccessCallBack : " + e);
        Utils.hideLoadingIndicator();
    }
}

function updateNotificationStatusFailureCallBack(response) {
    kony.print("inside updateNotificationStatusFailureCallBack response : " + JSON.stringify(response));
    kony.print("Error updating notification status");
    Utils.hideLoadingIndicator();
}