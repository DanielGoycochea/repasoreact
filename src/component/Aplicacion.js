import React,{Component} from 'react';
import Productos from './Productos'
import Footer from './Footer'
import Header from  './Header'



class Aplicacion extends Component{
 render(){
    const productos=[
        {nombre:'Libro', precio:200},
        {nombre:'CD', precio:100},
        {nombre:'Comida', precio:50},
        {nombre:'Mouse', precio:300}
    ]

     return(
    <div>
        <Header
            titulo='Nuestra Tienda virtual'
        />
        <Productos
            productos= {productos}
        />
        <Footer/>
   
     </div>
     )
 }

}

export default Aplicacion