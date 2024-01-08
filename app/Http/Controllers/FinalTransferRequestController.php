<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\UpdateTransferRequestRequest;
use App\Models\First_request;
use App\Models\Second_third_request;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Jenssegers\Date\Date;
use Morilog\Jalali\Jalalian;


class FinalTransferRequestController extends Controller
{
    public function pre_third_store(Request $request){
        // dd($request->user());
        $user = $request->user();
        $first_req = First_request::where('user_id', $user->id)->where('status', 1)->first();
        // dd($first_req);
        $second_third_request = Second_third_request::where('form_id', $first_req->id)->first();

        $second_third_request->third_payment_code = $request->get('thirdPayment');
        $second_third_request->third_request = 1;

        $currentDateTime = Jalalian::fromDateTime(Carbon::now());
        $second_third_request->third_request_start_date = $currentDateTime;
        $second_third_request->save();
        // dd($request);
     }
}