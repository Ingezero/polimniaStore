import React from 'react'

export default function Item({items}) {
    return (
        <div>
            <div>
                <div>
                    <img src={items.img} alt={items.name} />
                </div>
                <div>
                    <h2>{items.name}</h2>
                    <span>{items.description}</span>
                    <br/><br/><br/>
                </div>
            </div>
        </div>
    )
}
