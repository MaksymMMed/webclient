import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GrammarExercise from "../../../UI/Exercise/Grammar/User/GrammarExercise";
import TranslateExercise from "../../../UI/Exercise/Translate/User/TranslateExercise";
import VoiceExercise from "../../../UI/Exercise/Voice/User/VoiceExercise";
import "./ExercisePage.css"

const ExercisePage = () => {

    const Navigate = useNavigate()
    const [ExerciseData,SetExerciseData] = useState(JSON.parse(localStorage.getItem("LessonData")))
    var ExercisesId = []
    const [IsLoading,SetLoading] = useState(true)
    const [CurrentExercise,SetCurrentExercise] = useState(0)
    const [TypeExercise,SetTypeExercise] = useState(0)
    const [CurrentIndex,SetCurrentIndex] = useState(0)
    const [MaxIndex,SetMaxIndex] = useState(0)
    
    useEffect(()=>{
        ExercisesId = []
        ExerciseData.GrammarExercises.forEach(element => {
            ExercisesId.push({Id:element.IdExercise,Type:0})
        });
        ExerciseData.VoiceExercises.forEach(element => {
            ExercisesId.push({Id:element.IdExercise,Type:1})
        });
        ExerciseData.TranslateExercises.forEach(element => {
            ExercisesId.push({Id:element.IdExercise,Type:2})
        });
        SetMaxIndex(ExercisesId.length-1)
        SetCurrentExercise(ExercisesId[CurrentIndex].Id)
        SetTypeExercise(ExercisesId[CurrentIndex].Type)
        SetLoading(false)
    })

    const ChangeExercise = (index) =>{
        let _index = CurrentIndex+index
        if (_index < 0 || _index>MaxIndex) {
            return
        }
        SetCurrentExercise(ExercisesId[_index].Id)
        SetTypeExercise(ExercisesId[_index].Type)
        SetCurrentIndex(_index)
    }

    return(
        <div>
        <h1><p style={{marginLeft:"50px"}} onClick={()=>Navigate(-1)}>Повернутися до уроків</p></h1>
        {
            IsLoading === true ? null :
        <div className="ExercisePage">
            <div>
            {ExerciseData.GrammarExercises.length !== 0 && TypeExercise === 0  ? 
            ExerciseData.GrammarExercises.map((_Exercise,index) =>
                <div key={index} style={CurrentExercise === _Exercise.IdExercise ? null : {display:"none"} }>
                <GrammarExercise  key={_Exercise.IdExercise} Exercise={_Exercise}/>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h1 onClick={()=>ChangeExercise(-1)}>Назад</h1>
                    <h1 onClick={()=>ChangeExercise(1)}>Вперед</h1>
                </div>
            </div>)
            : null}
            </div>
                    
            <div>
            {ExerciseData.VoiceExercises.length !== 0 && TypeExercise === 1 ? 
            ExerciseData.VoiceExercises.map((_Exercise,index) =>
            <div key={index} style={CurrentExercise === _Exercise.IdExercise ? null : {display:"none"} }>
            <VoiceExercise  key={_Exercise.IdExercise} Exercise={_Exercise}/>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 onClick={()=>ChangeExercise(-1)}>Назад</h1>
                <h1 onClick={()=>ChangeExercise(1)}>Вперед</h1>
            </div>
            </div>)
            : null}
            </div>

            <div>
            {ExerciseData.TranslateExercises.length !== 0 && TypeExercise === 2 ? 
            ExerciseData.TranslateExercises.map((_Exercise,index) =>
            <div key={index} style={CurrentExercise === _Exercise.IdExercise ? null : {display:"none"} }>
            <TranslateExercise  key={_Exercise.IdExercise} Exercise={_Exercise}/>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 onClick={()=>ChangeExercise(-1)}>Назад</h1>
                <h1 onClick={()=>ChangeExercise(1)}>Вперед</h1>
            </div>
        </div>)
        : null}
            </div>
            <br/>
        </div>
        }
        </div>
    )
}

export default ExercisePage