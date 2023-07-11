import { AppBar, TextField,Button,Card, CardMedia, CardContent, Typography} from '@mui/material'
import React from 'react'
import './ProjectLocation.css'
function ProjectLocation() {
  return (
     <div>
        <center>
            <AppBar>
        <h2>Search the Place</h2>
            </AppBar>
            <br></br>
            <br></br>
            <br></br>
           <br></br>
            <p className='hi'><TextField variant="outlined" label="Search"/></p>
            <h1 className='hello'><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }> Search </Button></h1>
        </center>

          <div className='grid1'>
        <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/126.jpg"/><CardMedia/>
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
         <CardMedia 
         sx={{height:300}}
          image="https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/2017/03/featured-image-6.jpg&w=500&h=400"/><CardMedia/>
         <CardContent>
            <Typography>
              <b>Ooty</b>
              <br></br><br></br>
              It,is popularly known as the 'Queen of Hill Stations' is nestled in the Nilgiri hills in Tamil Nadu. The lush green tea plantations, the vast meadows, the towering mountains, dense pine and eucalyptus trees, sparkling waterfalls and serene lakes make Ooty a prominent part of any bucket list.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://i0.wp.com/tourismtn.com/wp-content/uploads/2020/12/The-Green-Pillar-Rock.jpg?resize=1024%2C512&ssl=1"/><CardMedia/>
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
         <CardMedia 
         sx={{height:300}}
          image="https://t3.ftcdn.net/jpg/04/96/24/84/360_F_496248418_QKRReou7uViYWZoMO6zye2QHdPkOUdWl.jpg"/><CardMedia/>
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
         <CardMedia 
         sx={{height:300}}
          image="https://hindutemplesblog.files.wordpress.com/2017/10/02-31.jpg?w=600"/><CardMedia/>
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
         <CardMedia 
         sx={{height:300}}
          image="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/08/Angkor-Wat-Cambodia.jpg?resize=1200%2C797&ssl=1"/><CardMedia/>
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
         <CardMedia 
         sx={{height:300}}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWiz1QzOjl1LT70XAg-rCfMYHaq160BTWYQ&usqp=CAU"/>
          <CardMedia/>
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
         <CardMedia 
         sx={{height:300}}
          image="https://kedarnathtemple.com/wp-content/uploads/2019/12/2019-07-29.jpg"/>
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
         <CardMedia 
         sx={{height:300}}
          image="https://i.insider.com/5d38a60736e03c25af5464d3?width=1000&format=jpeg&auto=webp"/>
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
         <CardMedia 
         sx={{height:300}}
          image="https://i.insider.com/5e21c57cab49fd40043ae7f5?width=800&format=jpeg&auto=webp"/>
          <CardMedia/>
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
         <CardMedia 
         sx={{height:300}}
          image="https://i.insider.com/5d377bf436e03c29e93eed13?width=800&format=jpeg&auto=webp"/>
          <CardMedia/>
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
         <CardMedia 
         sx={{height:300}}
          image="https://i.insider.com/5d38b30636e03c59cb0063c2?width=800&format=jpeg&auto=webp"/>
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
        </div>
  )
}

export default ProjectLocation