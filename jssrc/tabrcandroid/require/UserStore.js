/**
 * File for storing Cache & Store variables.
 *
 * @description : Cache & Store Functionality used in App
 */
define(function() {
    var storeUtil = require("StoreUtil");
    var StoreKeys = require("StoreKeys");
    var UserStore = {
        isLoggedIn: function() {
            var isLoggedIn = storeUtil.getVariable(StoreKeys.ISLOGGEDIN);
            if (!UserStore.isNullorEmpty(isLoggedIn)) {
                return isLoggedIn;
            } else {
                return false;
            }
        },
        setLoggedInStatus: function() {
            storeUtil.setVariable(StoreKeys.ISLOGGEDIN, true);
        },
        clearLoggedInStatus: function() {
            storeUtil.removeVariable(StoreKeys.ISLOGGEDIN);
        },
        setTouchPreference: function(isTouchEnabled) {
            storeUtil.setItem(StoreKeys.TOUCH_PREF, isTouchEnabled);
        },
        getTouchPreference: function() {
            var pref = storeUtil.getItem(StoreKeys.TOUCH_PREF);
            if (UserStore.isNullorEmpty(pref)) return false;
            else return pref;
        },
        clearTouchPreference: function() {
            storeUtil.removeItem(StoreKeys.TOUCH_PREF);
        },
        setUpdatePreference: function(isMobileData) {
            storeUtil.setItem(StoreKeys.UPDATE_PREF, isMobileData);
        },
        getUpdatePreference: function() {
            var pref = storeUtil.getItem(StoreKeys.UPDATE_PREF);
            if (UserStore.isNullorEmpty(pref)) return false;
            else return pref;
        },
        clearUpdatePreference: function() {
            storeUtil.removeItem(StoreKeys.UPDATE_PREF);
        },
        storeUsername: function(username) {
            storeUtil.setRawItem(StoreKeys.USER_NAME, username);
        },
        clearUsername: function() {
            storeUtil.removeItem(StoreKeys.USER_NAME);
        },
        getUsername: function() {
            var username = storeUtil.getRawItem(StoreKeys.USER_NAME);
            if (UserStore.isNullorEmpty(username)) return "";
            else return username;
        },
        storePassword: function(password) {
            storeUtil.setRawItem(StoreKeys.PASSWORD, password);
        },
        clearPassword: function() {
            storeUtil.removeItem(StoreKeys.PASSWORD);
        },
        getPassword: function() {
            var password = storeUtil.getRawItem(StoreKeys.PASSWORD);
            if (UserStore.isNullorEmpty(password)) return "";
            else return password;
        },
        storeUserDetails: function(userDetails) {
            storeUtil.setVariable(StoreKeys.USER_DETAILS, userDetails);
        },
        clearUserDetails: function() {
            storeUtil.removeVariable(StoreKeys.USER_DETAILS);
        },
        getUserDetails: function() {
            var userDetails = storeUtil.getVariable(StoreKeys.USER_DETAILS);
            if (UserStore.isNullorEmpty(userDetails)) return "";
            else return userDetails;
        },
        getUserParam: function(key) {
            var userDetails = storeUtil.getVariable(StoreKeys.USER_DETAILS);
            if (UserStore.isNullorEmpty(userDetails)) return "";
            else return userDetails["" + key];
        },
        setUserParam: function(key, value) {
            var userDetails = storeUtil.getVariable(StoreKeys.USER_DETAILS);
            if (UserStore.isNullorEmpty(userDetails)) {
                userDetails = {};
            }
            if (!UserStore.isNullorEmpty(key)) {
                userDetails["" + key] = value;
                storeUtil.setVariable(StoreKeys.USER_DETAILS, userDetails);
            }
        },
        storeLoggedInABO: function(value) {
            storeUtil.setVariable(StoreKeys.LOGGED_IN_ABO, value);
        },
        getLoggedInABO: function() {
            var aboNumber = storeUtil.getVariable(StoreKeys.LOGGED_IN_ABO);
            if (UserStore.isNullorEmpty(aboNumber)) return "";
            else return aboNumber;
        },
        clearLoggedInABO: function() {
            storeUtil.removeVariable(StoreKeys.LOGGED_IN_ABO);
        },
        storeLoggedInParty: function(value) {
            storeUtil.setVariable(StoreKeys.LOGGED_IN_PARTY, value);
        },
        getLoggedInParty: function() {
            var partyId = storeUtil.getVariable(StoreKeys.LOGGED_IN_PARTY);
            if (UserStore.isNullorEmpty(partyId)) return "";
            else return partyId;
        },
        clearLoggedInParty: function() {
            storeUtil.removeVariable(StoreKeys.LOGGED_IN_PARTY);
        },
        getCustomParam: function(key) {
            var customParam = storeUtil.getVariable(StoreKeys.CUSTOM_PARAM);
            if (UserStore.isNullorEmpty(customParam)) return [];
            else return customParam["" + key];
        },
        setCustomParam: function(key, value) {
            var customParam = storeUtil.getVariable(StoreKeys.CUSTOM_PARAM);
            if (UserStore.isNullorEmpty(customParam)) {
                customParam = {};
            }
            if (!UserStore.isNullorEmpty(key)) {
                customParam["" + key] = value;
                storeUtil.setVariable(StoreKeys.CUSTOM_PARAM, customParam);
            }
        },
        setDeviceInfo: function(deviceInfo) {
            storeUtil.setItem(StoreKeys.DEVICE_INFO, deviceInfo);
        },
        getDeviceInfo: function() {
            var customParam = storeUtil.getItem(StoreKeys.DEVICE_INFO);
            return customParam;
        },
        //Utility function to set item in konyStore
        setItem: function(key, value) {
            storeUtil.setRawItem(key, value);
        },
        //Utility function to get item from konyStore
        getItem: function(key) {
            return storeUtil.getRawItem(key);
        },
        removeItem: function(key) {
            storeUtil.removeItem(key);
        },
        isNullorEmpty: function(value) {
            if (((value === null) || (value === "null") || (value === "") || (value === undefined))) {
                return true;
            } else {
                return false;
            }
            return false;
        },
        getCachedService: function(key) {
            var cachedServices = storeUtil.getVariable(StoreKeys.CACHED_SERVICES);
            if (UserStore.isNullorEmpty(cachedServices)) return "";
            else return cachedServices["" + key];
        },
        setCachedService: function(key, value) {
            var cachedServices = storeUtil.getVariable(StoreKeys.CACHED_SERVICES);
            if (UserStore.isNullorEmpty(cachedServices)) {
                cachedServices = {};
            }
            if (!UserStore.isNullorEmpty(key)) {
                cachedServices["" + key] = value;
                storeUtil.setVariable(StoreKeys.CACHED_SERVICES, cachedServices);
            }
        },
        clearCachedServices: function() {
            storeUtil.removeVariable(StoreKeys.CACHED_SERVICES);
        },
        storeRecentProductDetails: function(ProductDetails) {
            storeUtil.setItem(StoreKeys.PRODUCT_DETAILS, ProductDetails);
        },
        clearRecentProductDetails: function() {
            storeUtil.removeItem(StoreKeys.PRODUCT_DETAILS);
        },
        getRecentProductDetails: function() {
            var ProductDetails = storeUtil.getItem(StoreKeys.PRODUCT_DETAILS);
            if (UserStore.isNullorEmpty(ProductDetails)) return "";
            else return ProductDetails;
        },
    };
    return UserStore;
});