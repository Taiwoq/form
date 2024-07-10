import React from 'react'

// Step1:import the useState from react
import { useState } from 'react'
import State from './components/State'
import Form from './components/Form'
import Register from './components/Register'

const App = () => {
  // Step2:Create state variables and a function
  const [nameState, setNameState] = useState("Taiwo") 
  const [jobTittleState, setJobTittleState ] = useState("upcoming Artiste")
  const  [locationState, setLocationState ] = useState("I came from the Gutters")
  const meetApostle = () => {
    setNameState("Taiwocello")
    setJobTittleState("Superstar")
    setLocationState("I now live in London")
  }
  return (
    <>
    <div>
      <h1>Hello my name is {nameState}, I am an {jobTittleState} and i play the Cello and i came from the {locationState} </h1>


      <button onClick={meetApostle} className='border ring rounded p-1'>Meet Apostle</button>

    </div>
    <br />
    <State/><br />
    <div>
    <Form/>
    <Register/>
    </div>
    </>

  )
}

export default App