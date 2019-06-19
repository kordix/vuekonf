@extends('layouts.app')

@section('content')
  <div class="container">

<div class="" id="app">
<button type="button" name="button" v-on:click="getCurrentScroller(serie)">Serie</button>
<button type="button" name="button" v-on:click="getCurrentScroller(modele)">Modele</button>
<button type="button" name="button" v-on:click="getCurrentScroller(sposobyotw)">Sposoby Otwierania</button>
<button type="button" name="button" v-on:click="filterklamki()">Klamki</button>


<div class="scroller" style="width:500px;border:1px black solid;display:flex;justify-content:space-around">
<div v-for="item in currentscroller"  class="col-md-3"  v-on:click="handleitemclick(item,currentscroller)" v-bind:class="{active:item.current}" >
<p >@{{item.bez}}</p>
</div>
</div>


</div>
</div>

@endsection

@section('scripts')
  <script src="{{ asset('js/konf.js') }}" defer></script>
@endsection
