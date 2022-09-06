const obj = Vue.createApp({
    data() {
        return {
            mensaje: 'Hola Vue!',
            numero: 100,
            ok: true
        }

    },
    mounted(){
        console.log('se cargo')
    },
    methods: {
        incrementar(){
            this.numero++
        }
    }
}).mount('#app')