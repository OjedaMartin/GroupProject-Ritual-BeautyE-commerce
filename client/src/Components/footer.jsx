import style from './footer.module.css'
import { FaInstagram, FaPinterestP, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Footer(){
    return(
        <div className={style.bgfooter} texttitle  >

        <div className={style.divAlign}>
            <div className={style.texttitle2}>
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
            <div className={style.texttitle2} spaceFollow>
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

        <div className={style.divAlign}>
            <div className={style.texttitle2}>
                Contact Us
            </div>
            <div>
                info@ritual.com
            </div>
            <div>
                1 -234-56780
            </div>

            <div className={style.texttitle2} spaceFollow>
                Follow Us
            </div>
            <div className={style.iconsSize}>
                <FaInstagram/> <FaPinterestP/> <FaTiktok/> <FaFacebookF/>
            </div>

        </div>
        <div className={style.divAlign}>
            <label className={style.texttitle2}>Stay in touch</label>
            <input type = 'text' placeholder='Email address' className={style.inputBox}></input>
            <p className={style.textinfosize}>
                By subscribing to Ritual, you consent to <br></br>
                receive recurring automated promotional <br></br>
                and personalized marketing messages<br></br>
                via automated technology</p>
        </div>

        </div>
    )
}