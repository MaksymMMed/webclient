import React from "react";
import { useLocation } from "react-router-dom";
import GrammarExercise from "../../../UI/exercise/grammar/GrammarExercise";

const AdminExercisePage = () =>{
    const location = useLocation()
    const ExerciseData =  location.state.Lesson

    return(
        <div>
            <div className="ExercisesPlace">
            <h1>Граматичні вправи</h1>
            {ExerciseData.GrammarExercises.map(_Exercise =>
            <GrammarExercise key={_Exercise.IdExercise} Exercise={_Exercise}/>
            )} 
            </div>
        </div>
    )
}

export default AdminExercisePage