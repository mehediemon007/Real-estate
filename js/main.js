;(function($){

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
  
  
  })()
  
  
  