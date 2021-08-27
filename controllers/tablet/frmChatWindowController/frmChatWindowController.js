define({ 

 onNavigate : function(){
    this.applyBindings();
  },
  
  applyBindings : function(){
    this.view.preShow = this.onPreshow;
    this.view.TopBottomNavigation.lblHeader = true;
    this.view.onDeviceBack = function(){};
    this.view.flxGenericError.isVisible = false;
    this.view.flxGenericError.onClick= () => {};
  },

  onPreshow : function(){
    try{
      this.view.TopBottomNavigation.makeTabActive(4); 
    }catch(exception){
      kony.print("Exception in user profile preshow "+JSON.stringify(exception));
    }
  },

 });