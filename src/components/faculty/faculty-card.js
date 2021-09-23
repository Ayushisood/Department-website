import React from 'react'
import "../Faculty.css";

function FacultyCard(props) {
    return (
        <div class="faculty__card">
            <div class="faculty__card_img">
                <img src={props.profImg} alt="avatar-img" />
            </div>
            <div class="faculty__card_details">
                <h1>{props.name}</h1>
                <p>{props.desg}</p>
                <button onClick={props.profLink}>View more</button>
            </div>
        </div>
    );
}

export default FacultyCard;
