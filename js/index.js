$(function(){

    // 헤더 탭 클릭시
    $('.hdrWrap ul li').click(function(){
        $('.hdrWrap ul li').removeClass('on0');
        $(this).addClass('on0');
    });

    $('.hdrWrap h4').click(function(){
        $(this).addClass('on0');
    });


    // 항공검색 배너 버튼
    // 상단 버튼
    $('.bnrWrap.bnr01 .txtTop ul li').eq(1).addClass('on1');
    $('.bnrWrap.bnr01 .txtTop ul li').click(function(){
        $('.bnrWrap.bnr01 .txtTop ul li').removeClass('on1');
        $(this).addClass('on1');
    });
    // 중간 버튼
    $('.bnrWrap.bnr01 .txtMid .btns .btn').eq(0).addClass('on2');
    $('.bnrWrap.bnr01 .txtMid .btns .btn').click(function(){
        $('.bnrWrap.bnr01 .txtMid .btns .btn').removeClass('on2');
        $(this).addClass('on2');s
    });

    // 컨텐츠1 텍스트 등장 효과
    $('.cntWrap.cnt01 section article').mouseenter(function(){
        $('.cntWrap.cnt01 section article .image').removeClass('show1');
        $('.cntWrap.cnt01 section article .texts').removeClass('show2');
        $(this).find('.image').addClass('show1');
        $(this).find('.texts').addClass('show2');
    });

    // 컨텐츠4 무한슬라이드
    var i = 0;
    var left = $('.cntWrap.cnt04 section .btns .btn').eq(0);
    var right = $('.cntWrap.cnt04 section .btns .btn').eq(3);
    var stop = $('.cntWrap.cnt04 section .btns .btn').eq(1);
    var play = $('.cntWrap.cnt04 section .btns .btn').eq(2);
    var txt = $('.cntWrap.cnt04 section .txtGroup');
    var img = $('.cntWrap.cnt04 section .imgGroup');
    var li = $('.cntWrap.cnt04 ul.paging li');

    // 왼쪽버튼
    function leftSlide(){
        i++
        i= i%5;
        txt.css(
            'marginLeft', i * -100 +'%'
        )
        img.css(
            'marginLeft', i * -100 +'%'
        )
        // li.removeClass('on4');
        // li.eq(i).addClass('on4');

        var col = txt.find('.texts').eq(i).css('background-color');
        // li.eq(i).css('background-color', col);
        li.removeClass().css('background-color', 'white');
        li.eq(i).addClass().css('background-color', col);
        li.removeClass('on4');
        li.eq(i).addClass('on4');
    };
    // 오른쪽버튼
    function rightSlide(){
        i--
        i = (i+5)%5;
        txt.css(
            'marginLeft', i * -100 +'%'
        )
        img.css(
            'marginLeft', i * -100 +'%'
        )
        li.removeClass().css('background-color', 'white');
        li.eq(i).addClass().css('background-color', col);
        li.removeClass('on4');
        li.eq(i).addClass('on4');
    }

    function index(){
        var ind = $(this).index();
        li.removeClass().css('background-color', 'white');
        li.eq(i).addClass().css('background-color', col);
        li.removeClass('on4');
        $(this).addClass('on4');
        txt.css(
            'marginLeft', ind * -100 +'%'
        )
        img.css(
            'marginLeft', ind * -100 +'%'
        )
        i=ind;
    };

    // 페이징 인덱스
    left.click(leftSlide)
    right.click(rightSlide);
    li.click(index);

    // 자동슬라이드(타임)
    var auto = setInterval(leftSlide, 1500);
    stop.click(function(){
        clearInterval(auto);
        stop.css('display','none');
        play.css('display','block');
    })
    play.click(function(){
        auto = setInterval(leftSlide, 1500);
        play.css('display','none');
        stop.css('display','block');
    }); 



    // 탑버튼
    $('.fixBtns .fixBtn').last().click(function(){
        $('html, body').animate({
            scrollTop : 0
        },500);
    });



});