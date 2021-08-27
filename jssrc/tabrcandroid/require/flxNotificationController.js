define("userflxNotificationController", {
    //Type your controller code here 
});
define("flxNotificationControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxNotificationController", ["userflxNotificationController", "flxNotificationControllerActions"], function() {
    var controller = require("userflxNotificationController");
    var controllerActions = ["flxNotificationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
