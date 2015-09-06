<!doctype html>
<html lang="nl" ng-app="notosportal">
<head>
    <meta charset="utf-8">

    <title data-ng-bind="title">VBS De Klimtoren</title>

    <meta name="keywords" content="basisschool, school, kinderen">
    <meta name="description" content="VBS De Klimtoren is een open, warme school voor élk kind.">
    <meta name="author" content="Karl Van Iseghem | VBS De Klimtoren">
    <meta class="viewport" name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Favicon -->
    <link rel="shortcut icon" href="img/favicon.ico">



    @include('common.stylesheets')
</head>


<body class="fixed-header" ng-controller="ShellController as shell">


<div class="page-box {{$state.current.name}}">
    <div class="page-box-content">

        @include('common.header')

        <div ui-view="main" ></div>

    </div>
    <!-- .page-box-content -->
</div>
<!-- .page-box -->

@include('common.footer')

<div class="clearfix"></div>

@include('common.scripts')

</body>
</html>