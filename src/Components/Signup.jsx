import React, { useState } from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'

function Signup() {
    var navigate=useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [number,setNumber]=useState("")
    const [password,setPassword]=useState("")

    async function handleSignup(e){
        e.preventDefault();
        if(!name || !email || !number || !password){
            alert("Fill the form")
        }else{
        const formData= {
            myName: name,
            myEmail:email,
            myNumber:number,
            myPassword:password,
        }
        var response= await fetch("https://68756de5814c0dfa653888de.mockapi.io/api/users" , {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if(response.ok){
            alert("Created Account Successfully")
            setName("")
            setEmail("")
            setNumber("")
            setPassword("")
            navigate("/login")
        }else{
            alert("Failed to create the account")
        }
    }
}
  return (
    <div>
   
      <form id='form' onSubmit={handleSignup} action="">
        <label htmlFor=''>Name: </label>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <label htmlFor=''>Email: </label>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label htmlFor=''>Phone: </label>
        <input type='number' value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
        <label htmlFor=''>Password: </label>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button>Sign Up</button>

      </form>
    </div>
  )
}

export default Signup