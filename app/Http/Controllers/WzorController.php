<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Wzor;
use Illuminate\Http\Request;

class WzorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function index(Request $request)
    {
        $keyword = $request->get('search');
        $perPage = 300;

        if (!empty($keyword)) {
            $wzor = Wzor::where('artnr', 'LIKE', "%$keyword%")
                ->orWhere('bez', 'LIKE', "%$keyword%")->orderBy('artnr');

        } else {
            $wzor = Wzor::latest()->paginate($perPage);
        }

        return view('wzor.index', compact('wzor'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('wzor.create');
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

        Wzor::create($requestData);

        return redirect('wzor')->with('flash_message', 'Wzor added!');
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
        $wzor = Wzor::findOrFail($id);

        return view('wzor.show', compact('wzor'));
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
        $wzor = Wzor::findOrFail($id);

        return view('wzor.edit', compact('wzor'));
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

        $wzor = Wzor::findOrFail($id);
        $wzor->update($requestData);

        return redirect('wzor')->with('flash_message', 'Wzor updated!');
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
        Wzor::destroy($id);

        return redirect('wzor')->with('flash_message', 'Wzor deleted!');
    }
}
