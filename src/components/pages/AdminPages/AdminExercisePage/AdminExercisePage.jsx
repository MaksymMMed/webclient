import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminGrammarExercise from "../../../UI/Exercise/Grammar/Admin/AdminGrammarExercise";
import AdminVoiceExercise from "../../../UI/Exercise/Voice/Admin/AdminVoiceExercise";
import AdminTranslateExercise from "../../../UI/Exercise/Translate/Admin/AdminTranslateExercise";
import BigButton from "../../../UI/Button/BigButton/BigButton";


const AdminExercisePage = () =>{
    const location = useLocation()
    const ExerciseData =  location.state.Lesson
    const LessonId = location.state.Lesson.Id
    const Navigate = useNavigate()

    return(
        <div>
            <div className="ExercisesPlace">

            <h1 style={{marginLeft:"auto",marginRight:"auto",display:"block",maxWidth:"fit-content"}}>Граматичні вправи</h1>
            <div style={{backgroundColor:"whitesmoke",maxWidth:"fit-content",marginTop:"15px",padding:"10px 40px 10px 40px",marginLeft:"auto",marginRight:"auto",borderRadius:"5px"}}>
            <BigButton onClick={()=>Navigate("/AddGrammar",{state:{LessonId}})} style  ={{display:"block", marginLeft:"auto",marginRight:"auto"}}>Додати граматичну вправу</BigButton>
            </div>
            {ExerciseData.GrammarExercises.map(_Exercise =>
            <AdminGrammarExercise key={_Exercise.Id} Exercise={_Exercise}/>
            )}

                
            <h1 style={{marginLeft:"auto",marginRight:"auto",display:"block",maxWidth:"fit-content"}}>Голосові вправи</h1>
            <div style={{backgroundColor:"whitesmoke",maxWidth:"fit-content",
            marginTop:"15px",padding:"10px 40px 10px 40px",marginLeft:"auto",marginRight:"auto",borderRadius:"5px"}}>
            <BigButton style ={{display:"block", marginLeft:"auto",marginRight:"auto"}}>Додати голосову вправу</BigButton>
            </div>
            {ExerciseData.VoiceExercises.map(_Exercise =>
            <AdminVoiceExercise key={_Exercise.Id} Exercise={_Exercise}/>
            )}


            <h1 style={{marginLeft:"auto",marginRight:"auto",display:"block",maxWidth:"fit-content"}}>Вправи на переклад</h1>
            <div style={{backgroundColor:"whitesmoke",maxWidth:"fit-content",
            marginTop:"15px",padding:"10px 40px 10px 40px",marginLeft:"auto",marginRight:"auto",borderRadius:"5px"}}>
            <BigButton style ={{display:"block", marginLeft:"auto",marginRight:"auto"}}>Додати вправу на переклад</BigButton>
            </div>
            {ExerciseData.TranslateExercises.map(_Exercise =>
            <AdminTranslateExercise key={_Exercise.Id} Exercise={_Exercise}/>
            )}
            
            </div>
        </div>
    )
}

export default AdminExercisePage