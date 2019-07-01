<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Handlepivot extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('handle_wzor', function (Blueprint $table) {
        $table->integer('handle_id')->unsigned();
        $table->foreign('handle_id')->references('id')->on('handles');
        $table->integer('wzor_id')->unsigned();
        $table->foreign('wzor_id')->references('id')->on('wzors');

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
