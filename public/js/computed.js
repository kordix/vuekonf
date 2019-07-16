let app = new Vue({
el:'#app',
data:{
sposobyotw:['KK','KP','KG'],
currentsposobotw:'',
currentklamka:'',
klamki:[{typ:'KK',artnr:'magnus'},{typ:'KP',artnr:'ursus'},{typ:'KG',artnr:'tahoma'}]

},
methods:{

},
// watch:{
//   currentsposobotw:{
//     handler:function(){
//       console.log('fsdadsf');
//       this.klamki.filter((el)=>el.typ==this.currentsposobotw)
//     }
//   }
// },
computed:{
  klamkicomp(){
    return this.klamki.filter((el)=>el.typ==this.currentsposobotw);
  }
}

});
