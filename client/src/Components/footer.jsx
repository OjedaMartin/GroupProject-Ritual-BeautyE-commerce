import style from './footer.module.css'
import { FaInstagram, FaPinterestP, FaTiktok, FaFacebookF } from "react-icons/fa";
import React, { useState } from "react";
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';


export default function Footer(){
    const [mail, setmail] = useState('')
    return(
        <div className={style.bgfooter} >
        <div >
            <div className={style.textTitleFooter}>
                Company
            </div>
            <div >
                <NavLink to ='/aboutus' className={`${style.textTitleFooter2}`}>
                About us
                </NavLink>
            </div>
            <div>
                <NavLink to ='/faq'  className={`${style.textTitleFooter2}`}>
                FAQ
                </NavLink>
            </div>
            <div>
                <NavLink to ='/returns' className={`${style.textTitleFooter2}`}>
                Returns
                </NavLink>
            </div>
            <div className={style.textTitleFooter}>
                Legal
            </div>
            <div>
                <NavLink to ='/termsandconditions' className={`${style.textTitleFooter2}`}>
                Terms and conditions
                </NavLink>
            </div>
            <div>
                <NavLink to ='/privacypolicy' className={`${style.textTitleFooter2}`}>
                Privacy Policy
                </NavLink>
            </div>
            <div>
                <NavLink  to ='/termsofuse' className={`${style.textTitleFooter2}`}>
                Terms of use
                </NavLink>
            </div>
        </div>

        <div className={style.divAlign}>
            <div className={style.textTitleFooter}>
                Contact Us
            </div>
            <div className={style.texttitle2}>
                info@ritual.com
            </div>
            <div className={style.texttitle2} >
                1 -234-56780
            </div>

            <div className={style.textTitleFooter}>
                Follow Us
            </div>
            <div className={style.iconsSize}>
                <FaInstagram/> <FaPinterestP/> <FaTiktok/> <FaFacebookF/>
            </div>

        </div>
        <div >
            <label className={style.textTitleFooter} >Stay in touch</label>
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
            <p className={style.textTitleFooterinfoSize}>
                By subscribing to Ritual, you consent to <br></br>
                receive recurring automated promotional <br></br>
                and personalized marketing messages<br></br>
                via automated technology</p>
        </div>
        </div>
    )
}