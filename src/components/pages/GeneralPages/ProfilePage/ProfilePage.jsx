import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyInput from "../../../UI/input/MyInput";
import "./ProfilePage.css"
import BigButton from "../../../UI/button/bigButton/BigButton"

const ProfilePage = () =>{

    const location = useLocation()
    const user = location.state

    const Navigate = useNavigate()

    useEffect(()=>console.log(user))

    const OpenAdminPanel = (e) =>{
        e.preventDefault()
        Navigate("/AdminLessonsPage")
    }

    
    return(
        <div className="ProfilePage">
            <div className="InputsPlace">
                <p style={{width:"120px"}}>Login:</p>
                <MyInput disabled style ={{marginLeft:"5px"}} value={user.Login}/>
            </div>
            <div className="InputsPlace">
                <p style={{width:"120px"}}>Email:</p>
                <MyInput disabled style ={{marginLeft:"5px"}} value={user.Email}/>
            </div>   
            {user.Role === "admin"
             ? <BigButton style={{marginBottom:"5px",marginLeft:"15px"}} onClick={OpenAdminPanel}>Адміністрування</BigButton>
             : null
            }         
        </div>
    )
}

export default ProfilePage