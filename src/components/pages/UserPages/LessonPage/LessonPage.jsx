import React, { useState,useEffect  } from "react";
import Lesson from "../../../UI/Lesson/User/Lesson"
import axios from "axios";
import "./LessonPage.css"
const LessonPage = () =>
{

    const [lessons,setLessons] = useState([])
    const userData = JSON.parse(localStorage.getItem("UserData"))  
    useEffect(()=>{
        getLessons()   
    },[])
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const getLessons = async () =>{
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
          
      return(
        <div className="LessonPage">
            {lessons.map(_lesson =>
            (
              <Lesson key={_lesson.LessonName} lesson={_lesson}/>
            ))}
        </div>
      )
}

export default LessonPage