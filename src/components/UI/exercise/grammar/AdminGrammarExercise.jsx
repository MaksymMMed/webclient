import React, { useState } from "react";
import Classes from "./GrammarExercise.module.css"


const AdminGrammarExercise = ({Exercise}) =>{
    
    [Exercise,SetExercise] = useState(Exercise)

    return(
        <div className={Classes.Exercise}>
            
        </div>
    )

}

export default AdminGrammarExercise