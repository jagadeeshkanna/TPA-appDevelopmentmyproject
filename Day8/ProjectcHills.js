import React from 'react'
import './ProjectcHills.css'
import {Link} from 'react-router-dom'
import { AppBar,Card,CardMedia,Typography,CardContent,Button} from '@mui/material'
function ProjectcHills() {
  return (
    <div>
         <center> <AppBar className='be'>TOTAL PRICE CALCULATION</AppBar></center>
      <br></br><br></br><br></br> <br></br><br></br><br></br>
      <div className='bh'>
            <Link to ="/ProjectPayment"><Button variant="contained">Next</Button></Link>
            </div>
      <div className='grid4'>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>mount everest</p></b>
            <br></br>
            Mount Everest is a peak in the Himalaya mountain range. It is located between Nepal and Tibet, an autonomous region of China. At 8,849 meters (29,032 feet), it is considered the tallest point on Earth.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://upload.wikimedia.org/wikipedia/commons/c/c8/Himalayas_and_allied_ranges_NASA_Landsat_showing_the_eight_thousanders%2C_annotated_with_major_rivers.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>himalayas</p></b>
            <br></br>
            The Himalayas abut or cross five countries: Bhutan, India, Nepal, China, and Pakistan. The sovereignty of the range in the Kashmir region is disputed among India, Pakistan, and China.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://cdn.britannica.com/33/153433-050-F76BDF75/Sunrise-Mount-Kilimanjaro-Tanzania.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>mount kilimanjaro </p></b>
            <br></br>
            The majestic mountain is a snow-capped volcano. Located in Tanzania, Mount Kilimanjaro is Africa's tallest mountain at about 5,895 meters (19,340 feet). It is the largest free-standing mountain rise in the world, meaning it is not part of a mountain range
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://cdn.insidedarjeeling.com/wp-content/uploads/2022/02/Kanchenjunga.jpeg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>kangchenjunga</p></b>
            <br></br>
K2 is known as the Savage Mountain as it is extremely difficult to scale the peak. It has one of the highest fatality- to summit rate – one death after every four successful summits. Mount Kanchenjunga (also spelled as Kangchenjunga) is located at the border of Nepal and Sikkim (India).
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://upload.wikimedia.org/wikipedia/commons/3/35/Fairy_Meadows_and_the_view_of_Nanga_Parbat.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>nanga parbat</p></b>
            <br></br>
Nanga Parbat | Himalayas, Karakoram, 8,126m | Britannica
Nanga Parbat, also called Diamir, one of the world's tallest mountains, 26,660 feet (8,126 metres) high, situated in the western Himalayas 17 miles (27 km) west-southwest of Astor, in the Pakistani-administered sector of the Kashmir region.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://upload.wikimedia.org/wikipedia/commons/7/72/Lhotse-fromChukhungRi.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>Lhoste</p></b>
            <br></br>
            Lhotse, (Tibetan: “South Peak”) also called E1, mountain massif in the Himalayas on the border of Nepal and the Tibet Autonomous Region of China. It consists of three summits, the highest of which—Lhotse I at 27,940 feet (8,516 metres)—is the world's fourth tallest peak.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.himalayanwonders.com/siteblog/wp-content/uploads/2014/03/On-the-trail-to-the-Annapurna-Base-Camp.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>annapurna</p></b>
            <br></br>
            Annapurna I is the world's 10th highest peak. Although climbers had reached 28,150 feet (8,580 metres) on Mount Everest by 1924, Annapurna I became famous in 1950 as the first peak above 26,000 feet (8,000 metres) to be ascended to the summit.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://cdn.britannica.com/23/120923-050-8FF29907/Nanga-Parbat.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>nanga parbat</p></b>
            <br></br>
Nanga Parbat | Himalayas, Karakoram, 8,126m | Britannica
Nanga Parbat, also called Diamir, one of the world's tallest mountains, 26,660 feet (8,126 metres) high, situated in the western Himalayas 17 miles (27 km) west-southwest of Astor, in the Pakistani-administered sector of the Kashmir region
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://peakvisor.com/photo/manaslu-1.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>manaslu</p></b>
            <br></br>
Manalsu is statistically one of the safer 8000ers with 2,172 summits (including the fore summit)and 88 deaths for a death rate of 1.49, putting it seventh out of eight in comparison to the other 8000ers in Tibet and Nepal.
            </Typography>
         </CardContent>
        </Card>
        </div>
    </div>
  )
}

export default ProjectcHills