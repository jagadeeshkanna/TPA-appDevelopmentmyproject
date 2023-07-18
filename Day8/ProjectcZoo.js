import React from 'react'
import './ProjectcZoo.css'
import {Link} from 'react-router-dom'
import { AppBar,Card,CardMedia,Typography,CardContent,Button} from '@mui/material'
function ProjectcZoo() {
  return (
    <div>
         <center> <AppBar className='be'><h1>Places  you can visit during vacation</h1></AppBar></center>
      <br></br><br></br><br></br> <br></br><br></br><br></br>
      <div className='bi'>
            <Link to ="/ProjectPayment"><Button variant="contained">Next</Button></Link>
            </div>
      <div className='grid7'>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://daytripper28.com/wp-content/uploads/2018/04/Rinos.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>san diego zoo</p></b>
            <br></br>
It is well known for its lush, naturalistic habitats and unique animal encounters and is home to more than 3,700 rare and endangered animals representing approximately 660 species and subspecies and a prominent botanical collection with more than 700,000 plants.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://images.squarespace-cdn.com/content/v1/5e2a0da70bd4a53d70d15eb6/1598286121760-IWK6H6A2WD5SC4P82NOM/%40andremaierphotography"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>the bronx zoo</p></b>
            <br></br>
Bronx Zoo -
Today, the Bronx Zoo is world-renowned for its large and diverse animal collection, and its award-winning exhibitions. The zoo is part of an integrated system of four zoos and one aquarium managed by the Wildlife Conservation Society (WCS), and it is accredited by the Association of Zoos and Aquariums (AZA).
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.zoo-berlin.de/typo3temp/assets/_processed_/6/0/csm_zoo-plan_EN_388c559af7.png  "/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>Berlin Zoological Garden</p></b>
            <br></br>
            Why is Berlin Zoo so famous?
Welcome to Zoo Berlin
Not only is it the oldest and most frequently visited zoo in the country, it is also home to the largest variety of species of any zoo in the world –including the only giant pandas in Germany.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://2.bp.blogspot.com/-s0D0FCjgfE8/VVlQK_RrPPI/AAAAAAAADOk/wVOyaC7lJ3E/s1600/columbus%2Bzoo%2Bmap%2B2015.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>Columbus Zoo and Aquarium</p></b>
            <br></br>
Columbus Zoo and Aquarium - 
The Columbus Zoo is home to more than 7,000 animals representing over 800 species and sees over 2.3 million visitors annually. The animal exhibits are divided into regions of the world, with the zoo currently operating eight such regions.
            </Typography>
         </CardContent>
        </Card>

      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.pretoriazoo.org/wp-content/uploads/2023/06/MAP-14-JUNE-2023-_page-0001.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>national zoological gardens of south africa</p></b>
            <br></br>
The National Zoological Garden of South Africa is the largest zoo in the country. More widely known as the Pretoria Zoo, the National Zoological Garden in Boom Street is not only the largest zoo in South Africa and the only one with national status, but is also rated as one of the top zoos in the world.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://2.bp.blogspot.com/-vgvu7WgYHHI/UPc1FWlI56I/AAAAAAAAB8A/dkTbvYV2R6k/s1600/Animals+1.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>chester zoo</p></b>
            <br></br>
Explore a world of wildlife like never before at Whipsnade Zoo, the largest zoo in the UK. Enjoy a full day of adventure making incredible memories. Experience thousands of amazing animals and learn how, as a ZSL conservation zoo, we're protecting their future.
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://c8.alamy.com/comp/AMX15T/tiergarten-schoenbrunn-austria-vienna-AMX15T.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>Tiergarten Schönbrunn, Vienna, Austria</p></b>
            <br></br>
Vienna's Tiergarten Schönbrunn is the oldest zoo in the world. It began as a royal menagerie in 1752, symbolic of imperial Austrian extravagance, and of Emperor Franz I's keen interest in the natural world
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://susanhuntyule.com/_images/bigmaps/bronxZoo.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>Bronx Zoo, New York City, USA</p></b>
            <br></br>
Bronx Zoo -
Today, the Bronx Zoo is world-renowned for its large and diverse animal collection, and its award-winning exhibitions. The zoo is part of an integrated system of four zoos and one aquarium managed by the Wildlife Conservation Society (WCS), and it is accredited by the Association of Zoos and Aquariums (AZA).
            </Typography>
         </CardContent>
        </Card>
      <Card sx={{maxWidth:345}}>
         <CardMedia 
         sx={{height:300}}
          image="https://www.holidify.com/images/cmsuploads/compressed/RSScover_20180519163742.jpg"/>
          <CardMedia/>
         <CardContent>
            <Typography>
            <b><p>San Diego Zoo, San Diego, USA</p></b>
            <br></br>
            Located just north of downtown San Diego in Balboa Park, the Zoo is also an accredited botanical garden, caring for more than 700,000 individual plants, including a prominent curated assemblage of close to 13,000 specimens, representing 3,100 species.
            </Typography>
         </CardContent>
        </Card>
        </div>
    </div>
  )
}

export default ProjectcZoo