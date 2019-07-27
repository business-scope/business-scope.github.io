// JavaScript Document
jQuery(function () {
	//if(typeof(Worker) == "undefined"){window.location = "noHtml5.html";}
	//window.scrollTo(0,0);
	//imgBg
	$(".imgBg").each(function(index, element) {
        $(".imgBg").eq(index).css("background-image", "url(" + $(".imgBg").eq(index).find("img").attr("src") + ")");
    });	
	$(".navSearchIco").click(function(event){
		$(this).toggleClass("active");
		$(".navSearch").fadeToggle();
		$(".navbar-toggle").each(function(){
            $(".fa", this).removeClass("fa-times");
            $(".fa", this).addClass("fa-bars");
            $(this).removeClass("fixed");
        });        
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").removeClass("on");
        $(".navbar-collapse").removeClass("bounceIn"); 
		event.stopPropagation();
	})
	$(".navSearch").click(function(e){
		e.stopPropagation();	
	})
	$(window).click(function(){
		$(".navSearchIco").removeClass("active");	
		$(".navSearch").fadeOut();
	})	
	$(".navSearchIcoa").click(function(event){
		$(this).toggleClass("active");
		$(".navSearcha").fadeToggle();
		$(".navbar-toggle").each(function(){
            $(".fa", this).removeClass("fa-times");
            $(".fa", this).addClass("fa-bars");
            $(this).removeClass("fixed");
        });        
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").removeClass("on");
        $(".navbar-collapse").removeClass("bounceIn"); 
		event.stopPropagation();
	})
	$(".navSearcha").click(function(e){
		e.stopPropagation();	
	})
	$(window).click(function(){
		$(".navSearchIcoa").removeClass("active");	
		$(".navSearcha").fadeOut();
	})	
	$(".banner .swiper-slide").each(function(index){$(this).addClass("ban"+(index+1));});
	var banner = new Swiper('.banner .swiper-container',{
		loop:true,
		autoplay : 5000,
		autoplayDisableOnInteraction : false,
		speed:1500,
		slidesPerView:1,
		observer:true,
		observeParents:true,
		effect:'fade',
		prevButton:'.banPrev',
		nextButton:'.banNext',
		pagination:'.banner .banPage',
		paginationClickable :true,
		onInit: function(swiper){
			swiperAnimateCache(swiper); 
			swiperAnimate(swiper);
		}, 
		onSlideChangeEnd: function(swiper){
			swiperAnimate(swiper);
		}
	})
	
	$(".page2 li").each(function(index){$(this).attr("data-wow-delay",index/10+0.3+"s");});
	$(".page4 li").each(function(index){$(this).attr("data-wow-delay",index/10+0.3+"s");});
	$(".page7 li").each(function(index){$(this).attr("data-wow-delay",index/10+0.3+"s");});		
	//top
	/*$(window).scroll(function(){
		if ($(window).scrollTop() > $(window).height()/3) {
			$('.top').fadeIn(800);
		} else {
			$('.top').fadeOut(800);
		}
	});*/	
	$(".top").click(function(){$('body,html').animate({scrollTop:0},1000);return false;});
	
	var page3Top = new Swiper('.page3Top .swiper-container', {
		spaceBetween:5,
		resizeReInit:true,			
		observer:true,
		observeParents:true,
		keyboardControl : false,
		simulateTouch : false,
		effect:'fade',
		autoHeight:true,
		onSlideChangeEnd: function(swiper){
			$(".page3Tab li").eq(swiper.Index).addClass("active").siblings().removeClass("active");
    	}
	});
	$(".page3Tab li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var cliNum = $(this).index();
		page3Top.slideTo(cliNum, 1000, false);
	})	
	$(".page5Img .imgBg").eq(0).show();
	var page5Con = new Swiper('.page5Con .swiper-container', {
		loop:true,
		spaceBetween:5,
		resizeReInit:true,			
		observer:true,
		observeParents:true,
		keyboardControl : false,
		simulateTouch : false,
		effect:'fade',
		autoHeight:true,
		onSlideChangeEnd: function(swiper){
			$(".page5Tab li").eq(swiper.realIndex).addClass("active").siblings().removeClass("active");
    	}
	});
	$(".page5Tab li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var cliNum = $(this).index()+1;
		page5Con.slideTo(cliNum, 1000, false);
		$(".page5Img .imgBg").eq($(this).index()).show().addClass("animated fadeIn").siblings().hide();
	})	
	var page6 = new Swiper('.page6 .swiper-container', {
		loop:true,
		slidesPerView:4,
		spaceBetween:5,
		resizeReInit:true,			
		observer:true,
		observeParents:true,
		keyboardControl : false,
		prevButton: '.page6Prev',
		nextButton: '.page6Next',
		breakpoints: {
			991: {
				slidesPerView:3,
			},
			640: {
				slidesPerView:2,
			},
			460: {
				slidesPerView:1,
			}
		}
	});
	$(".ftAddName li span").click(function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
		var ftClickNum = $(this).parent().index();
		$(".ftAdd .ftAddItem").eq(ftClickNum).show().addClass("animated fadeInUp").siblings().hide();	
	})
	var oneBox4 = new Swiper('.oneBox4 .swiper-container', {
		//spaceBetween:5,
		//resizeReInit:true,			
		//observer:true,
		//observeParents:true,
		//keyboardControl : false,
		//simulateTouch : false,
		//prevButton: '.oneBox4Prev',
		//nextButton: '.oneBox4Next',
	});	
	var oneBox5 = new Swiper('.oneBox5 .swiper-container', {
		loop:true,
		slidesPerView:3,
		spaceBetween:20,
		resizeReInit:true,			
		observer:true,
		observeParents:true,
		keyboardControl : false,
		prevButton: '.oneBox5Prev',
		nextButton: '.oneBox5Next',
		breakpoints: {
			991: {
				slidesPerView:2,
				spaceBetween:15,
			},
			640: {
				slidesPerView:2,
			},
			460: {
				slidesPerView:1,
			}
		}
	});
	
	$(".schoolBot li").each(function(index, element) {
		$(this).attr("data-wow-delay",index/5+0.3+"s");
        if(($(this).index()+1)%3==0){
			$(this).addClass("schoolBotLi3");
		}else if(($(this).index()+1)%3==2){
			$(this).addClass("schoolBotLi2");
		}else if(($(this).index()+1)%3==1){
			$(this).addClass("schoolBotLi1");
		}
    });	
	var dianpingLef = new Swiper('.dianpingLef .swiper-container', {
		loop:true,
		resizeReInit:true,			
		observer:true,
		observeParents:true,
		keyboardControl : false,
		prevButton: '.dianpingPrev',
		nextButton: '.dianpingNext',
	});
	$(".dianpingBot .dianpingItem").eq(0).show();
	$(".dianpingTab li").click(function(){
       	$(this).addClass("active").siblings().removeClass("active");
		$(".dianpingBot .dianpingItem").eq($(this).index()).show().addClass("animated fadeInUp").siblings().hide(); 
    });
	var schoolImgBox = new Swiper('.schoolImgBox .swiper-container', {
		loop:true,
		resizeReInit:true,			
		observer:true,
		observeParents:true,
		keyboardControl : false,
		prevButton: '.schoolImgPrev',
		nextButton: '.schoolImgNext',
	});	
    $('.videoIco').click(function() {
		$(this).toggleClass("active");
		if ($(this).prev('video').hasClass('pause')) {
			$(this).prev('video').trigger("play");
			$(this).prev('video').removeClass('pause');
			$(this).prev('video').addClass('play');
		} else {
			$(this).prev('video').trigger("pause");
			$(this).prev('video').removeClass('play');
			$(this).prev('video').addClass('pause');
		}
    })
	var teamSlider = new Swiper('.teamSlider .swiper-container', {
		loop:true,
		slidesPerView:4,
		spaceBetween:22,
		resizeReInit:true,			
		observer:true,
		observeParents:true,
		keyboardControl : false,
		prevButton: '.teamPrev',
		nextButton: '.teamNext',
		breakpoints: {
			1400: {
				slidesPerView:4,
				spaceBetween:17,
			},
			1200: {
				slidesPerView:4,
				spaceBetween:10,
			},
			640: {
				slidesPerView:3,
				spaceBetween:15,
			},
			460: {
				slidesPerView:2,
				spaceBetween:10,
			}
		}
	});
	
	$(".teamBot .teamItem").eq(0).show();
	$(".teamTab li").click(function(){
       	$(this).addClass("active").siblings().removeClass("active");
		$(".teamBot .teamItem").eq($(this).index()).show().addClass("animated fadeInUp").siblings().hide(); 
    });
	
	var usaBox = new Swiper('.usaBox .swiper-container', {
		spaceBetween:5,
		resizeReInit:true,			
		observer:true,
		observeParents:true,
		keyboardControl : false,
		simulateTouch : false,
		autoHeight:true,
		onSlideChangeEnd: function(swiper){
			$(".usaTab li").eq(swiper.Index).addClass("active").siblings().removeClass("active");
    	}
	});
	$(".usaTab li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var cliNum = $(this).index();
		usaBox.slideTo(cliNum, 1000, false);
	})
	
	var page5Con2 = new Swiper('.usaGuideBg .page5Con .swiper-container', {
		loop:true,
		spaceBetween:5,
		resizeReInit:true,			
		observer:true,
		observeParents:true,
		keyboardControl : false,
		simulateTouch : false,
		effect:'fade',
		autoHeight:true,
		onSlideChangeEnd: function(swiper){
			$(".usaGuideTab li").eq(swiper.realIndex).addClass("active").siblings().removeClass("active");
    	}
	});
	$(".usaGuideTab li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var cliNum = $(this).index()+1;
		page5Con2.slideTo(cliNum, 1000, false);
	})
	//cz	
	var czActivity = new Swiper('.czActivity .swiper-container', {
		loop:true,
		slidesPerView:1,
		spaceBetween:15,
		resizeReInit:true,			
		observer:true,
		observeParents:true,
		keyboardControl : false,
		prevButton: '.czAcPrev',
		nextButton: '.czAcNext',
		pagination:'.czAcPage',
		paginationType:'fraction',
		paginationClickable :true,
	});
	
	
	$(".luquItem").eq(0).show().siblings().hide();
	$(".luquTab li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var cliNum = $(this).index();
		$(".luqu .luquItem").eq($(this).index()).show().addClass("animated fadeInUp").siblings().hide(); 
	})
	$(".xiaxiaoItem").eq(0).show().siblings().hide();
	$(".xiaxiaoTab li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var cliNum = $(this).index();
		$(".xiaxiao .xiaxiaoItem").eq($(this).index()).show().addClass("animated fadeInUp").siblings().hide(); 
	})
	
	$(document).find(".selectBox").on("click",function(event){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).next(".selectItem").slideUp();
		}else{
			$(".selectBox").removeClass("active");
			$(".selectItem").hide();
			$(this).addClass("active");
			$(this).next(".selectItem").slideDown();
		}
		event.stopPropagation();
	})
	$(".selectItem li").on("click",function(){
		$(".selectBox").removeClass("active");
		$(".selectItem").slideUp();
		$(this).parent().prev(".selectBox").find(".selectInput").val($(this).text());
		$(this).parent().next("input").val($(this).attr("data-value"));
	})
	$(window).on("click",function(){
		$(".selectItem").slideUp();
		$(".selectBox").removeClass("active");	
	})
	$(".selectTab li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");	
	})
	
	
	$(".laifangList").eq(0).show().siblings().hide();
	$(".laifangTab li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var cliNum = $(this).index();
		$(".laifang .laifangList").eq($(this).index()).show().addClass("animated fadeInUp").siblings().hide(); 
	})
	$(".yearCase").eq(0).show().siblings().hide();
	$(".yearTab li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var cliNum = $(this).index();
		$(".laifangYear .yearCase").eq($(this).index()).show().addClass("animated fadeInUp").siblings().hide(); 
	})
	function equip() {
		//$("nav.navbar.bootsnav.no-full .navbar-collapse").css("max-height",$(window).height()-$(".logo").height());		
		var sUserAgent = navigator.userAgent.toLowerCase(); 
		if((sUserAgent.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i))) {
			$(".usachuzhongBg").addClass("mob");
		}else{
			$(".usachuzhongBg").removeClass("mob");
		}
	}
	equip();
    $(window).resize(function(){
		equip();
    })
})
