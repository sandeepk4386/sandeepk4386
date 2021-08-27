var environment = {
    prod: "prod",
    dev: "dev",
    uat: "uat"
};
// if dev than env = environment.dev
//if non-prod then env = environment.nonprod
var env = environment.uat;
//var envExtd = (env == environment.prod) ? "V3" : "";
var CloroxID = {
    identityServiceID: "okta" + env,
    clientAppName: "",
    deepLinkSchema: "clorox://"
};
var chatIdentity = {
    identityServiceID: "testShareAccount",
};
var graphChatAPI = {
    serviceName: "ChatGraphAPIS",
    getChannelMsg: "GetChannelMessages",
    listTeamMembers: "ListTeamMembers",
    getChnlMsgsDelta: "GetChannelMessagesDelta",
    getChnlMsgsSkipDelta: "GetChannelMessagesSkipDelta",
    mentionMessage: "MentionMessage",
    sendImgTxt: "SendImageText"
};
var AppUpgrade = {
    serviceName: "AppUpgrade",
    fetchUpgradeData: "fetchUpgradeData",
};
var DOS = {
    serviceName: "DOSData",
    getOverview: "getoverview",
    fetchMTDOrders: "get_mtd_orders",
    fetchMTDOrdersChart: "get_mtd_orders_chart",
    fetchMTDShipments: "get_mtd_shipments",
    fetchMTDShipmentsChart: "get_mtd_shipments_chart",
    fetchAvgDailyOrders: "avg_daily_orders",
    fetchAvgDailyOrdersChart: "avg_daily_orders_chart"
};
var FeedBack = {
    serviceName: "Feedback",
    updateFeedback: "feedback",
};
var GetPushMessage = {
    serviceName: "GetPushMessage",
    fetchNotification: "fetchNotification",
    createUser: "createUser",
    getAllUsers: "getAllUsers",
    modifyUser: "modifyUser",
    deleteUser: "deleteUser",
    updateNotificationStatus: "updateNotificationStatus",
    getFetchPayload: "getFetchPayload",
    getUserById: "getUserById",
    getMessageCount: "getMessageCount"
};
var FetchNotifications = {
    serviceName: "FetchNotifications",
    fetchPayloadNotifications: "fetchPayloadNotifications",
};

function getAppIdForKeyChain() {
    var appIdVal = "com.clorox.dailybriefings";
    if (env == environment.prod) {
        appIdVal = "com.clorox.dailybriefings";
    }
    return appIdVal;
}

function getNotificationSenderId() {
    var senderId = "862350414430";
    if (env === environment.prod) {
        senderId = "343180751189";
    } else if (env === environment.uat) {
        senderId = "862350414430";
    }
    return senderId;
}

function getFabricAppKey() {
    var appKey = "fef01d66f080bfbc82717cce197c6d93";
    if (env == environment.prod) {
        appKey = "5c5ba565a89db87cc7c598c2cf384bb9";
    } else if (env == environment.uat) {
        appKey = "b248e3819a677db69a8d7328c15eb500";
    }
    return appKey;
}

function getFabricAppSecert() {
    var appSecert = "5cc197624773685ebf05b06a0978b009";
    if (env == environment.prod) {
        appSecert = "f83887110798aef3217c3696a21aed6c";
    } else if (env == environment.uat) {
        appSecert = "6ed9e3968ce34bb2f871cf1657468d4b";
    }
    return appSecert;
}

function getServiceURL() {
    var url = "https://daily-briefings-dev.clorox.com/authService/100000002/appconfig";
    if (env == environment.prod) {
        url = "https://daily-briefings.clorox.com/authService/100000002/appconfig";
    } else if (env == environment.uat) {
        url = "https://daily-briefings-uat.clorox.com/authService/100000002/appconfig";
    }
    return url;
}

function getAppIdForNotification() {
    var appId = "b57dc58c-ed16-4d07-a06f-1fea010940c5";
    if (env === environment.prod) {
        appId = "40c1dcd0-2533-4238-9a25-8ffb4e42c669";
    } else if (env === environment.uat) {
        appId = "cdeb577e-1996-4c47-bbc4-4c346c64ec57";
    }
    return appId;
}