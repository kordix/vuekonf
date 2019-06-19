const app = new Vue({
    el: '#app',
    data: {
      dane:{
        serie: {dane:[{artnr: '10',bez: 'normal',current:false}, {artnr: '20',bez: 'premium',current:false}],current:true },
        modele:{dane:[{artnr:'dupa',bez:'dupa',current:false}],current:false },
        sposobyotw:{dane:[{artnr:'KK',bez:'Klamko-klamka',current:false},{artnr:'KG',bez:'Klamko-gałka',current:false}],current:false },
        klamki:{dane:[{artnr:'magnusK',bez:'Magnus',typ:'KK',current:false},{artnr:'UrsusK',bez:'Ursus',typ:'KK',current:false},{artnr:'magnusK',bez:'TahomaG',typ:'KG',current:false}],current:false}
      },
      dane2:[
       {nazwa:'serie',current:false,dane:[{artnr:'10',bez:'normal',current:false},{artnr:'20',bez:'premium'}]},
       {nazwa:'modele',current:false,dane:[{artnr:'01',bez:'01',current:false},{artnr:'02',bez:'02',current:false}]},
       {nazwa:'sposobyotw',current:false,dane:[{artnr:'KK',bez:'Klamko-klamka',current:false},{artnr:'KG',bez:'Klamko-gałka',current:false}]},
       {nazwa:'klamki',current:true, dane:[{artnr:'magnusK',bez:'Magnus',typ:'KK',current:false},{artnr:'UrsusK',bez:'Ursus',typ:'KK',current:false},{artnr:'magnusK',bez:'TahomaG',typ:'KG',current:false}]},
       {nazwa:'kolory',current:false, dane:[{artnr:'01',bez:'Srebrno-szary',current:false},{artnr:'04',bez:'Orzech',current:false},{artnr:'06',bez:'Złoty Dąb',current:false}]}
      ],


    },
    mounted: function () {
      // console.log();
      // this.dane2[2].filter((el)=>el.)
      // console.log(this.dane2.find((el)=>el.current==true).dane);
      // console.log(this.test.find((el)=>el.current==true ) )
},
computed:{
  dane2filter:function(){
    return this.dane2.filter(function (el) {
      return el.current === true
    })
  }
},
    methods:{
      setscroller:function(elem,all){
          this.dane2.find((el)=>el.current==true).current=false;
          elem.current=true;
         console.log(this.dane2.find((el)=>el.nazwa==elem.nazwa && 1==1));
         // console.log(this.dane2.find((el)=>el.nazwa=='modele').current);
      },
      handleitemclick:function(elem,all){
        // console.log(all);
        if(all.find((el)=>el.current==true)){
          all.find((el)=>el.current==true).current=false;
        }

        // this.dane2[3].dane=this.dane2[3].dane.filter((el)=>el.typ=='KK')

        elem.current=true;

        if(this.dane2[2].dane.find((el)=>el.current==true)){
          let origin = [{artnr:'magnusK',bez:'Magnus',typ:'KK',current:false},{artnr:'UrsusK',bez:'Ursus',typ:'KK',current:false},{artnr:'magnusK',bez:'TahomaG',typ:'KG',current:false}];
          let pochwyt = this.dane2[2].dane.find((el)=>el.current==true).artnr;
          this.dane2[3].dane = origin.filter((el)=>el.typ==pochwyt);
          console.log(pochwyt);

        }
      }
}
});
