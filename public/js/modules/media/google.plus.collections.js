/**
 * notosportal.media
 * FACTORY: GPCollections
 */

(function () {
    'use strict';

    angular
        .module('notosportal.media')
        .factory('GPCollections', GPCollections);

    /* @ngInject */
    function GPCollections() {

        var service = {
            get: get,
            take: take
        }

        /*var collections = [
         'https://plus.google.com/+VBSDEKlimtorenJabbeke/posts/2NVZiPwQwuk',
         'https://plus.google.com/+VBSDEKlimtorenJabbeke/posts/RYCLijRV6oY',
         'https://plus.google.com/+VBSDEKlimtorenJabbeke/posts/9K1nUDTfQRL'
         ];*/
        var collections = [
            {
                name: '2015-2016',
                href: 'https://plus.google.com/b/103406123671942529660/collection/sYLa3',
                preview: 'https://lh3.googleusercontent.com/-G-Qj-TTAW2M/VfbE9gxgSRI/AAAAAAAADZ0/NfJmsesxHIg/w777-h583-no/DSC_0026.JPG'
            },
            {
                name: '2014-2015',
                href: 'https://plus.google.com/b/103406123671942529660/collection/U5aa3',
                preview: 'https://lh3.googleusercontent.com/-WuQRYCenP8w/VelsvrGL-fI/AAAAAAAAAqI/rj6IT0gPJWM/w777-h583-no/DSCN3028.JPG'
            },
            {
                name: '2013-2014',
                href: 'https://plus.google.com/b/103406123671942529660/collection/EoNP2',
                preview: 'https://lh3.googleusercontent.com/-XuNc8zcK6cg/VelygWhfKUI/AAAAAAAAAvQ/8EZzWBFBgdA/w777-h583-no/IMG_2789.JPG'
            }
        ]

        return service;
        ////////////////

        function get() {
            return collections;
        }

        function take(number) {
            var result = [];
            var i = 0;
            while (i < number && i < collections.length) {
                result.push(collections[i]);
                i++;
            }
            return result;
        }
    }
})();