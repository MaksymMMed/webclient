import React, { useEffect } from "react";
import MyInput from "../../UI/input/MyInput";
import { useLocation } from "react-router-dom";
import "./UserPage.css"

const UserPage = () =>{

    const location = useLocation()
    const user = location.state

    useEffect(()=>console.log(user))

    
    return(
        <div className="UserPage">
            <div className="InputsPlace">
                <p style={{width:"120px"}}>Login:</p>
                <MyInput disabled style ={{marginLeft:"5px"}} value={user.Login}/>
            </div>
            <div className="InputsPlace">
                <p style={{width:"120px"}}>Password:</p>
                <MyInput disabled style ={{marginLeft:"5px"}} value={user.Password}/>
            </div>
            <div className="InputsPlace">
                <p style={{width:"120px"}}>Email:</p>
                <MyInput disabled style ={{marginLeft:"5px"}} value={user.Email}/>
            </div>
            <div className="Exercises" style={{paddingBottom:"1px"}}>
                <h2>Execises</h2>
                {user.CompletedExercise.map((exercise,index) =>
                (
                    <div key={index}>
                        <p> Name : {exercise.Exercise.Name}</p>
                        <p> Lesson : {exercise.Exercise.Lesson.LessonName}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default UserPage