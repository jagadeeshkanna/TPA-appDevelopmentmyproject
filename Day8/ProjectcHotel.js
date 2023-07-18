import React from 'react'
import { AppBar,TextField,Button} from '@mui/material'
import {Link} from 'react-router-dom'
import './ProjectcHotel.css'
function ProjectcHotel() {
  const handles=()=>
  {
    return alert("Thank you for Booking");
  }
  return (
    <div>
        <AppBar>
        <h2><center>Hotel Booking</center></h2>
        </AppBar>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <body className='ul'>
        <div className='bo'>
            <br></br>
        <center>
        <form>
        <label>First_name</label> 
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" className='la' required></input>
       
        <br></br>
        <br></br>
        <br></br>
        <label>Last_name</label>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  className='la'required></input>
       
        <br></br>
        <br></br>
        <br></br>
        <label>Email</label>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  className='la' required></input>
       
        <br></br><br></br>
        <br></br>
        <label>Room Type</label>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  className='la' required></input>
      
        <br></br><br></br>
        <br></br>
        <label>Number of Guests</label>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  className='la' placeholder='ex:5' required></input>
      
        <br></br>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>Arrival Date & Time</label>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  className='la' placeholder='dd-mm-yyyy' required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="time"  className='la' required></input>
      
        <br></br>
        <br></br>
        <br></br>
        <label>Departure Date </label>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  className='la' placeholder='dd-mm-yyyy' required></input>
      
        <br></br>
        <br></br>
        <br></br>
        <label>Free Pickup?</label>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <input type="radio"  value="Yes Please!-Pick me up on arrival" required></input>  &nbsp;<label for="html">Yes</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" value="No Thanks-I'll make my own way there" required></input>&nbsp;<label for="html">No</label>
      
        <br></br>
        <br></br>
        <br></br>
        <label>Flight Number</label>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" className='la' required></input>
      
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>Special Request</label>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <textarea id="text" rows="6" cols="40"   placeholder='Type here' required></textarea>
        <br></br>
        <br></br>
        <br></br>
        <Link to = '/ProjectPayment'><Button variant="contained" onclick={handles} className="submitButton">Book</Button></Link>
       </form>
</center>
<br></br>
<br></br>
</div>
</body>
    </div>
  )
}
export default ProjectcHotel