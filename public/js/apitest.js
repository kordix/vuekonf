let app2 = new Vue({
  el:'#app',
  data:{
    wzory:[{dane:[],id:'fads'},{id:'fdsa',dane:[] } ],
    mydata:{}
  },
  mounted:function(){
    this.getwzory();
    this.wzory[0].dane.map((el)=>el.current=true );
  },
  methods:{
    getwzory:function(){
      fetch(`https://swapi.co/api/people/1`).then(res => res.json()).then(res => this.mydata = res);


    },
      test:function(){
        setTimeout(function(){this.mydata.myprop = 'testfda';console.log('fafd'); },2000);

      }

      // request();
    }
  })
