<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Wzor;
use App\Handlepivot;


use App\Handle;
use Illuminate\Http\Request;

class HandleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */
     public function __construct(){
       $this->pipa=[];
     }

    public function index(Request $request)
    {
        $keyword = $request->get('search');
        $perPage = 25;

        if (!empty($keyword)) {
            $handle = Handle::where('artnr', 'LIKE', "%$keyword%")
                ->orWhere('bez', 'LIKE', "%$keyword%")
                ->latest()->paginate($perPage);
        } else {
            $handle = Handle::latest()->paginate($perPage);
        }

        return view('handle.index', compact('handle'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('handle.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request)
    {

        $requestData = $request->all();

        Handle::create($requestData);

        return redirect('handle')->with('flash_message', 'Handle added!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        $handle = Handle::findOrFail($id);

        return view('handle.show', compact('handle'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $handle = Handle::findOrFail($id);

        return view('handle.edit', compact('handle'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param  int  $id
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request, $id)
    {

        $requestData = $request->all();
        // dd($requestData);
        $handle = Handle::findOrFail($id);
        $handle->update($requestData);

        return redirect('handle')->with('flash_message', 'Handle updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy($id)
    {
        Handle::destroy($id);

        return redirect('handle')->with('flash_message', 'Handle deleted!');
    }

    public function pivotview(){
      // dd(Handle::find(1)->wzory);
      // dd($this->pipa);

      // $handles = Handle::all();
      // $handles->map(function($el){
      //   array_push($this->pipa,$el->wzory->pluck('artnr')->toArray());
      // });
        // dd($this->pipa);
      // dd($pipa);

      // $klamkaone = Handle::find(1);

      $klamki = Handle::all();
      $wzory = Wzor::all();
      return view('handlepivot',compact('klamki','wzory'));
    }

    public function storepivot(Request $request){
      Handlepivot::create($request->all());
      return back();
    }



}
