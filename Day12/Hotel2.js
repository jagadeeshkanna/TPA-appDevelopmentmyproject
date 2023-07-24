import React,{Component} from 'react';
//import './Re.css'
import axios from 'axios';

class Hotel2 extends Component{

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
        
        //http://localhost:8080/postm
     axios.post('http://localhost:8080/postho',data)
    //     .then( alert("Successfully Registrated"))
console.log(data);

    }
    render(){
        return ( 
            <body className='bodyre12'>
                <div className='rebox'>

              <center>
            <div className='container'>
            <form onSubmit={this.handleSubmit}>
                <h1>Registration Form</h1>
                
                    <p>First_Name</p>
                    <input type="text" id='un' value={this.state.fname}
                        onChange={this.handleFNameChange} className='reinput36'/><br></br>
            

                    <p>Email</p>
                    <input type="maila" id='em'  value={this.state.maila}
                        onChange={this.handleEmailChange} className='reinput36'/><br></br>

                    <p>Room_Type</p>
                    <input type="text" id='pwd'  value={this.state.rtype}
                        onChange={this.handleRTypeChange} className='reinput36'/><br></br>

                    <p>Number_of_Guests</p>
                    <input type="text" id='cpwd'  value={this.state.nguest}
                        onChange={this.handleNGuestChange} className='reinput36'/><br></br>

                    <p>Arrival_Date</p>
                    <input type="Date" id='pwd' value={this.state.adate}
                        onChange={this.handleADateChange} className='reinput36'/><br></br>

                    <p>Arrival_Time</p>
                    <input type="time" id='cpwd' placeholder='ex:qwS12#$' value={this.state.atime}
                        onChange={this.handleATimeChange} className='reinput36'/><br></br>
                        
                    <p>Free_Pickup?</p>
                    <input type="text" id='cpwd' placeholder='ex:qwS12#$' value={this.state.fpickup}
                        onChange={this.handleFPickupChange} className='reinput36'/><br></br>

                    <p>Flight_Number</p>
                    <input type="text" id='cpwd' placeholder='ex:qwS12#$' value={this.state.fnumber}
                        onChange={this.handleFNumberChange} className='reinput36'/><br></br>

                    <p>Special_Request</p>
                    <input type="text" id='cpwd' placeholder='ex:qwS12#$' value={this.state.srequest}
                        onChange={this.handleSRequestChange} className='reinput36'/><br></br><br></br>


                 <button class="button-64" role="button"><span class="text">Submit</span></button>
               
               
            </form>
            </div>
            </center>
                </div>
            </body>
         );
    }
}

export default Hotel2