$( document ).ready(function() {
    console.log( "ready!" );

    check();

    $( window ).resize(function() {
        check();
    });

});

$( "#header-nav" ).click(function() {
    if ( $('#nav-clicked').is(':visible') ) {
        $('#nav-clicked').css('display','none');
        $('#header-nav i').addClass('fa-bars');
        $('#header-nav i').removeClass('fa-times');
    }
    else {
        $('#nav-clicked').css('display','block');
        $('#header-nav i').removeClass('fa-bars');
        $('#header-nav i').addClass('fa-times');
    }
});


function check() {

    var windowSize = $( window ).width();

    if ($( window ).width() < 688){
        $('#header-body').css('background-image','linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,0.2)), url("assets/img/header-body-background.jpg")', 'linear-gradient(rgba(255,255,255,.5)', 'rgba(255,255,255,.5)');
        $('#header-body').css('background-position','center center');
        $('#header-body').css('background-size','cover');
        $('#header-body').css('background-repeat','no-repeat');
       
    }
    else {
        $("#header-body").css('background-image', 'none');

        if ( $('#nav-clicked').is(':visible') ) {
            $('#nav-clicked').css('display','none');
        }
    }
}

$('#search-box input').focus(function(){
    $(this).attr("placeholder", "");
});

$('#search-box input').blur(function(){
    $(this).attr("placeholder", "Search");
});

$('#input1').focus(function() {
	$(this).attr("placeholder", "").val("").focus().blur();
});

$('#input1').blur(function() {
	$(this).attr("placeholder", "Adipiscing");
});

$('#input2').focus(function() {
	$(this).attr("placeholder", "").val("").focus().blur();
});

$('#input2').blur(function() {
	$(this).attr("placeholder", "Ex ea commodi");
});


