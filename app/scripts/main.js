$(document).ready(function() {

    let isTop = true;

/************************************ TITLE ************************************/

    /*let title;

    $('h1').textContent = '';

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

    $('.more-photos').animate({

            height: 'toggle'
        }, 100);

    const button = $('.section-photos-crown__button_ghost_more-hide')[0];

    button.addEventListener('click', function() {

        const element =$('.section-photos-crown')[0];

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

    let mountainsObj;

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

    function addMarkers(arr) {

        arr.map((mountain, i) => {

            let marker;

            if (arr[i].marker == 'markerGreen') {

                marker = new google.maps.MarkerImage('http://www.googlemapsmarkers.com/v1/2ecc71/');

            } else {

                marker = new google.maps.MarkerImage('http://www.googlemapsmarkers.com/v1/e74c3c/');
            }

            map.addMarker({
                lat: mountain.lat,
                lng: mountain.lng,
                title: mountain.name,
                icon: marker,
                infoWindow: {

                    content: mountain.name
                }
            });

            mapmobile.addMarker({

                lat: mountain.lat,
                lng: mountain.lng,
                title: mountain.name,
                icon: marker,
                infoWindow: {

                    content: mountain.name
                }
            });
        });
    }

/************************************ CROWN GALLERY ************************************/

    const mountainsProgress = 15;

    function addPhotos(arr) {

        let html, newHtml, el;

        arr.map((mountain, i) => {

            el = '.section-photos-crown__photos-all';

            if (arr[i].marker == 'markerRed') {

                html = '<div class="section-more-photos__photo-box"><ul class="section-more-photos__photos clearfix"><li><div class="section-photos-crown__crown-photo_dark"><img src="images/%photo_name_x%" alt="%alt%"><h3 class="new-label"><span>%name%<br>%height%<br></span></h3></div></li></ul></div>';

            } else {

                html = '<div class="section-more-photos__photo-box" id="%gallery_name%"><ul class="section-more-photos__photos clearfix %gallery_name1%">';
            }

            if (i > 13) {

                el = '.more-photos';
            }

            newHtml = html.replace('%photo_name_x%', mountain.photos[0]);
            newHtml = newHtml.replace('%name%', mountain.name);
            newHtml = newHtml.replace('%height%', mountain.height);
            newHtml = newHtml.replace('%alt%', mountain.name);
            newHtml = newHtml.replace('%gallery_name%', mountain.tag);
            newHtml = newHtml.replace('%gallery_name1%', mountain.tag);

            $(el).append(newHtml);
        });

    }

    function addMorePhotos(photosArr, num) {

        let html, newHtml, el, className;

        photosArr.map((mountain, i) => {

            className = mountainsObj.crownMountains[num].tag;
            el = '.'+className;

            if (i == mountain.length) {

                html = '<li><div class="section-photos-crown__crown-photo_hidden"><a href="images/%photo%" title="%name% &mdash; %date%" data-gallery="#blueimp-gallery-%gallery_name%"><img src="images/%photo%" alt="%alt%"></a><h3 class="new-label"></h3><div class="section-photos-crown__caption"><h3><div>%name1%<br>%date1%</div></h3></div></div></li>';

            } else if (i === 0) {

                html = '<li><div class="section-photos-crown__crown-photo"><a href="images/%photo1%" class="section-photos-crown__photo-link" title="%name% &mdash; %date%" data-gallery="#blueimp-gallery-%gallery_name%"><img src="images/%photo%" alt="%alt%" class="tooltip" title="Click to open gallery from %name2%"></a><h3 class="new-label"></h3><div class="section-photos-crown__caption"><h3><div>%name1%<br>%date1%</div></h3></div></div></li>';
            } else {

                html = '<li><div class="section-photos-crown__crown-photo_hidden"><a href="images/%photo2%" title="%name% &mdash; %date%" data-gallery="#blueimp-gallery-%gallery_name%"><img src="images/%photo%" alt="%alt%"></a><h3 class="new-label"></h3><div class="section-photos-crown__caption"><h3><div>%name1%<br>%date1%</div></h3></div></div></li>';

            }

            newHtml = html.replace('%photo%', mountain);
            newHtml = newHtml.replace('%photo1%', mountain);
            newHtml = newHtml.replace('%photo2%', mountain);
            newHtml = newHtml.replace('%date%', mountainsObj.crownMountains[num].date);
            newHtml = newHtml.replace('%date1%', mountainsObj.crownMountains[num].date);
            newHtml = newHtml.replace('%name%', mountainsObj.crownMountains[num].name);
            newHtml = newHtml.replace('%name1%', mountainsObj.crownMountains[num].name);
            newHtml = newHtml.replace('%name2%', mountainsObj.crownMountains[num].name);
            newHtml = newHtml.replace('%height%', mountainsObj.crownMountains[num].height);
            newHtml = newHtml.replace('%height%', mountainsObj.crownMountains[num].height);
            newHtml = newHtml.replace('%alt%', mountainsObj.crownMountains[num].name);
            newHtml = newHtml.replace('%gallery_name%', mountainsObj.crownMountains[num].tag);
            newHtml = newHtml.replace('%gallery_name1%', mountainsObj.crownMountains[num].tag);
            newHtml = newHtml.replace('%gallery_name2%', mountainsObj.crownMountains[num].tag);

            $(el).append(newHtml);
        });
    }



    function crownGalleries(arr) {

        arr.map((mountain, i) => {
            if (i < mountainsProgress) {
                let id = mountain.tag;

                document.getElementById(id).onclick = function (event) {
                    event = event || window.event;
                    let target = event.target || event.srcElement,
                        link = target.src ? target.parentNode : target,
                        options = {index: link, event: event},
                        links = this.getElementsByTagName('a');
                    blueimp.Gallery(links, options);
                };
            }
        });
    }


    function addListOfPhotos(arr) {

        arr.map((mountain, i) => {
            if (i < mountainsProgress) {

            addMorePhotos(mountain.photos, i);
        }
    });
    }




/************************************ MOBILE CROWN GALLERY ************************************/

    function addPhotosMobile(arr) {

        let html, newHtml, el;

            arr.map((mountain, i) => {
            if (i < mountainsProgress) {

                el = '.swiper-wrapper';

                html = '<div class="swiper-slide"><img src="/images/%photo_name%" /><div class="label-mobile">%name% %height% &mdash; %date%</div></div>';

                newHtml = html.replace('%photo_name%', mountain.tag + '.jpg');
                newHtml = newHtml.replace('%date%', mountain.date);
                newHtml = newHtml.replace('%name%', mountain.name);
                newHtml = newHtml.replace('%height%', mountain.height);

                $(el).append(newHtml);
            }
        });
    }


    let swiper = new Swiper('.swiper-container', {

        pagination: '.swiper-pagination',
        spaceBetween: 10
    });

    swiper = new Swiper('.swiper-container-mobile', {});

    function loadContent(){
        addMarkers(mountainsObj.crownMountains);
        addPhotos(mountainsObj.crownMountains);
        addListOfPhotos(mountainsObj.crownMountains);
        crownGalleries(mountainsObj.crownMountains);
        addPhotosMobile(mountainsObj.crownMountains);
    }

    const mountainsData = $.getJSON('../mountains.json', function(json) {
        mountainsObj = json;
        loadContent();
    });


    $('.disabled').click(function(e){
        e.preventDefault();
    });

}); //end of script
