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
class VerifyPhoneNumberController extends Controller
{

    public function creatCode(Request $request): Response
    {
            
        return Inertia::render('Auth/Register', [
            'status' => true
        ]);
    }

    // public function verifyCode(Request $request)
    // {
       
    // }
}
