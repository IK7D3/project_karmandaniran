<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Second_third_request extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'form_id',
        'second_request',
        'selected_people',
        'second_payment_code',
        'second_message',
        'second_request_start_date',
        'third_request',
        'third_payment_code',
        'third_message',
        'third_request_start_date',

    ];
    public function form()
    {
        return $this->belongsTo(First_request::class, 'form_id');
    }
}