import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    var[input,setInput]=useState({
        name:'',
        grade:''
    })

    const inputhandler =(e) =>
    {
        const{name,value}=e.target
        setInput({...input,[name]:value})
    }

    const redvalues=() =>{
        axios.post(" http://localhost:3000/posts",input)
        .then(response=>{
            alert('succesfull')
        })
        .catch(err=>console.log(err))

    }
  return (
    <div>
      <br/>
      <br/>
      <TextField label='name' name='name' value={input.name} onChange={inputhandler}></TextField>
      <br/>
      <br/>
      <TextField label='grade' name='grade' value={input.grade} onChange={inputhandler}></TextField>
      <br/>
      <br/>
      <Button variant='contained' color='inherit' onClick={redvalues}>Submit</Button>
    </div>
  )
}

export default Add