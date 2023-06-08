import React, { useState,useEffect } from "react";
import Classes from "./VoiceExercise.module.css"
import SmallButton from "../../../Button/SmallButton/SmallButton";
import BigButton from "../../../Button/BigButton/BigButton";
import axios from "axios";
import BasicInput from "../../../Input/BasicInput";

const VoiceExercise = ({Exercise}) =>{

    const [lessonData,setLessonData]  = useState(JSON.parse(localStorage.getItem("LessonData")))
    const [done,setDone] = useState(Exercise.Status)
    const [statusLabel,setStatusLabel] = useState(true)
    const [hint,setHint] = useState(false)
    const [recognizedText,setRecognizedText] = useState("")

    const config = {
        headers: {
          'Content-Type': 'application/json'
          ,'Authorization':`Bearer ${localStorage.getItem("Token")}`
        }
      };

    const check = async (e) => {
        if (done) {
          return
        }
        e.preventDefault()
        var exerciseData = { userId:Exercise.IdUser,exerciseId:Exercise.IdExercise,recognizedText: recognizedText}  
        console.log(exerciseData)      
        axios
        .post("/api/VoiceExercise/CheckRecognizedText",JSON.stringify(exerciseData), config)
        .then(response => {
            if (response.status === 200)
            {
              setDone(response.data)
              setStatusLabel(false)
              if (response.data === true) {
                let _Exercise = Exercise
                _Exercise.Status = true
                var _Voice = lessonData.VoiceExercises.filter(p=>p.IdExercise !== exerciseData.exerciseId)
                _Voice.push(_Exercise)
                lessonData.VoiceExercises=_Voice
                localStorage.setItem("LessonData", JSON.stringify(lessonData));
            }}
          })
          .catch(error => {
            console.log(error);
          });
    }

    const doubleFunc = (e) =>{
      setStatusLabel(true)
      setRecognizedText(e.target.value)
    }

    const recognition = new window.webkitSpeechRecognition();
    
    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const text = event.results[last][0].transcript;
      console.log(text)
      setRecognizedText(text)
    };
    
    const startRecognition = () => {
      recognition.start();
    };

    const sayText =  (e) => {
        e.preventDefault()
        const utterance = new SpeechSynthesisUtterance(Exercise.VoiceExercise.TextToSay);
        utterance.lang = "en-US"
        speechSynthesis.speak(utterance);
    }

    return(
        <div className={Classes.Exercise}>
            <div className={Classes.Info}>
              <p>Exercise Name: {Exercise.VoiceExercise.Name}</p>
              {Exercise.VoiceExercise.Type === 1 ?  <p>Text to say: {Exercise.VoiceExercise.TextToSay}</p> : null}
              
            </div>
            <div className={Classes.ButtonsPlace}>

            {Exercise.VoiceExercise.Type === 0 ?
            <SmallButton onClick={sayText}>Listen text</SmallButton>
            :
            <SmallButton onClick={startRecognition}>Say text</SmallButton>
            }

            <SmallButton onClick ={() => setHint(!hint)}>See hint</SmallButton>
            
            </div>
            {hint === true ? <p style={{marginLeft:"9px"}}>Hint : {Exercise.VoiceExercise.Type === 0 ? Exercise.VoiceExercise.TextToSay : Exercise.VoiceExercise.Answer}</p> : null}
            
            {statusLabel === true
            ?
            <div>
              {done
              ?
              <BasicInput value = {Exercise.VoiceExercise.Answer} disabled style={{marginTop:"8px", width:"90%",marginLeft:"13px",backgroundColor:"lime"}}/>
              :
              <BasicInput value = {recognizedText} disabled={Exercise.VoiceExercise.Type === 1} placeholder ={"Listened text..."} style={{marginTop:"8px", width:"90%",marginLeft:"13px"}} onChange={e=>doubleFunc(e)}/>
              }
              </div>
            : 
            <div>
              {done
              ?
              <BasicInput value = {Exercise.VoiceExercise.Answer} disabled style={{marginTop:"8px", width:"90%",marginLeft:"13px",backgroundColor:"lime"}}/>
              :
              <BasicInput value = {recognizedText} disabled={Exercise.VoiceExercise.Type === 1} placeholder ={"Listened text..."} style={{marginTop:"8px", width:"90%",marginLeft:"13px",backgroundColor:"red"}} onChange={e=>doubleFunc(e)}/>
              }
              </div>
            }
            <BigButton style={{marginTop:"15px",marginLeft:"10px",marginBottom:"10px"}} type="submit" onClick={check}>Check answer</BigButton>
        </div>
    )   
}

export default VoiceExercise