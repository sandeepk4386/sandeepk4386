define("userflxMainChatController", {
    //Type your controller code here 
});
define("flxMainChatControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxMainChatController", ["userflxMainChatController", "flxMainChatControllerActions"], function() {
    var controller = require("userflxMainChatController");
    var controllerActions = ["flxMainChatControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
