define("userflxDosDetailsController", {
    //Type your controller code here 
});
define("flxDosDetailsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDosDetailsController", ["userflxDosDetailsController", "flxDosDetailsControllerActions"], function() {
    var controller = require("userflxDosDetailsController");
    var controllerActions = ["flxDosDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
