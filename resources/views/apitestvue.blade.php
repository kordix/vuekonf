@extends('layouts.app')

@section('content')
<div class="container">
{{ csrf_field() }}
{{ csrf_token() }}

<button type="button" name="button" onclick="submitt()">Test</button>

</div>
@endsection


@section('scripts')
<script type="text/javascript">
//Select token with getAttribute
let token = document.getElementsByName("csrf-token")[0].getAttribute('content');
//Select input values with the data you want to send
let nazwaa = 'test';
let opiss = 'test2';
//Define your post url
let url = '/api/apitest';
//Define redirect if needed
console.log(token);
//Select your form to clear data after sucessful post


  function submitt(){
    fetch(url, {
       headers: {
         "Content-Type": "application/json",
         "Accept": "application/json, text-plain, */*",
         "X-Requested-With": "XMLHttpRequest",
         "X-CSRF-TOKEN": token
        },
       method: 'post',
       credentials: "same-origin",
       body: JSON.stringify({
         seria: nazwaa,
         model: opiss
       })
      })
       .then((data) => {
         console.log(data);
       })
      .catch(function(error) {
          console.log(error);
        });
      }

</script>

@endsection
