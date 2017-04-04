$(document).ready(function() {
    
/* sticky navigation */
    $('.js--section-rules').waypoint(function(direction) {
        if (direction == "down") {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    }); 
    
/* title */
    $(function(){
        $(".title").typed({
            strings: ["We haven’t been everywhere,<br> but it’s on our list"],
            typeSpeed: 50
        });
    });
    
    $(function(){
        $(".title-mobile").typed({
            strings: ["We haven’t been<br> everywhere,<br> but it’s on our list"],
            typeSpeed: 50
        });
    });
    
/* more photos button */    
    
    $(function() {
        $('.more-photos').animate({
            height: 'toggle'
        }, 100);
    });
        
/* map */ 
    var map = new GMaps({
        div: '.map',
        lat: 50.7214316,
        lng: 23.2134931,
        zoom: 7
    });
    
    var mapmobile = new GMaps({
        div: '.map-mobile',
        lat: 50.568984,
        lng: 18.8597001,
        zoom: 7
    });
    
    var markerGreen = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/2ecc71/");
    var markerRed = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/e74c3c/");
    
/* górska korona polski */
    
    map.addMarker({
        lat: 50.891624,
        lng: 20.896774,
        title: 'Łysica',
        icon: markerRed,
        infoWindow: {
            content: '<p>Łysica</p>'
        }
    });  
    
    map.addMarker({
        lat: 50.864745, 
        lng: 16.707827,
        title: 'Ślęża',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Ślęża</p>'
        }
    });
    
    map.addMarker({
        lat: 50.9443884,
        lng: 15.8827756,
        title: 'Skopiec',
        icon: markerRed,
        infoWindow: {
            content: '<p>Skopiec</p>'
        }
    });  
    
    map.addMarker({
        lat: 50.4538922,
        lng: 16.757811,
        title: 'Kłodzka Góra',
        icon: markerRed,
        infoWindow: {
            content: '<p>Kłodzka Góra</p>'
        }
    });   
    
    map.addMarker({
        lat: 50.7791356,
        lng: 16.2077093,
        title: 'Chełmiec',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Chełmiec</p>'
        }
    });  
    
    map.addMarker({
        lat: 50.2500034,
        lng: 17.4311446,
        title: 'Biskupia Kopa',
        icon: markerRed,
        infoWindow: {
            content: '<p>Biskupia Kopa</p>'
        }
    });  
    
    map.addMarker({
        lat: 49.76667,
        lng: 20.0603113,
        title: 'Lubomir',
        icon: markerRed,
        infoWindow: {
            content: '<p>Lubomir</p>'
        }
    });  
    
    map.addMarker({
        lat: 50.483671,
        lng: 16.3336122,
        title: 'Szczeliniec Wielki',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Szczeliniec Wielki</p>'
        }
    });      
    
    map.addMarker({
        lat: 49.7661082,
        lng: 19.1530886,
        title: 'Czupel',
        icon: markerRed,
        infoWindow: {
            content: '<p>Czupel</p>'
        }
    });      
    
    map.addMarker({
        lat: 50.6807542,
        lng: 16.275888,
        title: 'Waligóra',
        icon: markerRed,
        infoWindow: {
            content: '<p>Waligóra</p>'
        }
    });    
    
    map.addMarker({
        lat: 50.8083367,
        lng: 15.8992001,
        title: 'Skalnik',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Skalnik</p>'
        }
    });  
    
    map.addMarker({
        lat: 50.2527811,
        lng: 16.5644779,
        title: 'Jagodna',
        icon: markerRed,
        infoWindow: {
            content: '<p>Jagodna</p>'
        }
    });  
    
    map.addMarker({
        lat: 50.2638922,
        lng: 17.0117001,
        title: 'Kowadło',
        icon: markerRed,
        infoWindow: {
            content: '<p>Kowadło</p>'
        }
    });     
    
    map.addMarker({
        lat: 49.4294017,
        lng: 21.0941791,
        title: 'Lackowa',
        icon: markerRed,
        infoWindow: {
            content: '<p>Lackowa</p>'
        }
    });      
    
    map.addMarker({
        lat: 50.6803483,
        lng: 16.483309,
        title: 'Wielka Sowa',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Wielka Sowa</p>'
        }
    });     
    
    map.addMarker({
        lat: 49.1727815,
        lng: 20.0922553,
        title: 'Wysoka',
        icon: markerRed,
        infoWindow: {
            content: '<p>Wysoka</p>'
        }
    });  
    
    map.addMarker({
        lat: 49.4192215,
        lng: 20.4559293,
        title: 'Orlica',
        icon: markerRed,
        infoWindow: {
            content: '<p>Orlica</p>'
        }
    });     
    
    map.addMarker({
        lat: 50.2440594,
        lng: 16.9737003,
        title: 'Rudawiec',
        icon: markerRed,
        infoWindow: {
            content: '<p>Rudawiec</p>'
        }
    });    
    
    map.addMarker({
        lat: 50.8500034,
        lng: 15.4172557,
        title: 'Wysoka Kopa',
        icon: markerRed,
        infoWindow: {
            content: '<p>Wysoka Kopa</p>'
        }
    });   
    
    map.addMarker({
        lat: 49.655234,
        lng: 20.2746449,
        title: 'Mogielica',
        icon: markerRed,
        infoWindow: {
            content: '<p>Mogielica</p>'
        }
    });   
    
    map.addMarker({
        lat: 49.6959665,
        lng: 19.0039589,
        title: 'Skrzyczne',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Skrzyczne</p>'
        }
    });  
    
    map.addMarker({
        lat: 49.4493442,
        lng: 20.6019427,
        title: 'Radziejowa',
        icon: markerRed,
        infoWindow: {
            content: '<p>Radziejowa</p>'
        }
    });   
    
    map.addMarker({
        lat: 49.5429214,
        lng: 20.1091561,
        title: 'Turbacz',
        icon: markerRed,
        infoWindow: {
            content: '<p>Turbacz</p>'
        }
    });    
    
    map.addMarker({
        lat: 49.0745582,
        lng: 22.724061,
        title: 'Tarnica',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Tarnica</p>'
        }
    });      
    
    map.addMarker({
        lat: 50.0993116,
        lng: 16.6902543,
        title: 'Śnieżnik',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Śnieżnik</p>'
        }
    });      
    
    map.addMarker({
        lat: 50.7360205,
        lng: 15.737757,
        title: 'Śnieżka',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Śnieżka</p>'
        }
    });     
    
    map.addMarker({
        lat: 49.5731663,
        lng: 19.5286077,
        title: 'Babia Góra',
        icon: markerRed,
        infoWindow: {
            content: '<p>Babia Góra</p>'
        }
    });    
    
    map.addMarker({
        lat: 49.1795515,
        lng: 20.0858753,
        title: 'Rysy',
        icon: markerRed,
        infoWindow: {
            content: '<p>Rysy</p>'
        }
    });
        
        mapmobile.addMarker({
        lat: 50.891624,
        lng: 20.896774,
        title: 'Łysica',
        icon: markerRed,
        infoWindow: {
            content: '<p>Łysica</p>'
        }
    });  
    
    mapmobile.addMarker({
        lat: 50.864745, 
        lng: 16.707827,
        title: 'Ślęża',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Ślęża</p>'
        }
    });
    
    mapmobile.addMarker({
        lat: 50.9443884,
        lng: 15.8827756,
        title: 'Skopiec',
        icon: markerRed,
        infoWindow: {
            content: '<p>Skopiec</p>'
        }
    });  
    
    mapmobile.addMarker({
        lat: 50.4538922,
        lng: 16.757811,
        title: 'Kłodzka Góra',
        icon: markerRed,
        infoWindow: {
            content: '<p>Kłodzka Góra</p>'
        }
    });   
    
    mapmobile.addMarker({
        lat: 50.7791356,
        lng: 16.2077093,
        title: 'Chełmiec',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Chełmiec</p>'
        }
    });  
    
    mapmobile.addMarker({
        lat: 50.2500034,
        lng: 17.4311446,
        title: 'Biskupia Kopa',
        icon: markerRed,
        infoWindow: {
            content: '<p>Biskupia Kopa</p>'
        }
    });  
    
    mapmobile.addMarker({
        lat: 49.76667,
        lng: 20.0603113,
        title: 'Lubomir',
        icon: markerRed,
        infoWindow: {
            content: '<p>Lubomir</p>'
        }
    });  
    
    mapmobile.addMarker({
        lat: 50.483671,
        lng: 16.3336122,
        title: 'Szczeliniec Wielki',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Szczeliniec Wielki</p>'
        }
    });      
    
    mapmobile.addMarker({
        lat: 49.7661082,
        lng: 19.1530886,
        title: 'Czupel',
        icon: markerRed,
        infoWindow: {
            content: '<p>Czupel</p>'
        }
    });      
    
    mapmobile.addMarker({
        lat: 50.6807542,
        lng: 16.275888,
        title: 'Waligóra',
        icon: markerRed,
        infoWindow: {
            content: '<p>Waligóra</p>'
        }
    });    
    
    mapmobile.addMarker({
        lat: 50.8083367,
        lng: 15.8992001,
        title: 'Skalnik',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Skalnik</p>'
        }
    });  
    
    mapmobile.addMarker({
        lat: 50.2527811,
        lng: 16.5644779,
        title: 'Jagodna',
        icon: markerRed,
        infoWindow: {
            content: '<p>Jagodna</p>'
        }
    });  
    
    mapmobile.addMarker({
        lat: 50.2638922,
        lng: 17.0117001,
        title: 'Kowadło',
        icon: markerRed,
        infoWindow: {
            content: '<p>Kowadło</p>'
        }
    });     
    
    mapmobile.addMarker({
        lat: 49.4294017,
        lng: 21.0941791,
        title: 'Lackowa',
        icon: markerRed,
        infoWindow: {
            content: '<p>Lackowa</p>'
        }
    });      
    
    mapmobile.addMarker({
        lat: 50.6803483,
        lng: 16.483309,
        title: 'Wielka Sowa',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Wielka Sowa</p>'
        }
    });     
    
    mapmobile.addMarker({
        lat: 49.1727815,
        lng: 20.0922553,
        title: 'Wysoka',
        icon: markerRed,
        infoWindow: {
            content: '<p>Wysoka</p>'
        }
    });  
    
    mapmobile.addMarker({
        lat: 49.4192215,
        lng: 20.4559293,
        title: 'Orlica',
        icon: markerRed,
        infoWindow: {
            content: '<p>Orlica</p>'
        }
    });     
    
    mapmobile.addMarker({
        lat: 50.2440594,
        lng: 16.9737003,
        title: 'Rudawiec',
        icon: markerRed,
        infoWindow: {
            content: '<p>Rudawiec</p>'
        }
    });    
    
    mapmobile.addMarker({
        lat: 50.8500034,
        lng: 15.4172557,
        title: 'Wysoka Kopa',
        icon: markerRed,
        infoWindow: {
            content: '<p>Wysoka Kopa</p>'
        }
    });   
    
    mapmobile.addMarker({
        lat: 49.655234,
        lng: 20.2746449,
        title: 'Mogielica',
        icon: markerRed,
        infoWindow: {
            content: '<p>Mogielica</p>'
        }
    });   
    
    mapmobile.addMarker({
        lat: 49.6959665,
        lng: 19.0039589,
        title: 'Skrzyczne',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Skrzyczne</p>'
        }
    });  
    
    mapmobile.addMarker({
        lat: 49.4493442,
        lng: 20.6019427,
        title: 'Radziejowa',
        icon: markerRed,
        infoWindow: {
            content: '<p>Radziejowa</p>'
        }
    });   
    
    mapmobile.addMarker({
        lat: 49.5429214,
        lng: 20.1091561,
        title: 'Turbacz',
        icon: markerRed,
        infoWindow: {
            content: '<p>Turbacz</p>'
        }
    });    
    
    mapmobile.addMarker({
        lat: 49.0745582,
        lng: 22.724061,
        title: 'Tarnica',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Tarnica</p>'
        }
    });      
    
    mapmobile.addMarker({
        lat: 50.0993116,
        lng: 16.6902543,
        title: 'Śnieżnik',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Śnieżnik</p>'
        }
    });      
    
    mapmobile.addMarker({
        lat: 50.7360205,
        lng: 15.737757,
        title: 'Śnieżka',
        icon: markerGreen,
        infoWindow: {
            content: '<p>Śnieżka</p>'
        }
    });     
    
    mapmobile.addMarker({
        lat: 49.5731663,
        lng: 19.5286077,
        title: 'Babia Góra',
        icon: markerRed,
        infoWindow: {
            content: '<p>Babia Góra</p>'
        }
    });    
    
    mapmobile.addMarker({
        lat: 49.1795515,
        lng: 20.0858753,
        title: 'Rysy',
        icon: markerRed,
        infoWindow: {
            content: '<p>Rysy</p>'
        }
    });  
    
/* buttons */   
    $('.js--more-hide').click(function() {
        $('.more-photos').animate({
            height: 'toggle'
        }, 100);
    });
    
    $('.js--scroll-down').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-rules').offset().top -60}, 1000);
    });
    
    $('.js--logo').click(function(){
        $('html, body').animate({scrollTop: $('.js--start').offset().top -60}, 1000);
    });
    
/* gallery */
    
    $(function() {
        $('#dg-container').gallery({
            autoplay: true,
            interval: 2000 
        });
			});
    var modal = document.getElementById('myModal');
    lightbox('.lightbox',{
        captions: false,
        nav: "auto",
        navText: ["‹", "›"],
        close: false,
        counter: true,
        keyboard: true,
        zoom: false,
        docClose: true,
        swipeClose: true,
        scroll: false
    });
    
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        spaceBetween: 10,
    });
    
    var swiper = new Swiper('.swiper-container-mobile', {
      
    });
    
/* navigation scroll */      
    
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top -60
            }, 1000);
            return false;
          }
        }
      });
    }); 
     
/* animations on scroll */  
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated zoomIn');
    }, {
        offset: '50%'
    });   
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated bounceIn');
    }, {
        offset: '50%'
    });  
    
 /* mobile navigation */  
    
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
    
 /* results - counter */  
    
    $('.js--wp-3').waypoint(function(direction) {
    
    $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });  
  
  
});
    });
    
});