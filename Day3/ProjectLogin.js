import React from 'react'
import { TextField,Button,Avatar } from '@mui/material'
import './ProjectLogin.css';
import {Link} from 'react-router-dom'
function ProjectLogin() {
  return (
   <body className='bbb'>
    <center>
     <br></br>
     <br></br>
    <div className='Lo'>
        <h3>LOGIN</h3>
        <div className='gi'><Avatar src="https://img.freepik.com/free-icon/businessman_318-489757.jpg?w=2000"></Avatar></div>
        <br></br>

        <TextField variant="outlined" label="Email" required/>
        <br></br>
        <br></br>
        <br></br>
        <TextField variant="outlined" label="Password" type="password" required/>
        <br></br>
        <br></br>
        <br></br>
        <Button variant="contained"  className="submitButton">LOGIN</Button>
        <br></br>
        <br></br>

        {/* <Link to='/ProjectRegister'><h5> */}
          <h5>Forgot Your Password?</h5>
          {/* </Link>  */}
        <h3><Avatar src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"></Avatar></h3>
        <h3><Avatar src="https://static.vecteezy.com/system/resources/previews/017/221/797/non_2x/facebook-logo-transparent-background-free-png.png"></Avatar></h3>
    </div>
   
    </center>
    </body>
  )
}

export default ProjectLogin