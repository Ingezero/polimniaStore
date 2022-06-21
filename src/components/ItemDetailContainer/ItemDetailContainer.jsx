import React, {useState, useEffect} from "react";
import { polimniaProducts } from "../mock/products";
import ItemDetail from "./ItemDetail";


/* import "./itemListContainer.css"
 */
export default function ItemDetailContainer(props) {
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const bringProducts = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(polimniaProducts[0]);
            }, 2000)
        });
        
        bringProducts
        .then((res)=>{
            setProducts(res);
        })
    }, []);

    return (
        <div className="itemSetup">
            <li>{props.greetings}</li>
            <ItemDetail detalles={products} />
        </div>
    )
}
