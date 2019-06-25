@extends('layouts.app')

@section('content')
  <div class="container">

<div class="" id="app">
<div class="row" style="margin-left:0px;padding-left:0px">

<div class="mycontrol" v-for="item in dane2" style="width:150px;position:relative"   v-on:click="setscroller(item)" tabindex="0">
@{{item.bez}} <span v-for="item in item.dane"><span v-if="item.current==true" style="text-align:right;font-weight:bold ">@{{item.bez}}</span></span> <i class="arrow down"></i>
</div>
</div>

<div>
  <transition-group class="scroller" name="fade" tag="div">
  <div v-for="item in dane2.find((el)=>el.current==true).dane" v-bind:key="item.artnr"   class="col-md-3" v-bind:class="{active:item.current}" v-on:click="handleitemclick(item,dane2.find((el)=>el.current==true).dane)">
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
