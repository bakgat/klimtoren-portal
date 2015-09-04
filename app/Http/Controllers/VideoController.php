<?php

namespace Portal\Http\Controllers;
use Portal\helpers\VideoStream;


/**
 * Created by PhpStorm.
 * User: karlvaniseghem
 * Date: 9/06/15
 * Time: 14:21
 */
class VideoController extends Controller
{
    public function stream($name)
    {
        $video_path = 'content/video/'.$name.'.mp4';
        $stream = new VideoStream($video_path);
        $stream->start();
    }
}