import React from "react";
import classes from './Lesson.module.css'  
import MyButton from "../../Button/BigButton/BigButton";
import { useNavigate } from "react-router-dom";

const Lesson = ({lesson}) =>{

    const Navigate = useNavigate();

    const openLesson = async(e) =>{
      console.log(lesson);
      e.preventDefault();
      Navigate("/ExercisesPage",{state : {lesson:lesson,userData:JSON.parse(localStorage.getItem("UserData"))}})
    }
    
    return(
        <div className={classes.Lesson}>
            <p>Назва уроку: {lesson.LessonName}</p>
            <p>Опис уроку: {lesson.LessonDescription}</p>
            <MyButton style={{marginLeft:"auto",marginRight:"auto",marginTop:"15px"}} onClick = {openLesson}>Розпочати урок</MyButton>
        </div>
    )
}

export default Lesson