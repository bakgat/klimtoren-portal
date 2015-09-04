/**
 * Created by karlvaniseghem on 25/05/15.
 */

var $ = jQuery,
    isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

$(window).load(function () {
    var $ = jQuery;

    $('img:not(".logo-img")').each(function () {
        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            var ieversion = new Number(RegExp.$1)
            if (ieversion >= 9)
                if (typeof this.naturalWidth === "undefined" || this.naturalWidth === 0) {
                    this.src = "http://placehold.it/" + ($(this).attr('width') || this.width || $(this).naturalWidth()) + "x" + (this.naturalHeight || $(this).attr('height') || $(this).height());
                }
        } else {
            if (!this.complete || typeof this.naturalWidth === "undefined" || this.naturalWidth === 0) {
                this.src = "http://placehold.it/" + ($(this).attr('width') || this.width) + "x" + ($(this).attr('height') || $(this).height());
            }
        }
    });
});

//Touch device
if( isTouchDevice )
    $('body').addClass('touch-device');

//Calculating The Browser Scrollbar Width
var parent, child, scrollWidth, bodyWidth;

if (scrollWidth === undefined) {
    parent = jQuery('<div style="width: 50px; height: 50px; overflow: auto"><div/></div>').appendTo('body');
    child = parent.children();
    scrollWidth = child.innerWidth() - child.height(99).innerWidth();
    parent.remove();
}

//Header Fixed
function headerCustomizer() {
    var body         = $('body'),
        topHeight    = 0,
        headerHeight = 0,
        scroll       = 0,
        fixedH       = $('.fixed-header');

    if ($('#top-box').length) {
        topHeight = $('#top-box').outerHeight();
    }

    headerHeight = $('.header').outerHeight();

    if (!isTouchDevice) {
        scroll = topHeight;

        if (body.hasClass('hidden-top')) {
            scroll = 8;
        }

        if (body.hasClass('padding-top')) {
            scroll = topHeight + 420;
        } else if (body.hasClass('boxed')) {
            scroll = topHeight + 20;
            if (body.hasClass('fixed-header') && body.hasClass('fixed-top')) {
                scroll = 20;
            }
        }

        $(window).scroll(function(){
            var $this = $(this);

            if (body.hasClass('fixed-header')) {
                if ($this.scrollTop() >= scroll)
                    body.addClass('fixed');
                else
                    body.removeClass('fixed');
            }

            if ($this.scrollTop() >= headerHeight)
                fixedH.addClass('background-opacity');
            else
                fixedH.removeClass('background-opacity');
        });

        $('.hidden-top .header, .hidden-top #top-box').not('.boxed .header, .boxed #top-box').hover(function(){
            $('.hidden-top').addClass('visible-top');
        }, function(){
            $('.hidden-top').removeClass('visible-top');
        });

        $(window).scroll(function(){
            var $this = $(this);

            if ((body.hasClass('visible-top')) && ($this.scrollTop() > 0))
                body.removeClass('visible-top');
        });
    }

    $(window).scroll(function(){
        if ($(this).scrollTop() >= topHeight + headerHeight)
            $('.top-fixed-box').addClass('fixed');
        else
            $('.top-fixed-box').removeClass('fixed');
    });
}

$(document).ready(function () {

    //full height of page-box
    function fix_height() {
        var headerHeight = $('.header').height() + 1;
        var breadCrumbsHeight = $('.breadcrumb-box').height() + 1;
        var footerHeight = $('#footer').height() + 1;

        var overallHeight = headerHeight + breadCrumbsHeight + footerHeight;

        $('#main').css('min-height', $(window).height() - overallHeight + 'px');
    }

    $(window).bind('load resize scroll', function () {
        fix_height();
    });

    setTimeout(function () {
        fix_height();
    });

    //FUNCTIONS
    headerCustomizer();

});

