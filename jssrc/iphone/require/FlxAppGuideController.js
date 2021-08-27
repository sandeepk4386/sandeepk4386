define("userFlxAppGuideController", {
    //Type your controller code here 
});
define("FlxAppGuideControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("FlxAppGuideController", ["userFlxAppGuideController", "FlxAppGuideControllerActions"], function() {
    var controller = require("userFlxAppGuideController");
    var controllerActions = ["FlxAppGuideControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
