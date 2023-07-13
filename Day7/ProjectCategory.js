import { AppBar,Card,CardMedia,CardContent,Typography} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import './ProjectCategory.css'
function ProjectCategory() {
  return (
    <div>
        <center><AppBar className='ct'><h1>Category</h1></AppBar></center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='grid2'>
        <Card sx={{maxWidth:345}}>
         <Link to="/Projectcbeach"><CardMedia 
         sx={{height:300}}
          image="https://escales.ponant.com/wp-content/uploads/2020/12/plage.jpg"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
            <b><p>Beaches</p></b>
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
        <Link to="/ProjectcHills"><CardMedia 
         sx={{height:300}}
          image="https://e0.pxfuel.com/wallpapers/1004/631/desktop-wallpaper-green-hills-green-river-and-green-mountains.jpg"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
            <b><p>Hills and Mountains</p></b>
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
        <Link to="/ProjectcMuseum"><CardMedia 
         sx={{height:300}}
          image="https://tzmedia.b-cdn.net/media/images/fr/place/gallery/medium/52c559e6c8624ff014de4f3d49418e59.jpg"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
            <b><p>Musems</p></b>
            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
        <Link to="/ProjectcZoo"><CardMedia 
         sx={{height:300}}
          image="https://www.insideindianjungles.com/wp-content/uploads/2020/04/wildlife-sancutuaries-in-india.jpg"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
            <b><p>WildLifeSantuary</p></b>
            </Typography>
         </CardContent>
        </Card>
        
        <Card sx={{maxWidth:345}}>
        <Link to="/ProjectcTemple"><CardMedia 
         sx={{height:300}}
          image="https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U="/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
            <b><p>Temples</p></b>
            </Typography>
         </CardContent>
        </Card>
        
        <Card sx={{maxWidth:345}}>
        <Link to="/ProjectcHeritage"><CardMedia 
         sx={{height:300}}
          image="https://www.planetware.com/photos-large/PER/peru-machu-picchu-world-heritage.jpg"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
            <b><p>Heritage Places</p></b>
            </Typography>
         </CardContent>
        </Card>

        </div>
    </div>
  )
}

export default ProjectCategory