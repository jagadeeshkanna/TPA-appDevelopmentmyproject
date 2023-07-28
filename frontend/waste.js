import React from 'react';
import SearchBar from './SearchBar';

const waste = () => {
  // Example image data with name and URL
  const imageData = [
    { id: 1, name: 'kolli Hills', url: 'https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/126.jpg' },
    { id: 2, name: 'ooty', url: 'https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/2017/03/featured-image-6.jpg&w=500&h=400' },
    { id: 3, name: 'kodaikanal', url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_Kodaikanal.jpg' },
    { id: 4, name: 'tenkasi', url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/09/07005529/TENKASI-FEATURE-compressed.jpg' },
    { id: 5, name: 'thanjavur temple', url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6a/e5/a7/thanjavur-brihadeeshwara.jpg?w=1200&h=-1&s=1' },
    { id: 6, name: 'cambodia temple', url: 'https://cdn.britannica.com/56/122156-050-F5B469C8/overview-complex-Angkor-Wat-Cambodia.jpg' },
    { id: 7, name: 'batu caves', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Batu_Caves_stairs_2022-05.jpg' },
    { id: 8, name: 'kedarnath temple', url: 'https://www.euttaranchal.com/tourism/timthumb.php?src=https://www.euttaranchal.com/tourism/photos/kedarnath-2802883.jpg&w=750&h=510&q=50' },
    { id: 9, name: 'iceland blue lagoon', url: 'https://www.adventurouskate.com/wp-content/uploads/2019/10/Blue-Lagoon-Iceland.jpg' },
    { id: 10, name: 'great wall of china', url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg' },
    { id: 11, name: 'niagara Falls', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/3Falls_Niagara.jpg' },
    { id: 12, name: 'Patong Beach in Phuket', url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/fc/b9/e4/phi-phi-island.jpg?w=1200&h=-1&s=1' },
    { id: 13, name: 'burj al arab jumeirah', url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/457389536.jpg?k=1b5b93930a67d2372178da9df3c090ec47fb1f5622f5664dde18c4362f31b355&o=&hp=1' },
    { id: 14, name: 'emirates palace mandarin oriental', url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/439363451.jpg?k=4bf1f890aa97922ce0f70fa6a3214139e1a56cd167ca905e3b87c22e30aabf77&o=&hp=1' },
    { id: 15, name: 'Taj Lake Palace, Udaipur', url: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/13/68/136805_v5.jpeg' },
    { id: 16, name: 'atlantis paradise island bahamas', url: 'https://tempo.cdn.tambourine.com/windsong/media/windsong-mega-resorts-hero-5f5297b9c9e02.jpg' },
    { id: 17, name: 'The Westin Excelsior, Rome', url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ac/ec/eb/lobby.jpg?w=700&h=-1&s=1' },
    { id: 18, name: 'The Oberoi Udaivilas, Udaipur', url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/48812893.jpg?k=a034ea2f5c5431b95bedb68ac0aaa9507f6d2ba261a3182554b1dc81b4ab0f52&o=&hp=1' },
    { id: 19, name: 'raffles singapore', url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/9a/65/62/outdoor-rooftop-pool.jpg?w=700&h=-1&s=1' },
    { id: 20, name: 'grand hotel tremezzo', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Grand_Hotel_Tremezzo_on_Lake_Como_%28Lago_di_Como%29.JPG' },
    { id: 21, name: 'Habitas Bacalar, Mexico', url: 'https://s3.amazonaws.com/fathom_media/photos/habitas-bacalar-tanveer-badal-photography-lifestyle-deck-1.jpg.1200x800_q85_crop.jpg' },
    { id: 22, name: 'Casa Pueblo, Tulum, Mexico', url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/269185377.jpg?k=f40a6dc68a04f8bffe42a8a26580f5c5f022310d2d14c3d23e662ea8789d230c&o=' },
    { id: 23, name: 'The Robey, Chicago, USA', url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cd/1a/d7/the-robey.jpg?w=700&h=-1&s=1' },
    { id: 24, name: 'madurai', url: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/08/Things-to-do-in-Madurai_600.jpg' },
    { id: 25, name: 'dubai', url: 'https://www.dubai.com/media/uploads/dubai.com/2009/07/Atlantis%2C_The_Palm_Exterior.jpg'},
    { id: 26, name: '', url: '' },
    { id: 27, name: '', url: '' },

    // Add more image objects as needed
  ];

  return (
    <div>
      <center><h1>Search Image by Name</h1>
      <SearchBar imageData={imageData} /></center>
    </div>
  );
};

export default waste;
