@extends('layouts.app')

@section('content')
<div class="container">
  <table>

@foreach($doors as $door)
  <tr>

<td>{{$door->id}}</td>
<td>{{$door->seria}}</td>
<td>{{$door->model}}</td>
<td>{{$door->szyba}}</td>
<td>{{$door->sposobotw}}</td>
<td>{{$door->kolor}}</td>
<td>{{$door->inoxkolor}}</td>
<td>{{$door->inoxstrona}}</td>



</tr>

@endforeach



</div>
@endsection
