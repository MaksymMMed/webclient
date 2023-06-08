import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminGrammarExercise from "../../../UI/Exercise/Grammar/Admin/AdminGrammarExercise";
import AdminVoiceExercise from "../../../UI/Exercise/Voice/Admin/AdminVoiceExercise";
import AdminTranslateExercise from "../../../UI/Exercise/Translate/Admin/AdminTranslateExercise";
import BigButton from "../../../UI/Button/BigButton/BigButton";
import "./AdminExercisePage.css"

const AdminExercisePage = () =>{

    const [ExerciseData,SetExerciseData] = useState(JSON.parse(localStorage.getItem("AdminLessonData")))
    const Navigate = useNavigate()

    const DeleteGrammarExercise = (Exercise) =>{
        var _Grammar = ExerciseData.GrammarExercises.filter(item=>item.Id !== Exercise.Id)
        SetExerciseData({...ExerciseData,GrammarExercises:_Grammar})
    }

    const DeleteTranslateExercise = (Exercise) =>{
        var _Translate = ExerciseData.TranslateExercises.filter(item=>item.Id !== Exercise.Id)
        SetExerciseData({...ExerciseData,TranslateExercises:_Translate})
    }
    
    const DeleteVoiceExercise = (Exercise) =>{
        var _Voice = ExerciseData.VoiceExercises.filter(item=>item.Id !== Exercise.Id)
        SetExerciseData({...ExerciseData,VoiceExercises:_Voice})
    }
    
    return(
            <div>
            <button onClick={()=>Navigate(-1)} style={{border:"none",backgroundColor:"transparent",fontSize:"34px",fontWeight:"bold",margin:"15px 0 0 50px"}}>Повернутися до уроків</button>
            <div className="ExercisesPlace">
            <h1 className="AdminExerciseLabel">Граматичні вправи</h1>
            <div className="AddExerciseButtonPlace">
            <BigButton onClick={()=>Navigate("/AddGrammar", {state:ExerciseData.Id})} style  ={{display:"block", marginLeft:"auto",marginRight:"auto"}}>Додати граматичну вправу</BigButton>
            </div>
            <div className="AdminExercisesPlace">
            {ExerciseData.GrammarExercises.map(_Exercise =>
            <AdminGrammarExercise DeleteGrammarExercise={DeleteGrammarExercise} key={_Exercise.Id} Exercise={_Exercise}/>
            )}
            </div>

                
            <h1 className="AdminExerciseLabel">Голосові вправи</h1>
            <div className="AddExerciseButtonPlace">
            <BigButton onClick={()=>Navigate("/AddVoice", {state:ExerciseData.Id})} style ={{display:"block", marginLeft:"auto",marginRight:"auto"}}>Додати голосову вправу</BigButton>
            </div>
            <div className="AdminExercisesPlace">
            {ExerciseData.VoiceExercises.map(_Exercise =>
            <AdminVoiceExercise DeleteVoiceExercise={DeleteVoiceExercise} key={_Exercise.Id} Exercise={_Exercise}/>
            )}
            </div>

            <h1 className="AdminExerciseLabel">Вправи на переклад</h1>
            <div className="AddExerciseButtonPlace">
            <BigButton onClick={()=>Navigate("/AddTranslate", {state:ExerciseData.Id})} style ={{display:"block", marginLeft:"auto",marginRight:"auto"}}>Додати вправу на переклад</BigButton>
            </div>
            <div className="AdminExercisesPlace">
            {ExerciseData.TranslateExercises.map(_Exercise =>
            <AdminTranslateExercise DeleteTranslateExercise = {DeleteTranslateExercise} key={_Exercise.Id} Exercise={_Exercise}/>
            )}
            </div>
            </div>
            </div>
    )
}

export default AdminExercisePage