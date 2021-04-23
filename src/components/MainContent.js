import React from "react"
import ContactCard from "./ContactCard"

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
    
    
    return(
        <main className="main">
            <p style={/*{color: "navy", textDecoration: "underline"}*/styles}>Good {`${timeOfDay} :) `}<br></br>It is currently about {hours % 12} o'clock!</p>
            <div className="contact-list">
                <h3>Contact List</h3>
                <ContactCard 
                    name="Dwight K. Schrute"
                    imgUrl="dwightPic.jpg"
                    imgAlt="Dwight Schrute"
                    phone="416-111-2222"
                    email="dwightkurt.schrute@schrutefarms.com"
                />
                <ContactCard 
                    name="James 'Jim' Duncan Halpert"
                    imgUrl="jimPic.jpg"
                    imgAlt="Jim Halpert"
                    phone="416-333-4444"
                    email="jimhalpert@gmail.com"
                />
                <ContactCard 
                    name="Pamela 'Pam' Morgan Beesly"
                    imgUrl="pamPic.jpg"
                    imgAlt="Pam Beesly"
                    phone="416-555-6666"
                    email="pambeesly@gmail.com"
                />
                <ContactCard 
                    name="Micheal Gary Scott"
                    imgUrl="michealPic.jpg"
                    imgAlt="Micheal Scott"
                    phone="416-777-8888"
                    email="michealscott@dundermifflin.com"
                />
            </div>
        </main>
    )
}

export default MainContent