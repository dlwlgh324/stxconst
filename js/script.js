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

    //포커스유지
    let sub_box_li = $('.sub-box>li');
    let main_menu_a = $('.main-menu>li>a');

    function late() {
        sub_menu.removeClass('sub-menu-active');
    }

    main_menu.mouseenter(function () {
        clearTimeout(menu_timer);
        sub_menu.addClass('sub-menu-active');
    });

    main_menu.mouseleave(function () {
        clearTimeout(menu_timer);
        menu_timer = setTimeout(late, 300);
    });

    sub_menu.mouseenter(function () {
        clearTimeout(menu_timer);
    });

    sub_menu.mouseleave(function () {
        clearTimeout(menu_timer);
        sub_menu.removeClass('sub-menu-active');
    });

    // 주메뉴 포커스 유지
    $.each(sub_box_li, function (index, item) {
        sub_box_li.eq(index).mouseenter(function () {
            main_menu_a.removeClass('main-menu-active');
            main_menu_a.eq(index).addClass('main-menu-active');
        });
        sub_box_li.eq(index).mouseleave(function () {
            main_menu_a.removeClass('main-menu-active');
        });
    });

    // 부드럽게 위치 이동하는 코드
    var moveEl = $('.move');
    // 클릭시 해당위치로 부드럽게 이동한다.
    $.each(moveEl, function () {

        $(this).click(function (e) {
            // href 를 일단 막아서 위치이동 못하게함.
            e.preventDefault();
            // 가야하는 곳의 위치를 파악한다.
            var tg = $(this).attr('href');
            var num;
            // 혹시 #아이디 가 없다면
            if (tg == '#') {
                num = 0;
            } else {
                // 어느 만큼 이동해야 하는 지를 숫자로 파악한다.
                num = $(tg).offset().top;
            }

            // 움직이자
            $('html, body').stop().animate({
                scrollTop: num
            }, 400);
        });
    });
});