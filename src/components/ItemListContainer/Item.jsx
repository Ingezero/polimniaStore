import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ items }) {
    return (
        <div>
            <div>
                <div>
                    <img src={items.img} alt={items.name} />
                </div>
                <div>
                    <h2>{items.name}</h2>
                    <span>{items.description}</span>
                    <br />
                    <Link to={`/detalle/${items.id-1}`}>
                        <button>Ver Detalle</button>
                    </Link>
                    <br /><br /><br />
                </div>
            </div>
        </div>
    )
}
