import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import LoginForm from './components/pages/GeneralPages/LoginPage/LoginForm';
import RegisterPage from './components/pages/GeneralPages/RegisterPage/RegisterPage';
import MainPage from './components/pages/GeneralPages/MainPage/MainPage';
import ExercisePage from './components/pages/UserPages/ExercisePage/ExercisesPage';
import LessonPage from './components/pages/UserPages/LessonPage/LessonPage';
import ProfilePage from './components/pages/GeneralPages/ProfilePage/ProfilePage';
import NotFoundPage from './components/pages/GeneralPages/NotFoundPage/NotFoundPage';
import AdminExercisePage from './components/pages/AdminPages/AdminExercisePage/AdminExercisePage';
import AddLessonPage from './components/pages/AdminPages/AddLessonPage/AddLessonPage';
import AdminLessonsPage from './components/pages/AdminPages/AdminLessonPage/AdminLessonsPage';
import AdminMainPage from './components/pages/GeneralPages/MainPage/AdminMainPage';

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
