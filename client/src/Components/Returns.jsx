import { NavLink } from 'react-router-dom';
import styles from'./AboutUs.module.css'


export default function Returns (){
    return(
        <>
        <div className={styles.aboutTitle} >Returns</div>
        <p className={styles.aboutText}>
        We are committed to providing quality products to our customers. If you receive the product(s) <br/>
        that do not meet your expectations, return the gently used product(s) within 30 days of receipt. <br/>
        Currently, we are unable to offer exchanges. Items purchased on ritual.com cannot be returned or <br/>
        exchanged at retailers that sell our products.
        </p>
        <br/>
        <p className={styles.aboutText}>
        We require all contents from the original set or kit when returning a set or kit. <br/>
        Partial items from any sets and kits will not be refunded, and empty containers will not be <br/>
        accepted for refund.<br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        Please notate the reason for your return on the front side of your packing slip and send the <br/>
        product(s) back to us using the prepaid label included in your package. You may drop off your <br/>
        return package at any USPS access point or FedEx location, including local post offices, <br/>
        postal collection boxes, mailboxes, mail carriers, FedEx Offices, FedEx Authorized ShipCenter®, <br/>
        and FedEx World Service Center® locations.<br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        Once your return package has arrived, please allow up to 10 business days for your return <br/>
        to be processed. Refunds will be issued to the original form of payment for the amount of the <br/>
        item(s) plus sales tax. All eGift card refunds will be processed to a new eGift card that will <br/>
        be emailed to the customer's original email. Shipping and handling charges are not included in refunds. <br/>
        You will receive a return confirmation email once your refund has been processed.<br/>
        </p>
        <br/>
        <div className={styles.marginDiv}>
            <NavLink to = '/' className={styles.backtohome}>Back to Home</NavLink>
        </div>
        
        </>
    )
}