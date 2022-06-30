import React, { useState, useEffect } from "react";
import { polimniaProducts } from "../mock/products";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {

    const [products, setProducts] = useState([]);
    const catId = useParams().catId;

    useEffect(() => {
        const bringProducts = new Promise((res, rej) => {
            setTimeout(() => {
                if (catId === undefined)
                    res(polimniaProducts);
                else {
                const itemsFound = polimniaProducts.filter(prods => {
                    return prods.category === catId;
                    })
                    res(itemsFound)
                }
            }, 1000)
        });

        bringProducts
            .then((res) => {
                setProducts(res);
            })
    }, [catId]);

    return (
        <div className="itemSetup">
            <span className="headerStyles">{props.greetings}</span>
            <ItemList productos={products} />
        </div>
    )
}
