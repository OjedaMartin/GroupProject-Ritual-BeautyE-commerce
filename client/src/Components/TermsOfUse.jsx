import { NavLink } from 'react-router-dom';
import styles from'./AboutUs.module.css'


export default function TermsOfUse (){
    return(
        <>
        
        <div className={styles.aboutTitle} >Terms of Use</div>
        <p className={styles.aboutText}>
        All design, text, graphics, logos, button icons, images, audio and video clips, the selection and <br/>
        arrangement thereof, and all software on the Sites is Copyright (c) Ritual <br/>
        ALL RIGHTS RESERVED. The compilation (meaning the collection, arrangement and assembly) of all <br/>
        content on the Sites is the exclusive property of Ritual and protected by U.S. and international <br/>
        copyright laws. All software used on the Sites is the property of Ritual or its software suppliers <br/>
        and is protected by U.S. and international copyright laws.<br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        Ritual.com and all page headers, custom graphics and button icons are service marks, trademarks, <br/>
        and/or trade dress of Sephora and may not be used in connection with any product or service that <br/>
        is not offered by Sephora in any manner that is likely to cause confusion among customers. <br/>
        All other trademarks, product names and company names or logos cited herein are the property of their <br/>
        respective owners.<br/>
        </p>
        <br/>
        <div className={styles.marginDiv}>
            <NavLink to = '/' className={styles.backtohome}>Back to Home</NavLink>
        </div>
        
        </>
    )
}