import { AppBar,Card,CardMedia,Typography,CardContent} from '@mui/material'
import React from 'react'
import './Projectcbeach.css'
function Projectcbeach() {
  return (
    <div>
      <center> <AppBar className='be'>TOTAL PRICE CALCULATION</AppBar></center>
      <br></br><br></br><br></br> <br></br><br></br><br></br>
      <div className='grid3'>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://w0.peakpx.com/wallpaper/311/756/HD-wallpaper-whitehaven-beach-nature-australia.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>whitehaven beach </p></b>
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
            </Typography>
         </CardContent>
        </Card>
        </div>
    </div>
  )
}

export default Projectcbeach