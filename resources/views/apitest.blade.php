@extends('layouts.app')

@section('content')

<div class="container" id="app">
@{{mydata.myprop}}

<button type="button" @click="test">test</button>

</div>
@endsection


@section('scripts')
  {{-- <script src="{{ asset('js/app.js') }}"></script> --}}
  <script src="{{ asset('js/vue.js') }}"></script>
  <script src="{{ asset('js/apitest.js') }}" defer></script>
@endsection
