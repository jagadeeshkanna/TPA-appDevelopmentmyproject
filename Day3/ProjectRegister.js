
import { Button, TextField } from '@mui/material';
import React,{ useState,Link} from 'react';
import './ProjectRegister.css';
function ProjectRegister() {

   const [ email,setEmail ] = useState('')
   const[Password,setPassword] = useState('')
   const [confirmpassword,setConfirmpassword]= useState('')
   
   const app=()=>{
    if(email.length===0)
    {
      return alert("Fill Email");
    }
    
    if(email.length<6)
    {
      return alert("character of name should be greater than 6");
    }
    else if(Password.length===0)
    {
      return alert("Fill Password");
    }
    else if(confirmpassword.length===0)
    {
      return alert("Fill confirm Password");
    } 
    else 
    {
        return alert("Successfully Registered");
    }
   }
  
  return (
      <body className='zz'>
    <div className='n'>
        <h2>Registration</h2>
        <br></br>
        <br></br>

        <TextField variant="outlined" label="Name"/>
        <br></br>
        <br></br>
        <TextField variant="outlined" label="Email"  value={email} onChange={(e) => setEmail(e.target.value) } />
        <br></br>
        <br></br>
        <br></br>
        <TextField variant="outlined" label="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <br></br>
        <br></br>
        <TextField variant="outlined" label ="ConfirmPassword" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
        <br></br>
        <br></br>
        <br></br>
        <TextField variant="outlined" label ="Date of Birth"/>
        <br></br>
        <br></br>
        <TextField variant="outlined" label ="Location"/>
        <br></br>
        <br></br>
        {/* <Link to='/ProjectHome'> */}
          <Button variant="contained"  className="submitButton" onClick={app}>Submit</Button>
          {/* </Link> */}
    </div>
      </body>
  )
  }

export default ProjectRegister