import React from "react";
import classes from './Lesson.module.css'  
import MyButton from "../button/bigButton/BigButton";
//import { useState,useEffect, } from "react";
import { useNavigate } from "react-router-dom";

const Lesson = ({lesson}) =>{

    const Navigate = useNavigate();

    const openLesson = async(e) =>{
      console.log(lesson);
      e.preventDefault();
      Navigate("/ExercisesPage",{state : {lesson:lesson,userData:lesson.TranslateExercises[0].User}})
    }
    
    return(
        <div className={classes.Lesson}>
            <p>Назва уроку: {lesson.LessonName}</p>
            <p>Опис уроку: {lesson.LessonDescription}</p>
            <MyButton onClick= {openLesson}>Розпочати урок</MyButton>
        </div>
    )
}

export default Lesson