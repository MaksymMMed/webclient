import React, { useState } from "react";
import './MainPage.css'
import { useEffect } from "react";
import SmallButton from "../../../UI/Button/SmallButton/SmallButton"
import { useNavigate } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";


const MainPage = (props) =>{

  const [UserData,SetUserData] = useState(null)

  const Navigate = useNavigate()
  useEffect(()=>
    {
      var data = JSON.parse(localStorage.getItem("UserData"))
      SetUserData(data)
    },[])

  const openProfile = () =>{
    Navigate("/ProfilePage",{state:UserData})
  }
        

      return(
        <div>
          {UserData !== null ?
            <div>
            <header>
                <h1>Lang4Easy</h1>
                <SmallButton style={{marginTop:"25px"}} onClick={openProfile}>Profile</SmallButton>
            </header>
            {props.children}
            </div>
            :
            <NotFoundPage/>
          }
        </div>
      )
}

export default MainPage