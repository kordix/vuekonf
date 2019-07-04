<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Wzor;
use Illuminate\Http\Request;

class WzorController extends Controller
{

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


    public function create()
    {
        return view('wzor.create');
    }

    public function store(Request $request)
    {

        $requestData = $request->all();

        Wzor::create($requestData);

        return redirect('wzor')->with('flash_message', 'Wzor added!');
    }


    public function show($id)
    {
        $wzor = Wzor::findOrFail($id);

        return view('wzor.show', compact('wzor'));
    }

    public function edit($id)
    {
        $wzor = Wzor::findOrFail($id);
        // dd($wzor->typ);

        return view('wzor.edit', compact('wzor'));
    }

    public function update(Request $request, $id)
    {

        $requestData = $request->all();
        $wzor = Wzor::findOrFail($id);
        $wzor->update($requestData);

        return redirect('wzor')->with('flash_message', 'Wzor updated!');
    }

    public function destroy($id)
    {
        Wzor::destroy($id);

        return redirect('wzor')->with('flash_message', 'Wzor deleted!');
    }
}
