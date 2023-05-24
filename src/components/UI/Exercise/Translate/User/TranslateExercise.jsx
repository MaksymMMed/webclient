import React, { useState,useEffect } from "react";
import Classes from "./TranslateExercise.module.css"
import BigButton from "../../../Button/BigButton/BigButton";
import axios from "axios";
import BasicInput from "../../../Input/BasicInput";
const TranslateExercise = ({Exercise}) =>{

    const [lessonData,setLessonData]  = useState(JSON.parse(localStorage.getItem("LessonData")))
    const [done,setDone] = useState(Exercise.Status)
    const [statusLabel,setStatusLabel] = useState(true)
    const [translatedText,setTranslatedText] = useState("")
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      const doubleFunc = (e) =>{
        setStatusLabel(true)
        setTranslatedText(e.target.value)
      }

    const check = async (e) => {
        if (done) {
          return
        }
        e.preventDefault()
        var exerciseData = {exerciseId:Exercise.IdExercise, userId:Exercise.IdUser,translatedText: translatedText}  
        console.log(exerciseData)      
        axios
        .post("/api/TranslateExercise/CheckTranslate",JSON.stringify(exerciseData), config)
        .then(response => {
            if (response.status === 200)
            {
              setDone(response.data)
              setStatusLabel(false)
              if (response.data === true) {
                let _Exercise = Exercise
                _Exercise.Status = true
                var _Translate = lessonData.TranslateExercises.filter(p=>p.IdExercise !== exerciseData.exerciseId)
                _Translate.push(_Exercise)
                lessonData.TranslateExercises=_Translate
                localStorage.setItem("LessonData", JSON.stringify(lessonData));
            }        
          }
          })
          .catch(error => {
            console.log(error);
          });
    }

    return(
        <div className={Classes.Exercise}>
            <div className={Classes.Info}>
              <p>Exercise name : {Exercise.TranslateExercise.Name}</p>
              <p>Text to translate : {Exercise.TranslateExercise.Question}</p>
            </div>
            {statusLabel === true 
              ?
              <div>
                {done
                ?
                <BasicInput value = {Exercise.TranslateExercise.Answer} disabled style={{marginTop:"8px", width:"90%",marginLeft:"13px",backgroundColor:"lime"}}/>
                :
                <BasicInput placeholder ={"Input translated text..."} style={{marginTop:"8px", width:"90%",marginLeft:"13px"}} onChange={e=>doubleFunc(e)}/>
                }
                </div>
              : 
              <div>
                {done
                ?
                <BasicInput value = {Exercise.TranslateExercise.Answer} disabled style={{marginTop:"8px", width:"90%",marginLeft:"13px",backgroundColor:"lime"}}/>
                :
                <BasicInput placeholder ={"Input translated text..."} style={{marginTop:"8px", width:"90%",marginLeft:"13px",backgroundColor:"red"}} onChange={e=>doubleFunc(e)}/>
                }
                </div>
              }
            <BigButton style={{marginTop:"15px",marginLeft:"10px",marginBottom:"10px"}} onClick={check}>Check answer</BigButton>
        </div>
    )   
}

export default TranslateExercise