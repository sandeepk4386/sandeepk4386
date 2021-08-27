define("com/clorox/Login/userLoginController", function() {
    var Utils = require("UtilsCL");
    var deviceUtil = require("DeviceUtil");
    var GlobalServices = require("GlobalServices");
    constants.USER_PREFERENCE = "USER PREFERENCE";
    var startTime = null;
    var endTime = null;
    var isLoginPersisted = false;
    var currentLocale = null;
    var isLoginPageLoaded = false;
    var createLoginID = false;
    var biometricUpdated = false;
    var isInvokeLogin = false;
    var loginRef;
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            loginRef = this;
            this.view.preShow = this.preShow;
            this.view.postShow = this.postShow;
            this.view.btnLogin.onClick = this.onClickLogin;
            this.view.btnyes.onClick = this.onClickYes;
            this.view.btnNo.onClick = this.onClickNo;
            this.view.flxBiometric.onClick = this.onClickBiometrics;
            this.view.flxTouchIDPop.onClick = this.hideTouchID;
            this.setDeviceScreen();
        },
        /**
         * @function initGettersSetters
         * @description contains getters/setters for custom properties
         */
        initGettersSetters: function() {
            defineSetter(this, "identityServiceID", function(val) {
                this._identityServiceID = CloroxID.identityServiceID;
            });
            defineGetter(this, "identityServiceID ", function() {
                return this._identityServiceID;
            });
            defineSetter(this, "localAuthRequired", function(val) {
                this._localAuthRequired = val;
            });
            defineGetter(this, "localAuthRequired ", function() {
                return this._localAuthRequired;
            });
            defineSetter(this, "cloroxIDLoginUI", function(val) {
                this._cloroxIDLoginUI = val;
            });
            defineGetter(this, "cloroxIDLoginUI ", function() {
                return this._cloroxIDLoginUI;
            });
            defineSetter(this, "deepLinkURL", function(val) {
                this._deepLinkURL = CloroxID.deepLinkSchema;
            });
            defineGetter(this, "deepLinkURL ", function() {
                return this._deepLinkURL;
            });
        },
        onClickYes: function() {
            try {
                this.isLoginPersisted = true;
                this.view.flxAndroidTouchIDPopup.isVisible = false;
                kony.store.setItem('isUserBioMetricEnabled', true);
                if (!kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                    var currForm = kony.application.getCurrentForm();
                    new kony.mvc.Navigation("frmDOSHome").navigate();
                } else {
                    this.fetchDOSHomeData();
                }
            } catch (exception) {
                kony.print("Exception in onClickYes :: " + exception);
            }
        },
        hideTouchID: function() {
            this.view.flxTouchIDPop.isVisible = false;
        },
        onClickNo: function() {
            try {
                this.isLoginPersisted = false;
                this.view.flxAndroidTouchIDPopup.isVisible = false;
                kony.store.setItem('isUserBioMetricEnabled', false);
                if (!kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                    new kony.mvc.Navigation("frmDOSHome").navigate();
                } else {
                    this.fetchDOSHomeData();
                }
            } catch (exception) {
                kony.print("Exception in onClickNo :: " + exception);
            }
        },
        preShow: function() {
            try {
                isDeviceBiometricSupported = this.checkBiometricSupport();
            } catch (exception) {
                kony.print("Exception in applyBindings :: " + exception);
            }
        },
        postShow: function() {
            try {
                this.view.flxHome.isVisible = true;
                if (!isDeviceBiometricSupported) {
                    kony.store.setItem('isUserBioMetricEnabled', false);
                }
                if (isDeviceBiometricSupported && kony.store.getItem('isUserBioMetricEnabled')) {
                    var type = this.getBiometryTypeOfDevice();
                    this.view.tapToLoginSymbol.isVisible = true;
                    this.view.tapToLoginText.isVisible = true;
                    this.view.flxBiometric.isVisible = true;
                    if (type !== undefined && type !== null) this.view.tapToLoginText.text = type;
                } else {
                    this.view.flxBiometric.isVisible = false;
                    isInvokeLogin = true;
                }
            } catch (exception) {
                kony.print("Exception in applyBindings :: " + exception);
            }
        },
        bioMetricOptions: function() {
            this.view.tapToLoginSymbol.text = "d";
            this.view.tapToLoginText.text = "Tap to login using Face ID";
        },
        setDeviceScreen: function() {
            try {
                if (deviceUtil.isTablet()) {
                    this.view.btnLogin.top = "5%";
                    this.view.btnLogin.width = "30%";
                    this.view.tapToLoginText.top = "-1%";
                    this.view.tapToLoginText.skin = "sknLblFontWhite114";
                } else if (deviceUtil.isMobile()) {
                    this.view.btnLogin.width = "50%";
                    this.view.tapToLoginSymbol.width = "40%";
                    this.view.tapToLoginSymbol.height = "40%";
                    this.view.btnLogin.top = "5%";
                    this.view.tapToLoginText.skin = "sknLblFontWhite85";
                }
            } catch (exception) {
                kony.print("Exception in setDeviceScreen :: " + exception);
            }
        },
        onClickLogin: function() {
            try {
                if (Utils.isNetworkAvailable()) {
                    if (gblIsFabricInitilised) {
                        if (!isInvokeLogin) {
                            this.displayLoginUI();
                        } else {
                            this.invokeLogin();
                            this.displayLoginUI();
                        }
                    } else {
                        Utils.showLoadingIndicator();
                        var successCallback;
                        if (gblAppConfig !== null) {
                            successCallback = this.onClickLogin;
                        } else {
                            successCallback = this.fetchAppUpgradeData;
                        }
                        GlobalServices.initialiseMobileFabric(successCallback);
                    }
                }
            } catch (exception) {
                kony.print("Exception in onClickLogin :: " + exception);
                Utils.hideLoadingIndicator();
            }
        },
        fetchAppUpgradeData: function() {
            try {
                var inputParam = {};
                GlobalServices.callIntegrationServices(AppUpgrade.serviceName, AppUpgrade.fetchUpgradeData, this.appUpgradeSuccessCallBack, inputParam, false, true, this.appUpgradeFailureCallBack);
            } catch (exception) {
                kony.print("Inside fetchAppUpgradeData error ::" + JSON.stringify(exception));
                Utils.hideLoadingIndicator();
            }
        },
        appUpgradeSuccessCallBack: function(res) {
            try {
                gblAppConfig = res;
                if (!Utils.isNullorEmpty(res.UpgradeInfo)) {
                    gblEnableNavGuide = res.UpgradeInfo[AppConstants.ENABLE_TUTORIAL];
                    isShareIconEnable = res.UpgradeInfo[AppConstants.COLLABORATION];
                }
                this.checkVersions();
            } catch (exception) {
                kony.print("Exception in appUpgradeSuccessCallBack :: " + JSON.stringify(exception));
                Utils.hideLoadingIndicator();
            }
        },
        appUpgradeFailureCallBack: function(error) {
            Utils.hideLoadingIndicator();
            try {
                gblAppConfig = null;
                kony.print("Inside appUpgradeFailureCallBack :: " + JSON.stringify(error));
            } catch (exception) {
                kony.print("Exception in appUpgradeFailureCallBack :: " + JSON.stringify(exception));
                Utils.hideLoadingIndicator();
            }
        },
        checkVersions: function() {
            try {
                var currentVersion = deviceUtil.getAppVersion();
                if (!Utils.isNullorEmpty(gblAppConfig)) {
                    var minimumVersion = gblAppConfig.UpgradeInfo[AppConstants.MINIMUM_REQUIRED_VERSION_ANDROID];
                    var latestVersion = gblAppConfig.UpgradeInfo[AppConstants.LATEST_VERSION_ANDROID];
                    if (deviceUtil.isAndroid()) {
                        this.upgradeURL = gblAppConfig.UpgradeInfo[AppConstants.PLAY_STORE_URL];
                        minimumVersion = gblAppConfig.UpgradeInfo[AppConstants.MINIMUM_REQUIRED_VERSION_ANDROID] + "";
                        latestVersion = gblAppConfig.UpgradeInfo[AppConstants.LATEST_VERSION_ANDROID] + "";
                    } else if (deviceUtil.isiPhone()) {
                        this.upgradeURL = gblAppConfig.UpgradeInfo[AppConstants.APP_STORE_URL];
                        minimumVersion = gblAppConfig.UpgradeInfo[AppConstants.MINIMUM_REQUIRED_VERSION_IOS] + "";
                        latestVersion = gblAppConfig.UpgradeInfo[AppConstants.LATEST_VERSION_IOS] + "";
                    }
                    kony.print("currentVersion : " + currentVersion + " :: minimumVersion :: " + minimumVersion + " :: latestVersion ::" + latestVersion);
                    var a = currentVersion.split('.').map(n => +n + 100).join('.');
                    var b = minimumVersion.split('.').map(n => +n + 100).join('.');
                    var c = latestVersion.split('.').map(n => +n + 100).join('.');
                    kony.print("a : " + a + " :: b ::" + b + " :: c ::" + c);
                    if (a < b) {
                        this.showUpgradePopup(true);
                    } else if (a < c) {
                        this.showUpgradePopup(false);
                    } else {
                        //this.invokeIdentityService();
                        if (!isInvokeLogin) {
                            this.displayLoginUI();
                        } else {
                            this.invokeLogin();
                            this.displayLoginUI();
                        }
                    }
                }
            } catch (e) {
                kony.print("Exception in checkVersions" + e);
            }
        },
        showUpgradePopup: function(isMandatory) {
            this.view.GenericError.appUpgrade(isMandatory);
        },
        onClickBiometrics: function() {
            try {
                Utils.hideLoadingIndicator();
                var biometricsSupported = this.checkBiometricSupport();
                var isEnabledBioMetric = kony.store.getItem('isUserBioMetricEnabled');
                if (Utils.isNetworkAvailable()) {
                    if (gblIsFabricInitilised) {
                        if (Utils.isNullorEmpty(this.isLoginPersisted)) {
                            var authorizationClient = this.getSDKClient();
                            this.isLoginPersisted = authorizationClient.usePersistedLogin();
                        }
                    } else {
                        LoginReference.view.loadingIndicator.isVisible = true;
                        GlobalServices.initialiseMobileFabric(LoginReference.fetchAppUpgradeData);
                    }
                    if (!biometricsSupported) {
                        var status = this.checkTouchIDSupport();
                    } else if (this.isLoginPersisted && isEnabledBioMetric) {
                        this.isUserLoggedin(true);
                    }
                }
            } catch (e) {
                kony.print("Exception in checkBiometrics " + e);
            }
        },
        displayLoginUI: function() {
            try {
                this.view.flxHome.isVisible = false;
                this.view.flxIdentity.isVisible = true;
                this.view.loginOAuth2Browser.onFailure = this.loginBrowserFailureEventCallback.bind(this);
                Utils.hideLoadingIndicator();
            } catch (e) {
                kony.print("Exception in displayUI " + e);
            }
        },
        handleOAuthBrowser: function(browser, params) {
            var originalURL = params.originalURL;
            //This needs to be check with given redirect url as part of OAuth2.0 policy
            return false;
        },
        loginBrowserFailureEventCallback: function(browser, error) {
            kony.print("error code::" + JSON.stringify(error));
        },
        invokeLogin: function() {
            try {
                if (!Utils.isNetworkAvailable()) {
                    this.resetPosition();
                    return;
                }
                var authorizationClient = this.getSDKClient();
                var options = {};
                if (this.view.brwsrCreateLoginID && this.createLoginID) {
                    options.browserWidget = this.view.brwsrCreateLoginID;
                    this.createLoginID = false;
                } else {
                    if (!this.view.loginOAuth2Browser) {
                        this.view.flxIdentity.add(new kony.ui.Browser({
                            "id": "loginOAuth2Browser",
                            "left": "0dp",
                            "top": "0dp",
                            "width": "100%",
                            "height": "100%",
                            "zIndex": 7,
                            "isVisible": true,
                            "showProgressIndicator": false
                        }, {}, {
                            "browserType": constants.BROWSER_TYPE_WKWEBVIEW,
                        }));
                        this.view.loginOAuth2Browser.onSuccess = this.browserLoadOnSuccess;
                    }
                    options.browserWidget = this.view.loginOAuth2Browser;
                }
                var customQueryParamsForOAuth = {};
                customQueryParamsForOAuth.amw_lng = this.currentLocale;
                this.isLoginPageLoaded = false;
                this.biometricUpdated = true;
                var loginOptions = {};
                let isRefreshTokenEnabled = true;
                loginOptions.isSSOEnabled = false;
                loginOptions.enable_refresh_login = true;
                loginOptions.persistLoginResponse = true;
                loginOptions.continueOnRefreshError = true;
                loginOptions.customQueryParamsForOAuth = customQueryParamsForOAuth;
                options.loginOptions = loginOptions;
                options["retain_backend_refresh_token"] = true;
                authorizationClient.login(options, this.successWrapper.bind(this), this.failureWrapper.bind(this));
            } catch (e) {
                kony.print("Exception in invokelogin " + e);
            }
        },
        browserLoadOnSuccess: function() {
            this.isLoginPageLoaded = true;
        },
        /**
         * @function invokeIdentityService
         * @description Invokes identity service provided by the user
         * @public
         */
        invokeIdentityService: function() {
            startTime = new Date().getTime();
            try {
                var authorizationClient = this.getSDKClient();
                //check for refreshToken
                this.isLoginPersisted = authorizationClient.usePersistedLogin();
                if (this.isLoginPersisted && kony.store.getItem('isUserBioMetricEnabled')) {
                    isInvokeLogin = true;
                    this.isUserLoggedin(false);
                } else {
                    isInvokeLogin = false;
                    this.invokeLogin();
                }
            } catch (exception) {
                kony.print("Exception in invokeIdentityService :: " + JSON.stringify(exception));
                kony.application.dismissLoadingScreen();
                Utils.hideLoadingIndicator();
                this.resetPosition();
                this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.ServerError.text"));
            }
        },
        /**
         * @function successWrapper
         * @description Success callback for invokeIdentityService
         * @private
         * @param {Object} response
         * @callback invokeIdentityServiceCallback
         * @event loginSuccessEvent
         */
        successWrapper: function(response) {
            Utils.hideLoadingIndicator();
            endTime = new Date().getTime();
            try {
                if (this.view.loginOAuth2Browser) {
                    this.view.flxIdentity.remove(this.view.loginOAuth2Browser);
                }
                if (this._cloroxIDLoginUI && this._localAuthRequired === constants.USER_PREFERENCE) {
                    this.storeBiometricInfo(1);
                } else if (!this._cloroxIDLoginUI && this._localAuthRequired === constants.USER_PREFERENCE) {
                    this.storeBiometricInfo();
                }
                var authorizationClient = this.getSDKClient();
                authorizationClient.getSecurityAttributes(response1 => {
                    this.decodeAccessToken({
                        params: response1
                    });
                }, e => {
                    this.view.flxLogin.isVisible = true;
                    this.view.flxHome.isVisible = true;
                    this.view.flxIdentity.isVisible = false;
                    this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.SessionExpired.error"));
                });
            } catch (exception) {
                var message = kony.i18n.getLocalizedString("i18n.clorox.appNotResponding") + ErrorCodes.OBJECT_NOT_FOUND;
                kony.print("Exception in successWrapper :: " + exception);
            }
        },
        storeBiometricInfo: function() {
            try {
                var index = null;
                let biometricStoreKey = this._identityServiceID + "_Biometric";
                if (kony.sdk.isNullOrUndefined(index) || index === 1) {
                    kony.store.removeItem(biometricStoreKey);
                } else {
                    kony.store.setItem(biometricStoreKey, true);
                }
            } catch (exception) {
                kony.print("Exception in storeBiometricInfo :: " + JSON.stringify(exception));
            }
        },
        getBiometricInfo: function() {
            try {
                if (isDeviceBiometricSupported) {
                    let biometricStoreKey = this._identityServiceID + "_Biometric";
                    let keyValue = "true";
                    if (kony.sdk.isNullOrUndefined(keyValue)) {
                        return false;
                    } else {
                        return keyValue;
                    }
                } else {
                    return false;
                }
            } catch (e) {
                kony.print("Exception in getBiometricInfo " + e);
            }
        },
        /**
         * @function failureWrapper
         * @description Failure callback for invokeIdentityService
         * @private
         * @param {Object} response
         * @callback invokeIdentityServiceCallback
         * @event loginFailureEvent
         */
        failureWrapper: function(response) {
            Utils.hideLoadingIndicator();
            this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.LoginFailed.text") + ErrorCodes.LOGIN_ID_OAUTH);
            this.retryLogin();
            this.disableLoginUI();
        },
        getBackendToken: function() {
            try {
                if (!Utils.isNetworkAvailable()) {
                    this.resetPosition();
                    return;
                }
                Utils.showLoadingIndicator();
                var options = {
                    "requestParams": {
                        "refresh": "true"
                    }
                };
                var forceFromServer = true;
                var authorizationClient = this.getSDKClient();
                //If forceFromServer is true, then the SDK fetches the token from the server. If forceFromServer is false, then the SDK gives you the token present in localStorage
                authorizationClient.getBackendToken(forceFromServer, options, this.backendTokenSuccessCallback.bind(this), this.getBackendToeknFailureCallback.bind(this));
            } catch (e) {
                kony.print("Exception in getBackendToken " + e);
            }
        },
        decodeAccessToken: function(responseObj) {
            try {
                var _this = this;
                var params = responseObj.params;
                let a2b = (a) => {
                    var b, c, d, e = {},
                        f = 0,
                        g = 0,
                        h = "",
                        i = String.fromCharCode,
                        j = a.length;
                    for (b = 0; 64 > b; b++) e["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b)] = b;
                    for (c = 0; j > c; c++)
                        for (b = e[a.charAt(c)], f = (f << 6) + b, g += 6; g >= 8;)((d = 255 & f >>> (g -= 8)) || j - 2 > c) && (h += i(d));
                    return h;
                };
                let decodedValue;
                let response = {};
                decodedValue = a2b(params.id_token.split('.')[1]);
                response.userProfile = JSON.parse(decodedValue);
                if (response.userProfile !== undefined && response.userProfile !== null) {
                    kony.print("@@@ response.userProfile:: " + response.userProfile);
                    gblPartyName = response.userProfile.name;
                    gblPartyEmail = response.userProfile.email;
                    kony.setUserID(gblPartyEmail);
                    var userCheck = "";
                    if (kony.store.getItem("userName")) {
                        userCheck = kony.store.getItem("userName").toLowerCase();
                    }
                    var accessToken = params.access_token;
                    kony.store.setItem("accessToken", accessToken);
                    var feedBack = kony.store.getItem("isUserDisableFeedback");
                    if (feedBack === null || userCheck !== gblPartyName.toLocaleLowerCase()) {
                        kony.store.setItem("isUserDisableFeedback", true);
                    }
                    var CheckedToggle = kony.store.getItem("CheckedToggle");
                    if (CheckedToggle === null || userCheck !== gblPartyName.toLocaleLowerCase()) {
                        kony.store.setItem("CheckedToggle", true);
                    }
                    isFeedbackEnable = kony.store.getItem("isUserDisableFeedback");
                    var isEnabledBioMetric = kony.store.getItem('isUserBioMetricEnabled');
                    var sessionValue = 0;
                    if (gblAppConfig.UpgradeInfo) {
                        sessionValue = gblAppConfig.UpgradeInfo[AppConstants.APP_SESSION_TIMEOUT];
                        kony.application.registerForIdleTimeout(parseInt(sessionValue), sessionErorrPopUp);
                    }
                    if (isEnabledBioMetric !== undefined && isEnabledBioMetric !== null && isEnabledBioMetric && userCheck === gblPartyName.toLocaleLowerCase()) {
                        this.fetchDOSHomeData();
                    } else {
                        if (isDeviceBiometricSupported && (!isEnabledBioMetric || userCheck !== gblPartyName.toLocaleLowerCase())) {
                            this.view.flxAndroidTouchIDPopup.isVisible = true;
                        } else {
                            this.fetchDOSHomeData();
                        }
                    }
                    this.view.flxIdentity.isVisible = false;
                }
            } catch (exception) {
                kony.print("Exception in decodeAccessToken :: " + exception);
                Utils.hideLoadingIndicator();
            }
        },
        /**
         * @function backendTokenSuccessCallback
         * @description backend token success callback event.
         * @private
         * @param {object} response
         * @callback backendTokenSuccessCallback
         */
        backendTokenSuccessCallback: function(response) {
            try {
                if (Object.keys(response.params).length !== 0) {
                    this.decodeAccessToken(response);
                } else {
                    var authorizationClient = this.getSDKClient();
                    authorizationClient.getSecurityAttributes(response1 => {
                        this.decodeAccessToken({
                            params: response1
                        });
                    }, e => {
                        this.view.flxLogin.isVisible = true;
                        this.view.flxHome.isVisible = true;
                        this.view.flxIdentity.isVisible = false;
                        this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.SessionExpired.error"));
                    });
                }
            } catch (exception) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in getBackendToeknFailureCallback :: " + exception);
            }
        },
        /**
         * @function getBackendToeknFailureCallback
         * @description back end token failure call back event.
         * @private
         * @param {object} response
         * @callback getBackendToeknFailureCallback
         */
        getBackendToeknFailureCallback: function(response) {
            try {
                this.refreshToken();
            } catch (exception) {
                Utils.hideLoadingIndicator();
                var message = kony.i18n.getLocalizedString("i18n.clorox.appNotResponding") + ErrorCodes.OBJECT_NOT_FOUND;
                kony.print("Exception in getBackendToeknFailureCallback :: " + exception);
            }
        },
        dismissGenericErrorPopup: function() {
            var currFrm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currFrm)) {
                currFrm.flxGenericError.setVisibility(false);
            }
        },
        refreshToken: function() {
            try {
                var options = {};
                var loginOptions = {};
                loginOptions.isSSOEnabled = false;
                loginOptions.enable_refresh_login = true;
                loginOptions.persistLoginResponse = true;
                loginOptions.continueOnRefreshError = true;
                options.loginOptions = loginOptions;
                options["retain_backend_refresh_token"] = true;
                var authorizationClient = this.getSDKClient();
                authorizationClient.refreshLogin(function(res) {
                    kony.print("refreshLogin SuccessCallback :: " + JSON.stringify(res));
                    authorizationClient.getSecurityAttributes(response1 => {
                        kony.print("refreshLogin getSecurityAttributes SuccessCallback :: " + JSON.stringify(response1));
                        loginRef.decodeAccessToken({
                            params: response1
                        });
                    }, e => {
                        kony.print("refreshLogin getSecurityAttributes errorCallback :: " + JSON.stringify(e));
                        loginRef.displayRefreshError(e);
                    });
                }, function(err) {
                    kony.print("refreshLogin errorCallback :: " + JSON.stringify(err));
                    loginRef.displayRefreshError(err);
                }, options);
            } catch (e) {
                kony.print("Exception in refreshToken " + e);
            }
        },
        displayRefreshError: function(error) {
            var message = kony.i18n.getLocalizedString("i18n.LoginFailed.text");
            Utils.hideLoadingIndicator();
            var currForm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)) {
                currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"), message, kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup);
                currForm.flxGenericError.setVisibility(true);
            }
            gblIsLoginPesisted = false;
            isInvokeLogin = true;
            loginRef.view.flxBiometric.isVisible = false;
            loginRef.view.forceLayout();
            loginRef.onClickLogin();
        },
        getSDKClient: function() {
            try {
                var authorizationClient = null;
                var sdkClient = KNYMobileFabric;
                kony.print("_identityServiceID ::" + this._identityServiceID);
                if (kony.sdk.isNullOrUndefined(sdkClient)) {
                    sdkClient = new kony.sdk();
                }
                if (Object.keys(sdkClient).length != 0) {
                    authorizationClient = sdkClient.getIdentityService(this._identityServiceID);
                }
                if (kony.sdk.isNullOrUndefined(authorizationClient)) {
                    kony.application.dismissLoadingScreen();
                    kony.print("error Identity service---");
                    return;
                }
                return authorizationClient;
            } catch (exception) {
                kony.print("Exception in getSDKClient :: " + JSON.stringify(exception));
            }
        },
        /**
         * @function getLocale
         * @description get the app locale and if the locale is not defined return the default locale.
         * @private
         * @return {string} locale
         */
        getLocale: function() {
            try {
                var locale = kony.i18n.getCurrentLocale();
                if (kony.sdk.isNullOrUndefined(locale)) {
                    locale = this._defaultLocale;
                } else {
                    locale = locale.replace("_", "-").toLowerCase();
                    if (locale.startsWith("en")) {
                        this._defaultLocale = "en_US";
                    } else if (locale.startsWith("es")) {
                        this._defaultLocale = "es_US";
                    } else if (locale.startsWith("fr")) {
                        this._defaultLocale = "fr_CA";
                    }
                }
                return locale;
            } catch (exception) {
                kony.print("Exception in getLocale :: " + JSON.stringify(exception));
            }
        },
        /**
         * @function checkBiometricSupport
         * @description checking device supports biometric or not for custom login UI
         * @private
         * @return {boolean} true/false
         */
        checkBiometricSupport: function() {
            try {
                var status = parseInt(kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID).toString());
                if (status == 5000 || status == 5009) {
                    gblBiometricSupport = true;
                    return true;
                }
                return false;
            } catch (exception) {
                kony.print("Exception in checkBiometricSupport :: " + exception);
            }
        },
        /**
         * @function checkTouchIDSupport
         * @description This function is used to check touch id support and invoke touch for default UI
         * @private
         * @return {boolean} true/false
         */
        checkTouchIDSupport: function() {
            try {
                var deviceType = "";
                var i18nStr = "";
                var i18nString = "";
                if (deviceUtil.isiOS()) {
                    switch (kony.localAuthentication.getBiometryType()) {
                        case constants.BIOMETRY_TYPE_NONE:
                            deviceType = "none";
                            break;
                        case constants.BIOMETRY_TYPE_TOUCHID:
                            deviceType = "touchId";
                            i18nStr = ErrorCodes.TOUCH_ID_DISABLED_IN_SETTINGS;
                            i18nString = ErrorCodes.DEVICE_NOT_SUPPORT_TOUCH_ID;
                            break;
                        case constants.BIOMETRY_TYPE_FACEID:
                            deviceType = "faceId";
                            i18nStr = ErrorCodes.FACE_ID_DISABLED_IN_SETTINGS;
                            i18nString = ErrorCodes.DEVICE_NOT_SUPPORT_FACEID;
                            break;
                        case constants.BIOMETRY_TYPE_UNDEFINED:
                            deviceType = "undefined";
                            break;
                    }
                } else if (deviceUtil.isAndroid()) {
                    deviceType = "fingerPrint";
                    i18nStr = ErrorCodes.FINGER_PRINT_DISABLED_IN_SETTINGS;
                    i18nString = ErrorCodes.DEVICE_NOT_SUPPORT_FINGER_PRINT;
                }
                status = parseInt(kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID).toString());
                if (status == 5000) {
                    return true;
                } else if (status == 5005) {
                    this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.5005.error"));
                } else if (status == 5006) {
                    this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.5006.error"));
                } else if (status == 5007) {
                    this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.5007.error"));
                } else if (status == 5008) {
                    this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.5008.error"));
                } else {
                    if (deviceType === "faceId") this.displayErrorMessage(kony.i18n.getLocalizedString("i18.FaceId.error") + status);
                    else this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.Touch.error") + status);
                }
                return false;
            } catch (exception) {
                Utils.hideLoadingIndicator();
                var message = kony.i18n.getLocalizedString("i18n.VerifyBiometricSupport.text") + ErrorCodes.SUPPORT_CHECK;
                kony.print("Exception in checkTouchIDSupport :: " + exception);
            }
        },
        androidBiometricPopup: function(isLocalAuthFailed, status) {
            try {
                if (this._cloroxIDLoginUI) {
                    var deviceType = "";
                    var i18nStr = "";
                    var i18nString = "";
                    this.view.left = "0%";
                    this.view.top = "0%";
                    this.view.width = "100%";
                    this.view.height = "100%";
                    this.view.flxIdentity.isVisible = false;
                    if (isLocalAuthFailed) {
                        this.view.btnNo.text = kony.i18n.getLocalizedString("i18n.clorox.cancel");
                        if (status == 5004) {
                            this.view.lblDescription.text = kony.i18n.getLocalizedString("i18n.5004.error") + ErrorCodes.TOO_MANY_ATTEMPTS;
                            this.view.btnNo.isVisible = true;
                        } else if (status == 5006) {
                            this.view.lblDescription.text = Utils.formatDeviceText(kony.i18n.getLocalizedString("i18n.5006.error") + i18nStr, deviceType);
                            this.view.btnNo.isVisible = true;
                        } else if (status == 5011) {
                            this.view.lblDescription.text = kony.i18n.getLocalizedString("i18n.5011.error") + ErrorCodes.FINGER_PRINT_NOT_MATCHING_FIVE_TIMES;
                            this.view.btnyes.isVisible = false;
                            this.view.btnNo.isVisible = true;
                        } else {
                            this.view.lblDescription.text = kony.i18n.getLocalizedString("i18n.clorox.tryAgain");
                            this.view.btnNo.isVisible = true;
                            this.view.btnyes.isVisible = false;
                        }
                        this.view.lblDescription.text = kony.i18n.getLocalizedString("i18n.clorox.tryAgain");
                        this.view.btnNo.isVisible = true;
                    }
                } else {
                    if (this.displayAndroidPopup !== null && this.displayAndroidPopup !== undefined) {
                        this.displayAndroidPopup(isLocalAuthFailed, status);
                    }
                }
            } catch (exception) {
                kony.print("Exception in androidBiometricPopup :: " + exception);
            }
        },
        /**
         * @function checkAndValidateTouch
         * @description This function is used to invoke touch
         * @private
         */
        checkAndValidateTouch: function() {
            try {
                var configMap = {
                    "promptMessage": kony.i18n.getLocalizedString("i18.clorox.loginUisngFingerPrint"),
                    "fallbackTitle": kony.i18n.getLocalizedString("i18.clorox.ok"),
                    "subTitle": "",
                    "deviceCredentialAllowed": true,
                    "confirmationRequired": true,
                    "negativeButtonText": "Back"
                };
                kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.touchAuthenticationCallback.bind(this), configMap);
                this.view.forceLayout();
            } catch (exception) {
                Utils.hideLoadingIndicator();
                var message = kony.i18n.getLocalizedString("i18n.clorox.appNotResponding") + ErrorCodes.OBJECT_NOT_FOUND;
                kony.print("Exception in checkAndValidateTouch :: " + exception);
            }
        },
        /**
         * @function getBiometryTypeOfDevice
         * @description This function is used to determine which tyfe of bimetric system supported by device.
         * @private
         **/
        getBiometryTypeOfDevice: function() {
            try {
                var promptMessage = ""; //kony.i18n.getLocalizedString("i18.clorox.Signin.text");
                switch (kony.localAuthentication.getBiometryType()) {
                    case constants.BIOMETRY_TYPE_NONE:
                        promptMessage = kony.i18n.getLocalizedString("i18n.TouchNotSupport.error");
                        break;
                    case constants.BIOMETRY_TYPE_TOUCHID:
                        promptMessage += kony.i18n.getLocalizedString("i18.clorox.TouchID.text");
                        this.view.tapToLoginSymbol.text = kony.i18n.getLocalizedString("i18.clorox.LoginBioMetricSymbol");
                        break;
                    case constants.BIOMETRY_TYPE_FACEID:
                        promptMessage += kony.i18n.getLocalizedString("i18n.clorox.FaceID.text");
                        this.view.tapToLoginSymbol.text = kony.i18n.getLocalizedString("i18.clorox.FaceIdSymbol");
                        this.view.tapToLoginSymbol.skin = "sknLblBG0ac7c2F600";
                        this.view.tapToLoginText.top = "15dp";
                        break;
                    case constants.BIOMETRY_TYPE_UNDEFINED:
                        promptMessage = kony.i18n.getLocalizedString("i18n.TouchNotSupport.error");
                        break;
                }
                return promptMessage;
            } catch (exception) {
                kony.print("Exception in getBiometryTypeOfDevice :: " + exception);
            }
        },
        /**
         * @function touchAuthenticationCallback
         * @description Callback function for touch id
         * @private
         * @param {string} status
         * @param {string} message
         */
        touchAuthenticationCallback: function(status, message) {
            try {
                var deviceType = "";
                var i18nStr = "";
                var i18nString = "";
                if (deviceUtil.isiOS()) {
                    switch (kony.localAuthentication.getBiometryType()) {
                        case constants.BIOMETRY_TYPE_NONE:
                            deviceType = "none";
                            break;
                        case constants.BIOMETRY_TYPE_TOUCHID:
                            deviceType = "touchId";
                            i18nStr = ErrorCodes.TOUCH_ID_DISABLED_IN_SETTINGS;
                            i18nString = ErrorCodes.DEVICE_NOT_SUPPORT_TOUCH_ID;
                            break;
                        case constants.BIOMETRY_TYPE_FACEID:
                            deviceType = "faceId";
                            i18nStr = ErrorCodes.FACE_ID_DISABLED_IN_SETTINGS;
                            i18nString = ErrorCodes.DEVICE_NOT_SUPPORT_FACEID;
                            break;
                        case constants.BIOMETRY_TYPE_UNDEFINED:
                            deviceType = "undefined";
                            break;
                    }
                } else if (deviceUtil.isAndroid()) {
                    deviceType = "fingerPrint";
                    i18nStr = ErrorCodes.FINGER_PRINT_DISABLED_IN_SETTINGS;
                    i18nString = ErrorCodes.DEVICE_NOT_SUPPORT_FINGER_PRINT;
                }
                endTime = new Date().getTime();
                var deviceType = "";
                if (deviceUtil.isiOS()) {
                    switch (kony.localAuthentication.getBiometryType()) {
                        case constants.BIOMETRY_TYPE_NONE:
                            deviceType = "none";
                            break;
                        case constants.BIOMETRY_TYPE_TOUCHID:
                            deviceType = "touchId";
                            break;
                        case constants.BIOMETRY_TYPE_FACEID:
                            deviceType = "faceId";
                            break;
                        case constants.BIOMETRY_TYPE_UNDEFINED:
                            deviceType = "undefined";
                            break;
                    }
                }
                if (status == 5000) {
                    Utils.showLoadingIndicator();
                    this.getBackendToken();
                } else if (status == 5003) {
                    this.retryLogin();
                } else if (status == 5002) {
                    this.resetPosition();
                } else if (status == 5006) {
                    this.resetPosition();
                    this.displayErrorMessage(Utils.formatDeviceText(kony.i18n.getLocalizedString("i18n.5006.error") + i18nStr, deviceType));
                } else if (status == 5009) {
                    this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.5009.error") + ErrorCodes.FINGER_PRINT_NOT_MATCHING_FIVE_TIMES);
                } else if (status == 5011) {
                    kony.localAuthentication.cancelAuthentication();
                    this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.5011.error") + ErrorCodes.FINGER_PRINT_NOT_MATCHING_FIVE_TIMES);
                } else {
                    Utils.hideLoadingIndicator();
                    this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.LoginFailed.text"));
                }
            } catch (exception) {
                Utils.hideLoadingIndicator();
                var message = kony.i18n.getLocalizedString("i18n.clorox.appNotResponding") + ErrorCodes.OBJECT_NOT_FOUND;
                kony.print("Exception in touchAuthenticationCallback :: " + exception);
            }
        },
        androidLocalAuthenticationFallback: function() {
            this.touchAuthenticationCallback(5003, "Authentication is canceled because the user tapped the negative button.");
        },
        /**
         * @function touchIDCanceledByUser
         * @description Touch ID Authentication canceld by the user
         * @private
         * @callback touchIDCallback
         */
        touchIDCanceledByUser: function() {
            this.resetPosition();
            kony.localAuthentication.cancelAuthentication();
        },
        isUserLoggedin: function(clickLoginReq) {
            try {
                if (this._localAuthRequired === constants.USER_PREFERENCE && this.getBiometricInfo()) {
                    this.invokeTouchID();
                } else if (this._localAuthRequired === constants.USER_PREFERENCE && !this.getBiometricInfo()) {
                    if (clickLoginReq) {
                        this.displayLoginUI();
                    } else {
                        this.invokeLogin();
                    }
                } else {
                    Utils.showLoadingIndicator();
                    this.getBackendToken();
                }
            } catch (e) {
                kony.print("Exception in isUserLoggedin " + e);
            }
        },
        /**
         * @function invokeTouchID
         * @description Helper function for invoking touch id
         * @private
         */
        invokeTouchID: function() {
            try {
                if (this.checkTouchIDSupport()) {
                    this.checkAndValidateTouch();
                } else {
                    this.invokeLogin();
                }
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        /**
         * @function retryLogin
         * @description loading the login webview in the background upon login failure 
         * to avoid the delay to load Login webview with clean cache.
         * @private
         */
        retryLogin: function() {
            Utils.showLoadingIndicator();
            this.resetPosition();
        },
        disableLoginUI: function() {
            try {
                kony.net.clearCookies();
                myBusinessMap.clear();
                chartDataMap.clear();
                metricsOverview = [];
                gblDosDataArray = [];
                dosDataBackHead = [];
                gblIsLoginPesisted = false;
                isInvokeLogin = true;
                if (this.view.loginOAuth2Browser) {
                    this.view.flxIdentity.remove(this.view.loginOAuth2Browser);
                }
                Utils.hideLoadingIndicator();
            } catch (e) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in disableloginUI " + e);
            }
        },
        /**
         * @function resetPosition
         * @description Resets the position of the icon and browser
         * @private
         */
        resetPosition: function() {
            try {
                if (this._cloroxIDLoginUI) {
                    this.view.zIndex = 5;
                    this.view.flxIdentity.isVisible = false;
                    this.view.flxAndroidTouchIDPopup.isVisible = false;
                    this.view.flxError.isVisible = false;
                    this.view.flxHome.isVisible = true;
                } else {
                    let previousValue = this.getBiometricInfo();
                    this.setCustomUIBiometric(previousValue);
                }
                this.view.forceLayout();
                Utils.hideLoadingIndicator();
            } catch (exception) {
                kony.print("Exception in resetPosition :: " + JSON.stringify(exception));
            }
        },
        /**
         * @function displayErrorMessage
         * @description display error message with pop-up message on UI
         * @private
         * @param {Object} message
         */
        displayErrorMessage: function(message) {
            try {
                if (this._cloroxIDLoginUI) {
                    this.view.flxAndroidTouchIDPopup.setVisibility(false);
                    this.view.flxCreateCloroxID.setVisibility(false);
                    this.view.flxHome.setVisibility(true);
                    if (message == kony.i18n.getLocalizedString("i18n.SessionExpired.error")) {
                        // this.view.lblError.width = "50%";
                    } else {
                        //this.view.lblError.width = "80%";  
                    }
                    var currForm = kony.application.getCurrentForm();
                    if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)) {
                        currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"), message, kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissGenericErrorPopup)
                        currForm.flxGenericError.setVisibility(true);
                    }
                } else {
                    if (this.customUIErrorDisplay !== null && this.customUIErrorDisplay !== undefined) {
                        this.customUIErrorDisplay(message);
                    }
                }
            } catch (e) {
                kony.print("Exception in displayErrMsg " + e);
            }
        },
        fetchDOSHomeData: function() {
            try {
                kmsUtil.confirmPushNotifications(); // Push Notifications PopUp Display
                var launchMode = UserStore.getUserParam(StoreKeys.statusBarNotification);
                if (launchMode === undefined || launchMode === "undefined" || launchMode === null || launchMode === "null") {
                    launchMode = false;
                }
                if (launchMode || notificationType) {
                    UserStore.setUserParam(StoreKeys.statusBarNotification, false);
                    if (notificationType === "dos_data_updated" || notificationType === "mtd_orders_vs_ya_index_exceeds" || notificationType === "mtd_shipments_vs_ndf_exceeds") {
                        updateNotificationStatus(pushId);
                        displayUpdates(notificationType);
                    } else {
                        updateNotificationStatus(pushId);
                        new kony.mvc.Navigation("frmNotifications").navigate();
                    }
                } else {
                    this.getDOSHomeData();
                }
            } catch (e) {
                kony.print("Exception in fetchDosData " + e);
            }
        },
        getDOSHomeData: function() {
            try {
                //storing variable for to checking the different users login
                kony.store.setItem("userName", gblPartyName);
                //Object service call to fetch the overview data
                GlobalServices.getOverview({
                    "query": gblDOSHomeQuery
                }, DOS.serviceName, DOS.getOverview, null, this.getOverviewDataSuccess, this.getOverviewDataFailure);
            } catch (e) {
                kony.print("Exception in getDosHomeData " + e);
            }
        },
        //getOverview service success call back
        getOverviewDataSuccess: function(response) {
            try {
                kony.print("inside getOverviewDataSuccess response : " + JSON.stringify(response));
                Utils.hideLoadingIndicator();
                if (!Utils.isNullorEmpty(response) && !Utils.isNullorEmpty(response.records[0]) && !Utils.isNullorEmpty(response.records[0].Common) && !Utils.isNullorEmpty(response.records[0].metric)) {
                    gblIsFirstLevel = true;
                    isAlreadyLoggedIn = true;
                    var nav = new kony.mvc.Navigation("frmDOSHome");
                    nav.navigate(response.records[0]);
                } else {
                    this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.clorox.DosDataError") + ErrorCodes.DOS_DATA_FAILURE);
                }
            } catch (exception) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in getOverviewDataSuccess:: " + exception);
            }
        },
        //getOverview service Failure call back
        getOverviewDataFailure: function(error) {
            try {
                kony.print("inside getOverviewDataFailure response : " + JSON.stringify(error));
                Utils.hideLoadingIndicator();
                this.view.flxBiometric.isVisible = false;
                this.displayErrorMessage(kony.i18n.getLocalizedString("i18n.clorox.DosDataError") + ErrorCodes.DOS_DATA_FAILURE);
            } catch (exception) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in getOverviewDataFailure:: " + exception);
            }
        },
    };
});
define("com/clorox/Login/LoginControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/clorox/Login/LoginController", ["com/clorox/Login/userLoginController", "com/clorox/Login/LoginControllerActions"], function() {
    var controller = require("com/clorox/Login/userLoginController");
    var actions = require("com/clorox/Login/LoginControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
