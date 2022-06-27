import './whatsnew.css'
import image1 from '../images/img1.webp'
import image2 from '../images/img2.webp'
import image3 from '../images/img3.jpeg'

export default function WhatsNew(){
    return(
        <div>
            <div className='titleCardWhatsNew'>What's New</div>
        <div className='grid1'>
            <div>
                <img src={`${image1}`} alt="not found" className='gridIMG'/>
            </div>
            <div className='gridB'>
            <h4>GLOWSCREEN SUNSCREEN</h4>
                <p>
                A daily primer that leaves a dewy, glowy finish and preps skin for makeup,  <br />
                with SPF protection and major hydration — now in two radiant shades!
                </p>
                <p>SHOP NOW</p>
            </div>
            <div className='gridC'>
                <h4>RADIANT CREAMY CONCEALER</h4>
                 <p>
                Radiant Creamy Concealer delivers all-purpose, 16-hour perfection  <br />
                for all skin tones. Enriched with hydrating, multi-action skincare benefits  <br />
                and light diffusing technology, it instantly obscures imperfections and diminishes  <br />
                fine lines and signs of fatigue.  <br />
                </p>
                <p>SHOP NOW</p>
            </div>
            <div>
            <img src={`${image2}`} alt="not found" className='gridIMG'/>
            </div>
            <div>
            <img src={`${image3}`} alt="not found" className='gridIMG'/>
            </div>
            <div className='gridF'>
            <h4>DREAM COAT SUPERNATURAL SPRAY</h4>
            <p>
            Dream Coat's groundbreaking, lightweight, heat-activated polymer technology <br />
            smooths and silkens hair, forming an invisible matrix that acts like a <br />
            water-repellent "raincoat." It ensures sleek, glossy, glassy texture that's "immune" <br />
            to frizz and lasts up to three shampoos.<br />
                </p>
                <p>SHOP NOW</p>
            </div>
        </div>
        </div>
    )
}