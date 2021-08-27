define(function() {
  var Utils = require("UtilsCL");
  var deviceUtil = require("DeviceUtil");
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.onClick = function(){};
      this.applyBindings();
    },

    applyBindings : function(){
      this.view.preShow = this.onPreShow;
    },

   onPreShow : function(){
      if(deviceUtil.isTablet()){
        this.view.flxSegDefinition.top="1%";
        this.view.flxSegDefinition.height="99%";
      }else if(deviceUtil.isMobile()){
        this.view.flxSegDefinition.top="0%";
        this.view.flxSegDefinition.height="100%";
      }
    },
    
    setSegData : function(){
      try{
        var masterDataArray = [];
        var dataDesc =[];
        var dataArray = JSON.parse(gblAppConfig.UpgradeInfo[AppConstants.DEFINITIONS]);
        for(const key in dataArray){
          if(dataArray.hasOwnProperty(key)){
            var segmentData = {
              "lblDefinitionHeader" : key,
              "RichDefnitionDesc" : dataArray[key]
            };
            masterDataArray.push(segmentData);
          }
        }
        this.view.segDefinitions.setData(masterDataArray);
      }catch(exception){
        kony.print("Exception in setSegData :: " + exception);
      }
    },
  };
});