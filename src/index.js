import React from "react"
import ReactDOM from "react-dom"

//ReactDOM and JSX
ReactDOM.render(<div><h1>Hello world</h1><p>This is paragraph!</p></div>,document.getElementById("root"))

var newP = document.createElement("p")
newP.setAttribute("id","newP")
newP.innerHTML = "This is a new paragraph."
document.getElementById("root").appendChild(newP)


//Functional components
function MyList(){ //prefer capital camel casing in naming convention
    return (
        <div>Series list: 
            <ul>
                <li>The office</li>
                <li>Brooklyn 99</li>
                <li>Suits</li>
            </ul>
        </div>
    )
}
ReactDOM.render(<MyList/>, document.getElementById("newP"))