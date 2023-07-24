import { AppBar, TextField,Button,Card, CardMedia, CardContent, Typography,Box, lighten} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import './ProjectLocation.css'
function ProjectLocation() {
  return (
     <div>
        <center>
            <AppBar>
        <h2>Search the Place</h2>
        <h3 className='en'>Enjoy Every Moment of Your Vacation</h3>
            </AppBar>
            <br></br>
            <br></br>
            <br></br>
           <br></br>
        </center>
        <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
        <center>
            <p className='hi'><TextField variant="outlined" label="Search"/></p>
            <h1 className='hello'><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }> Search </Button></h1>
            </center>
            <br></br>
            <br></br>

          <div className='grid1'>
        <Card sx={{maxWidth:345}}>
         <Link to='/Mhotel'><CardMedia 
         sx={{height:300}}
          image="https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/126.jpg"/><CardMedia/></Link>
         <CardContent>
            <Typography>
                <b>Kolli hills</b><br></br>
                <br></br>
                This beautiful location is referred to as the Kolli Malai, and it means the 'Mountains of Death. '
                 The hills are over almost 1000 to 1300 meters in height that cover more than 280 sq. Km. 
                 You will get nearly 70 hairpin bends, which take the tourists to the top of the hill.  
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/Mhotel'><CardMedia 
         sx={{height:300}}
          image="https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/2017/03/featured-image-6.jpg&w=500&h=400"/><CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Ooty</b>
              <br></br><br></br>
              It,is popularly known as the 'Queen of Hill Stations' is nestled in the Nilgiri hills in Tamil Nadu. The lush green tea plantations, the vast meadows, the towering mountains, dense pine and eucalyptus trees, sparkling waterfalls and serene lakes make Ooty a prominent part of any bucket list.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/Mhotel'><CardMedia 
         sx={{height:300}}
          image="https://i0.wp.com/tourismtn.com/wp-content/uploads/2020/12/The-Green-Pillar-Rock.jpg?resize=1024%2C512&ssl=1"/><CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Kodaikanal</b>
              <br></br><br></br>
It is one of the very popular holiday destination hill resorts in South India. 
This hill station stands 7200 feet above sea level and situated in upper palani hills of the westernghats near Madurai in Tamil Nadu. Kodaikanal is also popularly known as the princes of Hill Stations.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/Mhotel'><CardMedia 
         sx={{height:300}}
          image="https://t3.ftcdn.net/jpg/04/96/24/84/360_F_496248418_QKRReou7uViYWZoMO6zye2QHdPkOUdWl.jpg"/><CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Tenkasi</b>
              <br></br><br></br>
The best places to visit in Tenkasi include Courtallam Old Falls, Kasi Viswanathar Temple, Gundar Dam, Thirumalai Kovil, and Thirukutralanathar Temple.
 Tenkasi, a town in the Tirunelveli district of Tamil Nadu, is famous for its temples and waterfalls.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/Mhotel'><CardMedia 
         sx={{height:300}}
          image="https://hindutemplesblog.files.wordpress.com/2017/10/02-31.jpg?w=600"/><CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Thanjavur Temple</b>
              <br></br><br></br>
Built in the year 1010 CE by Chola emperor Rajaraja I in Thanjavur, the temple is popularly known as the Big Temple. 
It turned 1,000 years old in September 2010. 
To celebrate the 1000th year of the grand structure, the state government and the town held many cultural events.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/Mhotel'><CardMedia 
         sx={{height:300}}
          image="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/08/Angkor-Wat-Cambodia.jpg?resize=1200%2C797&ssl=1"/><CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Cambodia Temple</b>
              <br></br><br></br>
              The temple is admired for the grandeur and harmony of the architecture, its extensive bas-reliefs, and for the numerous devatas adorning its walls.
               The modern name Angkor Wat, alternatively Nokor Wat, means "Temple City" or "City of Temples" in Khmer.

            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/Mhotel'><CardMedia
         sx={{height:300}}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWiz1QzOjl1LT70XAg-rCfMYHaq160BTWYQ&usqp=CAU"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Batu Caves</b>
              <br></br><br></br>
              Batu Caves in short also referred as 10th Caves or Hill for Murugan as there are six important holy shrines in India and four more in Malaysia. 
              The three others in Malaysia are Kallumalai Temple in Ipoh, Tanneermalai Temple in Penang and Sannasimalai Temple in Malacca.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/Mhotel'><CardMedia 
         sx={{height:300}}
          image="https://kedarnathtemple.com/wp-content/uploads/2019/12/2019-07-29.jpg"/></Link>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>kedarnath temple</b>
              <br></br><br></br>
              The Pandavas were supposed to have pleased Shiva by doing penance in Kedarnath. 
              The temple is one of the four major sites in India's Chota Char Dham pilgrimage of Northern Himalayas and is the first of the Panch Kedar pilgrimage sites. 
              This temple is the highest among the 12 Jyotirlingas.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/Mhotel'><CardMedia 
         sx={{height:300}}
          image="https://i.insider.com/5d38a60736e03c25af5464d3?width=1000&format=jpeg&auto=webp"/></Link>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Iceland's Blue Lagoon</b>
              <br></br><br></br>
Every country has landmarks and natural wonders that are internationally recognizable.
You can't visit France without seeing the Eiffel Tower, or Iceland without swimming in the Blue Lagoon.
The Leaning Tower of Pisa is a symbol of Italy, and Canada calls Niagara Falls to mind.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/Mhotel'><CardMedia 
         sx={{height:300}}
          image="https://i.insider.com/5e21c57cab49fd40043ae7f5?width=800&format=jpeg&auto=webp"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
              <b> The Great Wall of China</b>
              <br></br><br></br>
              At over 13,000 miles long, the Great Wall of China is a UNESCO World Heritage Site and was voted one of the New Seven Wonders of the World in 2007.
             The Mutianyu section of the Great Wall is the most popular with tourists, just two hours outside Beijing.
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
        <Link to='/Mhotel'><CardMedia 
         sx={{height:300}}
          image="https://i.insider.com/5d377bf436e03c29e93eed13?width=800&format=jpeg&auto=webp"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Niagara Falls</b>
              <br></br><br></br>
Niagara Falls consists of two waterfalls on the Niagara River,
 which marks the border between New York and Ontario, Canada: the American Falls, 
 located on the American side of the border, and the Canadian or Horseshoe Falls located on the Canadian side.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/Mhotel'><CardMedia 
         sx={{height:300}}
          image="https://i.insider.com/5d38b30636e03c59cb0063c2?width=800&format=jpeg&auto=webp"/></Link>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Patong Beach in Phuket</b>
              <br></br><br></br>
Patong Beach is known for its nightlife and 2850-metre (1.77 mile) beach that runs the entire length of Patong's west side. 
Nightlife is centered in two main areas, Bangla Road and the "Paradise Complex", with Bangla Road being predominantly straight and Paradise Complex gay.
            </Typography>
         </CardContent>
        </Card>

        </div>
        <br></br>
        <br></br>
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
  )
}

export default ProjectLocation