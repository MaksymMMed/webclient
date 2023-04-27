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
        <div className="ProfilePage">
            <div className="InputsPlace">
                <p style={{width:"120px"}}>Login:</p>
                <BasicInput disabled style ={{marginLeft:"5px"}} value={userData.Login}/>
            </div>
            <div className="InputsPlace">
                <p style={{width:"120px"}}>Email:</p>
                <BasicInput disabled style ={{marginLeft:"5px"}} value={userData.Email}/>
            </div>   
            {userData.Role === "admin"
             ? <BigButton style={{marginBottom:"5px",marginLeft:"auto",marginRight:"auto"}} onClick={OpenAdminPanel}>Адміністрування</BigButton>
             : null
            }
            <div className="ControlButtons">
            <BigButton style={{width: "40%"}} onClick={Logout}>Вийти з профілю</BigButton>   
            <BigButton style={{width: "40%"}} onClick={Logout}>Вийти з профілю</BigButton>   
            </div>
        </div>
    )
}

export default ProfilePage