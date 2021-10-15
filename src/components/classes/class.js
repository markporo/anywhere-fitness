// 7. Authenticated user can reserve a spot in a 
//class with available seats open.

//import react, { useState } from "react";
import { useHistory } from "react-router";
import "../../App.css"


export default function Class(props) {
    const history = useHistory();

    const classId = props.class.id;

    const handleJoin = () => {

    }

    const linkToChosenClass = () => {
        history.push(`/details/${classId}`);
    }


    return (
        <div className="classCard">
            <h2>{props.class.name}</h2>
            <img src={props.class.img} alt="coolImage" />
            <p>{props.class.date} {props.class.time}</p>
            <button onClick={handleJoin} className='classButton'>Join Class</button>
            <button onClick={linkToChosenClass} className='detailsButton'>See Details</button>
        </div>
    )
}

// join button or cancel reservation button

// if user is already joined then show cancel button