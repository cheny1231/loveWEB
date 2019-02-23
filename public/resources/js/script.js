$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-form').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-form').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-form').offset().top - 60}, 600); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-photos').offset().top - 60}, 600); 
    });
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 60
            }, 600);
            return false;
          }
        }
      });
    });
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });

    /* Check form value */
    $('#checkForm').click(function() {
        console.log('checkForm');
        var bday = $('#bday');
        var mday = $('#mday');
        var prefer = $('#prefer');
        var message = $('#message');
        // check bday
        console.log(bday.val());
        if (bday.val() == '1994-12-31') {
            console.log("correct bday!");
            bday.css("border-color", "#2ed573");
        } else {
            bday.css("border-color", "#ff4757");
        }

        // check mday
        if (mday.val() == '2019-02-06' || mday.val() == '2019-02-11') {
            console.log("correct mday!");
            mday.css("border-color", "#2ed573");
        } else {
            mday.css("border-color", "#ff4757");
        }

        // check prefer
        if (prefer.val() == 'no') {
            console.log("correct prefer!");
            prefer.css("border-color", "#2ed573");
        } else {
            prefer.css("border-color", "#ff4757");
        }

        // check message
        if (message.val() != "") {
            console.log(message.val());
            message.css("border-color", "#2ed573");
        } else {
            message.css("border-color", "#ff4757");
        }
    })






});