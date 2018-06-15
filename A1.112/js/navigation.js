"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Navigation;
(function (Navigation) {
    function init() {
        $(".nav-activator").click(menuClick);
        $(".hamburger").click(hamClick);
    }
    Navigation.init = init;
    function menuClick() {
        var mMenuH = $(".menu-mobile__wrap").css("display") == "none" ? 0 : $(".menu-mobile__wrap").height();
        $('html, body').animate({
            scrollTop: $(this.dataset.to).offset().top - mMenuH,
        }, {
            duration: 1200,
            easing: "swing"
        });
    }
    function hamClick() {
        this.classList.toggle("is-active");
        document.querySelector(".menu-wrap").classList.toggle("active");
    }
    //подсвечивание активной секции в меню
    /*$("section").each(function (ind: number, elem: any) {
        if (!isScrolledIntoView(elem)) return;
        $("header .nav__element").removeClass("active");
        $(`header .nav__element[data-to="${"." + elem.classList.value}"]`).addClass("active");
    });
    
    function isScrolledIntoView(elem: any) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
    
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }*/
    /** мобильное меню открыть/закрыть */
})(Navigation = exports.Navigation || (exports.Navigation = {}));
