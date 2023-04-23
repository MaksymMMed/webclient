import React from "react";
import { useState } from 'react';
import axios from "axios";
import './RegisterPage.css'
import MyInput from "../../UI/input/MyInput";
import BigButton from '../../UI/button/bigButton/BigButton'
import { Link,useNavigate } from "react-router-dom";

const RegisterPage = () =>{
    
    const [userData,setUserData] = useState({email:'',password:'',login:''})
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const Navigate = useNavigate();

    const Register = async(e) =>{
      console.log(userData);
      e.preventDefault();
      axios.post
      ('/api/User/SignUp',JSON.stringify(userData),config)
      .then(response => {
        if (response.status === 200)
        {
          console.log("success")
          Navigate("/")
        }        
      })
      .catch(error => {
        setUserData({email:"",password:"",login:""})
        console.log(error);
      });
    }

    return (
        <form className="RegisterPage">
          <h1>Lang4Easy</h1>
          <div className="InputPlace">
            <h3>Email</h3>
            <MyInput placeholder=" Введіть email..." value={userData.email} onChange={e=>setUserData({...userData, email : e.target.value})} />
          </div>
          <div className="InputPlace">
            <h3>Login</h3>
            <MyInput placeholder=" Введіть логін..." value={userData.login} onChange={e=>setUserData({...userData, login : e.target.value})} />
          </div>
          <div className="InputPlace">
            <h3>Password</h3>
            <MyInput placeholder=" Введіть пароль..." value={userData.password} onChange={e=>setUserData({...userData, password : e.target.value})} />
          </div>
          <div className="Other">
            <p><Link to="/How">Забули пароль?</Link></p>
            <p><Link to="/">Авторизуватися</Link></p>
          </div>
          <div className="ButtonPlace">
          <BigButton onClick={Register}>Зареєструватися</BigButton>
          </div>
        </form>
        
      );

}

export default RegisterPage