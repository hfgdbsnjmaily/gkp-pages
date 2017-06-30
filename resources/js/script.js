var document, $, location, window, lightbox, Swiper, setTimeout;

$(document).ready(function() { 
    
    var isTop = true;
    console.log(isTop);
    
/************************************ TITLE ************************************/
    
    var title;
    
    document.querySelector('h1').textContent = '';

    if ($(window).width() < 767) {
        title = "We haven’t been<br> everywhere,<br> but it’s on our list";
    }
    else {
        title = "We haven’t been everywhere,<br> but it’s on our list";
    }

    $(function(){
        
        $(".title").typed({

            strings: [title],
            typeSpeed: 50
        });
    });
    
/************************************ COUNTER - RESULTS ************************************/
    
    $('.title').waypoint(function() {
       
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
                }                
            });
        });
    });

/************************************ ANIMATIONS ON SCROLL ************************************/
    
    $('.counter-results').waypoint(function() {
        
        $('.counter-results').addClass('animated zoomIn');
    }, {
        
        offset: '50%'
    });   
    
    $('.about-us-text').waypoint(function() {
        
        $('.about-us-text').addClass('animated bounceIn');
    }, {
        
        offset: '50%'
    }); 
    
/************************************ STICKY NAVIGATION ************************************/

    
    $('.section-results').waypoint(function(direction) {
        
        if (direction == "down") {
            
            $('.nav').addClass('sticky');
            $('.nav').removeClass('sticky-black');
            isTop = false;
            return isTop;
            
        } else {
            
            $('.nav').removeClass('sticky');
            isTop = true;
            return isTop;
        }
    }, {
        
        offset: '60px'
    });   
    
/************************************ MOBILE NAVIGATION ************************************/
    
    $('.mobile-nav-icon').click(function() {
        
        var nav = $('.main-nav-list');
        var icon = $('.mobile-nav-icon i');

        if (isTop === true) {
            
            $('.nav').addClass('sticky-black');
        }
        
        if (icon.hasClass('ion-navicon-round')) {
            
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            nav.slideToggle("slow");
            
        } else {
            
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            nav.slideToggle( "slow", function() {
                
                 $('.nav').removeClass('sticky-black');
            }); 
        }
    }); 

/************************************ NAVIGATION SCROLL ************************************/     
    
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

/************************************ BUTTONS ************************************/   
    
    $('.more-hide').click(function() {
        
        $('.more-photos').animate({
            
            height: 'toggle'
        }, 100);
    });
    
    $('.scroll-down').click(function(){
        
        $('html, body').animate({
            
            scrollTop: $('.section-results').offset().top -60
        }, 1000);
    });
    
    $('.logo').click(function(){
        
        $('html, body').animate({
            
            scrollTop: $('.header').offset().top -60
        }, 1000);
    });

/* more photos button */    
    
    $(function() {
        
        $('.more-photos').animate({
            
            height: 'toggle'
        }, 100);
    });
    
    	$('.more-hide').click(function(){
            
		var $this = $(this);
		$this.toggleClass('more-hide');
		if($this.hasClass('more-hide')){
            
			$this.text('show more');
            
		} else {
            
			$this.text('hide more');
		}
	});

/************************************ TOOLTIP ON IMAGES ************************************/ 
    
    if ($(window).innerWidth() <= 1023) {
        
        $(document).ready(function() {
            
            $('.tooltip').tooltipster({
                
                theme: 'tooltipster-shadow',
                trigger: 'click',
                animation: 'swing',
                arrow: true,
                distance: -20
            });
        }); 
    }
    
/************************************ GALLERY ************************************/ 
    
    $(function() {
        
        $('#dg-container').gallery({
            
            autoplay: true,
            interval: 3000 
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
    
/************************************ QUOTES ************************************/ 
    
    $(function () {
        
        var quote1 = 'When you go to the mountains, you see them and you admire them. In a sense, they give you a challenge, and you try to express that challenge by climbing them.<br><br>Edmund Hillary';
        var quote2 = 'Mountains are the beginning and the end of all natural scenery.<br><br>John Ruskin';
        var quote3 = 'The only Zen you can find on the tops of mountains is the Zen you bring up there.<br><br>Robert M. Pirsig';
        
        var quoteArr = [quote1, quote2, quote3];
        var used = [quote1];
        var change = $('#changing-quote');
        var item;
        var sentence = $('#sentence');

        function quotes() {
            
            item = quoteArr[Math.floor(Math.random() * quoteArr.length)];
            
            if (quoteArr.length != used.length) {
                
                while (jQuery.inArray(item, used) != -1) {
                    item = quoteArr[Math.floor(Math.random() * quoteArr.length)];
                }
                used.push(item);
                
            } else {
                
                used.length = 0;
                item = quoteArr[Math.floor(Math.random() * quoteArr.length)];
                used.push(item);
            }
            
            change.html(item);
            change.animate({
                "opacity": "1"
            }, 1500);

            sentence.fadeIn(1500);
        }

        window.setInterval(function () {
            
            sentence.fadeOut(1500);
            change.animate({
                
                "opacity": "0"
            }, 1500);
            
            setTimeout(quotes, 1500);
        }, 5000);

    });
    
/************************************ MAPS ************************************/ 
        
    var markerGreen = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/2ecc71/");
    var markerRed = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/e74c3c/");
    
    var crownMountainsArr = [
                                [50.864745, 16.707827, 'Ślęża', markerGreen, 'sleza2.jpg', '15 VIII 2014', '718 m', 'Masyw Ślęży'],
                                [50.7360205, 15.737757, 'Śnieżka', markerGreen, 'sniezka3.jpg', '23 X 2016', '1602 m', 'Karkonosze'],
                                [50.0993116, 16.6902543, 'Śnieżnik', markerGreen, 'snieznik.jpg', '1 II 2015', '1425 m', 'Masyw Śnieżnika'],
                                [49.0745582, 22.724061,'Tarnica', markerGreen, 'tarnica6.jpg', '3 I 2017', '1346 m', 'Bieszczady'],
                                [49.6959665, 19.0039589, 'Skrzyczne', markerGreen, 'skryzczne.jpg', '17 VII 2016', '1257 m', 'Beskid Śląski'],
                                [50.6803483, 16.483309, 'Wielka Sowa', markerGreen, 'wielkasowa.jpg', '20 IX 2015', '1015 m', 'Góry Sowie'],
                                [50.8083367, 15.8992001, 'Skalnik', markerGreen, 'skalnik.jpg', '25 III 2017', '945 m', 'Rudawy Janowickie'],
                                [50.483671, 16.3336122, 'Szczeliniec Wielki', markerGreen, 'szczeliniec2.jpg', '5 VI 2015', '919 m', 'Góry Stołowe'],
                                [50.7791356, 16.2077093, 'Chełmiec', markerGreen, 'chelmiec5.jpg', '5 III 2017', '869 m', 'Góry Wałbrzyskie'],
                                [50.6807542, 16.275888, 'Waligóra', markerGreen, 'waligora.jpg', '20 V 2017', '936 m', 'Góry Kamienne'],
                                [50.891624, 20.896774, 'Łysica', markerRed, 'lysicaX.jpg', '', '612 m', 'Góry Świętokrzyskie'],
                                [49.1795515, 20.0858753, 'Rysy', markerRed, 'rysyX.jpg', '', '2499 m', 'Tatry'],
                                [49.5731663, 19.5286077, 'Babia Góra', markerRed, 'babiaGoraX.jpg', '', '1725 m', 'Beskid Żywiecki'],
                                [49.5429214, 20.1091561, 'Turbacz', markerRed, 'turbaczX.jpg', '', '1310 m', 'Gorce'],
                                [49.4493442, 20.6019427, 'Radziejowa', markerRed, 'radziejowaX.jpg', '', '1262 m', 'Beskid Sądecki'],
                                [49.655234, 20.2746449, 'Mogielica', markerRed, 'mogielicaX.jpg', '', '1170 m', 'Beskid Wyspowy'],
                                [50.8500034, 15.4172557,'Wysoka Kopa', markerRed, 'wysokaKopaX.jpg', '', '1126 m', 'Góry Izerskie'],
                                [50.2440594, 16.9737003, 'Rudawiec', markerRed, 'rudawiecX.jpg', '', '1112 m', 'Góry Bialskie'],
                                [49.4192215, 20.4559293, 'Orlica', markerRed, 'orlicaX.jpg', '', '1084 m','Góry Orlickie'],
                                [49.1727815, 20.0922553, 'Wysoka', markerRed, 'wysokaX.jpg', '', '1050 m', 'Pieniny'],
                                [49.4294017, 21.0941791,'Lackowa', markerRed, 'lackowaX.jpg', '', '997 m', 'Beskid Niski'],
                                [50.2638922, 17.0117001, 'Kowadło', markerRed, 'kowadloX.jpg', '', '989 m', 'Góry Złote'],
                                [50.2527811, 16.5644779, 'Jagodna', markerRed, 'jagodnaX.jpg', '', '977 m', 'Góry Bystrzyckie'],
                                [49.7661082, 19.1530886, 'Czupel', markerRed, 'czupelX.jpg', '', '934 m', 'Beskid Mały'],
                                [49.76667, 20.0603113, 'Lubomir', markerRed, 'lubomirX.jpg', '', '912 m', 'Beskid Makowski'],
                                [50.2500034, 17.4311446, 'Biskupia Kopa', markerRed, 'biskupiaKopaX.jpg', '', '889 m', 'Góry Opawskie'],
                                [50.4538922, 16.757811, 'Kłodzka Góra', markerRed, 'klodzkaGoraX.jpg', '', '765 m', 'Góry Bardzkie'],
                                [50.9443884, 15.8827756, 'Skopiec', markerRed, 'skopiecX.jpg', '', '724 m', 'Góry Kaczawskie']
                            ]; 
    
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

    var addMarkers = function(arr) {
        
        for (var i = 0; i < arr.length; i++) {
            
            map.addMarker({
                lat: arr[i][0],
                lng: arr[i][1],
                title: arr[i][2],
                icon: arr[i][3],
                infoWindow: {
                    
                    content: arr[i][2]
                }
            });
            
            console.log(this.lat);
            
            mapmobile.addMarker({
                
                lat: arr[i][0],
                lng: arr[i][1],
                title: arr[i][2],
                icon: arr[i][3],
                infoWindow: {
                    
                    content: arr[i][2]
                }
            });
        }
    };
    
    addMarkers(crownMountainsArr);    
    
/************************************ CROWN GALLERY ************************************/ 
    
    var addPhotos = function(arr) {
        
        var html, newHtml, el;

        for (var i = 0; i < arr.length; i++) {
            
            el = '.photos-crown-showcase';
                
            if (arr[i][3] == markerRed) { 
                
                html = '<li><div class="crown-photo-x"><img src="resources/img/%photo_name%" alt="%ALT%" class="tooltip"><h3 class="new-label"><span>%NAME%<br>%HEIGHT%<br></span></h3></div></div></li>';    
                
            } else {
                
                html = '<li><div class="crown-photo"><img src="resources/img/%photo_name%" alt="%ALT%" class="tooltip" title="%TITLE%"><h3 class="new-label"><span>%NAME%<br>%HEIGHT%<br></span></h3><div class="flag-icon"><h3><i class="ion-ios-flag-outline"></i><div>%DATE%</div></h3></div></div></li>';
            }
                
            if (i > 13) {
                
                el = '.more-photos'; 
            }
                
            newHtml = html.replace('%photo_name%', arr[i][4]);
            newHtml = newHtml.replace('%DATE%', arr[i][5]);
            newHtml = newHtml.replace('%NAME%', arr[i][2]);
            newHtml = newHtml.replace('%HEIGHT%', arr[i][6]);
            newHtml = newHtml.replace('%ALT%', arr[i][2]);
            newHtml = newHtml.replace('%TITLE%', arr[i][1]);

            document.querySelector(el).insertAdjacentHTML('beforeend', newHtml);
        }
    };
    
    addPhotos(crownMountainsArr);
    
/************************************ MOBILE CROWN GALLERY ************************************/ 
    
    var addPhotosMobile = function(arr) {
        
        var html, newHtml, el;
        
            for (var i = 0; i < 10; i++) {
                
                el = '.swiper-wrapper';
                
                html = '<div class="swiper-slide"><img src="resources/img/%photo_name%" /><div class="label-mobile">%NAME% %HEIGHT% &mdash; %DATE%</div></div>';
                
                newHtml = html.replace('%photo_name%', arr[i][4]);
                newHtml = newHtml.replace('%DATE%', arr[i][5]);
                newHtml = newHtml.replace('%NAME%', arr[i][2]);
                newHtml = newHtml.replace('%HEIGHT%', arr[i][6]);

                document.querySelector(el).insertAdjacentHTML('beforeend', newHtml);
            }
    };
    
    addPhotosMobile(crownMountainsArr);

    var swiper = new Swiper('.swiper-container', {
        
        pagination: '.swiper-pagination',
        spaceBetween: 10
    });
    
    swiper = new Swiper('.swiper-container-mobile', {});
  
}); //end of script
