define("userflxDOSMainController", {
    //Type your controller code here 
});
define("flxDOSMainControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDOSMainController", ["userflxDOSMainController", "flxDOSMainControllerActions"], function() {
    var controller = require("userflxDOSMainController");
    var controllerActions = ["flxDOSMainControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
