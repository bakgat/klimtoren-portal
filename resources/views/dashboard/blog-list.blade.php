<div class="banner-set load" ng-controller="BlogListCtrl">
    <div class="container">
        <div class="banners">
            <a ng-href="{{blog.url}}" target="_blank" class="banner" ng-repeat="blog in blogs" banner-set-carousel>
                <div style="background-image: url('{{blog.image_url}}');width:100%;height:158px;background-size: cover;margin: 0 0 28px 0;"></div>

                <h2 class="title" ng-bind="blog.name"></h2>

                <div class="description" ng-bind-html="blog.description"></div>
            </a>
        </div>
        <!-- .banners -->
        <div class="clearfix"></div>
    </div>
    <div class="nav-box">
        <div class="container">
            <a class="prev" href="#"><span class="glyphicon glyphicon-arrow-left"></span></a>

            <div class="pagination switches"></div>
            <a class="next" href="#"><span class="glyphicon glyphicon-arrow-right"></span></a>
        </div>
    </div>
</div>
<!-- .banner-set -->
