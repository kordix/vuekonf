let app = new Vue({
el:'#app',
data:{
dane:[
  {nazwa:'serie',bez:'Seria',current:false,show:true,available:true,dane:[{artnr:'10',bez:'normal', current:false,show:true },{artnr:'20',bez:'premium', current:false,show:true},{artnr:'21',bez:'premium termo',show:true, current:false}]},
  {nazwa:'modele', bez:'modele',current:false,show:true,available:true,dane:[{artnr:'01',bez:'01',current:false,show:true},{artnr:'02',bez:'02',current:false,show:true},{artnr:'03',bez:'03',current:false,show:true} ]},
  {nazwa:'sposobotw',bez:'Sposób otw.',current:false,show:true,available:true,dane:[{artnr:'KK',bez:'Klamko-klamka',current:true,show:true },{artnr:'KG',bez:'Klamko-gałka',current:false,show:true }] },
  {nazwa:'klamki',bez:'Klamki',current:false,show:true,available:true,dane:[{artnr:'Ursus',bez:'ursus',typ:'KK',current:false,show:true },{artnr:'KG',bez:'tahomaG',current:false,show:true }] }

],

sposobyotw:['KK','KP','KG'],
currentsposobotw:'',
currentklamka:'',
klamki:[{typ:'KK',artnr:'magnus'},{typ:'KP',artnr:'ursus'},{typ:'KG',artnr:'tahoma'}]

},
methods:{
setscroller:function(elem,all){
elem.current=true;
},
handleitemclick:function(elem,all){
  elem.current=true;
}
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
  currentsotw(){
    return this.dane.find((el)=>el.nazwa=='sposobotw').dane.find((el)=>el.current==true).artnr
  },
  klamkifilter(){
    return this.dane.find((el)=>el.nazwa=='klamki').dane.filter((el)=>el.typ==this.currentsotw)
  },
  danecomputed(){
    return [
      {nazwa:'serie',bez:'Seria',current:false,show:true,available:true,dane:[{artnr:'10',bez:'normal', current:false,show:true },{artnr:'20',bez:'premium', current:false,show:true},{artnr:'21',bez:'premium termo',show:true, current:false}]},
      {nazwa:'modele', bez:'modele',current:true,show:true,available:true,dane:[{artnr:'01',bez:'01',current:false,show:true},{artnr:'02',bez:'02',current:false,show:true},{artnr:'03',bez:'03',current:false,show:true} ]},
      {nazwa:'sposobotw',bez:'Sposób otw.',current:false,show:true,available:true,dane:[{artnr:'KK',bez:'Klamko-klamka',current:true,show:true },{artnr:'KG',bez:'Klamko-gałka',current:false,show:true }] },
      {nazwa:'klamki',bez:'Klamki',current:false,show:true,available:true,dane:this.klamkifilter }

    ]
  }
}

});
