let wzoryzapi=[{artnr:'F3C',bez:'F03C',current:false},{artnr:'F3G',bez:'01',current:false}];
let wzoryzapi2=[];

const request = async () => {
    const response = await fetch(`/api/wzory`);
    const json = await response.json();
    wzoryzapi2=json;
}
//{artnr:'10',bez:'normal',current:false},{artnr:'20',bez:'premium',current:false},{artnr:'30',bez:'optimum',current:false}

const app = new Vue({
    el: '#app',
    data: {
      dane2:[
       {nazwa:'serie',bez:'Seria', current:true,show:true, dane:[]},
       {nazwa:'modele',bez:'Wzór',dane:[]},
       {nazwa:'sposobyotw',bez:'Sposób otw.',dane:[]},
       {nazwa:'klamki',bez:'Klamka',current:false,
       dane:[{artnr:'P060o90',bez:'Pochwyt 60 cm okrągły ALFA 90 st.',typ:'PP',wzory:[], current:false},
       {artnr:'magnusK',bez:'Magnus',typ:'KK',current:false,wzory:[]},
       {artnr:'UrsusK',bez:'Ursus',typ:'KK',wzory:[],current:false},
       {artnr:'tahomaK',bez:'TahomaG',typ:'KG',wzory:[],current:false}
       ]},
       {nazwa:'kolory',bez:'kolory',dane:[{artnr:'01',bez:'Srebrno-szary',current:false},{artnr:'04',bez:'Orzech',current:true},{artnr:'06',bez:'Złoty Dąb',current:false}]},
       {nazwa:'klamkakolor',bez:'Kolor klamki',dane:[{artnr:'stz',bez:'Stare złoto',current:true},{artnr:'inox',bez:'inox',current:false},{artnr:'black',bez:'Black',current:false} ]},
       {nazwa:'inoxkolor',bez:'Kolor ramki', dane:[{artnr:'black',bez:'Black',current:false},{artnr:'inox',bez:'Inox',current:false}]},
       {nazwa:'inoxstrona',bez:'Strona ramki', dane:[{artnr:'1',bez:'wewnątrz',current:false},{artnr:'2',bez:'zewnątrz',current:false},{artnr:'3',bez:'Obustronnie',current:false}]}
     ],
     current:{dummy:true},
     klamkiorig:[],
     stronyorig:[],
     tryb:'all',
    inoxlista:['50','12','12A','12B','12C','20','F3B','F3C'],
    },
    created: async function () {
      this.tryb = localStorage.tryb;
      await this.getWzoryApi();
      await this.getSerieApi();
      await this.getOtwApi();
      await this.getKlamkiApi();
      // await this.getPivotApi('magnusK');



      this.dane2.find((el)=>el.nazwa=='klamki').dane.map((el)=>
      this.getPivotApi(el.artnr)
    );

    //   this.dane2.find((el)=>el.nazwa=='klamki').dane.map((el)=>
    //     await this.getPivotApi(el.artnr);
    // );

      this.dane2.map((el)=>el.dane.map((el)=>Vue.set(el,'show',true )));
      this.dane2.map((el)=>el.dane.map((el)=>Vue.set(el,'current',false )));
      this.dane2.map((el)=>el.available=true);
},
mounted:function(){

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
            this.dane2.find((el)=>el.nazwa=='inoxkolor').available=true;
            this.dane2.find((el)=>el.nazwa=='inoxstrona').available=true;

            if (model=='F3B'){
              let origin = this.stronyorig;
              this.dane2.find((el)=>el.nazwa=='inoxstrona').dane = origin.filter((el)=>el.artnr=='3');
            }else{
              this.dane2.find((el)=>el.nazwa=='inoxstrona').dane = origin;
            }

          }else{
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
        }
        await request();
      },
      getSerieApi: async function()  {
        const request = async () => {
            const response = await fetch(`/api/seria`);
            const json = await response.json();
            // json.map((el)=>el.show=true);
            json.map((el)=>this.dane2.find((el)=>el.nazwa=='serie').dane.push(el));
        }
        await request();
      },
      getOtwApi: async function()  {
        const request = async () => {
            const response = await fetch(`/api/sposobotw`);
            const json = await response.json();
            // json.map((el)=>el.show=true);
            json.map((el)=>this.dane2.find((el)=>el.nazwa=='sposobyotw').dane.push(el));
        }
        await request();
      },
      getKlamkiApi: async function()  {
        const request = async () => {
            const response = await fetch(`/api/klamki`);
            const json = await response.json();
            // json.map((el)=>el.show=true);
            json.map((el)=>this.dane2.find((el)=>el.nazwa=='klamki').dane.push(el));
        }
        await request();
      },
      getPivotApi:async function(klamka){
        const request = async () => {
            const response = await fetch(`/api/klamkipivot/${klamka}`);
            const json = await response.json();
            json.map((el)=>
            this.dane2.find((el)=>el.nazwa=='klamki').dane.find((el)=>el.artnr==klamka).wzory.push(el)
          )
            ;
            ;
        }
            // json.map((el)=>el.show=true);


        await request();
      }
    }


});
