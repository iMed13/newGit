$(document).ready(function(){
    $(".main_row .blueCont").click(function(){
    	$(this).siblings().removeClass("_active_top");
    	$(this).addClass("_active_top");
    });
    $("#language div").click(function(){
    	$(this).siblings().addClass("_lang_active");
    	$(this).removeClass("_lang_active");
    });
    $(".menu_list ul li a").click(function(){
    	$(".menu_list").removeClass("_show_menu");
    	$(this).parents().siblings().children().removeClass("_actived_a");
    	$(this).addClass("_actived_a");
    });
    $(".hidden_hamburg").click(function(){
    	$(".menu_list").toggleClass("_show_menu");
    });
});
