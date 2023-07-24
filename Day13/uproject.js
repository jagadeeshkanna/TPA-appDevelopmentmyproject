import React from 'react'
import './uproject.css'
import {Link } from 'react-router-dom'
function uproject() {
  return (
    <>
<div className='jk'> 
       
        </div> 
        <div className='hl'>
        <div className='hj'>
         <div className='nl'>
          <center>
         <Link to = "/ProjectLogin"><h2>Admin</h2></Link></center>
         </div>
         <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>  <br></br>
        <br></br>
        <div className='nl'>
        <center>
         <Link to="/Register"><h2>User</h2></Link></center>
         </div>
         </div>
         </div>

    </>
  )
}

export default uproject