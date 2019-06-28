@extends('layouts.app')

@section('content')

<div class="container">

<form action="{{route('wzor.store')}}" method="post">
{{csrf_field()}}

<div class="form-group">
<h1 style="font-size:16px">Dodaj wzór:</h1>
<label for="">Artnr:</label>
<input type="text" name="artnr" value="">
<label for="">Bez</label>
<input type="text" name="bez" value="">
<button type="submit" class="btn btn-primary">Wyślij</button>
</div>


</form>
</div>


@endsection
