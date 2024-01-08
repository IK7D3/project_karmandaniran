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
        Schema::create('user_requests', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('national_code', 10)->unique();
            $table->foreign('national_code')->references('national_code')->on('users')->onDelete('cascade');

            // ایجاد فیلد request_1_id
            $table->unsignedBigInteger('request_1_id');

            // ایجاد کلید خارجی برای ارتباط با جدول users
            $table->foreign('request_1_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_requests');
    }
};
