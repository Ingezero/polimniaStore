import React, {useState, useEffect} from "react";
import { polimniaProducts } from "../mock/products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


/* import "./itemListContainer.css"
 */
export default function ItemDetailContainer(props) {
    
    const [products, setProducts] = useState([]);
    const prodId = useParams().prodId;
    
    useEffect(()=>{
        const bringProducts = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(polimniaProducts[prodId]);
            }, 2000);
        });
        
        bringProducts
        .then((res)=>{
            setProducts(res);
        })
    }, []);

    
    return (
        <div className="itemSetup">
            <li className="headerStyles">{props.greetings}</li>
            <ItemDetail detalles={products} />
        </div>
    )
}
