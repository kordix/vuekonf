@extends('layouts.app')

@section('content')
<div class="container">

<button type="button" name="button" onclick="submitt()">Test</button>

</div>
@endsection


@section('scripts')
<script type="text/javascript">
const url1 = '/bezapi/klamki';
const url2 = '/bezapi/sposobotw';
const url3 = '/bezapi/wzory';
const url4 = '/bezapi/seria';
const url5 = '/bezapi/szyba';

async function getWzoryApi()  {
  const request = async () => {
      const response = await fetch(`/api/wzory`);
      const json = await response.json();
      // json.map((el)=>el.show=true);
       console.log(json);
  }
  await request();
}

async function getSerieApi()  {
  const request = async () => {
      const response = await fetch(`/api/seria`);
      const json = await response.json();
      // json.map((el)=>el.show=true);
      console.log(json);

  }
  await request();
}
async function getOtwApi()  {
  const request = async () => {
      const response = await fetch(`/api/sposobotw`);
      const json = await response.json();
      // json.map((el)=>el.show=true);
      console.log(json);

  }
  await request();
}
async function getKlamkiApi()  {
  const request = async () => {
      const response = await fetch(`/api/klamki`);
      const json = await response.json();
      // json.map((el)=>el.show=true);
      console.log(json);

  }
  await request();
  this.loading = false;
}
async function getPivotApi(klamka){
  const request = async () => {
      const response = await fetch(`/api/klamkipivot/${klamka}`);
      const json = await response.json();
      console.log(json);
  }
  await request();
}
async function getPivotAll(){
  let tab = ["P060o90","UrsusK","magnusK","tahomaK"];

  for(let i=0;i<tab.length;i++){
    await this.getPivotApi(tab[i]);
  }
}
async function getSzybyApi(){
  const request = async () => {
      const response = await fetch(`/api/szyba`);
      const json = await response.json();
      console.log(json);

    }
  await request();
}

function getAll(){
  getWzoryApi();
  getSzybyApi();
  getOtwApi();
  getSerieApi();
  getPivotAll();
}




Promise.all([
    fetch(url1).then((res)=>res.json()).then((res)=>console.log(res)),
    fetch(url2).then((res)=>res.json()).then((res)=>console.log(res)),
    fetch(url3).then((res)=>res.json()).then((res)=>console.log(res)),
    fetch(url4).then((res)=>res.json()).then((res)=>console.log(res)),
    fetch(url5).then((res)=>res.json()).then((res)=>console.log(res))
]).then((res)=>console.log('all ready')).then((res)=>{getAll()}) ;










</script>

@endsection
