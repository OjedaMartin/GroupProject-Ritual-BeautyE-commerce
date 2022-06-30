import style from './whatsnew.module.css'
import image1 from '../images/img1.webp'
import image2 from '../images/img2.webp'
import image3 from '../images/img3.jpeg'
import { NavLink } from 'react-router-dom';

export default function WhatsNew(){
    return(
        <div>
            <div className={style.titleCardWhatsNew}>What's New</div>
        <div className={style.grid1}>
            <div>
                <img src={`${image1}`} alt="not found" className={style.gridIMG}/>
            </div>
            <div className={style.gridB}>
            <h4>GLOWSCREEN SUNSCREEN</h4>
                <p>
                A daily primer that leaves a dewy, glowy finish and preps skin for makeup,  <br />
                with SPF protection and major hydration — now in two radiant shades!
                </p>
                <NavLink to ={'details/' + 54} className ={style.decorationTW} >
                <p>SHOP NOW</p>
                </NavLink>

            </div>
            <div className={style.gridC}>
                <h4>RADIANT CREAMY CONCEALER</h4>
                 <p>
                Radiant Creamy Concealer delivers all-purpose, 16-hour perfection  <br />
                for all skin tones. Enriched with hydrating, multi-action skincare benefits  <br />
                and light diffusing technology, it instantly obscures imperfections and diminishes  <br />
                fine lines and signs of fatigue.  <br />
                </p>
                <NavLink to ={'details/' + 66} className = {style.decorationTW} >
                <p>SHOP NOW</p>
                </NavLink>
            </div>
            <div>
            <img src={`${image2}`} alt="not found" className={style.gridIMG}/>
            </div>
            <div>
            <img src={`${image3}`} alt="not found" className={style.gridIMG}/>
            </div>
            <div className={style.gridF}>
            <h4>DREAM COAT SUPERNATURAL SPRAY</h4>
            <p>
            Dream Coat's groundbreaking, lightweight, heat-activated polymer technology <br />
            smooths and silkens hair, forming an invisible matrix that acts like a <br />
            water-repellent "raincoat." It ensures sleek, glossy, glassy texture that's "immune" <br />
            to frizz and lasts up to three shampoos.<br />
                </p>
                <NavLink to ={'details/' + 15} className = {style.decorationTW} >
                <p>SHOP NOW</p>
                </NavLink>
            </div>
        </div>
        </div>
    )
}