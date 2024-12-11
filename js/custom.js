$(document).ready(function(){
    $(".flex .items .active-class").click(function(){
        // remove current-menu
        $(".flex .items .active-class").removeClass("current-menu");
        // Add current-menu
        $(this).addClass("current-menu");
    });
    