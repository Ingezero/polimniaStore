import React from 'react'
import ItemCount from '../itemListContainer/ItemCount'

export default function ItemDetail({ detalles }) {
    return (
        <div className='contenedorCards'>
            <div className="card tamCards" style={{width: "18rem"}}>
            <div className="card-body">
                <img src={detalles.img} alt={detalles.name} />
                <h2>{detalles.name}</h2>
                <span>{detalles.description}</span><br />
                <span>$ {detalles.price}</span>
                <ItemCount stock={detalles.stock} initial={1} />
            </div>
            </div>
        </div>
    )
}
