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
      loading:true,
      info:'',
      apidebug:true,
      wzortyp:'',
      dane2:[
       {nazwa:'serie',bez:'Seria',folder:'Serie',current:true,show:true, dane:[]},
       {nazwa:'modele',bez:'Wzór',folder:'Wzory%20drzwi',dane:[]},
       {nazwa:'szyba',bez:'Przeszklenie',folder:'Przeszklenia',dane:[]},
       {nazwa:'sposobyotw',bez:'Sposób otw.',dane:[]},
       {nazwa:'klamki',bez:'Klamka',dane:[]},
       {nazwa:'kolory',bez:'kolory',dane:[{artnr:'01',bez:'Srebrno-szary'},{artnr:'04',bez:'Orzech'},{artnr:'06',bez:'Złoty Dąb'}]},
       {nazwa:'klamkakolor',bez:'Kolor klamki',dane:[{artnr:'stz',bez:'Stare złoto'},{artnr:'inox',bez:'inox'},{artnr:'black',bez:'Black'} ]},
       {nazwa:'inoxkolor',bez:'Kolor ramki', dane:[{artnr:'black',bez:'Black'},{artnr:'inox',bez:'Inox'}]},
       {nazwa:'inoxstrona',bez:'Strona ramki', dane:[{artnr:'1',bez:'wewnątrz'},{artnr:'2',bez:'zewnątrz'},{artnr:'3',bez:'Obustronnie'}]}
     ],
     current:{dummy:true},
     wzoryoryg:[],
     klamkiorig:[],
     stronyorig:[],
     tryb:'all',
    inoxlista:['50','12','12A','12B','12C','20','F3B','F3C'],
    },
    created: async function () {
      this.tryb = localStorage.tryb;
      await this.getSerieApi();
      await this.getWzoryApi();
      await this.getSzybyApi();
      await this.getOtwApi();
      await this.getKlamkiApi();

      this.dane2.find((el)=>el.nazwa=='klamki').dane.map((el)=>
      el.wzory = []
    );
      await this.getPivotAll();
      // await this.getPivotApi('magnusK');



  // await this.getPivotSzybyAll();
    // await this.getPivotAll();

      this.dane2.map((el)=>el.dane.map((el)=>Vue.set(el,'show',true )));
      this.dane2.map((el)=>el.dane.map((el)=>Vue.set(el,'current',false )));
      this.dane2.map((el)=>el.available=true);
      this.wzoryorig =Array.from(this.dane2.find((el)=>el.nazwa=='modele').dane);
      this.klamkiorig =Array.from(this.dane2.find((el)=>el.nazwa=='klamki').dane);
      this.szybyorig =Array.from(this.dane2.find((el)=>el.nazwa=='szyba').dane);


},
mounted:function(){
  this.dane2.filter((el,index)=>index>0).map((el)=>Vue.set(el,'current',false) );

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
        this.getPivotSzybyApi('00');
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
        this.getInox();
        this.getSzyby();
        this.getKlamki();
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
      filterWzory:function(){
        console.log('fsda');
        this.dane2[1].dane = this.wzoryorig;
        this.dane2[1].dane =this.dane2[1].dane.filter((el)=>el.typ==this.wzortyp);
        console.log(this.dane2[1].dane.filter((el)=>el.typ==this.wzortyp));
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
      getKlamki:function(){
        if(this.dane2[3].dane.find((el)=>el.current==true)){
          let origin = this.klamkiorig;
          let sposobotw = this.dane2[3].dane.find((el)=>el.current==true).artnr;
          let model = this.dane2[1].dane.find((el)=>el.current==true).artnr;
          this.dane2.find((el)=>el.nazwa=='klamki').dane = origin.filter((el)=>el.typ==sposobotw);
          this.dane2.find((el)=>el.nazwa=='klamki').dane = this.dane2.find((el)=>el.nazwa=='klamki').dane.filter((el)=>el.wzory.indexOf(model)>=0);
        }
      },
      getSzyby:function(){
        if(this.dane2[1].dane.find((el)=>el.current==true)){
          let origin = this.szybyorig;
          let model = this.dane2[1].dane.find((el)=>el.current==true).artnr;
          this.dane2.find((el)=>el.nazwa=='szyba').dane = origin;
          try{
          this.dane2.find((el)=>el.nazwa=='szyba').dane = this.dane2.find((el)=>el.nazwa=='szyba').dane.filter((el)=>przypisaniaszyb[model].indexOf(el.artnr)>=0);
        }catch(e){
            console.log('nie ma odpowiedniego przypisania szyb dla wzoru '+model);
            console.log(przypisaniaszyb['3']);
          }
        }
      },
      getWzoryApi: async function()  {
        if(this.apidebug){console.log('getwzoryapi')};
        const request = async () => {
            const response = await fetch(`/api/wzory`);
            const json = await response.json();
            // json.map((el)=>el.show=true);
            json.map((el)=>this.dane2.find((el)=>el.nazwa=='modele').dane.push(el));
        }
        await request();
      },
      getSerieApi: async function()  {
        if(this.apidebug){console.log('getSerieApi')};
        const request = async () => {
            const response = await fetch(`/api/seria`);
            const json = await response.json();
            // json.map((el)=>el.show=true);
            json.map((el)=>this.dane2.find((el)=>el.nazwa=='serie').dane.push(el));
        }
        await request();
      },
      getOtwApi: async function()  {
      if(this.apidebug){console.log('getOtwApi')};
        const request = async () => {
            const response = await fetch(`/api/sposobotw`);
            const json = await response.json();
            // json.map((el)=>el.show=true);
            json.map((el)=>this.dane2.find((el)=>el.nazwa=='sposobyotw').dane.push(el));
        }
        await request();
      },
      getKlamkiApi: async function()  {
        if(this.apidebug){console.log('getKlamkiApi')};

        const request = async () => {
            const response = await fetch(`/api/klamki`);
            const json = await response.json();
            // json.map((el)=>el.show=true);
            json.map((el)=>this.dane2.find((el)=>el.nazwa=='klamki').dane.push(el));
        }
        await request();
        this.loading = false;
      },
      getPivotApi:async function(klamka){
        const request = async () => {
            const response = await fetch(`/api/klamkipivot/${klamka}`);
            const json = await response.json();
            json.map((el)=>
            this.dane2.find((el)=>el.nazwa=='klamki').dane.find((el)=>el.artnr==klamka).wzory.push(el)
          )
        }
        await request();
      },
      getPivotAll:async function(){
        this.info='loading pivot';
        let tab = this.dane2.find((el)=>el.nazwa=='klamki').dane;

        for(let i=0;i<tab.length;i++){
          await this.getPivotApi(tab[i].artnr);
        }
        this.info = '';

      },
      getSzybyApi:async function(){
        const request = async () => {
            const response = await fetch(`/api/szyba`);
            const json = await response.json();
            // json.map((el)=>el.show=true);
            json.map((el)=>this.dane2.find((el)=>el.nazwa=='szyba').dane.push(el));
        }
        await request();
      }

    }


});
