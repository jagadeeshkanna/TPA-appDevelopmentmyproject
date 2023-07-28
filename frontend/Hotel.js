// import './RegistrationForm.css'
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { AppBar } from '@mui/material';

// const Hotel = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();

//     // Create an object with the form data
//     const formData = {
//       First_Name: First_Name,
//       Last_Name: Last_Name,
//       Email: Email,
//       Room_Type: Room_Type,
//       Number_of_Guests:  Number_of_Guests,
//       Arrival_Date:Arrival_Date;
//       Arrival_Time:Arrival_Time;
//       Depature_Date: Depature_Date;
//       Free_Pickup: Free_Pickup;
//       Flight_Number: Flight_Number;
//       Special_Request:  Special_Request;
//     };

//     // Make a POST request to the backend endpoint
//     axios.post('http://127.0.0.1:8080/post', formData)
//     axios.get('http://127.0.0.1:8080/get',formData)
    

//       // .then(response => {
//       //   // Handle the response (if needed)
//       //   console.log('Registration successful:', response.data);
//       // })
//       // .catch(error => {
//       //   // Handle errors (if needed)
//       //   console.error('Registration failed:', error);
//       // });


//     // Reset form fields
//     setFirst_Name('');
//     setLast_Name('');
//     setEmail('');
//     setRoom_Type('');
//     setNumber_of_Guests('');
//     setArrival_Date('');
//     setDepature_Date('');
//     setFree_Pickup('');
//     setFlight_Number('');
//     setSpecial_Request('');

//   };

//   return (
//     <div className='hi'>
//       <center>
//     <form onSubmit={handleSubmit}>
//       <AppBar><h2>Registration Form</h2></AppBar>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <br></br>
//         <input
//           type="text"
//           id="name"
//           value={First_Name}
//           onChange={e => setFirst_Name(e.target.value)}
//           required
//         />
//         <br></br>
//       <br></br>
//       <br></br>
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <br></br>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           required
//         />
//           <br></br>
//       <br></br>
//       <br></br>
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <br></br>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           required
//         />
//           <br></br>
//       <br></br>
//       <br></br>
//       </div>
//       <div>
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <br></br>
//         <input
//           type="password"
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={e => setConfirmPassword(e.target.value)}
//           required
//         />
//           <br></br>
//       <br></br>
//       <br></br>
//       </div>
//        <Link to='/ProjectHome'><button type="submit">Register</button></Link>
//        <br></br><br></br>
//        <br></br>
//     </form>
//     </center>
//     </div>
//   );
// };

// export default Hotel;


import React,{Component} from 'react';
//import './Re.css'
import axios from 'axios';
import './Hotel.css';
class Hotel extends Component{
    constructor(props){
        super(props);
        this.state={
           
            fname:'',
            maila:'',
            rtype:'',
            nguest:'',
            adate:'',
            atime:'',
            fpickup:'',
            fnumber:'',
            srequest:'',

            
        };
    }

    handleFNameChange=(event)=>{
        this.setState({fname:event.target.value})
    };
    handleEmailChange=(event)=>{
        this.setState({maila:event.target.value})
    };
    handleRTypeChange=(event)=>{
        this.setState({rtype:event.target.value})
    };
    handleNGuestChange=(event)=>{
        this.setState({nguest:event.target.value})
    };
    handleADateChange=(event)=>{
        this.setState({adate:event.target.value})
    };
    handleATimeChange=(event)=>{
        this.setState({atime:event.target.value})
    };
    handleFPickupChange=(event)=>{
        this.setState({fpickup:event.target.value})
    };
    handleFNumberChange=(event)=>{
        this.setState({fnumber:event.target.value})
    };
    handleSRequestChange=(event)=>{
        this.setState({srequest:event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          fname:this.state.fname,
          maila:this.state.maila,
          rtype:this.state.rtype,
          nguest:this.state.nguest, 
          adate:this.state.adate, 
          atime:this.state.atime, 
          fpickup:this.state.fpickup, 
          fnumber:this.state.fnumber, 
          srequest:this.state.srequest,
        };
        
//         //http://localhost:8080/postm
//      axios.post('http://localhost:8080/postho',data)
//     //     .then( alert("Successfully Registrated"))
// console.log(data);
    //http://localhost:8080/postm
    axios.post('http://localhost:8082/api/v1/user/postho',data)
    
       //  .then( alert("Successfully Registrated"))
console.log(data);
   
//    Jaggu = () => {
//              alert("successfully send");
//    }

    }
    render(){
        return ( 
            <body className='body12'>
                <div className='rebox'>

              <center>
            <div className='container'>
            <form onSubmit={this.handleSubmit}>
                <body className='mn'>
                <h1>Registration Form</h1>
                
                    <p>First_Name</p>
                    <input type="text" id='un' value={this.state.fname}
                        onChange={this.handleFNameChange} className='reinput36' required/><br></br>
            

                    <p>Email</p>
                    <input type="maila" id='em'  value={this.state.maila}
                        onChange={this.handleEmailChange} className='reinput36' required/><br></br>

                    <p>Room_Type</p>
                    <input type="text" id='pwd'  value={this.state.rtype}
                        onChange={this.handleRTypeChange} className='reinput36' required/><br></br>

                    <p>Number_of_Guests</p>
                    <input type="text" id='d'  value={this.state.nguest}
                        onChange={this.handleNGuestChange} className='reinput36' required/><br></br>

                    <p>Arrival_Date</p>
                    <input type="Date" id='pwd' value={this.state.adate}
                        onChange={this.handleADateChange} className='reinput36' required/><br></br>

                    <p>Arrival_Time</p>
                    <input type="time" id='p' placeholder='ex:qwS12#$' value={this.state.atime}
                        onChange={this.handleATimeChange} className='reinput36' required/><br></br>
                        
                    <p>Free_Pickup?</p>
                    <input type="text" id='c' placeholder='ex:qwS12#$' value={this.state.fpickup}
                        onChange={this.handleFPickupChange} className='reinput36' required/><br></br>

                    <p>Flight_Number</p>
                    <input type="text" id='c' placeholder='ex:qwS12#$' value={this.state.fnumber}
                        onChange={this.handleFNumberChange} className='reinput36' required/><br></br>

                    <p>Special_Request</p>
                    <input type="text" id='w' placeholder='ex:qwS12#$' value={this.state.srequest}
                        onChange={this.handleSRequestChange} className='reinput36' required/><br></br><br></br>


                 <button class="button-64" role="button"><span class="text">Submit</span></button>
                 <br></br>
                 <br></br>
            </body>
               
            </form>
            </div>
            </center>
                </div>
            </body>
         );
    }
}

export default Hotel