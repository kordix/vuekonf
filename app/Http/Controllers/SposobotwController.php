<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Sposobotw;
use Illuminate\Http\Request;

class SposobotwController extends Controller
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
            $sposobotw = Sposobotw::where('artnr', 'LIKE', "%$keyword%")
                ->latest()->paginate($perPage);
        } else {
            $sposobotw = Sposobotw::latest()->paginate($perPage);
        }

        return view('sposobotw.index', compact('sposobotw'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('sposobotw.create');
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

        Sposobotw::create($requestData);

        return redirect('sposobotw')->with('flash_message', 'Sposobotw added!');
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
        $sposobotw = Sposobotw::findOrFail($id);

        return view('sposobotw.show', compact('sposobotw'));
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
        $sposobotw = Sposobotw::findOrFail($id);

        return view('sposobotw.edit', compact('sposobotw'));
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
        $sposobotw = Sposobotw::findOrFail($id);
        $sposobotw->update($requestData);

        return redirect('sposobotw')->with('flash_message', 'Sposobotw updated!');
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
        Sposobotw::destroy($id);

        return redirect('sposobotw')->with('flash_message', 'Sposobotw deleted!');
    }
}
