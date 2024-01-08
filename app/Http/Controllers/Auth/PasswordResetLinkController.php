<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Ghasedak\GhasedakApi;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cache;

class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'phone_number' => 'required|digits:11',
        ]);
        $phoneNumber = $request->input('phone_number');

    $user = User::where('phone_number', $phoneNumber)->first();

    if (!$user) {
        return Inertia::render('Auth/ForgotPassword', ['message' => 'شماره تلفن یافت نشد']);
    }
        // // We will send the password reset link to this user. Once we have attempted
        // // to send the link, we will examine the response then see the message we
        // // need to show to the user. Finally, we'll send out a proper response.
        // $status = Password::sendResetLink(
        //     $request->only('phone_number')
        // );

        // if ($status == Password::RESET_LINK_SENT) {
        //     return back()->with('status', __($status));
        // }

        // throw ValidationException::withMessages([
        //     'phone_number' => [trans($status)],
        // ]);

        $randomParam = mt_rand(1000, 99999);
        $expiryTime = now()->addMinutes(1);
        Cache::put('randomParam', $randomParam, $expiryTime);
        Session::flash('phone_number', $request->phone_number);
     
        try {
            $randomParam = mt_rand(1000, 99999);
            $expiryTime = now()->addMinutes(1);

            $api = new GhasedakApi('b759755c1f3560d4f6da5dd24eb5fafaf2cdc8d476a74028e21dd252c501fe8d');
            $api->Verify($request->phone_number, "verifyTemplate", $randomParam);

            Cache::put('randomParam', $randomParam, $expiryTime);
            Session::flash('phone_number', $request->phone_number);
         

        } catch (\Ghasedak\Exceptions\ApiException $e) {
            echo $e->errorMessage();
            echo "iman";
            dd("error 1");
        } catch (\Ghasedak\Exceptions\HttpException $e) {
            echo $e->errorMessage();
        }
      
        return Inertia::render('Auth/VerifyPhoneNumberResetPas', [
            // 'status' => session('status'),
            'randomParam' => $randomParam
        ]);
    }
}
