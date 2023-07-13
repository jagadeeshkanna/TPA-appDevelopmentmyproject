import React from 'react'
import { AppBar,Card,CardMedia,Typography,CardContent, Avatar,Button} from '@mui/material'
import './ProjectcHeritage.css'
function ProjectcHeritage() {
  return (
    <div>
            <AppBar className='be'> <center>TOTAL PRICE CALCULATION</center>
            </AppBar>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
           <div className='bu'>
            <Button variant="contained">Next</Button>
            </div>
         
      <br></br><br></br><br></br> <br></br><br></br><br></br>
      <div className='grid8'>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://adda247-wp-multisite-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/multisite/sites/5/2022/05/12120742/Madhavi-Gaur-1568x941.png"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>Taj Mahal</p></b>
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>great wall of china</p></b>
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://ca-times.brightspotcdn.com/dims4/default/5337cc3/2147483647/strip/true/crop/580x419+0+0/resize/1200x867!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fae%2Fca%2F1421747955c2b3621a198e050bd4%2Flat-100-facts-for-100-years-of-machu-picchu-fa-002"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>machu picchu</p></b>
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>petra</p></b>
            </Typography>
         </CardContent>
        </Card>

      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://cdn.mos.cms.futurecdn.net/veQKQrhqeLXwXHw4Q6qM3N.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>angkor wat</p></b>
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://assets.editorial.aetnd.com/uploads/2010/06/d8785430-77ae-45e9-9d4c-daa3b42f79b2.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>stonehenge</p></b>
            </Typography>
         </CardContent>
        </Card>
        </div>
        <div className='bu'>
        </div>
    </div>
  )
}

export default ProjectcHeritage