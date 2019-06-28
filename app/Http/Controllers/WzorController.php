<?php

namespace App\Http\Controllers;

use App\Wzor;
use Illuminate\Http\Request;

class WzorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('wzor.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      // dd($request->all());
        Wzor::create($request->all());
        session()->flash('message','dodano wzór');
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Wzor  $wzor
     * @return \Illuminate\Http\Response
     */
    public function show(Wzor $wzor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Wzor  $wzor
     * @return \Illuminate\Http\Response
     */
    public function edit(Wzor $wzor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Wzor  $wzor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Wzor $wzor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Wzor  $wzor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Wzor $wzor)
    {
        //
    }
}
