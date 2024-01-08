<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('last_name')->after('name');
            $table->string('gender')->after('last_name');
            $table->string('degree_of_education')->after('phone_number');
            $table->string('work_experience')->after('degree_of_education');
            $table->string('type_of_employment')->after('work_experience');
            $table->string('organizational_position')->after('type_of_employment');
            $table->string('Job_experiences')->after('organizational_position');
            $table->string('Job_specialization')->after('Job_experiences');
            $table->string('user_number')->after('Job_specialization');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
