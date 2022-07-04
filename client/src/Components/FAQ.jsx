import { NavLink } from 'react-router-dom';
import styles from'./AboutUs.module.css'


export default function Faq (){
    return(
        <>
        
        <div className={styles.aboutTitle} >FAQ</div>
        <p className={styles.aboutText}>
        Need some help or want to chat with us? We're here Monday - Friday 8am-6pm <br/>
        Please note, that we are only available on phones Monday - Friday 8am-6pm, <br/>
        thank you for understanding!<br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        If you didn't receive an item you ordered, or if you received a product different <br/>
        from the one that you ordered, please contact us and we'll take care of the rest! <br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        Purchases made on our website can be returned for any reason up to 30 days after delivery. <br/>
        Bring the item and a valid receipt or packing slip into any Morphe store, or contact <br/>
        info@ritual.com to start the return process.
        </p>
        <br/>
        <p className={styles.aboutText}>
        Our normal processing time is 24-48 hours for orders placed during business days <br/>
        (Monday to Friday, excluding holidays). Orders placed after business hours on Friday, <br/>
        over a weekend or on a holiday may take up to 72 hours to process. During special events, <br/>
        order processing may take up to 7 days.<br/>
        Once your order has shipped, your tracking information will be sent to the email you gave us at checkout. <br/>
        Please allow up to 48 hours for your tracking information to update.<br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        Purchases made on our website may be returned up to 30 days after confirmed delivery for a refund <br/>
        in the original form of payment. <br/>
        Sorry, we cannot refund the cost of shipping. Please report missing, damaged, or defective products <br/>
        within 30 days of delivery, and we will replace damaged or defective products at no additional charge.<br/>
        </p>
        <div className={styles.marginDiv}>
            <NavLink to = '/' className={styles.backtohome}>Back to Home</NavLink>
        </div>
        
        </>
    )
}