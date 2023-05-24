import React, { useState } from "react";
import BasicInput from "../../../../UI/Input/BasicInput"
import "./AddVoice.css"
import BigButton from "../../../../UI/Button/BigButton/BigButton"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import BasicSelect from "../../../../UI/Select/BasicSelect/BasicSelect";
const AddVoice = () =>{
    
    const [Voice,SetVoice] = useState({Name:"Translate text into english",Answer:"How old are you",TextToSay:"Скільки тобі років",Type : 0,LessonId:0})


    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    const location = useLocation()
    const Id = location.state
    const Navigate = useNavigate()
    
    const AddVoiceExercise = (e) =>{
        var LessonData = JSON.parse(localStorage.getItem("AdminLessonData"))
        let _Voice = Voice
        _Voice = {...Voice,LessonId:Id}
        e.preventDefault()
        axios
        .post("/api/VoiceExercise/AddVoiceExercise",JSON.stringify(_Voice),config)
        .then(response =>{
            if (response.status===200) {
                LessonData.VoiceExercises.push(_Voice)
                localStorage.setItem("AdminLessonData",JSON.stringify(LessonData))
                SetVoice({Name:"",Answer:"",TextToSay:"",LessonId:0})
            }
        })
        .catch(error =>{
            console.log(error)
        });
    }

    return(
        <div>
        <h1><p style={{marginLeft:"50px"}} onClick={()=>Navigate(-1)}>Повернутися до вправ</p></h1>

        <div className="AddVoiceExercisePage">
            <h3>Exercise name:</h3>
            <BasicInput value={Voice.Name} onChange = {e=>SetVoice({...Voice,Name:e.target.value})} placeholder={"Input exercise name..."}/>

            <h3>Text to say :</h3>
            <BasicInput value={Voice.TextToSay} onChange = {e=>SetVoice({...Voice,TextToSay:e.target.value})} placeholder={"Input text to say..."}/>

            <h3>Exercise answer:</h3>
            <BasicInput value={Voice.Answer} onChange = {e=>SetVoice({...Voice,Answer:e.target.value})} placeholder={"Input exercise answer..."}/>
            
            <h3>Exercise type:</h3>

            <BasicSelect options={[
            {value : 0, name: "Listen"},
            {value : 1, name: "Repeat"}]} 
            onChange={e=>SetVoice({...Voice,Type : e.target.value})}/>


            <BigButton style={{display:"block",marginRight:"auto",marginLeft:"auto",marginTop:"15px"}} onClick={AddVoiceExercise}>
                Додати вправу
            </BigButton>
        </div>
        </div>

    )
}

export default AddVoice