import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import AdminLesson from "../../../UI/Lesson/Admin/AdminLesson"
import BigButton from "../../../UI/Button/BigButton/BigButton";
import { useNavigate } from "react-router-dom";

const AdminLessonsPage = () =>
{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
    };

    const [Lessons,SetLessons] = useState([])

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
            <div style={{backgroundColor:"whitesmoke",maxWidth:"fit-content",
            marginTop:"15px",padding:"10px 40px 10px 40px",marginLeft:"auto",marginRight:"auto",borderRadius:"5px"}}>
            <BigButton style ={{display:"block", marginLeft:"auto",marginRight:"auto"}} onClick={AddLesson}>Додати новий урок</BigButton>
            </div>
            {Lessons.map(item=>
            <AdminLesson key={item.Id} Lesson={item}/>
            )}
        </div>
    )

}

export default AdminLessonsPage