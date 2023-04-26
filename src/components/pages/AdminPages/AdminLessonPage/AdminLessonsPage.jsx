import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import AdminLesson from "../../../UI/lesson/AdminLesson"
const AdminLessonsPage = () =>
{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
    };

    const [Lessons,SetLessons] = useState([])

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
            {Lessons.map(item=>
            <AdminLesson key={item.Id} Lesson={item}/>
            )}
        </div>
    )

}

export default AdminLessonsPage