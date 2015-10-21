/**
 * notosportal - karlvaniseghem
 * Copyright © 2015
 */
/**
 FOR NOW
 */
var $ = jQuery,
    isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

//Calculating The Browser Scrollbar Width
var parent, child, scrollWidth, bodyWidth;

if (scrollWidth === undefined) {
    parent = $('<div style="width: 50px; height: 50px; overflow: auto"><div/></div>').appendTo('body');
    child = parent.children();
    scrollWidth = child.innerWidth() - child.height(99).innerWidth();
    parent.remove();
}
//TODO: replace this jquery thing with angular styled menu thing
$(document).ready(function () {
    //Replace img > IE8
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var ieversion = new Number(RegExp.$1);

        if (ieversion < 9) {
            $('img[src*="svg"]').attr('src', function () {
                return $(this).attr('src').replace('.svg', '.png');
            });
        }
    }

    //IE
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent))
        $('html').addClass('ie');

    //Touch device
    if (isTouchDevice)
        $('body').addClass('touch-device');

    menu();


});

//Header Menu
function menu() {
    var body = $('body'),
        primary = '.primary';

    $(primary).find('.parent > a .open-sub, .megamenu .title .open-sub').remove();

    if ((body.width() + scrollWidth) < 992 || $('.header').hasClass('minimized-menu'))
        $(primary).find('.parent > a, .megamenu .title').append('<span class="open-sub"><span></span><span></span></span>');
    else
        $(primary).find('ul').removeAttr('style').find('li').removeClass('active');

    $(primary).find('.open-sub').click(function (e) {
        e.preventDefault();

        var item = $(this).closest('li, .box');

        if ($(item).hasClass('active')) {
            $(item).children().last().slideUp(600);
            $(item).removeClass('active');
        } else {
            var li = $(this).closest('li, .box').parent('ul, .sub-list').children('li, .box');

            if ($(li).is('.active')) {
                $(li).removeClass('active').children('ul').slideUp(600);
            }

            $(item).children().last().slideDown(600);
            $(item).addClass('active');

            if (body.width() + scrollWidth > 991) {
                var maxHeight = body.height() - ($(primary).find('.navbar-nav')).offset().top - 20;

                $(primary).find('.navbar-nav').css({
                    maxHeight: maxHeight,
                    overflow: 'auto'
                });
            }
        }
    });


    $(primary).find('.parent > a').click(function (e) {
        if (((body.width() + scrollWidth) > 991) && (isTouchDevice)) {
            var $this = $(this);

            if ($this.parent().hasClass('open')) {
                $this.parent().removeClass('open')
            } else {
                e.preventDefault();

                $this.parent().addClass('open')
            }
        }
    });

    body.on('click', function (e) {
        if (!$(e.target).is(primary + ' *')) {
            if ($(primary + ' .collapse').hasClass('in')) {
                $(primary + ' .navbar-toggle').addClass('collapsed');
                $(primary + ' .navbar-collapse').collapse('hide');
            }
        }
    });


    /* Top Menu */
    var topMenu = $('.top-navbar').find('.collapse');

    if ((body.width() + scrollWidth) < 992)
        topMenu.css('width', body.find('#top-box .container').width());
    else
        topMenu.css('width', 'auto');
}

//Banner set Start
function bannerSetCarousel() {
    $('.banner-set .banners').each(function () {
        var $this = $(this),
            bannerSet = $this.closest('.banner-set'),
            prev = bannerSet.find('.prev'),
            next = bannerSet.find('.next'),
            autoPlay = true,
            timeoutDuration = 2000,
            scrollDuration = 1000,
            height;

        /* Animation Duration */
        if (bannerSet.data('animationDuration'))
            scrollDuration = bannerSet.data('animationDuration');

        /* Autoplay */
        if (bannerSet.data('autoplayDisable'))
            autoPlay = false;
        else
        /* Autoplay Speed */
        if (bannerSet.data('autoplaySpeed'))
            timeoutDuration = bannerSet.data('autoplaySpeed');

        $this.carouFredSel({
            auto: {
                play: autoPlay,
                timeoutDuration: timeoutDuration
            },
            width: '100%',
            responsive: false,
            infinite: false,
            next: next,
            prev: prev,
            pagination: bannerSet.find('.pagination'),
            scroll: {
                duration: scrollDuration,
                items: 1
            },
            onCreate: function () {
                height = $this.height();

                $this.find('.banner').css('height', height);
                if (bannerSet.hasClass('banner-set-mini') && bannerSet.hasClass('banner-set-no-pagination')) {
                    bannerSet.find('.prev, .next').css('margin-top', -((height / 2) + 7));
                }
            }
        })
            .touchwipe({
                wipeLeft: function () {
                    $this.trigger('next', 1);
                },
                wipeRight: function () {
                    $this.trigger('prev', 1);
                },
                preventDefaultEvents: false
            })
            .parents('.banner-set').removeClass('load');
    });
}
//Banner set End


(function () {
    var delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    function resizeFunctions() {
        if ($('.banner-set').length && typeof bannerSetCarousel == 'function') bannerSetCarousel();
    }

    if (isTouchDevice) {
        $(window).bind('orientationchange', function () {
            delay(function () {
                resizeFunctions();
            }, 200);
        });
    } else {
        $(window).on('resize', function () {
            delay(function () {
                resizeFunctions();
            }, 500);
        });
    }
}());