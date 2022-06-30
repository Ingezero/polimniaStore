import React, { useState, useEffect } from "react";
import { polimniaProducts } from "../mock/products";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export default function ItemDetailContainer(props) {

    const [products, setProducts] = useState([]);
    const prodId = useParams().prodId;
    


    useEffect(() => {
        const bringProducts = new Promise((res, rej) => {
            setTimeout(() => {
                let idNum = parseInt(prodId);
                const itemFound = polimniaProducts.find(prods => {
                    return prods.id == idNum;
                })
                res(itemFound)
            }, 1000);
        });

        bringProducts
            .then((res) => {
                setProducts(res);
            })
    }, [prodId]);
 

    return (
        <div className="itemSetup">
            <li className="headerStyles">{props.greetings}</li>
            <ItemDetail detalles={products} />
        </div>
    )
}
