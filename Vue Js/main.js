const option = {
    data() {
        return {
            appname: "hellow",
            dddd: "hi vue",
            counter: 1,
            showname:true
        }
    },
    methods: {
        increment() {
            this.counter++;
        }
    },
}

const app = Vue.createApp(option)
const vm = app.mount('#app')