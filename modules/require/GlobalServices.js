define(function (){
  var Utils = require("UtilsCL");
  var storeUtil = require("StoreUtil");
  var StoreKeys = require("StoreKeys");
  var UserStore = require("UserStore");
  var ErrorCodes = require("ErrorCodes");
  var AppConstants = require("AppConstants");
  var deviceUtil = require("DeviceUtil");
  var GlobalServices = {
    addLang : function(inputParams){
      var lang = UserStore.getUserParam(StoreKeys.PREF_LANG);
      var iboCountry = UserStore.getUserParam("country");
      if (AppConstants.latamCountries.includes(iboCountry)) {
        iboCountry = AppConstants.G_COUNTRY.US;
        if(lang == AppConstants.G_LANGUAGE.CA_FRENCH){
          lang = "en_" + iboCountry;
        }else{
          lang += "_" + iboCountry;
        }
      }
      if (lang == AppConstants.G_LANGUAGE.US_SPANISH || lang == AppConstants.G_LANGUAGE.CA_FRENCH) {
        lang += "_" + iboCountry;
      }
      if (lang == AppConstants.G_LANGUAGE.US_ENGLISH && iboCountry == AppConstants.G_COUNTRY.DO) {
        lang = "en_" + AppConstants.G_COUNTRY.DO;
      }
      inputParams.lang = lang;
      inputParams.countryCode = iboCountry;
      return inputParams;
    },

    initialiseMobileFabric:function(successCallbk){
      kony.print("Inside initialiseMobileFabric");
      if(!Utils.isNetworkAvailable()) return;
      KNYMobileFabric = new kony.sdk();
      var appKey = getFabricAppKey();
      var appSecret = getFabricAppSecert();
      var serviceURL = getServiceURL();
      
      KNYMobileFabric.init(appKey,appSecret,serviceURL,successCallback, errorCallback);
      
      function successCallback(res){
        kony.print("initialisation of MobileFabric is success");
        gblIsFabricInitilised = true;
        KNYMetricsService.setEventTracking(["AppLoad", "FormEntry", "Error", "Touch", "Gesture", "Crash", "FormExit", "ServiceResponse", "Orientation"]);
        KNYMetricsService.setEventConfig("Buffer", 10, 200);
        KNYMetricsService.flushEvents();  
        successCallbk();
      }
      function errorCallback(res){
        kony.print("initialiseMobileFabric errorCallback ::"+JSON.stringify(res));
        gblIsFabricInitilised = false;

        KNYMetricsService.flushEvents();
        Utils.hideLoadingIndicator();
        if(res.errcode == 1022){
          var currForm = kony.application.getCurrentForm();
          if(!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)){
            currForm.Login.displayErrorMessage(kony.i18n.getLocalizedString("i18.clorox.servDownMf") + " :"+ ErrorCodes.SERVICE_DOWN_KONYMOBILEFABRIC);
          }
        } 
      }
    },

    callIntegrationServices : function(serviceName,operationName,successCallbackFunc,inputParam,isLanguageNeeded,isLoadingIndicatorNeeded,errorCall){
      if(!Utils.isNetworkAvailable()) return;
      if(gblIsFabricInitilised){
        if(isLoadingIndicatorNeeded) Utils.showLoadingIndicator();
        inputParam = isLanguageNeeded ? this.addLang(inputParam) : inputParam;
        var integrationClient = KNYMobileFabric.getIntegrationService(serviceName);
        integrationClient.invokeOperation(operationName, {}, inputParam,
                                          (res) => {
          successCallbackFunc(res);
        },
                                          (error) => {
          errorCall(error);
          Utils.hideLoadingIndicator();
        });//,G_ENABLE_BACKGROUND_CALL_OPTIONS);
      }else{
        this.initialiseMobileFabric();
      }
    },

    /**
   * @function getOperation
   * @description - This function will make the object service call to the backend to get overview
   * @param {Object - queryData}
   * @param {String - seviceName}
   * @param {String - objectName}
   * @param {function - callback}
   */
    getOverview: function(queryData, seviceName, operationName, objectData, successCallBack, failureCallBack) {
      try {
        if(!Utils.isNetworkAvailable()) return;
        if(gblIsFabricInitilised){
          Utils.showLoadingIndicator();
          var objSvc = KNYMobileFabric.getObjectService(seviceName, {
            "access": "online"
          });
          var dataObject = new kony.sdk.dto.DataObject(operationName);
          if(seviceName == DOS.serviceName){
            var options = {
              "dataObject": dataObject,
              "headers": {},
              "queryParams": queryData
            };
            objSvc.fetch(options,
                         function (response) {
              if (successCallBack !== undefined) {
                kony.print("in object success..");
                successCallBack(response);
              }
            },
                         function (error) {
              Utils.hideLoadingIndicator();
              if (failureCallBack !== undefined) {
                kony.print("in object failure..");
                failureCallBack(error);
              }
              kony.print(" Error while invoking object service : " + error);
            });
          }else if(seviceName == FeedBack.serviceName){
            var platformOS = "Android";
            if(deviceUtil.isiOS()){
              platformOS = "iOS";
            }
            var channel = "Tablet";
            if(deviceUtil.isMobile()){
              channel = "Mobile";
            }
            var osVersion = kony.os.deviceInfo().version;
            var deviceId = kony.os.deviceInfo().deviceid;
            var deviceModel = kony.os.deviceInfo().model;

            var dataObject = new kony.sdk.dto.DataObject(FeedBack.updateFeedback);
            dataObject.addField("app_version",deviceUtil.getAppVersion());
            dataObject.addField("device_id",deviceId);
            dataObject.addField("device_model",deviceModel);
            dataObject.addField("os_version",osVersion);
            dataObject.addField("platform",platformOS);
            dataObject.addField("device_channel",channel);            
            dataObject.addField("application_name",G_APP_NAME);
            dataObject.addField("env",env);
            dataObject.addField("feedback_comment",objectData.feedback_comment);
            dataObject.addField("feedback_user",gblPartyEmail);
            dataObject.addField("subject",objectData.subject);
            dataObject.addField("rating",objectData.rating); 
            var options = {"dataObject":dataObject};
            objSvc.create(options, successCallBack, failureCallBack);
          }
        }else{
          this.initialiseMobileFabric();
        }
      } catch (err) {
        Utils.hideLoadingIndicator();
        kony.print(" Error while invoking object service : " + err);
      }

    }
  };

  return GlobalServices;
});