define("userflxExpandCollapseController", {
    //Type your controller code here 
});
define("flxExpandCollapseControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxExpandCollapseController", ["userflxExpandCollapseController", "flxExpandCollapseControllerActions"], function() {
    var controller = require("userflxExpandCollapseController");
    var controllerActions = ["flxExpandCollapseControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
