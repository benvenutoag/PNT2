const obj = Vue.createApp({
    data() {
        return {
          factura: {titulo: 'TituloDeLaFactura', codigo: 0, nroCliente: 0, items:[]},
          nombreDelItem: '',
          myStyle: {color: 'green'}   
        }
      },  
      methods: {
        agregarValor() {
            this.factura.items.push({nombre: this.nombreDelItem});
        },
        cambiarColorTitulo() {
            if(this.myStyle.color == 'green') {
                this.myStyle.color = 'blue';
            } else {
                this.myStyle.color = 'green';
            }
            
        },
        orderXDescripcion() {
            this.factura.items.sort((a,b) => a.nombre.localeCompare(b.nombre));
        },
        mostrarFactura() {
            console.log(this.factura)
            this.factura.items.forEach(item => {console.log(item)
                
            });
        }
     
        
      }
}).mount("#app");
   