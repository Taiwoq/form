import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [ emailState, setEmailState ] = useState("")
    const [ passwordState, setPasswordState] = useState("")
    const submitFORM = (e) => {e.preventDefault()
       const formData = {emailState,passwordState} 
       console.log(formData);
    }
  return (
    <div>
        <form onSubmit={submitFORM} className='border rounded bg-slate-100 w-[400px] p-2 mt-3 shadow  ' action="">
            <div className=' flex items-center justify-between'>
                <label htmlFor="email">
                    Email address :
                </label>
                <input value={emailState}
                       onChange={ (e) => setEmailState(e.target.value)}     
                 className='w-[270px] mb-2' type="email" name='email' placeholder='please enter your email' />
            </div>

            <div className='flex items-center justify-between'>
                <label htmlFor="password">
                    Password :
                </label>
                <input value={passwordState}
                        onChange={ (e) => setPasswordState(e.target.value)}
                  className='w-[270px] mb-2' type="password" name='password' placeholder='please enter your password' />
            </div>
            <button className='w-[150px] rounded-full mx-10 bg-black text-white hover:bg-gray-800 shadow'>Login</button>
        </form>
    </div>
  )
}

export default Form