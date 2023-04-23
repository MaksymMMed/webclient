import React from "react";
import Classes from "./BigButton.module.css"

const BigButton = (props) =>{


    return(
        <button className={Classes.MyButton} {...props}>
            {props.children}
        </button>
    )
}

export default BigButton