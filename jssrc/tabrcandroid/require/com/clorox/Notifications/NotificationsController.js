define("com/clorox/Notifications/userNotificationsController", function() {
    var Utils = require("UtilsCL");
    return {
        rowIndex: 0,
        selectedRowItems: [],
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.applyBindings();
        },
        applyBindings: function() {
            try {
                this.view.preShow = this.onPreshow;
                this.view.flxNotifSetting.onClick = this.navToNotifSettings;
                this.view.segmentNotifications.onRowClick = this.onNotificationClick;
            } catch (e) {
                kony.print("Exception in apply bindings" + e);
            }
        },
        onPreshow: function() {
            try {
                this.view.lblNoNotification.text = kony.i18n.getLocalizedString("i18n.clorox.NoNotification");
            } catch (e) {
                kony.print("Exception in preshow" + e);
            }
        },
        setNotifyEmpty: function() {
            this.view.flxNotifyEmpty.setVisibility(true);
            this.view.segmentNotifications.setVisibility(false);
        },
        setSegmentData: function(segData) {
            try {
                this.view.segmentNotifications.removeAll();
                this.view.segmentNotifications.setData(segData);
                this.view.flxNotifyEmpty.setVisibility(false);
                this.view.segmentNotifications.setVisibility(true);
            } catch (e) {
                kony.print("Exception in setSegData : " + e);
            }
        },
        navToNotifSettings: function() {
            try {
                new kony.mvc.Navigation("frmNotificationSettings").navigate();
            } catch (e) {
                kony.print("Exception in navToNotifSettings" + e);
            }
        },
        onNotificationClick: function() {
            try {
                this.rowIndex = this.view.segmentNotifications.selectedIndex[1];
                this.selectedRowItems = this.view.segmentNotifications.selectedRowItems[0];
                var segData = this.view.segmentNotifications.data;
                kony.print("inside onNotificationClick rowIndex : " + this.rowIndex);
                kony.print("inside onNotificationClick selectedRowItems : " + JSON.stringify(this.selectedRowItems));
                kony.print("inside onNotificationClick segData : " + JSON.stringify(segData));
                if (!Utils.isNullorEmpty(this.selectedRowItems)) {
                    if (this.selectedRowItems.msgType !== "READ") {
                        var mid = this.selectedRowItems.pushId;
                        this.updateNotificationStatus(mid);
                    } else {
                        this.getFetchPayload(this.selectedRowItems.pushId);
                    }
                }
            } catch (e) {
                kony.print("Exception in onNotificationClick : " + e);
            }
        },
        updateNotificationStatus: function(pushId) {
            try {
                var inputParam = {
                    mid: pushId,
                    ufid: gblPartyEmail
                };
                GlobalServices.callIntegrationServices(GetPushMessage.serviceName, GetPushMessage.updateNotificationStatus, this.updateNotificationSuccessCallBack, inputParam, false, true, this.updateNotificationStatusFailureCallBack);
            } catch (e) {
                kony.print("Exception in updateNotificationStatus : " + e);
                Utils.hideLoadingIndicator();
            }
        },
        updateNotificationSuccessCallBack: function(response) {
            try {
                var rowIndex = this.rowIndex;
                var selectedItems = this.selectedRowItems;
                if (response.message === "Successfully updated the Message Status") {
                    if (selectedItems.isRead === false) {
                        selectedItems.lblNotifMessage.skin = "sknLblSSPR0f5ae94A3B3"
                        selectedItems.isRead = true;
                        selectedItems.msgType = "READ";
                        selectedItems.lblNotifDate = selectedItems.date + " " + "•" + " " + selectedItems.time + " " + "•" + " " + selectedItems.msgType;
                        if (selectedItems.pushType === "dos_data_updated") {
                            selectedItems.lblNotifyIcon.skin = "sknLblNotifyHoronIconRead";
                        } else if (selectedItems.pushType === "mtd_orders_vs_ya_index_exceeds" || selectedItems.pushType === "mtd_shipments_vs_ndf_exceeds") {
                            selectedItems.lblNotifyIcon.skin = "sknLblNotifyBellWhiteRead";
                        } else {
                            selectedItems.lblNotifyIcon.skin = "sknLblNotifyHoronIconRead";
                        }
                    }
                    this.view.segmentNotifications.setDataAt(selectedItems, rowIndex);
                    kmsUtil.decrementNotificationCount();
                    //after successfull message update navigating to respective screens
                    this.getFetchPayload(selectedItems.pushId);
                } else {
                    var currFrm = kony.application.getCurrentForm();
                    currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.error"), kony.i18n.getLocalizedString("i18n.clorox.serviceFailed"), kony.i18n.getLocalizedString("i18n.clorox.ok"), this.onClickCancel);
                    currFrm.flxGenericError.setVisibility(true);
                    Utils.hideLoadingIndicator();
                }
            } catch (e) {
                kony.print("Exception in updateNotificationSuccessCallBack : " + e);
                Utils.hideLoadingIndicator();
            }
        },
        updateNotificationStatusFailureCallBack: function(response) {
            var currFrm = kony.application.getCurrentForm();
            currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.error"), kony.i18n.getLocalizedString("i18n.clorox.serviceFailed"), kony.i18n.getLocalizedString("i18n.clorox.ok"), this.onClickCancel);
            currFrm.flxGenericError.setVisibility(true);
            Utils.hideLoadingIndicator();
        },
        onClickCancel: function() {
            var currFrm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currFrm)) {
                currFrm.flxGenericError.setVisibility(false);
            }
        },
        getFetchPayload: function(pushid) {
            try {
                kony.print("inside getPushType pushId : " + pushid);
                var inputParam = {
                    pushId: pushid
                };
                GlobalServices.callIntegrationServices(GetPushMessage.serviceName, GetPushMessage.getFetchPayload, this.getFetchPayloadSuccessCallback, inputParam, false, true, this.getFetchPayloadErrorCallback);
            } catch (e) {
                kony.print("Exception in getPushType : " + e);
                Utils.hideLoadingIndicator();
            }
        },
        getFetchPayloadSuccessCallback: function(response) {
            try {
                var pushType = "";
                if (!Utils.isNullorEmpty(kony.application.getCurrentForm().loadingIndicator)) kony.application.getCurrentForm().loadingIndicator.isVisible = true;
                if (!Utils.isNullorEmpty(response)) {
                    if (!Utils.isNullorEmpty(response.response[0].data) && response.response[0].data !== {}) {
                        pushType = response.response[0].data.notificationType;
                        if (pushType === "dos_data_updated" || pushType === "mtd_orders_vs_ya_index_exceeds" || pushType === "mtd_shipments_vs_ndf_exceeds") {
                            G_Navigation_History.push("frmNotifications");
                            displayUpdates(pushType);
                        } else {
                            Utils.hideLoadingIndicator();
                        }
                    } else if (!Utils.isNullorEmpty(response.response[0]) && response.response[0] !== {}) {
                        pushType = response.response[0].notificationType;
                        if (pushType === "dos_data_updated" || pushType === "mtd_orders_vs_ya_index_exceeds" || pushType === "mtd_shipments_vs_ndf_exceeds") {
                            G_Navigation_History.push("frmNotifications");
                            displayUpdates(pushType);
                        } else {
                            Utils.hideLoadingIndicator();
                        }
                    } else {
                        Utils.hideLoadingIndicator();
                    }
                } else {
                    Utils.hideLoadingIndicator();
                }
            } catch (e) {
                kony.print("Exception in getFetchPayloadSuccessCallback : " + e);
                Utils.hideLoadingIndicator();
            }
        },
        getFetchPayloadErrorCallback: function(response) {
            var message = kony.i18n.getLocalizedString("i18n.fetchPayload.error") + ErrorCodes.FETCH_PAYLOAD_FAILED;
            Utils.hideLoadingIndicator();
            var currForm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)) {
                currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"), message, kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
                currForm.flxGenericError.setVisibility(true);
            }
        }
    };
});
define("com/clorox/Notifications/NotificationsControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/clorox/Notifications/NotificationsController", ["com/clorox/Notifications/userNotificationsController", "com/clorox/Notifications/NotificationsControllerActions"], function() {
    var controller = require("com/clorox/Notifications/userNotificationsController");
    var actions = require("com/clorox/Notifications/NotificationsControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
