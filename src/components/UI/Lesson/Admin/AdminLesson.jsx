import React from "react";
import Classes from "./AdminLesson.module.css"
import BigButton from "../../Button/BigButton/BigButton";
import SmallButton from "../../Button/SmallButton/SmallButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ReactModal from "react-modal";
ReactModal.setAppElement("#root")

const AdminLesson = ({Lesson,DeleteLesson}) =>
{
    const LessonId = Lesson.Id
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const Navigate = useNavigate()

    const OpenLesson = (e) =>{
        e.preventDefault()
        Navigate("/AdminExercisePage",{state : {Lesson:Lesson}})
    }

    const ModalState = () =>{
        setModalIsOpen(!modalIsOpen)
    }

    const DeleteLessonAxios = (e) =>{
        e.preventDefault()
        axios
        .delete("api/Lesson/DeleteLesson",{params:{id:LessonId}})
        .then(response=>
            {
            if (response.status === 200) {
              DeleteLesson(Lesson)
            }})
            .catch(error=>{
                console.log(error)
            })
        ModalState()
    }


    return(
        <div className={Classes.Lesson}>
            <p>Назва уроку: {Lesson.LessonName}</p>
            <p>Опис уроку: {Lesson.LessonDescription}</p>
            <BigButton style={{marginLeft:"auto",marginRight:"auto"}} onClick={OpenLesson}>Відкрити урок</BigButton>
            <div className={Classes.SmallButtonsPlace}>
                <SmallButton onClick={ModalState} style={{width:"40%"}}>Видалити</SmallButton>
                <SmallButton style={{width:"40%"}}>Редагувати</SmallButton>
                <ReactModal style={{overlay:{width:"630px",height:"230px",marginRight:"auto",marginLeft:"auto",marginTop:"150px"}}} isOpen={modalIsOpen} onRequestClose={ModalState}>
                    <h2>Ви впевнені що хочете видалити елемент?</h2>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"0 10px 0 10px"}}>
                    <SmallButton onClick={DeleteLessonAxios}>Так</SmallButton>
                    <SmallButton onClick={ModalState}>Ні</SmallButton>
                    </div>
                </ReactModal>
            </div>
            
        </div>
    )
}

export default AdminLesson