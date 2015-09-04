<div class="primary">
    <div class="navbar navbar-default" role="navigation">
        <button type="button" class="navbar-toggle btn-navbar collapsed" data-toggle="collapse" data-target=".primary .navbar-collapse">
            <span class="text">Menu</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>

        <nav class="collapse collapsing navbar-collapse">
            <ul class="nav navbar-nav navbar-center">
                <li><a ui-sref="index.dashboard"><i class="fa fa-home"></i> start</a></li>

                <li><a ui-sref="media.photos"><i class="fa fa-camera"></i> foto's</a></li>

                <li class="parent">
                    <a href="#"><i class="fa fa-info-circle"></i> Info</a>
                    <ul class="sub">
                        <li><a ui-sref="info.about"><i class="fa fa-question"></i> over ons</a></li>
                        <li><a ui-sref="info.contact"><i class="fa fa-envelope"></i> contacteer ons</a></li>
                        <li><a ui-sref="info.campaigns"><i class="fa fa-newspaper-o"></i> nieuwsbrieven</a></li>
                    </ul>
                </li>

                <li><a ui-sref="info.care"><i class="fa fa-heart"></i> zorg</a></li>
            </ul>
        </nav>
    </div>
</div><!-- .primary -->
