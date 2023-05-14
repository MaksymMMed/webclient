import React, { useState } from "react";
import { useLocation, useNavigate,Link } from "react-router-dom";
import AdminGrammarExercise from "../../../UI/Exercise/Grammar/Admin/AdminGrammarExercise";
import AdminVoiceExercise from "../../../UI/Exercise/Voice/Admin/AdminVoiceExercise";
import AdminTranslateExercise from "../../../UI/Exercise/Translate/Admin/AdminTranslateExercise";
import BigButton from "../../../UI/Button/BigButton/BigButton";
import "./AdminExercisePage.css"


const AdminExercisePage = () =>{
    const location = useLocation()
    const [ExerciseData,SetExerciseData]  = useState(location.state.Lesson)
    const LessonId = location.state.Lesson.Id
    const Navigate = useNavigate()

    const DeleteGrammarExercise = (Exercise) =>{
        SetExerciseData(ExerciseData.GrammarExercises.filter(item=>item.Id !== Exercise.Id))
    }

    return(
        <div>
            <div>
            <h1><p style={{marginLeft:"50px"}} onClick={()=>Navigate(-1)}>Повернутися до уроків</p></h1>
            <div className="ExercisesPlace">
            <h1 className="AdminExerciseLabel">Граматичні вправи</h1>
            <div className="AddExerciseButtonPlace">
            <BigButton onClick={()=>Navigate("/AddGrammar",{state:{LessonId}})} style  ={{display:"block", marginLeft:"auto",marginRight:"auto"}}>Додати граматичну вправу</BigButton>
            </div>
            <div className="AdminExercisesPlace">
            {ExerciseData.GrammarExercises.map(_Exercise =>
            <AdminGrammarExercise DeleteGrammarExercise={DeleteGrammarExercise} key={_Exercise.Id} Exercise={_Exercise}/>
            )}
            </div>

                
            <h1 className="AdminExerciseLabel">Голосові вправи</h1>
            <div className="AddExerciseButtonPlace">
            <BigButton style ={{display:"block", marginLeft:"auto",marginRight:"auto"}}>Додати голосову вправу</BigButton>
            </div>
            <div className="AdminExercisesPlace">
            {ExerciseData.VoiceExercises.map(_Exercise =>
            <AdminVoiceExercise key={_Exercise.Id} Exercise={_Exercise}/>
            )}
            </div>

            <h1 className="AdminExerciseLabel">Вправи на переклад</h1>
            <div className="AddExerciseButtonPlace">
            <BigButton style ={{display:"block", marginLeft:"auto",marginRight:"auto"}}>Додати вправу на переклад</BigButton>
            </div>
            <div className="AdminExercisesPlace">
            {ExerciseData.TranslateExercises.map(_Exercise =>
            <AdminTranslateExercise key={_Exercise.Id} Exercise={_Exercise}/>
            )}
            </div>
            </div>
            </div>
        </div>
    )
}

export default AdminExercisePage