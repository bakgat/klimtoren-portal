/**
 * Created by karlvaniseghem on 25/05/15.
 */
function Highlight($sce) {
    var filter = function (str, termsToHighlight) {
        if (termsToHighlight === '') {
            return $sce.trustAsHtml(str);
        }
        // Sort terms by length
        termsToHighlight = termsToHighlight.split(" ");
        termsToHighlight.sort(function (a, b) {
            return b.length - a.length;
        });

        // Regex to simultaneously replace terms
        var regex = new RegExp('(?!<[^>]*?>)' + termsToHighlight.join('|') + '(?![^<]*?</[^>]*?>)', 'gi');
        return $sce.trustAsHtml(str.replace(regex, '<span class="match">$&</span>'));
    };
    return filter;
};

angular.module('portal')
    .filter('highlight', Highlight);