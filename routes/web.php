<?php

use App\Http\Controllers\AdminProfileController;
use App\Http\Controllers\AdminTransferRequestController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyPhoneNumberController;
use App\Http\Controllers\FinalTransferRequestController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransferRequestController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserRequestController;
use App\Http\Controllers\VisitBranchPropertyController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('/show', [UserController::class, 'show']);
// Route::inertia('/show', 'User/Show');
// Route::get("/imans" , [UserController::class , "index"]);
// Route::get("/show" , [UserController::class , "index"]);
// Route::post('registg/asd', [VerifyPhoneNumberController::class, 'creatCode'])
// ->name('creatCode');

 
Route::get("/branch_property" , [VisitBranchPropertyController::class , "index"]);
Route::get("/branch_property/{id}" , [VisitBranchPropertyController::class , "article"]);
Route::get("/orders" , [OrderController::class, "index"]);


Route::get('/', function () {
    return Inertia::render('HomePage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role:user'])->name('dashboard');

Route::prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/AdminDashboard');
    })->middleware(['auth', 'verified', 'role:admin'])->name('admin.dashboard');

    // Route::get('/code_first_step', function () {
    //     return Inertia::render('Admin/Profile/Edit');
    // })->middleware(['auth', 'verified', 'role:admin'])->name('admin.code_first_step');

    Route::get('/code_first_step',
     [AdminTransferRequestController::class, 'code_first_step'])
     ->middleware(['auth', 'verified', 'role:admin'])->name('admin.code_first_step');

     Route::get('/code_second_step',
     [AdminTransferRequestController::class, 'code_second_step'])
     ->middleware(['auth', 'verified', 'role:admin'])->name('admin.code_second_step');

     Route::get('/code_third_step',
     [AdminTransferRequestController::class, 'code_third_step'])
     ->middleware(['auth', 'verified', 'role:admin'])->name('admin.code_third_step');

     Route::post('/code_first_step/{item}/{status}',
     [AdminTransferRequestController::class, 'code_first_step_first_verification'])
     ->middleware(['auth', 'verified', 'role:admin'])->name('admin.code_first_step_first_verification');

     Route::post('/code_first_step/sendFirstMessage/{item}/{status}',
     [AdminTransferRequestController::class, 'sendFirstMessage'])
     ->middleware(['auth', 'verified', 'role:admin'])->name('admin.sendFirstMessage');

     Route::post('/code_first_step/sendSecondMessage/{item}/{status}',
     [AdminTransferRequestController::class, 'sendSecondMessage'])
     ->middleware(['auth', 'verified', 'role:admin'])->name('admin.sendSecondMessage');

     Route::post('/code_first_step/sendThirdMessage/{item}/{status}',
     [AdminTransferRequestController::class, 'sendThirdMessage'])
     ->middleware(['auth', 'verified', 'role:admin'])->name('admin.sendThirdMessage');

     Route::post('/code_second_step/{item}/{status}',
     [AdminTransferRequestController::class, 'code_second_step_second_verification'])
     ->middleware(['auth', 'verified', 'role:admin'])->name('admin.code_second_step_second_verification');

     Route::post('/code_third_step/{item}/{status}',
     [AdminTransferRequestController::class, 'code_third_step_third_verification'])
     ->middleware(['auth', 'verified', 'role:admin'])->name('admin.code_third_step_third_verification');
});

Route::middleware('auth')->group(function () {
    // users
   /*  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
     */
    Route::get('/transfer_request/re_store/{first_request}', [TransferRequestController::class, 're_store'])->name('transfer_re_request.store');
    Route::get('/transfer_request/appel/{first_request}', [TransferRequestController::class, 'appel'])->name('transfer_request.appel');
    Route::get('/transfer_re_request/appel/{first_request}', [TransferRequestController::class, 're_appel'])->name('transfer_re_request.appel');
    Route::post('/transfer_request/user_requests', [UserRequestController::class, 'store'])->name('user_requests.store');
    Route::post('/transfer_request/user_re_requests', [UserRequestController::class, 're_store'])->name('user_re_requests.store');
    Route::get('/transfer_request', [TransferRequestController::class, 'index'])->name('transfer_request.index');
    Route::post('/transfer_request/{id}', [TransferRequestController::class, 'pre_store'])->name('transfer_request.pre_store');    
    Route::post('/final_transfer_request', [FinalTransferRequestController::class, 'pre_third_store'])->name('final_transfer_request.pre_store');    
    Route::post('/transfer_request', [TransferRequestController::class, 'store'])->name('transfer_request.store');
   

    Route::get('/complaints', [ProfileController::class, 'complaints'])->name('profile.complaints');

    // admin
    // Route::get('/admin/profile', [AdminProfileController::class, 'edit'])->name('admin.profile.edit');
    // Route::get('/admin/dashboard/code_first_step', [AdminTransferRequestController::class, 'code_first_step'])->name('admin.dashboard.code_first_step');
    // Route::get('/admin/profile/edit', [AdminTransferRequestController::class, 'index'])->name('admin.profile.index');
    // Route::post('/admin/profile/edit/{item}', [AdminTransferRequestController::class, 'edit'])->name('admin.profile.edit');
});


require __DIR__.'/auth.php';
