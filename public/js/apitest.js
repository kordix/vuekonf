let app2 = new Vue({
    el: '#app',
    data: {
        mydata: {
            test: 'fsda'
        }
    },
    beforeCreate: function() {
        fetch(`https://swapi.co/api/people/1`).then(res => res.json()).then(res => this.mydata = res);
    },
    mounted: function() {
        this.test();
    },
    methods: {
        test: function() {
            Vue.set(this.mydata,'myprop','test');
        }
        // request();
    }
})
