define(function() {
  var Utils = require("UtilsCL");
  var deviceUtil = require("DeviceUtil");
  var AppConstants = require("AppConstants");
  var hdrName = null;  
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      dosRef=this;
      this.applyBindings();
    },

    applyBindings : function(){
      this.view.postShow=this.onPostShow;
      if(isShareIconEnable === "true"){
        this.view.lblOrdersShareIcon.setVisibility(true);
      }else{
        this.view.lblOrdersShareIcon.setVisibility(false);
      }
    },

    onPostShow : function(){
      try{
        this.view.lblAdditionalMetricShareIcon.onTouchEnd = Utils.shareFFI.bind(this,this.view.DOSHeader,this.view.flxAdditionalMetricUnit);
        this.view.lblOrdersShareIcon.onTouchEnd = Utils.shareFFI.bind(this,this.view.DOSHeader,this.view.flxOverViewContainer);
        this.view.segOverview.widgetDataMap = {
          "lblGroupName"  : "lblGroupName" ,
          "lblGroupValue" : "lblGroupValue" ,
          "flxGroupMain" : "flxGroupMain" , 
          "lbIndexValue" : "lbIndexValue" , 
          "lblIndexCount" : "lblIndexCount" ,
          "lblChangeValue" : "lblChangeValue" ,
          "lblChangeCount" : "lblChangeCount" ,
          "sortOrder" : "sortOrder"
        };
      }
      catch(e){
        kony.print("Exception in OnPostShowDosController:: "+e);
      }
    },

    setFormData : function(doadosData){
      try{
        dosMainRef = this;
        gblIsSecondLevel = false;
        this.view.lblAdditionalMetrics.onTouchEnd = this.onClickAdditionalMetrics;
        this.view.lblAdditionalMetricsDown.onTouchEnd = this.onClickAdditionalMetrics;
        this.view.flxMTDOrdersMain.onClick = this.goToDosChart.bind(this,kony.i18n.getLocalizedString("i18.clorox.mtdOrders"));
        this.view.flxDailyOrders.onClick = this.goToDosChart.bind(this,kony.i18n.getLocalizedString("i18.clorox.avgDaily"));
        this.view.flxMTDShipmentsMain.onClick = this.goToDosChart.bind(this,kony.i18n.getLocalizedString("i18.clorox.mtdShipments"));        
        var prevFrm = kony.application.getPreviousForm();
        if((!Utils.isNullorEmpty(prevFrm) && prevFrm.id === "frmLogin") || isDosChartResetClick ){
          dosDataBackHead = [];
          dosDataBackHead.push(gblTotalClorox);
        }
        if(isDosChartResetClick || gblIsRefresh){
          gblDosDataArray = [];
          gblIsRefresh = false;
          isDosChartResetClick = false;
        }        
        if(!Utils.isNullorEmpty(doadosData)){
          gblDosDataArray.push(doadosData); 
        }              
        if(!Utils.isNullorEmpty(gblDosDataArray) && !Utils.isEmptyArray(gblDosDataArray)){
          this.setSegmentsData();
        }
        this.expandCollapseAnim();          
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in setFormData in DOS :: "+e);
      }
    },

    onClickAdditionalMetrics : function(){
      try{
        if(gblAdditionalMetricsDisplay){
          gblAdditionalMetricsDisplay = false;
        }else{
          gblAdditionalMetricsDisplay = true;
        }
        this.expandCollapseAnim();    
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in onClickAdditionalMetrics:: "+e);
      }
    },

    setSegmentsData : function(){
      try{
        var k=0,data;
        var productCount = 0,CustomerCount = 0;
        if(!Utils.isNullorEmpty(gblDosDataArray) && gblDosDataArray.length>=1){
          k = gblDosDataArray.length-1;
          data = gblDosDataArray[k];
        }
        if(!Utils.isNullorEmpty(data) ){
          if( !Utils.isNullorEmpty(data.Common))
            this.view.DOSHeader.setHeaderData(data.Common[0] , dosDataBackHead[k]);
          var headerText = this.view.DOSHeader.getHeaderText();
          if(!Utils.isNullorEmpty(headerText)){
            var headerArray = headerText.split(" • ");
            if(!Utils.isNullorEmpty(gblProductsList) || !Utils.isNullorEmpty(gblProductsList) 
               || !Utils.isNullorEmpty(gblCustomerList) || !Utils.isNullorEmpty(gblCustomerList)){
              for(var g = 0 ; g < gblProductsList.length ; g++){
                if(headerArray.includes(gblProductsList[g])){
                  productCount++;
                }
              }
              for(var h = 0 ; h < gblCustomerList.length ; h++){
                if(headerArray.includes(gblCustomerList[h])){
                  CustomerCount++;
                }
              }
            }
          }
          if(productCount > 0 && CustomerCount > 0){
            gblIsFirstLevel = false;
          }else if(productCount > 0 && CustomerCount < 0){
            gblIsFirstLevel = false;
          }else if(productCount > 0 && CustomerCount == 0){
            gblIsFirstLevel = false;
          }else if(productCount == 0 && CustomerCount == 0){
            gblIsFirstLevel = true;
          }else if(productCount == 0 && CustomerCount > 0){
            gblIsFirstLevel = true;
          }
          if(!Utils.isNullorEmpty(gblDosDataArray) && gblDosDataArray.length>1){
            DOSHomeReference.view.TopBottomNavigation.flxReset = true;
            DOSHomeReference.view.TopBottomNavigation.lblBack = true;
          }
          else{
            DOSHomeReference.view.TopBottomNavigation.flxReset = false;
            DOSHomeReference.view.TopBottomNavigation.lblBack = false;
          }
          if(!Utils.isNullorEmpty(data)){
            gbldosData_Arr = gblDosDataArray;
            if(!Utils.isNullorEmpty(data.Products)){
              for(var m = 0 ; m < data.Products.length ; m++){
                gblProductsList.push(data.Products[m].name);
              }
              this.view.DOSBusinessCustomers.setBusinessData(data.Products , k , data.Common[0]);
            }else{
              this.view.DOSBusinessCustomers.setBusinessDataOff();
            }
            if(!Utils.isNullorEmpty(data.Customers)){
              for(var n = 0 ; n < data.Customers.length ; n++){
                gblCustomerList.push(data.Customers[n].name);
              }
              this.view.DOSBusinessCustomers.setCustomersData(data.Customers , data.Common[0]);
            }else{
              this.view.DOSBusinessCustomers.setCustomersDataOff();
            }
            if(!Utils.isNullorEmpty(data.metric))
              this.setOverViewData(data.metric, data.Common[0]);
          }

          if (deviceUtil.isAndroid()){
            this.view.flxOrdersHead.setFocus(true);
          }
          else if(deviceUtil.isiPhone()){
            this.view.DOSHeader.setFocus(true);
          }
        }
        Utils.hideLoadingIndicator();
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in setSegmentsData:: "+e);
      }
    },

    businessOnClick : function(name,query,rowIndex){
      try{
        Utils.showLoadingIndicator();
        var lblStr = (this.view.DOSHeader.lblHeadName).lastIndexOf("•");
        hdrName = dosDataBackHead.length > 1 ? this.view.DOSHeader.lblHeadName + " • " + name : name;
        var currFrmName = kony.application.getCurrentForm().id;
        if(currFrmName === "frmDOSHome"){
          gblIsSecondLevel = true;
        }
        gblIsFirstLevel = false;
        if(myBusinessMap.has(hdrName)){
          dosDataBackHead.push(hdrName);
          gblDosDataArray.push(myBusinessMap.get(hdrName));
          this.setSegmentsData();
        }else{
          if(!Utils.isNullorEmpty(query)){
            GlobalServices.getOverview({"query":query}, DOS.serviceName, DOS.getOverview, null, this.getOverviewDataSuccess, this.getOverviewDataFailure);
          }
        }
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in businessOnClick:: "+e);
      }
    },

    //getOverview service success call back
    getOverviewDataSuccess : function(response){
      try{
        Utils.hideLoadingIndicator();
        if(!Utils.isNullorEmpty(response) && !Utils.isNullorEmpty(response.records[0]) && !Utils.isNullorEmpty(response.records[0].Common)){
          dosDataBackHead.push(hdrName);
          myBusinessMap.set(hdrName , response.records[0]);
          gblDosDataArray.push(response.records[0]);  
          this.setSegmentsData();
        }else{
          this.getOverviewDataFailure();
        }
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in getOverviewDataSuccess:: "+e);
      }
    },

    //getOverview service Failure call back
    getOverviewDataFailure : function(){
      Utils.hideLoadingIndicator();
      var message = kony.i18n.getLocalizedString("i18n.clorox.DosDataError")+ErrorCodes.DOS_DATA_FAILURE;
      var currForm = kony.application.getCurrentForm();
      if(!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)){
        currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"),
                                          message,kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
        currForm.flxGenericError.setVisibility(true);
      }
    },

    fetchGraphDataSuccessCallBack : function(response){  
      try{
        if(!Utils.isNullorEmpty(response)){
          var graphData = [];
          graphData.push(APIOverviewSuccessResponse);
          graphData.push(response.records[0]);
          var nav = new kony.mvc.Navigation("frmDosChart");
          nav.navigate(graphData);
        }
      }catch(e){
        kony.print("Exception in fetchGraphDataSuccessCallBack:: "+e);
      }
    },

    businessChildOnClick :  function(name,query,rowIndex){
      try{
        Utils.showLoadingIndicator();
        var lblStr = (this.view.DOSHeader.lblHeadName).lastIndexOf("•");
        hdrName = dosDataBackHead.length > 1 ? this.view.DOSHeader.lblHeadName + " • " + name : name;
        var currFrmName = kony.application.getCurrentForm().id;
        if(currFrmName === "frmDOSHome"){
          gblIsSecondLevel = true;
        }
        if(myBusinessMap.has(hdrName)){
          dosDataBackHead.push(hdrName);
          gblDosDataArray.push(myBusinessMap.get(hdrName));
          this.setSegmentsData();
        }else{
          if(!Utils.isNullorEmpty(query)){
            GlobalServices.getOverview({"query":query}, DOS.serviceName, DOS.getOverview,null, this.getOverviewDataSuccess, this.getOverviewDataFailure);
          }else{
            this.getOverviewDataFailure();
          }
        }
      }catch(e){
        kony.print("Exception in businessChildOnClick:: "+e);
      }
    },

    backNav : function(){
      try{
        Utils.showLoadingIndicator();
        gblDosDataArray.pop();
        dosDataBackHead.pop();
        gblIsSecondLevel = false;
        this.setSegmentsData();
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in backNav:: "+e);
      }
    },

    reset : function(){
      try{
        Utils.showLoadingIndicator();
        myBusinessMap.clear();
        gblIsSecondLevel = false;
        metricsOverview = [];
        var dosData = (gblDosDataArray[0]);
        gblDosDataArray = [];
        gblDosDataArray.push(dosData);
        var dosHeading = dosDataBackHead[0];
        dosDataBackHead = [];
        dosDataBackHead.push(dosHeading);
        this.setSegmentsData();
      }catch(e){
        Utils.hideLoadingIndicator();        
        kony.print("Exception in reset:: "+e);
      }
    },

    customerOnClickData : function(name,query,rowIndex){
      try{
        Utils.showLoadingIndicator();
        var lblStr = (this.view.DOSHeader.lblHeadName).lastIndexOf("•");
        hdrName = dosDataBackHead.length > 1 ? this.view.DOSHeader.lblHeadName + " • " + name : name;
        var currFrmName = kony.application.getCurrentForm().id;
        if(currFrmName === "frmDOSHome"){
          gblIsSecondLevel = true;
        }
        if(myBusinessMap.has(name)){
          dosDataBackHead.push(hdrName);
          gblDosDataArray.push(myBusinessMap.get(name));
          this.setSegmentsData();
        }else{
          if(!Utils.isNullorEmpty(query)){
            GlobalServices.getOverview({"query":query}, DOS.serviceName, DOS.getOverview,null, this.getOverviewDataSuccess, this.getOverviewDataFailure);
          }
        }
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in customerOnClickData:: "+e);
      }
    },

    expandCollapseAnim : function(){
      try{
        if(gblAdditionalMetricsDisplay){
          this.view.flxAdditionalMetricsExpand.setVisibility(true);
          expandIcon = "i";
          this.view.lblAdditionalMetricsDown.text = "i";
          if(isShareIconEnable === "true"){
            this.view.lblAdditionalMetricShareIcon.setVisibility(true);
          }else{
            this.view.lblAdditionalMetricShareIcon.setVisibility(false);
          }
        }else{
          expandIcon = "h";
          this.view.lblAdditionalMetricsDown.text = "h";
          this.view.flxAdditionalMetricsExpand.setVisibility(false);
          this.view.lblAdditionalMetricShareIcon.setVisibility(false);
        }
      }catch(e){
        kony.print("Exception in expandCollapseAnim:: "+e);
      }
    },

    setCollapseAnim : function(){
      try{
        if(expandIcon === "h"){
          this.view.flxAdditionalMetricsExpand.setVisibility(false);
          this.view.lblAdditionalMetricsDown.text = expandIcon;
          this.view.lblAdditionalMetricShareIcon.setVisibility(false);
        }else{
          this.view.lblAdditionalMetricsDown.text = expandIcon;
          this.view.flxAdditionalMetricsExpand.setVisibility(true);
          if(isShareIconEnable === "true"){
            this.view.lblAdditionalMetricShareIcon.setVisibility(true);
          }else{
            this.view.lblAdditionalMetricShareIcon.setVisibility(false);
          }
        }
      }catch(e){
        kony.print("Exception in setCollapseAnim:: "+e);
      }
    },

    setOverViewData : function(metrics, commonData){
      try{
        var additionalMetrics=[];
        metricsOverview = [];
        var newMetrics = {};
        var overviewSort = [];
        if(gblAppConfig.UpgradeInfo){
          overviewSort = (gblAppConfig.UpgradeInfo[AppConstants.OVERVIEW_METRICS_SORT]).split(',');
        }
        metrics.forEach(metric => {
          if(!Utils.isNullorEmpty(metric.group_name) && !Utils.isNullorEmpty(metric.name)){
            metricsOverview.push(metric);
            if(metric.group_name === AppConstants.GROUP_NAME_NONE){
              additionalMetrics.push(metric);
            }else{
              newMetrics[metric.group_name] ? newMetrics[metric.group_name].push(metric) : (newMetrics[metric.group_name] = [], newMetrics[metric.group_name].push(metric));
            }
          }
        });
        var finalData = [];
        var ordersGroupName = "sknLblA7DCECSSPSB16px100";
        var shipmentsGroupName = "sknLblEEB64FSSPSB16px100";
        var forecastGroupName = "sknLblFc597ff100RobotoBold";

        var newData = [];
        for(var n in newMetrics){
          newData.push([n,newMetrics[n]])
        }
        var result = [];
        overviewSort.forEach(function(key) {
          var found = false;
          newData = newData.filter(function(item) {
            if(!found && item[0] === key) {
              result.push(item);
              found = true;
              return false;
            } else 
              return true;
          });
        });
        for(var i=0; i<result.length; i++){
          var metricsData=result[i][1];
          var segData = {};
          for(var j in metricsData){
            var name = metricsData[j].name;
            var grpName = metricsData[j].group_name;
            var value = metricsData[j].value;
            var kpiName =  metricsData[j].kpi_name;
            var groupId = metricsData[j].group_id;
            var groupSkin = "";
            var skinValue = "";
            if(!Utils.isNullorEmpty(metricsData[j].color_group)){
              if(metricsData[j].color_group === AppConstants.COLOR_GROUP_ORDERS)
                groupSkin = ordersGroupName;
              else if(metricsData[j].color_group === AppConstants.COLOR_GROUP_SHIPMENTS)
                groupSkin = shipmentsGroupName;
              else if(metricsData[j].color_group === AppConstants.COLOR_GROUP_FORECAST)
                groupSkin = forecastGroupName;
              else
                groupSkin = ordersGroupName;

            }
            var finalValue = 0;
            var finalCount = 0;

            if(!Utils.isNullorEmpty(value)){
              if(value == "None"){
                value = "0";
              }
              finalValue = getAccurateValue(value);
              finalCount = parseInt((finalValue).toFixed(0)).toLocaleString('en-US');
            }else{
              value = "0";
              finalValue = kony.os.toNumber(value);
              finalCount = parseInt((finalValue).toFixed(0)).toLocaleString('en-US');
            }
            if(groupId === AppConstants.GROUPVALUE){ //Common
              segData.lblGroupName= {text:grpName, skin:groupSkin};
              segData.lblGroupValue= {text: finalCount};
              segData.flxGroupMain= {onClick: this.goToDosChart.bind(this,grpName)};
            }
            if(grpName === AppConstants.GROUP_NAME_ADO){ //ADO
              if(groupId === AppConstants.RIGHTVALUE){
                segData.lbIndexValue= name + ": ";
                skinValue = (finalValue <=100) ? gblCommonSkins.positiveCount : gblCommonSkins.negativeCount;
                segData.lblIndexCount={text: finalCount, skin: skinValue};                
              }else if(groupId === AppConstants.LEFTVALUE){
                segData.lblChangeValue= name + ": ";
                segData.lblChangeCount= {text: finalCount, skin: gblCommonSkins.defaultCount};
              }
            }else if(grpName === AppConstants.GROUP_NAME_NDF){ //NDF
              let ndfVal = (finalValue).toFixed(0);
              let timeElapsed = commonData.timeelapsed.split("%", 1);
              if(groupId === AppConstants.RIGHTVALUE){                
                skinValue = (!Utils.isNullorEmpty(timeElapsed) && timeElapsed.length > 0 &&
                             ndfVal >= kony.os.toNumber(timeElapsed[0])) ? gblCommonSkins.positiveCount : gblCommonSkins.negativeCount;
                segData.lbIndexValue= name + ": ";
                segData.lblIndexCount={text: value, skin: skinValue};
              }else if(groupId === AppConstants.LEFTVALUE){
                skinValue = (!Utils.isNullorEmpty(timeElapsed) && timeElapsed.length > 0 &&
                             ndfVal >= kony.os.toNumber(timeElapsed[0])) ? gblCommonSkins.positiveCount : gblCommonSkins.negativeCount;
                segData.lblChangeValue= name + ": ";
                segData.lblChangeCount={text: value, skin: skinValue};
              }
            }else{ //ORDERS OR OTHERS
              if(groupId === AppConstants.RIGHTVALUE){
                skinValue = (finalValue > 100) ? gblCommonSkins.positiveCount : gblCommonSkins.negativeCount;
                segData.lbIndexValue= name + ": ";
                segData.lblIndexCount={text: value, skin: skinValue};
              }else if(groupId === AppConstants.LEFTVALUE){
                skinValue = (finalValue >= 0) ? gblCommonSkins.positiveCount : gblCommonSkins.negativeCount;
                finalCount = (finalValue > 0) ? "+" + finalCount : finalCount;
                segData.lblChangeValue= name + ": ";
                segData.lblChangeCount= {text: finalCount, skin:skinValue};
              }
            }
          }
          finalData.push(segData);
        }
        this.view.segOverview.setData(finalData);
        this.setAdditionalMetricsData(additionalMetrics);
      }catch(e){
        Utils.hideLoadingIndicator();
        alert("Exception in setOverViewData:: "+e);
      }
    },


    setAdditionalMetricsData : function(metrics){
      try{
        var segData = [], skinVal = "";
        var temp = {};
        for(var s=0 ; s<metrics.length ; s++){
          if(!Utils.isNullorEmpty(metrics[s].color_group)){
            if(metrics[s].color_group === AppConstants.COLOR_GROUP_ORDERS)
              skinVal = "sknLblA7DCECSSPSB16px100";
            else if(metrics[s].color_group === AppConstants.COLOR_GROUP_SHIPMENTS)
              skinVal = "sknLblEEB64FSSPSB16px100";
            else if(metrics[s].color_group === AppConstants.COLOR_GROUP_FORECAST)
              skinVal = "sknLblC597FFSSPSB16px100";
            else
              skinVal = "sknLblFFFFFSSPR16px100";
          }
          var value = metrics[s].value;
          var finalVal = 0;
          var finalCount = 0;

          if(!Utils.isNullorEmpty(value)){
            if(value == "None"){
              value = "0";
            }
            finalVal = getAccurateValue(value);
            finalCount = parseInt((finalVal).toFixed(0)).toLocaleString('en-US');
          }
          var name = metrics[s].name;
          var kpiName = metrics[s].kpi_name;

          if(kpiName == AppConstants.AVG_DAILY_ORDERS_VS_YA_INDEX){
            temp = {
              "lblName" : {text : name ? name : "" , skin :  skinVal},
              "lblValue" : {text : value, 
                            skin : (finalVal < 100) ? gblCommonSkins.positiveCount :  gblCommonSkins.negativeCount}
            };
          }else if(kpiName == AppConstants.MTD_SHIPMENTS_YA_INDEX 
                   || kpiName == AppConstants.ODR_MTD_ORDERS_INDEX_VS_FINANCIAL_FORECAST){
            temp = {
              "lblName" : {text : name ? name : "" , skin :  skinVal},
              "lblValue" : {text : value, 
                            skin : (finalVal > 100) ? gblCommonSkins.positiveCount :  gblCommonSkins.negativeCount}
            };
          }else{
            temp = {
              "lblName" : {text : name ? name : "" , skin :  skinVal},
              "lblValue" : {text : finalCount, 
                            skin : gblCommonSkins.defaultCount}
            };
          }
          segData.push(temp);
        }
        this.view.segAdditionalMetricsNew.setData(segData);
        this.view.DOSHeader.setFocus(true);
      }catch(e){
        kony.print("Exception in setAdditionalMetricsData:: "+e);
      }
      Utils.hideLoadingIndicator();
    },

    goToDosChart : function(overviewType){
      try{
        var operationName = null;
        var query  = this.getQuery(overviewType);
        var requestMethod = Utils.getRequestMethod(overviewType);
        var header = dosDataBackHead[(dosDataBackHead.length)-1];
        if(chartDataMap.has(gblSelectedOverviewType) && chartDataMap.get(gblSelectedOverviewType).has(header)){
          gblChartMetricQuery = query;
          this.navToChartScreen(chartDataMap.get(gblSelectedOverviewType).get(header));
        }else{
          if(!Utils.isNullorEmpty(query)){
            GlobalServices.getOverview({"query":query}, DOS.serviceName, requestMethod, null, this.getOverviewAPISuccessCallBack, this.getOverviewAPIFailureCallBack);
          }
        }
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in goToDosChart:: "+e);
      }  
    },

    getOverviewAPISuccessCallBack : function(response){
      try{
        if(!Utils.isNullorEmpty(response)){
          var operationName = null;
          var queryOverview = this.getQuery(gblSelectedOverviewType);
          var requestMethod = Utils.getRequestMethod(gblSelectedOverviewType, true);
          gblChartMetricQuery = queryOverview;
          var query = queryOverview+"|chart_data|period:current_month";
          APIOverviewSuccessResponse = response.records[0];
          if(!Utils.isNullorEmpty(query)){
            GlobalServices.getOverview({"query":query}, DOS.serviceName, requestMethod, null, this.fetchChartDataSuccessCallBack, this.fetchChartDataFailureCallBack);
          }
        }
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in getOverviewAPISuccessCallBack:: "+e);
      }
    },

    getQuery : function(overviewType){
      try{
        let query = "";
        for(var i=0;i<metricsOverview.length;i++){
          var groupName = metricsOverview[i].group_name;
          if(overviewType === groupName){
            gblSelectedOverviewType = groupName;
            query = metricsOverview[i].id;
            if(!Utils.isNullorEmpty(query))
              break;
          }
        }
        return query;
      }catch(e){
        kony.print("Exception in getQuery "+e);
      }
    },

    getOverviewAPIFailureCallBack : function(error){
      var message =kony.i18n.getLocalizedString("i18n.clorox.DosDataError")+ErrorCodes.DOS_DATA_FAILURE;
      Utils.hideLoadingIndicator();
      var currForm = kony.application.getCurrentForm();
      if(!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)){
        currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"),
                                          message,kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
        currForm.flxGenericError.setVisibility(true);
      }
    },

    fetchChartDataSuccessCallBack : function(response){
      try{
        if(!Utils.isNullorEmpty(response)){
          var graphData = [];
          graphData.push(APIOverviewSuccessResponse);
          graphData.push(response.records[0]);

          var temp = new Map();
          temp.set(dosDataBackHead[(dosDataBackHead.length)-1], graphData);
          chartDataMap.set(gblSelectedOverviewType,temp);
          this.navToChartScreen(graphData);
        }
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in fetchChartDataSuccessCallBack:: "+e);
      }
    },

    navToChartScreen : function(graphData){
      try{
        gblChartDataArray = [];
        gblChartDataArray.push(graphData[0]);
        gblChartDataBackHead = [];
        gblChartDataBackHead.push(dosDataBackHead[(dosDataBackHead.length)-1]);
        var nav = new kony.mvc.Navigation("frmDosChart");
        G_Navigation_History.push("frmDOSHome");
        nav.navigate(graphData);
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in navToChartScreen:: "+e);
      }
    },

    fetchChartDataFailureCallBack : function(error){
      var message =kony.i18n.getLocalizedString("i18n.chartFailure.error")+ErrorCodes.DOS_DATA_FAILURE;
      Utils.hideLoadingIndicator();
      var currForm = kony.application.getCurrentForm();
      if(!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)){
        currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"),
                                          message,kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
        currForm.flxGenericError.setVisibility(true);
      }
    },

  };
});