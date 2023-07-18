import { AppBar,TextField,Button} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import './ProjectPayment.css'
function ProjectPayment() {
  return (
    <div>
        <AppBar><center><h1>PAYMENTS</h1></center></AppBar>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='pa'>
        <center>
        <b><TextField variant="outlined" label="Name" required/></b>
        <br></br>
        <br></br>
        <br></br>
        <TextField variant="outlined" label="Password" required/>
        <br></br>
        <br></br>
        <br></br>
        <TextField variant="outlined" label="Pin" required/>
        <br></br>
        <br></br>
        <br></br>
        <TextField variant="outlined" label="Exp Date" required/>
        &nbsp; &nbsp;&nbsp;
        <TextField variant="outlined" label="Cvv" required/>
        <br></br>
        <br></br>
        <br></br>
        <TextField variant="outlined" label="Exp year" required></TextField>
        <br></br>
        <br></br>
        <br></br>
        <Link to ='/ProjectHome'><Button variant="contained"  className="submitButton">Pay</Button></Link>
        </center>
        </div>
    </div>
  )
}

export default ProjectPayment