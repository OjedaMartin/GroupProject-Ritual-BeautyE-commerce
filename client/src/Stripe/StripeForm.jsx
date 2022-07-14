import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './StripeForm.module.css';
import swal from 'sweetalert'
import { Link, useNavigate } from 'react-router-dom';
import { postOrder,getUserByName,clearCart } from '../redux/actions/index'
//import { userCreated } from '../../../api/src/routes/controllers/mail/mailUserCreated';
import { useAuth0 } from '@auth0/auth0-react';


export default function CheckoutForm() {
  //----------------------------------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const prodCart = useSelector((state) => state.prodCart);
  const name = useSelector((state) => state.cu)
  const [edit, setEdit]= useState()

  const { isAuthenticated, user } = useAuth0();

  //-----------------------------------------------------------------------------
  var totalAmount = 0;

  for (let i = 0; i < prodCart.length; i++) {
    totalAmount = totalAmount + (prodCart[i].price * prodCart[i].quantity);
  }

  //---------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getUserByName(user?.name));
  }, [dispatch,user]);


  //-----------------------------------------------------
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error) {

      // extraemos el id del objeto paymentMethod
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post('http://localhost:3001/stripe/api/checkout', {
          id: id,
          amount: totalAmount * 100
        });

        elements.getElement(CardElement).clear();
        if (data.msg === 'Successful payment') {
         dispatch(postOrder({ email: user.email, address:edit.address}))
         dispatch(clearCart())
          swal('Success! Your cart is ready.');
        }
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Hay un error en el handleSubmit")
    }
  }

   function handleChange(e) {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  }
  console.log('edit',edit)
  

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <div >
        <div >
          <div>
            <label className={styles.label}>Name: </label>
            <input
              className={styles.input}
              type="text"
              pattern="[A-Za-z ,.'-]{3,30}"
              name="name" 
            />
          </div>
          <div>
            <label className={styles.label}>Address: </label>
            <input
              className={styles.input}
              type="text"
              name="address"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <h4 className={styles.total}>Total: ${totalAmount}</h4>
        <CardElement className='card' />
        <button className={styles.btn}>
          Buy
        </button>
      </div>
    </form>
  );
}
