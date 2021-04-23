import React from "react"

function Navbar(){
    const firstName = "Dwight"
    const lastname = "Schrute"
    return (
        /*<nav>
                <h3>Parent/child nested components</h3>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
        </nav>*/
        //curly braces indecates javascript
        <div>
            <header className="navbar">Hello {firstName + " " + lastname}!</header>
        </div>
    )
}
export default Navbar