import React from 'react'
import { TextField,Button,Avatar } from '@mui/material'
import './ProjectLogin.css';
 import {Link} from 'react-router-dom'
// import ProjectRegister from './ProjectRegister';
function ProjectLogin() {
  return (
   <body className='bj'>
    <center>
     <br/>
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
        <Link to ="/ProjectHome"><Button variant="contained"  className="submitButton">LOGIN</Button></Link>
        <br />
        <br />
        <Link to='/Register'><p>Don't have an account?</p></Link>
        <br/>
        <a href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSfn1krCPZXrtmxrsEra87nc-ObS5BNKpYG42gbfO5crGWKjRg%2Fviewform%3Fusp%3Dsend_form&service=wise&flowName=GlifWebSignIn&flowEntry=AccountChooser"><Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJU49GdBbZk1UboA2Ohj98gdfkiaON3cKV9RTL6rLGVLCjNMmSG-QSS5Bk3XTKl1EEGSM&usqp=CAU"></Avatar></a>
    </div>
    </center>
    </body>
  )
}

export default ProjectLogin