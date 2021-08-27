define("Clorox/TopBottomNavigation/userTopBottomNavigationController", function() {
    var Utils = require("UtilsCL");
    var deviceUtil = require("DeviceUtil");
    return {
        numberOfTabs: 4,
        lblChevronText: ["3", "c", "", "2", "b"],
        bottomNavSkins: ["sknLblchevronGrey"],
        normalChevronSkins: "sknLblchevronGrey",
        activeChevronSkins: "sknLblchevronWhiteSelected",
        frmIdsToNavigate: ["frmDOSHome", "frmNotifications", "frmWebURL", "frmChatWindow", "frmUserProfile"],
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.makeTabs();
            this.applyBindings();
        },
        applyBindings: function() {
            this.view.preShow = this.invokePostShow;
            this.view.lblBack.onTouchEnd = this.onBack;
            this.deviceAlignment();
            this.view.lblView.onTouchStart = this.onClickNotifications;
            this.view.flxMainBgToastNotification.onClick = function() {};
        },
        deviceAlignment: function() {
            try {
                if (deviceUtil.isAndroidPhone()) {
                    this.view.lblInfo.left = "3%";
                    this.view.lblInfo.centerY = "52.3%";
                } else if (deviceUtil.isiPhone()) {
                    this.view.lblInfo.left = "3%";
                    this.view.lblInfo.centerY = "50%";
                } else if (deviceUtil.isAndroidTab()) {
                    this.view.lblInfo.left = "2%";
                    this.view.lblInfo.centerY = "52.1%";
                } else if (deviceUtil.isiPad()) {
                    this.view.lblInfo.left = "2%";
                }
            } catch (e) {
                kony.print("Exception in deviceAlignment function " + e);
            }
        },
        invokePostShow: function() {
            try {
                if (deviceUtil.isTablet() || deviceUtil.isiPad()) {
                    this.view.flxReset.right = "3%";
                }
                var currFrmName = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currFrmName)) {
                    currFrmName = currFrmName.id;
                }
                var prevFrm = kony.application.getPreviousForm();
                if (!Utils.isNullorEmpty(prevFrm)) {
                    prevFrm = prevFrm.id;
                }
                if (currFrmName === "frmDOSHome") {
                    if (Utils.isNullorEmpty(this.view.lblHeader.text)) {
                        this.view.lblHeader.text = kony.i18n.getLocalizedString("i18.clorox.DOS");
                        this.view.lblHeader.setVisibility(true);
                        this.view.lblInfo.setVisibility(true);
                    }
                    if (!gblIsChartBackNav && (prevFrm !== "frmNotifications" || prevFrm !== "frmLogin") && prevFrm !== "frmNotificationSettings" && prevFrm !== "frmUserProfile" && prevFrm !== "frmChatWindow") {
                        this.view.lblHeader.text = kony.i18n.getLocalizedString("i18.clorox.DOS");
                        this.view.lblHeader.setVisibility(true);
                        this.view.lblInfo.setVisibility(true);
                        this.view.flxReset.setVisibility(false);
                        this.view.lblBack.setVisibility(false);
                        this.view.lblInfo.onTouchStart = this.navigateToDefinition;
                        this.view.lblReset.skin = "sknLbl94A3B3SSPL14px87";
                        this.view.lblReset.text = kony.i18n.getLocalizedString("i18.clorox.reset");
                    } else {
                        gblIsChartBackNav = false;
                        if (prevFrm === "frmNotifications" || prevFrm === "frmNotificationSettings" || prevFrm === "frmUserProfile" || prevFrm === "frmChatWindow") {
                            if (this.view.lblHeader.text === kony.i18n.getLocalizedString("i18.clorox.lbl_definitions")) {
                                this.view.lblHeader.text = kony.i18n.getLocalizedString("i18.clorox.DOS");
                                this.view.lblHeader.setVisibility(true);
                                this.view.lblInfo.setVisibility(true);
                            }
                        }
                    }
                } else if (currFrmName === "frmDosChart") {
                    this.view.lblHeader.text = kony.i18n.getLocalizedString("i18.clorox.DOS");
                    this.view.lblInfo.setVisibility(true);
                    this.view.lblHeader.setVisibility(true);
                    this.view.flxReset.setVisibility(true);
                    this.view.lblBack.setVisibility(true);
                    this.view.lblInfo.onTouchStart = this.navigateToDefinition;
                    this.view.lblReset.skin = "sknLbl94A3B3SSPL14px87";
                    this.view.lblReset.text = kony.i18n.getLocalizedString("i18.clorox.reset");
                } else if (currFrmName === "frmNotifications") {
                    this.view.lblHeader.text = kony.i18n.getLocalizedString("i18.clorox.notifications");
                    this.view.lblHeader.setVisibility(true);
                    this.view.flxReset.setVisibility(true);
                    this.view.lblInfo.setVisibility(false);
                    this.view.lblBack.setVisibility(false);
                    this.view.flxDosHdr.width = "50%";
                    this.view.lblHeader.centerX = "50%";
                    this.view.lblReset.skin = "sknLblFFFFFClorox200";
                    this.view.lblReset.text = "g";
                    this.view.flxReset.onClick = this.navToNotifSettings;
                } else if (currFrmName === "frmNotificationSettings") {
                    this.view.lblHeader.text = kony.i18n.getLocalizedString("i18.clorox.notificatioSettings");
                    this.view.flxDosHdr.width = "64%";
                    this.view.lblHeader.centerX = "50%";
                    this.view.lblInfo.setVisibility(false);
                    this.view.lblHeader.setVisibility(true);
                    this.view.flxReset.setVisibility(false);
                    this.view.lblBack.setVisibility(true);
                } else if (currFrmName === "frmChatWindow") {
                    this.view.lblHeader.text = "DOS Channel";
                    this.view.flxDosHdr.width = "64%";
                    this.view.lblHeader.centerX = "50%";
                    this.view.lblInfo.setVisibility(false);
                    this.view.lblHeader.setVisibility(true);
                    this.view.flxReset.setVisibility(false);
                    this.view.lblBack.setVisibility(false);
                } else if (currFrmName === "frmWebURL") {
                    this.view.lblHeader.text = kony.i18n.getLocalizedString("i18.clorox.News");
                    this.view.flxDosHdr.width = "64%";
                    this.view.lblHeader.centerX = "50%";
                    this.view.lblInfo.setVisibility(false);
                    this.view.lblHeader.setVisibility(true);
                    this.view.flxReset.setVisibility(false);
                    this.view.lblBack.setVisibility(false);
                } else {
                    this.view.lblBack.setVisibility(true);
                    this.view.lblHeader.setVisibility(false);
                    this.view.flxReset.setVisibility(false);
                    this.view.lblInfo.setVisibility(false);
                }
                if (deviceUtil.isTablet() || deviceUtil.isiPad()) {
                    if (currFrmName === "frmWebURL" || currFrmName === "frmChatWindow") {
                        this.view.flxDosHdr.centerX = "50%";
                    } else {
                        this.view.flxDosHdr.centerX = "52%";
                    }
                }
                //setting notificationCount
                kmsUtil.setNotificationCount();
            } catch (Exception) {
                Utils.hideLoadingIndicator();
                kony.print("Exeception in top bottom preshow ::" + JSON.stringify(Exception));
            }
        },
        onBack: function() {
            try {
                var currFrmName = kony.application.getCurrentForm();
                if (currFrmName.id === "frmDOSHome") {
                    DOSHomeReference.backNav();
                } else if (currFrmName.id === "frmDosChart") {
                    dosChartRefernce.backNav();
                } else {
                    Utils.backNavigate(G_Navigation_History);
                }
            } catch (e) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in onBack ::" + e);
            }
        },
        navToNotifSettings: function() {
            try {
                new kony.mvc.Navigation("frmNotificationSettings").navigate();
            } catch (e) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in navToNotifSettings" + e);
            }
        },
        makeTabs: function() {
            try {
                if (isShareIconEnable === "true") {
                    this.view.flxBottomNav3.setVisibility(true);
                    this.numberOfTabs = 5;
                    this.lblChevronText = ["3", "c", "", "2", "b"];
                } else {
                    this.view.flxBottomNav3.setVisibility(false);
                    this.numberOfTabs = 4;
                    this.lblChevronText = ["3", "c", "", "b"];
                }
                this.bottomNavSkins = ["sknLblchevronGrey"];
                if (deviceUtil.isTablet() || deviceUtil.isiPad()) {
                    this.view.flxBottomBar.width = "50%";
                    this.view.lblBack.centerX = "8%";
                } else if (deviceUtil.isMobile()) {
                    this.view.flxBottomBar.width = "100%";
                    this.view.lblBack.centerX = "10%";
                }
                this.view.flxBottomBar.centerX = "50%";
                this.view.flxBottomBar.height = "8%";
                for (var i = 1; i <= this.numberOfTabs; i++) {
                    this.view["lblBottomNav" + i].onTouchEnd = this.onClickTab.bind(this, i);
                    this.view["lblNotifyUnread"].onTouchEnd = this.onClickTab.bind(this, 2);
                    this.view["flxBottomNav" + i].width = (100 / this.numberOfTabs) + "%";
                    this.view["lblBottomNav" + i].text = this.lblChevronText[i - 1];
                    this.view["lblBottomNav" + i].skin = this.bottomNavSkins[0];
                    this.view["flxBottomNav" + i].setVisibility(true);
                }
            } catch (exception) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in makeTabs ::" + exception);
            }
        },
        makeTabActive: function(tabNumber) {
            try {
                if (isShareIconEnable === "false") {
                    if (tabNumber === 5) {
                        tabNumber = tabNumber - 1;
                    }
                }
                this.normalChevronSkins = ["sknLblchevronGrey"];
                this.activeChevronSkins = ["sknLblchevronWhiteSelected"];
                for (var i = 1; i <= this.numberOfTabs; i++) {
                    if (i === tabNumber) {
                        this.view["lblBottomNav" + i].skin = this.activeChevronSkins[0];
                        continue;
                    }
                    this.view["lblBottomNav" + i].skin = this.normalChevronSkins[0];
                }
            } catch (exception) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in makeTabActive ::" + exception);
            }
        },
        onClickTab: function(tabNumber) {
            try {
                if (Utils.isNetworkAvailable()) {
                    if (isShareIconEnable === "true") {
                        this.frmIdsToNavigate = ["frmDOSHome", "frmNotifications", "frmWebURL", "frmChatWindow", "frmUserProfile"];
                    } else {
                        this.frmIdsToNavigate = ["frmDOSHome", "frmNotifications", "frmWebURL", "frmUserProfile"];
                    }
                    var refreshIfAlreadyOnPage = [false, false, false];
                    var currFrmName = kony.application.getCurrentForm().id;
                    if (currFrmName === "frmDosChart" && tabNumber === 1) {
                        gblIsChartBackNav = true;
                        return;
                    }
                    //Do not refresh if we are on the same page for register button
                    if (!refreshIfAlreadyOnPage[tabNumber - 1] && currFrmName === this.frmIdsToNavigate[tabNumber - 1]) {
                        return;
                    }
                    if (tabNumber === 0) {
                        G_Navigation_History.push("frmDOSHome");
                    }
                    Utils.navigate(this.frmIdsToNavigate[tabNumber - 1], "", G_Navigation_History);
                }
            } catch (exception) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in onClickTab ::" + exception);
            }
        },
        hidebackButton: function(isBackButtonNotNeeded) {
            try {
                if (isBackButtonNotNeeded) {
                    this.view.flxTopBar.setVisibility(false);
                }
            } catch (exception) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in hidebackButton ::" + exception);
            }
        },
        navigateToDefinition: function() {
            try {
                var currFrmName = kony.application.getCurrentForm();
                this.view.lblHeader.text = kony.i18n.getLocalizedString("i18.clorox.lbl_definitions");
                this.view.lblHeader.centerX = "50%";
                currFrmName.Definitions.setVisibility(true);
                this.view.lblBack.setVisibility(true);
                this.view.flxReset.setVisibility(false);
                this.view.lblInfo.setVisibility(false);
                this.view.lblBack.onTouchEnd = this.disableDefinitions;
            } catch (e) {
                kony.print("Exception in navigateToDefinition func " + e);
            }
        },
        disableDefinitions: function() {
            try {
                var currFrmName = kony.application.getCurrentForm()
                this.view.lblHeader.centerX = "44%";
                currFrmName.Definitions.setVisibility(false);
                this.view.lblInfo.setVisibility(true);
                this.view.lblHeader.text = kony.i18n.getLocalizedString("i18.clorox.DOS");
                if (currFrmName.id === "frmDosChart") {
                    this.view.flxReset.setVisibility(true);
                    this.view.lblBack.setVisibility(true);
                } else {
                    if (deviceUtil.isTablet() && dosDataBackHead.length > 1) {
                        this.view.flxReset.setVisibility(true);
                        this.view.lblBack.setVisibility(true);
                    } else {
                        if (gblIsSecondLevel) {
                            this.view.flxReset.setVisibility(true);
                            this.view.lblBack.setVisibility(true);
                        } else {
                            if (!Utils.isNullorEmpty(gblDosDataArray) && gblDosDataArray.length > 1) {
                                this.view.flxReset.setVisibility(true);
                                this.view.lblBack.setVisibility(true);
                            } else {
                                this.view.flxReset.setVisibility(false);
                                this.view.lblBack.setVisibility(false);
                            }
                        }
                    }
                }
                this.view.lblBack.onTouchEnd = this.onBack;
            } catch (Exception) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in disableDefinitions ::" + Exception);
            }
        },
        /* Toast Notification Methods */
        showNotificationToast: function() {
            try {
                this.notificationsClick = false;
                this.view.zIndex = 1000;
                this.view.flxMainBgToastNotification.zIndex = 1000;
                this.view.flxMainContainer.animate(kony.ui.createAnimation({
                    "100": {
                        "top": "0dp",
                        "opacity": 1,
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        }
                    }
                }), {
                    "delay": 0,
                    "iterationCount": 1,
                    "fillMode": kony.anim.FILL_MODE_FORWARDS,
                    "duration": 0.4
                }, {
                    "animationEnd": this.animationEndShow
                });
            } catch (e) {
                kony.print("Exception in showNotificationToast func " + e);
            }
        },
        animationEndShow: function() {
            try {
                kony.timer.cancel("removeNotificationsToast");
            } catch (e) {}
            var timerInterval = 3;
            if (gblAppConfig.UpgradeInfo) {
                timerInterval = gblAppConfig.UpgradeInfo[AppConstants.NOTIFICATION_TOAST_INTERVAL];
            }
            timerInterval = parseInt(timerInterval);
            kony.timer.schedule("removeNotificationsToast", this.hideNotificationToast, timerInterval, false);
        },
        hideNotificationToast: function() {
            try {
                kony.timer.cancel("removeNotificationsToast");
            } catch (e) {}
            this.view.flxMainContainer.animate(kony.ui.createAnimation({
                "100": {
                    "top": "-100dp",
                    "opacity": 1,
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.6
            }, {
                "animationEnd": this.animationEndHide
            });
        },
        animationEndHide: function() {
            this.view.zIndex = 1;
            this.view.flxMainBgToastNotification.zIndex = 1;
        },
        onClickNotifications: function() {
            try {
                kony.timer.cancel("removeNotificationsToast");
                this.notificationsClick = true;
                UserStore.setUserParam(StoreKeys.NotificationsToastActive, true);
                this.view.flxMainContainer.animate(kony.ui.createAnimation({
                    "100": {
                        "top": "-100dp",
                        "opacity": 1,
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        }
                    }
                }), {
                    "delay": 0,
                    "iterationCount": 1,
                    "fillMode": kony.anim.FILL_MODE_FORWARDS,
                    "duration": 0.4
                }, {
                    "animationEnd": this.animationEndClick
                });
            } catch (e) {
                kony.print("Exception in onClickViewNotifications : " + e);
            }
        },
        animationEndClick: function() {
            try {
                var currForm = kony.application.getCurrentForm().id;
                this.view.zIndex = 1;
                this.view.flxMainBgToastNotification.zIndex = 1;
                if (gblIsSessionExpired) {
                    Utils.hideLoadingIndicator();
                    return;
                }
                updateNotificationStatus(pushId);
                displayUpdates(notificationType);
            } catch (e) {
                kony.print("Exception in animartionEndClick func " + e);
            }
        },
        setToastMessage: function(message) {
            try {
                this.view.lblNewNotifications.text = message;
            } catch (e) {
                kony.print("Exception in setToastMessage func" + e);
            }
        },
        setNitifyUnreadLabel: function(flag) {
            try {
                var notificationCount = UserStore.getUserParam(StoreKeys.NotificationUnreadCount);
                if (notificationCount > 0) {
                    flag = true;
                }
                if (flag) {
                    this.view.lblNotifyUnread.setVisibility(true);
                } else {
                    this.view.lblNotifyUnread.setVisibility(false);
                }
            } catch (e) {
                kony.print("Exception in setNitifyUnreadLabel : " + e);
            }
        },
        tobBarVisibilityOn: function() {
            try {
                this.view.flxTopBar.setVisibility(true);
                this.view.flxBottomBar.setVisibility(true);
            } catch (e) {
                kony.print("Exception in topBarVisibilityOn func" + e);
            }
        },
        tobBarVisibilityOff: function() {
            try {
                this.view.flxTopBar.setVisibility(false);
                this.view.flxBottomBar.setVisibility(false);
            } catch (e) {
                kony.print("Exception in tobBarVisibilityOff func" + e);
            }
        }
    };
});
define("Clorox/TopBottomNavigation/TopBottomNavigationControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("Clorox/TopBottomNavigation/TopBottomNavigationController", ["Clorox/TopBottomNavigation/userTopBottomNavigationController", "Clorox/TopBottomNavigation/TopBottomNavigationControllerActions"], function() {
    var controller = require("Clorox/TopBottomNavigation/userTopBottomNavigationController");
    var actions = require("Clorox/TopBottomNavigation/TopBottomNavigationControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "flxReset", function(val) {
            this.view.flxReset.isVisible = val;
        });
        defineGetter(this, "flxReset", function() {
            return this.view.flxReset.isVisible;
        });
        defineSetter(this, "lblBack", function(val) {
            this.view.lblBack.isVisible = val;
        });
        defineGetter(this, "lblBack", function() {
            return this.view.lblBack.isVisible;
        });
        defineSetter(this, "flxDosHdr", function(val) {
            this.view.flxDosHdr.centerX = val;
        });
        defineGetter(this, "flxDosHdr", function() {
            return this.view.flxDosHdr.centerX;
        });
        defineSetter(this, "flxResetLeft", function(val) {
            this.view.flxReset.left = val;
        });
        defineGetter(this, "flxResetLeft", function() {
            return this.view.flxReset.left;
        });
        defineSetter(this, "lblHeaderText", function(val) {
            this.view.lblHeader.text = val;
        });
        defineGetter(this, "lblHeaderText", function() {
            return this.view.lblHeader.text;
        });
        defineSetter(this, "lblInfoVisibility", function(val) {
            this.view.lblInfo.isVisible = val;
        });
        defineGetter(this, "lblInfoVisibility", function() {
            return this.view.lblInfo.isVisible;
        });
        defineSetter(this, "lblHeaderCenterX", function(val) {
            this.view.lblHeader.centerX = val;
        });
        defineGetter(this, "lblHeaderCenterX", function() {
            return this.view.lblHeader.centerX;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_flxResetClick_e198a5fa2ba1485f9bccbaf0e8f93ce2 = function() {
        if (this.flxResetClick) {
            this.flxResetClick.apply(this, arguments);
        }
    }
    return controller;
});
