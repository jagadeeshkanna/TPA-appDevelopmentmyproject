import React from 'react'
import { AppBar, TextField,Button,Card, CardMedia, CardContent, Typography,Box} from '@mui/material'
import {Link} from 'react-router-dom'

import './ProjectMidrange.css'
function ProjectMidrange() {
  return (
    <div>
        <br></br><br></br>
            <h1><center>Mid range Hotels</center></h1>
            <br></br><br></br>
<div className='grid9'>
        {/* <br></br><br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br> */}
        <Card sx={{maxWidth:345}}>
       <CardMedia 
         sx={{height:300}}
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/20/64/28/20180808-120455-largejpg.jpg?w=700&h=-1&s=1"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Casa Pueblo, Tulum, Mexico</b>
              <br></br><br></br>
              <b>(" lush jungles, Mayan ruins, cenotes (caves or sinkholes filled with crystal-clear waters), gorgeous lagoons and upscale nightlife. ")</b>
              <br></br>
              <br></br>
              Casa Pueblo is an independent hotel that was envisioned and brought to life by Derek Klein, who, back in 2013 opened Gitano, Tulum's acclaimed jungle-chic bar and restaurant.
              <br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
            </Typography>
         </CardContent>
        </Card>
        
        <Card sx={{maxWidth:345}}>
        <CardMedia 
         sx={{height:300}}
          image="https://cdn.vox-cdn.com/thumbor/tZAaZFyN_1ElDPAGWQ4o7Z5QaDI=/0x0:3500x2333/1200x800/filters:focal(1470x887:2030x1447)/cdn.vox-cdn.com/uploads/chorus_image/image/54679479/blb25684_34428342156_o.0.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>The Robey, Chicago, USA</b>
              <br></br><br></br>
              <b>("Valet parking,Free internet,Rooftop pool,
Bar / lounge,Bicycles available,Billiards,Car hire,Conference facilities")</b>
<br></br><br></br>
Perched high above the big intersection of Damen, Milwaukee and North Avenues in an Art Deco masterpiece formerly known as the Northwest Tower—stretching 203-feet tall and the only skyscraper for miles—The Robey captures the storied spirit of Chicago: a bustling, ever-changing, big-shouldered town.
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
       <CardMedia 
         sx={{height:300}}
          image="https://static1.squarespace.com/static/52c9f4ebe4b02c7007cdd86a/t/5de4104efa7dda7681398ae1/1575227507348/Grounds_Aerial+Shot+of+Blue+Apple.jpg?format=1500w"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Blue Apple Beach House, Colombia</b>
              <br></br><br></br>
              <b>(" free bikes, outdoor swimming pool, a garden and shared lounge in Tierra Bomba. ")</b>
              <br></br><br></br>
              Blue Apple Beach is a laid-back beach club and boutique hotel located just 20 minutes from Cartagena, where like-minded locals and in-the-know visitors enjoy lazy days, music and great food in a tropical island setting.
              <br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <CardMedia 
         sx={{height:300}}
          image="https://lankahideaways.com/wp-content/uploads/2020/12/Lanka-Hideaways-Kip-Main-1.jpeg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>The Kip, Ahangama, Sri Lanka</b>
              <br></br><br></br>
            <b>("four spacious rooms and an enchanting garden café, with a focus on local craftsmanship and slow living. “Laid-back boho bliss, with delicious bites, peaceful vibes ")</b>
            <br></br><br></br>
            A bohemian hideaway tucked just 200 metres from the beach in Ahangama, The Kip features four spacious rooms and an enchanting garden café, with a focus on local craftsmanship and slow living. “Laid-back boho bliss, with delicious bites, peaceful vibes and a secret cove just down the road
            <br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
        <CardMedia 
         sx={{height:300}}
          image="https://media.cntraveller.com/photos/611be8a4042ccafe9a9adc02/16:9/w_3200,h_1800,c_limit/grid.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>The Jennings Hotel, Oregon, USA</b>
              <br></br><br></br>
              <b>("kitchen windows, second-floor balcony and some of the 12 minimalist guest rooms at the hotel, visitors can see amazing views of the Wallowas, a particularly scenic mountain range that in 2014 was dubbed one of the 7 Wonders of Oregon.")</b>
 <br></br><br></br>
Joseph, Oregon Hotels & Attractions | Oregon Mountains
It's no wonder this town attracts artists. See for yourself downtown at the Joseph Oregon Artwalk, a series of life-sized bronze sculptures, and the creative shops and restaurants on Main Street. Or get inspired on one of the many hiking, biking and skiing trails nearby.
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://media-cdn.tripadvisor.com/media/photo-s/14/89/be/d9/riad-yasmine.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>La Riad Berbére, Marrakech</b>
              <br></br><br></br>
              <b>(" the city of luxury, thanks to its famous palaces, 5-star restaurants, luxury spas and hammams and charming riads (traditional houses) in the medina. Amongst others, there is the Mamounia and its enchanting gardens, the luxurious")</b>
              <br></br><bt></bt>
13 Very Best Things To Do In Marrakech, Morocco - CHARLIES ...
Marrakech is one of the most famous cities in Morocco and is well known for its vibrant city life, sensory overload and sandstone colored buildings. Some of the most famous things to do in Marrakech are wandering through the Medina and visiting the world famous Jamaa el Fna Square.
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/90/02/90/the-plantation.jpg?w=700&h=-1&s=1"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Plantation Urban Resort and Spa, Phnom Penh, Cambodia</b>
              <br></br><br></br>
<b>("two outdoor swimming pools and guests can enjoy meals at the in-house restaurant or have a drink at the bar. Free WiFi is available …")</b>
<br></br><br></br>
Centrally located in Phnom Penh, Plantation Urban Resort & Spa is located directly behind the Royal Palace. It features two outdoor swimming pools and guests can enjoy meals at the in-house restaurant or have a drink at the bar.
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image=""/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Hotel La Semilla, Playa del Carmen, Mexico</b>
              <br></br><br></br>
<b>("Playa del Carmen Beach,
Playa Xcalacoco,
Parque Fundadores,
Xel-Ha Park,
Rio Secreto,
Cenote Chaak Tun,
Xplor Park,
Xaman-Ha ruins.")</b>
<br></br><br></br>
Featuring a restaurant and free bikes, Hotel La Semilla, Playa del Carmen, a Member of Design Hotels is in Playa del Carmen, only 650 feet away of the beach and 150 feet from vibrant 5th Avenue. Free Wi-Fi access is available.
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>          
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
        <CardMedia 
         sx={{height:300}}
          image="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/01/12/85173.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Antalya, Turkey.</b>
              <br></br><br></br>
<b>("Düden Waterfalls,
Kaleiçi,
Aspendos,
The Lycian Way,
Antalya Museum,
Republic Square,
Antalya Bazaar,
Old City Marina.")</b>
<br></br><br></br>
Antalya is certainly a location that is rich in history, with many ancient sites to explore. You can see Hadrian's Gate in the center of the city and even wander around the ruins of the ancient capital city of Xanthos.
About Antalya - Brief Info + Getting to Know Antalya - iAntalya
Antalya, known as the Pearl of the Mediterranean and the Turkish Riviera, is one of the most popular tourist destinations in both Turkey and Europe.
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>            
            </Typography>
         </CardContent>
        </Card>
</div>


    </div>
  )
}

export default ProjectMidrange