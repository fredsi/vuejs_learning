var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

app.message = 'I have changed the data!'

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleTimeString()
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen: true
    }
})
app3.seen = false


var app4 = new Vue({
    el:'#app-4',
    data:{
        todos: [
            {text: "Learn Js"},
            {text: "Learn Vue"},
            {text: "Whole project"}
        ]
    }
})
app4.todos.push({ text: '新项目' })