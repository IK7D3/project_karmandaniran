<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Ghasedak\GhasedakApi;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cache;

class RegisteredUserController extends Controller
{


    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'gender' => ['required', 'in:مرد,زن'],
            'national_code' => ['required', 'string', 'min:10', 'max:10', 'unique:' . User::class],
            'phone_number' => ['required', 'string', 'min:11', 'max:11', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ],
        [
            'name.required' => '!نام نباید خالی باشد',
            'last_name.required' => '!نام خانوادگی نباید خالی باشد',
            'gender.required' => '!جنسیت را انتخاب کنید',
            'national_code.required' => '!کد ملی نباید خالی باشد',
            'phone_number.required' => '!شماره تلفن نباید خالی باشد',
            'password.required' => '!رمز عبور اصلی نباید خالی باشد',
        ]);

        try {
            $randomParam = mt_rand(1000, 99999);
            $expiryTime = now()->addMinutes(1);

            $template = "verifyTemplate";
            $param1 = "23427";
            $receptor = "09185181899";
            $api = new GhasedakApi('b759755c1f3560d4f6da5dd24eb5fafaf2cdc8d476a74028e21dd252c501fe8d');
            $api->Verify($request->phone_number, "verifyTemplate", $randomParam);

            Cache::put('randomParam', $randomParam, $expiryTime);
            Session::flash('name', $request->name);
            Session::flash('last_name', $request->last_name);
            Session::flash('gender', $request->gender);
            Session::flash('national_code', $request->national_code);
            Session::flash('phone_number', $request->phone_number);
            Session::flash('password', $request->password);

        } catch (\Ghasedak\Exceptions\ApiException $e) {
            echo $e->errorMessage();
            echo "iman";
            dd("error 1");
        } catch (\Ghasedak\Exceptions\HttpException $e) {
            echo $e->errorMessage();
        }


        return Inertia::render('Auth/Register', [
            'status' => false,
            'randomParam' => $randomParam
        ]);
    }

    public function verifyPhoneNumber(Request $request)
    {
        // بازیابی مقدار از فلش موقت
        $randomParam = Cache::get('randomParam');
        
        // حذف مقدار از فلش موقت
        // Session::forget('param1');
// dd("Sdf");
        if ($request->verify_phone_number == $randomParam) {

            $name = Session::get('name');
            $last_name = Session::get('last_name');
            $gender = Session::get('gender');
            $national_code = Session::get('national_code');
            $phone_number = Session::get('phone_number');
            $password = Session::get('password');

            $user = User::create([
                'name' => $name,
                'last_name' => $last_name,
                'gender' => $gender,
                'national_code' => $national_code,
                'phone_number' => $phone_number,
                'password' => Hash::make($password),
            ]);

            event(new Registered($user));

            Auth::login($user);

            return redirect(RouteServiceProvider::HOME);
        } else {
            return Inertia::render('Auth/Register', [
                'status' => true
            ]);
        }
    }
}
// return Inertia::render('Verification', [
    //     'param1' => $param1
    // ]);

        // try {
        //     $message = "به سامانه نقل و انتقالات خوش آمدید.\nکد تایید شما:\n1234";
        //     $lineNumber = "30005006009014"; // If you do not have a dedicated line, you must specify the line number  
        //     $receptor = $request->phone_number;
        //     $api = new GhasedakApi('b759755c1f3560d4f6da5dd24eb5fafaf2cdc8d476a74028e21dd252c501fe8d');
        //     $api->SendSimple($receptor, $message, $lineNumber);  
        // } catch (\Ghasedak\Exceptions\ApiException $e) {
        //     echo $e->errorMessage();
        //     echo "iman";
        //     dd("fdh");
        // } catch (\Ghasedak\Exceptions\HttpException $e) {
        //     echo $e->errorMessage();
        //     dd("fh");
        // }




                // return redirect()->route('register')->with(['status' => false]);
        // $user = User::create([
        //     'name' => $request->name,
        //     'national_code' => $request->national_code,
        //     'phone_number' => $request->phone_number,
        //     'password' => Hash::make($request->password),
        // ]);

        // event(new Registered($user));

        // Auth::login($user);

        // return redirect(RouteServiceProvider::HOME);