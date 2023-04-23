import React from "react";
import Classes from './MyInput.module.css'

const MyInput = (props) =>
{
    return(
            <input className= {Classes.MyInput} {...props} type="text"></input>
    )
}

export default MyInput