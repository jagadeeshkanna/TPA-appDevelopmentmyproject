import React,{Component} from 'react';
import './Mhotel.css'
import axios from 'axios';

class Mhotel extends Component{

    constructor(props){
        super(props);
        this.state={
           
            fname:'',
            maila:'',
            nguest:'',
            adate:'',
            atime:'',
            phone:'',
            address:'',

            
        };
    }

    handleFNameChange=(event)=>{
        this.setState({fname:event.target.value})
    };
    handleEmailChange=(event)=>{
        this.setState({maila:event.target.value})
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
        this.setState({phone:event.target.value})
    };
    handleFNumberChange=(event)=>{
        this.setState({address:event.target.value})
    };
    

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          fname:this.state.fname,
          maila:this.state.maila,
          nguest:this.state.nguest, 
          adate:this.state.adate, 
          atime:this.state.atime, 
          phone:this.state.phone, 
          address:this.state.address, 
        };
        
        //http://localhost:8080/postm
     axios.post('http://localhost:8082/api/v1/user/postb',data)
        // .then( alert("Successfully Registrated"))
console.log(data);

    }
    render(){
        return ( 
            <body className='bl'>
            <body className='bodyre12'>
              <center>
            <div className='container'>
            <form onSubmit={this.handleSubmit}>
                <h1>Registration Form</h1>
                
                    <p>Name</p>
                    <input type="text" id='un' value={this.state.fname}
                        onChange={this.handleFNameChange} className='reinput36' required/><br></br>
            

                    <p>Email</p>
                    <input type="maila" id='em'  value={this.state.maila}
                        onChange={this.handleEmailChange} className='reinput36' required/><br></br>

                    <p>Total_Member</p>
                    <input type="text" id='cpd'  value={this.state.nguest}
                        onChange={this.handleNGuestChange} className='reinput36' required/><br></br>

                    <p>Arrival_Date</p>
                    <input type="Date" id='pwd' value={this.state.adate}
                        onChange={this.handleADateChange} className='reinput36' required/><br></br>

                    <p>Arrival_Time</p>
                    <input type="time" id='cwd' placeholder='ex:qwS12#$' value={this.state.atime}
                        onChange={this.handleATimeChange} className='reinput36' required/><br></br>
                        
                    <p>phone</p>
                    <input type="text" id='pwd' placeholder='Type here' value={this.state.phone}
                        onChange={this.handleFPickupChange} className='reinput36' required/><br></br>

                    <p>Address</p>
                    <input type="text" id='cpwd' placeholder='Type here' value={this.state.address}
                        onChange={this.handleFNumberChange} className='reinput36' size="50" required/><br></br>
<br></br>
                 <button class="button-64" role="button"><span class="text">Submit</span></button>
                 <br></br><br></br>
            </form>
            </div>
            </center>
            </body> 
            </body>
         );
    }
}

export default Mhotel