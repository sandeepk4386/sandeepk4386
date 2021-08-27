define("userfrmWebURLController", {
    url: "",
    newsFlag: false,
    //Type your controller code here 
    onNavigate: function() {
        this.applyBindings();
    },
    applyBindings: function() {
        try {
            this.view.onDeviceBack = function() {};
            this.view.preShow = this.onPreShow;
            this.view.postShow = this.onPostShow;
            this.view.brwWebPage.handleRequest = this.handleRequestCallback;
            this.view.TopBottomNavigation.lblHeader = true;
            this.view.GenericError.isVisible = false;
            this.view.flxMain.isVisible = false;
            this.view.GenericError.onTouchEnd = function() {};
            kony.application.setApplicationCallbacks({
                onforeground: this.onAppForegroundNews
            });
        } catch (e) {
            kony.print("In applyBindings::" + e);
        }
    },
    onAppForegroundNews: function() {
        try {
            var curntForm = kony.application.getCurrentForm();
            if (curntForm.id === "frmWebURL") {
                this.view.flxMain.isVisible = false;
                this.onPreShow();
            }
        } catch (e) {
            kony.print("In onAppForeground::" + e);
        }
    },
    onPostShow: function() {
        try {
            this.view.brwWebPage.enableParentScrollingWhenReachToBoundaries = false;
            this.view.TopBottomNavigation.makeTabActive(3);
        } catch (e) {
            kony.print("In onPostShow::" + e);
        }
    },
    onPreShow: function() {
        try {
            Utils.showLoadingIndicator();
            this.url = gblAppConfig.UpgradeInfo[AppConstants.NEWS_CONTENT];
            var urlConf = {
                URL: this.url,
                requestMethod: constants.brwWebPage_REQUEST_METHOD_GET,
            };
            this.newsFlag = false;
            this.view.brwWebPage.requestURLConfig = urlConf;
            this.view.brwWebPage.onPageFinished = this.onPageFinishedCallback;
        } catch (e) {
            kony.print("In onPreShow::" + e);
        }
    },
    onPageFinishedCallback: function(eventobject, params) {
        try {
            this.newsFlag = true;
            this.view.flxMain.isVisible = true;
            Utils.hideLoadingIndicator();
        } catch (e) {
            kony.print("In onPageFinishedCallback::" + e);
        }
    },
    handleRequestCallback: function(browserwidget, params) {
        try {
            let originalURL = params.originalURL;
            if (!Utils.isNullorEmpty(originalURL) && (originalURL !== this.url) && (originalURL != "about:blank" && this.newsFlag)) {
                kony.application.openURL(originalURL);
            }
            return false;
        } catch (e) {
            kony.print("In handleRequestCallback::" + e);
        }
    }
});
define("frmWebURLControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmWebURLController", ["userfrmWebURLController", "frmWebURLControllerActions"], function() {
    var controller = require("userfrmWebURLController");
    var controllerActions = ["frmWebURLControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
