define("userflxMentionController", {
    //Type your controller code here 
});
define("flxMentionControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxMentionController", ["userflxMentionController", "flxMentionControllerActions"], function() {
    var controller = require("userflxMentionController");
    var controllerActions = ["flxMentionControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
