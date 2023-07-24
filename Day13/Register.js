// import React, { useState } from 'react';
// import {Link} from "react-router-dom"
// import axios from 'axios'
// import './RegistrationForm.css'

// const Register = () => {
//      const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmpassword, setConfirmPassword] = useState('');
//     // const [registrationError,setRegistrationError] = useState('');
//     // const navigate=useNavigate();

//     const checkPassword = (e) =>{
//     //  const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
//       if (!password.length===0) {
//         window.alert(
//           "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
//         );
//         initialize1()
//         return;
//       }
//       else if (password !== confirmpassword) {
//         window.alert("Passwords do not match.");
//         initialize2()
//         return;
//       }
//       else{
//         window.alert("Registration Successful !!!");
//       }
//     }
//     const initialize1 = () =>{
//       setPassword('')
//       setConfirmPassword('')
//     }
//     const initialize2 = () =>{
//       setConfirmPassword('')
//     }
  
//     const handleNameChange = (event) => {
//         setName(event.target.value);
//       };
//     const handleEmailChange = (event) => {
//       setEmail(event.target.value);
//     };
  
//     const handlePasswordChange = (event) => {
//       setPassword(event.target.value);
//     };
    
//     const handleConfirmPasswordChange = (event) => {
//       setConfirmPassword(event.target.value);
//     };


//     const handleSubmit= async (e)=>{
//       e.preventDefault();
//       try {
//         const response = await axios.post(
//           "http://localhost:8081/api/v1/auth/register",
//           {
//             //http://localhost:8081/api/v1/auth/register
//             name,
//             email,
//             password,
//             // confirmpassword,
//           },
//         );
  
//         console.log("Sign in successful");
//         console.log(response.data); 
//         // navigate('/');
  
//         // setName("");
//         // setEmail("");
//         // setMobile("");
//         // setPassword("");
//         // setRegistrationError("");
//       } catch (error) {
//         console.error("Registration failed");
//         console.error(error); 
  
//       }
//   }
    
//   return (
//     <body className='bl'>
//     <div className='zz'>
//         <center>
//           <br></br>
//       <h2>Create Your Account</h2>
//       <p className='ab1'>.....................................................................................</p>
//          <form onSubmit={handleSubmit}>
//          <h4 className='a1'>Username:</h4>
//            <input
//             type="text"
//             className='signupinput'
//             placeholder="Enter your Name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />

//         <h4 className='a1'>Email:</h4>
//          <input
//             type="email"
//             className='signupinput'
//             placeholder="Enter your Email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />


//           <h4 className='a1'>Password:</h4>
//           <input
//             type="password"
//             className='signupinput'
//             placeholder="Enter New Password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />

//           <h4 className='a1'>Confirm Password:</h4>
//           <input
//             type="password"
//             className='signupinput'
//             placeholder="Re Enter New Password"
//             value={confirmpassword}
//             onChange={handleConfirmPasswordChange}
//             required
//           /><br/>
//           <br></br>
//           <Link to ="/ProjectLogin"><button type="submit" onClick={checkPassword} className='signupbutton'><b>Sign Up</b></button></Link>
//             <h3>------------- or -------------</h3>
//         </form>
//         <h4 className='a1'>Existing User?</h4>
//           <div className="create1"><Link to="/"><div className="b1"><u>Log Into Your Account</u></div></Link></div>  
//           <br></br>
//           <br></br>
//           </center>
//           </div>
//          </body>
//   );
// };

// export default Register;












import React, { useState } from 'react';
//import './Signup.css';
import {Link} from "react-router-dom"
import axios from 'axios'



const Register = () => {
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    // const [registrationError,setRegistrationError] = useState('');
    //const navigate=useNavigate();

    const checkPassword = (e) =>{
      const passwordRegex =/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
      if (!passwordRegex===0) {
        window.alert(
          "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
        );
        initialize1()
        return;
      }
      else if (password !== confirmpassword) {
        window.alert("Passwords do not match.");
        initialize2()
        return;
      }
      else{
        window.alert("Registration Successful !!!");
      }
    }
    const initialize1 = () =>{
      setPassword('')
      setConfirmPassword('')
    }
    const initialize2 = () =>{
      setConfirmPassword('')
    }
  
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };

    const handleSubmit= async (e)=>{
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:8081/api/v1/auth/register",
          {
            name,
            email,
            password,
            // confirmpassword,
          },
        );
  
        console.log("Sign in successful");
        console.log(response.data); 
  
        // setName("");
        // setEmail("");
        // setMobile("");
        // setPassword("");
        // setRegistrationError("");
      } catch (error) {
        console.error("Registration failed");
        console.error(error); 
  
      }
  }
    
  return (
    <div className='bl'>
    <div className="zz"> 
    <div className="signup1-page">
      <div className="signup-container">
        <center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      <h2>Create Your Account</h2>
      <p className='ab1'>.....................................................................................</p>
         <form onSubmit={handleSubmit}>
         <h4 className='a1'>Username:</h4>
           <input
            type="text"
            className='signupinput'
            placeholder="Enter your Name"
            value={name}
            onChange={handleNameChange}
            required
          />

        <h4 className='a1'>Email:</h4>
         <input
            type="email"
            className='signupinput'
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <h4 className='a1'>Password:</h4>
          <input
            type="password"
            className='signupinput'
            placeholder="Enter New Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <h4 className='a1'>Confirm Password:</h4>
          <input
            type="password"
            className='signupinput'
            placeholder="Re Enter New Password"
            value={confirmpassword}
            onChange={handleConfirmPasswordChange}
            required
          /><br/>
          <br></br>
          <br></br>
      <button type="submit" onClick={checkPassword} className='signupbutton'><b>Sign Up</b></button>
            {/* <h3>------------- or -------------</h3> */}
        </form>
        {/* <h4 className='a1'>Existing User?</h4> */}
        <br></br>
        <br></br>
          <div className="create1"><Link to="/"><div className="b1"><u>Log Into Your Account</u></div></Link></div>  
          <br></br>
          <br></br>
          <br></br>
          </center>
          </div>
      </div>
    </div>
    
    </div>
  );
};

export default Register;









