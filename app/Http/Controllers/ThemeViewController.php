<?php
/**
 * Created by PhpStorm.
 * User: karlvaniseghem
 * Date: 4/06/15
 * Time: 12:34
 */

namespace Portal\Http\Controllers;


class ThemeViewController extends Controller
{
    public function pimpyourschool()
    {
        return view('theme.pimpyourschool');
    }
}