import React from "react"
import ContactCard from "./ContactCard"
import contactData from "./ContactData"

function MainContent(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    //initiating object
    const styles = {
        textDecoration: "underline"
    }

    if(hours < 12){
        timeOfDay = "morning"
        styles.color =  "navy" //setting object's property 
    }else if(hours >=12 && hours < 17){
        timeOfDay = "afternoon"
        styles.color = "yellow" 
    }else{
        timeOfDay = "evening"
        styles.color = "black"
    }
    //put 2 curly braces while doing inline css cause 1st for Javascript object 2nd for javascript component inside JSX code...no dash use Camel case in properties
    const contactComponent = contactData.map(data => <ContactCard key={data.id} contact={data}/>)
    
    return(
        <main className="main">
            <p style={/*{color: "navy", textDecoration: "underline"}*/styles}>Good {`${timeOfDay} :) `}<br></br>It is currently about {hours % 12} o'clock!</p>
            <div className="contact-list">
                <h3>Contact List</h3>
                {contactComponent}
            </div>
        </main>
    )
}

export default MainContent