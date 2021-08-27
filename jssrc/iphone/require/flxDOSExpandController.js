define("userflxDOSExpandController", {
    //Type your controller code here 
});
define("flxDOSExpandControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDOSExpandController", ["userflxDOSExpandController", "flxDOSExpandControllerActions"], function() {
    var controller = require("userflxDOSExpandController");
    var controllerActions = ["flxDOSExpandControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
