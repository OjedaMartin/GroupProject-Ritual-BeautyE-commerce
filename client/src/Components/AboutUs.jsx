import { NavLink } from 'react-router-dom';
import styles from'./AboutUs.module.css'


export default function AboutUs (){
    return(
        <>
        
        <div>About Ritual</div>
        <p className={styles.aboutText}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br/>
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit  <br/>
         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  <br/>
         culpa qui officia deserunt mollit anim id est laborum." <br/>
        </p>
        <p className={styles.aboutText}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br/>
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit  <br/>
         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  <br/>
         culpa qui officia deserunt mollit anim id est laborum." <br/>
        </p>
        <p className={styles.aboutText}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br/>
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit  <br/>
         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  <br/>
         culpa qui officia deserunt mollit anim id est laborum." <br/>
        </p>
        <div>
            <NavLink to = '/'>Back to Jom</NavLink>
        </div>
        
        </>
    )
}