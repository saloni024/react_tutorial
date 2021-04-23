import React from "react"

function ConatctCard(props){
    return (
        <div className="contact-card">
            <img src={props.imgUrl} alt={props.imgAlt} height="80px"></img>
            <h4>{props.name}</h4>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ConatctCard