import React, { useState } from "react";
import BasicInput from "../../../../UI/Input/BasicInput";
import BigButton from "../../../../UI/Button/BigButton/BigButton";
import { useLocation, useNavigate } from "react-router-dom";
import "./UpdateGrammar.css"

const UpdateGrammar = () => {
    
    const location = useLocation()
    const [Grammar,SetGrammar] = useState(location.state)
    const Navigate = useNavigate()

    const UpdateGrammarExercise = (e) =>{
        e.preventDefault()
        console.log(Grammar)
    }  

    const InsertVariables = (e)=>{
        let text = e.target.value
        text = text.split(",")
        SetGrammar({...Grammar,Variables:text})
    }

        return(
        <div>
        <h1><p style={{marginLeft:"50px"}} onClick={()=>Navigate(-1)}>Повернутися до вправ</p></h1>

        <div className="UpdateGrammarExercisePage">
            <h3>Exercise name:</h3>
            <BasicInput value={Grammar.Name} onChange = {e=>SetGrammar({...Grammar,Name:e.target.value})} placeholder={"Input exercise name..."}/>

            <h3>Exercise question:</h3>
            <BasicInput value={Grammar.Question} onChange = {e=>SetGrammar({...Grammar,Question:e.target.value})} placeholder={"Input exercise question..."}/>

            <h3>Exercise answer:</h3>
            <BasicInput value={Grammar.Answer} onChange = {e=>SetGrammar({...Grammar,Answer:e.target.value})} placeholder={"Input exercise answer..."}/>

            <h3>Variables</h3>
            <BasicInput value={Grammar.Variables} onChange = {e=>InsertVariables(e)}  placeholder={"Input variables separated by coma..."}/>
            
            <BigButton style={{display:"block",marginRight:"auto",marginLeft:"auto",marginTop:"15px"}} onClick={UpdateGrammarExercise}>
                Оновити вправу
            </BigButton>
        </div>
        </div>
    )

}

export default UpdateGrammar