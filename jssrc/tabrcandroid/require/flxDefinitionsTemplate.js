define("flxDefinitionsTemplate", function() {
    return function(controller) {
        var flxDefinitionsTemplate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDefinitionsTemplate",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxDefinitionsTemplate.setDefaultUnit(kony.flex.DP);
        var lblDefinitionHeader = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblDefinitionHeader",
            "isVisible": true,
            "skin": "sknLblHeaderFFFFFF",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "35dp",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var RichDefnitionDesc = new kony.ui.RichText({
            "bottom": "0dp",
            "centerX": "50%",
            "id": "RichDefnitionDesc",
            "isVisible": true,
            "skin": "sknRichDefnitionDesc",
            "text": "\n\n",
            "top": "10dp",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDefinitionsTemplate.add(lblDefinitionHeader, RichDefnitionDesc);
        return flxDefinitionsTemplate;
    }
})