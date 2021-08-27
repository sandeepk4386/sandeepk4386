define("userfrmChatWindowController", {
    onNavigate: function() {
        this.applyBindings();
    },
    applyBindings: function() {
        this.view.preShow = this.onPreshow;
        this.view.TopBottomNavigation.lblHeader = true;
        this.view.onDeviceBack = function() {};
        this.view.flxGenericError.isVisible = false;
        this.view.flxGenericError.onClick = () => {};
    },
    onPreshow: function() {
        try {
            this.view.TopBottomNavigation.makeTabActive(4);
        } catch (exception) {
            kony.print("Exception in user profile preshow " + JSON.stringify(exception));
        }
    },
});
define("frmChatWindowControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmChatWindowController", ["userfrmChatWindowController", "frmChatWindowControllerActions"], function() {
    var controller = require("userfrmChatWindowController");
    var controllerActions = ["frmChatWindowControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
