import React from 'react'
import { AppBar, TextField,Button,Card, CardMedia, CardContent, Typography,Box} from '@mui/material'
import {Link} from 'react-router-dom'
import './ProjectLuxury.css'
function ProjectLuxury() {
  return (
    <div>
             <center><b><h1>luxury hotel</h1></b></center>
           <br></br>
           <br></br>
           <br></br>
          <div className='grid9'>
        <Card sx={{maxWidth:345}}>
      <CardMedia 
         sx={{height:300}}
          image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/457389536.jpg?k=1b5b93930a67d2372178da9df3c090ec47fb1f5622f5664dde18c4362f31b355&o=&hp=1"/>
          <CardMedia/>
         
         <CardContent>
         <Typography>
      <b>burj al arab jumeirah</b><br></br>
                <br></br>
                <b>( fine-dining restaurants, incredible beaches,the expansive Burj Al Arab Terrace,renowned for its 'seven-star status')</b>
                <br></br>
                <br></br>
                Burj Al Arab stands on an artificial island that is 280 m (920 ft) from Jumeirah Beach and is connected to the mainland by a private curving bridge. The shape of the structure is designed to resemble the sail of a ship. It has a helipad near the roof, at a height of 210 m (689 ft) above ground.
<br></br>
<br></br>
<Link to = '/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
            </Typography>
         </CardContent> 
        </Card>

        <Card sx={{maxWidth:345}}>
        <CardMedia 
         sx={{height:300}}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emirates_Palace.jpg/1200px-Emirates_Palace.jpg"/><CardMedia/>
         <CardContent>
            <Typography>
              <b>Emirates palace mandarin oriental</b>
              <br></br><br></br>
              <b>(the epitome of luxury in Abu Dhabi, showcasing Arabian hospitality at its finest, highest levels of comfort, has stunning views and offers 24-hour butler service.)</b>
              <br></br>
              <br></br>
              The grand hotel houses 394 luxury rooms, a private beach that stretches across 1.3km of white sand, a helicopter landing pad, and a range of exquisite dining venues.
              <br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
       <CardMedia 
         sx={{height:300}}
          image="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/13/68/136805_v5.jpeg"/><CardMedia/>
         <CardContent>
            <Typography>
              <b>Taj Lake Palace, Udaipur</b>
              <br></br><br></br>
               <b>(Restored to its pristine glory, this spectacular palace became world renowned when the James Bond film 'Octopussy' was filmed at it.)</b>
               <br></br><br></br>
               Jagniwas a jewel floating in the Lake Pichola is a beautiful building made of marble, with cupolas, domes, bastions, balconies and ornamental turrets. The material used is local marble from Rajnagar, about 66 kms from Udaipur, brought to Udaipur in bullock carts.
               <br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
       <CardMedia 
         sx={{height:300}}
          image="https://tempo.cdn.tambourine.com/windsong/media/windsong-mega-resorts-hero-5f5297b9c9e02.jpg"/><CardMedia/>
         <CardContent>
            <Typography>
              <b>Atlantis paradise island bahamas</b>
              <br></br><br></br>
              <b>(popular destination for families, offering gorgeous weather and idyllic beaches perfect for family bonding. You'll never get bored exploring its unique marine habitats, visiting the interactive water park, or relaxing on the beach.)</b>
              <br></br><br></br>
              Atlantis, Paradise Island - the most popular resort destination in The Bahamas - features the world's largest open-air marine habitat; Aquaventure water park, including the iconic Mayan Temple's Leap of Faith slider; 11 unique pools; renowned beaches; 18-hole golf course; the largest casino in the Caribbean;
              <br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
       <CardMedia 
         sx={{height:300}}
          image="https://mondomulia.com/wp-content/uploads/2015/09/Westin-Excelsior-Hotel-Rome-3-2.jpg"/><CardMedia/>
         <CardContent>
            <Typography>
              <b>The Westin Excelsior, Rome</b>
              <br></br><br></br>
              <b>("An indoor pool.
Limo/town car service, continental breakfast (surcharge) and valet parking (surcharge)
A lift, wedding services and concierge services.
A ballroom, a porter/bellboy and 12 meeting rooms.
Guest reviews speak well of the helpful staff.")</b>
<br></br>
<br></br>
The hotel hosted the cast and crew of Ben-Hur in 1959. La Dolce Vita was filmed around the hotel in 1960 and Two Weeks in Another Town was filmed in the hotel in 1962. Portions of the 1983 miniseries The Winds of War were filmed in the hotel, as was a scene in the 2009 period musical Nine.        
<br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/Hotel'><CardMedia 
         sx={{height:300}}
          image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/48812893.jpg?k=a034ea2f5c5431b95bedb68ac0aaa9507f6d2ba261a3182554b1dc81b4ab0f52&o=&hp=1"/><CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>The Oberoi Udaivilas, Udaipur</b>
              <br></br><br></br>
             <b>("Built on the opposite side of the lake from Udaipur town it features just 87 rooms and suites and a glorious lakeside setting in Rajasthan's most romantic city.")</b>
<br></br><br></br>
The Oberoi Udaivilas is a luxury hotel located in Udaipur, Rajasthan, India. It was rated as the world's best hotel in 2015 by Travel + Leisure. The hotel was constructed on the hunting grounds of the Maharana of Mewar, which was around 200 years old
<br></br>
              <br></br>
              <br></br>
              <br></br>
              <center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center>
            </Typography>
         </CardContent>
        </Card>
            <Card sx={{maxWidth:345}}>
           <CardMedia 
         sx={{height:300}}
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/79/c9/3b/full-hotel-facade.jpg?w=700&h=-1&s=1"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Raffles singapore</b>
              <br></br><br></br>
              <b>("addition of wings, a veranda, a ballroom, a bar and billiards room, as well as other buildings and rooms.")</b>
              <br></br>
              <br></br>
              Boasting Singapore's only electric lights and fans, the hotel soon became known as the epitome of luxury, and attracted rich and famous guests from around the globe during its heydey, including Somerset Maugham, Noel Coward and Charlie Chaplin
              <br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>
             
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
       <CardMedia 
         sx={{height:300}}
          image="https://cdn.kiwicollection.com/media/property/PR004315/xl/004315-01-0%20-%20Grand%20Hotel%20Tremezzo%20Facade-Grand%20Hotel%20Tremezzo.jpg?cb=1678907415"/>
          <CardMedia/>
         <CardContent>
            <Typography>
              <b>Grand Hotel Tremezzo</b>
              <br></br><br></br>
            <b>("a large and luxurious hotel, especially one housed in a building with traditional architectural style")</b>
            <br></br>
            <br></br>
            High society took long voyages overseas in pursuit of art, culture and knowledge, and Lake Como was a favorite destination.  The Grand Hotel Tremezzo welcomed noble, aristocratic and bourgeois families, treating them to stunning scenery,  plush accommodation and glamorous entertainment.
            <br></br>
              <br></br>
              <Link to='/Hotel'><center><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }>Book Now</Button></center></Link>;
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



    </div>
  )
}

export default ProjectLuxury