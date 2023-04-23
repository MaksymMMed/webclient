import React from "react";
import Classes from "./SmallButton.module.css"

const SmallButton = (props) =>{


    return(
        <button className={Classes.MyButton} {...props}>
            {props.children}
        </button>
    )
}

export default SmallButton