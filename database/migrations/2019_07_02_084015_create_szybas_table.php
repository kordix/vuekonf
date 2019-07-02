<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSzybasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('szybas', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('artnr')->nullable();
            $table->string('bez')->nullable();
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('szybas');
    }
}
