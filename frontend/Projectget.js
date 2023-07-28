import axios from "axios";
import React, { Component } from "react";
//import './Showdata.css'
class Projectget extends Component {
  state = {
  data: []
  }
  componentDidMount() {
  axios.get('http://localhost:8082/api/v1/user/getb')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
     console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>maila</th>
          <th>fname</th>
          <th>nguest</th>
          <th>adate</th>
          <th>atime</th>
          <th>phone</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.maila}>
            <td>{user.fname}</td>
            <td>{user.nguest}</td>
            <td>{user.adate}</td>
            <td>{user.atime}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
          </tr>
          ))}
      </tbody>
    </table>
    );
  }}
  
export default Projectget;