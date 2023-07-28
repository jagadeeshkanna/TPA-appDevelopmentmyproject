// import React,{Component} from 'react';
// //import './Re.css'
// import axios from 'axios';

//class Re extends Component{

//     constructor(props){
//         super(props);
//         this.state={
           
//             name:'',
//             email:'',
//             password:'',
//             confirmpassword:'',
//         };
//     }

//     handleNameChange=(event)=>{
//         this.setState({name:event.target.value})
//     };
//     handleEmailChange=(event)=>{
//         this.setState({email:event.target.value})
//     };
//     handlePasswordChange=(event)=>{
//         this.setState({password:event.target.value})
//     };
//     handleConfirmpasswordChange=(event)=>{
//         this.setState({confirmpassword:event.target.value})
//     };
    

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const data = {
//           name:this.state.name,
//           email:this.state.email,
//           password:this.state.password ,
//           confirmpassword:this.state.confirmpassword, 
//         };
        
//        axios.post('http://localhost:3000//post',data)
//         .then( alert("Successfully Registrated"))
//     }
//     render(){
//         return ( 
//             <body className='bodyre12'>
//                 <div className='rebox'>

//               <center>
//             <div className='container'>
//             <form onSubmit={this.handleSubmit}>
//                 <h1>Registration Form</h1>
                
//                     <p>Username</p>
//                     <input type="text" id='un' value={this.state.name}
//                         onChange={this.handleNameChange} className='reinput36'/><br></br>
//                     <p>Email</p>
//                     <input type="email" id='em'  value={this.state.email}
//                         onChange={this.handleEmailChange} className='reinput36'/><br></br>
                    
           
               
                
                    
//                     <p>Password</p>
//                     <input type="password" id='pwd'  value={this.state.password}
//                         onChange={this.handlePasswordChange} className='reinput36'/><br></br>
//                     <p>Confirmpassword</p>
//                     <input type="password" id='cpwd' placeholder='ex:qwS12#$' value={this.state.confirmpassword }
//                         onChange={this.handleConfirmpasswordChange} className='reinput36'/><br></br><br></br><br></br>
//                  <button class="button-64" role="button"><span class="text">Submit</span></button>
               
               
//             </form>
//             </div>
//             </center>
//                 </div>
//             </body>
//          );
//     }
// }

// export default Re








import './RegistrationForm.css'
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AppBar } from '@mui/material';
const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const formData = {
    name: name,
    email: email,
    password: password,
    confirmpassword: confirmPassword,
  };

  const handleSubmit = async(formData) => {

    // Create an object with the form data
   

    // // Make a POST request to the backend endpoint
    // // axios.post('http://127.0.0.1:8080/post', formData)
    // // axios.get('http://127.0.0.1:8080/get',formData)
    // await axios.post('http://localhost:8080/postm', formData);

    //   // .then(response => {
    //   //   // Handle the response (if needed)
    //   //   console.log('Registration successful:', response.data);
    //   // })
    //   // .catch(error => {
    //   //   // Handle errors (if needed)
    //   //   console.error('Registration failed:', error);
    //   // });


    // // Reset form fields
    // setName('');
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');

    try {
      // Make a POST request to the backend endpoint

     await axios.post('http://localhost:8080/postm', formData);

      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } 
    catch (error) {
      console.error('Registration failed:', error);
    }
  };


  return (
    <div className='h111'>
      <center>
    <form onSubmit={handleSubmit}>
      <AppBar><h2>Registration Form</h2></AppBar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <label htmlFor="name">Name:</label>
        <br></br>
        <br></br>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          size="30" required
        />
        <br></br>
      <br></br>
      <br></br>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <br></br>
        <br></br>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          size="30" required
        />
          <br></br>
      <br></br>
      <br></br>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <br></br>
        <br></br>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          size="30"  required
        />
          <br></br>
      <br></br>
      <br></br>
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <br></br>
        <br></br>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          size="30" minLength="100" required
        />
          <br></br>
      <br></br>
      <br></br>
      </div>
       <Link to='/ProjectHome'><button type="submit" onClick ={ handleSubmit }>Register</button></Link>
       <br></br><br></br>
       <br></br>
    </form>
    </center>
    </div>
  );
  };

export default RegistrationForm;