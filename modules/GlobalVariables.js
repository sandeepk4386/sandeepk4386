var G_ENABLE_BACKGROUND_CALL_OPTIONS = {"httpRequestOptions": {"enableBackgroundTransfer": true }}; 
var G_All_Forms = ["frmReports","frmUserProfile","frmDOSHome","frmNotifications","frmNotificationSettings"];
var G_APP_NAME = "Daily Briefings";
var G_APP_PACKAGE = "com.clorox.db";
var gblMessage="User has denied the use of biometry for this app.";
var G_Browser_Header = "<header><meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'></header>"; 
var hamburgerForms = ["frmChooseAccount","frmAmCart","frmOrderHistory","frmNotifications","frmAppSuite","frmSettings","frmLanguage","frmNotificationDetails"];
var G_Navigation_History = [];
var G_Navigation_FormName = "";
var gblPartyName = "";
var gblPartyCountry = "";
var gblPartyRole = "";
var gblIdToken = null;
var gblPartyEmail = "";
var gblABO = "";
var G_Input_Params = "";
var gblLoginError = false;
var gblWSO2AccessToken = null;
var gblWSO2IDToken = null;
var gblWS02ExpiryTime = null;
var isDeviceBiometricSupported = false;
var gblAppConfig = null;
var gblDOSHomeQuery="Total Clorox|Total Clorox|product_metric:mtd_orders_vs_mtd_ya_orders_index|customer_metric:mtd_orders_vs_mtd_ya_orders_index";
var gblAdditionalMetricsDisplay = false;
var gblSelectedOverviewType = null;
var gblGraphData = [];
var gbldosData_Arr = [];
var gblDosDataArray = [];
var gblIsFabricInitilised = false;
var gblServiceURL ="https://daily-briefings-dev.clorox.com/authService/100000002/appconfig";
var dosDataBackHead = [];
var isDosChartResetClick = false;
var metricsOverview = [];
var gblChartDataArray = [];
var gblChartDataBackHead = [];
var gblGraphXTickPositions = [];
var gblChartMetricQuery = "";
var gblIsSecondLevel = false;
var isFeedbackEnable= kony.store.getItem("isUserDisableFeedback");
var gblIsFirstLevel = true;
var gblTotalClorox = "Total Clorox";
var gblAllChannels = "All Channels";
var gblKeyValueData = {};
var myBusinessMap = new Map();
var chartDataMap = new Map();
var expandIcon = "i";
var gblProductsList = [];
var gblCustomerList = [];
var gblIsChartBackNav = false;
var isAlreadyLoggedIn = false;
var gblIsRefresh = false;
var notificationType = "";
var launchMode;
var gblIsForeground = true;
var pushId = "";
var KSID = "";
var pushId = "";
var gblEnableNavGuide = "";
var refreshCheckForTutorial = false;
var displayNavGuide = true;
var onYesClickCheckForTutorial = false;

var gblReloadChart = false;
var gblIsSessionExpired = false;
var gblMTDOrdersQuery = "Total Clorox|Total Clorox|product_metric:mtd_orders|customer_metric:mtd_orders";
var gblMTDShipmentQuery = "Total Clorox|Total Clorox|product_metric:mtd_shipments|customer_metric:mtd_shipments";
var gblIsNotificationBack = false;
var gblUserName = "arti@testteamclx.onmicrosoft.com";
var gblPwd = "Hcl@1234";
var gblTeamsId = "11893bf5-8f41-4087-90e7-984ebe513469";
var gblTeamChannelId = "19:7NooD0WOL4crEfBKfBMjZcZbWiKM6-tjsZ7iZQqDkjI1@thread.tacv2";
var gblTeamsUri = "msteams://teams.microsoft.com/l/channel/" +gblTeamChannelId+ "/General?groupId=" + gblTeamsId + "&tenantId=24e74cab-6856-49ea-aef5-c3adb8aba06c"
var gbliOSAppUrl = "https://apps.apple.com/us/app/microsoft-teams/id1113153706";
var gblAndroidTeamsPkgName = "com.microsoft.teams";
var gblAndroidAppUrl = "https://play.google.com/store/apps/details?id="+ gblAndroidTeamsPkgName;

var gblMentionMsg = "";
var gblDisplayName = "";
var isShareIconEnable = "";
var gblCollaborationAuthCode = "";
var gblIsUpdateClicked = false;

var gblCommonSkins = {
  positiveCount:"sknLbl0AC7C2SSPR16px100",
  negativeCount:"sknLblE34547SSPR16px100",
  defaultCount:"sknLblFFFFFSSPR16px100"
};