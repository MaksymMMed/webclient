import React, { useState } from "react";
import Classes from "./TranslateExercise.module.css"
import BigButton from "../../../Button/BigButton/BigButton";
import axios from "axios";
import BasicInput from "../../../Input/BasicInput";
const TranslateExercise = ({Exercise}) =>{

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
              console.log("success")
              setDone(response.data)
              setStatusLabel(false)
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