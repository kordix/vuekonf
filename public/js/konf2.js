let wzoryzapi=[{artnr:'F3C',bez:'F03C',current:false},{artnr:'F3G',bez:'01',current:false}];
let wzoryzapi2=[];

const request = async () => {
    const response = await fetch(`/api/wzory`);
    const json = await response.json();
    wzoryzapi2=json;
}

const app = new Vue({
    el: '#app',
    data: {
      dane2:[
       {nazwa:'serie',bez:'Seria', current:true,show:true, dane:[{artnr:'10',bez:'normal',current:false},{artnr:'20',bez:'premium',current:false},{artnr:'30',bez:'optimum',current:false}]},
       {nazwa:'modele',bez:'Wzór',show:false ,dane:[{artnr:'01',bez:'01',current:false},{artnr:'02',bez:'02',current:false},{artnr:'12',bez:'12',current:false},{artnr:'F3B',bez:'F03B',current:false}]},
       {nazwa:'sposobyotw',bez:'Sposób otw.',show:false,dane:[{artnr:'KK',bez:'Klamko-klamka',current:false},{artnr:'KG',bez:'Klamko-gałka',current:false},{artnr:'PP',bez:'Pochwyt-pochwyt',current:false}]},
       {nazwa:'klamki',bez:'Klamka',show:false,current:false,
       dane:[{artnr:'P060o90',bez:'Pochwyt 60 cm okrągły ALFA 90 st.',typ:'PP',wzory:['01','05'], current:false},
       {artnr:'magnusK',bez:'Magnus',typ:'KK',show:false,current:true,wzory:['01','05','F3B']},
       {artnr:'UrsusK',bez:'Ursus',typ:'KK',show:false,wzory:['01','05','12','F3C'],current:false},
       {artnr:'tahomaK',bez:'TahomaG',typ:'KG',show:false,wzory:['01','05','12'],current:false}
       ]},
       {nazwa:'kolory',bez:'kolory',show:false,dane:[{artnr:'01',bez:'Srebrno-szary',current:false},{artnr:'04',bez:'Orzech',current:true},{artnr:'06',bez:'Złoty Dąb',current:false}]},
       {nazwa:'klamkakolor',bez:'Kolor klamki',show:false,dane:[{artnr:'stz',bez:'Stare złoto',current:true},{artnr:'inox',bez:'inox',current:false},{artnr:'black',bez:'Black',current:false} ]},
       {nazwa:'inoxkolor',bez:'Kolor ramki',show:false, dane:[{artnr:'black',bez:'Black',current:false},{artnr:'inox',bez:'Inox',current:false}]},
       {nazwa:'inoxstrona',bez:'Strona ramki',show:false, dane:[{artnr:'1',bez:'wewnątrz',current:false},{artnr:'2',bez:'zewnątrz',current:false},{artnr:'3',bez:'Obustronnie',current:false}]}
     ],
     current:{dummy:true},
     klamkiorig:[],
     stronyorig:[],
     tryb:'all',
    inoxlista:['50','12','12A','12B','12C','20','F3B','F3C'],
    },
    created: async function () {
      this.tryb = localStorage.tryb;

      // this.getWzoryApi();

      // this.dane2.find((el)=>el.nazwa=='modele').dane.push(wzoryzapi2[0]);
      await this.getWzoryApi();
      console.log(2);

      this.dane2.map((el)=>el.dane.map((el)=>Vue.set(el,'show',true )));

      this.dane2.map((el)=>el.available=true);
      console.log(this.dane2);

      // console.log(this.$data.dane2);


},
mounted:function(){
  // console.log(this.$data);

  this.dane2.filter((el,index)=>index>0).map((el)=>Vue.set(el,'current',false) );

  this.klamkiorig =Array.from(this.dane2.find((el)=>el.nazwa=='klamki').dane);
  this.stronyorig =Array.from(this.dane2.find((el)=>el.nazwa=='inoxstrona').dane);
  this.gettryb();
  // this.getWzoryApi();

  // fetch(`/api/wzory/`)
  //   .then(resp => resp.json()).then(resp => {
  //     this.dane2[1].dane.push(resp[0]);
  //   });

},
watch:{
  tryb:{
    handler:function(){
      localStorage.tryb = this.tryb
    }
  }
},
    methods:{
      logvue:function(){
        console.log(this.$data);
      },
      store:function(){
        localStorage.test=this.dane2[1].dane.findIndex((el)=>el.current==true);
      },
      restore:function(){
        if(localStorage.test != 'undefined'){
          let num = localStorage.test;
          this.dane2[1].dane[num].current=true;
          this.getInox();
        }
      },
      test2:function(){
        this.items.push('fsdaffd');
        // Vue.set(app.items[0], 'current', false)
      },
      test:function(){
        this.inoxlista.push('asdf');
      },
      setscroller:function(elem,all){
          this.dane2.find((el)=>el.current==true).current=false;
          elem.current=true;
      },
      handleitemclick:function(elem,all){
        if(all.find((el)=>el.current==true)){
          all.find((el)=>el.current==true).current=false;
        }
        elem.current=true;
        //klamki, gałki, pochwyty
        if(this.dane2[2].dane.find((el)=>el.current==true)){
          let origin = this.klamkiorig;
          let sposobotw = this.dane2[2].dane.find((el)=>el.current==true).artnr;
          let model = this.dane2[1].dane.find((el)=>el.current==true).artnr;
          this.dane2.find((el)=>el.nazwa=='klamki').dane = origin.filter((el)=>el.typ==sposobotw);
          // console.log(this.dane2[3].dane[0].wzory.indexOf(model));
          this.dane2.find((el)=>el.nazwa=='klamki').dane = this.dane2.find((el)=>el.nazwa=='klamki').dane.filter((el)=>el.wzory.indexOf(model)>=0);
        }
        this.getInox();
        // draw();
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
      getInox:function(){
        if(this.dane2.find((el)=>el.nazwa=='modele').dane.find((el)=>el.current==true) ){
          let origin = this.stronyorig;
          let model = this.dane2.find((el)=>el.nazwa=='modele').dane.find((el)=>el.current==true).artnr;
          if(this.inoxlista.indexOf(model)>0){
            console.log('tutaj jest inox');
            this.dane2.find((el)=>el.nazwa=='inoxkolor').available=true;
            this.dane2.find((el)=>el.nazwa=='inoxstrona').available=true;

            if (model=='F3B'){
              let origin = this.stronyorig;
              this.dane2.find((el)=>el.nazwa=='inoxstrona').dane = origin.filter((el)=>el.artnr=='3');
            }else{
              this.dane2.find((el)=>el.nazwa=='inoxstrona').dane = origin;
            }

          }else{
            console.log('tutaj nie ma inoxa');
            this.dane2.find((el)=>el.nazwa=='inoxkolor').available=false;
            this.dane2.find((el)=>el.nazwa=='inoxstrona').available=false;
          }
        }
      },
      getWzoryApi: async function()  {

        const request = async () => {
            const response = await fetch(`/api/wzory`);
            const json = await response.json();
            // json.map((el)=>el.show=true);
            json.map((el)=>this.dane2.find((el)=>el.nazwa=='modele').dane.push(el));
            console.log(1);
        }

        await request();
      }
    }


});
