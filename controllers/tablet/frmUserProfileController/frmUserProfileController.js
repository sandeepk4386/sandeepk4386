define({ 

  //Type your controller code here 
  onNavigate : function(){
    this.applyBindings();
  },

  applyBindings : function(){
    this.view.preShow = this.onPreshow;
    this.view.postShow = this.onPostShow;
    this.view.onDeviceBack = function(){};
  },

  onPreshow : function(){
    try{
      this.view.TopBottomNavigation.makeTabActive(5); 
      this.view.TopBottomNavigation.hidebackButton(true);
      this.view.flxGenericError.onClick = function(){};
      this.view.FeedbackPopup.setVisibility(false);
      this.view.FeedbackPopup.onTouchEnd=function(){};
      this.view.loadingIndicator.setVisibility(false);
      this.view.flxGenericError.setVisibility(false);
    }catch(exception){}
   },
  
  onPostShow : function(){
    gblIsForeground = true;
  }
});