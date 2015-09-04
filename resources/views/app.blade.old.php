<!DOCTYPE html>
<html lang="nl" ng-app="portal">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Page title set in pageTitle directive -->
    <title page-title></title>

    <!-- Google Font -->
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Arimo:400,700,400italic,700italic'>

    <!-- Font awesome -->
    <link rel="stylesheet" href="{!! asset('/font-awesome/css/font-awesome.min.css') !!}">

    <!-- Bootstrap and Fonts -->
    <link href="{!! asset('/css/bootstrap.min.css') !!}" rel="stylesheet">

    <!-- Main Notos+ CSS files -->
    <link href="{!!asset('css/animate.css')!!}" rel="stylesheet">

    <link id="loadBefore" href="{!!asset('/css/style.css')!!}" rel="stylesheet">
</head>

<body class="fixed-header" ng-controller="MainCtrl as main">

<!-- Main view  -->

    @include('common.content')


<!-- jQuery and Bootstrap -->
<script src="js/jquery/jquery-2.1.1.min.js"></script>
<script src="js/plugins/jquery-ui/jquery-ui.js"></script>
<script src="js/bootstrap/bootstrap.min.js"></script>

<!-- jQuery Plugins -->
<script src="js/plugins/revolution/jquery.themepunch.tools.min.js"></script>
<script src="js/plugins/revolution/jquery.themepunch.revolution.min.js"></script>


<!-- SlimScroll -->
<script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

<!-- Peace JS -->
<script src="js/plugins/pace/pace.min.js"></script>

<!-- Custom and plugin javascript -->
<script src="js/notosportal.js"></script>

<!-- Main Angular scripts-->
<script src="js/angular/angular.min.js"></script>
<script src="js/plugins/oclazyload/dist/ocLazyLoad.min.js"></script>
<script src="js/angular/angular-sanitize.min.js"></script>
<script src="js/angular/angular-animate.min.js"></script>
<script src="js/ui-router/angular-ui-router.min.js"></script>
<script src="js/angular/angular-resource.min.js"></script>
<script src="js/angular-translate/angular-locale_nl-be.js"></script>
<script src="js/bootstrap/ui-bootstrap-tpls-0.12.0.min.js"></script>

<!-- Angular Plugins -->
<script src="js/plugins/angular-breadcrumb/angular-breadcrumb.min.js"></script>

<!-- Angular App Script -->
<script src="js/app.js"></script>
<script src="js/config.js"></script>
<script src="js/services.js"></script>
<script src="js/directives.js"></script>
<script src="js/controllers.js"></script>
<script src="js/filters.js"></script>

</body>
</html>
