<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class VisitBranchPropertyController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return 
     */

    public function index()
    {
    
        $users = DB::table('users')->get();
        $name = "iman";
        
        return Inertia::render('Visit/BranchProperty', compact('users'));
    }

    public function article($id)
    {
        return Inertia::render('Visit/BranchProperty', compact('id'));
    }
}
