@extends('layouts.app')

@section('content')

<div class="container" id="app">
<p v-for="item in wzory[0].dane">@{{item.bez}}</p>
<button type="button" @click="test">test</button>

</div>
@endsection


@section('scripts')
  {{-- <script src="{{ asset('js/app.js') }}"></script> --}}
  <script src="{{ asset('js/vue.js') }}"></script>
  <script src="{{ asset('js/apitest.js') }}" defer></script>
@endsection
