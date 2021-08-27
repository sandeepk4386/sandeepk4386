define("userflxBusinessUnitsController", {
    //Type your controller code here 
});
define("flxBusinessUnitsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxBusinessUnitsController", ["userflxBusinessUnitsController", "flxBusinessUnitsControllerActions"], function() {
    var controller = require("userflxBusinessUnitsController");
    var controllerActions = ["flxBusinessUnitsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
