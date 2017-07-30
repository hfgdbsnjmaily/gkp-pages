$(document).ready(function() {

    let isTop = true;


/************************************ TITLE ************************************/

    let title;

    document.querySelector('h1').textContent = '';

    $(window).width() < 767 ? title = 'We haven’t been<br> everywhere,<br> but it’s on our list' : title = 'We haven’t been everywhere,<br> but it’s on our list';

    const typed = new Typed('.header__title', {
        strings: [title],
        typeSpeed: 50
    });

/************************************ COUNTER - RESULTS ************************************/
    let headerWaypoint = new Waypoint({
        element: $('.header__title')[0],
        handler: ()=> {

        $('.section-results').addClass('animated zoomIn');

        $('.section-results__counter').each(function() {

            let $this = $(this),
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
    }});

/************************************ ANIMATIONS ON SCROLL ************************************/


    /*let waypointAboutUs = new Waypoint({
        element: $('about-us')[0],
        handler: ()=> {

        $('about-us').addClass('animated bounceIn');
    }}, {

        offset: '50%'
    });*/

/************************************ STICKY NAVIGATION ************************************/
    let stickyWaypoint = new Waypoint({
      element: $('.section-results')[0],
      handler: direction => {

        if (direction == 'down') {

            $('nav').addClass('sticky');
            $('nav').removeClass('sticky-black');
            isTop = false;
            return isTop;

        } else {

            $('nav').removeClass('sticky');
            isTop = true;
            return isTop;
        }
      }
    }, {

        offset: 60
    });

/************************************ MOBILE NAVIGATION ************************************/

    $('.header__nav-icon_mobile').click(() => {

        const nav = $('.header__nav-list');
        const icon = $('.header__nav-icon_mobile i');

        isTop === true ? $('.header__nav').addClass('sticky-black') : null;

        if (icon.hasClass('ion-navicon')) {

            icon.addClass('ion-ios-close-empty');
            icon.removeClass('ion-navicon');
            nav.slideToggle('slow');

        } else {

            icon.addClass('ion-navicon');
            icon.removeClass('ion-ios-close-empty');
            nav.slideToggle( 'slow', function() {

                 $('.header__nav').removeClass('sticky-black');
            });
        }
    });

/************************************ NAVIGATION SCROLL ************************************/

        $('a[href*="#"]:not([href="#"])').click(function() {

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

          if (target.length) {

            $('html, body').animate({

              scrollTop: target.offset().top -60
            }, 1000);

            return false;
          }
        }
      });

/************************************ BUTTONS ************************************/

    $('.section-photos-crown__button_ghost_more-hide').click(() => {

        $('.more-photos').animate({

            height: 'toggle'
        }, 100);
    });

    $('.header__scroll-down').click(() => {

        $('html, body').animate({

            scrollTop: $('.section-results').offset().top -60
        }, 1000);
    });

    $('.logo').click(() => {

        $('html, body').animate({

            scrollTop: $('.header').offset().top -60
        }, 1000);
    });

/* more photos button */

    $(() => {

        $('.more-photos').animate({

            height: 'toggle'
        }, 100);
    });


    const button = document.querySelectorAll('.section-photos-crown__button_ghost_more-hide')[0];

    button.addEventListener('click', function() {

        const element = document.querySelector('.section-photos-crown');

        if (button.getAttribute('data-text-swap') == button.innerHTML) {
            button.innerHTML = button.getAttribute('data-text-original');
            element.style.height = '5000 px';
        } else {

            button.setAttribute('data-text-original', button.innerHTML);
            button.innerHTML = button.getAttribute('data-text-swap');
            element.style.height = '6000 px';
        }

    }, false);
/************************************ TOOLTIP ON IMAGES ************************************/

        $('.tooltip').tooltipster({

            theme: 'tooltipster-shadow',
            trigger: 'hover',
            animation: 'grow',
            arrow: false,
            distance: -100,
            contentAsHTML: true,
            maxWidth: 190,
            timer: 500
        });

/************************************ QUOTES ************************************/

        const quote1 = 'When you go to the mountains, you see them and you admire them. <br>In a sense, they give you a challenge, and you try to express that challenge by climbing them.<br><br>Edmund Hillary';
        const quote2 = 'Mountains are the beginning and the end of all natural scenery.<br><br>John Ruskin';
        const quote3 = 'The only Zen you can find on the tops of mountains is the Zen you bring up there.<br><br>Robert M. Pirsig';

        const quoteArr = [quote1, quote2, quote3];
        const used = [quote1];
        const change = $('.section-quote__changing-quote');
        let item;
        const sentence = $('.section-quote__sentence');

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
                'opacity': '1'
            }, 1500);

            sentence.fadeIn(1500);
        }

        window.setInterval(() => {

            sentence.fadeOut(1500);
            change.animate({

                'opacity': '0'
            }, 1500);

            setTimeout(quotes, 1500);
        }, 5000);

/************************************ MAPS ************************************/

    const markerGreen = new google.maps.MarkerImage('http://www.googlemapsmarkers.com/v1/2ecc71/');
    const markerRed = new google.maps.MarkerImage('http://www.googlemapsmarkers.com/v1/e74c3c/');

    const crownMountainsPhotosArr = [
        ['wysokaKopa.jpg', 'wysokakopa2.jpg', 'wysokakopa3.jpg', 'wysokakopa4.jpg', 'wysokakopa5.jpg', 'wysokakopa6.jpg'],
        ['waligora.jpg', 'waligora2.jpg', 'waligora3.jpg', 'waligora4.jpg'],
        ['skalnik.jpg', 'skalnik2.jpg', 'skalnik3.jpg', 'skalnik4.jpg', 'skalnik5.jpg', 'skalnik6.jpg'],
        ['chelmiec.jpg', 'chelmiec2.jpg', 'chelmiec3.jpg', 'chelmiec4.jpg', 'chelmiec5.jpg',  'chelmiec6.jpg',  'chelmiec7.jpg',  'chelmiec8.jpg', 'chelmiec9.jpg'],
        ['tarnica.jpg', 'tarnica2.jpg', 'tarnica3.jpg', 'tarnica4.jpg', 'tarnica5.jpg', 'tarnica7.jpg', 'tarnica8.jpg', 'tarnica9.jpg', 'tarnica10.jpg', 'tarnica11.jpg', 'tarnica12.jpg', 'tarnica13.jpg', 'tarnica14.jpg'],
        ['sniezka.jpg', 'sniezka2.jpg', 'sniezka3.jpg', 'sniezka4.jpg', 'sniezka5.jpg', 'sniezka6.jpg', 'sniezka7.jpg', 'sniezka8.jpg', 'sniezka9.jpg'],
        ['skrzyczne.jpg', 'skrzyczne2.jpg', 'skrzyczne3.jpg', 'skrzyczne4.jpg', 'skrzyczne5.jpg', 'skrzyczne6.jpg', 'skrzyczne7.jpg', 'skrzyczne8.jpg', 'skrzyczne9.jpg'],
        ['wielkasowa.jpg'],
        ['szczeliniec.jpg', 'szczeliniec2.jpg', 'szczeliniec3.jpg', 'szczeliniec4.jpg'],
        ['snieznik.jpg', 'snieznik2.jpg', 'snieznik3.jpg', 'snieznik4.jpg'],
        ['sleza.jpg', 'sleza2.jpg', 'sleza3.jpg', 'sleza4.jpg', 'sleza5.jpg', 'sleza6.jpg', 'sleza7.jpg'],
        ['skopiec.jpg', 'skopiec2.jpg', 'skopiec3.jpg', 'skopiec4.jpg', 'skopiec5.jpg', 'skopiec6.jpg', 'skopiec7.jpg']
    ];

    const crownMountainsArr = [
        [50.9443884, 15.8827756, 'Skopiec', markerGreen, crownMountainsPhotosArr[11], '22 VII 2017', '724 m', 'Góry Kaczawskie', 'skopiec'],
        [50.8500034, 15.4172557,'Wysoka Kopa', markerGreen, crownMountainsPhotosArr[0], '8 VII 2017', '1126 m', 'Góry Izerskie', 'wysokaKopa'],
        [50.6807542, 16.275888, 'Waligóra', markerGreen, crownMountainsPhotosArr[1], '20 V 2017', '936 m', 'Góry Kamienne', 'waligora'],
        [50.8083367, 15.8992001, 'Skalnik', markerGreen, crownMountainsPhotosArr[2], '25 III 2017', '945 m', 'Rudawy Janowickie', 'skalnik'],
        [50.7791356, 16.2077093, 'Chełmiec', markerGreen, crownMountainsPhotosArr[3], '5 III 2017', '869 m', 'Góry Wałbrzyskie', 'chelmiec'],
        [49.0745582, 22.724061,'Tarnica', markerGreen, crownMountainsPhotosArr[4], '3 I 2017', '1346 m', 'Bieszczady', 'tarnica'],
        [50.7360205, 15.737757, 'Śnieżka', markerGreen, crownMountainsPhotosArr[5], '23 X 2016', '1602 m', 'Karkonosze','sniezka'],
        [49.6959665, 19.0039589, 'Skrzyczne', markerGreen, crownMountainsPhotosArr[6], '17 VII 2016', '1257 m', 'Beskid Śląski', 'skrzyczne'],
        [50.6803483, 16.483309, 'Wielka Sowa', markerGreen, crownMountainsPhotosArr[7], '20 IX 2015', '1015 m', 'Góry Sowie', 'wielkaSowa'],
        [50.483671, 16.3336122, 'Szczeliniec', markerGreen, crownMountainsPhotosArr[8], '5 VI 2015', '919 m', 'Góry Stołowe', 'szczeliniec'],
        [50.0993116, 16.6902543, 'Śnieżnik', markerGreen, crownMountainsPhotosArr[9], '1 II 2015', '1425 m', 'Masyw Śnieżnika', 'snieznik'],
        [50.864745, 16.707827, 'Ślęża', markerGreen, crownMountainsPhotosArr[10], '15 VIII 2014', '718 m', 'Masyw Ślęży', 'sleza'],
        [50.891624, 20.896774, 'Łysica', markerRed, 'lysicaX.jpg', '', '612 m', 'Góry Świętokrzyskie'],
        [49.1795515, 20.0858753, 'Rysy', markerRed, 'rysyX.jpg', '', '2499 m', 'Tatry'],
        [49.5731663, 19.5286077, 'Babia Góra', markerRed, 'babiaGoraX.jpg', '', '1725 m', 'Beskid Żywiecki'],
        [49.5429214, 20.1091561, 'Turbacz', markerRed, 'turbaczX.jpg', '', '1310 m', 'Gorce'],
        [49.4493442, 20.6019427, 'Radziejowa', markerRed, 'radziejowaX.jpg', '', '1262 m', 'Beskid Sądecki'],
        [49.655234, 20.2746449, 'Mogielica', markerRed, 'mogielicaX.jpg', '', '1170 m', 'Beskid Wyspowy'],
        [50.2440594, 16.9737003, 'Rudawiec', markerRed, 'rudawiecX.jpg', '', '1112 m', 'Góry Bialskie'],
        [49.4192215, 20.4559293, 'Orlica', markerRed, 'orlicaX.jpg', '', '1084 m','Góry Orlickie'],
        [49.1727815, 20.0922553, 'Wysoka', markerRed, 'wysokaX.jpg', '', '1050 m', 'Pieniny'],
        [49.4294017, 21.0941791,'Lackowa', markerRed, 'lackowaX.jpg', '', '997 m', 'Beskid Niski'],
        [50.2638922, 17.0117001, 'Kowadło', markerRed, 'kowadloX.jpg', '', '989 m', 'Góry Złote'],
        [50.2527811, 16.5644779, 'Jagodna', markerRed, 'jagodnaX.jpg', '', '977 m', 'Góry Bystrzyckie'],
        [49.7661082, 19.1530886, 'Czupel', markerRed, 'czupelX.jpg', '', '934 m', 'Beskid Mały'],
        [49.76667, 20.0603113, 'Lubomir', markerRed, 'lubomirX.jpg', '', '912 m', 'Beskid Makowski'],
        [50.2500034, 17.4311446, 'Biskupia Kopa', markerRed, 'biskupiaKopaX.jpg', '', '889 m', 'Góry Opawskie'],
        [50.4538922, 16.757811, 'Kłodzka Góra', markerRed, 'klodzkaGoraX.jpg', '', '765 m', 'Góry Bardzkie']

    ];


    const map = new GMaps({

        div: '.section-map__map',
        lat: 50.7214316,
        lng: 23.2134931,
        zoom: 7
    });

    const mapmobile = new GMaps({

        div: '.section-map__map_mobile',
        lat: 50.568984,
        lng: 18.8597001,
        zoom: 7
    });

    let addMarkers = function(arr) {

        for (let i = 0; i < arr.length; i++) {

            map.addMarker({
                lat: arr[i][0],
                lng: arr[i][1],
                title: arr[i][2],
                icon: arr[i][3],
                infoWindow: {

                    content: arr[i][2]
                }
            });

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

    let addPhotos = function(arr) {

        let html, newHtml, el;

        for (let i = 0; i < arr.length; i++) {

            el = '.section-photos-crown__photos-all';

            if (arr[i][3] == markerRed) {

                html = '<div class="section-more-photos__photo-box"><li><div class="section-photos-crown__crown-photo_dark"><img src="images/%photo_name_x%" alt="%ALT%"><h3 class="new-label"><span>%NAME%<br>%HEIGHT%<br></span></h3></div></div></li></div>';

            } else {

                html = '<div class="section-more-photos__photo-box" id="%gallery_name%"><ul class="section-more-photos__photos clearfix %gallery_name1%">';
            }

            if (i > 13) {

                el = '.more-photos';
            }

            newHtml = html.replace('%photo_name_x%', arr[i][4]);
            newHtml = newHtml.replace('%NAME%', arr[i][2]);
            newHtml = newHtml.replace('%HEIGHT%', arr[i][6]);
            newHtml = newHtml.replace('%ALT%', arr[i][2]);
            newHtml = newHtml.replace('%gallery_name%', arr[i][8]);
            newHtml = newHtml.replace('%gallery_name1%', arr[i][8]);

            document.querySelector(el).insertAdjacentHTML('beforeend', newHtml);
        }
    };

    let addMorePhotos = function(photosArr, num) {

        let html, newHtml, el, className;

        for (let i = 0; i < photosArr.length; i++) {

            className = crownMountainsArr[num][8];
            el = '.'+className;

            if (i == photosArr.length) {

                html = '<li><div class="section-photos-crown__crown-photo_hidden"><a href="images/%photo%" title="%NAME% &mdash; %DATE%" data-gallery="#blueimp-gallery-%gallery_name%"><img src="images/%photo%" alt="%ALT%"></a><h3 class="new-label"></h3><div class="section-photos-crown__caption"><h3><div>%NAME1%<br>%DATE1%</div></h3></div></div></li>';

            } else if (i === 0) {

                html = '<li><div class="section-photos-crown__crown-photo"><a href="images/%photo1%" class="section-photos-crown__photo-link" title="%NAME% &mdash; %DATE%" data-gallery="#blueimp-gallery-%gallery_name%"><img src="images/%photo%" alt="%ALT%" class="tooltip" title="Click to open gallery from %name%"></a><h3 class="new-label"></h3><div class="section-photos-crown__caption"><h3><div>%NAME1%<br>%DATE1%</div></h3></div></div></li>';
            } else {

                html = '<li><div class="section-photos-crown__crown-photo_hidden"><a href="images/%photo2%" title="%NAME% &mdash; %DATE%" data-gallery="#blueimp-gallery-%gallery_name%"><img src="images/%photo%" alt="%ALT%"></a><h3 class="new-label"></h3><div class="section-photos-crown__caption"><h3><div>%NAME1%<br>%DATE1%</div></h3></div></div></li>';

            }

            newHtml = html.replace('%photo%', photosArr[i]);
            newHtml = newHtml.replace('%photo1%', photosArr[i]);
            newHtml = newHtml.replace('%DATE%', crownMountainsArr[num][5]);
            newHtml = newHtml.replace('%DATE1%', crownMountainsArr[num][5]);
            newHtml = newHtml.replace('%photo2%', photosArr[i]);
            newHtml = newHtml.replace('%NAME%', crownMountainsArr[num][2]);
            newHtml = newHtml.replace('%NAME1%', crownMountainsArr[num][2]);
            newHtml = newHtml.replace('%name%', crownMountainsArr[num][2]);
            newHtml = newHtml.replace('%HEIGHT%', crownMountainsArr[num][6]);
            newHtml = newHtml.replace('%HEIGHT2%', crownMountainsArr[num][6]);
            newHtml = newHtml.replace('%ALT%', crownMountainsArr[num][2]);
            newHtml = newHtml.replace('%TITLE%', crownMountainsArr[num][1]);
            newHtml = newHtml.replace('%gallery_name%', crownMountainsArr[num][8]);
            newHtml = newHtml.replace('%gallery_name1%', crownMountainsArr[num][8]);
            newHtml = newHtml.replace('%gallery_name2%', crownMountainsArr[num][8]);

            document.querySelector(el).insertAdjacentHTML('beforeend', newHtml);
        }
    };

    addPhotos(crownMountainsArr);

    let crownGalleries = function(arr) {

        for (let i = 0; i < 12; i++) {
            let id = arr[i][8];

            document.getElementById(id).onclick = function (event) {
                event = event || window.event;
                let target = event.target || event.srcElement,
                    link = target.src ? target.parentNode : target,
                    options = {index: link, event: event},
                    links = this.getElementsByTagName('a');
                blueimp.Gallery(links, options);
            };
        }
    };


    let addListOfPhotos = function(arr) {

        for (let i = 0; i < 12; i++) {
            addMorePhotos(arr[i][4], i);
        }
    };

    addListOfPhotos(crownMountainsArr);
    crownGalleries(crownMountainsArr);

/************************************ MOBILE CROWN GALLERY ************************************/

    let addPhotosMobile = function(arr) {

        let html, newHtml, el;

            for (let i = 0; i < 12; i++) {

                el = '.swiper-wrapper';

                html = '<div class="swiper-slide"><img src="/images/%photo_name%" /><div class="label-mobile">%NAME% %HEIGHT% &mdash; %DATE%</div></div>';

                newHtml = html.replace('%photo_name%', arr[i][8] + '.jpg');
                newHtml = newHtml.replace('%DATE%', arr[i][5]);
                newHtml = newHtml.replace('%NAME%', arr[i][2]);
                newHtml = newHtml.replace('%HEIGHT%', arr[i][6]);

                document.querySelector(el).insertAdjacentHTML('beforeend', newHtml);
            }
    };

    addPhotosMobile(crownMountainsArr);

    let swiper = new Swiper('.swiper-container', {

        pagination: '.swiper-pagination',
        spaceBetween: 10
    });

    swiper = new Swiper('.swiper-container-mobile', {});


 $('.disabled').click(function(e){
     e.preventDefault();
  })

}); //end of script
