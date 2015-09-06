<header class="page-header animated fadeInDown">
    <div class="container">
        <h1 class="title">Contacteer Ons</h1>
    </div>
</header>
<div class="container animated fadeInUp">
    <div class="row">
        <div class="content col-sm-12 col-md-12">
            <div class="row">
                <div class="col-sm-6 col-md-6 contact-info bottom-padding">
                    <div class="row">
                        <address class="col-sm-6 col-md-6">
                            <div class="title">Adres</div>
                            Kapellestraat 16, 8490 Jabbeke
                        </address>
                        <address class="col-sm-6 col-md-6">
                            <div class="title">Telefoon</div>
                            <div>(050) 81 27 14</div>
                        </address>
                    </div>
                    <div class="row">
                        <address class="col-sm-12 col-md-12">
                            <div class="title">Email adressen</div>
                            <div>Directie: <a href="mailto:rebekka.buyse@klimtoren.be">rebekka.buyse@klimtoren.be</a>
                            </div>
                            <div>Secretariaat: <a href="mailto:ann.helsmoortel@klimtoren.be">ann.helsmoortel@klimtoren.be</a>
                            </div>
                            <div>Zorg-coördinator: <a href="mailto:karl.vaniseghem@klimtoren.be">karl.vaniseghem@klimtoren.be</a>
                            </div>
                            <div class="bottom-padding-mini">Ouderraad: <a href="mailto:ouderraad@klimtoren.be">ouderraad@klimtoren.be</a></div>

                            <!--<div>
                                <button class="btn btn-default btn-sm" ui-sref="app.team">Meer</button>
                            </div>-->
                        </address>
                    </div>
                    <hr>
                    <!--<p>Fusce odio ante, consectetur nec dictum at, cursus congue orci. Donec vel tellus eget massa
                        lacinia pulvinar ut eu lectus. Quisque elit augue, gravida sit amet egestas quis, vehicula nec
                        magna. Vivamus nec nulla magna, et fringilla arcu. Sed ac quam at elit feugiat semper eu at
                        nulla. Morbi vel urna non massa faucibus mollis.</p>

                    <p>Phasellus vulputate, lectus eu consequat scelerisque, felis odio consequat enim, ut vulputate
                        elit lacus nec ipsum. Vivamus non sollicitudin eros. Nunc ut pulvinar felis. Ut lectus orci,
                        cursus ac semper nec, lobortis nec urna. </p>-->
                </div>
                <div class="col-sm-6 col-md-6 bottom-padding">
                    <form id="contactform" class="form-box register-form contact-form" method="POST">
                        <h3 class="title">Snel contact</h3>

                        <div id="success"></div>
                        <label>Naam: <span class="required">*</span></label>
                        <input class="form-control" type="text" name="name" ng-model="quickMail.name" required>
                        <label>Email-adres: <span class="required">*</span></label>
                        <input class="form-control" type="email" name="email" ng-model="quickMail.email"  required>
                        <label>Telefoon:</label>
                        <input class="form-control" type="text" name="phone" ng-model="quickMail.phone" >
                        <label>Bericht: <span class="required">*</span></label>
                        <textarea class="form-control" name="comment" ng-model="quickMail.message"  required></textarea>

                        <div class="clearfix"></div>
                        <div class="buttons-box clearfix">
                            <button id="submit" ng-click="sendQuickMail()" class="btn btn-default">
                                <i livicon data-n="paper-plane"
                                   data-a="true" data-c="white" data-hc="white" data-s="24"
                                   data-op="true"></i> Verstuur
                            </button>
                            <span class="required"><b>*</b> Verplicht veld</span>
                        </div>
                        <!-- .buttons-box -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</div><!-- .container -->
