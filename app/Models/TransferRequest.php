<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransferRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_name',
        'user_national_code',
        'user_phone_number',
        'origin_university',
        'destination_university'
    ];
}
