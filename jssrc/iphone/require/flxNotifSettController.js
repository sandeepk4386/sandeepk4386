define("userflxNotifSettController", {
    //Type your controller code here 
});
define("flxNotifSettControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxNotifSettController", ["userflxNotifSettController", "flxNotifSettControllerActions"], function() {
    var controller = require("userflxNotifSettController");
    var controllerActions = ["flxNotifSettControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
