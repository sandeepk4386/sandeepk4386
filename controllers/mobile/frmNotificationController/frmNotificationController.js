define({ 

  //Type your controller code here 
  onNavigate : function(){
    this.applyBindings();
  },

  applyBindings : function(){
    this.view.preShow = this.onPreshow;

  },

  onPreshow : function(){
    try{
      this.view.TopBottomNavigation.makeTabActive(2); 
    }catch(exception){}
  }
});