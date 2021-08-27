define("frmDOSHome", function() {
    return function(controller) {
        function addWidgetsfrmDOSHome() {
            this.setDefaultUnit(kony.flex.DP);
            var TopBottomNavigation = new Clorox.TopBottomNavigation({
                "height": "100%",
                "id": "TopBottomNavigation",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "TopBottomNavigation": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxDOSMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "8%",
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxDOSMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "8%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "7%",
                "width": "87%",
                "zIndex": 1
            }, {}, {});
            flxDOSMain.setDefaultUnit(kony.flex.DP);
            var DOSTablet = new com.clorox.DOSTablet({
                "height": "100%",
                "id": "DOSTablet",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "DOSTablet": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxDOSMain.add(DOSTablet);
            var Feedback = new Clorox.Feedback({
                "centerY": "50%",
                "height": "165dp",
                "id": "Feedback",
                "isVisible": true,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "width": "8%",
                "zIndex": 10,
                "overrides": {
                    "Feedback": {
                        "left": "viz.val_cleared",
                        "top": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var FeedbackPopup = new Clorox.FeedbackPopup({
                "height": "100%",
                "id": "FeedbackPopup",
                "isVisible": false,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxBlack53Opacity",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10,
                "overrides": {
                    "FeedbackPopup": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var loadingIndicator = new Clorox.loadingIndicator({
                "height": "100%",
                "id": "loadingIndicator",
                "isVisible": false,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "loadingIndicator": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var Definitions = new Clorox.Definitions({
                "centerX": "50%",
                "height": "86.65%",
                "id": "Definitions",
                "isVisible": false,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknDefinitions",
                "top": "7%",
                "width": "87%",
                "zIndex": 1,
                "overrides": {
                    "Definitions": {
                        "left": "viz.val_cleared",
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var AppGuide = new Clorox.AppGuide({
                "height": "100%",
                "id": "AppGuide",
                "isVisible": false,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxAppGuideD7E2EC",
                "top": "0dp",
                "width": "100%",
                "zIndex": 11,
                "overrides": {
                    "AppGuide": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var SharePopup = new Clorox.SharePopup({
                "height": "100%",
                "id": "SharePopup",
                "isVisible": false,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxTransparent",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100,
                "overrides": {
                    "SharePopup": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxGenericError = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxGenericError",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 125
            }, {}, {});
            flxGenericError.setDefaultUnit(kony.flex.DP);
            var GenericError = new Clorox.GenericError({
                "height": "100%",
                "id": "GenericError",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "GenericError": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGenericError.add(GenericError);
            this.add(TopBottomNavigation, flxDOSMain, Feedback, FeedbackPopup, loadingIndicator, Definitions, AppGuide, SharePopup, flxGenericError);
        };
        return [{
            "addWidgets": addWidgetsfrmDOSHome,
            "enabledForIdleTimeout": true,
            "id": "frmDOSHome",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknBg"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});