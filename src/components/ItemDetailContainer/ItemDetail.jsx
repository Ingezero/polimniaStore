import React from 'react'

export default function ItemDetail({ detalles }) {
    return (
        <div>
            <img src={detalles.img} alt={detalles.name} />
            <h2>{detalles.name}</h2>
            <span>{detalles.description}</span><br />
            <span>$ {detalles.price}</span>
        </div>
    )
}
