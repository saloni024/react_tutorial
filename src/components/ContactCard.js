import React from "react"

/*function ConatctCard(props){
    //props.contact.imgUrl if passing the object
    return (
            <div className="contact-card">
            <img src={props.imgUrl} alt={props.imgAlt} height="80px"></img>
            <h4>{props.name}</h4>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}*/

class ContactCard extends React.Component{
    constructor(){//to initialize values
        super()//gets components from React.Component, always add it in constructor
        this.state = {isLoggedIn: true}//state object, add always
    }
    render(){
        let status = ""
        if(this.state.isLoggedIn){
            status = "in"
        }
        else{
           status = "out"
        }
        return (
                <div className="contact-card">
                <img src={this.props.contact.imgUrl} alt={this.props.contact.imgAlt} height="80px"></img>
                <h4>{this.props.contact.name}</h4>
                <p>Phone: {this.props.contact.phone}</p>
                <p>Email: {this.props.contact.email}</p>
                <p>Status: logged {status}</p>
            </div>
        )
    }
}

export default ContactCard