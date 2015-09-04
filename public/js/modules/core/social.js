(function () {
    'use strict';

    angular.module('notosportal.core')
        .run(facebookInit);

    /* @ngInject */
    function facebookInit($window, common) {
        //when facebook is initialized
        //we can render Google+ too
        $window.fbAsyncInit = function () {
            initFacebook();
            common.$broadcast('fb.init');
        };

        function initFacebook() {
            FB.init({
                appId: '466280350201960',
                channelUrl: 'js/modules/core/fb-channel.html',
                cookie: true,
                xfbml: true,
                version: 'v2.3'
            });
        }

        (function (d) {
            // load the Facebook javascript SDK

            var js,
                id = 'facebook-jssdk',
                ref = d.getElementsByTagName('script')[0];

            if (d.getElementById(id)) {
                return;
            }

            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "//connect.facebook.net/en_US/sdk.js";

            ref.parentNode.insertBefore(js, ref);

        }(document));
    }
})();