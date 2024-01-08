<?php

namespace App\Http\Controllers;

use App\Models\Second_third_request;
use App\Models\TransferRequest;
use App\Http\Requests\UpdateTransferRequestRequest;
use App\Models\First_request;
use App\Models\User;
use App\Models\User_request;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Ghasedak\GhasedakApi;


class AdminTransferRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    

    public function index()
    {
        $data = First_request::with('user')->get();

        dd($data);
    return Inertia::render('Admin/FirstVerification/FirstVerification')
        ->with('data', $data);
    }
   

    public function  code_first_step()
    {
        // $data = User::where('initial_request', '>', 0)->get();
      
        // return Inertia::render('Admin/FirstVerification/FirstVerification')
        //     ->with('data', $data);

        $data = First_request::where('status', 1)->with('user')->get();
        $data = $data->sortByDesc('initial_request_start_date')->values();
        return Inertia::render('Admin/FirstVerification/FirstVerification')
        ->with('data', $data);
    
        // dd($data);
    }

    /* public function  code_second_step()
    {
        $data = User::get();
       
        $req = User_request::get();
        
        return Inertia::render('Admin/SecondVerification/SecondVerification', [
            'data' => $data,
            'req' => $req
        ]);
    } */

    public function code_second_step()
{
    $main_data3 = Second_third_request::where('second_request', '>', 0)->get();
    $main_data2 = Second_third_request::where('second_request', '>', 0)
    ->whereHas('form.user', function ($query) {
        $query->where('status', 1);
    })
    ->with('form.user')
    ->first();
// dd($main_data2->form->user);

    $data = First_request::with('user')->get();
    
    
    $main_data = User::where('second_request', '>', 0)->get();

    // $req = User_request::get();
    // $req = $req->sortByDesc('created_at')->values();

    $req = Second_third_request::where('second_request', '>', 0)
    ->whereHas('form.user', function ($query) {
        $query->where('status', 1);
    })
    ->with('form.user')
    ->orderByDesc('second_request_start_date')
    ->get();
    // $req = $req->sortByDesc('second_request_start_date')->values();

    $req->each(function ($item) use ($data) {
        $selectedPeople = json_decode($item->selected_people);
        $relatedData = collect();
        
        foreach ($selectedPeople as $selectedId) {
            $record = $data->where('id', $selectedId)->first();
            
            if ($record) {
                $relatedData->push($record);
            }
        }
        $item->related_data = $relatedData;
        // $matchingRecord = $data->where('national_code', $item->national_code)->first();
        
        // if ($matchingRecord) {
        //     $item->related_data = $relatedData;
        //     $item->matching_record = $matchingRecord;
        // }
    });
    //  dd($req);
    return Inertia::render('Admin/SecondVerification/SecondVerification', [
        'data' => $main_data2,
        'req' => $req,
    ]);
}

    public function  code_third_step()
    {
        $data = Second_third_request::where('third_request', '>', 0)
        ->whereHas('form.user', function ($query) {
            $query->where('status', 1);
        })
        ->with('form.user')
        ->orderByDesc('third_request_start_date')
        ->get();

        // $data = User::where('third_request', '>', 0)->get();
        // $data = $data->sortByDesc('third_request_start_date')->values();
        return Inertia::render('Admin/ThirdVerification/ThirdVerification')
            ->with('data', $data);
    }
    /**
     * Show the form for creating a new resource.
     */

    public function code_first_step_first_verification($item, $status)
    {
        // dd($item);
        $first_request = First_request::find($item);
        // dd($first_request);
        if ($status == 2) {
            $first_request->initial_request = 3;
            $first_request->save();
            if(Second_third_request::where('form_id', $first_request->id)->first() == null){
                $new_second_third_request = new Second_third_request;
                $new_second_third_request->form_id = $first_request->id;
                $new_second_third_request->save();
            }
        } else if ($status == 3){
            $first_request->initial_request = 2;
            $first_request->save();    
        }
        // dd($second_third_request);

        
    }

    public function sendFirstMessage($item, $status){
        $first_request = First_request::find($item);
        $user = User::find($first_request->user_id);
        // dd($user);
        try {
            // $receptor = "09185181899";
            $api = new GhasedakApi('b759755c1f3560d4f6da5dd24eb5fafaf2cdc8d476a74028e21dd252c501fe8d');
            $api->Verify($user->phone_number, "firstRequest", $user->national_code);
            $first_request->first_message = true;

            $first_request->save();

        } catch (\Ghasedak\Exceptions\ApiException $e) {
            null;
        } catch (\Ghasedak\Exceptions\HttpException $e) {
            null;
        }
    }

    public function code_second_step_second_verification($item, $status)
    {
        // dd($item);
        $user_req = Second_third_request::find($item);
     
        // $user = User::where('national_code', $user_req->national_code)->first();

        // dd($user_req);
        if ($status == 1) {
            $user_req->second_request = 2;
            $user_req->save();
        } else if ($status == 2){
            $user_req->second_request = 1;
            $user_req->save();    
        }
    }

    public function sendSecondMessage($item, $status){
        $user_req = Second_third_request::with('form.user')->find($item);
        // dd($user_req);
        try {
            // $receptor = "09185181899";
            $api = new GhasedakApi('b759755c1f3560d4f6da5dd24eb5fafaf2cdc8d476a74028e21dd252c501fe8d');
            $api->Verify($user_req->form->user->phone_number, "secondRequest", $user_req->form->user->national_code);
            $user_req->second_message = true;

            $user_req->save();

        } catch (\Ghasedak\Exceptions\ApiException $e) {
            null;
        } catch (\Ghasedak\Exceptions\HttpException $e) {
            null;
        }
    }
    
    public function code_third_step_third_verification($item, $status)
    {
        $user = Second_third_request::find($item);
        // dd($user);
        // $user = User::find($item);
        if ($status == 1) {
            $user->third_request = 2;
            $user->save();
        } else if ($status == 2){
            $user->third_request = 1;
            $user->save();    
        }
    }

    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        

        return Redirect::route('transfer_request.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(TransferRequest $transferRequest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */

    


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTransferRequestRequest $request, TransferRequest $transferRequest)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TransferRequest $transferRequest)
    {
        //
    }
}
