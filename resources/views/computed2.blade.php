@extends('layouts.app')

@section('content')
<div class="container">
<div id="app">
  <div class="row">

<div class="mycontrol" :class="{mycontrolactive:item.current}" v-for="item in danecomputed" @click="setscroller(item)" :key="item.nazwa"  style="width:150px;position:relative"   tabindex="0">
@{{item.bez}}  <i class="arrow down"></i>
</div>

</div>
</div>


</div>

@endsection

@section('scripts')
  <script src="{{ asset('js/app.js') }}"></script>
  <script src="{{ asset('js/vue.js') }}"></script>
  <script src="{{asset('js/dane.js')}}"></script>
  <script src="{{asset('js/computed2.js')}}"></script>


@endsection
