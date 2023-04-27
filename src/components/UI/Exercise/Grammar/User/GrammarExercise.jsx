import React, { useState } from "react";
import Classes from "./GrammarExercise.module.css"
import SmallButton from "../../../Button/SmallButton/SmallButton";
import BigButton from "../../../Button/BigButton/BigButton";
import axios from "axios";

const GrammarExercise = ({Exercise}) =>{

    const [done,setDone] = useState(Exercise.Status)
    const [statusLabel,setStatusLabel] = useState(true)
    const [selectedWord,setSelectedWord] = useState("")
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

    const setWord = (word) =>{
        setSelectedWord(word)
        setStatusLabel(true)
        console.log(word)
    }

    const check = async (e) => {
        if (done === true) {
          return
        }
        e.preventDefault()
        var exerciseData = {exerciseId:Exercise.IdExercise, userId:Exercise.IdUser,Verb: selectedWord}  
        console.log(exerciseData)      
        axios
        .post("/api/GrammarExercise/CheckGrammar",JSON.stringify(exerciseData), config)
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
            <p>Exercise name : {Exercise.GrammarExercise.Name}</p>
            <p>Question : {Exercise.GrammarExercise.Question}</p>
            </div>
            {statusLabel === true
            ?  
            <div className={Classes.VariablesPlace}>
                {done === false
                ?
                Exercise.GrammarExercise.Variables.map((variable,index) => (
                <SmallButton type="submit" onClick={() => setWord(variable)} key={index} 
                style={variable === selectedWord ? {backgroundColor:"whitesmoke",border:"2px black solid",color:"black"} : null}>
                  {variable}
                </SmallButton>))
                :
                Exercise.GrammarExercise.Variables.map((variable,index) => (
                <SmallButton type="submit" disabled key={index} 
                style={variable === Exercise.GrammarExercise.Answer ? {backgroundColor:"lime",border:"2px black solid",color:"black"} : null}>
                  {variable}
                </SmallButton>))}
            </div>
            :
            <div className={Classes.VariablesPlace}>
                {done === false
                ?
                Exercise.GrammarExercise.Variables.map((variable,index) => (
                <SmallButton type="submit" onClick={() => setWord(variable)} key={index} 
                style={variable === selectedWord ? {backgroundColor:"red",border:"2px black solid",color:"black"} : null}>
                  {variable}
                </SmallButton>))
                :
                Exercise.GrammarExercise.Variables.map((variable,index) => (
                <SmallButton type="submit" disabled key={index} 
                style={variable === Exercise.GrammarExercise.Answer ? {backgroundColor:"lime",border:"2px black solid",color:"black"} : null}>
                  {variable}
                </SmallButton>))}
            </div>
            }
            <BigButton style={{marginTop:"15px",marginLeft:"10px",marginBottom:"10px"}} type="submit" onClick={check}>Check answer</BigButton>
        </div>
    )   
}

export default GrammarExercise