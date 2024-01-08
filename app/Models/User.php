<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'last_name',
        'gender',
        'national_code',
        'phone_number',
        'degree_of_education',
        'work_experience',
        'type_of_employment',
        'organizational_position',
        'job_expreiences',
        'job_specialization',
        'user_number',
        'password',
        'initial_request',
        'second_request',
        'third_request',
        'main_destination',
        'other_destinations',
        'first_payment_code',
        'second_payment_code',
        'third_payment_code'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'phone_number_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
