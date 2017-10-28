jQuery( document ).ready(function() {
    console.log("ready");

    var MENU_OPENED_STATE = "OPENED";
    var MENU_CLOSED_STATE = "CLOSED";
    var menuState = MENU_OPENED_STATE;

    $(".mobileMenuOpenButton").click(function(){
        switch(menuState){
            case MENU_CLOSED_STATE:
                menuState = MENU_OPENED_STATE;
                break;
            case MENU_OPENED_STATE:
                menuState = MENU_CLOSED_STATE;
                break;
        }
        onMenuStateChanged();
    });

    function onMenuStateChanged(){
        if(menuState == MENU_OPENED_STATE){
            $(".fullWidthMenu").show();
        }
        else{
            $(".fullWidthMenu").hide();
        }
    }
});
