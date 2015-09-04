<?php
/**
 * Created by PhpStorm.
 * User: karlvaniseghem
 * Date: 25/05/15
 * Time: 10:01
 */

namespace Portal\Http\Controllers;


class DashboardViewController extends Controller
{
    public function main()
    {
        return view('dashboard.main');
    }

    public function slider()
    {
        return view('dashboard.slider');
    }

    public function dashboard()
    {
        return view('dashboard.dashboard');
    }

    public function blogList()
    {
        return view('dashboard.blog-list');
    }
}