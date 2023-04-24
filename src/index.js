import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import LoginForm from './components/pages/LoginPage/LoginForm';
import MainPage from './components/pages/MainPage/MainPage';
import ExercisePage from './components/pages/ExercisePage/ExercisesPage'
import LessonPage from './components/pages/LessonPage/LessonPage'
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import UserPage from './components/pages/UserPage/UserPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import AdminLessonsPage from './components/pages/AdminLessonPage/AdminLessonsPage';
import AddLessonPage from './components/pages/AddLessonPage/AddLessonPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm/>,
  },
  {
    path: "/UserPage",
    element: <UserPage/>,
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
    path:"/*",
    element: <NotFoundPage/>
  },
  {
    path:"/AddLessonPage",
    element: <AddLessonPage/>
  },
  {
    path:"/AdminLessonsPage",
    element: <AdminLessonsPage/>
    //element: <MainPage><AdminLessonsPage/></MainPage>
  },
  {
    path:"/RegisterPage",
    element: <RegisterPage/>
  }]);

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
