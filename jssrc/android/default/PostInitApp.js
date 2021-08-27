var ErrorCodes = require("ErrorCodes");
var GlobalServices = require("GlobalServices");
var deviceUtil = require("DeviceUtil");
var Utils = require("UtilsCL");
var AppConstants = require("AppConstants");
G_Global_Config_Call = false;

function postInitApp() {
    try {
        kmsUtil.callbackSetCallbacks();
        kony.application.setApplicationBehaviors({
            hidedefaultloadingindicator: true
        });
        kony.application.setApplicationProperties({
            statusBarColor: "080f3f",
            navigationBarColor: "080f3f00"
        });
        kony.application.setApplicationCallbacks({
            onforeground: onAppForeground,
            onbackground: onAppBackground,
        });
    } catch (err) {
        kony.print("error in postInitApp function is :: " + JSON.stringify(err));
    }
}

function saveKeyForLogin() {
    try {
        var key = generateNewKey();
        var uniqId = kony.crypto.saveKey("myKey1", key);
        UserStore.setUserParam(StoreKeys.LOGIN_KUID, uniqId);
    } catch (err) {
        kony.print("Error in saveKeyForLogin :: " + JSON.stringify(err));
    }
}

function adjustFontSizePreAppInit() {
    if (deviceUtil.isAndroid()) {
        LabelSize.preAppInitLabelSize();
    }
}

function sessionErorrPopUp() {
    try {
        var currFrm = kony.application.getCurrentForm();
        currFrm.loadingIndicator.isVisible = false;
        gblIsSessionExpired = true;
        currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.sessionExpired"), kony.i18n.getLocalizedString("i18n.SessionExpired.error"), kony.i18n.getLocalizedString("i18.clorox.ok"), logOutApp);
        if (!currFrm.flxGenericError.parent.isVisible && currFrm.flxGenericError.parent.isVisible !== null) {
            currFrm.flxGenericError.parent.isVisible = true;
        } else {
            if (!currFrm.flxGenericError.isVisible && currFrm.flxGenericError.isVisible !== null) currFrm.flxGenericError.isVisible = true;
        }
        kony.application.unregisterForIdleTimeout();
    } catch (err) {
        kony.print("Error in sessionErorrPopUp :: " + JSON.stringify(err));
    }
}

function logOutApp() {
    kony.net.clearCookies();
    myBusinessMap.clear();
    metricsOverview = [];
    gblDosDataArray = [];
    dosDataBackHead = [];
    isAlreadyLoggedIn = false;
    UserStore.setUserParam(StoreKeys.NotificationUnreadCount, 0);
    gblIsSessionExpired = false;
    notificationType = "";
    var nav = new kony.mvc.Navigation("frmLogin");
    nav.navigate();
}

function onAppForeground() {
    try {
        kony.print("inside onAppForeground");
        let currForm = kony.application.getCurrentForm();
        if (!Utils.isNullorEmpty(currForm) && currForm.id === "frmNotifications") {
            kmsUtil.onlinePushHandler(true);
        } else if (!Utils.isNullorEmpty(currForm) && currForm.id === "frmLogin" && gblIsUpdateClicked) {
            gblIsUpdateClicked = false;
            currForm.Login.invokeIdentityService();
        }
    } catch (e) {
        kony.print("Exception in onAppForeground : " + e);
    }
}

function onAppBackground() {
    kony.print("inside onAppBackground");
    KNYMetricsService.flushEvents();
    gblIsForeground = false;
}

function appServiceCallback(params) {
    kony.print("in appServiceCallback params : " + JSON.stringify(params));
    if (!Utils.isNullorEmpty(params) && params.launchmode == 2) {
        UserStore.setUserParam(StoreKeys.statusBarNotification, true);
    } else {
        UserStore.setUserParam(StoreKeys.statusBarNotification, false);
    }
}