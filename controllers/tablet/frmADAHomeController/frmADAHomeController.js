define({ 

 //Type your controller code here 
  onNavigate : function(){
    this.applyBindings();
  },

  applyBindings : function(){
    this.view.preShow = this.onPreshow;
    this.view.onDeviceBack = function(){};
    this.view.flxGenericError.isVisible = false;
    this.view.flxGenericError.onClick= () => {};
    this.view.FeedbackPopup.onTouchEnd=function(){};
  },
    onPreshow : function(){
    try{
      this.view.FeedbackPopup.setVisibility(false);
      if(isFeedbackEnable === true){
        this.view.Feedback.setVisibility(true) ;
      }
      else{
        this.view.Feedback.setVisibility(false) ;
      }
    }catch(exception){}
  },

 });