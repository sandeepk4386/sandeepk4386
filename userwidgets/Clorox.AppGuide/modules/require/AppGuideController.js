define(function() {
  var deviceUtil = require("DeviceUtil");
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.applyBindings();
    },

    applyBindings : function(){
      this.view.preShow = this.onPreShow;
      this.view.flxNavGuideAlert.setVisibility(false);
      this.view.lblCross.onTouchEnd=this.onClickOfCross;
      this.view.lblSelect.onTouchStart=this.selectLabel;
      this.view.segImages.pageSkin="sknFlxAppGuideD7E2EC";
    },

    onPreShow : function(){
      this.alignment();
      this.setSegDataImages();
    },

    setSegDataImages : function(){
      try{
        var masterDataArray = [];
        var Images = ["scrn0.png","scrn1.png","scrn2.png","scrn3.png","scrn4.png","scrn5.png","scrn6.png","scrn7.png","scrn8.png","scrn9.png","scrn10.png","scrn11.png","scrn12.png"];

        for(var i=0 ; i<Images.length ; i++){
          var segmentData = {
            "ImageGuide" : Images[i]
          };
          masterDataArray.push(segmentData);
        }
        this.view.segImages.removeAll();
        this.view.segImages.setData(masterDataArray);
      }
      catch(e)
      {
        kony.print("error in setSegData"+e);
      }
    },
    alignment : function(){
      try{
        if(deviceUtil.isTablet()){
          this.view.flxNavAlertPopup.width="35%";
          this.view.lblCross.right="56dp";
          this.view.segImages.height="100%";
          this.view.flxImageGallery.height="86.5%";
        }else if(deviceUtil.isMobile()){
          this.view.flxNavAlertPopup.width="75%";
          this.view.lblCross.right="24dp";
          this.view.segImages.height="95%";
          this.view.flxImageGallery.height="90%";
        }
        if(deviceUtil.isAndroidPhone()){
          this.view.lblContent.top="1dp";
        }
        else if(deviceUtil.isiPhone() || deviceUtil.isiPad() ){
          this.view.lblContent.top="4dp";
        }
      }catch(e){
        kony.print("Exception in alignment"+e);
      }
    },
    selectLabel : function(){
      try{
        if(this.view.lblSelect.text==="p"){
          this.view.lblSelect.text="q";
        }
        else{
          this.view.lblSelect.text="p";
        }
      }catch(e){
        kony.print("Exception in selectLabel"+e);
      }
    },

    onClickOfCross : function(){
      try{
        this.view.flxNavGuideAlert.setVisibility(true);
        this.view.lblSelect.text="p";
        this.view.flxNavGuideAlert.onTouchStart = function(){};
        this.view.btnYes.onClick=this.dismissGuide;
        this.view.btnNo.onClick=this.visibleGuide;
      }catch(e){
        kony.print("Exception in onClickOfCross"+e);
      }
    },

    dismissGuide : function(){
      try{
        if(this.view.lblSelect.text==="q"){
          kony.store.setItem( "CheckedToggle",false);
        }
        else{
          kony.store.setItem( "CheckedToggle",true);
        }
        DOSHomeReference.hideAppGuide();
        DOSHomeReference.onTopBottomVisibility();
      }catch(e){
        kony.print("Exception in dismissGuide"+e);
      }
    },

    visibleGuide : function(){
      try{
        this.view.flxNavGuideAlert.setVisibility(false);
      }catch(e){
        kony.print("Exception in visibleGuide"+e);
      }
    },

  };
});
