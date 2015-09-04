/**
 * Created by karlvaniseghem on 25/05/15.
 */

/**
 * MainCtrl - controller
 */
function MainCtrl($scope) {

};

function DashboardCtrl($scope, $http) {
    var promise = $http.get('/api/parties/students/count');
    promise.then(function (response) {
        $scope.countLabels = ['Kleuterschool', 'Lagere school'];
        $scope.series = ['Aantal', 'Maximum'];

        $scope.colours = ['yellow', 'green'];
        $scope.studentCount = new Array(2);
        $scope.studentCount[0] = new Array(2);
        $scope.studentCount[1] = [235, 300];

        angular.forEach(response.data, function (value, key) {
            if (key === 'k') {
                $scope.studentCount[0][0] = value;
            } else {
                $scope.studentCount[0][1] = value;
            }
        });
        console.log($scope.studentCount);
    });
}

function BlogListCtrl($scope, Blog) {
    $scope.blogs = Blog.query();

    $scope.image = function (url) {

    }
}

function FacebookPostsCtrl($scope, Facebook) {
    Facebook.get(function (response) {
        $scope.posts = response.data;
    });
}

angular.module('portal')
    .controller('MainCtrl', MainCtrl)
    .controller('DashboardCtrl', DashboardCtrl)
    .controller('FacebookPostsCtrl', FacebookPostsCtrl)
    .controller('BlogListCtrl', BlogListCtrl);