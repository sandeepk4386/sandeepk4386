define(function() {
    var UserStore = require("UserStore");
    var ErrorCodes = require("ErrorCodes");
    var Utils = require("UtilsCL");
    var deviceUtil = {
        featureTags: {
            'show_login': 'Nav: User Login View',
            'submit_login': 'Act: Submit User Login',
            'fail_login': 'Err: Invalid User Login',
            'more': 'Nav: More',
            'logout': 'Act: Logout'
        },
        getAppId: function() {
            return appConfig.appId;
        },
        getAppVersion: function() {
            return appConfig.appVersion;
        },
        getDeviceCategory: function() {
            return deviceUtil.processDeviceCategory();
        },
        getDeviceVersion: function() {
            return deviceUtil.deviceInfo.version;
        },
        getDeviceModel: function() {
            return deviceUtil.deviceInfo.model;
        },
        getDeviceId: function() {
            return deviceUtil.deviceInfo.deviceid;
        },
        getAppType: function() {
            return G_APP_TYPE;
        },
        isMobile: function() {
            var flag = true;
            return flag;
        },
        isTablet: function() {
            var flag = false;
            return flag;
        },
        isiOS: function() {
            var flag = false;
            return flag;
        },
        isAndroid: function() {
            var flag = false;
            flag = true;
            return flag;
        },
        isWindows: function() {
            var flag = false;
            return flag;
        },
        isiPhone: function() {
            var flag = false;
            return flag;
        },
        isAndroidPhone: function() {
            var flag = false;
            flag = true;
            return flag;
        },
        isWindowsPhone: function() {
            var flag = false;
            return flag;
        },
        isiPad: function() {
            var flag = false;
            return flag;
        },
        isAndroidTab: function() {
            var flag = false;
            return flag;
        },
        isWindowsTab: function() {
            var flag = false;
            return flag;
        },
        isDragnDrop: function() {
            return false;
        },
        inited: false,
        deviceInfo: {},
        init: function() {
            if (!deviceUtil.inited) {
                deviceUtil.inited = true;
                deviceUtil.deviceInfo = kony.os.deviceInfo();
            }
        },
        processDeviceCategory: function() {
            var deviceCategory = deviceUtil.deviceInfo.name;
            if (((kony.string.equalsIgnoreCase(deviceCategory, "iPod touch")) || (kony.string.equalsIgnoreCase(deviceCategory, "iPhone Simulator")))) {
                deviceCategory = "iPhone";
            }
            if ((kony.string.equalsIgnoreCase(deviceCategory, "iPad Simulator"))) {
                deviceCategory = "iPad";
            }
            if ((kony.string.equalsIgnoreCase(deviceCategory, "android")) && !deviceUtil.isMobile()) {
                deviceCategory = "tabletandroid";
            }
            if ((kony.string.equalsIgnoreCase(deviceCategory, "android")) && deviceUtil.isMobile()) {
                deviceCategory = "android";
            }
            return deviceCategory;
        },
        getDeviceWidth: function() {
            return deviceUtil.deviceInfo.screenHeight;
        },
        /**
         * @desc Checks the biometric type available
         */
        checkBiometric: function() {
            try {
                if ((kony.os.deviceInfo().name).toLowerCase() == "iphone") {
                    switch (kony.localAuthentication.getBiometryType()) {
                        case constants.BIOMETRY_TYPE_NONE:
                            return false;
                            break;
                        case constants.BIOMETRY_TYPE_TOUCHID:
                            return false;
                            break;
                        case constants.BIOMETRY_TYPE_FACEID:
                            return true;
                            break;
                        case constants.BIOMETRY_TYPE_UNDEFINED:
                            return false;
                            break;
                    }
                } else return false;
            } catch (exception) {
                var message = kony.i18n.getLocalizedString("i18n.VerifyBiometricSupport.text") + ErrorCodes.SUPPORT_CHECK;
                kony.print("Exception in checkBiometric : " + exception);
            }
        },
    };
    return deviceUtil;
});