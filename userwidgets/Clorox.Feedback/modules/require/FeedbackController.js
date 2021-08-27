define(function() {
  var Utils = require("UtilsCL");
  var deviceUtil = require("DeviceUtil");
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.applyBindings();
    },
   
    applyBindings : function(){
      this.view.flxFeedback.onClick=this.onFeedbackClick;
    },
    
    onFeedbackClick: function(){
      try{
        var currFrm = kony.application.getCurrentForm();
        if(!Utils.isNullorEmpty(currFrm)){
          currFrm.FeedbackPopup.setVisibility(true);
        }
      }catch(e){
        kony.print("Exception in  display feedback :"+JSON.stringify(e));
      }
    }
  };
});