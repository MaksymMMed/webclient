import React, { useEffect } from "react";
import BasicInput from "../../../UI/Input/BasicInput";
import "./ProfilePage.css"
import BigButton from "../../../UI/Button/BigButton/BigButton"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () =>{

    const userData = JSON.parse(localStorage.getItem("UserData")) 
    const Navigate = useNavigate()
    
    const Logout = () =>{
        axios
        .post("/api/User/Logout")
        .then(response =>{
            if (response.status === 200) {
                localStorage.removeItem("UserData")
                Navigate("/")
            }})
        .catch(error => {
            console.log(error)
        })
    }

    const OpenAdminPanel = (e) =>{
        e.preventDefault()
        Navigate("/AdminLessonsPage")
    }

    
    return(
        <div>
        <h1><p style={{marginLeft:"25px"}} onClick={()=>Navigate(-1)} >Назад</p></h1>
        <div className="ProfilePage">
            <div className="InputsPlace">
                <p style={{width:"80px"}}>Login:</p>
                <BasicInput disabled style ={{width:"80%",marginRight:"8px"}} value={userData.Login}/>
            </div>
            <div className="InputsPlace">
                <p style={{width:"80px"}}>Email:</p>
                <BasicInput disabled style ={{marginRight:"8px",width:"80%"}} value={userData.Email}/>
            </div>  
            <div className="ControlButtons">
            {userData.Role === "admin"
             ? <BigButton style={{width:"40%"}} onClick={OpenAdminPanel}>Адміністрування</BigButton>
             : null
            }
            <BigButton style={{width: "40%"}} onClick={Logout}>Вийти з профілю</BigButton>   
            </div>
        </div>
        </div>
    )
}

export default ProfilePage