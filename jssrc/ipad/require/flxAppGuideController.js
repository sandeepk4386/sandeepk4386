define("userflxAppGuideController", {
    //Type your controller code here 
});
define("flxAppGuideControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAppGuideController", ["userflxAppGuideController", "flxAppGuideControllerActions"], function() {
    var controller = require("userflxAppGuideController");
    var controllerActions = ["flxAppGuideControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
