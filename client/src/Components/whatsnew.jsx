import './whatsnew.css'
import image1 from '../images/img1.jpg'
import image2 from '../images/img2.jpg'
import image3 from '../images/img3.jpg'

export default function WhatsNew(){
    return(
        <div className='grid1'>
            <div>
                <img src={`${image1}`} alt="not found" className='gridIMG'/>
            </div>
            <div className='gridB'>
            <h4>Title</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                sed do eiusmod tempor incididunt ut labore et dolore magna <br />
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br />
                 ullamco laboris nisi 
                </p>
            </div>
            <div className='gridC'>
                <h4>Title</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                sed do eiusmod tempor incididunt ut labore et dolore magna <br />
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br />
                 ullamco laboris nisi 
                </p>
            </div>
            <div>
            <img src={`${image2}`} alt="not found" className='gridIMG'/>
            </div>
            <div>
            <img src={`${image3}`} alt="not found" className='gridIMG'/>
            </div>
            <div className='gridF'>
            <h4>Title</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                sed do eiusmod tempor incididunt ut labore et dolore magna <br />
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br />
                 ullamco laboris nisi 
                </p>
            </div>
        </div>
    )
}