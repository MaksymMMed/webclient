import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import AdminLesson from "../../../UI/Lesson/Admin/AdminLesson"
import BigButton from "../../../UI/Button/BigButton/BigButton";
import { useNavigate } from "react-router-dom";
import "./AdminLessonPage.css"

const AdminLessonsPage = () =>
{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${localStorage.getItem("Token")}`
          }
    };

    const [Lessons,SetLessons] = useState([])

    const DeleteLesson = (Lesson) =>{
        SetLessons(Lessons.filter(item=>item.Id !== Lesson.Id))
    }

    const Navigate = useNavigate()

    const AddLesson = () =>{
        Navigate("/AddLessonPage")
    }

    const GetAllLesson = async () =>
    {
        axios
        .get("/api/Lesson/GetLessons",config)
        .then(response =>
            {
            if (response.status === 200) {
                SetLessons(response.data)
            }
        })
        .catch(error=>
            {
                console.log(error)
            })
    }

    useEffect(()=>
    {
        GetAllLesson()
    },[])

    

    return(
        <div>
            <div className="AddLessonButtonPlace">
            <BigButton style ={{display:"block", marginLeft:"auto",marginRight:"auto"}} onClick={AddLesson}>Додати новий урок</BigButton>
            </div>
            <div className="LessonsPlace">
            {Lessons.map(item=>
            <AdminLesson DeleteLesson={DeleteLesson} key={item.Id} Lesson={item}/>
            )}
            </div>
        </div>
    )

}

export default AdminLessonsPage