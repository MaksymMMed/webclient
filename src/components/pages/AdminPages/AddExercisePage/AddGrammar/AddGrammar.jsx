import React, { useState } from "react";
import BasicInput from "../../../../UI/Input/BasicInput"
import "./AddGrammar.css"
import BigButton from "../../../../UI/Button/BigButton/BigButton"
import { useLocation } from "react-router-dom";
import axios from "axios";
const AddGrammar = () =>{
    
    const [Grammar,SetGrammar] = useState({Name:"Choose right verb",Answer:"Have",Question:"You _ a dog?",LessonId:0,Variables: ["Have","How"]})

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    const location = useLocation()
    const Id = location.state.LessonId
    
    const AddGrammarExercise = (e) =>{
        let grammar = Grammar
        grammar = {...grammar,LessonId:Id}
        e.preventDefault()
        axios
        .post("/api/GrammarExercise/AddGrammarExercise",JSON.stringify(grammar),config)
        .then(response =>{
            if (response.status===200) {
                SetGrammar({Name:"",Answer:"",Question:"",LessonId:0,Variables: []})
            }
        })
    }
    
    const InsertVariables = (e)=>{
        let text = e.target.value
        text = text.split(",")
        SetGrammar({...Grammar,Variables:text})
    }

    return(
        <div className="AddGrammarExercisePage">
            <h3>Exercise name:</h3>
            <BasicInput value={Grammar.Name} onChange = {e=>SetGrammar({...Grammar,Name:e.target.value})} placeholder={"Input exercise name..."}/>

            <h3>Exercise question:</h3>
            <BasicInput value={Grammar.Question} onChange = {e=>SetGrammar({...Grammar,Question:e.target.value})} placeholder={"Input exercise question..."}/>

            <h3>Exercise answer:</h3>
            <BasicInput value={Grammar.Answer} onChange = {e=>SetGrammar({...Grammar,Answer:e.target.value})} placeholder={"Input exercise answer..."}/>

            <h3>Variables</h3>
            <BasicInput value={Grammar.Variables} onChange = {e=>InsertVariables(e)}  placeholder={"Input variables separated by coma..."}/>
            
            <BigButton style={{display:"block",marginRight:"auto",marginLeft:"auto",marginTop:"15px"}} onClick={AddGrammarExercise}>
                Додати вправу
            </BigButton>
        </div>
    )
}

export default AddGrammar