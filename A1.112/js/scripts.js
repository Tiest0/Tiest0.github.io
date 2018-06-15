$('#accordion-1').dcAccordion({
    eventType: 'click',
    autoClose: true,
    saveState: true,
    disableLink: true,
    showCount: false,
    speed: 'slow'
    });
$(".main-slider").owlCarousel({
        nav: false,
        items: 1,
        slideSpeed: 2000,
        // autoplay: true,
        // autoplayHoverPause:true,
        dots:true
    });
    $('.box-slider').owlCarousel({
      margin:40,
      nav:false,
      items:2,
  
  
  })
  
  $('.box-slider1').owlCarousel({
      
      margin:10,
      nav:false,
      items:1,
  
  
  })
  

// new Swiper('.main-slider .swiper-container', {
    
//     nextButton: '.drink-buttons .swiper-button-one',
//     prevButton: '.drink-buttons .swiper-button-two',
//     //autoplay: 5000,
//     speed: 1000,
//     effect: 'fade',
//     fade: { crossFade: true },
//     virtualTranslate: true,
// });
$(".main-anons-slider").owlCarousel({
        nav: false,
        items: 4,
        slideSpeed: 2000,
        // autoplay: true,
        // autoplayHoverPause:true,
        dots:true,
        margin:30,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
                nav:false
            },
            // breakpoint from 480 up
            768 : {
                items: 2,
            },
            // breakpoint from 768 up
            1181 : {
                items: 4,
            }
        }
    });  
$('.burger').click(function () {
    $("body").css("overflow", "hidden");
    $('.left-sidebar').addClass('left-sidebar-open');
});
$('.close').click(function () {
    $('.left-sidebar').removeClass('left-sidebar-open');
    $("body").css("overflow", "auto");
});
// (function ($) {
//         $(window).on("load", function () {
//             $(".left-sidebar").mCustomScrollbar({
//                 axis: "y"
//             });
//         });
//     })(jQuery);
//new SimpleBar($('.left-sidebar')[0]);
// $('.accordion>li>ul').Css('display','none');
 (function ($) {
$(window).on("load", function () {
var height = $('.block-wrap').height();
var width = $('.logo-header').width();
//$('.left-sidebar').height(height);
if ($(window).width() > '1279'){
    $('.left-sidebar').css('height',height);

}
// $('.left-sidebar').css('width',width);

console.log(height);
});
   })(jQuery);

   $('.contacts__form-select').fSelect({
        placeholder: 'Сотруднику факультета',
        numDisplayed: 3,
        overflowText: '{n} selected',
        searchText: 'Поиск',
        showSearch: true,
        optionFormatter: true
   });

   $('.help__form-select1').fSelect({
    placeholder: 'Заказ справок-вызовов',
    numDisplayed: 3,
    overflowText: '{n} selected',
    searchText: 'Поиск',
    showSearch: true,
    optionFormatter: true
});

$('.help__form-select2').fSelect({
  placeholder: 'курс',
  numDisplayed: 3,
  overflowText: '{n} selected',
  searchText: 'Поиск',
  showSearch: true,
  optionFormatter: true
});

$('.help__form-select3').fSelect({
  placeholder: 'Бюджет или внебюджет',
  numDisplayed: 3,
  overflowText: '{n} selected',
  searchText: 'Поиск',
  showSearch: true,
  optionFormatter: true
});

$('.help__form-select4').fSelect({
  placeholder: 'Профиль',
  numDisplayed: 3,
  overflowText: '{n} selected',
  searchText: 'Поиск',
  showSearch: true,
  optionFormatter: true
});

$('.help__form-select5').fSelect({
  placeholder: 'Вид справки',
  numDisplayed: 3,
  overflowText: '{n} selected',
  searchText: 'Поиск',
  showSearch: true,
  optionFormatter: true
});

$('.help__form-select6').fSelect({
  placeholder: 'Отделение',
  numDisplayed: 3,
  overflowText: '{n} selected',
  searchText: 'Поиск',
  showSearch: true,
  optionFormatter: true
});

   jQuery(function($){
    $("#phone").mask("+7 (999) 999-9999");
 });

 $('.fs-option').on("click", function(){
     $('.fs-label').css('color','black');
 });

 //

 var sync1 = $("#sync1");
 var sync2 = $("#sync2");
 var slidesPerPage = 5; //globaly define number of elements per page
 var syncedSecondary = true;

 sync1.owlCarousel({
   items : 1,
   slideSpeed : 2000,
   nav: true,
   autoplay: true,
   dots: true,
   loop: true,
   responsiveRefreshRate : 200,
   navText:['<div class="arrow-slider arrow-slider-left"><img src="../img/left-slider.png"></div>','<div class="arrow-slider arrow-slider-right"><img src="../img/right-slider.png"></div>']
 }).on('changed.owl.carousel', syncPosition);

 sync2
   .on('initialized.owl.carousel', function () {
     sync2.find(".owl-item").eq(0).addClass("current");
   })
   .owlCarousel({
    margin:10,
   items : slidesPerPage,
   dots: false,
   nav: false,
   smartSpeed: 200,
   slideSpeed : 500,
   slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
   responsiveRefreshRate : 100
 }).on('changed.owl.carousel', syncPosition2);

 function syncPosition(el) {
   //if you set loop to false, you have to restore this next line
   //var current = el.item.index;
   
   //if you disable loop you have to comment this block
   var count = el.item.count-1;
   var current = Math.round(el.item.index - (el.item.count/2) - .5);
   
   if(current < 0) {
     current = count;
   }
   if(current > count) {
     current = 0;
   }
   
   //end block

   sync2
     .find(".owl-item")
     .removeClass("current")
     .eq(current)
     .addClass("current");
   var onscreen = sync2.find('.owl-item.active').length - 1;
   var start = sync2.find('.owl-item.active').first().index();
   var end = sync2.find('.owl-item.active').last().index();
   
   if (current > end) {
     sync2.data('owl.carousel').to(current, 100, true);
   }
   if (current < start) {
     sync2.data('owl.carousel').to(current - onscreen, 100, true);
   }
 }
 
 function syncPosition2(el) {
   if(syncedSecondary) {
     var number = el.item.index;
     sync1.data('owl.carousel').to(number, 100, true);
   }
 }
 
 sync2.on("click", ".owl-item", function(e){
   e.preventDefault();
   var number = $(this).index();
   sync1.data('owl.carousel').to(number, 300, true);
 });

//  MAIN WORK SKRIPTS!!!!!!!!!!!!!!

$ (document).ready(function(){
    var link = $('.mobale-link');
    // var link_active = $('.mobale-link_active')
    var mobale = $('.mobale')
    var nav_link = $('.mobale a');

      link.click(function(){
        link.toggleClass('mobale-link_active');
        mobale.toggleClass('mobale_active');
        
      });
      nav_link.click(function(){
        link.toggleClass('mobale-link_active');
        mobale.toggleClass('mobale_active');
        
      });
});


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

