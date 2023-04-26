import React from "react";
import Classes from "./Lesson.module.css"
import BigButton from "../button/bigButton/BigButton";
import { useNavigate } from "react-router-dom";
const AdminLesson = ({Lesson}) =>
{

    const Navigate = useNavigate()

    const OpenLesson = (e) =>{
        e.preventDefault()
        console.log(Lesson);
        Navigate("/AdminExercisePage",{state : {Lesson:Lesson}})
    }

    return(
        <div className={Classes.Lesson}>
             <p>Назва уроку: {Lesson.LessonName}</p>
            <p>Опис уроку: {Lesson.LessonDescription}</p>
            <BigButton onClick={OpenLesson}>Відкрити урок</BigButton>
        </div>
    )
}

export default AdminLesson