<?php
/**
 * Created by PhpStorm.
 * User: karlvaniseghem
 * Date: 25/05/15
 * Time: 09:34
 */

namespace Portal\Http\Controllers;


class CommonViewController extends Controller
{

    public function content()
    {
        return view('common.content');
    }

    public function header()
    {
        return view('common.header');
    }

    public function breadcrumbs()
    {
        return view('common.breadcrumbs');
    }

    public function footer()
    {
        return view('common.footer');
    }
}