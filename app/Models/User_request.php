<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_request extends Model
{
    use HasFactory;

    protected $fillable = [
        'national_code ',
        'selected_people',
    ];
}
