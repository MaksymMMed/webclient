import React from "react";
import { useState } from "react";
import MyInput from "../../UI/input/MyInput"
import BigButton from "../../UI/button/bigButton/BigButton";
import axios from "axios";
import "./AddLessonPage.css"

const AddLessonPage = () =>{

    const [NewLesson,SetNewLesson] = useState({LessonName:"",LessonDescription:""})

    const config ={
        headers:{
            "content-type" :"application-json"
        }
    }

    const AddNewLesson = async(e) =>{
        e.preventDefault()
        axios
        .post("/api/Lesson/AddLesson",JSON.stringify(NewLesson),config)
        .then(response =>{
            if (response.status === 200) {
                console.log("success")
                alert("success")
                SetNewLesson({LessonName:"",LessonDescription:""})
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return(
        <div className="AddLessonPage">
            <h3>Lesson Name :</h3>
            <MyInput style ={{marginTop:"15px"}} placeholder="Lesson Name..." value ={NewLesson.LessonName} onChange={e=>SetNewLesson({...NewLesson,LessonName:e.target.value})}/>
            <h3>Lesson Description :</h3>
            <MyInput style ={{marginTop:"15px"}} placeholder="Lesson Description..." value={NewLesson.LessonDescription} onChange={e=>SetNewLesson({...NewLesson,LessonDescription:e.target.value})}/>
            <BigButton style ={{marginTop:"50px"}} onClick={AddNewLesson}>Додати новий урок</BigButton>
        </div>
    )
}

export default AddLessonPage
