<?php
/**
 * Created by PhpStorm.
 * User: karlvaniseghem
 * Date: 3/09/15
 * Time: 11:13
 */

namespace Portal\Http\Controllers;


use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Mailchimp\Mailchimp;

class MailChimpController extends Controller
{
    private $api_key = '6cbb5af4bc6c9222ea9bd818365aa1c3-us11';
    private $list_key = '968b712dd6';

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
        } else {
            $params = array_merge($params, ['count' => 100]);
        }

        $result = $MailChimp->get('campaigns', $params);


        return JsonResponse::create($result);
    }

    public function categories()
    {
        if (Cache::has('mailchimp_categories')) {
            return JsonResponse::create(Cache::get('mailchimp_categories'));
        }
        $MailChimp = new MailChimp($this->api_key);
        $result = $MailChimp->get('lists/' . $this->list_key . '/interest-categories');

        $lists = [];
        foreach ($result['categories'] as $category) {
            $category_dto = [
                'id' => $category['id'],
                'title' => $category['title'],
                'interests' => []
            ];

            $interests = $MailChimp->request('lists/' . $this->list_key . '/interest-categories/' . $category['id'] . '/interests');

            foreach ($interests['interests'] as $interest) {
                $int_dto = [
                    'id' => $interest['id'],
                    'name' => $interest['name']
                ];
                $category_dto['interests'][] = $int_dto;
            }

            $lists[] = $category_dto;
        }
        Cache::forever('mailchimp_categories', $lists);
        return JsonResponse::create($lists);
    }

    public function subscribeCount()
    {


        $MailChimp = new MailChimp($this->api_key);

        $params = [
            'fields' => 'stats.member_count'
        ];

        $result = $MailChimp->get('lists/' . $this->list_key, [
            'fields' => 'id,name,stats.member_count'
        ]);


        return JsonResponse::create($result);
    }
}