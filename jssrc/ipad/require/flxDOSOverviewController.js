define("userflxDOSOverviewController", {
    //Type your controller code here 
});
define("flxDOSOverviewControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDOSOverviewController", ["userflxDOSOverviewController", "flxDOSOverviewControllerActions"], function() {
    var controller = require("userflxDOSOverviewController");
    var controllerActions = ["flxDOSOverviewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
