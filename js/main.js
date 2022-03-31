;(function($){

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
  
  })(jQuery);
  
  (function(){
  
  // Sticky Nav
  
  const headerContainer = document.querySelector(".ds-header");
  window.onscroll = ()=>{
          this.scrollY > 100 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
  }
  
    // Banner
  
    // var interleaveOffset = 0.5;
  
    var mySwiper = new Swiper ('.ds-banner', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1200,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          clickable: true,
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
  
        autoplay: {
            delay: 2000,
        },
  
        // on: {
        //   progress: function() {
        //     var swiper = this;
        //     for (var i = 0; i < swiper.slides.length; i++) {
        //       var slideProgress = swiper.slides[i].progress;
        //       var innerOffset = swiper.width * interleaveOffset;
        //       var innerTranslate = slideProgress * innerOffset;
        //       swiper.slides[i].querySelector(".single-slide").style.transform =
        //         "translate3d(" + innerTranslate + "px, 0, 0)";
        //     }      
        //   },
        //   touchStart: function() {
        //     var swiper = this;
        //     for (var i = 0; i < swiper.slides.length; i++) {
        //       swiper.slides[i].style.transition = "";
        //     }
        //   },
        //   setTransition: function(speed) {
        //     var swiper = this;
        //     for (var i = 0; i < swiper.slides.length; i++) {
        //       swiper.slides[i].style.transition = speed + "ms";
        //       swiper.slides[i].querySelector(".single-slide").style.transition =
        //         speed + "ms";
        //     }
        //   }
        // }
        // on: {
        //   slideChangeTransitionStart: function () {
        //       // Slide captions
        //       var swiper = this;
        //       setTimeout(function () {
        //         var currentTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
        //         var currentSubtitle = $(swiper.slides[swiper.activeIndex]).attr("data-subtitle");
        //       }, 500);
        //       gsap.to($(".current-title"), 0.4, {autoAlpha: 0, y: -40, ease: Power1.easeIn});
        //       gsap.to($(".current-subtitle"), 0.4, {autoAlpha: 0, y: -40, delay: 0.15, ease: Power1.easeIn});
        //   },
        //   slideChangeTransitionEnd: function () {
        //           // Slide captions
        //       var swiper = this;
        //       var currentTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
        //       var currentSubtitle = $(swiper.slides[swiper.activeIndex]).attr("data-subtitle");
        //       $(".slide-captions").html(function() {
        //         return "<h2 class='current-title'>" + currentTitle + "</h2>" + "<h3 class='current-subtitle'>" + currentSubtitle + "</h3>";
        //       });
        //       gsap.from($(".current-title"), 0.4, {autoAlpha: 0, y: 40, ease: Power1.easeOut});
        //       gsap.from($(".current-subtitle"), 0.4, {autoAlpha: 0, y: 40, delay: 0.15, ease: Power1.easeOut});
        //   }
        // }
    });
    
    // Slide captions
    var currentTitle = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-title");
    var currentSubtitle = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-subtitle");
    $(".slide-captions").html(function() {
      return "<h2 class='current-title'>" + currentTitle + "</h2>" + "<h3 class='current-subtitle'>" + currentSubtitle + "</h3>";
    });
  
  })()
  
  
  