import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import GrammarExercise from "../../../UI/Exercise/Grammar/User/GrammarExercise";
import TranslateExercise from "../../../UI/Exercise/Translate/User/TranslateExercise";
import VoiceExercise from "../../../UI/Exercise/Voice/User/VoiceExercise";
import "./ExercisePage.css"

const ExercisePage = () => {

    const location = useLocation()
    const [ExerciseData,SetExerciseData] = useState(location.state.lesson)
     
    return(
        <div className="ExercisePage">
            <div>
            <h1 className="ExerciseLabel">Граматичні вправи</h1>
            {ExerciseData.GrammarExercises.map(_Exercise =>
            <GrammarExercise key={_Exercise.IdExercise} Exercise={_Exercise}/>
            )} 
            </div>
                
                    
            <div>
            <h1 className="ExerciseLabel">Голосові вправи</h1>
            {ExerciseData.VoiceExercises.map(_Exercise =>
            <VoiceExercise key={_Exercise.IdExercise} Exercise={_Exercise}/>
            )} 
            </div>

            <div>
            <h1 className="ExerciseLabel">Вправи на переклад</h1>
            {ExerciseData.TranslateExercises.map(_Exercise =>
            <TranslateExercise key={_Exercise.IdExercise} Exercise={_Exercise}/>
            )} 
            <br/>
            </div>
        </div>
    )
}

export default ExercisePage