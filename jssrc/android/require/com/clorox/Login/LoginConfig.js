define(function() {
    return {
        "properties": [{
            "name": "localAuthRequired",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "deepLinkURL",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "identityServiceID",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "cloroxIDLoginUI",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "baseURL",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["bioMetricOptions", "onClickLogin", "checkBiometricSupport", "getBiometricInfo", "invokeLogin", "retryLogin", "touchIDCanceledByUser", "androidLocalAuthenticationFallback", "invokeIdentityService", "displayErrorMessage"],
        "events": []
    }
});