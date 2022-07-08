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
import { useSelector } from 'react-redux';


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

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

export default function  Carousel (){
    const prod0 ="Supersonic™ Hair Dryer";
    const prod1 ="No. 3 Hair Repair Perfector";
    const prod2="Trinity Facial Toning Device";
    const prod3 ="Brazilian Joia ™ Milky Leave-In Conditioner";
    const prod4 ="Vitamin Enriched Face Base Priming Moisturizer";
    const prod5="Dior Addict Lip Glow";
    const idName1=[];
    const productosData = useSelector((state) => state.products);
    productosData?.map((e) => e.name === prod0 ? idName1.push(e.id):"");
    productosData?.map((e) => e.name === prod1 ? idName1.push(e.id):"");
    productosData?.map((e) => e.name === prod2 ? idName1.push(e.id):"");
    productosData?.map((e) => e.name === prod3 ? idName1.push(e.id):"");
    productosData?.map((e) => e.name === prod4 ? idName1.push(e.id):"");
    productosData?.map((e) => e.name === prod5 ? idName1.push(e.id):"");
    console.log(idName1, 'idname1');

    const items = [
   
        <div className={style.itemCard}>
            <NavLink to ={'details/' + idName1[0]} className = {style.decorationT}>
          <img src={`${img4}`} alt="fff"className={style.imgCarouselB} />
          <p className={style.textShop}>DYSON</p>
           <p className={style.textInfo}>Supersonic™ Hair Dryer</p>
           <p className={style.textInfo}>$429.00</p>
           </NavLink>
        </div>,
        <div className={style.itemCard}>
            <NavLink to ={'details/' + idName1[1]} className = {style.decorationT}>
           <img src={`${img5}`} alt="fff"className={style.imgCarouselB}/>
           <p className={style.textShop}>OLAPLEX</p>
           <p className={style.textInfo}>No. 3 Hair Repair Perfector</p>
           <p className={style.textInfo}>$28.00</p>
           </NavLink>
           
        </div>, 
        <div className={style.itemCard} >
            <NavLink to ={'details/' + idName1[2]} className = {style.decorationT}>
          <img src={`${img7}`} alt="fff"className={style.imgCarouselB}/>
          <p className={style.textShop}>NuFACE</p>
           <p className={style.textInfo}>Trinity Facial Toning Device</p>
           <p className={style.textInfo}>$339.00</p>
           </NavLink>
        </div>,
        <div className={style.itemCard} >
            <NavLink to ={'details/' + idName1[3]} className = {style.decorationT}>
           <img src={`${img6}`} alt="fff"className={style.imgCarouselB}/>
           <p className={style.textShop}>SOL DE JANEIRO</p>
           <p className={style.textInfo}>Brazilian Joia ™ Milky Leave-In Conditioner</p>
           <p className={style.textInfo}>$28.00</p>
           </NavLink>
        </div>,
        <div className={style.itemCard} >
            <NavLink to ={'details/' + idName1[4]} className = {style.decorationT}>
           <img src={`${img8}`} alt="fff"className={style.imgCarouselB}/>
           <p className={style.textShop}>BOBBI BROWN</p>
           <p className={style.textInfo}>Vitamin Enriched Face Base Priming Moisturizer</p>
           <p className={style.textInfo}>$95.00</p>
           </NavLink>
        </div>, 
        <div className={style.itemCard} >
            <NavLink to ={'details/' + idName1[5]} className = {style.decorationT}>
           <img src={`${img9}`} alt="fff"className={style.imgCarouselB}/>
           <p className={style.textShop}>DIOR</p>
           <p className={style.textInfo}>Dior Addict Lip Glow</p>
           <p className={style.textInfo}>$35.00</p>
           </NavLink>
        </div>,
    
    ];
   return(
    <>
    <div className={style.titleCardF}>Best Sellers</div>
    <AliceCarousel
    
        mouseTracking
        keyboardNavigation
        items={items}
        responsive={responsive}
        onInitialized={onInitialized}
        onSlideChange={onSlideChange}
        onSlideChanged={onSlideChanged}
        onResized={onResized} /></>
   )
};

//export default Carousel