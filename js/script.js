	
( function( $ )
{




	function resized(){
		
		window_width = $( window ).width();
		window_height = $( window ).height();



//positionscroll = Math.round($(window).scrollTop());


		hauteurronds = $('.content').outerHeight();
		//hauteurbox = $('.content').outerHeight();
		largeurbox = $('.content').outerWidth();
		//hauteurfront = $('.front').outerHeight();

//$('.content').css('width', Math.round(hauteurronds)); 
//$('.content').css('height', Math.round(hauteurronds)); 

$('.flip-container').css('height', hauteurronds); 
//$('.back img').css('width', hauteurronds); 
//back').css('height', hauteurfront); 
$('.front img').css('width', hauteurronds); 
//$('.front img').css('height', hauteurronds); 



	//if(window_width > 1297){

	//		largeurbonsgestes = (($('.imagecabinet').height()) + 8) * 2;
			//console.log(largeurbonsgestes);
	//		$('#videos').css('max-width', largeurbonsgestes);


	//}

			largeurblocrougemid = $('#mid').outerWidth();
		border = largeurblocrougemid/2 + "px solid transparent";

	largeurblocjaune = $('.blocjaune').outerWidth();
		borderjaune = largeurblocjaune/2 + "px solid transparent";

		//console.log(border);
		$('.arrow-downrouge').css('border-left', border); 
		$('.arrow-downrouge').css('border-right', border); 

		$('.arrow-downbleu').css('border-left', border); 
		$('.arrow-downbleu').css('border-right', border); 

		$('.arrow-downjaune').css('border-left', border); 
		$('.arrow-downjaune').css('border-right', border); 

			$('.arrow-downjaune2').css('border-left', borderjaune); 
		$('.arrow-downjaune2').css('border-right', borderjaune); 


		//largeurblocparent = $('.arrow-downblanc').parent().width();
		largeurblocparent = $('.blocblanc').outerWidth();
		border = largeurblocparent/2 + "px solid transparent";
		$('.arrow-downblanc').css('border-left', border); 
		$('.arrow-downblanc').css('border-right', border); 


		largeurfiche = $('.bgblanc').parent().width();
		//console.log(largeurfiche);

		$('.bgblanc').css('height', largeurfiche); 
		$('.bgjaune').css('height', largeurfiche); 
		$('.bgbleu').css('height', largeurfiche); 
		$('.bgrouge').css('height', largeurfiche); 




		/*$('.bgblanc').parent().height() = largeurfiche;
		$('.bgjaune').parent().height();*/
		

		imageheight = $('.imagecabinet').height();
//if(window_width > 768){
		$('.blocrouge').css('height', imageheight); 
$('.blocjaune').css('height', imageheight); 
		$('.blocbleu').css('height', imageheight); 
		$('.blocblanc').css('height', imageheight); 

//}
//else{
	//		$('.blocrouge').css('height', ''); 

//		$('.blocbleu').css('height', ''); 
//		$('.blocblanc').css('height', ''); 


//}

		
			//if((( window_width < 1024 ) && (window_width > 768)) || (window_width < 550) ){
				if((( window_width < 1024 ) && (window_width > 768)) || (window_width < 700) ){

		//		$('.blocrouge').css('height', ""); 
		//		$('.blocbleu').css('height', ""); 
//console.log("1");
					$('.blocrouge').css('display', "block"); 
				$('.blocbleu').css('display', "block"); 
				$('.blocblanc').css('display', "block"); 
				//$('.blocjaune').parent().removeClass('order-last'); 

			}

			if( window_width > 768 ) {
							$('.blocjaune').parent().removeClass('order-last'); 
				//			console.log("2");
				$('.blocrouge').css('float', "left"); 
				$('.blocbleu').css('float', "left"); 
				$('.blocjaune').css('float', ""); 
				$('.flechejaune').css('float', ""); 
				$('.imagecabinet').css('float', ""); 
			}

			//if(( window_width >= 1024 ) || ((window_width < 768) && (window_width > 550))){
				if(( window_width >= 1024 ) || ((window_width < 768) && (window_width > 700))){

				//	$('.blocrouge').css('display', "flex"); 
				$('.blocbleu').css('display', "flex"); 
				$('.blocrouge').css('float', "right"); 
				$('.blocbleu').css('float', "left"); 
				$('.blocblanc').css('display', "flex");
			//	console.log("3");

			}
			if((window_width < 768) && (window_width >500)){

				$('.blocrouge').css('display', "flex");
				$('.blocbleu').css('display', "flex");
				$('.blocjaune').css('display', "flex");

			}
			if(window_width < 768){
				$('.blocrouge').css('float', "left"); 
				$('.blocbleu').css('float', "left"); 
				$('.blocjaune').css('float', "left"); 
				$('.flechejaune').css('float', "left"); 
				$('.imagecabinet').css('float', "left"); 

	$('.navbar').addClass('navbar-scroll');


				$('#cabinet .blocjaune').parent().addClass('order-last'); 
			//	console.log("4");
			}

		/*	if(window_width < 550){
				$('.blocrouge').css('display', "block"); 
				$('.blocbleu').css('display', "block"); 
			}*/



	hauteurheader = $('header').outerHeight();
			$('#bienvenue').css('margin-top', hauteurheader);


	}






$( document ).ready( function() {

//resized();

hauteurronds = $('.content').outerHeight();

$('.flip-container').css('height', hauteurronds); 

});

	   
   	   $(window).load(function(){
   // PAGE IS FULLY LOADED  
   // FADE OUT YOUR OVERLAYING DIV
		
		$('.container-loader').css('opacity', '0'); 
		$('.container-loader').addClass('d-none ');
		$('.loader').addClass('d-none ');
		
			$('header').removeClass('d-none');
		$('#bienvenue').removeClass('d-none');
		$('.navbar').removeClass('d-none');
		$('footer').removeClass('d-none');
		$('#hp').removeClass('d-none');

		$('#cabinet').removeClass('nopacity');
		$('#conseils').removeClass('nopacity');
		$('#ortho').removeClass('nopacity');
		$('#contact').removeClass('nopacity');
		$('#urgence').removeClass('nopacity');
		$('#patient').removeClass('nopacity');

		//$('#sousmenuconseils').removeClass('d-none');


		$('html').css('overflow', 'auto'); 
		//$('#capricci').removeClass('d-none');

		$('#video2').hide();
		$('#video3').hide();
		$('.arrow-downjaune').hide();
		$('.arrow-downrouge').hide();


		  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //document.getElementById("backtotop").style.display = "block";
     $('#backtotop').removeClass('d-none');
  } else {
    //document.getElementById("backtotop").style.display = "none";
     $('#backtotop').addClass('d-none');
  }




/*
		  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('#backtotop').removeClass('d-none');
  } else {
    $('#backtotop').addClass('d-none');
  }*/


		resized();

});




   	$( window ).resize(	function(){
			resized();
		}
	);
	
	$( window ).on( "orientationchange", function( event ) {
		resized();
	});
	


 $('.back').css('backface-visibility', 'hidden');

$( ".flip-container" ).mouseenter(
  function() {
  	   //$('.back').css('backface-visibility', 'visible');
  	   $(this).find(".back").css("backface-visibility","visible");

  }
);

$( ".flip-container" ).mouseleave(
  function() {
  	  // $('.back').css('backface-visibility', 'hidden');
$(this).find(".back").css("backface-visibility","hidden");
  }
);





$( ".bloc2" ).hover(
  function() {
  	//$('.bloc2').css({"-webkit-transform":"translate(10px,10px)"});​
console.log("ok");

   //$( this ).children().css({"-webkit-transform":"translate(100px,100px)"});​
   // 
    //$('div').css({"-webkit-transform":"translate(100px,100px)"});​
 // }, function() {
    //$( this ).find( "span:last" ).remove();
  }
);



	

   } )( jQuery );
   

/*
$('.lienmentions').on('click',function(){
    $('.popup').show();
});*/

        $('.fermernl').on('click',function(){
    $('.popup').hide();

});

        $('.fermercredits').on('click',function(){
    $('.popup.credits').hide();

});

   
var scroll = new SmoothScroll('#backtotop');
  var i = 0; 
window.onscroll = function() {

	scrollFunction();

hauteurheader = $('header').outerHeight();
inverhauteurheader = - hauteurheader;


/*
hauteursousmenu = $('#sousmenuconseils').outerHeight();
$('.anchor').css('margin-top', inverhauteurheader - hauteursousmenu);
$('.anchor').css('height', hauteurheader + hauteursousmenu);*/


	if (document.body.scrollTop > hauteurheader || document.documentElement.scrollTop > hauteurheader) {// scroll de plus de 236px

		/*hauteursousmenu = $('#sousmenuconseils').outerHeight();
$('.anchor').css('margin-top', inverhauteurheader - hauteursousmenu);
$('.anchor').css('height', hauteurheader + hauteursousmenu);*/


			$('.navbar').addClass('animated fadeInDown');
			$('.navbar').removeClass('fadeInDownM');
			//$('.navbar').removeClass('animated fadeInDown');
			//$('.navbar').removeClass('zoomInDown');
				//$('.navbar').removeClass('bounceInDown');
		$('.navbar').addClass('navbar-scroll');

	hauteurheader = $('header').outerHeight();
			$('#sousmenuconseils').addClass('fixed-top');
		$('#sousmenuconseils').css('top', hauteurheader );
		//$('header').css('padding', ".5rem" );
		i = 1;

			$('#bienvenue').css('margin-top', hauteurheader);



	}
else { 

	

    $('#sousmenuconseils').removeClass('fixed-top');
    


    if (i == 1){ 
    	$('.navbar').removeClass('fadeInDown');
    	 	$('.navbar').addClass('animated fadeInDownM'); 
    //	$('.navbar').addClass('animated zoomInDown'); 
    	//$('.navbar').addClass('animated bounceInDown'); 
    }
    if(window_width > 768){
    	$('.navbar').removeClass('navbar-scroll');
    		hauteurheader = $('header').outerHeight();
    	$('#bienvenue').css('margin-top', hauteurheader);
    }
	//$('header').css('padding', "1rem" );
    //$('#sousmenuconseils').css('top', hauteurheader);

/*$('.anchor').css('margin-top', inverhauteurheader);
$('.anchor').css('height', hauteurheader);*/


  }


};

/*$( "#sousmenuconseils a" ).click(function() {
  //alert( "Handler for .click() called." );
  hauteurheader = $('header').delay( 1800 ).outerHeight();
 $('#sousmenuconseils').css('top', hauteurheader );

});*/


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

     $('#backtotop').removeClass('d-none');
  } else {

     $('#backtotop').addClass('d-none');
  }



positionscroll = Math.round($(window).scrollTop());
//console.log(positionscroll);
hauteurpage = Math.round($(document).height() - $(window).height());
//console.log(hauteurpage);

var diff = Math.abs( positionscroll - hauteurpage );

hauteurfooter = $('footer').outerHeight();

if (diff <= 1){
	$('#backtotop').css('bottom', hauteurfooter);
 }
else{
	$('#backtotop').css('bottom', '50px');
}

}

