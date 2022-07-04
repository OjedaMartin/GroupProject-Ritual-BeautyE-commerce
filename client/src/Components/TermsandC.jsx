import { NavLink } from 'react-router-dom';
import styles from'./AboutUs.module.css'


export default function TermsandC (){
    return(
        <>
        
        <div className={styles.aboutTitle} >Terms and Conditions</div>
        <p className={styles.aboutText}>
        Ritual provides the content and services available on the Website to you subject to the following <br/>
        terms and conditions (“Terms and Conditions”). Please read these Terms and Conditions carefully <br/>
        before using the Website. If you do not agree to these Terms and Conditions, please do not use our Website.<br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        Please review our Privacy Policy which also governs your visit to the Website, for details about what <br/>
        information we collect and how we use it. This policy explains how we treat your personal information, <br/>
        and how we protect your privacy when you use the Service. You agree to the use of your data in <br/>
        accordance with our Privacy Policy.<br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        The information communicated on the Website constitutes an electronic communication. When you communicate with <br/>
         us through the Website or via other forms of electronic media, such as e-mail, you are communicating  <br/>
         with us electronically. You agree that we may communicate electronically, subject to local privacy and anti-spam laws,  <br/>
         and that such communications, as well as notices, disclosures, agreements, and other communications that we provide  <br/>
         to you electronically, are equivalent to communications in writing and shall have the same force and effect as  <br/>
         if they were in writing and signed by the party sending the communication. <br/>
        </p>
        <br/>
        <div className={styles.marginDiv}>
            <NavLink to = '/' className={styles.backtohome}>Back to Home</NavLink>
        </div>
        
        </>
    )
}