//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "DailyBriefings",
    appName: "Daily Briefings",
    appVersion: "1.0.0",
    isturlbase: "https://daily-briefings-uat.clorox.com/services",
    isDebug: false,
    isMFApp: true,
    appKey: "2e935905d6cc5f4c5d4f5fba18a7bff8",
    appSecret: "c24c0f97b45fbb043a482427db64cf85",
    serviceUrl: "https://daily-briefings-uat.clorox.com/authService/100000002/appconfig",
    svcDoc: {
        "identity_meta": {
            "oktauat": {
                "success_url": "allow_any"
            },
            "oktadev": {
                "success_url": "allow_any"
            },
            "testShareAccount": {
                "success_url": "allow_any"
            }
        },
        "app_version": "1.0",
        "messagingsvc": {
            "appId": "cdeb577e-1996-4c47-bbc4-4c346c64ec57",
            "url": "https://daily-briefings-uat.clorox.com/kpns/api/v1"
        },
        "baseId": "e8767c47-f98f-4bee-862b-bd3bfc580ac2",
        "app_default_version": "1.0",
        "login": [{
            "mandatory_fields": [],
            "provider_type": "oauth2",
            "alias": "testShareAccount",
            "type": "basic",
            "prov": "testShareAccount",
            "url": "https://daily-briefings-uat.clorox.com/authService/100000002"
        }, {
            "provider_type": "oauth2",
            "alias": "oktauat",
            "type": "oauth2",
            "prov": "oktauat",
            "url": "https://daily-briefings-uat.clorox.com/authService/100000002"
        }, {
            "provider_type": "oauth2",
            "alias": "oktadev",
            "type": "oauth2",
            "prov": "oktadev",
            "url": "https://daily-briefings-uat.clorox.com/authService/100000002"
        }],
        "services_meta": {
            "GetPushMessage": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://daily-briefings-uat.clorox.com/services/GetPushMessage"
            },
            "ConnectToRedis": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://daily-briefings-uat.clorox.com/services/ConnectToRedis"
            },
            "AppUpgrade": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://daily-briefings-uat.clorox.com/services/AppUpgrade"
            },
            "FetchNotifications": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://daily-briefings-uat.clorox.com/services/FetchNotifications"
            },
            "Feedback": {
                "offline": false,
                "metadata_url": "https://daily-briefings-uat.clorox.com/services/metadata/v1/Feedback",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://daily-briefings-uat.clorox.com/services/data/v1/Feedback"
            },
            "dosservices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://daily-briefings-uat.clorox.com/services/dosservices"
            },
            "ChatGraphAPIS": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://daily-briefings-uat.clorox.com/services/ChatGraphAPIS"
            },
            "DOSData": {
                "offline": false,
                "metadata_url": "https://daily-briefings-uat.clorox.com/services/metadata/v1/DOSData",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://daily-briefings-uat.clorox.com/services/data/v1/DOSData"
            }
        },
        "selflink": "https://daily-briefings-uat.clorox.com/authService/100000002/appconfig",
        "integsvc": {
            "GetPushMessage": "https://daily-briefings-uat.clorox.com/services/GetPushMessage",
            "ConnectToRedis": "https://daily-briefings-uat.clorox.com/services/ConnectToRedis",
            "AppUpgrade": "https://daily-briefings-uat.clorox.com/services/AppUpgrade",
            "_internal_logout": "https://daily-briefings-uat.clorox.com/services/IST",
            "FetchNotifications": "https://daily-briefings-uat.clorox.com/services/FetchNotifications",
            "dosservices": "https://daily-briefings-uat.clorox.com/services/dosservices",
            "ChatGraphAPIS": "https://daily-briefings-uat.clorox.com/services/ChatGraphAPIS"
        },
        "service_doc_etag": "0000017B1017E2B0",
        "appId": "cdeb577e-1996-4c47-bbc4-4c346c64ec57",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "DailyBriefings",
        "reportingsvc": {
            "session": "https://daily-briefings-uat.clorox.com/services/IST",
            "custom": "https://daily-briefings-uat.clorox.com/services/CMS"
        }
    },
    runtimeAppVersion: "Default",
    eventTypes: ["FormEntry", "AppLoad", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        isI18nLayoutConfigEnabled: true,
        APILevel: 9200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        appservice: function(eventObject) {
            var value = applicationController.AS_AppEvents_h7d99fed883d4c54b89a0aa447cc7fae(eventObject);
            return value;
        },
        postappinit: function(eventObj) {
            applicationController.postAppInitCallBack(eventObj);
        },
        showstartupform: function() {
            new kony.mvc.Navigation("frmLogin").navigate();
        }
    });
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
kony.print = function() {
    return;
};
kony.i18n.setLocaleLayoutConfig({
    "en_US": {
        "mirrorContentAlignment": false,
        "mirrorFlexPositionProperties": false,
        "mirrorFlowHorizontalAlignment": false
    }
});
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);