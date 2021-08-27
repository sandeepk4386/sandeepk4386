define(function() {
  var Utils = require("UtilsCL");
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.applyBindings();
    },
    
    applyBindings : function(){
      this.view.postShow= this.onPostShow;
      if(isShareIconEnable === "true"){
        this.view.lblBusinnesUnitShareIcon.setVisibility(true);
        this.view.lblCustomerShareIcon.setVisibility(true);
      }else{
        this.view.lblBusinnesUnitShareIcon.setVisibility(false);
        this.view.lblCustomerShareIcon.setVisibility(false);
      }
    },

    onPostShow : function(){
      try{
        var currFrm = kony.application.getCurrentForm();
        if(currFrm.id === "frmDOSHome"){
          this.view.lblBusinnesUnitShareIcon.onTouchEnd = Utils.shareFFI.bind(this,dosRef.view.DOSHeader,this.view.flxBusinessUnitMain);
          this.view.lblCustomerShareIcon.onTouchEnd = Utils.shareFFI.bind(this,dosRef.view.DOSHeader,this.view.flxCustomerMain);
        }
        else if(currFrm.id === "frmDosChart"){
          this.view.lblBusinnesUnitShareIcon.onTouchEnd = Utils.shareFFI.bind(this,dosMainRef.view.DOSHeader,this.view.flxBusinessUnitMain);
          this.view.lblCustomerShareIcon.onTouchEnd = Utils.shareFFI.bind(this,dosMainRef.view.DOSHeader,this.view.flxCustomerMain);
        }
      }
      catch(e){
        kony.print("Exception in DOsBusinessCustomerPostShow:: "+e); 
      }
    },

    setBusinessData : function(business , k , commonData){
      try{
        this.view.lblBusinessChildHead.text = commonData.product_metric;
        if(commonData.product_metric === kony.i18n.getLocalizedString("i18.clorox.mtdShipments")){
          this.view.lblBusinessChildHead.skin = "sknLblEEB64FSSPSB16px100";
          this.view.lblCustomersChildHead.skin = "sknLblEEB64FSSPSB16px100";
        }else if(commonData.product_metric === kony.i18n.getLocalizedString("i18.clorox.NDF")){
          this.view.lblBusinessChildHead.skin = "sknLblC597FF105RLight";
          this.view.lblCustomersChildHead.skin = "sknLblC597FF105RLight";
        }else{
          this.view.lblBusinessChildHead.skin = "sknLbla7dcecRobotoMed16px";
          this.view.lblCustomersChildHead.skin = "sknLbla7dcecRobotoMed16px";
        }
        this.view.flxBusinesslabels.setVisibility(true);
        this.view.flxBusinessSegment.setVisibility(true);
        if(business && business.length>=1){
          var dataToPush = [],dataLeft,dataRight,dataRight2;
          var setTemplateData = [];
          setTemplateData.push(business);
          setTemplateData[0] = [...business];
          for(var i=0; i<business.length-2; i+=3){
            dataLeft = this.getSegData(1,business[i]);
            dataRight = this.getSegData(2,business[i+1]);
            dataRight2 = this.getSegData(3,business[i+2]);
            let data = Object.assign(dataLeft, dataRight, dataRight2);
            dataToPush.push(data);
            setTemplateData[0].splice(0, 3);
          }
          if(setTemplateData[0]){
            if(setTemplateData[0].length&2){
              dataLeft = this.getSegData(1,setTemplateData[0][setTemplateData[0].length-2]);
              dataRight = this.getSegData(2,setTemplateData[0][setTemplateData[0].length-1]);
              dataRight2 = {
                flxLeft3 : {isVisible:false}
              };
              let data = Object.assign(dataLeft, dataRight, dataRight2);
              dataToPush.push(data);
              setTemplateData[0] = [...business];
              setTemplateData.splice(0, 2);
            }
          }
          if(setTemplateData[0]){
            if(setTemplateData[0].length&1){
              dataLeft = this.getSegData(1,setTemplateData[0][setTemplateData[0].length-1]);
              dataRight = {
                flxLeft2 : {isVisible:false}
              };
              dataRight2 = {
                flxLeft3 : {isVisible:false}
              };
              let data = Object.assign(dataLeft, dataRight, dataRight2);
              dataToPush.push(data);
            }
          }
          this.view.segBusiness.removeAll();
          this.view.segBusiness.addAll(dataToPush);
          if(k===0){
            this.view.flxBusinesslabels.setVisibility(true);
            this.view.segBusiness.setVisibility(true);
          }else{
            this.view.flxBusinesslabels.setVisibility(true);
            this.view.segBusiness.setVisibility(true);
          }
        }else{
          this.view.flxBusinesslabels.setVisibility(false);
          this.view.segBusiness.setVisibility(false);
        }
      }catch(e){
        kony.print("Exception in setBusinessData:: "+e);
      }
    },

    setBusinessDataOff:function(){
      this.view.flxBusinesslabels.setVisibility(false);
      this.view.segBusiness.setVisibility(false);
    },

    getSegData : function(index, productObj){
      try{
        var data = {};
        data["lblName"+index] = {text:productObj.name};
        if(dosMainRef.viewId === "frmDosChart"){
          data["lblCount" + index] = {text: (!Utils.isNullorEmpty(productObj.metric_value) && productObj.metric_value !== "None") ? parseInt(productObj.metric_value).toFixed(0) : "" , skin : "sknLblFFFFFSSPR16px100"};       
        }else{
          data["lblCount" + index] = {text: (!Utils.isNullorEmpty(productObj.metric_value) && productObj.metric_value !== "None") ? parseInt(productObj.metric_value).toFixed(0) : "" , skin : !Utils.isNullorEmpty(productObj.metric_value) ? (parseInt(productObj.metric_value).toFixed(0) < 100 ? "sknLblE34547SSPR16px100" : "sknLbl0AC7C2SSPR16px100") : "sknLblE34547SSPR16px100"};       
        }        
        data["flxLeft" + index] = {onClick : dosMainRef.businessOnClick.bind(this,productObj.name,productObj.id, index)};
        return data;
      }catch(e){
        kony.print("Exception in getSegData:: "+e);
      }
    },

    setCustomersData : function(customers , commonData){
      try{
        this.view.lblCustomersChildHead.text = commonData.customer_metric;
        var k = 0;
        if((customers) && customers.length !== 0){
          this.view.flxCustomersLabels.setVisibility(true);
          this.view.flxCustomersSegment.setVisibility(true);
          var setTemplateData = [];
          var dataToPush = [],dataLeft,dataRight,dataRight2;
          setTemplateData.push(customers);
          setTemplateData[0] = [...customers];
          for(var i=0; i<customers.length-2; i+=3){
            dataLeft = this.getCustomerSegData(1,customers[i]);
            dataRight = this.getCustomerSegData(2,customers[i+1]);
            dataRight2 = this.getCustomerSegData(3,customers[i+2]);
            let data = Object.assign(dataLeft, dataRight, dataRight2);
            dataToPush.push(data);
            setTemplateData[0].splice(0, 3);
          }
          if(setTemplateData[0]){
            if(setTemplateData[0].length&2){
              dataLeft = this.getCustomerSegData(1,setTemplateData[0][setTemplateData[0].length-2]);
              dataRight = this.getCustomerSegData(2,setTemplateData[0][setTemplateData[0].length-1]);
              dataRight2 = {
                flxLeft3 : {isVisible:false}
              };
              let data = Object.assign(dataLeft, dataRight, dataRight2);
              dataToPush.push(data);
              setTemplateData[0] = [...customers];
              setTemplateData.splice(0, 2);
            }
          }
          if(setTemplateData[0]){
            if(setTemplateData[0].length&1){
              dataLeft = this.getCustomerSegData(1,setTemplateData[0][setTemplateData[0].length-1]);
              dataRight = {
                flxLeft2 : {isVisible:false}
              };
              dataRight2 = {
                flxLeft3 : {isVisible:false}
              };
              let data = Object.assign(dataLeft, dataRight, dataRight2);
              dataToPush.push(data);
            }
          }
          this.view.segCustomers.removeAll();
          this.view.segCustomers.addAll(dataToPush);
          this.view.segCustomers.setVisibility(true);
        }else{
          this.view.flxCustomersLabels.setVisibility(false);
          this.view.flxCustomersSegment.setVisibility(false);
        }
      }catch(e){
        kony.print("Exception in setCustomersData:: "+e);
      }
    },

    setCustomersDataOff : function(){
      this.view.segCustomers.removeAll();
      this.view.flxCustomersLabels.setVisibility(false);
      this.view.segCustomers.setVisibility(false);
    },

    getCustomerSegData : function(index, productObj){
      try{
        var data = {};
        data["lblName"+index] = {text:productObj.name ? productObj.name : ""};
        if(dosMainRef.viewId === "frmDosChart"){
          data["lblCount" + index] = {text: (!Utils.isNullorEmpty(productObj.metric_value) && productObj.metric_value !== "None") ? parseInt(productObj.metric_value).toFixed(0) : "" , skin : "sknLblFFFFFSSPR16px100"};
        }else{
          data["lblCount" + index] = {text: (!Utils.isNullorEmpty(productObj.metric_value) && productObj.metric_value !== "None") ? parseInt(productObj.metric_value).toFixed(0) : "" , skin : !Utils.isNullorEmpty(productObj.metric_value) ? (parseInt(productObj.metric_value).toFixed(0) < 100 ? "sknLblE34547SSPR16px100" : "sknLbl0AC7C2SSPR16px100") : "sknLblE34547SSPR16px100"};
        }        
        data["flxLeft" + index] = {onClick : dosMainRef.customerOnClickData.bind(this,productObj.name, productObj.id,index)};
        return data;
      }catch(e){
        kony.print("Exception in getCustomerSegData:: "+e);
      }
    },

  };
});