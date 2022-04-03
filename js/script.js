


//스크롤 1000이상 넘어가면 메뉴바 폰트색깔 black으로 변경
$(window).scroll(function () {
    var scrollValue = $(document).scrollTop();
    if(scrollValue >= 1000)  $('a').css("color","black");
    else $('a').css("color","white");
});


//TOP 버튼
function hasScrollBehavior() {
    return 'scrollBehavior' in document.documentElement.style;
  }
  
  function smoothScroll() {
    var currentY = window.scrollY;
    var int = setInterval(function () {
      window.scrollTo(0, currentY);
  
      if (currentY > 500) {
        currentY -= 70;
      } else if (currentY > 100) {
        currentY -= 50;
      } else {
        currentY -= 10;
      }
  
      if (currentY <= 0) clearInterval(int);
    }, 1000 / 60); 
  }
  
  function scrollToTop() {
    if (hasScrollBehavior()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      smoothScroll();
    }
  }
  
  function toggleScrollUpButton() {
    var y = window.scrollY;
    var e = document.getElementById('scroll-to-top');
    if (y >= 350) {
      e.style.transform = 'translateY(-30%)'
      e.style.opacity = 1;
    } else {
      e.style.opacity = 0;
      e.style.transform = 'translateY(30%)'
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.removeEventListener("DOMContentLoaded", arguments.callee, false);
  
    window.addEventListener("scroll", toggleScrollUpButton);
  
    var e = document.getElementById('scroll-to-top');
    e.addEventListener('click', scrollToTop, false);
  }, false);