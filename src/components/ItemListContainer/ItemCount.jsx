import {useState} from "react";
import React from "react";


export default function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);

    function sumProd(){
        if (count + 1 <= stock){
            setCount(count + 1)
        }
    }

    function lessProd(){
        if (count - 1 >= initial){
            setCount(count - 1)
        }
    }

    return (
        <div className="itemCounter">
            <span>
                <button onClick={lessProd}>-</button>
                <span className="countColor">{count}</span>
                <button onClick={sumProd}>+</button>
            </span>
            <button onClick={onAdd} className="butSubSize">Terminar Compra</button>
        </div>
    )
}
