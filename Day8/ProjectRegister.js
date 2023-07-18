import React from 'react'
import { TextField,Button} from '@mui/material'
import './ProjectRegister.css'
import {Link} from 'react-router-dom'
function ProjectRegister() {
  return (
    <div>
        <body className='zz'>
        <center>
    <div className='n'>
        <h2>Registration</h2>
        <br></br>
        <br></br>
        <TextField variant="outlined" label="Name"/>
        <br></br>
        <br></br>
        <TextField variant="outlined" label="Email"  />
        <br></br>
        <br></br>
        <br></br>
        <TextField variant="outlined" label="Password" />
        <br></br>
        <br></br>
        <br></br>
        <TextField variant="outlined" label ="ConfirmPassword"  />
        <br></br>
        <br></br>
        <br></br>
        <TextField variant="outlined" label ="Date of Birth"/>
        <br></br>
        <br></br>
        <TextField variant="outlined" label ="Location"/>
        <br></br>
        <br></br>
  <Link to='/ProjectHome'><Button variant="contained"  className="submitButton">Submit</Button></Link>  
        </div>
        </center>
      </body> 
    </div>


  )
}

export default ProjectRegister