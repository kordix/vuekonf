window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data: {
        serie: [{artnr: '10',bez: 'normal'}, {artnr: '20',bez: 'premium'}],
        modele:[{artnr:'dupa',bez:'dupa'}],
        sposobyotw:[{artnr:'KK',bez:'Klamko-klamka'},{artnr:'KK',bez:'Klamko-gałka'}],
        klamki:[{artnr:'magnusK',bez:'Magnus',typ:'KK'},{artnr:'UrsusK',bez:'Magnus',typ:'KK'},{artnr:'magnusK',bez:'TahomaG',typ:'KG'} ],
        currentscroller:[],
        currentsposobotw:[],
    },
    methods:{
      getCurrentScroller:function(elem){
        this.currentscroller=elem;
    },
    handleitemclick:function(elem,all){
        for(let i=0;i<all.length;i++){
            if(this.sposobyotw[i].current==true){this.sposobyotw[i].current=false}
            console.log(this.sposobyotw[i].current);
        }
        // console.log([{artnr:'pipa',bez:'dupa'},{artnr:'chryja',bez:'chryja'}].find(this.isBigEnough));
        // console.log(dupa);
        elem.current = 'true';
    },
    isBigEnough:function(element) {
  return element.bez == 'dupa';
}
}
});
