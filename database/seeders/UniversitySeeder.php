<?php

namespace Database\Seeders;

use App\Models\University;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UniversitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $universities = [
            'دانشگاه شیراز',
            'دانشگاه مشهد',
            'دانشگاه تهران',
            'دانشگاه یزد',
            'دانشگاه همدان',
            'دانشگاه اصفهان',
            'دانشگاه کردستان',
            // ادامه نام‌های دانشگاه دیگر
        ];

        foreach ($universities as $university) {
            University::create([
                'name' => $university,
            ]);
        }
    }
}
