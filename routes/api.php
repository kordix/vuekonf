<?php

use Illuminate\Http\Request;
use App\Wzor;
use App\Handle;
use App\Szyba;


use App\Serium;
use App\Sposobotw;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/wzory',function(){
$value = Wzor::all('artnr','bez','typ')->sortBy('artnr')->values();
return $value;
});

Route::get('/seria',function(){
$value = Serium::all('artnr','bez')->sortBy('artnr')->values();
return $value;
});

Route::get('/sposobotw',function(){
$value = Sposobotw::all('artnr','bez')->sortBy('artnr')->values();
return $value;
});

Route::get('/klamki',function(){
$value = Handle::all('artnr','bez','typ')->sortBy('artnr')->values();
return $value;
});

Route::get('/szyba',function(){
$value = Szyba::all('artnr','bez')->sortBy('artnr')->values();
return $value;
});

Route::get('/klamkipivot/{artnr}',function($artnr){
$value = Handle::where('artnr','=',$artnr)->firstOrFail()->wzory->pluck('artnr');
return $value;
});

Route::get('/szybapivot/{artnr}',function($artnr){
$value = Szyba::where('artnr','=',$artnr)->firstOrFail()->wzory->pluck('artnr');
return $value;
});
