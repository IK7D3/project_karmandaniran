<?php

namespace App\Http\Controllers;
use Illuminate\Contracts\Auth\MustVerifyPhoneNumber;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminProfileController extends Controller
{
    public function edit(Request $request): Response
    {
        return Inertia::render('Admin/Profile/Edit', [
            'mustVerifyPhoneNumber' => $request->user() instanceof MustVerifyPhoneNumber,
            'status' => session('status'),
        ]);
    }
}
