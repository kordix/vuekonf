<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Serium;
use Illuminate\Http\Request;

class SeriaController extends Controller
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
            $seria = Serium::where('artnr', 'LIKE', "%$keyword%")
                ->orWhere('bez', 'LIKE', "%$keyword%")
                ->latest()->paginate($perPage);
        } else {
            $seria = Serium::latest()->paginate($perPage);
        }

        return view('seria.index', compact('seria'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('seria.create');
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
        
        Serium::create($requestData);

        return redirect('seria')->with('flash_message', 'Serium added!');
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
        $serium = Serium::findOrFail($id);

        return view('seria.show', compact('serium'));
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
        $serium = Serium::findOrFail($id);

        return view('seria.edit', compact('serium'));
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
        
        $serium = Serium::findOrFail($id);
        $serium->update($requestData);

        return redirect('seria')->with('flash_message', 'Serium updated!');
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
        Serium::destroy($id);

        return redirect('seria')->with('flash_message', 'Serium deleted!');
    }
}
