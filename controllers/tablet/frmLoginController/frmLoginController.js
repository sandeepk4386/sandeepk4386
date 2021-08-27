var Utils = require("UtilsCL");
var deviceUtil = require("DeviceUtil");
var GlobalServices = require("GlobalServices");
define({ 
  onNavigate :  function(){
    this.applyBindings();
  },

  applyBindings:function(){
    LoginReference = this;
    this.view.preShow=this.onPreShow;
    this.view.postShow = this.loginPostShow;
    this.view.flxGenericError.setVisibility(false);
    this.view.flxGenericError.onClick= () => {};
    this.view.onDeviceBack = function(){};
  },
  
  onPreShow: function(){
    gblAdditionalMetricsDisplay = false;
    if (Utils.isNetworkAvailable()){
    if(!gblIsFabricInitilised){
      this.view.loadingIndicator.isVisible = true;
      GlobalServices.initialiseMobileFabric(this.fetchAppUpgradeData);
    }else{
      if(this.view.Login.checkBiometricSupport() && kony.store.getItem('isUserBioMetricEnabled')){
      this.view.Login.invokeIdentityService();
      }
    }
    }
  },
  showUpgradePopup : function(isMandatory){
    this.view.GenericError.appUpgrade(isMandatory);
  },
  loginPostShow: function(){
    if (Utils.isNetworkAvailable()){
    this.view.flxGenericError.setVisibility(false); 
    }  
  },
  fetchAppUpgradeData : function(){
    try{
      var inputParam = {};
      GlobalServices.callIntegrationServices(AppUpgrade.serviceName,AppUpgrade.fetchUpgradeData,this.appUpgradeSuccessCallBack,inputParam,false,true,this.appUpgradeFailureallBack); 
    }catch(exception){
      kony.print("Inside fetchAppUpgradeData error ::"+JSON.stringify(exception));
    }
  },
  appUpgradeSuccessCallBack : function(res){
    Utils.hideLoadingIndicator();
    try{
      gblAppConfig = res;
      if(!Utils.isNullorEmpty(res.UpgradeInfo)){
        gblEnableNavGuide = res.UpgradeInfo[AppConstants.ENABLE_TUTORIAL];
        isShareIconEnable = res.UpgradeInfo[AppConstants.COLLABORATION];
      }
      this.checkVersions();
    }catch(exception){
      kony.print("Inside appUpgradeSuccessCallBack error ::"+JSON.stringify(exception));
    }
  },
  appUpgradeFailureallBack : function (error){
    Utils.hideLoadingIndicator();
    try{
      gblAppConfig = null;
      kony.print("Inside appUpgradeFailureallBack ::"+JSON.stringify(error));
    }catch(exception){
      kony.print("Inside appUpgradeFailureallBack error ::"+JSON.stringify(exception));
    }
  },
  checkVersions:function(){
    try{
      this.view.loadingIndicator.isVisible = true;
      var currentVersion = deviceUtil.getAppVersion();
      if (!Utils.isNullorEmpty(gblAppConfig)) {
        var minimumVersion = gblAppConfig.UpgradeInfo[AppConstants.MINIMUM_REQUIRED_VERSION_ANDROID];
        var latestVersion = gblAppConfig.UpgradeInfo[AppConstants.LATEST_VERSION_ANDROID];
        if (deviceUtil.isAndroid()) {
          this.upgradeURL = gblAppConfig.UpgradeInfo[AppConstants.PLAY_STORE_URL];
          minimumVersion = gblAppConfig.UpgradeInfo[AppConstants.MINIMUM_REQUIRED_VERSION_ANDROID]+"";
          latestVersion =  gblAppConfig.UpgradeInfo[AppConstants.LATEST_VERSION_ANDROID] +"";
        } else if (deviceUtil.isiPhone()) {
          this.upgradeURL = gblAppConfig.UpgradeInfo[AppConstants.APP_STORE_URL];
          minimumVersion = gblAppConfig.UpgradeInfo[AppConstants.MINIMUM_REQUIRED_VERSION_IOS]+"";
          latestVersion = gblAppConfig.UpgradeInfo[AppConstants.LATEST_VERSION_IOS] +"";
        }
        kony.print("currentVersion :"+currentVersion+" :: minimumVersion ::"+minimumVersion+" :: latestVersion ::"+latestVersion);
        var a = currentVersion.split('.').map(n => +n+100).join('.');
        var b = minimumVersion.split('.').map(n => +n+100).join('.');
        var c = latestVersion.split('.').map(n => +n+100).join('.');
        kony.print("a :"+a+" :: b ::"+b+" :: c ::"+c);
        if (a < b) {    
          this.showUpgradePopup(true);
        }else if (a < c) {      
          this.showUpgradePopup(false);
        }else{
          this.view.Login.invokeIdentityService();
        }
        this.view.loadingIndicator.isVisible = false;
      }
    }catch(e){
      kony.print("Exception in checkVersions "+e);
    }
  }
});