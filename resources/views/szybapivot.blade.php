@extends('layouts.app')

@section('content')
<div class="container">

@foreach($szyby as $szyba)
{{$szyba->bez}} ({{$szyba->artnr}})
<ul>
  @foreach($szyba->wzory as $wzor)
<li>
  {{$wzor->artnr}}
</li>
  @endforeach
</ul>
@endforeach

<form class="" action="{{route('storeszybapivot')}}" method="post">
  {{csrf_field()}}
<div class="form-group">
<label for="">Szyba</label>
<select class="" name="szyba_id">
@foreach($szyby as $szyba)
<option value="{{$szyba->id}}">{{$szyba->bez}}</option>
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
