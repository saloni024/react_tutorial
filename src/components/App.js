import React from "react"
import Footer from "./Footer"

function App(){
    return (
        <div>
            <nav>
                <h3>Parent/child nested components</h3>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </nav>
            <main>
                <p>This is where most of the content will go</p>
            </main>
            <Footer />
        </div>
    )
}

export default App