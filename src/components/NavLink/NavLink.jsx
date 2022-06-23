import React from "react";

export default function NavLink(props) {
    console.log(props);
    return (
        <li className="linkStyling">{props.linkTitle}</li>
    )
}
