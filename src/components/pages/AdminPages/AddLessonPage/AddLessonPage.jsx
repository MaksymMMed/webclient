import React from "react";
import { useState } from "react";
import axios from "axios";
import BasicInput from "../../../UI/Input/BasicInput";
import BigButton from "../../../UI/Button/BigButton/BigButton";
import "./AddLessonPage.css"
import { useNavigate } from "react-router-dom";


const AddLessonPage = () =>{

    const [NewLesson,SetNewLesson] = useState({LessonName:"",LessonDescription:""})

    const Navigate = useNavigate()
    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const AddNewLesson = async(e) =>{
        e.preventDefault()
        axios
        .post("/api/Lesson/AddLesson",JSON.stringify(NewLesson),config)
        .then(response =>{
            if (response.status === 200) {
                SetNewLesson({LessonName:"",LessonDescription:""})
            }
            else if (response.status === 401) {
                Navigate("/")
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return(
        <div>
        <h1><p style={{marginLeft:"50px"}} onClick={()=>Navigate(-1)}>Повернутися до уроків</p></h1>
        <div className="AddLessonPage">
            <h3>Lesson Name :</h3>
            <BasicInput style ={{marginTop:"15px"}} placeholder="Lesson Name..." value ={NewLesson.LessonName} onChange={e=>SetNewLesson({...NewLesson,LessonName:e.target.value})}/>
            <h3>Lesson Description :</h3>
            <BasicInput style ={{marginTop:"15px"}} placeholder="Lesson Description..." value={NewLesson.LessonDescription} onChange={e=>SetNewLesson({...NewLesson,LessonDescription:e.target.value})}/>
            <BigButton style ={{marginTop:"50px"}} onClick={AddNewLesson}>Додати новий урок</BigButton>
        </div>
        </div>

    )
}

export default AddLessonPage
