import React from 'react'
import { Link } from 'react-router-dom'


export default function Item({ items }) {
    return (
        <div className='contenedorCards'>
            <div className="card tamCards" style={{width: "18rem"}}>
                <img src={items.img} alt={items.name} />
                <div className="card-body">
                    <h2 className='textFormato'>{items.name}</h2>
                    <span >{items.description}</span>
                    <br />
                    <br />
                    <Link to={`/detalle/${items.id}`}>
                        <button className='btn btn-primary'>Ver Detalle</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
