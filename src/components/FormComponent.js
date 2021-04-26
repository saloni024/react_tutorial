import React from "react"

function FormComponent(props){
    return(
        <form>
                <input type="text" name="firstName" value={props.data.firstName} placeholder="First name" onChange={props.handleChange}/>
                <input type="text" name="lastName" value={props.data.lastName} placeholder="Last name" onChange={props.handleChange}/>
                <input type="text" name="message" value={props.data.message} placeholder="Message" onChange={props.handleChange}/><br></br>

                <input type="checkbox" name="coworker" value={props.data.coworker} checked={props.data.coworker} onChange={props.handleChange}/>Co-worker
                <input type="checkbox" name="friend" value={props.data.friend} checked={props.data.friend} onChange={props.handleChange}/>Friend
                <input type="checkbox" name="relative" value={props.data.relative} checked={props.data.relative} onChange={props.handleChange}/>Relative<br></br>

                <input type="radio" name="gender" value="Male" checked={props.data.gender === "Male"} onChange={props.handleChange}/>Male
                <input type="radio" name="gender" value="Female" checked={props.data.gender === "Female"} onChange={props.handleChange}/>Female<br></br>
                
                <select value={props.data.department} onChange={props.handleChange} name="department">
                    <option value="">Select Department</option>
                    <option value="Sales">Sales</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Customer Service">Customer Service</option>
                </select>
                
                <h4 hidden={props.data.firstName === "" && true}>{props.data.firstName} {props.data.lastName}' message: {props.data.message}</h4>
                <h4>{props.data.gender} {props.data.coworker && "Co-worker"} {props.data.friend && "Friend"} {props.data.relative && "Relative"} {props.data.department}</h4>
            </form>
    )
}

export default FormComponent