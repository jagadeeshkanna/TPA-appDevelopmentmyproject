import React from 'react'
import './ProjectcHotelloc.css';
import   {Link} from "react-router-dom"
import { AppBar, TextField,Button,Card, CardMedia, CardContent, Typography,Box} from '@mui/material'
function ProjectcHotelloc() {
  return (
    <div>
             <center>
            <AppBar>
        <h2>Search the Hotel</h2>
            </AppBar>
            <br></br>
            <br></br>
            <br></br>
           <br></br>
            <p className='hi1'><TextField variant="outlined" label="Search"/></p>
            <h1 className='hello1'><Button variant="contained"  className="submitButton" sx={{ bgcolor : "blue" } }> Search </Button></h1>
        </center>

          <div className='grid9'>
        <Card sx={{maxWidth:345}}>
        <Link to = '/ProjectcHotel'><CardMedia 
         sx={{height:300}}
          image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/457389536.jpg?k=1b5b93930a67d2372178da9df3c090ec47fb1f5622f5664dde18c4362f31b355&o=&hp=1"/>
          <CardMedia/></Link>

         <CardContent>
         <Typography>
      <b>burj al arab jumeirah</b><br></br>
                <br></br>
Burj Al Arab: What Makes it a 7-Star Hotel? (Updated 2023 ...
The high level of service, the luxury and prestige of its rooms, the fine materials of its fittings and its excellent restaurants have earned the Burj Al Arab the title of “7-Star Hotel” that has made it famous in the world

            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
        <Link to='/ProjectcHotel'><CardMedia 
         sx={{height:300}}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emirates_Palace.jpg/1200px-Emirates_Palace.jpg"/><CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Emirates palace mandarin oriental</b>
              <br></br><br></br>
              The grand hotel houses 394 luxury rooms, a private beach that stretches across 1.3km of white sand, a helicopter landing pad, and a range of exquisite dining venues. Famed for its luxury interior, the palace features glittering chandeliers and elaborate domes embellished in gold, mother-of-pearl, and crystals.

            </Typography>
         </CardContent>
        </Card>

        <Card sx={{maxWidth:345}}>
        <Link to='/ProjectcHotel'><CardMedia 
         sx={{height:300}}
          image="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/13/68/136805_v5.jpeg"/><CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Taj Lake Palace, Udaipur</b>
              <br></br><br></br>
 
              The shooting of the Hollywood James Bond film 'Octopussy' took place in 1983 and that made Lake Palace world famous.
            
History. The Lake Palace was built between 1743 and 1746 under the direction of the Maharana Jagat Singh II (62nd successor to the royal dynasty of Mewar) of Udaipur, Rajasthan as a summer palace. It was initially called Jagniwas or Jan Niwas after its founder.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/ProjectcHotel'><CardMedia 
         sx={{height:300}}
          image="https://tempo.cdn.tambourine.com/windsong/media/windsong-mega-resorts-hero-5f5297b9c9e02.jpg"/><CardMedia/>
     </Link>
         <CardContent>
            <Typography>
              <b>Atlantis paradise island bahamas</b>
              <br></br><br></br>
 Magic Guides
Generally, a family of four can expect to spend between $300 and $800 per night at Atlantis Bahamas; however, prices can fluctuate due to supply and demand. We searched prices for 2023 and found that the cheapest option is off-season at The Coral for $206 per night.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/ProjectcHotel'><CardMedia 
         sx={{height:300}}
          image="https://mondomulia.com/wp-content/uploads/2015/09/Westin-Excelsior-Hotel-Rome-3-2.jpg"/><CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>The Westin Excelsior, Rome</b>
              <br></br><br></br>
              The Westin Excelsior Rome was born in January 1906 in one of the city's most imposing palaces and, across the centuries, it became famous as the historical meeting point for the international jet-set and for renowned exponents of national culture, art and high-society.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to='/ProjectcHotel'><CardMedia 
         sx={{height:300}}
          image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/48812893.jpg?k=a034ea2f5c5431b95bedb68ac0aaa9507f6d2ba261a3182554b1dc81b4ab0f52&o=&hp=1"/><CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>The Oberoi Udaivilas, Udaipur</b>
              <br></br><br></br>
             

Spread over 50 acres, pavilions and domes feature at The Oberoi Udaivilas, which features grand architecture inspired by the palaces of Rajasthan. The property is built on 200-year old hunting grounds of the Maharana of Mewar.
            </Typography>
         </CardContent>
        </Card>
            <Card sx={{maxWidth:345}}>
            <Link to="/ProjectcHotel"><CardMedia 
         sx={{height:300}}
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/79/c9/3b/full-hotel-facade.jpg?w=700&h=-1&s=1"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Raffles singapore</b>
              <br></br><br></br>
              Boasting Singapore's only electric lights and fans, the hotel soon became known as the epitome of luxury, and attracted rich and famous guests from around the globe during its heydey, including Somerset Maugham, Noel Coward and Charlie Chaplin
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to="/ProjectcHotel"><CardMedia 
         sx={{height:300}}
          image="https://cdn.kiwicollection.com/media/property/PR004315/xl/004315-01-0%20-%20Grand%20Hotel%20Tremezzo%20Facade-Grand%20Hotel%20Tremezzo.jpg?cb=1678907415"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Grand Hotel Tremezzo</b>
              <br></br><br></br>
              Valentina de Santis is the owner and CEO of Grand Hotel Tremezzo on Lake Como – which is often listed as one of the top hotels in Italy
    
Grand Hotel Tremezzo has 84 rooms & suites including : 6 hyper-luxe Suites in the hyper-exclusive all-suites Rooftop Floor, with private panoramic terraces and outdoor heated Jacuzzis.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to="/ProjectcHotel"><CardMedia 
         sx={{height:300}}
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/5d/59/60/bellagio-hero-2016.jpg?w=700&h=-1&s=1"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Bellagio</b>
              <br></br><br></br>
              In addition to its famous choreographed water feature, the Bellagio attracts high-end boutique shoppers looking for a bit of Chanel, Louis Vuitton, Prada, or Gucci, and the casino of course also attracts plenty with its 5,600 square-foot BetMGM Sportsbook, and high table limit poker rooms.

            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to="/ProjectcHotel"><CardMedia 
         sx={{height:300}}
          image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/48356404.jpg?k=94a7dba4725f4284d857358a3aa6bea0e3b3d342e52fa60ae761e44ea35c5074&o=&hp=1"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>The Oberoi Rajvilas, Jaipur</b>
              <br></br><br></br>
              The Oberoi Rajvilas is a luxury hotel located just outside of Jaipur in Rajasthan in India. Rajvilas has 71 rooms, tents and villas set in extensive landscaped gardens all within easy reach of the famous city of Jaipur and Amber Fort. The Oberoi Rajvilas is part of the luxury Oberoi Group.

            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
        <Link to="/ProjectcHotel"><CardMedia 
         sx={{height:300}}
          image="https://www.hospitalitynet.org/picture/xxl_153119091.jpg?t=1601442500"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>Mandarin Oriental Hotel Group</b>
              <br></br><br></br>
              Mandarin Oriental has a strong pipeline of hotels and residences under development, and is a member of the Jardine Matheson Group.
              Mandarin Oriental is not a part of Marriott. They are 2 completely separate hotel companies. Mandarin Oriental is a company based out of Hong Kong, while Marriott is an American company.
            </Typography>
         </CardContent>
        </Card>
        <Card sx={{maxWidth:345}}>
         <Link to="/ProjectcHotel"><CardMedia 
         sx={{height:300}}
          image="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/0ffersimage/Master%20Exterior%20Image.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"/>
          <CardMedia/></Link>
         <CardContent>
            <Typography>
              <b>The Taj mahal palace</b>
              <br></br><br></br>
The Taj Mahal Palace
The Taj Mahal Palace
image of The Taj Mahal Palace
en.wikipedia.org
The Taj Mahal Palace is a heritage, five-star, luxury hotel in the Colaba area of Mumbai, Maharashtra, India, situated next to the Gateway of India. Built in the Indo-Saracenic style, it opened in 1903 as the Taj Mahal Hotel and has historically often been known simply as "The Taj".
            </Typography>
         </CardContent>
        </Card>

        </div>
        <br></br>
        <br></br>
        <div className='sm1'>
<Box sx={{width:1530,height:200,bgcolor:"#0277bd"}}>
<center><p>TRIP PLANNING APPLICATION</p>
        <p>@2023 Trip planning application.All rights reserved</p>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIx517NltToEC42TqgEXgLTZHsl3xFHaq0Jg&usqp=CAU' className='co'></img>&nbsp;&nbsp;&nbsp;&nbsp;   
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2FpeITVaC9KnLreYyEW-_HQIt6kdwZTRMA&usqp=CAU' className='co'></img>&nbsp;&nbsp;&nbsp;&nbsp;   
         <img src='data:image/png;base64,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'className='co'></img>&nbsp;&nbsp;&nbsp;&nbsp;
         <img src='data:image/png;base64,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'className='co'></img>
         </center>
</Box>
</div>
    </div>
  )
}

export default ProjectcHotelloc