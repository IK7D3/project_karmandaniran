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

            $table->string('degree_of_education')->nullable()->default(null)->change();
            $table->string('work_experience')->nullable()->default(null)->change();
            $table->string('type_of_employment')->nullable()->default(null)->change();
            $table->string('organizational_position')->nullable()->default(null)->change();
            $table->string('job_experiences')->nullable()->default(null)->change();
            $table->string('job_specialization')->nullable()->default(null)->change();
            $table->string('user_number')->nullable()->default(null)->change();
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
