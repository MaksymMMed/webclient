import Classes from "./AdminVoiceExercise.module.css"
import { React,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactModal from "react-modal";
import SmallButton from "../../../Button/SmallButton/SmallButton";


const AdminVoiceExercise = ({Exercise,DeleteVoiceExercise}) =>{
    const [lessonData,setLessonData] = useState(JSON.parse(localStorage.getItem("AdminLessonData")))
    const [_Exercise,setExercise] = useState(Exercise)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const Navigate = useNavigate()

    const ModalState = () =>{
        setModalIsOpen(!modalIsOpen)
    }

    const DeleteVoice = (e) =>{
        e.preventDefault()
        axios
        .delete("api/VoiceExercise/DeleteVoiceExerciseById",{params:{id:Exercise.Id}})
        .then(response=>
            {
            if (response.status === 200) {
                var _Voice = lessonData.VoiceExercises.filter(p=>p.Id !== _Exercise.Id)
                lessonData.VoiceExercises = _Voice
                localStorage.setItem("AdminLessonData", JSON.stringify(lessonData));
                ModalState()
                DeleteVoiceExercise(_Exercise)
    
            }})
            .catch(error=>{
                console.log(error)
            })
        }

    return(
        <div className={Classes.Exercise} style={{padding:"1px 0 5px 5px"}}>
            <p>Name : {_Exercise.Name}</p>
            <p>Question : {_Exercise.TextToSay}</p>
            <p>Answer : {_Exercise.Answer}</p>
            {
                _Exercise.Type === 0 
                ?
                <p>Type : Listen</p> 
                :
                <p>Type : Repeat</p> 
            }
            <div className={Classes.SmallButtonsPlace}>
                <SmallButton onClick={ModalState} style={{width:"40%"}}>Видалити</SmallButton>
                <SmallButton style={{width:"40%"}} onClick={() => Navigate("/UpdateGrammar",{state:_Exercise})}>Редагувати</SmallButton>
                <ReactModal style={{overlay:{width:"630px",height:"230px",marginRight:"auto",marginLeft:"auto",marginTop:"150px"}}} isOpen={modalIsOpen} onRequestClose={ModalState}>
                    <h2>Ви впевнені що хочете видалити елемент?</h2>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"0 10px 0 10px"}}>
                    <SmallButton onClick={DeleteVoice}>Так</SmallButton>
                    <SmallButton onClick={ModalState}>Ні</SmallButton>
                    </div>
                </ReactModal>
            </div>
        </div>
    )
}

export default AdminVoiceExercise