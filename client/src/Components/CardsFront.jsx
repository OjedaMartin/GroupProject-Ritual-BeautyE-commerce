import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img4 from '../images/img4.png'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.webp'
import img7 from '../images/img7.webp'
import img8 from '../images/img8.jpeg'
import img9 from '../images/img9.webp'
import style from './CardsFront.module.css'
import { NavLink } from 'react-router-dom';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

const items = [
    <div className={style.itemCard}>
        <NavLink to ={'details/b1061d09-0f2e-43b7-becd-869117cb296f'} className = {style.decorationT}>
      <img src={`${img4}`} alt="fff"className={style.imgCarouselB} />
      <p className={style.textShop}>DYSON</p>
       <p className={style.textInfo}>Supersonic™ Hair Dryer</p>
       <p className={style.textInfo}>$429.00</p>
       </NavLink>
    </div>,
    <div className={style.itemCard}>
        <NavLink to ={'details/ad232939-9770-44f8-893f-24a5d20a84e2'} className = {style.decorationT}>
       <img src={`${img5}`} alt="fff"className={style.imgCarouselB}/>
       <p className={style.textShop}>OLAPLEX</p>
       <p className={style.textInfo}>No. 3 Hair Repair Perfector</p>
       <p className={style.textInfo}>$28.00</p>
       </NavLink>
       
    </div>, 
    <div className={style.itemCard} >
        <NavLink to ={'details/c81ddc79-5906-44a8-98ca-a1bf53603ee4'} className = {style.decorationT}>
      <img src={`${img7}`} alt="fff"className={style.imgCarouselB}/>
      <p className={style.textShop}>NuFACE</p>
       <p className={style.textInfo}>Trinity Facial Toning Device</p>
       <p className={style.textInfo}>$339.00</p>
       </NavLink>
    </div>,
    <div className={style.itemCard} >
        <NavLink to ={'details/409db126-c841-47ce-b783-716643ecb8af'} className = {style.decorationT}>
       <img src={`${img6}`} alt="fff"className={style.imgCarouselB}/>
       <p className={style.textShop}>SOL DE JANEIRO</p>
       <p className={style.textInfo}>Brazilian Joia ™ Milky Leave-In Conditioner</p>
       <p className={style.textInfo}>$28.00</p>
       </NavLink>
    </div>,
    <div className={style.itemCard} >
        <NavLink to ={'details/b0431205-be78-433e-8554-1dc8a5350056'} className = {style.decorationT}>
       <img src={`${img8}`} alt="fff"className={style.imgCarouselB}/>
       <p className={style.textShop}>BOBBI BROWN</p>
       <p className={style.textInfo}>Vitamin Enriched Face Base Priming Moisturizer</p>
       <p className={style.textInfo}>$95.00</p>
       </NavLink>
    </div>, 
    <div className={style.itemCard} >
        <NavLink to ={'details/ed509bd1-e134-439d-862f-f02efd441401'} className = {style.decorationT}>
       <img src={`${img9}`} alt="fff"className={style.imgCarouselB}/>
       <p className={style.textShop}>DIOR</p>
       <p className={style.textInfo}>Dior Addict Lip Glow</p>
       <p className={style.textInfo}>$35.00</p>
       </NavLink>
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
    <><div className={style.titleCardF}>Best Sellers</div>
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