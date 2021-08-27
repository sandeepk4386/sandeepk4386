define({ 

  onNavigate : function(){
    this.applyBindings();
  },

  applyBindings : function(){
    this.view.onDeviceBack = function(){};
    this.view.flxGenericError.isVisible = false;
    this.view.flxGenericError.onClick= () => {};
    this.view.FeedbackPopup.onTouchEnd=function(){};
    this.view.preShow = this.preShow;
  },
  
  preShow : function(){
    this.view.FeedbackPopup.setVisibility(false);
     if(isFeedbackEnable){
        this.view.Feedback.setVisibility(true) ;
      }
      else{
        this.view.Feedback.setVisibility(false) ;
      }
  }

 });