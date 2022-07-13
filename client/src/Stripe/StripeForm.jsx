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

  const { isAuthenticated, user } = useAuth0();

  //-----------------------------------------------------------------------------
  var totalAmount = 0;

  for (let i = 0; i < prodCart.length; i++) {
    totalAmount = totalAmount + (prodCart[i].price * prodCart[i].quantity);
  }

  //---------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getUserByName(user?.name));//GET USER BY NAME NO ME TRAE LA DIRECCION!
  }, [dispatch,user]);

  // const currentUser = useSelector((state) => state.putUser);
  // const [edit, setEdit] = useState({
  //   name: "",
  //   address: "",
  // });
  // useEffect(() => {
  //   setEdit({
  //     name: currentUser.name,
  //     address: currentUser.address,
  //   });
  // }, [currentUser]);

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
          amount: totalAmount * 100 // son 10 dólares
        });

        console.log('DATA DEL USUARIO',name)

        elements.getElement(CardElement).clear();
        if (data.msg === 'Successful payment') {
         // dispatch(postOrder({ email: user.email, address:}))//email,address
         dispatch(clearCart())
          swal('¡Succes! Your cart is ready.');
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
  //   setEdit({
  //     ...edit,
  //     [e.target.name]: e.target.value,
  //   });
  }
  

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
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <div>
            <label className={styles.label}>Address: </label>
            <input
              className={styles.input}
              type="text"
              name="address"
              onChange={(e) => handleChange(e)}
            />
          </div> */}
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
