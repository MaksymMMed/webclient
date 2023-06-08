import React, { useState } from "react";
import BasicInput from "../../../../UI/Input/BasicInput"
import "./AddGrammar.css"
import BigButton from "../../../../UI/Button/BigButton/BigButton"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const AddGrammar = () =>{
    
    const [Grammar,SetGrammar] = useState({Name:"Choose right verb",Answer:"Have",Question:"You _ a dog?",LessonId:0,Variables: ["Have","How"]})


    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${localStorage.getItem("Token")}`
        }
      };
    const location = useLocation()
    const Id = location.state
    const Navigate = useNavigate()
    
    const AddGrammarExercise = (e) =>{
        var LessonData = JSON.parse(localStorage.getItem("AdminLessonData"))
        let grammar = Grammar
        grammar = {...grammar,LessonId:Id}
        e.preventDefault()
        axios
        .post("/api/GrammarExercise/AddGrammarExercise",JSON.stringify(grammar),config)
        .then(response =>{
            if (response.status===200) {
                LessonData.GrammarExercises.push(grammar)
                localStorage.setItem("AdminLessonData",JSON.stringify(LessonData))
                SetGrammar({Name:"",Answer:"",Question:"",LessonId:0,Variables: []})
            }
        })
        .catch(error =>{
            console.log(error)
        });
    }
    
    const InsertVariables = (e)=>{
        let text = e.target.value
        text = text.split(",")
        SetGrammar({...Grammar,Variables:text})
    }

    return(
        <div>
        <h1><p style={{marginLeft:"50px"}} onClick={()=>Navigate(-1)}>Повернутися до вправ</p></h1>

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
        </div>

    )
}

export default AddGrammar