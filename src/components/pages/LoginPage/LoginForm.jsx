import React from "react";
import { useState } from 'react';
import axios from "axios";
import './LoginPage.css'
import MyInput from "../../UI/input/MyInput";
import BigButton from '../../UI/button/bigButton/BigButton'
import { Link,useNavigate } from "react-router-dom";

const LoginForm = () =>{

    const [userData,setUserData] = useState({email:'JackD@gmail.com',password:'qwerty02'})
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const Navigate = useNavigate();

    const LogIn = async(e) =>{
      console.log(userData);
      e.preventDefault();
      axios.post
      ('/api/User/SignIn',JSON.stringify(userData),config)
      .then(response => {
        if (response.status === 200)
        {
          console.log("success")
          Navigate("/LessonsPage", {state: {userData:response.data}})
        }        
      })
      .catch(error => {
        alert("Неправильний логін або пароль")
        setUserData({email:"",password:""})
        console.log(error);
      });
    }

    return (
        <form className="LoginForm">
          <h1>Lang4Easy</h1>
          <div className="InputPlace">
            <h3>Email</h3>
            <MyInput placeholder=" Введіть email..." value={userData.email} onChange={e=>setUserData({...userData, email : e.target.value})} />
          </div>
          <div className="InputPlace">
            <h3>Password</h3>
            <MyInput placeholder=" Введіть пароль..." value={userData.password} onChange={e=>setUserData({...userData, password : e.target.value})} />
          </div>
          <div className="Other">
            <p><Link to="/How">Забули пароль?</Link></p>
            <p><Link to="/RegisterPage">Зареєструватися</Link></p>
          </div>
          <div className="ButtonPlace">
          <BigButton onClick={LogIn}>Увійти</BigButton>
          </div>
        </form>
        
      );

      
    }


export default LoginForm