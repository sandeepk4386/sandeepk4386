define("userflxDefinitionsTemplateController", {
    //Type your controller code here 
});
define("flxDefinitionsTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDefinitionsTemplateController", ["userflxDefinitionsTemplateController", "flxDefinitionsTemplateControllerActions"], function() {
    var controller = require("userflxDefinitionsTemplateController");
    var controllerActions = ["flxDefinitionsTemplateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
