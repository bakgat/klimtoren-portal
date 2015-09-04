<div class="container">
    <div class="title-box">
        <h1 class="title">Wie zijn we</h1>
    </div>

    <div class="row">
        <div class="col-sm-6 col-md-6 bottom-padding">
            <p class="lead"><strong>VBS De Klimtoren is een basisschool (kleuter- en lagere school) in het hartje van Jabbeke.</strong></p>

            <p>Onze school heeft momenteel {{studentCount[0][0] + studentCount [0][1]}} leerlingen. <br/>
                {{studentCount[0][0]}} kleuters en {{studentCount[0][1]}} kinderen in de lagere school.</p>

            <p>Onze schoolbrochure (PDF) kan u <a href="/content/documents/2015/schoolbrochure.pdf" target="_blank">hier</a>     lezen.</p>
            <a ui-sref="info.aboutus" class="btn btn-default">Lees meer</a>
        </div>

        <div class="col-sm-6 col-md-6 bottom-padding">
            <canvas id="pie" class="chart chart-bar" data="studentCount"
                    labels="countLabels" series="series" colours="colours"></canvas>
        </div>
        <!-- .employee -->
    </div>

    <div class="carousel-box bottom-padding">
        <div class="clearfix"></div>

        <div class="row">
            <div class="carousel no-responsive gallery" fancybox>
                <div class="col-sm-2">
                    <a class="gallery-images" rel="fancybox" href="content/img/teasers/team-1.jpg" title="Ons kleuterteam">
                        <img class="replace-2x" src="content/img/teasers/team-1.jpg" width="270"
                             height="135" alt="">
                        <span class="bg-images"><i class="fa fa-search"></i></span>
                    </a>
                </div>
                <div class="col-sm-2">
                    <a class="gallery-images" rel="fancybox" href="content/img/teasers/team-2.jpg" title="Het team van de eerste graad">
                        <img class="replace-2x" src="content/img/teasers/team-2.jpg" width="270"
                             height="135" alt="">
                        <span class="bg-images"><i class="fa fa-search"></i></span>
                    </a>
                </div>
                <div class="col-sm-2">
                    <a class="gallery-images" rel="fancybox" href="content/img/teasers/team-3.jpg"  title="De collega's van de tweede graad">
                        <img class="replace-2x" src="content/img/teasers/team-3.jpg" width="270"
                             height="135" alt="">
                        <span class="bg-images"><i class="fa fa-search"></i></span>
                    </a>
                </div>

                <div class="col-sm-2">
                    <a class="gallery-images" rel="fancybox" href="content/img/teasers/team-4.jpg"  title="De leerkrachten van de derde graad">
                        <img class="replace-2x" src="content/img/teasers/team-4.jpg" width="270"
                             height="135" alt="">
                        <span class="bg-images"><i class="fa fa-search"></i></span>
                    </a>
                </div>
                <div class="col-sm-2">
                    <a class="gallery-images" rel="fancybox" href="content/img/teasers/team-5.jpg" title="Het zorgteam van De Klimtoren">
                        <img class="replace-2x" src="content/img/teasers/team-5.jpg" width="270"
                             height="135" alt="">
                        <span class="bg-images"><i class="fa fa-search"></i></span>
                    </a>
                </div>
                <div class="col-sm-2">
                    <a class="gallery-images" rel="fancybox" href="content/img/teasers/team-6.jpg" title="Het team sport<br/> (meester Geert staat niet op de foto)">
                        <img class="replace-2x" src="content/img/teasers/team-6.jpg" width="270"
                             height="135" alt="">
                        <span class="bg-images"><i class="fa fa-search"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="clearfix"></div>
</div>
