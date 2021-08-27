define(function() {
    return function(controller) {
        var linechart = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "linechart",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxChartBg1c2359",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "linechart"), extendConfig({}, controller.args[1], "linechart"), extendConfig({}, controller.args[2], "linechart"));
        linechart.setDefaultUnit(kony.flex.DP);
        var brwLineChart = new kony.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "brwLineChart",
            "isVisible": true,
            "left": "0dp",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "brwLineChart"), extendConfig({}, controller.args[1], "brwLineChart"), extendConfig({
            "bounces": false
        }, controller.args[2], "brwLineChart"));
        var flxBrowserTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBrowserTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxChartBg1c2359",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxBrowserTop"), extendConfig({}, controller.args[1], "flxBrowserTop"), extendConfig({}, controller.args[2], "flxBrowserTop"));
        flxBrowserTop.setDefaultUnit(kony.flex.DP);
        flxBrowserTop.add();
        linechart.add(brwLineChart, flxBrowserTop);
        return linechart;
    }
})