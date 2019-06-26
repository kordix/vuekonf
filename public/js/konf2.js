const app = new Vue({
    el: '#app',
    data: {
      dane2:[
       {nazwa:'serie',bez:'Seria', current:true,show:true, dane:[{artnr:'10',bez:'normal',current:false},{artnr:'20',bez:'premium',current:false},{artnr:'30',bez:'optimum',current:false}]},
       {nazwa:'modele',bez:'Wzór', current:false,show:false ,dane:[{artnr:'01',bez:'01',current:false},{artnr:'02',bez:'02',current:false}]},
       {nazwa:'sposobyotw',bez:'Sposób otw.',show:false,current:false,dane:[{artnr:'KK',bez:'Klamko-klamka',current:false},{artnr:'KG',bez:'Klamko-gałka',current:false},{artnr:'PP',bez:'Pochwyt-pochwyt',current:false}]},
       {nazwa:'klamki',bez:'Klamka',show:false,current:false,
       dane:[{artnr:'P060o90',bez:'Pochwyt 60 cm okrągły ALFA 90 st.',typ:'PP',wzory:['01','05'], current:false},
       {artnr:'magnusK',bez:'Magnus',typ:'KK',show:false,current:true,wzory:['01','05']},
       {artnr:'UrsusK',bez:'Ursus',typ:'KK',show:false,wzory:['01','05'],current:false},
       {artnr:'tahomaK',bez:'TahomaG',typ:'KG',show:false,wzory:['01','05'],current:false}
       ]},
       {nazwa:'kolory',bez:'kolory',show:false, current:false, dane:[{artnr:'01',bez:'Srebrno-szary',current:false},{artnr:'04',bez:'Orzech',current:true},{artnr:'06',bez:'Złoty Dąb',current:false}]},
       {nazwa:'klamkakolor',bez:'Kolor klamki',show:false, current:false, dane:[{artnr:'stz',bez:'Stare złoto',current:true},{artnr:'inox',bez:'inox',current:false},{artnr:'black',bez:'Black',current:false} ]},
       {nazwa:'inoxkolor',bez:'Kolor ramki:',show:false, current:false,dane:[{artnr:'black',bez:'Black',current:false},{artnr:'inox',bez:'Inox',current:false}]}

     ],
     klamkiorig:[],
     tryb:'all',
    inoxlista:['50','12','12A','12B','12C','20']


    },
    mounted: function () {
      this.klamkiorig =Array.from(this.dane2[3].dane);
      this.dane2.map((el)=>el.available=true);
      // this.dane2.find((el)=>el.nazwa=='inoxkolor').available=false;
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
  },
  test:function(asdf){
    return asdf;
  }
},
    methods:{
      setscroller:function(elem,all){
          this.dane2.find((el)=>el.current==true).current=false;
          elem.current=true;
         // console.log(this.dane2.find((el)=>el.nazwa==elem.nazwa && 1==1));
         // console.log(this.dane2.find((el)=>el.nazwa=='modele').current);
      },
      handleitemclick:function(elem,all){
        if(all.find((el)=>el.current==true)){
          all.find((el)=>el.current==true).current=false;
        }

        // this.dane2[3].dane=this.dane2[3].dane.filter((el)=>el.typ=='KK')

        elem.current=true;
        //klamki, gałki, pochwyty
        if(this.dane2[2].dane.find((el)=>el.current==true)){
          let origin = this.klamkiorig;
          console.log(origin);
          let sposobotw = this.dane2[2].dane.find((el)=>el.current==true).artnr;
          let model = this.dane2[1].dane.find((el)=>el.current==true).artnr;
          this.dane2[3].dane = origin.filter((el)=>el.typ==sposobotw);
          // console.log(this.dane2[3].dane[0].wzory.indexOf(model));
          this.dane2[3].dane = this.dane2[3].dane.filter((el)=>el.wzory.indexOf(model)>=0);

        }
        //inox
        if(this.dane2[1].dane.find((el)=>el.current==true)){

        }


        draw();

      },
      next:function(){
        if(this.dane2.find((el)=>el.current==true)){
          let active = this.dane2.find((el)=>el.current==true);
          let index = this.dane2.indexOf(active);
          this.dane2[index+1].current = true;
          this.dane2[index+1].show = true;

          this.dane2[index].current = false;

        }
      },
      gettryb:function(){
        if(this.tryb=='all'){
          for(let i=0;i<this.dane2.length;i++){
            this.dane2[i].show=true;
          }
        }
      },
      test:function(){
        return 'fdafda';
      }
}


});
