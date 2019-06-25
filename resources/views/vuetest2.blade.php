@extends('layouts.app')

@section('content')
  <div class="container">

<div class="" id="app">
<button type="button" name="button" v-for="item in dane2" v-on:click="setscroller(item)">@{{item.nazwa}}</button>
<div>
  <transition-group class="scroller" name="list" tag="span">
  <div v-for="item in dane2.find((el)=>el.current==true).dane" v-bind:key="item"   class="col-md-3" v-bind:class="{active:item.current}" v-on:click="handleitemclick(item,dane2.find((el)=>el.current==true).dane)">
      <b><p style="text-align:center;margin-bottom:0px">@{{item.bez}}</p></b>
      {{-- <img :src="'images/'+dane2.find((el)=>el.current==true).nazwa+'/'+item.artnr+'.png' " alt=""> --}}
      <img class="img-fluid" :src="'images/'+dane2.find((el)=>el.current==true).nazwa+'/'+item.artnr+'.png' " >
     {{-- <img class="img-fluid" src="{{asset('./images/test.png' )}}"> --}}

  {{-- <p v-bind:class="{active:item.current}" v-on:click="handleitemclick(item,dane2.find((el)=>el.current==true).dane)" >@{{item.bez}}</p> --}}

  </div>
  </transition-group>
</div>


</div>
</div>

@endsection


@section('scripts')
  <script src="{{ asset('js/konf2.js') }}" defer></script>
@endsection
