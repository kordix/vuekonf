const app = new Vue({
    el: '#app',
    data: {
        serie: [{artnr: '10',bez: 'normal',current:false}, {artnr: '20',bez: 'premium',current:false}],
        modele:[{artnr:'dupa',bez:'dupa',current:false}],
        sposobyotw:[{artnr:'KK',bez:'Klamko-klamka',current:false},{artnr:'KG',bez:'Klamko-gałka',current:false}],
        klamki:[{artnr:'magnusK',bez:'Magnus',typ:'KK',current:false},{artnr:'UrsusK',bez:'Ursus',typ:'KK',current:false},{artnr:'magnusK',bez:'TahomaG',typ:'KG',current:false} ],
        currentscroller:[],
        currentsposobotw:[],
        pipa:true
    },
    methods:{
      getCurrentScroller:function(elem){
        this.currentscroller=elem;
    },
    filterklamki:function(){
        let type = this.sposobyotw.find((el)=>el.current==true);
        let dupa = this.klamki.filter( (el)=> el.typ ==type.artnr );
        this.getCurrentScroller(dupa);
        console.log(type);
        console.log(dupa);

    }
    ,
    handleitemclick:function(elem,all){
        for(let i=0;i<all.length;i++){
            if(this.sposobyotw[i].current==true){this.sposobyotw[i].current=false}
        }
        // console.log([{artnr:'pipa',bez:'dupa'},{artnr:'chryja',bez:'chryja'}].find(this.isBigEnough));
        // console.log(dupa);
        elem.current = true;
    },
    isBigEnough:function(element) {
  return element.bez == 'dupa';
}
}
});
