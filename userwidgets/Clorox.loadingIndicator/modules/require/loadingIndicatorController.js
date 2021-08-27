define(function() {
var deviceUtil = require("DeviceUtil");
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.applyBindings();
    },

    applyBindings : function(){
      this.view.flxLoadMain.onClick = function(){};
      if(deviceUtil.isTablet()){
        this.view.lblLoading.top = "103dp";
        this.view.lblLoading.skin = "sknLblSSPR15000000";
      } else{
        this.view.lblLoading.top = "73dp";
        this.view.lblLoading.skin = "sknLblSSPR11000000";
      }
    }
  };
});