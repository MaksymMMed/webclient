import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Lesson from "../../UI/lesson/Lesson"
import axios from "axios";
import { useEffect } from "react";
const LessonPage = () =>
{

    const location = useLocation()
    const [lessons,setLessons] = useState([])
    const userData =  location.state.userData
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };


    const getLessons = async() =>{
      
        axios
        .get('/api/Lesson/GetUserLessons', {params : {id: userData.Id}} ,config)
        .then(response => {
          setLessons(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
      }
    
      
      useEffect(() => {
        getLessons()
      },[])
      
      
      return(
        <div>
            {lessons.map(_lesson =>
            (
              <Lesson key={_lesson.LessonName} lesson={_lesson}/>
            ))}
        </div>
      )
}

export default LessonPage