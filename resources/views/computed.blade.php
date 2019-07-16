@extends('layouts.app')

@section('content')
<div class="container">
<div id="app">
  <select class="" name="" v-model="currentsposobotw">
    <option :value="item" v-for="item in sposobyotw">@{{item}}</option>
  </select>
  <select class="" name="" v-model="currentklamka">
    <option :value="item.artnr" v-for="item in klamkicomp" >@{{item.artnr}}</option>
  </select>

</div>


</div>

@endsection

@section('scripts')
  <script src="{{ asset('js/app.js') }}"></script>
  <script src="{{ asset('js/vue.js') }}"></script>
  <script src="{{asset('js/dane.js')}}"></script>
  <script src="{{asset('js/computed.js')}}"></script>


@endsection
