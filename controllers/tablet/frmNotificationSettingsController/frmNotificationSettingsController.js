var Utils = require("UtilsCL");
define({ 

  onNavigate : function(){
    try{
      this.applyBindings();
    }catch(e){
      kony.print("Exception in preshow"+e);
    }
  },

  applyBindings : function(){
    try{
      this.view.onDeviceBack = function(){};
      this.view.flxGenericError.isVisible = false;
      this.view.flxGenericError.onClick= () => {};
      this.view.FeedbackPopup.onTouchEnd=function(){};
      this.view.preShow = this.onPreShow;
      this.view.postShow = this.onPostShow;
      this.view.onOrientationChange = Utils.feedbackOrientationChange;
    }catch(e){
      kony.print("Exception in applyBindings"+e);
    }
  },
  
  onPreShow : function(){
    Utils.feedbackOrientationChange();
    this.view.FeedbackPopup.setVisibility(false);
     if(isFeedbackEnable){
        this.view.Feedback.setVisibility(true) ;
      }
      else{
        this.view.Feedback.setVisibility(false) ;
      }
  },
  
  onPostShow : function(){
    gblIsForeground = true;
  }

});
