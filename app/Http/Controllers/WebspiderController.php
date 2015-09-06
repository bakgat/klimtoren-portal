<?php
/**
 * Created by PhpStorm.
 * User: karlvaniseghem
 * Date: 5/06/15
 * Time: 22:33
 */

namespace Portal\Http\Controllers;


use Bakgat\Notos\support\WebSpider;

class WebspiderController extends Controller
{
    public function indexImages(Request $request)
    {
        $url = $request->input('url');
        $spider = new WebSpider();

        $images = [];
        foreach ($spider->getImages($url) as $key => $value) {
            $images[] = $value;
        }

        return $images;
    }

    public function firstImage(Request $request)
    {
        return $this->indexImages($request)[0] || null;
    }
}