import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import { polimniaProducts } from "../mock/products";
import ItemList from "../ItemList/ItemList";


/* import "./itemListContainer.css"
 */
export default function ItemListContainer(props) {
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const bringProducts = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(polimniaProducts);
            }, 2000)
        });
        
        bringProducts
        .then((res)=>{
            setProducts(res);
        })
    }, []);

    /* console.log(products); */

    return (
        <div className="itemSetup">
            <li>{props.greetings}</li>
            <ItemCount stock={5} initial={1} />
            <ItemList productos={products} />
        </div>
    )
}
