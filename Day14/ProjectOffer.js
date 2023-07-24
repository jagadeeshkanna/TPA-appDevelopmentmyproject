import { TextField,Button,AppBar} from '@mui/material'
import React from 'react'

function ProjectOffer() {
  
  const handle = () =>
  {
     

  }
  return (
    <div>
      <center>
      <AppBar><h2>Discount</h2></AppBar>
      <br></br><br></br>
      <br></br>
      <br></br><br></br>
      <br></br>
      <br></br><br></br>
      <br></br>
        <h3>Enter the Amount:</h3>
        <br></br>
        <TextField variant="outlined" label="Amount" required/>
        <br></br>
        <br></br>
        <Button variant="contained"  className="submitButton" onClick= {handle}>Calculate</Button>
        <br></br><br></br>
      <br></br>
        <h3>Amount to pay:</h3>
        <br></br>
        <TextField variant="outlined" label="Amount" />
        </center>
    </div>
  )
}

export default ProjectOffer