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
      clicktest:false,
      apidebug:true,
      wzortyp:'',
      dane2:[
       {nazwa:'serie',bez:'Seria',folder:'Serie',current:true,show:true, dane:[]},
       {nazwa:'modele',bez:'Wzór',folder:'Wzory%20drzwi',dane:[]},
       {nazwa:'szyba',bez:'Przeszklenie',folder:'Przeszklenia',dane:[]},
       {nazwa:'sposobyotw',bez:'Sposób otw.',folder:'Grafiki%20pogl%C4%85dowe',dane:[]},
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
     apiRestoreObject:{},
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
      this.dane2.map((el)=>el.dane.map((el)=>Vue.set(el,'show',true ))); //dodajemy właściwość show dla pojedynczych elementów
      this.dane2.map((el)=>el.dane.map((el)=>Vue.set(el,'current',false ))); //dodajemy właściwość current dla pojedynczych elementów
      this.dane2.map((el)=>el.available=true); //wszystkie kategorie mają właściwośćavailable
      this.wzoryorig =Array.from(this.dane2.find((el)=>el.nazwa=='modele').dane);
      this.klamkiorig =Array.from(this.dane2.find((el)=>el.nazwa=='klamki').dane);
      this.szybyorig =Array.from(this.dane2.find((el)=>el.nazwa=='szyba').dane);

},
mounted:function(){
  this.dane2.filter((el,index)=>index>0).map((el)=>Vue.set(el,'current',false) ); //dodajemy właściwość current do wszystkich kategorii poza serią

  this.stronyorig =Array.from(this.dane2.find((el)=>el.nazwa=='inoxstrona').dane) ;
  this.gettryb();
},
watch:{
  // dane2:{
  //   deep:true,
  //   handler:function(){
  //       this.dane2.find((el)=>el.nazwa=='klamki').dane = this.klamkicomputed
  //   }
  // },
  tryb:{
    handler:function(){
      localStorage.tryb = this.tryb
    }
  }
},
computed:{
// currentSotw{
//   return this.dane.find((el)=>el.nazwa='sposobyotw')
// }
test1(){
  return this.info;
},
test2(){
  return this.test1;
},
currentCat(){
  return this.dane2.find((el)=>el.current==true)
},
currentsposobotwc(){
  return this.dane2.find((el)=>el.nazwa=='sposobyotw').dane.find((el)=>el.current==true);
},
scrollerFilter(){
  return this.dane2.find((el)=>el.current==true).dane.filter((el)=>el.show==true)
},
klamkicomputed(){
  return this.dane2.find((el)=>el.nazwa=='klamki').dane.filter((el)=>el.typ==this.currentsposobotwc.artnr)
}

},

    methods:{
      storeApi:function(){
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
             seria: this.getC('serie') ,
             model: this.getC('modele'),
             szyba:this.getC('szyba'),
             sposobotw:this.getC('sposobyotw'),
             klamka:this.getC('klamki'),
             kolor:this.getC('kolory'),
             inoxkolor:this.getC('inoxkolor'),
             inoxstrona:this.getC('inoxstrona')
           })
          })
           .then((data) => {console.log(data);}).catch(function(error) {console.log(error);});
      },
      getDoorApi:function(){
        fetch(`/api/getdoor/${document.getElementById('idd').value}`).then(res=>res.json()).then(res=>this.apiRestoreObject=res).then(res=>this.loadDoor());
      },
      getC:function(cat){
        console.log(cat);
        console.log(this.dane2.find((el)=>el.nazwa==cat).dane.find((el)=>el.current==true).artnr);
        return this.dane2.find((el)=>el.nazwa==cat).dane.find((el)=>el.current==true).artnr;

      },
      loadDoor:function(){
        try{
        this.dane2.find((el)=>el.nazwa=='serie').dane.find((el)=>el.artnr==this.apiRestoreObject.seria).current = true;
        this.dane2.find((el)=>el.nazwa=='modele').dane.find((el)=>el.artnr==this.apiRestoreObject.model).current = true;
        this.dane2.find((el)=>el.nazwa=='szyba').dane.find((el)=>el.artnr==this.apiRestoreObject.szyba).current = true;
        this.dane2.find((el)=>el.nazwa=='sposobyotw').dane.find((el)=>el.artnr==this.apiRestoreObject.sposobotw).current = true;
        this.dane2.find((el)=>el.nazwa=='klamki').dane.find((el)=>el.artnr==this.apiRestoreObject.klamka).current = true;
        this.dane2.find((el)=>el.nazwa=='kolory').dane.find((el)=>el.artnr==this.apiRestoreObject.kolor).current = true;
        this.dane2.find((el)=>el.nazwa=='inoxkolor').dane.find((el)=>el.artnr==this.apiRestoreObject.inoxkolor).current = true;
        this.dane2.find((el)=>el.nazwa=='inoxstrona').dane.find((el)=>el.artnr==this.apiRestoreObject.inoxstrona).current = true;
        this.getInox();
        this.getSzyby();
        this.getKlamki();
      }catch(e){
        console.log(e.message);
      }
      },
      logvue:function(){
        console.log(this.$data);
      },
      testapival:function(){
        return 'wartosc do api z funkcji'
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
        console.log(this.getC('modele'));
        // this.getPivotSzybyApi('00');
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
        // this.getKlamki();
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
             let aktywnymodel = this.dane2.find((el)=>el.nazwa=='modele').dane.find((el)=>el.current==true);
             if(aktywnymodel){
               let origin = this.stronyorig;
               let modelart = aktywnymodel.artnr;
               let inoxkolorgroup = this.dane2.find((el)=>el.nazwa=='inoxkolor');
               let inoxstronagroup = this.dane2.find((el)=>el.nazwa=='inoxstrona');
               if(this.inoxlista.indexOf(modelart)>0){
                 inoxkolorgroup.available=true;
                 inoxstronagroup.available=true;
                 if (modelart=='F3B'){
                   let origin = this.stronyorig;
                   inoxstronagroup.dane = origin.filter((el)=>el.artnr=='3');
                 }else{
                   inoxstronagroup.dane = origin;
                 }
               }else{
                 inoxkolorgroup.available=false;
                 inoxstronagroup.available=false;
               }
             }
           },
           getKlamki:function(){
            let currentsposobotw =  this.dane2[3].dane.find((el)=>el.current==true);
            let currentmodel = this.dane2[1].dane.find((el)=>el.current==true);
            let klamkigrupa = this.dane2.find((el)=>el.nazwa=='klamki');
            if(currentsposobotw && currentmodel){
              let origin = this.klamkiorig;
              let sposobotw = currentsposobotw.artnr;
              klamkigrupa.dane = origin.filter((el)=>el.typ==currentsposobotw.artnr); //klamki KK,KP itd.
              klamkigrupa.dane = klamkigrupa.dane.filter((el)=>el.wzory.indexOf(currentmodel.artnr)>=0); //klamki pasujące do wybranego wzoru
            }
          },
          getSzyby:function(){
            let currentmodel = this.dane2[1].dane.find((el)=>el.current==true);
            let szybygrupa = this.dane2.find((el)=>el.nazwa=='szyba');

            if(currentmodel){
              let origin = this.szybyorig;
              let model = currentmodel.artnr;
              szybygrupa.dane = origin;
              try{
              szybygrupa.dane = szybygrupa.dane.filter((el)=>przypisaniaszyb[model].indexOf(el.artnr)>=0);
              }catch(e){
                console.log('nie ma odpowiedniego przypisania szyb dla wzoru '+model);
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
            console.log(json);
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
