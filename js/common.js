$(document).ready(function() {

	/* Определение устройства*/
	if (!device.tablet() && !device.mobile()) {
		$("#video-wrap").css('display','block');
		$(".phone-wrap, h1").css('color','#fff');
		$(".header-content ul li").css('color','#fff');

	} else {
		// Если телефон 
		$('header').addClass('mob');
	};




$(".fancybox").fancybox({
		afterLoad : function(){
		$(".fancybox-skin").addClass('rollIn animated');
		},
		beforeClose : function(){
		$(".fancybox-skin").addClass('bounceOut animated');
		}
});


$(".fancybox-certific").fancybox({
		afterLoad : function(){
		$(".fancybox-skin").addClass('slideInUp animated');
		},
		beforeClose : function(){
		$(".fancybox-skin").addClass('bounceOut animated');
		},
});






$(".fancybox-own").fancybox({

		afterLoad   : function() {
		        this.title = '<h3>Историческое здание - особняк представительского класса	</h3>';
		    },

	helpers : {
		title : {
			type : 'inside'
		}
	}	

});


/*  Меню   */
$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  $(".main-mnu").slideToggle();
  return false;
});

/*  Кнопка вниз  */
$("#scroll").click(function(){
	$("html, body").animate({
		scrollTop:$(".bottom-line").offset().top
	},800);
});



$(".bottom-line").waypoint(function(){
	
		$({blurRadius: 5}).animate({blurRadius: 0}, {
		duration: 1500,
		easing: 'swing',
		step: function() {
			$(".bottom-line h3 span").css({
				"-webkit-filter": "blur("+this.blurRadius+"px)",
				"filter": "blur("+this.blurRadius+"px)"
			});
		}
	});
	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
	$(".bottom-line h3 span").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			numberStep: comma_separator_number_step},
			1500);
	});
	},{
		offset: '90%'
});


//Одинаковая высота
columnConform('.item-vertical > p');

$('.carousel').owlCarousel({
    margin:30,
   
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:1,
        },
       	768:{
            items:2,
        },
        1000:{
            items:4,
        }
    }


});

$('.item-p-wrap').owlCarousel({
	margin:10,
    nav:true,
    navText :"",
    responsive:{
    	0:{
            items:2,
        },
        1000:{
            items:5,
        }
    }
});

$(".main-mnu li").click(function() {
  $(".main-mnu li").removeClass('active');
  $(this).addClass('active');
});


$(".modalbox").fancybox({
	padding : 0
	});



});
