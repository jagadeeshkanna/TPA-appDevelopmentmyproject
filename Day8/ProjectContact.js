import { AppBar,Box,TextField,Button} from '@mui/material'
import React from 'react'
import './ProjectContact.css'
function ProjectContact() {
  const handleSubmit =()=> {
    
    return alert("Your response has been recorded,if any queries it will be rectified soon");
  }
  return (
    <div className='do'>
        <AppBar><center><h1>Contact</h1></center></AppBar>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='con'>
            <center>
           <TextField variant="outlined" label="FirstName" required/>
           <br></br>
            <br></br>
            <br></br>
           <TextField variant="outlined" label="LastName" required/>
           <br></br>
            <br></br>
            <br></br>
           <TextField variant="outlined" label="Phoneno" required/>
           <br></br>
            <br></br>
            <br></br>
           <TextField variant="outlined" label="Address" required/>
           <br></br>
            <br></br>
            <br></br>
               <TextField variant='outlined' label="subject" required/>
           <br></br>
           <br></br>
           <br></br>
           <Button variant="contained" onClick={handleSubmit} className="submitButton">Submit</Button>
           <br></br>
        <br></br>
       
           </center>
          </div>
        </div>

  )
}

export default ProjectContact