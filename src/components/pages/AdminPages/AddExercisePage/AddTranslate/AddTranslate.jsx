import React, { useState } from "react";
import BasicInput from "../../../../UI/Input/BasicInput"
import "./AddTranslate.css"
import BigButton from "../../../../UI/Button/BigButton/BigButton"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const AddTranslate = () =>{
    
    const [Translate,SetTranslate] = useState({Name:"Translate text",Answer:"Як тебе звати",Question:"What's your name",LessonId:0})


    const config = {
        headers: {
          'Content-Type': 'application/json'
          ,'Authorization':`Bearer ${localStorage.getItem("Token")}`
        }
      };
    const location = useLocation()
    const Id = location.state
    const Navigate = useNavigate()
    
    const AddTranslateExercise = (e) =>{
        var LessonData = JSON.parse(localStorage.getItem("AdminLessonData"))
        let translate = Translate
        translate = {...translate,LessonId:Id}
        e.preventDefault()
        axios
        .post("/api/TranslateExercise/AddTranslateExercise",JSON.stringify(translate),config)
        .then(response =>{
            if (response.status===200) {
                LessonData.TranslateExercises.push(translate)
                localStorage.setItem("AdminLessonData",JSON.stringify(LessonData))
                SetTranslate({Name:"",Answer:"",Question:"",LessonId:0})
            }
        })
        .catch(error =>{
            console.log(error)
        });
    }

    return(
        <div>
        <h1><p style={{marginLeft:"50px"}} onClick={()=>Navigate(-1)}>Повернутися до вправ</p></h1>

        <div className="AddTranslateExercisePage">
            <h3>Exercise name:</h3>
            <BasicInput value={Translate.Name} onChange = {e=>SetTranslate({...Translate,Name:e.target.value})} placeholder={"Input exercise name..."}/>

            <h3>Exercise question:</h3>
            <BasicInput value={Translate.Question} onChange = {e=>SetTranslate({...Translate,Question:e.target.value})} placeholder={"Input exercise question..."}/>

            <h3>Exercise answer:</h3>
            <BasicInput value={Translate.Answer} onChange = {e=>SetTranslate({...Translate,Answer:e.target.value})} placeholder={"Input exercise answer..."}/>
            
            <BigButton style={{display:"block",marginRight:"auto",marginLeft:"auto",marginTop:"15px"}} onClick={AddTranslateExercise}>
                Додати вправу
            </BigButton>
        </div>
        </div>

    )
}

export default AddTranslate