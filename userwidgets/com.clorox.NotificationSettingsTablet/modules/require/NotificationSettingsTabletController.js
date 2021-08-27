define(function() {
  var Utils = require("UtilsCL");
  return {
    dos_data_updated : "selected",
    mtd_orders_vs_ya_index_exceeds :"unselected",
    mtd_shipments_vs_ndf_exceeds : "unselected",
    modifyUserCalledFrom : "",
    rowIndex : "",
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.applyBindings();
    },

    applyBindings : function(){
      try{
        notificationSettings = this;
        this.view.preShow = this.onPreshow;
        this.view.flxToggleMain.onClick = this.onClickPushToggle;
        this.view.onDeviceBack = function(){};
        var curntForm = kony.application.getCurrentForm();
        this.view.flxToggleMainCustNotif.onClick = this.onClickPushToggleCustNotif;
        kony.application.setApplicationCallbacks({
          onforeground : this.onAppForeground
        });
        if(!Utils.isNullorEmpty(curntForm) && !Utils.isNullorEmpty(curntForm.TopBottomNavigation))
          curntForm.TopBottomNavigation.flxTopBar = this.backNav;
      }catch(e){
        kony.print("Exception in applyBindings"+JSON.stringify(e));
      }
    },

    onAppForeground : function()
    {
      try{
      kony.print("inside notification settings onAppForeground");
      var isNotificationEnable;
        if(deviceUtil.isAndroid()){
          isNotificationEnable = Utils.checkAndroidNativeSetting();
        }else{
          isNotificationEnable = Utils.checkIosNativeSetting();  
        }
        var emailId = gblPartyEmail;
        var enablePushNotificationKey = StoreKeys.ENABLE_PUSH_NOTIFICATION + emailId;
        var isNotificationRegistered = UserStore.getItem(enablePushNotificationKey);
        var isPushRegistered = kony.store.getItem("isPushRegistered");
        kony.print("inside onAppForeground isNotificationEnable : " + isNotificationEnable + " isNotificationRegistered : " + isNotificationRegistered);
        if(isNotificationEnable && isNotificationRegistered){
          if(isPushRegistered){
            kmsUtil.pushRegistration();
            this.setEnableSkins();
          }
        }else if(!isNotificationEnable){
          kmsUtil.pushdeRegister();
          this.setDisableSkins();
        }
      }catch(e){
        kony.print("Exception in notification settings onAppForeground : " + e);
      }
    },
    
    onPreshow : function(){
      try{
        var messageCenterVis = false;
        if(gblAppConfig.UpgradeInfo){
          messageCenterVis = JSON.parse(gblAppConfig.UpgradeInfo[AppConstants.MESSAGE_CENTER]);
        }
        this.view.flxSegment.setVisibility(messageCenterVis);
        this.view.lblPushNotif.text = kony.i18n.getLocalizedString("i18.clorox.pushNotification");
        this.view.lblTurnOnPushNotif.text = kony.i18n.getLocalizedString("i18.clorox.turnOnPush");
        this.view.lblCustomNotif.text = kony.i18n.getLocalizedString("i18.clorox.customNotification");
        this.view.lblCustomNotifMsg.text = kony.i18n.getLocalizedString("i18.clorox.customNotifMsg");
        this.view.flxPushSwtchCustNotif.skin = "sknToggleE5E5E5";
        this.view.flxRoundToggleCustNotif.left = "7dp";
        this.view.flxRoundToggleCustNotif.skin = "sknToggleRoundE5E5E5";
        this.view.segNotificationSettings.setVisibility(false);
        var curntForm = kony.application.getCurrentForm();
        if(!Utils.isNullorEmpty(curntForm) && !Utils.isNullorEmpty(curntForm.TopBottomNavigation))
          curntForm.TopBottomNavigation.makeTabActive(2);
        this.enableDisblePushNotifications();
      }catch(e){
        kony.print("Exception in preshow"+JSON.stringify(e));
      }
    },

    enableDisblePushNotifications : function(){
      try{
        if(!Utils.isNullorEmpty(kony.application.getCurrentForm().loadingIndicator))
          kony.application.getCurrentForm().loadingIndicator.isVisible=false;
        var isNotificationEnable,isPushRegistered;
        isPushRegistered = kony.store.getItem("isPushRegistered");
        if(deviceUtil.isAndroid()){
          isNotificationEnable = Utils.checkAndroidNativeSetting();
        }else{
          isNotificationEnable = Utils.checkIosNativeSetting();  
        }
        kony.print("inside enableDisblePushNotifications isNotificationEnable : " + isNotificationEnable + " isPushRegistered : " + isPushRegistered);
        if(isNotificationEnable === 7 || isNotificationEnable){
          if(isPushRegistered){
            this.setEnableSkins();           
          }else{
            this.setDisableSkins();
          }
        }else{
          this.setDisableSkins();
        }
      }catch(e){
        kony.print("inside enableDisblePushNotifications notification settings exception  : " + e);
      }
    },

    doNothing : function(){
      //do nothing
    },

    setEnableSkins : function(){
      kony.print("inside setEnableSkins");
      this.view.flxPushSwitch.skin = "sknToggle0AC7C2OP66";
      this.view.flxRoundToggle.left = "20dp";
      this.view.flxRoundToggle.skin = "sknToggleRound0AC7C2";
      this.view.flxPushSwtchCustNotif.skin = "sknToggle0AC7C2OP66";
      this.view.flxRoundToggleCustNotif.left = "20dp";
      this.view.flxRoundToggleCustNotif.skin = "sknToggleRound0AC7C2";
      this.dos_data_updated = "selected";
      this.mtd_shipments_vs_ndf_exceeds = "unselected";
      this.mtd_orders_vs_ya_index_exceeds = "unselected";
      var audienceId = kony.store.getItem("AudienceId");
      kony.print("inside setEnableSkins audienceId : " + audienceId);
      if(!Utils.isNullorEmpty(audienceId)){
        this.getUserById();
      }else{
        kony.print("id not found");
      }
    },
    
    setDisableSkins : function(){
      kony.print("inside setDisableSkins");
      this.view.flxRoundToggle.left = "7dp";
      this.view.flxPushSwitch.skin = "sknToggleE5E5E5";
      this.view.flxRoundToggle.skin = "sknToggleRoundE5E5E5";
      this.view.flxPushSwtchCustNotif.skin = "sknToggleGrey";
      this.view.flxRoundToggleCustNotif.left = "7dp";
      this.view.flxRoundToggleCustNotif.skin = "sknToggleRoundGrey";
      this.dos_data_updated = "unselected";
      this.mtd_shipments_vs_ndf_exceeds = "unselected";
      this.mtd_orders_vs_ya_index_exceeds = "unselected";
      if(gblAppConfig.UpgradeInfo && !Utils.isNullorEmpty(gblAppConfig.UpgradeInfo[AppConstants.MESSAGE_CENTER]) && gblAppConfig.UpgradeInfo[AppConstants.MESSAGE_CENTER] === "true"){
        this.doWidgetDataMap();
      }
    },
    
    doWidgetDataMap : function(){
      try{
        this.view.segNotificationSettings.widgetDataMap = {
          "flxNotifSett" : "flxNotifSett",
          "lblNotifSettName" : "lblNotifSettName",
          "flxSegToggleMain" : "flxSegToggleMain",
          "flxSegPushSwtch" : "flxSegPushSwtch",
          "flxRoundToggle" : "flxRoundToggle"
        };
        this.setSegmentData();
      }catch(e){
        kony.print("Exception in doWidgetDatamap"+JSON.stringify(e));
      }
    },

    setSegmentData : function(){
      try{
        this.view.segNotificationSettings.removeAll();
        let segData = [];
        let notifRes = [
          {"notifMessage" : "MTD Orders vs YA Index exceeds 100"},
          {"notifMessage" : "MTD Shipments vs NDF exceeds 100"}
        ];
        var emailId = gblPartyEmail;
        var enablePushNotificationKey = StoreKeys.ENABLE_PUSH_NOTIFICATION + emailId;
        var isNotificationRegistered = UserStore.getItem(enablePushNotificationKey);
        let segPushSwitchSkin = ["sknToggleE5E5E5","sknToggleE5E5E5"];
        let roundToggleProperties = [
          {"skin":"sknToggleRoundE5E5E5",
           "left":"7dp"},
          {"skin":"sknToggleRoundE5E5E5",
           "left":"7dp"}
        ];
        if(this.mtd_orders_vs_ya_index_exceeds === "selected"){
          segPushSwitchSkin[0] = "sknToggle0AC7C2OP66";
          roundToggleProperties[0].skin = "sknToggleRound0AC7C2";
          roundToggleProperties[0].left = "20dp";
        }else{
          roundToggleProperties[0].left = "7dp";
          if(kony.store.getItem("isPushRegistered")){
            segPushSwitchSkin[0] = "sknToggleE5E5E5";
            roundToggleProperties[0].skin = "sknToggleRoundE5E5E5";
          }else{
            segPushSwitchSkin[0] = "sknToggleGrey";
            roundToggleProperties[0].skin = "sknToggleRoundGrey";
          }
        }
        if(this.mtd_shipments_vs_ndf_exceeds === "selected"){
          segPushSwitchSkin[1] = "sknToggle0AC7C2OP66";
          roundToggleProperties[1].skin = "sknToggleRound0AC7C2";
          roundToggleProperties[1].left = "20dp";
        }else{
          roundToggleProperties[1].left = "7dp";
          if(kony.store.getItem("isPushRegistered")){
            segPushSwitchSkin[1] = "sknToggleE5E5E5";
            roundToggleProperties[1].skin = "sknToggleRoundE5E5E5";
          }else{
            segPushSwitchSkin[1] = "sknToggleGrey";
            roundToggleProperties[1].skin = "sknToggleRoundGrey";
          }
        }
        if(this.dos_data_updated === "selected"){
          this.view.flxPushSwtchCustNotif.skin = "sknToggle0AC7C2OP66";
          this.view.flxRoundToggleCustNotif.left = "20dp";
          this.view.flxRoundToggleCustNotif.skin = "sknToggleRound0AC7C2";
        }else{
          this.view.flxRoundToggleCustNotif.left = "7dp";
          if(kony.store.getItem("isPushRegistered")){
            this.view.flxPushSwtchCustNotif.skin = "sknToggleE5E5E5";
            this.view.flxRoundToggleCustNotif.skin = "sknToggleRoundE5E5E5";
          }else{
            this.view.flxPushSwtchCustNotif.skin = "sknToggleGrey";
            this.view.flxRoundToggleCustNotif.skin = "sknToggleRoundGrey";
          }
        }
        for(let i=0 ; i<notifRes.length ; i++){
          var tempRecord = {
            "lblNotifSettName" : notifRes[i].notifMessage,
            "flxSegToggleMain" : {onClick: this.segPushToggleClick.bind(this, i)},
            "flxSegPushSwtch" : {skin : segPushSwitchSkin[i]},
            "flxRoundToggle" : {left : roundToggleProperties[i].left, skin : roundToggleProperties[i].skin}
          };
          segData.push(tempRecord);
        }
        this.view.segNotificationSettings.setData(segData);
        this.view.segNotificationSettings.setVisibility(true);
        Utils.hideLoadingIndicator();
      }catch(e){
        kony.print("Exception in setSegmentData"+JSON.stringify(e));
        Utils.hideLoadingIndicator();
      }
    },

    onClickPushToggle: function(){
      try{  
        /*if(deviceUtil.isAndroid()){
          this.view.flxToggleMain.onClick = function(){};
        }*/
        if (Utils.isNetworkAvailable()){
        var currFrm = kony.application.getCurrentForm();
        if(this.view.flxPushSwitch.skin === "sknToggle0AC7C2OP66"){

          currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.conformation"),
                                           kony.i18n.getLocalizedString("i18n.clorox.disablePushNotification"),
                                           kony.i18n.getLocalizedString("i18n.clorox.disable"),this.onClickEnbaleOrDisable,
                                           kony.i18n.getLocalizedString("i18n.clorox.cancel"),this.onClickCancel);
          currFrm.flxGenericError.setVisibility(true);
        }
        else{
          var isNotificationEnable;
          if(deviceUtil.isAndroid()){
            isNotificationEnable = Utils.checkAndroidNativeSetting();
          }else{
            isNotificationEnable = Utils.checkIosNativeSetting();  
          }
          var emailId = gblPartyEmail;
          var enablePushNotificationKey = StoreKeys.ENABLE_PUSH_NOTIFICATION + emailId;
          var isNotificationRegistered = UserStore.getItem(enablePushNotificationKey);
          kony.print("inside onClickPushToggle isNotificationEnable : " + isNotificationEnable + " isNotificationRegistered : " + isNotificationRegistered);
            if(isNotificationEnable){
            currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.conformation"),
                                             kony.i18n.getLocalizedString("i18n.clorox.enablePushNotification"),
                                             kony.i18n.getLocalizedString("i18n.clorox.enable"),this.onClickEnbaleOrDisable,
                                             kony.i18n.getLocalizedString("i18n.clorox.cancel"),this.onClickCancel);
            currFrm.flxGenericError.setVisibility(true); 
          }else{
            currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"),
                                             kony.i18n.getLocalizedString("i18n.clorox.enableDeviceNotifications"),
                                             kony.i18n.getLocalizedString("i18n.clorox.ok"),this.onClickCancel
                                             );
            currFrm.flxGenericError.setVisibility(true); 
          }
        }
        }  
      }catch(exception){
        kony.print("exception in Biometrictoggleanimation---"+JSON.stringify(exception));
      } 
    },

    onClickEnbaleOrDisable:function(){
      try{  
        var currFrm = kony.application.getCurrentForm();
        if(!Utils.isNullorEmpty(currFrm) ){
          currFrm.flxGenericError.setVisibility(false);
        }
        if(this.view.flxPushSwitch.skin === "sknToggle0AC7C2OP66"){
          this.view.flxRoundToggle.animate(
            kony.ui.createAnimation({
              "0":{"left":"20dp", "stepConfig":{"timingFunction":kony.anim.LINEAR}},
              "100": {"left":"7dp","stepConfig": {"timingFunction": kony.anim.EASE}}
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": kony.anim.FILL_MODE_FORWARDS,
              "duration": 0.3
            }, {
              "animationEnd": this.animationEnd
            });
        }
        else{
          this.view.flxRoundToggle.animate(
            kony.ui.createAnimation({
              "0":{"left":"7dp", "stepConfig":{"timingFunction":kony.anim.LINEAR}},
              "100": {"left":"20dp","stepConfig": {"timingFunction": kony.anim.EASE}}
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": kony.anim.FILL_MODE_FORWARDS,
              "duration": 0.3
            }, {
              "animationEnd": this.animationEnd
            });  
        }
      }catch(exception){
        kony.print("exception in Biometrictoggleanimation---"+JSON.stringify(exception));
      } 
    },
    onClickCancel:function(){
      var currFrm = kony.application.getCurrentForm();
      if(!Utils.isNullorEmpty(currFrm)){
        currFrm.flxGenericError.setVisibility(false);
      }
      this.view.flxToggleMain.onClick = this.onClickPushToggle;
    },

    animationEnd : function(){
      try{
        let segData = [];
        let notifRes = [
          {"notifMessage" : "MTD Orders vs YA Index exceeds 100"},
          {"notifMessage" : "MTD Shipments vs NDF exceeds 100"}
        ];
        let segPushSwitchSkin = ["sknToggleE5E5E5","sknToggleE5E5E5"];
        let roundToggleProperties = [
          {"skin":"sknToggleRoundE5E5E5",
           "left":"7dp"},
          {"skin":"sknToggleRoundE5E5E5",
           "left":"7dp"}
        ];
        
        if(this.view.flxPushSwitch.skin === "sknToggle0AC7C2OP66"){
          kmsUtil.pushdeRegister();
          this.view.flxPushSwitch.skin = "sknToggleE5E5E5";
          this.view.flxRoundToggle.skin = "sknToggleRoundE5E5E5";
          this.dos_data_updated = "unselected";
          this.mtd_shipments_vs_ndf_exceeds = "unselected";
          this.mtd_orders_vs_ya_index_exceeds = "unselected";
          this.view.flxRoundToggleCustNotif.animate(
            kony.ui.createAnimation({
              "0":{"left":"20dp", "stepConfig":{"timingFunction":kony.anim.LINEAR}},
              "100": {"left":"7dp","stepConfig": {"timingFunction": kony.anim.EASE}}
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": kony.anim.FILL_MODE_FORWARDS,
              "duration": 0.3
            }, {
              "animationEnd": this.doNothing
            });
          this.view.flxPushSwtchCustNotif.skin = "sknToggleGrey";
          this.view.flxRoundToggleCustNotif.skin = "sknToggleRoundGrey";
          segPushSwitchSkin[0] = "sknToggleGrey";
          roundToggleProperties[0].skin = "sknToggleRoundGrey";
          roundToggleProperties[0].left = "7dp";
          segPushSwitchSkin[1] = "sknToggleGrey";
          roundToggleProperties[1].skin = "sknToggleRoundGrey";
          roundToggleProperties[1].left = "7dp";
        for(let i=0 ; i<notifRes.length ; i++){
          var tempRecord = {
            "lblNotifSettName" : notifRes[i].notifMessage,
            "flxSegToggleMain" : {onClick: this.segPushToggleClick.bind(this, i)},
            "flxSegPushSwtch" : {skin : segPushSwitchSkin[i]},
            "flxRoundToggle" : {left : roundToggleProperties[i].left, skin : roundToggleProperties[i].skin}
          };
          segData.push(tempRecord);
        }
        this.view.segNotificationSettings.setData(segData);
        }
        else{
          kmsUtil.pushRegistration();
          this.view.flxPushSwitch.skin = "sknToggle0AC7C2OP66";
          this.view.flxRoundToggle.skin = "sknToggleRound0AC7C2";
          this.dos_data_updated = "selected";
          this.mtd_shipments_vs_ndf_exceeds = "unselected";
          this.mtd_orders_vs_ya_index_exceeds = "unselected";
          this.view.flxRoundToggleCustNotif.animate(
            kony.ui.createAnimation({
              "0":{"left":"7dp", "stepConfig":{"timingFunction":kony.anim.LINEAR}},
              "100": {"left":"20dp","stepConfig": {"timingFunction": kony.anim.EASE}}
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": kony.anim.FILL_MODE_FORWARDS,
              "duration": 0.3
            }, {
              "animationEnd": this.doNothing
            });
          this.view.flxPushSwtchCustNotif.skin = "sknToggle0AC7C2OP66";
          this.view.flxRoundToggleCustNotif.skin = "sknToggleRound0AC7C2";
                  this.view.flxToggleMain.onClick = this.onClickPushToggle;
          segPushSwitchSkin[0] = "sknToggleE5E5E5";
          roundToggleProperties[0].skin = "sknToggleRoundE5E5E5";
          roundToggleProperties[0].left = "7dp";
          segPushSwitchSkin[1] = "sknToggleE5E5E5";
          roundToggleProperties[1].skin = "sknToggleRoundE5E5E5";
          roundToggleProperties[1].left = "7dp";
        for(let i=0 ; i<notifRes.length ; i++){
          var tempRecord1 = {
            "lblNotifSettName" : notifRes[i].notifMessage,
            "flxSegToggleMain" : {onClick: this.segPushToggleClick.bind(this, i)},
            "flxSegPushSwtch" : {skin : segPushSwitchSkin[i]},
            "flxRoundToggle" : {left : roundToggleProperties[i].left, skin : roundToggleProperties[i].skin}
          };
          segData.push(tempRecord1);
        }
        this.view.segNotificationSettings.setData(segData);
        }
      }catch(e){
        kony.print("Exception in animationEnd"+JSON.stringify(e));
      }
    },

    onClickPushToggleCustNotif: function(){  
      try{  
        if (Utils.isNetworkAvailable()){
        if(this.view.flxPushSwitch.skin !== "sknToggleE5E5E5"){
          var currFrm = kony.application.getCurrentForm();
          if(this.view.flxPushSwtchCustNotif.skin === "sknToggle0AC7C2OP66"){

            currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.conformation"),
                                             kony.i18n.getLocalizedString("i18n.clorox.disableNotification")+this.view.lblNotifSettName.text+"?",
                                             kony.i18n.getLocalizedString("i18n.clorox.disable"),this.updateCustomNotifications,
                                             kony.i18n.getLocalizedString("i18n.clorox.cancel"),this.onClickCancel);
            currFrm.flxGenericError.setVisibility(true);
          }
          else{
            currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.conformation"),
                                             kony.i18n.getLocalizedString("i18n.clorox.enableNotification")+" "+this.view.lblNotifSettName.text+"?",
                                             kony.i18n.getLocalizedString("i18n.clorox.enable"),this.updateCustomNotifications,
                                             kony.i18n.getLocalizedString("i18n.clorox.cancel"),this.onClickCancel);
            currFrm.flxGenericError.setVisibility(true); 
          }
        }
        }  
      }catch(exception){
        kony.print("exception in onClickPushToggleCustNotif---"+JSON.stringify(exception));
      }   
    },

    updateCustomNotifications : function(){
      try{
        if(this.view.flxPushSwtchCustNotif.skin === "sknToggle0AC7C2OP66"){
          this.dos_data_updated = "unselected";
        }
        else{
          this.dos_data_updated = "selected";
        }
        modifyUserCalledFrom = "customNotifications";
        this.modifyUser();
      }catch(e){
        kony.print("Exception in animationEndCustNotif"+JSON.stringify(e));
      }
    },
    
    onEnableOrDisablePushToggleCustNotif:function(){
      try{  
        if(this.view.flxPushSwtchCustNotif.skin === "sknToggle0AC7C2OP66"){
          this.view.flxRoundToggleCustNotif.animate(
            kony.ui.createAnimation({
              "0":{"left":"20dp", "stepConfig":{"timingFunction":kony.anim.LINEAR}},
              "100": {"left":"7dp","stepConfig": {"timingFunction": kony.anim.EASE}}
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": kony.anim.FILL_MODE_FORWARDS,
              "duration": 0.3
            }, {
              "animationEnd": this.animationEndCustNotif
            });
        }
        else{
          this.view.flxRoundToggleCustNotif.animate(
            kony.ui.createAnimation({
              "0":{"left":"7dp", "stepConfig":{"timingFunction":kony.anim.LINEAR}},
              "100": {"left":"20dp","stepConfig": {"timingFunction": kony.anim.EASE}}
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": kony.anim.FILL_MODE_FORWARDS,
              "duration": 0.3
            }, {
              "animationEnd": this.animationEndCustNotif
            });  
        }
        Utils.hideLoadingIndicator();
      }catch(exception){
        kony.print("exception in onClickPushToggleCustNotif---"+JSON.stringify(exception));
        Utils.hideLoadingIndicator();
      }   
    },
    animationEndCustNotif : function(){
      try{
        if(this.view.flxPushSwtchCustNotif.skin === "sknToggle0AC7C2OP66"){
          this.view.flxPushSwtchCustNotif.skin = "sknToggleE5E5E5";
          this.view.flxRoundToggleCustNotif.skin = "sknToggleRoundE5E5E5";
        }
        else{
          this.view.flxPushSwtchCustNotif.skin = "sknToggle0AC7C2OP66";
          this.view.flxRoundToggleCustNotif.skin = "sknToggleRound0AC7C2";
        }
        this.view.flxToggleMainCustNotif.onClick = this.onClickPushToggleCustNotif;
      }catch(e){
        kony.print("Exception in animationEndCustNotif"+JSON.stringify(e));
      }
    },

    segPushToggleClick: function(rowIndex){  
      try{  
        if(this.view.flxPushSwitch.skin !== "sknToggleE5E5E5"){
          var currFrm = kony.application.getCurrentForm();
          this.rowIndex = rowIndex;
          var rowSegment = rowIndex;
          var segmentData = this.view.segNotificationSettings.data;
          var selectedRow = this.view.segNotificationSettings.data[rowSegment];
          var param = {segmentData : segmentData,
                       rowSegment: rowSegment};
          if(selectedRow.flxSegPushSwtch.skin === "sknToggle0AC7C2OP66"){
            currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.conformation"),
                                             kony.i18n.getLocalizedString("i18n.clorox.disableNotification")+ selectedRow.lblNotifSettName+"?",
                                             kony.i18n.getLocalizedString("i18n.clorox.disable"),this.updateCloroxNotifications.bind(this,rowIndex),
                                             kony.i18n.getLocalizedString("i18n.clorox.cancel"),this.onClickCancel);
            currFrm.flxGenericError.setVisibility(true);
          }else{
            currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.conformation"),
                                             kony.i18n.getLocalizedString("i18n.clorox.enableNotification")+ selectedRow.lblNotifSettName+"?",
                                             kony.i18n.getLocalizedString("i18n.clorox.enable"),this.updateCloroxNotifications.bind(this,rowIndex),
                                             kony.i18n.getLocalizedString("i18n.clorox.cancel"),this.onClickCancel);
            currFrm.flxGenericError.setVisibility(true); 
          }
        }
      }catch(exception){
        kony.print("exception in segPushToggleClick---"+exception);
      }   
    },

    updateCloroxNotifications : function(rowIndex){
      try{
        var rowSegment = rowIndex;
        this.rowIndex = rowIndex;
        var segmentData = this.view.segNotificationSettings.data;
        var selectedRow = this.view.segNotificationSettings.data[rowSegment];
        if(segmentData[rowSegment]["flxSegPushSwtch"]["skin"] === "sknToggle0AC7C2OP66"){
          if(segmentData[rowSegment].lblNotifSettName === "MTD Orders vs YA Index exceeds 100"){
            this.mtd_orders_vs_ya_index_exceeds = "unselected";
          }else{
            this.mtd_shipments_vs_ndf_exceeds = "unselected";
          }
        }
        else{
          if(segmentData[rowSegment].lblNotifSettName === "MTD Orders vs YA Index exceeds 100"){
            this.mtd_orders_vs_ya_index_exceeds = "selected";
          }else{
            this.mtd_shipments_vs_ndf_exceeds = "selected";
          }
        }
        modifyUserCalledFrom = "cloroxNotifications";
        this.modifyUser();
      }catch(e){
        kony.print("Exception in updateCloroxNotifications"+e);
      }
    },
    
    onSegToggleEnableOrDisable:function(rowIndex){
      try{
      kony.print("Inside onSegToggleEnableOrDisable rowIndex : " + rowIndex);
      var currFrm = kony.application.getCurrentForm();
      var rowSegment = rowIndex;
      var segmentData = this.view.segNotificationSettings.data;
      var selectedRow = this.view.segNotificationSettings.data[rowSegment];
      var param = {segmentData : segmentData,
                   rowSegment: rowSegment};
      if(selectedRow.flxSegPushSwtch.skin === "sknToggle0AC7C2OP66"){
        this.view.segNotificationSettings.animateRows({
          rows:[{
            sectionIndex : 0,
            rowIndex : rowSegment
          }],
          widgets:["flxRoundToggle"],
          animation:{
            definition:kony.ui.createAnimation({
              "0":{"left":"20dp", "stepConfig":{"timingFunction":kony.anim.LINEAR}},
              "100": {"left":"7dp","stepConfig": {"timingFunction": kony.anim.EASE}}
            }), 
            config:{
              "delay": 0,
              "iterationCount": 1,
              "fillMode": kony.anim.FILL_MODE_FORWARDS,
              "duration": 0.3,
            },
            callbacks:{
              animationEnd : this.animationEndSegment.bind(this,param)
            }
          }
        });        
      }
      else{
        this.view.segNotificationSettings.animateRows({
          rows:[{
            sectionIndex : 0,
            rowIndex : rowSegment
          }],
          widgets:["flxRoundToggle"],
          animation:{
            definition:kony.ui.createAnimation({
              "0":{"left":"7dp", "stepConfig":{"timingFunction":kony.anim.LINEAR}},
              "100": {"left":"20dp","stepConfig": {"timingFunction": kony.anim.EASE}}
            }), 
            config:{
              "delay": 0,
              "iterationCount": 1,
              "fillMode": kony.anim.FILL_MODE_FORWARDS,
              "duration": 0.3,
            },
            callbacks:{
              animationEnd : this.animationEndSegment.bind(this,param)
            }
          }
        }); 
      }
      }catch(e){
        kony.print("Exception in onSegToggleEnableOrDisable "+e);
      }
    },

    animationEndSegment : function(param){
      var segmentData = param.segmentData;
      var rowSegment = param.rowSegment;
      if(segmentData[rowSegment]["flxSegPushSwtch"]["skin"] === "sknToggle0AC7C2OP66"){
        segmentData[rowSegment]["flxSegPushSwtch"] = {
          skin: "sknToggleE5E5E5"
        };
        segmentData[rowSegment]["flxRoundToggle"] = {
          left: "7dp" , skin: "sknToggleRoundE5E5E5"
        };
      }
      else{
        segmentData[rowSegment]["flxSegPushSwtch"] = {
          skin: "sknToggle0AC7C2OP66"
        };
        segmentData[rowSegment]["flxRoundToggle"] = {
          left: "20dp" , skin: "sknToggleRound0AC7C2"
        };
      }
      notificationSettings.view.segNotificationSettings.setDataAt(segmentData[rowSegment], rowSegment, 0);
      Utils.hideLoadingIndicator();
    },

    backNav : function(){
      try{
        new kony.mvc.Navigation("frmNotifications").navigate();
      }catch(e){
        kony.print("Exception in backNav"+e);
      }
    },

    modifyUser : function(){
      try{
        var audienceId = kony.store.getItem("AudienceId");
        kony.print("inside modifyUser id : " + audienceId);
        kony.print("inside modifyUser dos_data_updated : " + this.dos_data_updated);
        kony.print("inside modifyUser mtd_orders_vs_ya_index_exceeds : " + this.mtd_orders_vs_ya_index_exceeds);
        kony.print("inside modifyUser mtd_shipments_vs_ndf_exceeds : " + this.mtd_shipments_vs_ndf_exceeds);
        var currFrm = kony.application.getCurrentForm();
        if(!Utils.isNullorEmpty(currFrm) ){
          currFrm.flxGenericError.setVisibility(false);
        }
        if(!Utils.isNullorEmpty(audienceId)){
          var inputParam = {
            id : audienceId,
            dos_data_updated : this.dos_data_updated,
            mtd_shipments_vs_ndf_exceeds : this.mtd_shipments_vs_ndf_exceeds,
            mtd_orders_vs_ya_index_exceeds : this.mtd_orders_vs_ya_index_exceeds,
            firstName: gblPartyName,
            lastName : gblPartyName,
            country : "United States",
            state : "Texas",
            email : gblPartyEmail
          };
          GlobalServices.callIntegrationServices(GetPushMessage.serviceName,GetPushMessage.modifyUser,this.modifyUserSuccessCallBack,inputParam,false,true,this.modifyUserFailureCallBack); 
        }else{
          kony.print("id not found");
        }
      }catch(exception){
        var message = kony.i18n.getLocalizedString("i18n.clorox.NullCheck")+ErrorCodes.CODE_CHECK_VALIDATION_FAILED;
        Utils.hideLoadingIndicator();
        kony.print("exception in modifyUser : " + exception);
        return;
      }
    },

    modifyUserSuccessCallBack : function(response){
      try{
        kony.print("inside modifyUserSuccessCallBack response : " + JSON.stringify(response));
        kony.print("inside modifyUserSuccessCallBack modifyUserCalledFrom : " + modifyUserCalledFrom);
        if(modifyUserCalledFrom === "customNotifications"){
          this.onEnableOrDisablePushToggleCustNotif();
        }else if(modifyUserCalledFrom === "cloroxNotifications"){
          this.onSegToggleEnableOrDisable(this.rowIndex);
        }
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in modifyUserSuccessCallBack : " + e);
      }
    },

    modifyUserFailureCallBack : function(response){
      var currFrm = kony.application.getCurrentForm();
      currFrm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.error"),
                                       kony.i18n.getLocalizedString("i18n.clorox.serviceFailed"),
                                       kony.i18n.getLocalizedString("i18n.clorox.ok"),this.onClickCancel
                                      );
      currFrm.flxGenericError.setVisibility(true);
      Utils.hideLoadingIndicator();
      kony.print("inside modifyUserFailureCallBack response : " + JSON.stringify(response));
    },
    
    getUserById : function(){
      try{
        var audienceId = kony.store.getItem("AudienceId");
          var inputParam = {
            id : audienceId,
            ufid : gblPartyEmail
          };
          GlobalServices.callIntegrationServices(GetPushMessage.serviceName,GetPushMessage.getUserById,this.getUserByIdSuccessCallBack,inputParam,false,true,this.getUserByIdFailureCallBack); 
      }catch(e){
        kony.print("Exception in getUserById : " + e);
      }
    },
    
    getUserByIdSuccessCallBack : function(response){
      try{
        kony.print("inside getUserByIdSuccessCallBack response : " + JSON.stringify(response));
        this.dos_data_updated = !Utils.isNullorEmpty(response.dos_data_updated) ? response.dos_data_updated : "selected";
        this.mtd_shipments_vs_ndf_exceeds = !Utils.isNullorEmpty(response.mtd_shipments_vs_ndf_exceeds) ? response.mtd_shipments_vs_ndf_exceeds : "unselected";
        this.mtd_orders_vs_ya_index_exceeds = !Utils.isNullorEmpty(response.mtd_orders_vs_ya_index_exceeds) ? response.mtd_orders_vs_ya_index_exceeds : "unselected";
        var audienceId = !Utils.isNullorEmpty(response.id) ? response.id : "";
        kony.store.setItem("AudienceId",audienceId);
        this.doWidgetDataMap();
      }catch(e){
        kony.print("Exception in getUserByIdSuccessCallBack : " + e);
      }
    },

    getUserByIdFailureCallBack : function(response){
      Utils.hideLoadingIndicator();
      kony.print("inside getUserByIdFailureCallBack response : " + JSON.stringify(response));
    },
  };
});