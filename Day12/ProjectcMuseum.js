import React from 'react'
import './ProjectcMuseum.css'
import {Link} from 'react-router-dom'
import { AppBar,Card,CardMedia,Typography,CardContent,Button} from '@mui/material'
function ProjectcMuseum() {
  return (
    <div>
             <center> <AppBar className='be'><h1>Places  you can visit during vacation</h1></AppBar></center>
      <br></br><br></br><br></br> <br></br><br></br><br></br>
      <div className='bm'>
            <Link to ="/Mhotel"><Button variant="contained">Next</Button></Link>
            </div>
      <div className='grid6'>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://cdn.britannica.com/02/121002-050-92DB902F/Louvre-Museum-pyramid-Paris-Pei-IM.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>louvre museum</p></b>
            <br></br>
            Can I visit the museum for free? Do I have to book tickets? Admission is free to the Musée du Louvre and the Musée Eugène-Delacroix for the following visitors (valid proof required): all visitors under the age of 18 and 18-25 year-old residents of the European Economic Area (EU, Norway, Iceland, and Liechtenstein)
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://upload.wikimedia.org/wikipedia/commons/8/86/British_Museum_%28aerial%29.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>british museum</p></b>
            <br></br>
            The first national public museum of the world. The British Museum is unique in bringing together under one roof the cultures of the world, spanning continents and oceans. No other museum is responsible for collections of the same depth and breadth, beauty and significance.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/fjmladquxod4siqmq1vu/The%20State%20Hermitage%20Museum%20Ticket%20in%20Saint%20Petersburg.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>state hermitage museum</p></b>
            <br></br>
            The Hermitage holdings include nearly three million items dating from the Stone Age to the present. Among them is one of the world's richest collections of western European painting since the Middle Ages, including many masterpieces by Renaissance Italian and Baroque Dutch, Flemish, and French painters
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.theacropolismuseum.gr/sites/default/files/2020-01/anaskafi.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>acropolis museum</p></b>
            <br></br>
The Acropolis Museum | Photo story of one of the world's best ...
The Acropolis Museum is consistently rated as one of the best museums in the world. Devoted to the Parthenon and its surrounding temples, it is cleverly perched above Athens like a luminous box. The large glass panes beautifully draw in the ancient and modern parts of the city, making it a truly evocative experience.
            </Typography>
         </CardContent>
        </Card>

      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://img.traveltriangle.com/blog/wp-content/uploads/2018/07/Vatican-Museum-Cover-Image.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>vatican museums</p></b>
            <br></br>
Not only do, the Vatican Museums house the exquisite art collections, archeology and ethnology created by the various Pontiffs over the centuries, but they also feature some of the most unique and historically and artistically significant places of the Apostolic Palaces.
            <br></br>

            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3c/8b/a5/photo1jpg.jpg?w=1200&h=-1&s=1"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>moma</p></b>
            <br></br>
Museum of Modern Art
The Museum of Modern Art (MoMA) is an art museum located in Midtown Manhattan, New York City, on 53rd Street between Fifth and Sixth Avenues.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.colorkinetics.com/content/dam/color-kinetics/showcases/rijksmuseum/rijksmuseum1_lg.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>THE RIJKSMUSEUM, AMSTERDAM, THE NETHERLANDS</p></b>
            <br></br>
Rijksmuseum | Amsterdam, The Netherlands | Attractions ...
The Netherlands' top treasure house, the Rijksmuseum (pronounced 'rikes'), is among the world's finest art museums. With over 1.5km of galleries, it packs in around 8000 artworks with paintings by homegrown heroes Rembrandt, Vermeer and Van Gogh, as well as plenty of other masterpieces.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.spain.info/.content/images/cabeceras-grandes/madrid/Museo-Prado-2-c-Jose-Barea-Turismo-Madrid.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>THE PRADO, MADRID, SPAIN</p></b>
            <br></br>
Prado Museum History - Museo Nacional del Prado
One of the most important museums in all of Spain, Prado Museum Madrid (Museo Nacional del Prado) is known to have the most comprehensive collection of Spanish art and one of the most outstanding collections of European Art between the 12th century to the early 20th century.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.moma.org/d/p/sa/maximum/moma_renovation_and_expansion.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b>THE MUSEUM OF MODERN ART (MOMA), NEW YORK, USA</b>
            <br></br>
Today, MoMA's evolving collection contains almost 200,000 works from around the world spanning the last 150 years. The collection includes an ever-expanding range of visual expression, including painting, sculpture, printmaking, drawing, photography, architecture, design, film, and media and performance art.
            </Typography>
         </CardContent>
        </Card>
        </div>
    </div>
  )
}

export default ProjectcMuseum