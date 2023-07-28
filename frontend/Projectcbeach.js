import { AppBar,Card,CardMedia,Typography,CardContent,Button} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import './Projectcbeach.css'
function Projectcbeach() {
  return (
    <div>
      <center> <AppBar className='be'>Places  you can visit during vacation</AppBar></center>
      <br></br><br></br><br></br> <br></br><br></br><br></br>
      <div className='bc'>
            <Link to ="/Mhotel"><Button variant="contained">Next</Button></Link>
            </div>
      <div className='grid3'>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://w0.peakpx.com/wallpaper/311/756/HD-wallpaper-whitehaven-beach-nature-australia.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>whitehaven beach </p></b>
            <br></br><br></br>
- Sailing Whitsundays
Famous for its silky smooth white sand and crystal clear turquoise water, Whitehaven Beach is on the bucket lists of travellers worldwide with thousands making the journey each year. Despite the number of visitors, the iconic pure white sand found only on Whitehaven Beach and the surrounding landscape remains pristine
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.passagenspromo.com.br/blog/wp-content/uploads/2018/11/baia-do-sancho-onde-fica.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>Baia do Sancho</p></b>
            <br></br>
            Nestled on the small island of Fernando de Noronha - about an hour off the coast of Brazil - the remote Baía do Sancho lies in a protected cove backed up against huge palm-fringed cliffs.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.havelockislandbeachresort.com/medias/article/big/116/havelock-island-beach-resort-radhanagar-beach-15.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>Radhanagar Beach</p></b>
            <br></br>
Radhanagar Beach is known as one of the most beautiful beaches in Asia. It attracts huge tourism due to its awe striking beauty and is also titled as the 7th most beautiful beach in the world. Radhanagar beach is a treat to watch during sunrise and sunset.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.sicilyonweb.com/wp-content/uploads/2018/01/conigli-island.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>Rabbit Beach</p></b>
            <br></br>
            Located on the little island of Lampedusa, 176 km (109 miles) south west of Sicily, Rabbit beach is named after its original inhabitants.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2012/02/28/ad/beaches-ipanema-brazil.rend.hgtvcom.616.462.suffix/1491583328232.jpeg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>Ipanema Beach</p></b>
            <br></br>
            Located in the city of Rio de Janeiro, Brazil, Ipanema Beach is the beach in the famous Ipanema neighbourhood, one of the most affluent and trendy in the entire city. This beach, reputed to be one of the most beautiful in the world, lies right next to the iconic Copacabana.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://holeinthedonut.com/wp-content/uploads/2021/05/Thailand-Krabi-Railay-Beach-West-with-Longtail-boats-1640x1100.jpg "/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>Railay Beach</p></b>
            <br></br>
            Nestled within the Hat Noppharat Thara – Mu Ko Phi Phi National Park, Railay Beach boasts stunning natural scenery, turquoise waters, and immaculate shores, earning it the title of “Krabi's second Phi Phi.” With impressive cliffs dotting the landscape, Railay has become a famed rock-climbing hub for both local and 
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://irisholidays.com/keralatourism/wp-content/uploads/2014/06/best-things-to-do-in-varkala.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>varkala beach</p></b>
            <br></br>
Varkala beach and Cliff- Photos, Reviews and When to Visit
Varkala beach is famous for its rock cliffs, pristine sands, blue waters and mineral springs. The cliff accommodating stretches of shops, restaurants, resorts and beach houses provide everything a tourist is looking for. The view of sunrise and sunset from the Varkala beach is an exotic treat to watch.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.macleayargus.com.au/images/transform/v1/crop/frm/141172646/a246655e-062c-40a5-ab6f-4fe80670ab90.png/r0_0_2048_1364_w2048_h1364_fmax.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>horseshoe bay</p></b>
            <br></br>
            Horseshoe Bay is known for great lake activities, wineries, picturesque parks, and breathtaking trails. Discover the best Texas Hill Country attractions and activities, including: Lake LBJ. Enchanted Rock State Park.
            
            </Typography>

         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.best-of-oahu.com/images/Lanikai-Beach-Photo-4.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>lanikai beach</p></b>
            <br></br>
            Horseshoe Bay is known for great lake activities, wineries, picturesque parks, and breathtaking trails. Discover the best Texas Hill Country attractions and activities, including: Lake LBJ. Enchanted Rock State Park.   
            </Typography>
         </CardContent>
        </Card>
        </div>
    </div>
  )
}

export default Projectcbeach