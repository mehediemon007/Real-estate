;(function($){

  var totop = $('#toTop'),
      win = $(window);

  // scrollTop init
  win.on('scroll', function () {
    if (win.scrollTop() > 150) {
        totop.fadeIn();
    } else {
        totop.fadeOut();
    }
  });

  // totop scroller
  totop.on('click', function () {
    $("html,body").animate({
        scrollTop: 0
    }, 500)
});

  
    // Counter

    if($('.counter').length){

      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
      
    }

    // Aos
  
    $(window).on("scroll", function () {
        AOS.init();
    });
    
    // Toggle Nav Menu
  
    $(".nav-toggle").on("click",function(){
  
        $(".ds-main-nav").toggleClass("show")
    })
  
    // Nav Modal
  
    $(".nav-icon .nav-search").on("click",function(){
  
      $(".nav-modal").addClass("show");
  
    })
  
    $(".serach-close").on("click",function(){
  
        $(".nav-modal").removeClass("show")
  
    })

    // Sub Menu

    $(".nav-menu li.has-children > a").on('click',function(e){

      e.preventDefault();
      $(this).next(".sub-menu").slideToggle();
    })
  
  })(jQuery);
  
  (function(){
  
    // Sticky Nav
    
    const headerContainer = document.querySelector(".ds-header");
    window.onscroll = ()=>{
            this.scrollY > 100 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
    }

    // Theme Change

    const checkbox = document.getElementById('theme-checkbox');

    checkbox.addEventListener('change', ()=>{
      document.body.classList.toggle('light-theme');
    })
  
  
  })()
  
  
  