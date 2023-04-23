import React, { useState } from "react";
import Classes from "./VoiceExercise.module.css"
import SmallButton from "../../button/smallButton/SmallButton";
import BigButton from "../../button/bigButton/BigButton";
import axios from "axios";
import MyInput from "../../input/MyInput";

const VoiceExercise = ({Exercise}) =>{

    const [done,setDone] = useState(Exercise.Status)
    const [statusLabel,setStatusLabel] = useState(true)
    const [hint,setHint] = useState(false)
    const [recognizedText,setRecognizedText] = useState("")

    const config = {
        headers: {
          'Content-Type': 'application/json'
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
        .post("/api/VoiceExercise/CheckVoice",JSON.stringify(exerciseData), config)
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

    const doubleFunc = (e) =>{
      setStatusLabel(true)
      setRecognizedText(e.target.value)
    }

    const sayText = async (e) => {
        e.preventDefault()
        axios
        .post("/api/VoiceExercise/SayText",JSON.stringify(Exercise.VoiceExercise.TextToSay), config)
        .then(response => {
            if (response.status === 200)
            {
              console.log("success")
            }        
          })
          .catch(error => {
            console.log(error);
          });
    }

    return(
        <div className={Classes.Exercise} >
            <div className={Classes.Info}>
              <p>Exercise Name : {Exercise.VoiceExercise.Name}</p>
            </div>
            <div className={Classes.ButtonsPlace}>
            <SmallButton onClick={sayText}>Listen text</SmallButton>
            <SmallButton onClick ={() => setHint(!hint)}>See hint</SmallButton>
            </div>
            {hint === true ? <p style={{marginLeft:"9px"}}>Hint : {Exercise.VoiceExercise.TextToSay}</p> : null}
            {statusLabel === true 
            ?
            <div>
              {done
              ?
              <MyInput value = {Exercise.VoiceExercise.Answer} disabled style={{marginTop:"8px", width:"90%",marginLeft:"13px",backgroundColor:"lime"}}/>
              :
              <MyInput placeholder ={"Input listened text..."} style={{marginTop:"8px", width:"90%",marginLeft:"13px"}} onChange={e=>doubleFunc(e)}/>
              }
              </div>
            : 
            <div>
              {done
              ?
              <MyInput value = {Exercise.VoiceExercise.Answer} disabled style={{marginTop:"8px", width:"90%",marginLeft:"13px",backgroundColor:"lime"}}/>
              :
              <MyInput placeholder ={"Input listened text..."} style={{marginTop:"8px", width:"90%",marginLeft:"13px",backgroundColor:"red"}} onChange={e=>doubleFunc(e)}/>
              }
              </div>
            }
            <BigButton style={{marginTop:"15px",marginLeft:"10px",marginBottom:"10px"}} type="submit" onClick={check}>Check answer</BigButton>
        </div>
    )   
}

export default VoiceExercise