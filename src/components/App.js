import React from "react"
import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Footer from "./Footer"


/*function App(){
    return (
        <div>
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    )
}*/

//if the class method has parameters use this.props to access
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true,
            swapiData: {}
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading: false
            }
        )}, 2500)

        fetch("https://swapi.dev/api/people/20/")//gets the data from url
            .then(response => response.json())
            .then(data => {
                this.setState({
                    swapiData: data
                })
            })
    }
    render(){
        if(this.state.isLoading){
            return(
                <div>
                    <h1>Pass on what you have learned.</h1>
                    <h1>-{this.state.swapiData.name}</h1>
                </div>
            )
        }
        return (
            <div>
                <Navbar />
                <MainContent />
                <Footer />
            </div>
        )
    }
    
/*
    static getDerivedStateFromProps(props, state){
        returns the new updated state based on props
    }
    getSnapshotBeforeUpdate(){
        //createa  backup of the current way things are
    }
    componentDidMount(){
        runs only one time in beginning
        get the data we need to correctly decide
    }
    componentWillReceiveProps(nextProps){
        checks for the upcoming/receiving components
        if(nextProps.whatever !== this.props.whatever){
            perform something
            --check if the receiving prop is different then current prop and performs according to that
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        //wheather the components need to change or not
        //return true or false
    }
    componentWillUnmount(){
        //cleans up before the code disappears
        //eg. removes event listeners
    }
*/
}

export default App