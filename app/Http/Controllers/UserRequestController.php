<?php

namespace App\Http\Controllers;


use App\Models\Second_third_request;
use Carbon\Carbon;
use Jenssegers\Date\Date;
use App\Models\User_request;
use Illuminate\Http\Request;
use App\Http\Requests\StoreUser_requestRequest;
use App\Http\Requests\UpdateUser_requestRequest;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;
use Morilog\Jalali\Jalalian;
class UserRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    // $first_request->third_request_start_date = Carbon::now();

    public function re_store(Request $request)
    {
        //    dd($request->checkedItems == null ? 'f' : 't');
        if($request->checkedItems != null){
            $user = $request->user;
            $new_second_third_request = new Second_third_request;
            $new_second_third_request->form_id = $user['form_id'];
            $new_second_third_request['second_payment_code'] = $request->secondPayment;
            $new_second_third_request['second_request'] = 1;
            $new_second_third_request['second_request_start_date'] = Jalalian::fromDateTime(Carbon::now());
            // dd($new_second_third_request['second_request_start_date']);
            $checkedItems = $request->checkedItems;
            
            // تبدیل مقدار checkedItems به آرایه و ذخیره آن در selected_people
            $selectedPeople = json_encode($checkedItems);
        
            $new_second_third_request['selected_people'] = $selectedPeople;
            $new_second_third_request->save();
        }
        return back();
    }
    public function store(Request $request)
{
    //  dd($request);
    $user = $request->user;
    $user['second_payment_code'] = $request->secondPayment;
    $user['second_request'] = 1;
    $user['second_request_start_date'] = Jalalian::fromDateTime(Carbon::now());
    $checkedItems = $request->checkedItems;
    
    // تبدیل مقدار checkedItems به آرایه و ذخیره آن در selected_people
    $selectedPeople = json_encode($checkedItems);

    $user['selected_people'] = $selectedPeople;
    $record = Second_third_request::find($user['id']);

    if ($record) {
        $record->update($user);
    }
    // dd($record);

    // تاریخ و ساعت فعلی بر اساس منطقه زمانی ایران
    // $currentDateTime = Date::now('Asia/Tehran');
    // $user->second_request_start_date = $currentDateTime;

}

    /**
     * Display the specified resource.
     */
    public function show(User_request $user_request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User_request $user_request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUser_requestRequest $request, User_request $user_request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User_request $user_request)
    {
        //
    }
}
