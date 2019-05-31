@extends('layouts.app')

@section('content')
  <div class="container">

<div class="" id="app">
<button type="button" name="button" v-on:click="getCurrentScroller(serie)">Serie</button>
<button type="button" name="button" v-on:click="getCurrentScroller(modele)">Modele</button>


<div class="scroller" style="width:500px;border:1px black solid;display:flex;justify-content:space-around">
<div class="col-md-3" style="border:1px red solid" v-for="item in currentscroller">
<p>@{{item.opis}}</p>
</div>
</div>


</div>
</div>

@endsection
