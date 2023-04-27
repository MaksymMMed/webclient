import React, { useState } from "react";
import Classes from "./AdminGrammarExercise.module.css"


const AdminGrammarExercise = ({Exercise}) =>{
    
    const [_Exercise,setExercise] = useState(Exercise)

    return(
        <div style={{padding:"1px 0 5px 5px"}} className={Classes.Exercise}>
            <p>Name : {_Exercise.Name}</p>
            <p>Question : {_Exercise.Question}</p>
            <p>Answer : {_Exercise.Answer}</p>
            <p>Variables : {_Exercise.Variables.map(x=>x.concat(" "))}</p>
        </div>
    )

}

export default AdminGrammarExercise