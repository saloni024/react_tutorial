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
        <header className="navbar">Hello {firstName + " " + lastname}!</header>//curly braces indecates javascript
    )
}
export default Navbar