import ItemCount from "./ItemCount/ItemCount";

/* import "./itemListContainer.css"
 */
export default function ItemListContainer(props) {
    console.log(props);
    return (
        <div className="itemSetup">
            <li>{props.greetings}</li>
            <ItemCount stock={5} initial={1}/>
        </div>
    )
}
