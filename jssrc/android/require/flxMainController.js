define("userflxMainController", {
    //Type your controller code here 
});
define("flxMainControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxMainController", ["userflxMainController", "flxMainControllerActions"], function() {
    var controller = require("userflxMainController");
    var controllerActions = ["flxMainControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
