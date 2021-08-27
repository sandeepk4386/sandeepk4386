define({ 
  onNavigate : function(){
    this.applyBindings();
  },

  applyBindings : function(){
    this.view.preShow = this.onPreshow;
    this.view.onDeviceBack = function(){};
    this.view.postShow = this.onPostShow;
  },

  onPreshow : function(){
    try{
      this.view.TopBottomNavigation.makeTabActive(5); 
      this.view.TopBottomNavigation.hidebackButton(true);
      this.view.flxGenericError.onClick = function(){};
      this.view.FeedbackPopup.onTouchEnd=function(){};
      this.view.flxGenericError.setVisibility(false);
      this.view.FeedbackPopup.setVisibility(false);
      this.view.loadingIndicator.setVisibility(false);
    }catch(exception){
      kony.print("Exception in user profile preshow "+JSON.stringify(exception));
    }
  },
  
  onPostShow : function(){
    gblIsForeground = true;
  }
});