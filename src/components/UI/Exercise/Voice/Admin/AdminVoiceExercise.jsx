import React from "react";
import Classes from "./AdminVoiceExercise.module.css"
import { useState } from "react";

const AdminVoiceExercise = ({Exercise}) =>{

    const [_Exercise,setExercise] = useState(Exercise)

    return(
        <div className={Classes.Exercise} style={{padding:"1px 0 5px 5px"}}>
            <p>Name : {_Exercise.Name}</p>
            <p>Question : {_Exercise.TextToSay}</p>
            <p>Answer : {_Exercise.Answer}</p>
        </div>
    )
}

export default AdminVoiceExercise