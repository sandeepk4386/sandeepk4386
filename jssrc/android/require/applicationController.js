define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_AppEvents_j14d6e56b4bc4daa9683d5b771d92da8: function AS_AppEvents_j14d6e56b4bc4daa9683d5b771d92da8(eventobject) {
        var self = this;
        return appServiceCallback.call(this, null);
    },
    AS_AppEvents_e444f8e8169d412a9d66f0aacc141ad0: function AS_AppEvents_e444f8e8169d412a9d66f0aacc141ad0(eventobject) {
        var self = this;
        postInitApp();
    },
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("Clorox.AppGuide", "AppGuide", "AppGuideController");
        kony.application.registerMaster({
            "namespace": "Clorox",
            "classname": "AppGuide",
            "name": "Clorox.AppGuide"
        });
        kony.mvc.registry.add("Clorox.Chat", "Chat", "ChatController");
        kony.application.registerMaster({
            "namespace": "Clorox",
            "classname": "Chat",
            "name": "Clorox.Chat"
        });
        kony.mvc.registry.add("Clorox.Content", "Content", "ContentController");
        kony.application.registerMaster({
            "namespace": "Clorox",
            "classname": "Content",
            "name": "Clorox.Content"
        });
        kony.mvc.registry.add("Clorox.Definitions", "Definitions", "DefinitionsController");
        kony.application.registerMaster({
            "namespace": "Clorox",
            "classname": "Definitions",
            "name": "Clorox.Definitions"
        });
        kony.mvc.registry.add("Clorox.Feedback", "Feedback", "FeedbackController");
        kony.application.registerMaster({
            "namespace": "Clorox",
            "classname": "Feedback",
            "name": "Clorox.Feedback"
        });
        kony.mvc.registry.add("Clorox.FeedbackPopup", "FeedbackPopup", "FeedbackPopupController");
        kony.application.registerMaster({
            "namespace": "Clorox",
            "classname": "FeedbackPopup",
            "name": "Clorox.FeedbackPopup"
        });
        kony.mvc.registry.add("Clorox.GenericError", "GenericError", "GenericErrorController");
        kony.application.registerMaster({
            "namespace": "Clorox",
            "classname": "GenericError",
            "name": "Clorox.GenericError"
        });
        kony.mvc.registry.add("Clorox.SharePopup", "SharePopup", "SharePopupController");
        kony.application.registerMaster({
            "namespace": "Clorox",
            "classname": "SharePopup",
            "name": "Clorox.SharePopup"
        });
        kony.mvc.registry.add("Clorox.TopBottomNavigation", "TopBottomNavigation", "TopBottomNavigationController");
        kony.application.registerMaster({
            "namespace": "Clorox",
            "classname": "TopBottomNavigation",
            "name": "Clorox.TopBottomNavigation"
        });
        kony.mvc.registry.add("Clorox.loadingIndicator", "loadingIndicator", "loadingIndicatorController");
        kony.application.registerMaster({
            "namespace": "Clorox",
            "classname": "loadingIndicator",
            "name": "Clorox.loadingIndicator"
        });
        kony.mvc.registry.add("Global.Userprofile", "Userprofile", "UserprofileController");
        kony.application.registerMaster({
            "namespace": "Global",
            "classname": "Userprofile",
            "name": "Global.Userprofile"
        });
        kony.mvc.registry.add("com.DOS.DOSBusinessCustomers", "DOSBusinessCustomers", "DOSBusinessCustomersController");
        kony.application.registerMaster({
            "namespace": "com.DOS",
            "classname": "DOSBusinessCustomers",
            "name": "com.DOS.DOSBusinessCustomers"
        });
        kony.mvc.registry.add("com.DOS.DOSHeader", "DOSHeader", "DOSHeaderController");
        kony.application.registerMaster({
            "namespace": "com.DOS",
            "classname": "DOSHeader",
            "name": "com.DOS.DOSHeader"
        });
        kony.mvc.registry.add("com.clorox.DOSBusinessCustomersTablet", "DOSBusinessCustomersTablet", "DOSBusinessCustomersTabletController");
        kony.application.registerMaster({
            "namespace": "com.clorox",
            "classname": "DOSBusinessCustomersTablet",
            "name": "com.clorox.DOSBusinessCustomersTablet"
        });
        kony.mvc.registry.add("com.clorox.DOSDetailsTablet", "DOSDetailsTablet", "DOSDetailsTabletController");
        kony.application.registerMaster({
            "namespace": "com.clorox",
            "classname": "DOSDetailsTablet",
            "name": "com.clorox.DOSDetailsTablet"
        });
        kony.mvc.registry.add("com.clorox.DOSHeaderTablet", "DOSHeaderTablet", "DOSHeaderTabletController");
        kony.application.registerMaster({
            "namespace": "com.clorox",
            "classname": "DOSHeaderTablet",
            "name": "com.clorox.DOSHeaderTablet"
        });
        kony.mvc.registry.add("com.clorox.DosDetails", "DosDetails", "DosDetailsController");
        kony.application.registerMaster({
            "namespace": "com.clorox",
            "classname": "DosDetails",
            "name": "com.clorox.DosDetails"
        });
        kony.mvc.registry.add("com.clorox.NotificationSettings", "NotificationSettings", "NotificationSettingsController");
        kony.application.registerMaster({
            "namespace": "com.clorox",
            "classname": "NotificationSettings",
            "name": "com.clorox.NotificationSettings"
        });
        kony.mvc.registry.add("com.clorox.NotificationSettingsTablet", "NotificationSettingsTablet", "NotificationSettingsTabletController");
        kony.application.registerMaster({
            "namespace": "com.clorox",
            "classname": "NotificationSettingsTablet",
            "name": "com.clorox.NotificationSettingsTablet"
        });
        kony.mvc.registry.add("com.clorox.Notifications", "Notifications", "NotificationsController");
        kony.application.registerMaster({
            "namespace": "com.clorox",
            "classname": "Notifications",
            "name": "com.clorox.Notifications"
        });
        kony.mvc.registry.add("com.clorox.linechart", "linechart", "linechartController");
        kony.application.registerMaster({
            "namespace": "com.clorox",
            "classname": "linechart",
            "name": "com.clorox.linechart"
        });
        kony.mvc.registry.add("com.clorox.DOS", "DOS", "DOSController");
        kony.application.registerMaster({
            "namespace": "com.clorox",
            "classname": "DOS",
            "name": "com.clorox.DOS"
        });
        kony.mvc.registry.add("com.clorox.DOSTablet", "DOSTablet", "DOSTabletController");
        kony.application.registerMaster({
            "namespace": "com.clorox",
            "classname": "DOSTablet",
            "name": "com.clorox.DOSTablet"
        });
        kony.mvc.registry.add("com.clorox.Login", "Login", "LoginController");
        kony.application.registerMaster({
            "namespace": "com.clorox",
            "classname": "Login",
            "name": "com.clorox.Login"
        });
        kony.mvc.registry.add("com.clorox.catalog", "catalog", "catalogController");
        kony.application.registerMaster({
            "namespace": "com.clorox",
            "classname": "catalog",
            "name": "com.clorox.catalog"
        });
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("FlxAppGuide", "FlxAppGuide", "FlxAppGuideController");
        kony.mvc.registry.add("flxNotification", "flxNotification", "flxNotificationController");
        kony.mvc.registry.add("flxDefinitionsTemplate", "flxDefinitionsTemplate", "flxDefinitionsTemplateController");
        kony.mvc.registry.add("flxBusinessUnits", "flxBusinessUnits", "flxBusinessUnitsController");
        kony.mvc.registry.add("flxMainChat", "flxMainChat", "flxMainChatController");
        kony.mvc.registry.add("flxMain", "flxMain", "flxMainController");
        kony.mvc.registry.add("flxDOSMain", "flxDOSMain", "flxDOSMainController");
        kony.mvc.registry.add("flxDOSOverview", "flxDOSOverview", "flxDOSOverviewController");
        kony.mvc.registry.add("flxDosDetails", "flxDosDetails", "flxDosDetailsController");
        kony.mvc.registry.add("flxDOSExpand", "flxDOSExpand", "flxDOSExpandController");
        kony.mvc.registry.add("flxFeedbackMain", "flxFeedbackMain", "flxFeedbackMainController");
        kony.mvc.registry.add("flxMention", "flxMention", "flxMentionController");
        kony.mvc.registry.add("flxNotifSett", "flxNotifSett", "flxNotifSettController");
        kony.mvc.registry.add("frmADAHome", "frmADAHome", "frmADAHomeController");
        kony.mvc.registry.add("frmChatWindow", "frmChatWindow", "frmChatWindowController");
        kony.mvc.registry.add("frmDOSHome", "frmDOSHome", "frmDOSHomeController");
        kony.mvc.registry.add("frmDosChart", "frmDosChart", "frmDosChartController");
        kony.mvc.registry.add("frmLogin", "frmLogin", "frmLoginController");
        kony.mvc.registry.add("frmNotificationSettings", "frmNotificationSettings", "frmNotificationSettingsController");
        kony.mvc.registry.add("frmNotifications", "frmNotifications", "frmNotificationsController");
        kony.mvc.registry.add("frmReports", "frmReports", "frmReportsController");
        kony.mvc.registry.add("frmUserProfile", "frmUserProfile", "frmUserProfileController");
        kony.mvc.registry.add("frmWebURL", "frmWebURL", "frmWebURLController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {
        return applicationController.AS_AppEvents_e444f8e8169d412a9d66f0aacc141ad0(eventObj);
    },
    appmenuseq: function() {
        new kony.mvc.Navigation("frmLogin").navigate();
    }
});