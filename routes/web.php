<?php
use App\Wzor;
use App\Handle;
use App\Szyba;
use App\Apitest;
use App\Door;
use App\Serium;
use App\Sposobotw;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::view('/computed', 'computed');
Route::view('/computed2', 'computed2');

Route::view('/vue', 'vuetest');
Route::view('/', 'konfigurator');
Route::get('/edit/{id}', 'DoorController@edit');

Route::view('/apitest', 'apitest');
Route::view('/apitestall', 'apitestall');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('seria', 'SeriaController');
Route::resource('handle', 'HandleController');
Route::resource('wzor', 'WzorController');

Route::resource('sposobotw', 'SposobotwController');

Route::get('/pivot', 'HandleController@pivotview');
Route::post('/storepivot', 'HandleController@storepivot')->name('storepivot');
Route::get('/szybapivot', 'SzybaController@pivotview');
Route::post('/storeszybapivot', 'SzybaController@storepivot')->name('storeszybapivot');


Route::resource('szyba', 'SzybaController');

Route::get('/wzorytest',function(){
$value = Wzor::firstOrFail();
dd($value);
});


Route::resource('door','DoorController');

Route::get('/apit', function () {
    return view('apitestvue');
});


Route::get('bezapi/wzory',function(){
$value = Wzor::all('artnr','bez','typ','odpszyb')->sortBy('artnr')->values();
return $value;
});

Route::get('bezapi/seria',function(){
$value = Serium::all('artnr','bez')->sortBy('artnr')->values();
return $value;
});

Route::get('bezapi/sposobotw',function(){
$value = Sposobotw::all('artnr','bez')->sortBy('artnr')->values();
return $value;
});

Route::get('bezapi/klamki',function(){
$value = Handle::all('artnr','bez','typ')->sortBy('artnr')->values();
return $value;
});

Route::get('bezapi/szyba',function(){
$value = Szyba::all('artnr','bez')->sortBy('artnr')->values();
return $value;
});

Route::get('bezapi/klamkipivot/{artnr}',function($artnr){
$value = Handle::where('artnr','=',$artnr)->firstOrFail()->wzory->pluck('artnr');
return $value;
});

Route::get('bezapi/szybapivot/{artnr}',function($artnr){
$value = Szyba::where('artnr','=',$artnr)->firstOrFail()->wzory->pluck('artnr');
return $value;
});
