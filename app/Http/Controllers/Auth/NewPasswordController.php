<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;


class NewPasswordController extends Controller
{
    /**
     * Display the password reset view.
     */
    public function create(Request $request): Response
    {
        $phone_number = Session::get('phone_number');
        $randomParam = Cache::get('randomParam');
        if ($request->route('token') == $randomParam){
            return Inertia::render('Auth/ResetPassword', [
                'phone_number' => $phone_number,
                'token' => $request->route('token'),
            ]);
        }
        else{
            return Inertia::render('Auth/ForgotPassword', [
                'status' => session('status'),
            ]);
        }
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $user = User::where('phone_number', $request->phone_number)->first();
        // dd($user);
        $validated = $request->validate([
            'token' => 'required',
            'phone_number' => 'required|digits:11',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        $user->update([
            'password' => Hash::make($validated['password']),
        ]);
       
        return redirect('/login');
    }
        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        // $status = Password::reset(
        //     $request->only('phone_number', 'password', 'password_confirmation', 'token'),
        //     function ($user) use ($request) {
        //         $user->forceFill([
        //             'password' => Hash::make($request->password),
        //             'remember_token' => Str::random(60),
        //         ])->save();

        //         event(new PasswordReset($user));
        //     }
        // );

        // // If the password was successfully reset, we will redirect the user back to
        // // the application's home authenticated view. If there is an error we can
        // // redirect them back to where they came from with their error message.
        // if ($status == Password::PASSWORD_RESET) {
        //     return redirect()->route('login')->with('status', __($status));
        // }

        // throw ValidationException::withMessages([
        //     'phone_number' => [trans($status)],
        // ]);
    
}
