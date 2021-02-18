$(document).ready(function () {
    $('#fullpage').fullpage();
    
    var blockSolutions = $("#solutions");
    var blockPraktice = $("#praktice");
    var blockSoul = $("#soul");
    var blockSlider = $(".slider__item");
    
    var scrollOffset = $(window).scrollTop(),
        introH = $("[data-scroll]").innerHeight();
    
// Smooth scroll 
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        
        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
                
        $(".slider__item").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);
    });
    
// Language changer
    const langChenger = $(".changer__btn");
    
    langChenger.click(function(event) {
        event.preventDefault();
        
        $('.changer__text.en').toggle('active');
        $('.changer__text.ua').toggle('active');
    });
    
// Modal
    const modalCall = $("[data-modal]");
    
    modalCall.on("click", function(event) {
       event.preventDefault();
        
        let $this = $(this);
        let modalId = $this.data('modal');
        
        $(modalId).addClass('active');
        $("body").addClass('no-scroll');
        $('.description').addClass('none');
        
    });
        
        $(".modal").on("click", function(event){
           $(this).removeClass('active');
           $("body").removeClass('no-scroll');
           $('.description').removeClass('none');
    });
    
// Bar
    const showBar = $(".header__burger");
    const barId = $('.bar');
    const barSpace = $('.bar__side');
    const barContent = $('.bar__content');
    
    showBar.on('click', function(event) {
       event.preventDefault();
        
        let $this = $(this);
        
        $(barId).addClass('active');
        $("body").addClass('no-scroll');
        $('.description').addClass('none');
    });
    
    barSpace.on('click', function(event) {
        event.preventDefault();
        
        $(barId).removeClass('active');
        $("body").removeClass('no-scroll');
        $('.description').removeClass('none');
    });
    
    showBar.click(function(){
    $(barContent).animate({width: "215px"}, 500);
    });
    
    barSpace.click(function(){
    $(barContent).animate({width: "0px"}, 50);
    });
    
// Description
    
    const contDesign = $("#design");
    const contSolutions = $("#solutions");
    const contPraktice = $("#praktice");
    const contSoul = $("#soul");
    const bgScroll = $(".background");
    
     $('.slider__item.one').click(function (event) {
         event.preventDefault();
         
        $(contDesign).addClass('active');
        $(contSolutions).removeClass('active');
        $(contPraktice).removeClass('active');
        $(contSoul).removeClass('active');
        $(bgScroll).css("transform", "translateY(0%)");
    });
    
    $('.slider__item.two').click(function (event) {
         event.preventDefault();
         
        $(contDesign).removeClass('active');
        $(contSolutions).addClass('active');
        $(contPraktice).removeClass('active');
        $(contSoul).removeClass('active');
        $(bgScroll).css("transform", "translateY(-100%)");
    });
    
    $('.slider__item.three').click(function (event) {
         event.preventDefault();
         
        $(contDesign).removeClass('active');
        $(contSolutions).removeClass('active');
        $(contPraktice).addClass('active');
        $(contSoul).removeClass('active');
        $(bgScroll).css("transform", "translateY(-200%)");
    });
    
    $('.slider__item.four').click(function (event) {
         event.preventDefault();
         
        $(contDesign).removeClass('active');
        $(contPraktice).removeClass('active');
        $(contSolutions).removeClass('active');
        $(contSoul).addClass('active');
        $(bgScroll).css("transform", "translateY(-300%)");
    });
 
// Active link switching
    
   if ($("#design").attr("transform")) {
       console.log('true');
       } else {
       console.log('false')
       }
    
const sidebar = document.body;
				var x0,y0,xDiff,yDiff;

				$(sidebar).on('touchstart',function(e){     
					x0 = e.touches[0].clientX;
				});

				$(sidebar).on('touchmove', function(){
                    $('.class').bind('touchmove', false);
					var e = arguments[0];
					xDiff = e.touches[0].clientX - x0;
                    if (xDiff > 0) {
                    console.log('screen', xDiff);
                    }
				});
    
});
    

    
//    function switchScroll() {
//        if ($('.background').css('max-height') == '100vh') {
//           $('.description').addClass('none');
//       }
//        else {
//        $('.description').removeClass('none');
//           }
//    };


//    btnSolutions.click(function() {
//        event.preventDefault();
//        
//        $(descVis).removeClass('none');
//    });

//    checkScroll(scrollOffset);
//    
//    $(window).on("scroll", function() {
//        
//        scrollOffset = $(this).scrollTop();
//        
//        checkScroll(scrollOffset);
//        
//    });
    
   
    
//    $("#design").hasClass(":translateY") {
//        $(blockSlider).addClass("active");
//    };
    
//    function checkScroll(scrollOffset) {
//        if(scrollOffset >= 1000) {
//             $(blockSlider).addClass("active");
//        } else {
//            $(blockSlider).removeClass("active");
//        }
//    };













