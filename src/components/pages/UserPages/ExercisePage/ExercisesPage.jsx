import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import GrammarExercise from "../../../UI/Exercise/Grammar/User/GrammarExercise";
import TranslateExercise from "../../../UI/Exercise/Translate/User/TranslateExercise";
import VoiceExercise from "../../../UI/Exercise/Voice/User/VoiceExercise";
import "./ExercisePage.css"

const ExercisePage = () => {

    const location = useLocation()
    const Navigate = useNavigate()
    const [ExerciseData,SetExerciseData] = useState(location.state.lesson)
    
    return(
        <div>
        <h1><p style={{marginLeft:"50px"}} onClick={()=>Navigate(-1)}>Повернутися до уроків</p></h1>
        <div className="ExercisePage">
            <div>
            <h1 className="ExerciseLabel">Граматичні вправи</h1>
            {ExerciseData.GrammarExercises.length !== 0 ? 
            ExerciseData.GrammarExercises.map(_Exercise =>
            <GrammarExercise key={_Exercise.IdExercise} Exercise={_Exercise}/>)
            : <h2 className="ExerciseLabel">Вправ немає</h2>}
            </div>
                
                    
            <div>
            <h1 className="ExerciseLabel">Голосові вправи</h1>
            {ExerciseData.VoiceExercises.length !== 0 ? 

            ExerciseData.VoiceExercises.map(_Exercise =>
            <VoiceExercise key={_Exercise.IdExercise} Exercise={_Exercise}/>)
            : <h2 className="ExerciseLabel">Вправ немає</h2>} 
            </div>

            <div>
            <h1 className="ExerciseLabel">Вправи на переклад</h1>
            {ExerciseData.TranslateExercises.length !== 0 ? 
            
            ExerciseData.TranslateExercises.map(_Exercise =>
            <TranslateExercise key={_Exercise.IdExercise} Exercise={_Exercise}/>
            )
            : <h2 className="ExerciseLabel">Вправ немає</h2>} 
            <br/>
            </div>
        </div>
        </div>
    )
}

export default ExercisePage