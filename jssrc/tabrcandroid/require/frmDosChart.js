define("frmDosChart", function() {
    return function(controller) {
        function addWidgetsfrmDosChart() {
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
            var flxChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "8%",
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxChart",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "12.50%",
                "isModalContainer": false,
                "right": "12.50%",
                "skin": "slFbox",
                "top": "7%",
                "width": "87%",
                "zIndex": 1
            }, {}, {});
            flxChart.setDefaultUnit(kony.flex.DP);
            var flxScrlDos = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0%",
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxScrlDos",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0%",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxScrlDos.setDefaultUnit(kony.flex.DP);
            var DOSHeader = new com.DOS.DOSHeader({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "DOSHeader",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "DOSHeader": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
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
            var DOSDetailsTablet = new com.clorox.DOSDetailsTablet({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "DOSDetailsTablet",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxBg",
                "top": "1%",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "DOSDetailsTablet": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
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
            var lblLine = new kony.ui.Label({
                "height": "1dp",
                "id": "lblLine",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl313983Line",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "21dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxGraph = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxGraph",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "26dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGraph.setDefaultUnit(kony.flex.DP);
            var catalog = new com.clorox.catalog({
                "height": "350dp",
                "id": "catalog",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxBlueRounded",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "catalog": {
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
            catalog.selComponent = "";
            var flxTab = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxTab",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "98%",
                "zIndex": 10
            }, {}, {});
            flxTab.setDefaultUnit(kony.flex.DP);
            var flxCurrentMonth = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrentMonth",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "48%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%"
            }, {}, {});
            flxCurrentMonth.setDefaultUnit(kony.flex.DP);
            var lblCurrentMonth = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCurrentMonth",
                "isVisible": true,
                "skin": "sknLbl0AC7C2SSPR16px100",
                "text": kony.i18n.getLocalizedString("i18n.clorox.currentmonth"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCrntMnthLine = new kony.ui.Label({
                "bottom": "5dp",
                "centerX": "50%",
                "height": "1dp",
                "id": "lblCrntMnthLine",
                "isVisible": true,
                "skin": "sknLbl0AC7C2Bg",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "133dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCurrentMonth.add(lblCurrentMonth, lblCrntMnthLine);
            var flxPreviousMonth = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPreviousMonth",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "48%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%"
            }, {}, {});
            flxPreviousMonth.setDefaultUnit(kony.flex.DP);
            var lblPreviousMonth = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPreviousMonth",
                "isVisible": true,
                "skin": "sknLbl0AC7C2SSPR16px100",
                "text": kony.i18n.getLocalizedString("i18n.clorox.previousmonth"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPrvsMnthLine = new kony.ui.Label({
                "bottom": "5dp",
                "centerX": "50%",
                "height": "1dp",
                "id": "lblPrvsMnthLine",
                "isVisible": true,
                "skin": "sknlbl94A3B3Bg",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "138dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPreviousMonth.add(lblPreviousMonth, lblPrvsMnthLine);
            var flxChartShareIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxChartShareIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {}, {});
            flxChartShareIcon.setDefaultUnit(kony.flex.DP);
            var lblChartShare = new kony.ui.Label({
                "id": "lblChartShare",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknLblA7DCECShare",
                "text": "0",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxChartShareIcon.add(lblChartShare);
            flxTab.add(flxCurrentMonth, flxPreviousMonth, flxChartShareIcon);
            flxGraph.add(catalog, flxTab);
            var DOSBusinessCustomersTablet = new com.clorox.DOSBusinessCustomersTablet({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "DOSBusinessCustomersTablet",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "30dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "DOSBusinessCustomersTablet": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
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
            var flxSpace = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxSpace",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBg",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSpace.setDefaultUnit(kony.flex.DP);
            flxSpace.add();
            flxScrlDos.add(DOSHeader, DOSDetailsTablet, lblLine, flxGraph, DOSBusinessCustomersTablet, flxSpace);
            flxChart.add(flxScrlDos);
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
                "zIndex": 150,
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
                "bottom": 0,
                "centerX": "50%",
                "height": "86.65%",
                "id": "Definitions",
                "isVisible": false,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknDefinitions",
                "top": "7%",
                "width": "87%",
                "zIndex": 140,
                "overrides": {
                    "Definitions": {
                        "left": "viz.val_cleared",
                        "right": "viz.val_cleared",
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
                "zIndex": 150,
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
                "zIndex": 150,
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
                "zIndex": 155
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
            this.add(TopBottomNavigation, flxChart, loadingIndicator, Definitions, Feedback, FeedbackPopup, SharePopup, flxGenericError);
        };
        return [{
            "addWidgets": addWidgetsfrmDosChart,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmDosChart",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknBg",
            "verticalScrollIndicator": false
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