define({ 

  onNavigate : function(){
    try{
      this.applyBindings();
    }catch(e){
      kony.print("Exception in preshow"+JSON.stringify(e));
    }
  },

  applyBindings : function(){
    try{
      this.view.onDeviceBack = function(){};
      this.view.flxGenericError.isVisible = false;
      this.view.flxGenericError.onClick= () => {};
      this.view.FeedbackPopup.onTouchEnd=function(){};
      this.view.preShow = this.preShow;
      this.view.postShow = this.onPostShow;
    }catch(e){
      kony.print("Exception in applyBindings"+JSON.stringify(e));
    }
  },
  
  preShow : function(){
    try{
    this.view.FeedbackPopup.setVisibility(false);
     if(isFeedbackEnable){
        this.view.Feedback.setVisibility(true) ;
      }
      else{
        this.view.Feedback.setVisibility(false) ;
      }
    }catch(e){
      kony.print("Exception in preShow "+JSON.stringify(e));
    }
  },
  
  onPostShow : function(){
    gblIsForeground = true;
  }

});