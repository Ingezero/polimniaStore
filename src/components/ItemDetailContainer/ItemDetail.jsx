import React from 'react'
import ItemCount from '../itemListContainer/ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ItemDetail({ detalles }) {
    const [isAddedToCart, setAddedToCart] = useState(false);

    function handdleOnAdd(){
        console.log("on add handler")
        setAddedToCart(true)
    }    
    
    return (
        <div className='contenedorCards'>
            <div className="card tamCards" style={{width: "18rem"}}>
            <div className="card-body">
                <img src={detalles.img} alt={detalles.name} />
                <h2>{detalles.name}</h2>
                <span>{detalles.description}</span><br />
                <span>$ {detalles.price}</span>
                
                {isAddedToCart
                    ? <Link to="/cart">Ver Carrito</Link>
                    : <ItemCount onAdd={handdleOnAdd} stock={detalles.stock} initial={1} />
                }
                
            </div>
            </div>
        </div>
    )
}
