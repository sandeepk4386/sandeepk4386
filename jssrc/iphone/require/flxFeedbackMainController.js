define("userflxFeedbackMainController", {
    //Type your controller code here 
});
define("flxFeedbackMainControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxFeedbackMainController", ["userflxFeedbackMainController", "flxFeedbackMainControllerActions"], function() {
    var controller = require("userflxFeedbackMainController");
    var controllerActions = ["flxFeedbackMainControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
