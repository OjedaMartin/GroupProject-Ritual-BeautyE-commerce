import { NavLink } from 'react-router-dom';
import styles from'./AboutUs.module.css'


export default function PrivacyPolicy (){
    return(
        <>
        
        <div className={styles.aboutTitle} >Privacy Policy</div>
        <p className={styles.aboutText}>
        We may provide different or additional privacy notices in connection with certain activities, <br/>
        programs, and offerings. We may also provide additional “just-in-time” notices that may supplement <br/>
        or clarify our privacy practices or provide you with additional choices regarding your personal information.<br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        Our websites may include links to websites and/or applications operated and maintained by third parties. <br/>
        Please note that we have no control over the privacy practices of websites or applications that we do not own. <br/>
        We encourage you to review the privacy practices of those third parties.<br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        The types of personal information we obtain about you depends on how you interact with us and our products and services. <br/>
        When we use the term “personal information,” we are referring to information that identifies, relates to, describes, <br/>
        or can be associated with you.<br/>
        </p>
        <br/>
        <div className={styles.marginDiv}>
            <NavLink to = '/' className={styles.backtohome}>Back to Home</NavLink>
        </div>
        
        </>
    )
}