import { NavLink } from 'react-router-dom';
import styles from'./AboutUs.module.css'


export default function AboutUs (){
    return(
        <>
        
        <div className={styles.aboutTitle} >About Ritual</div>
        <p className={styles.aboutText}>
        We want to build a better world for skin to live in. Grounded in the latest science, <br/>
        we continually revisit and evaluate how we formulate products, all while holding ourselves<br/>
        to high standards of sustainability and safety.<br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        At Ritual, our diversity and inclusion mission is simple: To never stop championing all beauty<br/>
         fearlessly and building inclusive environments for our employees, consumers, and communities. <br/>
         Ritual announced a new tagline and manifesto, “We Belong to Something Beautiful,” <br/>
         to reinforce our dedication to fostering belonging among all clients and employees and to publicly <br/>
         strive for a more inclusive vision for retail in the Americas. <br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        At Ritual our culture is key to our success. We believe that what we do and how we do it are equally <br/>
        important. Creating a culture of shared expectations helps our organization deliver on our promises <br/>
        to stakeholders. In 2018, we updated our values and behaviors to better align with our vision for the<br/>
        organization. Simply, clearly, and powerfully, they describe how to live our values and follow our vision.<br/>
        This work is so important that we invest in training for all colleagues in these areas. <br/>
        As a result, colleagues are engaged and motivated to win in the competitive retail landscape<br/>
        </p>
        <br/>
        <div className={styles.marginDiv}>
            <NavLink to = '/' className={styles.backtohome}>Back to Home</NavLink>
        </div>
        
        </>
    )
}