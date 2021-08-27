define(function() {
  var Utils = require("UtilsCL");
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
        this.view.lblOrdersShareIcon.onTouchEnd = Utils.shareFFI.bind(this,this.view.DOSHeader,this.view.flxOrdersContent);
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
        this.view.flxMTDOrdersList.onClick = this.goToDosChart.bind(this,kony.i18n.getLocalizedString("i18.clorox.mtdOrders"));
        this.view.flxDailyOrdersMain.onClick = this.goToDosChart.bind(this,kony.i18n.getLocalizedString("i18.clorox.avgDaily"));
        this.view.flxMTDShipmentsMain.onClick = this.goToDosChart.bind(this,kony.i18n.getLocalizedString("i18.clorox.mtdShipments"));        
        var prevFrm = kony.application.getPreviousForm();
        if((!Utils.isNullorEmpty(prevFrm) && prevFrm.id === "frmLogin") || isDosChartResetClick){
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
        var k,data;
        if(!Utils.isNullorEmpty(gblDosDataArray) && gblDosDataArray.length>=1){
          k = gblDosDataArray.length-1;
          data = gblDosDataArray[k];
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
            this.view.DOSBusinessCustomersTablet.top = "32dp";
            this.view.DOSBusinessCustomersTablet.setBusinessData(data.Products , k , data.Common[0]);
          }else{
            this.view.DOSBusinessCustomersTablet.top = "0dp";
            this.view.DOSBusinessCustomersTablet.setBusinessDataOff();
          }
          if(!Utils.isNullorEmpty(data.Customers)){
            this.view.DOSBusinessCustomersTablet.setCustomersData(data.Customers , data.Common[0]);
          }else{
            this.view.DOSBusinessCustomersTablet.setCustomersDataOff();
          }
          if(!Utils.isNullorEmpty(data.Common))
            this.view.DOSHeader.setHeaderData(data.Common[0] , dosDataBackHead[k]);
          if(!Utils.isNullorEmpty(data.metric))
            this.setOverViewData(data.metric, data.Common[0]);
        }
        this.view.flxOrdersHead.setFocus(true);
        Utils.hideLoadingIndicator();
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in setSegmentsData:: "+e);
      }
    },

    businessOnClick : function(name, query, rowIndex){
      try{
        Utils.showLoadingIndicator();
        var lblStr = (this.view.DOSHeader.lblHeadName).lastIndexOf("•");
        hdrName = dosDataBackHead.length > 1 ? this.view.DOSHeader.lblHeadName + " • " + name : name;
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
          var message = kony.i18n.getLocalizedString("i18n.clorox.DosDataError")+ErrorCodes.DOS_DATA_FAILURE;
          var currForm = kony.application.getCurrentForm();
          if(!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)){
            currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"),
                                              message,kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
            currForm.flxGenericError.setVisibility(true);
          }
        }
      }catch(e){
        Utils.hideLoadingIndicator();
        kony.print("Exception in getOverviewDataSuccess:: "+e);
      }
    },

    //getOverview service Failure call back
    getOverviewDataFailure : function(error){
      try{
        Utils.hideLoadingIndicator();
        var message = kony.i18n.getLocalizedString("i18n.clorox.DosDataError")+ErrorCodes.DOS_DATA_FAILURE;
        var currForm = kony.application.getCurrentForm();
        if(!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)){
          currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"),
                                            message,kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
          currForm.flxGenericError.setVisibility(true);
        }
      }catch(e){
        kony.print("Exception in getOverviewDataFailure "+e);
      }
    },

    backNav : function(){
      try{
        Utils.showLoadingIndicator();
        kony.print("In Back Nav:: "+gblDosDataArray.length-1);
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

    customerOnClickData : function(name, query, rowIndex){
      try{
        var lblStr = (this.view.DOSHeader.lblHeadName).lastIndexOf("•");
        hdrName = dosDataBackHead.length > 1 ? this.view.DOSHeader.lblHeadName + " • " + name : name;
        if(myBusinessMap.has(name)){
          dosDataBackHead.push(hdrName);
          gblDosDataArray.push(myBusinessMap.get(name));
          this.setSegmentsData();
        }else{
          if(!Utils.isNullorEmpty(query)){
            GlobalServices.getOverview({"query":query}, DOS.serviceName, DOS.getOverview, null, this.getOverviewDataSuccess, this.getOverviewDataFailure);
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

    setOverViewData : function(metrics,commonData){
      try{
        if(!Utils.isNullorEmpty(metrics) && metrics.length !== 0){
          var overviewSort = [];
          if(gblAppConfig.UpgradeInfo){
            overviewSort = (gblAppConfig.UpgradeInfo[AppConstants.OVERVIEW_METRICS_SORT]).split(',');
          }
          this.view.segOverview.setVisibility(true);
          var dataToPush = [] ,dataLeftOverview,dataRightOverview ;
          var additionalMetrics = [];
          metricsOverview = [];
          var newMetrics = {};
          metrics.forEach(metric => {
            if(!Utils.isNullorEmpty(metric.group_name) && !Utils.isNullorEmpty(metric.name)){
              metricsOverview.push(metric);
              if(metric.group_name === AppConstants.GROUP_NAME_NONE){
                additionalMetrics.push(metric);
              }else{
                newMetrics[metric.group_name] ? newMetrics[metric.group_name].push(metric) : (newMetrics[metric.group_name] = [],  newMetrics[metric.group_name].push(metric));
              }
            }
          });
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
          for(var i=0; i<result.length - 1; i+=2){
            dataLeftOverview = this.getSegmentData(1,result[i],commonData);
            dataRightOverview = this.getSegmentData(2,result[i+1],commonData);
            let data = Object.assign(dataLeftOverview, dataRightOverview);
            dataToPush.push(data);
          }
          if(result.length & 1){
            dataLeftOverview = this.getSegmentData(1,result[result.length-1],commonData);
            dataRightOverview = { 
              flxGroupMain2 : {isVisible:false}
            };
            let data = Object.assign(dataLeftOverview, dataRightOverview);
            dataToPush.push(data);
          }
          this.view.segOverview.setData(dataToPush);
          this.setAdditionalMetricsData(additionalMetrics);
        }
      }catch(e){
        kony.print("Exception in setOverViewData:: " + e);
      }     
    },

    getSegmentData : function(index,newMetrics,commonData){
      try{
        var finalData = [];
        var ordersGroupName = "sknLblA7DCECSSPSB16px100";
        var shipmentsGroupName = "sknLblEEB64FSSPSB16px100";
        var forecastGroupName = "sknLblFc597ff100RobotoBold";

        let sortOrder = 4;
        let grpName = newMetrics[0];
        var metricsData = newMetrics[1];
        let segData = {};
        for(var j in metricsData){
          let name = metricsData[j].name;
          let value = metricsData[j].value;
          let kpiName =  metricsData[j].kpi_name;
          let groupId = metricsData[j].group_id;
          let groupSkin = "";
          let skinValue = "";

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
          let finalValue = 0;
          let finalCount = 0;
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
            segData["lblGroupName" + index]= {text:grpName, skin:groupSkin};
            segData["lblGroupValue"+ index]= {text: finalCount};
            segData["flxGroupMain" + index]= {onClick: this.goToDosChart.bind(this,grpName)};
          }
          if(grpName === AppConstants.GROUP_NAME_ADO){ //ADO
            if(groupId === AppConstants.RIGHTVALUE){
              segData["lbIndexValue" + index]= {text: name + ": "};
              skinValue = (finalValue <= 100) ? gblCommonSkins.positiveCount : gblCommonSkins.negativeCount;
              segData["lblIndexCount" + index]={text: finalCount, skin: skinValue};

            }else if(groupId === AppConstants.LEFTVALUE){
              segData["lblChangeValue" + index ]={text: name + ": "};
              segData["lblChangeCount" + index]= {text: finalCount, skin: gblCommonSkins.defaultCount};
            }
          }else if(grpName === AppConstants.GROUP_NAME_NDF){ //NDF
            let ndfVal = (finalValue).toFixed(0);
            let timeElapsed = commonData.timeelapsed.split("%", 1);
            if(groupId === AppConstants.RIGHTVALUE){
              skinValue = (!Utils.isNullorEmpty(timeElapsed) && timeElapsed.length > 0 &&
                           ndfVal >= kony.os.toNumber(timeElapsed[0])) ? gblCommonSkins.positiveCount : gblCommonSkins.negativeCount;
              segData["lbIndexValue" + index]= name + ": ";
              segData["lblIndexCount" + index]={text: value, skin: skinValue};
            }else if(groupId === AppConstants.LEFTVALUE){
              skinValue = (!Utils.isNullorEmpty(timeElapsed) && timeElapsed.length > 0 &&
                           ndfVal >= kony.os.toNumber(timeElapsed[0])) ? gblCommonSkins.positiveCount : gblCommonSkins.negativeCount;
              segData["lblChangeValue" + index] = name + ": ";
              segData["lblChangeCount" + index] = {text: value, skin: skinValue};
            }
          }else{ //ORDERS OR OTHERS
            if(groupId === AppConstants.RIGHTVALUE){
              skinValue = (finalValue > 100) ? gblCommonSkins.positiveCount : gblCommonSkins.negativeCount;
              segData["lbIndexValue" + index]= {text: name + ": "};
              segData["lblIndexCount" + index]={text: value, skin: skinValue};
            }else if(groupId === AppConstants.LEFTVALUE){
              skinValue = (finalValue >= 0) ? gblCommonSkins.positiveCount : gblCommonSkins.negativeCount;
              finalCount = (finalValue > 0) ? "+" + finalCount : finalCount;
              segData["lblChangeValue" + index]={text: name + ": "};
              segData["lblChangeCount" + index]= {text: finalCount, skin:skinValue};
            }
          }
        }

        return segData;
      }catch(e){
        kony.print("Exception in getSegmentData:: "+e);
      }
    },

    setAdditionalMetricsData : function(additionalMetrics){
      try{
        var addOrderMetrics = [];
        var addDataMetrics = [];
        var segData = [], skinVal = "", value = 0;
        var additionMetricLen =  additionalMetrics.length;
        var leftLength = additionMetricLen / 2 + additionMetricLen % 2;

        addOrderMetrics = additionalMetrics.slice(0,leftLength); 
        addDataMetrics = additionalMetrics.slice(leftLength, additionMetricLen);

        var dataToPush = [], dataLeft, dataRight;
        let s = 0 , k = 0;
        var data1;
        let v = 0;
        for(s = 0; s < addOrderMetrics.length; s++){
          dataLeft = this.getSegData(1, addOrderMetrics[s]);
          for(k = v; k < addDataMetrics.length; k++){
            dataRight = this.getSegData(2, addDataMetrics[k]);
            v = v + 1;
            break;
          }
          data1 = Object.assign(dataLeft, dataRight);
          dataLeft,dataRight = [];
          dataToPush.push(data1);
        } 
        k = k + 1;
        if(s === addOrderMetrics.length && addOrderMetrics.length < addDataMetrics.length){
          for(let z = k; z < addDataMetrics.length; z++){
            dataLeft = {
              flxLeft1 : {isVisible:false}
            };
            dataRight = this.getSegData(2, addDataMetrics[z]);

            data1 = Object.assign(dataLeft, dataRight);
            dataToPush.push(data1);
          }
        }
        this.view.segAdditionalMetricsNew.removeAll();
        this.view.segAdditionalMetricsNew.addAll(dataToPush);
        this.view.DOSHeader.setFocus(true);
        Utils.hideLoadingIndicator();
      }catch(e){
        kony.print("Exception in setAdditionalMetricsData:: "+e);
      }
    },

    getSegData : function(index, productObj){
      try{
        var data = {};
        let kpiName = productObj.kpi_name;
        let value = productObj.value;
        let finalVal = 0;
        let finalCount = 0;
        let skinVal = "";
        if(productObj.color_group === AppConstants.COLOR_GROUP_ORDERS)
          skinVal = "sknLblA7DCECRB16px114";
        else if(productObj.color_group === AppConstants.COLOR_GROUP_SHIPMENTS)
          skinVal = "sknLblEEB64FRB16px114";
        else if(productObj.color_group === AppConstants.COLOR_GROUP_FORECAST)
          skinVal = "sknLblC597FFRB16px114";
        else
          skinVal = "sknLblFFFFFSSPR16px100";

        if(!Utils.isNullorEmpty(value)){
          if(value == "None"){
            value = "0";
          }
          finalVal = getAccurateValue(value);
          finalCount = parseInt((finalVal).toFixed(0)).toLocaleString('en-US');
        }
        if(kpiName == AppConstants.AVG_DAILY_ORDERS_VS_YA_INDEX){
          data["lblName" + index] = {text:productObj.name , skin : skinVal};
          data["lblCount" + index] = {text: finalCount,
                                      skin : (finalVal).toFixed(0) < 100 ?  gblCommonSkins.positiveCount :  gblCommonSkins.negativeCount};
        }else if(kpiName == AppConstants.MTD_SHIPMENTS_YA_INDEX
                 || kpiName == AppConstants.ODR_MTD_ORDERS_INDEX_VS_FINANCIAL_FORECAST){
          data["lblName" + index] = {text:productObj.name , skin : skinVal};
          data["lblCount" + index] = {text: value, 
                                      skin : (finalVal).toFixed(0) > 100 ?  gblCommonSkins.positiveCount :  gblCommonSkins.negativeCount};
        }else{
          data["lblName" + index] = {text:productObj.name , skin : skinVal};
          data["lblCount" + index] = {text: finalCount, 
                                      skin : gblCommonSkins.defaultCount};
        }
        return data;
      }catch(e){
        kony.print("Exception in getSegData:: "+e);
      }
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
        kony.print("Exception in getOverviewAPISuccessCallBack:: "+e);
      }
    },

    getQuery : function(overviewType){
      try{
        let query = "";
        for(var i = 0; i < metricsOverview.length; i++){
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
        kony.print("Exception in getQuery"+e);
      }
    },

    getOverviewAPIFailureCallBack : function(error){
      Utils.hideLoadingIndicator();
      var message = kony.i18n.getLocalizedString("i18n.clorox.DosDataError")+ErrorCodes.DOS_DATA_FAILURE;
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
          chartDataMap.set(gblSelectedOverviewType, temp);
          this.navToChartScreen(graphData);
        }
      }catch(e){
        kony.print("Exception in fetchChartDataSuccessCallBack:: " + e);
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
        kony.print("Exception in navToChartScreen:: " + e);
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