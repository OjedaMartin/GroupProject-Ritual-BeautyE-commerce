import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img4 from '../images/img4.png'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.webp'
import './CardsFront.css'

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 6 },
};

const items = [
    <div className="item" >
      <img src={`${img4}`} alt="fff" width='220'height='280' />
      <p className='textShop'>SHOP NOW</p>
    </div>,
    <div className="item" >
       <img src={`${img5}`} alt="fff" width='220'height='280'/>
       <p className='textShop'>SHOP NOW</p>
    </div>, 
    <div className="item" >
       <img src={`${img6}`} alt="fff" width='220'height='280'/>
       <p className='textShop'>SHOP NOW</p>
    </div>,
    <div className="item" >
      <img src={`${img4}`} alt="fff" width='220'height='280'/>
      <p className='textShop'>SHOP NOW</p>
    </div>,
    <div className="item" >
       <img src={`${img5}`} alt="fff" width='220'height='280'/>
       <p className='textShop'>SHOP NOW</p>
    </div>, 
    <div className="item" >
       <img src={`${img6}`} alt="fff" width='220'height='280'/>
       <p className='textShop'>SHOP NOW</p>
    </div>,
    <div className="item" >
      <img src={`${img4}`} alt="fff" width='220'height='280'/>
      <p className='textShop'>SHOP NOW</p>
    </div>,
    <div className="item" >
       <img src={`${img5}`} alt="fff" width='220'height='280'/>
       <p className='textShop'>SHOP NOW</p>
    </div>, 
    <div className="item" >
       <img src={`${img6}`} alt="fff" width='220'height='280'/>
       <p className='textShop'>SHOP NOW</p>
    </div>,
    
  
];

const onInitialized = (e) => {
    console.debug(`Start position(activeIndex) on init: ${e.item}. Event:`, e);
};

const onSlideChange = (e) => {
    console.debug(`Item's position before a change: ${e.item}. Event:`, e);
};

const onSlideChanged = (e) => {
    console.debug(`Item's position after changes: ${e.item}. Event:`, e);
};

const onResized = (e) => {
    console.debug(`Item's position after resize: ${e.item}. Event:`, e);
};

const Carousel = () => (
    <><div className='titleCardF'>Best Sellers</div>
    <AliceCarousel
        mouseTracking
        keyboardNavigation
        items={items}
        responsive={responsive}
        onInitialized={onInitialized}
        onSlideChange={onSlideChange}
        onSlideChanged={onSlideChanged}
        onResized={onResized} /></>
);

export default Carousel