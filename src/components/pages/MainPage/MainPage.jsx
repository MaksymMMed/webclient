import React from "react";
import './MainPage.css'
import SmallButton from "../../UI/button/smallButton/SmallButton";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const MainPage = (props) =>{

  const location = useLocation()
  const userData =  location.state.userData

  const Navigate = useNavigate()
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  useEffect(()=>
    {
      console.log(userData)
    })

  const openProfile = () =>{
    Navigate("/UserPage",{state:userData})
  }
        

      return(
        <div>
            <header>
                <h1>Lang4Easy</h1>
                <SmallButton style={{width:"300px",marginTop:"25px"}} onClick={openProfile}>{userData.Email}</SmallButton>
            </header>
            {props.children}
        </div>
      )
}

export default MainPage