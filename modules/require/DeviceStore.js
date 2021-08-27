var Utils = require("UtilsCL");
var storeUtil = require("StoreUtil");
var StoreKeys = require("StoreKeys");
define(function () {
  var DeviceStore = {
    isFirstLogin : function () {
      var loginToken = storeUtil.getItem(StoreKeys.FIRST_LOGIN);
      if(DeviceStore.isNullorEmpty(loginToken))          	
        return true;
      else
        return loginToken;
    },
    storeFirstLogin : function (isFirstLogin) {
      storeUtil.setItem(StoreKeys.FIRST_LOGIN, isFirstLogin);
    },
    clearFirstLogin : function () {
      storeUtil.removeItem(StoreKeys.FIRST_LOGIN);
    },
    isLocaleStored : function() {
      var localeToken = storeUtil.getItem(StoreKeys.SAVE_LOCALE);
      if(DeviceStore.isNullorEmpty(localeToken))
        return false;
      else
        return true;
    },
    storeLocale : function (locale) {
      storeUtil.setItem(StoreKeys.SAVE_LOCALE, locale);
    },
    getLocale : function () {
      var locToken = storeUtil.getItem(StoreKeys.SAVE_LOCALE);
      if(DeviceStore.isNullorEmpty(locToken))          	
        return "";
      else
        return locToken;
    },
    storeTouchSupport : function(isTouchSupp) {
      storeUtil.setItem(StoreKeys.TOUCH_SUPPORT, isTouchSupp);
    },

    isTouchSupported : function () {
      var touchIdSuppFlag = storeUtil.getItem(StoreKeys.TOUCH_SUPPORT);
      if(DeviceStore.isNullorEmpty(touchIdSuppFlag))          	
        return false;
      else
        return touchIdSuppFlag;
    },
    storeProperties : function (propTable){
      storeUtil.setItem(StoreKeys.APP_PROPS, propTable);
    },
    clearProperties: function (){
      storeUtil.removeItem(StoreKeys.APP_PROPS);
    },
    getAllProperties : function () {
      var props = storeUtil.getItem(StoreKeys.APP_PROPS);
      if(DeviceStore.isNullorEmpty(props))          	
        return "";
      else
        return props;
    },
    getProperty : function (propKey) {
      var props = storeUtil.getItem(StoreKeys.APP_PROPS);
      if(DeviceStore.isNullorEmpty(props)){
        return "{}";
      } 	
      return props[propKey];
    },
    storeVolumePreference : function(volPref){
      storeUtil.setItem(StoreKeys.VOLUME_PREF, volPref);
    },
    getVolumePreference : function(){
      var volPref = storeUtil.getItem(StoreKeys.VOLUME_PREF);
      if(DeviceStore.isNullorEmpty(volPref))          	
        return "";
      else
        return volPref;
    },
    clearVolumePreference: function (){
      storeUtil.removeItem(StoreKeys.VOLUME_PREF);
    },
    storeZeroVolPreference : function(zeroVolPref){
      storeUtil.setItem(StoreKeys.ZERO_VOLUME_PREF, zeroVolPref);
    },
    getZeroVolPreference : function(){
      var zeroVolPref = storeUtil.getItem(StoreKeys.ZERO_VOLUME_PREF);
      if(DeviceStore.isNullorEmpty(zeroVolPref))          	
        return "";
      else
        return zeroVolPref;
    },
    clearZeroVolPreference: function (){
      storeUtil.removeItem(StoreKeys.ZERO_VOLUME_PREF);
    },
    storeInactivePreference : function(inactivePref){
      storeUtil.setItem(StoreKeys.INACTIVE_PREF, inactivePref);
    },
    getInactivePreference : function(){
      var inactivePref = storeUtil.getItem(StoreKeys.INACTIVE_PREF);
      if(DeviceStore.isNullorEmpty(inactivePref))          	
        return "";
      else
        return inactivePref;
    },
    clearInactivePreference: function (){
      storeUtil.removeItem(StoreKeys.INACTIVE_PREF);
    },
    storeDontShowAgainFlag : function(dontShowAgain){
      storeUtil.setItem(StoreKeys.DONTSHOW_AGAIN, dontShowAgain);
    },
    getDontShowAgainFlag : function(){
      var dontShowAgain = storeUtil.getItem(StoreKeys.DONTSHOW_AGAIN);
      if(DeviceStore.isNullorEmpty(dontShowAgain))          	
        return false;
      else
        return dontShowAgain;
    },
    clearDontShowAgainFlag: function (){
      storeUtil.removeItem(StoreKeys.DONTSHOW_AGAIN);
    },
    setTouchPreference : function(isTouchEnabled) {
      storeUtil.setItem(StoreKeys.TOUCH_PREF, isTouchEnabled);
    },
    getTouchPreference : function(){
      //kony.store.getItem(key);
      var pref = storeUtil.getItem(StoreKeys.TOUCH_PREF);
      if(DeviceStore.isNullorEmpty(pref))          	
        return false;
      else
        return pref;
    },
    clearTouchPreference : function(){
      storeUtil.removeItem(StoreKeys.TOUCH_PREF);
    },

    isNullorEmpty : function(value){
      if(((value === null) || (value === "null") || (value === "") || (value === undefined))){
        return true;
      }else{
        return false;
      }
    },
    saveInfoOnStore: function(keyName,text,uniqId){
      var encryptDecryptKey = kony.crypto.readKey(uniqId);
      var encText = Utils.encryptAESVA(text, encryptDecryptKey);
      var encTextBase64 = kony.convertToBase64(encText);
      try{
        kony.store.setItem(keyName, encTextBase64);
      }catch(err){
        kony.print("Issue is setting to data store");
      }
    },

    readInfoFromStore: function(keyName,uniqId){
      try{
        if(!Utils.isNullorEmpty(kony.store.getItem(keyName))){
          var decrText = "";
          var encryptDecryptKey = kony.crypto.readKey(uniqId);
          var encTextBase64 = kony.store.getItem(keyName);
          var encTextRawBytes = kony.convertToRawBytes(encTextBase64);
          if(encTextBase64 !== null){
            decrText = Utils.decryptAESVA(encTextRawBytes, encryptDecryptKey);
          }
          return decrText;
        }else{
          return null;
        }
      }catch(err){
        Utils.hideLoadingIndicator();
        return null;
      }
    },

  };
  return DeviceStore;
});