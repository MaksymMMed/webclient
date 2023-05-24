import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import LoginForm from './components/Pages/GeneralPages/LoginPage/LoginForm';
import RegisterPage from './components/Pages/GeneralPages/RegisterPage/RegisterPage';
import MainPage from './components/Pages/GeneralPages/MainPage/MainPage';
import ExercisePage from './components/Pages/UserPages/ExercisePage/ExercisesPage';
import LessonPage from './components/Pages/UserPages/LessonPage/LessonPage';
import ProfilePage from './components/Pages/GeneralPages/ProfilePage/ProfilePage';
import NotFoundPage from './components/Pages/GeneralPages/NotFoundPage/NotFoundPage';
import AdminExercisePage from './components/Pages/AdminPages/AdminExercisePage/AdminExercisePage';
import AddLessonPage from './components/Pages/AdminPages/AddLessonPage/AddLessonPage';
import AdminLessonsPage from './components/Pages/AdminPages/AdminLessonPage/AdminLessonsPage';
import AdminMainPage from './components/Pages/GeneralPages/MainPage/AdminMainPage';
import AddGrammar from './components/Pages/AdminPages/AddExercisePage/AddGrammar/AddGrammar'; 
import UpdateGrammar from './components/Pages/AdminPages/UpdateExercisePage/UpdateGrammar/UpdateGrammar';
import AddVoice from './components/Pages/AdminPages/AddExercisePage/AddVoice/AddVoice';
import AddTranslate from './components/Pages/AdminPages/AddExercisePage/AddTranslate/AddTranslate'; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm/>,
  },
  {
    path: "/ProfilePage",
    element: <ProfilePage/>,
  },
  {
    path:"/LessonsPage",
    element: <MainPage><LessonPage/></MainPage> 
  },
  {
    path:"/ExercisesPage",
    element: <MainPage><ExercisePage/></MainPage>
  },
  {
    path:"/RegisterPage",
    element: <RegisterPage/>
  },
  {
    path:"/*",
    element: <NotFoundPage/>
  },
  {
    path: "/AdminExercisePage",
    element: <AdminMainPage><AdminExercisePage/></AdminMainPage> 
  },
  {
    path:"/AddLessonPage",
    element: <AdminMainPage><AddLessonPage/></AdminMainPage>  
  },
  {
    path:"/AdminLessonsPage",
    element: <AdminMainPage><AdminLessonsPage/></AdminMainPage>
  },
  {
    path:"/AddGrammar",
    element: <AdminMainPage><AddGrammar/></AdminMainPage>
  },
  {
    path:"/AddTranslate",
    element: <AdminMainPage><AddTranslate/></AdminMainPage>
  },
  {
    path:"/AddVoice",
    element: <AdminMainPage><AddVoice/></AdminMainPage>
  },
  {
    path:"/UpdateGrammar",
    element: <AdminMainPage><UpdateGrammar/></AdminMainPage>
  },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
