$(document).ready(function () {
    //모달창
    let modal = $('.modal');
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');
    let modal_show = $('.modal-show');

    // modal_close클릭 시 modal 사라지기
    modal_close.click(function () {
        modal.fadeOut();
    });

    //modal클릭 시 modal사라지기
    modal.click(function () {
        modal.fadeOut();
    });

    //.modal-cont 를 마우스로 클릭하면 사라지지않기
    modal_cont.click(function (event) {
        event.stopPropagation();
    });

    //modal-show href막기 & 사라지게하기
    modal_show.click(function (event) {
        event.preventDefault();
        modal.fadeOut();
    });

    //주메뉴, 서브메뉴세팅

    let main_menu = $('.main-menu');
    let sub_menu = $('.sub-menu');
    let menu_timer;

    function late() {
        sub_menu.stop().slideUp('fast');
    }

    main_menu.mouseenter(function () {
        clearTimeout(menu_timer);
        sub_menu.stop().slideDown('fast');
    });

    main_menu.mouseleave(function () {
        clearTimeout(menu_timer);
        menu_timer = setTimeout(late, 800);
    });

    sub_menu.mouseenter(function () {
        clearTimeout(menu_timer);
    });

    sub_menu.mouseleave(function () {
        clearTimeout(menu_timer);
        sub_menu.stop().slideUp('fast');
    });

});