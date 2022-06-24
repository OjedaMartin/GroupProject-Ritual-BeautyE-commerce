import './footer.css'
import { FaInstagram, FaPinterestP, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="bgfooter textTitle " >

        <div className='divAlign '>
            <div className='textTitle2'>
                Company
            </div>
            <div>
                About us
            </div>
            <div>
                FAQ
            </div>
            <div>
                Returns
            </div>
            <div className='textTitle2 spaceFollow'>
                Legal
            </div>
            <div>
                Terms and conditions
            </div>
            <div>
                Privacy Policy 
            </div>
            <div>
                Terms of use
            </div>
        </div>

        <div className='divAlign'>
            <div className='textTitle2'>
                Contact Us
            </div>
            <div>
                info@ritual.com
            </div>
            <div>
                1 -234-56780
            </div>

            <div className='textTitle2 spaceFollow'>
                Follow Us
            </div>
            <div className='iconsSize'>
                <FaInstagram/> <FaPinterestP/> <FaTiktok/> <FaFacebookF/>
            </div>

        </div>
        <div className='divAlign'>
            <label className='textTitle2'>Stay in touch</label>
            <input type = 'text' placeholder='Email address' className='inputBox'></input>
            <p className='textinfosize'>
                By subscribing to Ritual, you consent to <br></br>
                receive recurring automated promotional <br></br>
                and personalized marketing messages<br></br>
                via automated technology</p>
        </div>

        </div>
    )
}