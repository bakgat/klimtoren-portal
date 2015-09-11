<footer id="footer">
    <div class="footer-top">
        <div class="container">
            <div class="row sidebar">
                <aside class="col-xs-12 col-sm-6 col-md-3 widget social">
                    <div class="title-block">
                        <h3 class="title">Volg ons</h3>
                    </div>
                    <p>Volg ons op sociale media</p>

                    <div clas="text-center">
                        <a class="fa fa-facebook fa-2x"
                           href="http://www.facebook.com/vbsdeklimtoren" target="_blank"></a>
                        <a class="fa fa-twitter fa-2x"
                           href="http://www.twitter.com/vbsdeklimtoren" target="_blank"></a>
                        <a class="fa fa-google-plus fa-2x"
                           href="http://plus.google.com/+VBSDeKlimtorenJabbeke" target="_blank"></a>
                    </div>
                    <div class="clearfix"></div>
                </aside>

                <aside class="col-xs-12 col-sm-6 col-md-3 widget newsletter">
                    <div class="title-block">
                        <h3 class="title">Inschrijven nieuwsbrief</h3>
                    </div>
                    <div>

                        <a class="btn btn-default btn-block " href="http://eepurl.com/bxI1Aj" target="_blank">
                            schrijf je hier in op onze nieuwsbrief
                        </a>
                        <div class="bottom-padding-mini"></div>
                        <p class="text-center">Er zijn al <strong>{{shell.campaign_members}}</strong> abonnees ingeschreven.</p>
                        <!-- Begin MailChimp Signup Form -->
                        <!--<div id="mc_embed_signup">
                            <form action="//klimtoren.us11.list-manage.com/subscribe/post?u=8203268a7c86cdb29cbd72947&amp;id=968b712dd6"
                                  method="post" id="sent-email" name="mc-embedded-subscribe-form" class="validate"
                                  target="_blank" novalidate>
                                <div id="mc_embed_signup_scroll">

                                    <div class="mc-field-group">
                                        <div class="col-sm-12 col-md-12">
                                            <input type="email" value="" name="EMAIL" class="form-control"
                                                   id="mce-EMAIL"
                                                   placeholder="email" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" value="" name="FNAME" class="form-control" id="mce-FNAME"
                                                   placeholder="voornaam" required>
                                            <input type="text" value="" name="LNAME" class="form-control" id="mce-LNAME"
                                                   placeholder="naam" required>
                                        </div>

                                        <button  class="btn btn-default" value="inschrijven">
                                            <span class="glyphicon glyphicon-arrow-right"></span>
                                        </button>
                                        <small>Er zijn al {{shell.campaign_members}} abonnees ingeschreven.</small>
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups
                                    <div style="position: absolute; left: -5000px;"><input type="text"
                                                                                           name="b_8203268a7c86cdb29cbd72947_968b712dd6"
                                                                                           tabindex="-1" value=""></div>

                                </div>
                            </form>
                        </div>-->

                        <!--End mc_embed_signup-->
                        <!--<form id="sent-email" method="POST">
                            <input class="form-control" type="email" name="email">
                            <button id="join-us" class="submit"><span class="glyphicon glyphicon-arrow-right"></span>
                            </button>
                            <div class="success"></div>-->
                        </form>
                    </div>
                </aside>
                <!-- .newsletter -->

                <aside class="col-xs-12 col-sm-6 col-md-3 widget links">
                    <div class="title-block">
                        <h3 class="title">Informatie</h3>
                    </div>
                    <nav>
                        <ul>
                            <li><a ui-sref="info.about">Over ons</a></li>
                            <li><a ui-sref="info.privacy">Privacy beleid</a></li>
                        </ul>
                    </nav>
                </aside>

                <aside class="col-xs-12 col-sm-6 col-md-3 widget links">
                    <div class="title-block">
                        <h3 class="title">Mijn account</h3>
                    </div>
                    <nav>
                        <ul>
                            <!--<li><a href="#">Mijn account</a></li>
                            <li><a href="#">Maaltijden bestellen</a></li>
                            <li><a href="#">Favorieten</a></li>-->
                            <li><a ui-sref="info.campaigns">Nieuwsbrieven</a></li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </div>
    </div>
    <!-- .footer-top -->
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="copyright col-xs-12 col-sm-3 col-md-3">
                    Copyright © VBS De Klimtoren, 2014-<%date('Y')%>
                </div>

                <div class="phone col-xs-6 col-sm-3 col-md-3">
                    <div class="footer-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                             y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16"
                             xml:space="preserve">
			  <path fill="#c6c6c6" d="M11.001,0H5C3.896,0,3,0.896,3,2c0,0.273,0,11.727,0,12c0,1.104,0.896,2,2,2h6c1.104,0,2-0.896,2-2
			   c0-0.273,0-11.727,0-12C13.001,0.896,12.105,0,11.001,0z M8,15c-0.552,0-1-0.447-1-1s0.448-1,1-1s1,0.447,1,1S8.553,15,8,15z
				M11.001,12H5V2h6V12z"></path>
			</svg>
                    </div>
                    <strong class="title">Bel ons:</strong> +32 (0)50 81 27 14 <br>
                </div>

                <div class="address col-xs-6 col-sm-3 col-md-3">
                    <div class="footer-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                             y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16"
                             xml:space="preserve">
			  <g>
                  <g>
                      <path fill="#c6c6c6" d="M8,16c-0.256,0-0.512-0.098-0.707-0.293C7.077,15.491,2,10.364,2,6c0-3.309,2.691-6,6-6
					c3.309,0,6,2.691,6,6c0,4.364-5.077,9.491-5.293,9.707C8.512,15.902,8.256,16,8,16z M8,2C5.795,2,4,3.794,4,6
					c0,2.496,2.459,5.799,4,7.536c1.541-1.737,4-5.04,4-7.536C12.001,3.794,10.206,2,8,2z"></path>
                  </g>
                  <g>
                      <circle fill="#c6c6c6" cx="8.001" cy="6" r="2"></circle>
                  </g>
              </g>
			</svg>
                    </div>
                    Kapellestraat 16<br> 8490 Jabbeke
                </div>

                <div class="col-xs-12 col-sm-3 col-md-3">
                    <a href="#" class="up">
                        <span class="glyphicon glyphicon-arrow-up"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- .footer-bottom -->
</footer>
<div class="clearfix"></div>