<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Szyba;
use App\Szybapivot;

use App\Wzor;

use Illuminate\Http\Request;

class SzybaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function index(Request $request)
    {
        $keyword = $request->get('search');
        $perPage = 25;

        if (!empty($keyword)) {
            $szyba = Szyba::where('artnr', 'LIKE', "%$keyword%")
                ->orWhere('bez', 'LIKE', "%$keyword%")
                ->latest()->paginate($perPage);
        } else {
            $szyba = Szyba::latest()->paginate($perPage);
        }

        return view('szyba.index', compact('szyba'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('szyba.create');
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

        Szyba::create($requestData);

        return redirect('szyba')->with('flash_message', 'Szyba added!');
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
        $szyba = Szyba::findOrFail($id);

        return view('szyba.show', compact('szyba'));
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
        $szyba = Szyba::findOrFail($id);

        return view('szyba.edit', compact('szyba'));
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

        $szyba = Szyba::findOrFail($id);
        $szyba->update($requestData);

        return redirect('szyba')->with('flash_message', 'Szyba updated!');
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
        Szyba::destroy($id);

        return redirect('szyba')->with('flash_message', 'Szyba deleted!');
    }

    public function pivotview(){
      $szyby = Szyba::all();
      // dd(Szyba::find(1)->wzory->find(1)->artnr );

      $wzory = Wzor::all();
      return view('szybapivot',compact('wzory','szyby'));
    }

    public function storepivot(Request $request){
      Szybapivot::create($request->all());
      return back();
    }
}
