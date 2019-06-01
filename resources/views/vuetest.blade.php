@extends('layouts.app')

@section('content')
  <div class="container">

<div class="" id="app">
<button type="button" name="button" v-on:click="getCurrentScroller(serie)">Serie</button>
<button type="button" name="button" v-on:click="getCurrentScroller(modele)">Modele</button>
<button type="button" name="button" v-on:click="getCurrentScroller(sposobyotw)">Sposoby Otwierania</button>

<div class="scroller" style="width:500px;border:1px black solid;display:flex;justify-content:space-around">
<div class="col-md-3" style="border:1px red solid" v-for="item in currentscroller" v-on:click="handleitemclick(item,currentscroller)">
<p >@{{item.bez}}</p>
</div>
</div>


</div>
</div>

@endsection
