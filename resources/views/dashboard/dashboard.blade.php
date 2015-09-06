<div ui-view="slider"></div>

<div class="clearfix"></div>

<div ui-view="banner-set"></div>

<div class="clearfix"></div>

<section id="main" ng-controller='DashboardCtrl' class="no-padding">
    <article class="content">

        @include('dashboard.about')

        @include('dashboard.portfolio')

        @include('dashboard.services')

        @include('dashboard.video')

        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 promo-partners bottom-padding">
                    @include('dashboard.partners')
                </div>
                <!-- .promo-partners -->

                <div class="col-sm-12 col-md-6">
                    @include('dashboard.latest-posts')
                </div>
            </div>
        </div>

        @include('dashboard.testimonial')
    </article>
</section>