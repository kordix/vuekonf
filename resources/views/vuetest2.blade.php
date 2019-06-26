@extends('layouts.app')

@section('content')
  <div class="container">
    <div class="row">

<div class="col-md-8">



<div class="" id="app">

  <transition-group name="fade" tag="div" class="row" style="margin-left:0px;padding-left:0px">

<div class="mycontrol" v-for="item in dane2.filter((el)=>el.available==true).filter((el)=>el.show == true)" :key="item.nazwa" style="width:150px;position:relative"   v-on:click="setscroller(item)" tabindex="0">
@{{item.bez}} <span v-for="item in item.dane"><span v-if="item.current==true" style="text-align:right;font-weight:bold ">@{{item.bez}}</span></span> <i class="arrow down"></i>
</div>
</transition-group>



<div>
  <div class="scroller" name="fade" tag="div">
    <div class="row">

  <div v-for="item in dane2.find((el)=>el.current==true).dane" v-bind:key="item.artnr"   class="col-md-3" v-on:click="handleitemclick(item,dane2.find((el)=>el.current==true).dane)" v-bind:class="{active:item.current}" >
      <b><p style="text-align:center;margin-bottom:0px">@{{item.bez}}</p></b>
      {{-- <img :src="'images/'+dane2.find((el)=>el.current==true).nazwa+'/'+item.artnr+'.png' " alt=""> --}}
      <img class="img-fluid" :src="'images/'+dane2.find((el)=>el.current==true).nazwa+'/'+item.artnr+'.png' " >
     {{-- <img class="img-fluid" src="{{asset('./images/test.png' )}}"> --}}
  {{-- <p v-bind:class="{active:item.current}" v-on:click="handleitemclick(item,dane2.find((el)=>el.current==true).dane)" >@{{item.bez}}</p> --}}

  </div>
</div>

  <div class="row">

  <button type="button" class="btn btn-primary ml-auto" name="button" @click="next">Dalej</button>
</div>

</div>
</div>


</div>
</div>

<div class="col-md-4">
<div id="konva">

</div>
</div>
</div>
<select class="form-control" name="tryb" id="trybselect" style="width:100px" v-model="tryb">
  <option value="all">Całość</option>
  <option value="step">Krok po kroku</option>
</select>
<button type="button" name="button" @click="gettryb">Zmień tryb</button>


</div>

@endsection


@section('scripts')
  <script src="{{ asset('js/app.js') }}"></script>
  <script src="{{ asset('js/vue.js') }}"></script>
  <script src="{{ asset('js/konf2.js') }}" defer></script>\
  <script src="https://unpkg.com/konva@3.3.3/konva.min.js" defer></script>
  <script src="{{asset('js/konva.js')}}" defer></script>


@endsection
