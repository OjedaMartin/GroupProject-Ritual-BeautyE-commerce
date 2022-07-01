import style from './footer.module.css'
import { FaInstagram, FaPinterestP, FaTiktok, FaFacebookF } from "react-icons/fa";
import React, { useState } from "react";
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';


export default function Footer(){
    const [mail, setmail] = useState('')
    return(
        <div className={style.bgfooter} texttitle  >

        <div className={style.divAlign}>
            <div className={style.texttitle2}>
                Company
            </div>
            <div>
                <NavLink className={style.textTitleFooter2} to ='/aboutus'>
                About us
                </NavLink>
            </div>
            <div>
                <NavLink className={style.textTitleFooter2} to ='/faq'>
                FAQ
                </NavLink>
            </div>
            <div>
                <NavLink className={style.textTitleFooter2} to ='/returns'/>
                Returns
            </div>
            <div className={style.texttitle2} spaceFollow>
                Legal
            </div>
            <div>
                <NavLink className={style.textTitleFooter2} to ='/termsandconditions'>
                Terms and conditions
                </NavLink>
            </div>
            <div>
                <NavLink className={style.textTitleFooter2} to ='/privacypolicy'>
                Privacy Policy
                </NavLink>
            </div>
            <div>
                <NavLink className={style.textTitleFooter2} to ='/terms'>
                Terms of use
                </NavLink>
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
            <label className={style.textTitle2}>Stay in touch</label>
            <form
            onSubmit={(e) => {
                e.preventDefault();
                setmail('')
                swal({
                    text: "You are now suscribed to our Newsletter!",
                    icon: "success",
                  });
              }}>
            <input
             className={style.inputBox}
             placeholder='Enter Email' 
             type = 'email'
             required
             value={mail}
             onChange={e => setmail(e.target.value)}> 
             </input>
             
            <input 
            type="submit" 
            value= '✔'
            className={style.inputbtn}
            />
            </form>
            <p className={style.textinfosize}>
                By subscribing to Ritual, you consent to <br></br>
                receive recurring automated promotional <br></br>
                and personalized marketing messages<br></br>
                via automated technology</p>
        </div>
        </div>
    )
}