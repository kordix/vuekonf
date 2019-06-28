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
Route::get('/wzor/create','WzorController@create')->name('wzor.create');
Route::post('/wzor/store','WzorController@store')->name('wzor.store');
