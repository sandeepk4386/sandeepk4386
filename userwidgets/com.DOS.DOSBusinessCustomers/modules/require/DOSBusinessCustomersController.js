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
        //Setting yellow color for MTD Shipments in Graph form
        if(commonData.product_metric === kony.i18n.getLocalizedString("i18.clorox.mtdShipments")){
          this.view.lblBusinessChildHead.skin = "sknLblEEB64FSSPSB13px105";
          this.view.lblCustomersChildHead.skin = "sknLblEEB64FSSPSB13px105";
        }else if(commonData.product_metric === kony.i18n.getLocalizedString("i18.clorox.NDF")){
          this.view.lblBusinessChildHead.skin = "sknLblC597FF105RLight";
          this.view.lblCustomersChildHead.skin = "sknLblC597FF105RLight";
        }else{
          this.view.lblBusinessChildHead.skin = "sknLblA7DCECSSPSB13px105";
          this.view.lblCustomersChildHead.skin = "sknLblA7DCECSSPSB13px105";
        }
        this.view.flxBusinesslabels.setVisibility(true);
        this.view.flxBusinessSegment.setVisibility(true);
        var currFrm = kony.application.getCurrentForm().id;
        if(business && business.length>=1){
          if(gblIsFirstLevel){
            var dataToPush = [],dataLeft,dataRight;
            for(var i=0; i<business.length-1; i+=2){
              dataLeft = this.getSegData(1,business[i]);
              dataRight = this.getSegData(2,business[i+1]);
              let data = Object.assign(dataLeft, dataRight);
              dataToPush.push(data);
            }
            if(business.length&1){
              dataLeft = this.getSegData(1,business[business.length-1]);
              dataRight = {
                flxLeft2 : {isVisible:false}
              };
              let data = Object.assign(dataLeft, dataRight);
              dataToPush.push(data);
            }
            this.view.segBusiness.removeAll();
            this.view.segBusiness.addAll(dataToPush);
            this.view.flxBusinesslabels.setVisibility(true);
            this.view.segBusiness.setVisibility(true);
            this.view.segBusinessChild.setVisibility(false);
          }else{
            if(k===0){
              var segData = [];
              for(var s=0 ; s<business.length ; s++){
                var metricVal = business[s].metric_value;
                var metricFinalVal = parseInt(metricVal).toFixed(0);
                if(currFrm == "frmDosChart"){
                  var temp = {
                    "lblName" : business[s].name,
                    "lblCount" : {text : (!Utils.isNullorEmpty(metricVal) && metricVal!=="None") ? parseInt(metricVal).toLocaleString('en-US') : "" , skin : "sknLblFFFFFSSPR16px100"},
                    "flxContainer" : {onClick : dosMainRef.businessChildOnClick.bind(this,business[s].name,business[s].id, s)}
                  };
                  segData.push(temp);
                }else{
                  var temp = {
                    "lblName" : business[s].name,
                    "lblCount" : {text : (!Utils.isNullorEmpty(metricVal) && metricVal!=="None") ? metricFinalVal : "" , skin : (!Utils.isNullorEmpty(metricVal) && metricVal !== "None") ? ((metricFinalVal < 100) ? "sknLblE34547SSPR16px100" : "sknLbl0AC7C2SSPR16px100") : ""},
                    "flxContainer" : {onClick : dosMainRef.businessChildOnClick.bind(this,business[s].name,business[s].id, s)}
                  };
                  segData.push(temp);
                }
              }
              this.view.segBusinessChild.removeAll();
              this.view.segBusinessChild.setData(segData);
              this.view.flxBusinesslabels.setVisibility(true);
              this.view.segBusiness.setVisibility(false);
              this.view.segBusinessChild.setVisibility(true);
            }else{
              var segData1 = [];
              for(var k=0 ; k<business.length ; k++){
                var metricVal1 = business[k].metric_value;
                var metricFinalVal = parseInt(metricVal1).toFixed(0);
                var businessName = business[k].name;
                if(currFrm == "frmDosChart"){
                  var temp = {
                    "lblName" : businessName,
                    "lblCount" : {text : (!Utils.isNullorEmpty(metricVal1) && metricVal1!=="None") ? parseInt(metricVal1).toLocaleString('en-US') : "" ,
                                  skin : "sknLblFFFFFSSPR16px100"},
                    "flxContainer" : {onClick : dosMainRef.businessChildOnClick.bind(this,businessName,business[k].id, k)}
                  };
                  segData1.push(temp);
                }else{
                  var temp = {
                    "lblName" : businessName,
                    "lblCount" : {text : (!Utils.isNullorEmpty(metricVal1) && metricVal1!=="None") ? metricFinalVal : "" ,
                                  skin : (!Utils.isNullorEmpty(metricVal1) && metricVal1 !== "None") ? ((parseInt(metricVal1).toFixed(0) < 100) ? "sknLblE34547SSPR16px100" : "sknLbl0AC7C2SSPR16px100") : ""},
                    "flxContainer" : {onClick : dosMainRef.businessChildOnClick.bind(this,businessName,business[k].id, k)}
                  };
                  segData1.push(temp);
                }
              }
              this.view.segBusinessChild.removeAll();
              this.view.segBusinessChild.setData(segData1);
              this.view.flxBusinesslabels.setVisibility(true);
              this.view.segBusiness.setVisibility(false);
              this.view.segBusinessChild.setVisibility(true);
            }
          }
        }else{
          this.view.flxBusinesslabels.setVisibility(false);
          this.view.segBusiness.setVisibility(false);
          this.view.segBusinessChild.setVisibility(false);
        }
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in setBusinessData:: "+e);
      }
    },

    setBusinessDataOff:function(){
      this.view.segBusinessChild.removeAll();
      this.view.flxBusinesslabels.setVisibility(false);
      this.view.segBusiness.setVisibility(false);
      this.view.segBusinessChild.setVisibility(false);
    },

    getSegData : function(index, productObj){
      try{
        var data = {};
        var currFrm = kony.application.getCurrentForm().id;
        var prodName = productObj.name;
        var metricVal = productObj.metric_value;
        var metricFinalVal = parseInt(metricVal).toFixed(0);
        var projId = productObj.id;
        if(currFrm == "frmDosChart"){
          data["lblName"+index] = {text:prodName};
          data["lblCount" + index] = {text: (!Utils.isNullorEmpty(metricVal) && metricVal !== "None") ? parseInt(metricVal).toLocaleString('en-US') : "" , skin : "sknLblFFFFFSSPR16px100"};       
          data["flxLeft" + index] = {onClick : dosMainRef.businessOnClick.bind(this,prodName,projId, index)};
        }else{
          data["lblName"+index] = {text:prodName};
          data["lblCount" + index] = {text: (!Utils.isNullorEmpty(metricVal) && metricVal !== "None") ? metricFinalVal.toLocaleString('en-US') : "" ,
                                      skin : !Utils.isNullorEmpty(metricVal) ? (metricFinalVal < 100 ? "sknLblE34547SSPR16px100" : "sknLbl0AC7C2SSPR16px100") : "sknLblE34547SSPR16px100"};       
          data["flxLeft" + index] = {onClick : dosMainRef.businessOnClick.bind(this,prodName,projId, index)};
        }
        return data;
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in getSegData:: "+e);
      }
    },

    setCustomersData : function(customers , commonData){
      try{
        this.view.lblCustomersChildHead.text = commonData.customer_metric;
        var k = 0;
        if((customers) && customers.length !== 0){
          this.view.segCustomers.setVisibility(true);
          var dataToPush = [],dataLeft,dataRight;
          for(var i=0; i<customers.length-1; i+=2){
            dataLeft = this.getCustomerSegData(1,customers[i]);
            dataRight = this.getCustomerSegData(2,customers[i+1]);
            let data = Object.assign(dataLeft, dataRight);
            dataToPush.push(data);
          }
          if(customers.length&1){
            dataLeft = this.getCustomerSegData(1,customers[customers.length-1]);
            dataRight = {
              flxLeft2 : {isVisible:false}
            };
            let data = Object.assign(dataLeft, dataRight);
            dataToPush.push(data);
          }
          this.view.flxCustomersLabels.setVisibility(true);
          this.view.segCustomers.removeAll();
          this.view.segCustomers.addAll(dataToPush);
          this.view.segCustomers.setVisibility(true);
        }else{
          this.view.flxCustomersLabels.setVisibility(false);
          this.view.segCustomers.setVisibility(false);
        }
      }catch(e){
        Utils.hideLoadingIndicator();
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
        var currFrm = kony.application.getCurrentForm().id;
        var prodName = productObj.name;
        var metricVal = productObj.metric_value;
        var projId = productObj.id;
        if(currFrm === "frmDosChart"){
          data["lblName"+index] = {text:productObj.name ? productObj.name : ""};
          data["lblCount" + index] = {text: (!Utils.isNullorEmpty(metricVal) && metricVal !== "None") ? parseInt(metricVal).toLocaleString('en-US') : "" , 
                                      skin : "sknLblFFFFFSSPR16px100"};
          data["flxLeft" + index] = {onClick : dosMainRef.customerOnClickData.bind(this,productObj.name, productObj.id,index)};
        }else{
          data["lblName"+index] = {text:productObj.name ? productObj.name : ""};
          data["lblCount" + index] = {text: (!Utils.isNullorEmpty(metricVal) && metricVal !== "None") ? parseInt(metricVal).toFixed(0).toLocaleString('en-US') : "" ,
                                      skin : !Utils.isNullorEmpty(metricVal) ? (parseInt(metricVal).toFixed(0) < 100 ? "sknLblE34547SSPR16px100" : "sknLbl0AC7C2SSPR16px100") : "sknLblE34547SSPR16px100"};
          data["flxLeft" + index] = {onClick : dosMainRef.customerOnClickData.bind(this,productObj.name, productObj.id,index)};
        }
        return data;
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in getCustomerSegData:: "+e);
      }
    },
  };
});