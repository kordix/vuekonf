<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSzybapivotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('szyba_wzor', function (Blueprint $table) {
          $table->integer('szyba_id')->unsigned();
          $table->foreign('szyba_id')->references('id')->on('szybas');
          $table->integer('wzor_id')->unsigned();
          $table->foreign('wzor_id')->references('id')->on('wzors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('szybapivots');
    }
}
