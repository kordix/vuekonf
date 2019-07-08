<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Doors2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('doors', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('seria')->default('-');
          $table->string('model')->default('-');
          $table->string('szyba')->default('-');
          $table->string('sposobotw')->default('-');
          $table->string('klamka')->default('-');
          $table->string('kolor')->default('-');
          $table->string('inoxkolor')->default('-');
          $table->string('inoxstrona')->default('-');
          $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
