<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class First_request extends Model
{
    use HasFactory;

    /**
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'status',
        'degree_of_education',
        'work_experience',
        'type_of_employment',
        'organizational_position',
        'user_number',
        'job_specialization',
        'job_expreiences',
        'origin',
        'main_destination',
        'other_destinations',
        'city',
        'destination_city',
        'first_payment_code',
        'initial_request',
        'first_message',
        'initial_request_start_date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}