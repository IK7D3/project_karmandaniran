<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return 
     */
    public function index(Request $request)
    {
    
        return Inertia::render('User/Show');
    }
    public function show()
    {
        return Inertia::render('User/Show');
    }
}