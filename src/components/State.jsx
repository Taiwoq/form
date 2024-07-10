import React, { useState } from 'react'

const State = () => {
    const [nameState, setNameState] = useState(" Mr Bambo")
    const [companyState, setCompanyState ] = useState("cocoa farm")
    const [familyState, setFamilyState ] = useState("1 wife 2 kids")
    const coronation = () => {
        setNameState("Prince Bambo the first") 
        setCompanyState("a City")
        setFamilyState("4wives and 25kids")
    }
  return (
    <>
    <p>I am {nameState}, I run {companyState}, I have {familyState} </p>
    <button onClick={coronation} className='border ring rounded p-1'>Coronation</button>

    </>
  )
}

export default State