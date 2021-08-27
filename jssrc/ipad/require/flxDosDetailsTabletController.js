define("userflxDosDetailsTabletController", {
    //Type your controller code here 
});
define("flxDosDetailsTabletControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDosDetailsTabletController", ["userflxDosDetailsTabletController", "flxDosDetailsTabletControllerActions"], function() {
    var controller = require("userflxDosDetailsTabletController");
    var controllerActions = ["flxDosDetailsTabletControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
