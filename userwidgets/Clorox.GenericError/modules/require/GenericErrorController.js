define(function() {
  var deviceUtil = require("DeviceUtil");
  var Utils = require("UtilsCL");
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
    },
    
    appUpgrade : function(isMandatory){
      try{
        this.view.lblTitle.text=kony.i18n.getLocalizedString("i18.clorox.upgradeHeader");
        this.view.lblDescription.text=kony.i18n.getLocalizedString("i18.clorox.upgradeDesc");
        this.view.btnyes.text=kony.i18n.getLocalizedString("i18.clorox.update");
        if(!isMandatory){
          this.view.btnNo.text=kony.i18n.getLocalizedString("i18.clorox.NotNow");
          this.view.btnNo.isVisible=true;
          this.view.btnNo.onClick=this.dismissError;
        }
        else{
          this.view.btnNo.isVisible=false;
        } 
        this.view.btnyes.isVisible=true;
        this.view.btnyes.onClick=this.mandatoryUpgrade.bind(this,isMandatory);
        var currFrm = kony.application.getCurrentForm();
        if(currFrm.id === "frmLogin" && currFrm.flxGenericError){
          currFrm.flxGenericError.setVisibility(true);
        }
      }catch(e){
        kony.print("Exception in appUpgrade"+e);
      }
    },
    
    mandatoryUpgrade : function(isMandatory){
      try {
        var upgradeURL;
        if (deviceUtil.isAndroid()||deviceUtil.isAndroidTab()) {
          upgradeURL = gblAppConfig.UpgradeInfo[AppConstants.PLAY_STORE_URL];

        } else if (deviceUtil.isiPhone()||deviceUtil.isiPad()) {
          upgradeURL = gblAppConfig.UpgradeInfo[AppConstants.APP_STORE_URL];
        }
        kony.application.openURL(upgradeURL);
        var currFrm = kony.application.getCurrentForm();
        if(currFrm.id === "frmLogin" && currFrm.flxGenericError && !isMandatory){
          currFrm.flxGenericError.setVisibility(false);
          gblIsUpdateClicked = true;
        }
      } catch (exception) {
        kony.print("Can't Load the URL,please try again /n"+ e);
      }
    },
    
    dismissError : function(){
      try{
      var currFrm = kony.application.getCurrentForm();
      if(currFrm.id === "frmLogin" && currFrm.flxGenericError){
        currFrm.flxGenericError.setVisibility(false);
        currFrm.Login.invokeIdentityService();
      }
      }catch(e){
        kony.print("Exception in dismissError "+e);
      }
    },

    displayText: function(title, description, yes, yesHandler, no, noHandler){
      try{
        this.view.lblTitle.text=title;
        this.view.lblDescription.text=description;
        this.view.btnyes.text=yes;
        this.view.btnyes.onClick=yesHandler;
        if(!Utils.isNullorEmpty(no)){
          this.view.btnNo.text=no;
          this.view.btnNo.onClick=noHandler;
          this.view.btnNo.isVisible=true;
        }else{
          this.view.btnNo.isVisible=false;
        }
      }catch(e){
        kony.print("Exception in displayText"+e);
      }
    }
  };
});
