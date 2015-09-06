<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

$namespace = 'Portal\\Http\\Controllers\\';
Route::get('/', function() {
    return view('index');
});

Route::group(['prefix'=>'/views'], function() {
    Route::group(['prefix'=>'/common'], function() {

        Route::get('/content', 'CommonViewController@content');
        Route::get('/header', 'CommonViewController@header');
        Route::get('/breadcrumbs', 'CommonViewController@breadcrumbs');
        Route::get('/footer', 'CommonViewController@footer');
    });

    Route::group(['prefix'=>'/dashboard'], function() {
        Route::get('/', 'DashboardViewController@dashboard');
        Route::get('/slider', 'DashboardViewController@slider');
        Route::get('/blog-list', 'DashboardViewController@blogList');
    });


    Route::group(['prefix'=>'/theme'], function() {
        Route::get('/pimpyourschool', 'ThemeViewController@pimpyourschool');
    });

    Route::group(['prefix' => '/info'], function() {
        Route::get('/aboutus', 'InfoViewController@aboutus');
        Route::get('/contactus', 'InfoViewController@contactus');
    });

    Route::group(['prefix'=>'/library'], function() {
        Route::get('/websites', 'LibraryViewController@websites');
    });
});

Route::get('/stream/video/{name}', 'VideoController@stream');

Route::group(['prefix'=>'/api'], function() {
    Route::post('/webspider/images/first', 'WebspiderController@firstImage');


    Route::group(['prefix'=>'/mailchimp'], function() {
        Route::get('/member_count', 'MailChimpController@subscribeCount');
        Route::get('/campaigns', 'MailChimpController@campaigns');
    });

});

Blade::setContentTags('<%', '%>');        // for variables and all things Blade
Blade::setEscapedContentTags('<%%', '%%>');