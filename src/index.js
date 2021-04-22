import React from "react"
import ReactDOM from "react-dom"

import MyList from "./components/MyList"
import MyInfo from "./components/MyInfo" //look for the library from the current directory [it's okay to not put .js]
import App from "./components/App"

//ReactDOM and JSX
ReactDOM.render(<div><h1>Hello world</h1><p>This is paragraph!</p></div>,document.getElementById("root"))

//Functional components
var p1 = document.createElement("p")
p1.setAttribute("id","p1")
document.getElementById("root").appendChild(p1)

ReactDOM.render(<MyList/>, document.getElementById("p1"))

//Functional components practice
var p2 = document.createElement("p")
p2.setAttribute("id","p2")
document.getElementById("root").appendChild(p2)

ReactDOM.render(<MyInfo/>, document.getElementById("p2"))

//parent/child nested component
var p3 = document.createElement("p")
p3.setAttribute("id","p3")
document.getElementById("root").appendChild(p3)

ReactDOM.render(<App />, document.getElementById("p3"))