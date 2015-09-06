<?php
/**
 * Created by PhpStorm.
 * User: karlvaniseghem
 * Date: 25/05/15
 * Time: 10:01
 */

namespace Portal\Http\Controllers;


class InfoViewController extends Controller {
    public function aboutus() {
        return view('info.aboutus');
    }
    public function contactus() {
        return view('info.contactus');
    }
}