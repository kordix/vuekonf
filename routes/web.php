<?php



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

Route::view('/vue', 'vuetest');
Route::view('/', 'konfigurator');
Route::view('/apitest', 'apitest');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('seria', 'SeriaController');
Route::resource('handle', 'HandleController');
Route::resource('wzor', 'WzorController');

Route::resource('sposobotw', 'SposobotwController');

Route::get('/pivot', 'HandleController@pivotview');
Route::post('/storepivot', 'HandleController@storepivot')->name('storepivot');
