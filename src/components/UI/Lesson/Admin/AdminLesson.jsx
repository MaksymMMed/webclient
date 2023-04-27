import React from "react";
import Classes from "./AdminLesson.module.css"
import BigButton from "../../Button/BigButton/BigButton";
import { useNavigate } from "react-router-dom";
const AdminLesson = ({Lesson}) =>
{

    const Navigate = useNavigate()

    const OpenLesson = (e) =>{
        e.preventDefault()
        Navigate("/AdminExercisePage",{state : {Lesson:Lesson}})
    }

    return(
        <div className={Classes.Lesson}>
            <p>Назва уроку: {Lesson.LessonName}</p>
            <p>Опис уроку: {Lesson.LessonDescription}</p>
            <BigButton style={{marginLeft:"auto",marginRight:"auto"}} onClick={OpenLesson}>Відкрити урок</BigButton>
        </div>
    )
}

export default AdminLesson