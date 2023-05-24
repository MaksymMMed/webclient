import React from "react";
import Classes from "./AdminTranslateExercise.module.css"
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SmallButton from "../../../Button/SmallButton/SmallButton";
import ReactModal from "react-modal";

const AdminTranslateExercise = ({Exercise,DeleteTranslateExercise}) =>{


    const [LessonData,setLessonData] = useState(JSON.parse(localStorage.getItem("AdminLessonData")))
    const [_Exercise,setExercise] = useState(Exercise)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const Navigate = useNavigate()

    const ModalState = () =>{
        setModalIsOpen(!modalIsOpen)
    }

    const DeleteTranslate = (e) =>{
        e.preventDefault()
        axios
        .delete("api/TranslateExercise/DeleteTranslateExerciseById",{params:{id:Exercise.Id}})
        .then(response=>
            {
            if (response.status === 200) {
                DeleteTranslateExercise(Exercise)
                var _Translate = LessonData.TranslateExercises.filter(p=>p.Id !== _Exercise.Id)
                LessonData.TranslateExercises=_Translate
                localStorage.setItem("AdminLessonData", JSON.stringify(LessonData));
                ModalState()
            }})
            .catch(error=>{
                console.log(error)
            })
                
    }

    return(
        <div style={{padding:"1px 0 5px 5px"}} className={Classes.Exercise}>
            <p>Name : {_Exercise.Name}</p>
            <p>Question : {_Exercise.Question}</p>
            <p>Answer : {_Exercise.Answer}</p>
            <div className={Classes.SmallButtonsPlace}>
                <SmallButton onClick={ModalState} style={{width:"40%"}}>Видалити</SmallButton>
                <SmallButton style={{width:"40%"}} onClick={() => Navigate("/UpdateGrammar",{state:_Exercise})}>Редагувати</SmallButton>
                <ReactModal style={{overlay:{width:"630px",height:"230px",marginRight:"auto",marginLeft:"auto",marginTop:"150px"}}} isOpen={modalIsOpen} onRequestClose={ModalState}>
                    <h2>Ви впевнені що хочете видалити елемент?</h2>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"0 10px 0 10px"}}>
                    <SmallButton onClick={DeleteTranslate}>Так</SmallButton>
                    <SmallButton onClick={ModalState}>Ні</SmallButton>
                    </div>
                </ReactModal>
                
            </div>
        </div>
    )
}

export default AdminTranslateExercise