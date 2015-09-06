/**
 * Created by karlvaniseghem on 25/05/15.
 */
/**
 * pageTitle - Directive for set Page title - mata title
 */
function pageTitle($rootScope, $timeout) {

    return {
        link: function (scope, element) {
            var listener = function (event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = 'VBS De Klimtoren';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) {
                    title = 'VBS De Klimtoren | ' + toState.data.pageTitle;
                }
                $timeout(function () {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
};

function bannerSetCarousel() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            //Banner set Start
            var bannerSet = element.closest('.banner-set'),
                prev = bannerSet.find('.prev'),
                next = bannerSet.find('.next');

            var scrollDuration = attrs.animationDuration || 1000;
            var autoPlay = !attrs.autoplayDisable || false;
            var timeoutDuration = attrs.autoplaySpeed || 2000;

            if (scope.$index > 1) {
                if (!scope.$parent.carouFredsel) {
                    scope.$parent.carouFredsel = element.parent().carouFredSel({
                        auto: {
                            play: autoPlay,
                            timeoutDuration: timeoutDuration
                        },
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
                            if (bannerSet.hasClass('banner-set-mini') && bannerSet.hasClass('banner-set-no-pagination')) {
                                bannerSet.find('.prev, .next').css('margin-top', -((height / 2) + 7));
                            }
                        }
                    });
                }
                else element.parent().trigger("insertItem", jQuery(element));
            }

            element.parent().touchwipe({
                wipeLeft: function () {
                    element.trigger('next', 1);
                },
                wipeRight: function () {
                    element.trigger('prev', 1);
                },
                preventDefaultEvents: false
            });
            bannerSet.removeClass('load');
        }
    }
}

function revolutionSlider($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            $timeout(function () {
                //Revolution Slider Start
                var revolutionSlider = element;

                if (revolutionSlider.closest('.rs-slider').hasClass('full-width')) {
                    var body = angular.element('body'),
                        width = body.width(),
                        topHeight = 0,
                        headerHeight = 104,
                        height;

                    if (angular.element('#top-box').length) {
                        if (body.hasClass('hidden-top'))
                            topHeight = angular.element('#top-box').outerHeight() - 32;
                    }

                    if ((body.width()) >= 1200)
                        height = body.height() - (topHeight + headerHeight);
                    else
                        height = 800;

                    revolutionSlider.revolution({
                        delay: 6000,
                        startwidth: 1200,
                        startheight: height,
                        hideThumbs: 10,
                        navigationType: 'bullet',
                        navigationArrows: 'solo',
                        navigationHAlign: 'center',
                        navigationVAlign: 'top',
                        navigationHOffset: -545,
                        navigationVOffset: 30,
                        hideTimerBar: 'on'
                    }).parent().parent().removeClass('load');
                } else {
                    revolutionSlider.revolution({
                        delay: 6000,
                        startwidth: 1200,
                        startheight: 500,
                        hideThumbs: 10,
                        navigationType: 'none',
                        onHoverStop: 'off'
                    }).parent().parent().removeClass('load');
                }
            });
            //Revolution Slider End
        }
    };
};

//Paralax
function paralax($timeout, $window) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $timeout(function () {
                element.addClass('fwb-bg fwb-blur');
                var speed = attrs.speed || 3;

                function bgPosition() {
                    var $thisY = element.offset().top,
                        $windowY = $window.pageYOffset;

                    if ($thisY > $windowY)
                        element.css({backgroundPosition: '50% ' + (($thisY - $windowY) / speed) + 'px'});
                    else
                        element.css({backgroundPosition: '50% ' + (-($thisY - $windowY) / speed) + 'px'});
                }


                bgPosition();

                angular.element($window).bind('scroll', bgPosition);
            });
        }
    };
};

//Blur
function blur($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.addClass('fwb-bg fwb-blur');

            $timeout(function () {

                var img = new Image(),
                    prependBox = '<div class="blur-box"/>';

                if (!element.find('canvas').length) {

                    if (attrs.image) {
                        img.src = attrs.image;
                    } else if (element.css('background-image') !== 'none') {
                        img.src = element.css('background-image')
                            .replace('url(', '').replace(')', '');
                        element.css('background-image', 'none');
                    }

                    img.onload = function () {
                        Pixastic.process(img, 'blurfast', {
                            amount: attrs.amount || 2
                        });
                    }

                    element
                        .prepend(prependBox)
                        .find('.blur-box')
                        .prepend(img);
                }

                $timeout(function () {
                    var canvas = element.find('canvas');

                    if (canvas.width() == element.width()) {
                        canvas.css({
                            marginLeft: 0,
                            marginTop: -((canvas.height() - element.height()) / 2)
                        });
                    } else {
                        canvas.css({
                            marginTop: 0,
                            marginLeft: -((canvas.width() - element.width()) / 2)
                        });
                    }

                    $('body').addClass('blur-load');
                }, 50);
            });
        }
    }
}

//Fancybox
function fancybox() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.find('.gallery-images, .lightbox').fancybox({
                nextEffect: 'fade',
                prevEffect: 'fade',
                openEffect: 'fade',
                closeEffect: 'fade',
                helpers: {
                    overlay: {
                        locked: false
                    },
                    title: {
                        type: 'over'
                    }
                },
                tpl: {
                    closeBtn: '<a title="Sluiten" class="fancybox-item fancybox-close" href="javascript:;">×</a>',
                    next: '<a title="Volgende" class="fancybox-nav fancybox-next" href="javascript:;">\n\
						<span><svg x="0" y="0" width="9px" height="16px" viewBox="0 0 9 16" enable-background="new 0 0 9 16" xml:space="preserve"><polygon fill-rule="evenodd" clip-rule="evenodd" fill="#fcfcfc" points="1,0.001 0,1.001 7,8 0,14.999 1,15.999 9,8 "/></svg></span>\n\
					</a>',
                    prev: '<a title="Vorige" class="fancybox-nav fancybox-prev" href="javascript:;">\n\
						<span><svg x="0" y="0" width="9px" height="16px" viewBox="0 0 9 16" enable-background="new 0 0 9 16" xml:space="preserve"><polygon fill-rule="evenodd" clip-rule="evenodd" fill="#fcfcfc" points="8,15.999 9,14.999 2,8 9,1.001 8,0.001 0,8 "/></svg></span>\n\
					</a>'
                }
            });
        }
    }
}

//appearAnimation
function appearAnimation() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            if (!angular.element('body').hasClass('no-csstransitions')) {
                $(element).appear(function () {

                    var delay = attrs.appearAnimationDelay || 1;
                    if (delay > 1) {
                        $(element).css('animation-delay', delay + 'ms');
                    }
                    $(element).addClass('animated').addClass(attrs.appearAnimation);

                });
            }
        }
    };
}


angular.module('portal')
    .directive('pageTitle', pageTitle)
    .directive('bannerSetCarousel', bannerSetCarousel)
    .directive('rsSlider', revolutionSlider)
    .directive('paralax', paralax)
    .directive('blur', blur)
    .directive('fancybox', fancybox)
    .directive('appearAnimation', appearAnimation);