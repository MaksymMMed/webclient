import React from "react";
import Classes from "./AdminTranslateExercise.module.css"
import { useState } from "react";

const AdminTranslateExercise = ({Exercise}) =>{

    const [_Exercise,setExercise] = useState(Exercise)

    return(
        <div style={{padding:"1px 0 5px 5px"}} className={Classes.Exercise}>
            <p>Name : {_Exercise.Name}</p>
            <p>Question : {_Exercise.Question}</p>
            <p>Answer : {_Exercise.Answer}</p>
        </div>
    )
}

export default AdminTranslateExercise