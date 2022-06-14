import {useState} from "react";


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
                <span>{count}</span>
                <button onClick={sumProd}>+</button>
            </span>
            <button className="butSubSize">Submit</button>
        </div>
    )
}
