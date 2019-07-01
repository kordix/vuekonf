@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">

            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">Handle</div>
                    <div class="card-body">
                        <a href="{{ url('/handle/create') }}" class="btn btn-success btn-sm" title="Dodaj Handle">
                             Dodaj
                        </a>

                        <form method="GET" action="{{ url('/handle') }}" accept-charset="UTF-8" class="form-inline my-2 my-lg-0 float-right" role="search">
                            <div class="input-group">
                                <input type="text" class="form-control" name="search" placeholder="Search..." value="{{ request('search') }}">
                                <span class="input-group-append">
                                    <button class="btn btn-secondary" type="submit">
                                    szukaj
                                    </button>
                                </span>
                            </div>
                        </form>

                        <br/>
                        <br/>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th><th>Artnr</th><th>Bez</th><th>Typ</th><th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                @foreach($handle as $item)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>{{ $item->artnr }}</td><td>{{ $item->bez }}</td>
                                        <td>{{ $item->typ }}</td>
                                        <td>
                                            <a href="{{ url('/handle/' . $item->id) }}" title="View Handle"><button class="btn btn-info btn-sm"> View</button></a>
                                            <a href="{{ url('/handle/' . $item->id . '/edit') }}" title="Edit Handle"><button class="btn btn-primary btn-sm"> Edytuj</button></a>

                                            <form method="POST" action="{{ url('/handle' . '/' . $item->id) }}" accept-charset="UTF-8" style="display:inline">
                                                {{ method_field('DELETE') }}
                                                {{ csrf_field() }}
                                                <button type="submit" class="btn btn-danger btn-sm" title="Delete Handle" onclick="return confirm(&quot;Confirm delete?&quot;)"> Usuń</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                            <div class="pagination-wrapper"> {!! $handle->appends(['search' => Request::get('search')])->render() !!} </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
