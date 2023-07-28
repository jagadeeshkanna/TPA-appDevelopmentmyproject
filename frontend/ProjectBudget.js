import React from 'react'
import { AppBar, TextField,Button,Card, CardMedia, CardContent, Typography,Box} from '@mui/material'
import {Link,} from 'react-router-dom'
import './ProjectBudget.css'
function ProjectBudget() {
  return (
    <div>
<h1><center>Budget Hotels</center></h1>
<div className='grid9'>
       {/* <br></br>
           <b></b>
            <br></br>
           */}
        <Card sx={{maxWidth:345}}>
        <CardMedia 
         sx={{height:300}}
          image="https://images.squarespace-cdn.com/content/v1/5d1a28b95422a10001b1aada/6f845a88-2a59-4713-a8eb-8c86ed7e15f9/MexicoCity-BellasArtes.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Mexico City, Mexico.</b>
              <br></br><br></br>
<b>("the largest public square in Latin America. At its edges stand the Metropolitan Cathedral (north), National Palace (east), Municipal Palace, or city hall (south), and an antique line of arcaded shops (west).")</b>
<br></br><br></br>
Mexico City is a sprawling metropolis that offers something for every style of traveler. From its rich history and vibrant art scene to its world-class cuisine and beautiful green spaces — Mexico City invites you to explore its many wonders and create unforgettable memories.
Mexico City is the beautiful capital of Mexico, and it's been known for having some of the most critical events in Latin America. 
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>     
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.weseektravel.com/wp-content/uploads/2022/05/things-to-do-in-sharm-el-sheikh-1.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Sharm El Sheikh, Egypt.</b>
              <br></br><br></br>
<b>("The area's clear water and extensive coral reefs have made Sharm el-Sheikh a popular site for snorkeling and scuba diving.")</b>
<br></br><br></br>
It has hosted youth camps from most parts of the world as well as other advantages that Sharm el Sheikh is distinguished with as unique charming nature of its mountains; golden beaches, azure waters, charming coral reefs with its own depths that attract divers and researchers in the depths of the pristine nature of up ...
<br></br>
              <br></br>
              <center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center>       
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
         <Link to="/Hotel"><CardMedia 
         sx={{height:300}}
          image="https://i.natgeofe.com/k/29ce0d21-6863-4fe5-a0ed-082ad307161c/Kyiv_Ukraine_0322_4x3.jpg"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Kiev, Ukraine.</b>
              <br></br><br></br>
<b>("major administrative functions, with considerable employment in the offices of ministries responsible for the economy. ")</b>
<br></br><br></br>
Kyiv is an important industrial, scientific, educational, and cultural center in Eastern Europe. It is home to many high-tech industries, higher education institutions, and historical landmarks. The city has an extensive system of public transport and infrastructure, including the Kyiv Metro.
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>       
            </Typography>
         </CardContent>
        </Card>
        
        <Card sx={{maxWidth:345}}>
        <CardMedia 
         sx={{height:300}}
          image="https://images.immediate.co.uk/production/volatile/sites/7/2019/05/Fes-Morocco-01-5457918.jpg?quality=90&resize=980,654"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Fez, Morocco.</b>
              <br></br><br></br>
<b>("The urban fabric and the principal monuments in the medina – madrasas, fondouks, palaces, residences, mosques and fountains ")</b>
<br></br><br></br>
Fes is known for its handicrafts and, most notably, its rugs. Carpet sellers are all over the main streets of the medina, each with stunning Moroccan designs to show.
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>       
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
       <CardMedia 
         sx={{height:300}}
          image="https://cdn.britannica.com/48/156148-050-463D6A86/Municipal-Palace-Santa-Ana-El-Salvador.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Santa Ana, El Salvador.</b>
              <br></br><br></br>
<b>("fascinating architecture and Mayan ruins to active volcanoes, coffee plantations, and some of the best pupusas in the country, Santa Ana has a lot to offer.")</b>
<br></br><br></br>
Its historic center offers some of the best preserved architecture in El Salvador, including the Cathedral of Santa Ana, a marvel of neo-gothic architecture, the Teatro de Santa Ana, a beautifully decorated theatre of the early 1900's; and the Palacio Municipal, in front of the main plaza with giant palm trees shooting ...
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>      
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.chinadiscovery.com/assets/images/spring-tours/guilin-may.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Guilin, China</b>
              <br></br><br></br>
<b>("Guilin (its name means “Forest of Sweet Osmanthus”) is set in a landscape of outstanding natural beauty and is renowned for its karst formations.")</b>
<br></br><br></br>
Guilin is also a cultural centre. As a major centre of Buddhism in the 7th century, it had many famous monasteries. Today the city has more than 10 colleges and universities. Guilin (its name means “Forest of Sweet Osmanthus”) is set in a landscape of outstanding natural beauty and is renowned for its karst formations.
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>       
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <CardMedia 
         sx={{height:300}}
          image="https://s3.amazonaws.com/fathom_media/photos/habitas-bacalar-tanveer-badal-photography-lifestyle-deck-1.jpg.1200x800_q85_crop.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Habitas Bacalar, Mexico</b>
              <br></br><br></br>
<b>("Habitas Bacalar is an eco oasis, a tranquil escape that encourages holistic restoration, wellness, and connection with the natural environment. ")</b>
<br></br><br></br>
Embracing the beauty of nature, Habitas Bacalar is also home to a Lagoon Deck with a fully-equipped bar, a yoga shala, and a wellness center with treatment rooms and a program designed around holistic practices using local ingredients like Melipona honey, coconut and cacao.
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>       
            </Typography>
         </CardContent>
        </Card>
        </div>
        <br></br>
        <br></br>
        <div>
          </div>
        <div className='sm1'>
<Box sx={{width:1530,height:200,bgcolor:"#0277bd"}}>
<center><p>TRIP PLANNING APPLICATION</p>
        <p>@2023 Trip planning application.All rights reserved</p>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIx517NltToEC42TqgEXgLTZHsl3xFHaq0Jg&usqp=CAU' className='co'></img>&nbsp;&nbsp;&nbsp;&nbsp;   
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2FpeITVaC9KnLreYyEW-_HQIt6kdwZTRMA&usqp=CAU' className='co'></img>&nbsp;&nbsp;&nbsp;&nbsp;   
         <img src='data:image/png;base64,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'className='co'></img>&nbsp;&nbsp;&nbsp;&nbsp;
         <img src='data:image/png;base64,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'className='co'></img>
         </center>
</Box>
</div>
    </div>
  )
}

export default ProjectBudget