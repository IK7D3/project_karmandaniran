<?php

namespace App\Http\Controllers;

use App\Models\Province_citie;

use App\Models\Second_third_request;
use App\Models\User;
use App\Http\Requests\UpdateTransferRequestRequest;
use App\Models\First_request;
use App\Models\User_request;
use Carbon\Carbon;
use Hekmatinasser\Verta\Verta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Jenssegers\Date\Date;
use Illuminate\Support\Facades\Auth;
use Morilog\Jalali\Jalalian;


class TransferRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    

    public function index()
    {
        $user = Auth::user();
        // dd($user);
        $first_request = First_request::where('user_id', $user->id)->where('status', 1)->first();
         

        if($first_request == null){
            $new_first_request = new First_request;
            $new_first_request->user_id = $user->id;
            $new_first_request->save();  

            // $new_second_third_request = new Second_third_request;
            // $new_second_third_request->form_id = $new_first_request->id;
            // $new_second_third_request->save();


        }
        else{
            null;
        }
        $first_request = First_request::where('user_id', $user->id)->where('status', 1)->first();
        // dd($first_request);
        // $second_third_request = Second_third_request::where('form_id', $first_request->id)->first();
        

        // if($second_third_request == null){
        //     $new_second_third_request = new Second_third_request;
        //     $new_second_third_request->form_id = $first_request->id;
        //     $new_second_third_request->save();
        // }
        $second_third_request = Second_third_request::where('form_id', $first_request->id)->get();
        $max_second_request = -1; // مقدار اولیه برای بزرگترین مقدار iman
        $selectedRecord = null; // رکورد انتخاب شده

        foreach ($second_third_request as $record) {
            $second_request = $record->second_request;
            
            if ($second_request > $max_second_request) {
                $max_second_request = $second_request;
                $selectedRecord = $record;
            }
        }
        // dd($second_third_request);
        $data = First_request::where('status', 1)->get();// دریافت اطلاعات دیتابیس
        $req = Second_third_request::where('form_id', $first_request->id)->where('second_request', '>', 0)->get();

        $cities = Province_citie::all();
        $req->each(function ($item) use ($data) {
            $selectedPeople = json_decode($item->selected_people);
            $relatedData = collect();
            $notRelatedData = collect();
            foreach ($selectedPeople as $selectedId) {
                $record = $data->where('id', $selectedId)->first();
                if ($record) {
                    $relatedData->push($record);
                }else{
                    $notRelatedData->push($record);
                }
            }
            // dd($relatedData);
             $matchingRecord = $data->where('id', $item->form_id)->first();
            
            if ($matchingRecord) {
                $item->related_data = $relatedData;
                $item->notRelatedData = $notRelatedData;
                $item->matching_record = $matchingRecord;
         
            }
        });
    //    foreach ($req as $r){
    //     $r->second_request_start_date = verta($r->second_request_start_date);
    //    }
        //    dd($req);
        //   dd($req);
        return Inertia::render('Transfer_Request/TransferRequest', [
            'data' => $data,
            'req' => $req,
            'cities' => $cities,
            'first_request' => $first_request,
            'second_third_request' => $selectedRecord,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */

     public function pre_store(Request $request, $id){
        $first_request = First_request::where('user_id', $request->user()->id)->where('status', 1)->first();
        $first_request->first_payment_code = $request->get('firstPayment');
        $first_request->initial_request = 2;
        $first_request->initial_request_start_date = Jalalian::fromDateTime(Carbon::now());
        $first_request->save();
        // dd($request);
     }

     
    //  تکمیل فرم مقصد و مبدا و تجارب و ...
    public function re_store($first_request)
    {
        
        $record = First_request::where('id', $first_request)->where('status', 1)->first();
        $record->status = 0; 
        // dd($record);
        $record->save();
    }

    public function appel($first_request)
    {
        $user = First_request::find($first_request);
        $user->appel = 1;
        $user -> save();
        // back();
    }

    public function re_appel($first_request)
    {
        $user = First_request::find($first_request);
        $user->appel = 0;
        $user -> save();
        // dd($user);
    }
    public function store(Request $request)
    {
    // dd($request);
        
        $request->validate([
            'degree_of_education' => ['required', 'string', 'max:255'],
            'work_experience' => ['required', 'string', 'max:255'],
            'type_of_employment' => ['required', 'string', 'max:255'],
            'organizational_position' => ['required', 'string', 'max:255'],
            'user_number' => ['nullable', 'string', 'max:255'],
            'job_specialization' => ['nullable', 'string', 'max:255'],
            'job_experiences' => ['nullable', 'string', 'max:255'],
            'origin' => ['required', 'string', 'max:255'],
            'main_destination' => ['required', 'string', 'max:255'],
            'other_destinations' => ['nullable', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'destination_city' => ['required', 'string', 'max:255'],
        ], [
            'degree_of_education.required' => '!مدرک تحصیلی نباید خالی باشد',
            'work_experience.required' => '!میزان سابقه کار نباید خالی باشد',
            'type_of_employment.required' => '!نوع استخدام نباید خالی باشد',
            'organizational_position.required' => '!پست سازمانی نباید خالی باشد',
            'origin.required' => '!مبدا نباید خالی باشد',
            'main_destination.required' => '!مقصد اصلی نباید خالی باشد',
            'city.required' => '!شهر نباید خالی باشد',
            'destination_city.required' => '!شهر نباید خالی باشد',
        ]);
        // dd($request);

        $first_request = First_request::where('user_id', $request->user()->id)->where('status', 1)->first();

        $first_request->initial_request = 1; 
        $first_request->degree_of_education = $request->get('degree_of_education'); 
        $first_request->work_experience = $request->get('work_experience'); 
        $first_request->type_of_employment = $request->get('type_of_employment'); 
        $first_request->organizational_position = $request->get('organizational_position'); 
        $first_request->user_number = $request->get('user_number'); 
        $first_request->job_specialization = $request->get('job_specialization'); 
        $first_request->job_experiences = $request->get('job_experiences'); 
        $first_request->origin = $request->get('origin'); 
        $first_request->main_destination = $request->get('main_destination'); 
        $first_request->other_destinations = $request->get('other_destinations'); 
        $first_request->city = $request->get('city'); 
        $first_request->destination_city = $request->get('destination_city'); 
     

        $first_request->save();
        // // dd($request->get('originUniversity'));
       
        // return Redirect::route('transfer_request.index');
    }

    // انتخاب افراد مورد نظر
    public function store_user_requests(Request $request)
    {
        dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $transferRequest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $transferRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTransferRequestRequest $request, User $transferRequest)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $transferRequest)
    {
        //
    }
}
