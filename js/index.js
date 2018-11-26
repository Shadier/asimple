'use strict'

var id;
$(window).resize(function() {
  clearTimeout(id);
  id = setTimeout(resize, 100);
});

window.onload = resize;

function resize(){
	var height = $(window).height();
	var height_eslogan = $('#eslogan').height();
	var mtop_eslogan = ((height / 2) - (height_eslogan /2) - 150);

	$('#eslogan').css('cssText', 'margin-top: '+mtop_eslogan+'px;');
}

$('#open-menu').click(function(event){
	openclose_menu();
});

$('#opaque').click(function(event){
	openclose_menu();
});

$( ".uno" )
  .mouseover(function() {
    $( '.elemento-menu' ).css('cssText', 'color: gray;');
    $( this ).css('cssText', 'color: rgb(222, 184, 135);');
    $( '#opaque' ).css('cssText', 'background-color: rgba(222, 184, 135,.6);');
  })
  .mouseout(function() {
    $( '.elemento-menu' ).css('cssText', 'color: gray;');
    $( '#opaque' ).css('cssText', 'background-color: rgba(222, 184, 135,.6);');
    $( '.uno' ).css('cssText', 'color: rgb(222, 184, 135);');
});

$( ".dos" )
  .mouseover(function() {
    $( '.elemento-menu' ).css('cssText', 'color: gray;');
    $( this ).css('cssText', 'color: rgb(178, 34, 34);');
    $( '#opaque' ).css('cssText', 'background-color: rgba(178, 34, 34,.6);');
  })
  .mouseout(function() {
    $( '.elemento-menu' ).css('cssText', 'color: gray;');
    $( '#opaque' ).css('cssText', 'background-color: rgba(222, 184, 135,.6);');
    $( '.uno' ).css('cssText', 'color: rgb(222, 184, 135);');
});

$( ".tres" )
  .mouseover(function() {
    $( '.elemento-menu' ).css('cssText', 'color: gray;');
    $( this ).css('cssText', 'color: rgb(95, 158, 160);');
    $( '#opaque' ).css('cssText', 'background-color: rgba(95, 158, 160,.6);');
  })
  .mouseout(function() {
    $( '.elemento-menu' ).css('cssText', 'color: gray;');
    $( '#opaque' ).css('cssText', 'background-color: rgba(222, 184, 135,.6);');
    $( '.uno' ).css('cssText', 'color: rgb(222, 184, 135);');
});



function openclose_menu(){
	$('#opaque').toggleClass('active');
	$('#menu').toggleClass('active');
	if ($('#menu').hasClass('active')) {
		$( "#open-menu p" ).animate({
		  }, 500, function() {
		  	$("#open-menu img").attr('src','images/close_menu.png');
		    $(this).text('CERRAR');
		  });
	}else{
		$( "#open-menu p" ).animate({
		  }, 500, function() {
		  	$("#open-menu img").attr('src','images/menu.png');
		    $(this).text('MENÚ');
		  });
	}
}