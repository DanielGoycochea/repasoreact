import React, { Component } from 'react';

class Producto extends Component {
    render() {
        const {nombre, precio} = this.props.producto
        return (
            <div>
               <div>
                   <h2>{nombre}</h2>
                   <p>precio ${precio}</p>
               
               </div>
                
            </div>
        );
    }
}

export default Producto;