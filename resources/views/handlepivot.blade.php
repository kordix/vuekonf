@extends('layouts.app')

@section('content')
<div class="container">

{{-- {{$klamkaone->wzory}} --}}
@foreach($klamki as $klamka)
{{$klamka->bez}} ({{$klamka->artnr}})
<ul>
  @foreach($klamka->wzory as $wzor)
<li>
  {{$wzor->artnr}}
</li>
  @endforeach
</ul>
@endforeach




{{--
@foreach($klamki->wzory as $klamka)
<td>{{$klamka)}}</td>


@endforeach --}}


<form class="" action="{{route('storepivot')}}" method="post">
  {{csrf_field()}}
<div class="form-group">
<label for="">Klamka</label>
<select class="" name="handle_id">
@foreach($klamki as $klamka)
<option value="{{$klamka->id}}">{{$klamka->bez}}</option>
@endforeach
</select>
<select class="" name="wzor_id">
  @foreach($wzory as $wzor)
  <option value="{{$wzor->id}}">{{$wzor->bez}}</option>
  @endforeach
</select>
<button type="submit" >Submit</button>

</div>

</form>



</div>

@endsection
