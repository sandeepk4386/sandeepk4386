define("FBox0e224ffdd37d147", function() {
    return function(controller) {
        FBox0e224ffdd37d147 = new kony.ui.FlexContainer({
            "clipBounds": false,
            "height": "80dp",
            "id": "FBox0e224ffdd37d147",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%"
        }, {}, {});
        FBox0e224ffdd37d147.setDefaultUnit(kony.flex.DP);
        var flxMainBio = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxMainBio",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMainBio.setDefaultUnit(kony.flex.DP);
        var flxBiomerticMain2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxBiomerticMain2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "36dp",
            "skin": "sknflxBioMain",
            "top": "2dp",
            "width": "42dp",
            "zIndex": 1
        }, {}, {});
        flxBiomerticMain2.setDefaultUnit(kony.flex.DP);
        var flxBiometricswtch2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "12dp",
            "id": "flxBiometricswtch2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleGrey",
            "width": "32dp",
            "zIndex": 1
        }, {}, {});
        flxBiometricswtch2.setDefaultUnit(kony.flex.DP);
        flxBiometricswtch2.add();
        var flxRoundToggle2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxRoundToggle2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7dp",
            "isModalContainer": false,
            "skin": "sknToggleRound0AC7C2",
            "width": "20dp",
            "zIndex": 1
        }, {}, {});
        flxRoundToggle2.setDefaultUnit(kony.flex.DP);
        flxRoundToggle2.add();
        flxBiomerticMain2.add(flxBiometricswtch2, flxRoundToggle2);
        flxMainBio.add(flxBiomerticMain2);
        FBox0e224ffdd37d147.add(flxMainBio);
        return FBox0e224ffdd37d147;
    }
})