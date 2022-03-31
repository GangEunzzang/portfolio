//스크롤 1000이상 넘어가면 메뉴바 폰트색깔 black으로 변경
$(window).scroll(function () {
    var scrollValue = $(document).scrollTop();
    if(scrollValue >= 1000)  $('a').css("color","black");
    else $('a').css("color","white");
});
