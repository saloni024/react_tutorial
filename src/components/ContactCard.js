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
        this.ChangeState = this.ChangeState.bind(this) //binds the method with the class, compulsory
    }
    ChangeState(){
        this.setState(prevState => {
            return {
                isLoggedIn: prevState.isLoggedIn ? false : true
            }
        })
    }
    render(){
        let status = ""
        let update = ""
        if(this.state.isLoggedIn){
            status = "in"
            update = "out"
        }
        else{
           status = "out"
           update = "in"
        }
        return (
                <div className="contact-card">
                <img src={this.props.contact.imgUrl} alt={this.props.contact.imgAlt} onClick={() => DisplayName(this.props.contact)}height="80px"></img>
                <h4>{this.props.contact.name}</h4>
                <p>Phone: {this.props.contact.phone}</p>
                <p>Email: {this.props.contact.email}</p>
                <p>Status: logged {status}</p>
                <button onClick={this.ChangeState}>Log {update}</button>
            </div>
        )
    }
}

function DisplayName(props){
    return(
        console.log(props.name)
    )
}



export default ContactCard