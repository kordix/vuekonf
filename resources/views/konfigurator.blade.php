@extends('layouts.app')

@section('content')



<input type="hidden" name="id" id="idd" value="{{ isset($id) ? $id : ''}}">


  <div class="container">
    <div class="row">

<div class="col-md-8">



<div class="" id="app">
  <div class="" v-if="loading">
    Ładowanie...
  </div>
  <div class="" v-if="info">
  @{{info}}
  </div>
  <transition class="" name="fade" tag="div" >
    <div class="" v-if="dane2[1].current==true">

  <select class="" name="" v-model="wzortyp" @change="filterWzory">
    <option value="PCV">PCV</option>
    <option value="INOX">Inox</option>
    <option value="FI">Future Inox</option>
    <option value="GD">Glass Design</option>
  </select>
  <button type="button" @click="filterWzory" name="button">Filtruj</button>
</div>

</transition>
  <transition-group name="fade" tag="div" class="row" style="margin-left:0px;padding-left:0px">
<div class="mycontrol" :class="{mycontrolactive:item.current}" v-for="item in dane2.filter((el)=>el.available==true).filter((el)=>el.show == true)" :key="item.nazwa"  style="width:150px;position:relative"   v-on:click="setscroller(item)" tabindex="0">
@{{item.bez}}  <i class="arrow down"></i>
</div>
</transition-group>



<div>
  <div class="scroller" name="test" tag="div">
    <div class="" v-if="dane2.find((el)=>el.current==true)">

    <div class="row">

      <transition-group name="test" tag="div" class="row" style="margin-left:0px;padding-left:0px">

  <div v-for="item in dane2.find((el)=>el.current==true).dane.filter((el)=>el.show==true)" v-bind:key="item.artnr"   class="col-md-3" v-on:click="handleitemclick(item,dane2.find((el)=>el.current==true).dane)" v-bind:class="{active:item.current}" >
      <b><p style="text-align:center;margin-bottom:0px">@{{item.bez}}</p> </b>
      {{-- <img :src="'images/'+dane2.find((el)=>el.current==true).nazwa+'/'+item.artnr+'.png' " alt=""> --}}

      <img v-if="dane2.find((el)=>el.nazwa=='szyba').current==false" class="img-fluid" :src="'https://zamowienia.wiked.pl/Web.Web/content/options/ZUBBMP/WIKED/'+dane2.find((el)=>el.current==true).folder+'/'+item.artnr+'.jpg.png' " >
      <img v-else class="img-fluid"  :src="'https://zamowienia.wiked.pl/Web.Web/content/options/ZUBBMP/WIKED/'+dane2.find((el)=>el.current==true).folder+'/'+dane2[1].dane.find((el)=>el.current==true).odpszyb+'_'+item.artnr+'.jpg.png' ">
     {{-- <img class="img-fluid" src="{{asset('./images/test.png' )}}"> --}}
  {{-- <p v-bind:class="{active:item.current}" v-on:click="handleitemclick(item,dane2.find((el)=>el.current==true).dane)" >@{{item.bez}}</p> --}}

  </div>
</transition-group>

</div>

</div>



</div>
<div class="row">

<button type="button" class="btn btn-primary ml-auto" name="button" @click="next">Dalej</button>
</div>
</div>


</div>



</div>

<div class="col-md-4">
<div id="konva">

</div>
<div class="" id="podsumowanie">
  <p>Podsumowanie:</p>
  <transition-group name="test" tag="div" style="margin-left:0px;padding-left:0px">
<div v-for="item in dane2.filter((el)=>el.available==true).filter((el)=>el.show == true)" v-bind:key="item.nazwa">
<span style="font-weight:bold">@{{item.bez}}:</span><span v-for="item in item.dane"><transition name="test"> <span v-if="item.current==true">@{{item.bez}}</span></transition></span>
</div>
</transition-group>



</div>
</div>
</div>
<label for="">Tryb edycji:</label>
<select class="form-control" name="tryb" id="trybselect" style="width:100px" v-model="tryb">
  <option value="all">Całość</option>
  <option value="step">Krok po kroku</option>
</select>
<p></p>
<button type="button" name="button" @click="gettryb">Zmień tryb</button>
<button type="button" name="button" v-on:click="storeApi">Zapisz</button>
<button type="button" name="button" v-on:click="getDoorApi">getDoorApi</button>
<button type="button" name="button" v-on:click="loadDoor">loadDoor</button>
<button type="button" name="button" v-on:click="store">store</button>
<button type="button" name="button" v-on:click="restore">restore</button>
<button type="button" name="button" v-on:click="logvue">vuelog</button>



<p></p>

</div>

@endsection


@section('scripts')
  <script src="{{ asset('js/app.js') }}"></script>
  <script src="{{ asset('js/vue.js') }}"></script>
  <script src="{{asset('js/dane.js')}}">

  </script>
  <script src="{{ asset('js/konf2.js') }}" defer></script>\
  <script src="https://unpkg.com/konva@3.3.3/konva.min.js" defer></script>
  <script src="{{asset('js/konva.js')}}" defer></script>


@endsection
