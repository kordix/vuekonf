@extends('layouts.app')

@section('content')
  <div class="container">

<div class="" id="app">
<button type="button" name="button" v-for="item in dane2" v-on:click="setscroller(item)">@{{item.nazwa}}</button>

  <div v-for="item in dane2.find((el)=>el.current==true).dane"  class="col-md-3">
  <p v-bind:class="{active:item.current}" v-on:click="handleitemclick(item,dane2.find((el)=>el.current==true).dane)" >@{{item.bez}}</p>
  </div>

</div>
</div>

@endsection


@section('scripts')
  <script src="{{ asset('js/konf2.js') }}" defer></script>
@endsection
