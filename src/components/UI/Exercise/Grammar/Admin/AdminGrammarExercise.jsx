import React, { useState } from "react";
import Classes from "./AdminGrammarExercise.module.css"
import ReactModal from "react-modal";
import SmallButton from "../../../Button/SmallButton/SmallButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminGrammarExercise = ({Exercise,DeleteGrammarExercise}) =>{
    
    const [_Exercise,setExercise] = useState(Exercise)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const Navigate = useNavigate()
    const ExerciseId = _Exercise.Id

    const ModalState = () =>{
        setModalIsOpen(!modalIsOpen)
    }

    const DeleteGrammar = (e) =>{
        e.preventDefault()
        axios
        .delete("api/GrammarExercise/DeleteGrammarExerciseById",{params:{id:ExerciseId}})
        .then(response=>
            {
            if (response.status === 200) {
            }})
            .catch(error=>{
                console.log(error)
            })
            DeleteGrammarExercise(Exercise)

        ModalState()
    }

    return(
        <div style={{padding:"1px 0 5px 5px"}} className={Classes.Exercise}>
            <p>Name : {_Exercise.Name}</p>
            <p>Question : {_Exercise.Question}</p>
            <p>Answer : {_Exercise.Answer}</p>
            <p>Variables : {_Exercise.Variables.map(x=>x.concat(" "))}</p>
            <div className={Classes.SmallButtonsPlace}>
                <SmallButton onClick={ModalState} style={{width:"40%"}}>Видалити</SmallButton>
                <SmallButton style={{width:"40%"}} onClick={() => Navigate("/UpdateGrammar",{state:_Exercise})}>Редагувати</SmallButton>
                <ReactModal style={{overlay:{width:"630px",height:"230px",marginRight:"auto",marginLeft:"auto",marginTop:"150px"}}} isOpen={modalIsOpen} onRequestClose={ModalState}>
                    <h2>Ви впевнені що хочете видалити елемент?</h2>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"0 10px 0 10px"}}>
                    <SmallButton onClick={DeleteGrammar}>Так</SmallButton>
                    <SmallButton onClick={ModalState}>Ні</SmallButton>
                    </div>
                </ReactModal>
            </div>
        </div>
    )

}

export default AdminGrammarExercise