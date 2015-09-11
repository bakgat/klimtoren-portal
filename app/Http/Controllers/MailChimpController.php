<?php
/**
 * Created by PhpStorm.
 * User: karlvaniseghem
 * Date: 3/09/15
 * Time: 11:13
 */

namespace Portal\Http\Controllers;


use DrewM\MailChimp\MailChimp;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class MailChimpController extends Controller
{
    private $api_key = '6cbb5af4bc6c9222ea9bd818365aa1c3-us11';

    /**
     *
     */
    public function campaigns(Request $request)
    {


        $MailChimp = new MailChimp($this->api_key);

        $params = [
            //'fields'=>'campaigns.id,campaigns.settings.subject_line,campaigns.create_time,campaigns.archive_url,campaigns.settings.from_name,campaigns.settings.reply_to',
            'status' => 'sent',
            'sort_field' => 'create_time',
            'sort_dir' => 'DESC'
        ];

        if ($request->input('take')) {
            $params = array_merge($params, ['count' => $request->input('take')]);
        }

        $result = $MailChimp->get('campaigns', $params);


        return JsonResponse::create($result);
    }

    public
    function subscribeCount()
    {

        $list_key = '968b712dd6';
        $MailChimp = new MailChimp($this->api_key);

        $params = [
            'fields' => 'stats.member_count'
        ];

        $result = $MailChimp->get('lists/' . $list_key, $params);


        return JsonResponse::create($result);
    }
}