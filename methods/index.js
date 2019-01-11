var app = new Vue({
    el:"#app",
    data: {
        message: "Hello Vue.js!"
    },
    methods: {
        revertMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app2 = new Vue({
    el:"#app2",
    data:{
        message:"hello Vue!"
    }
})