import React from "react"
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
const PUBLIC_KEY = 'pk_test_51LIJngJlBpaS4VmXSjPoLfIC3gTVPuLNswb2en6vmGD4ZpCItGyp8GTLtC9QGC6h3aqt582fuZNRpri8kDm2nRcs00xXSBdazI';
const stripePromise = loadStripe(PUBLIC_KEY);

// const stripe = useStripe();//Me conecta con stripe
// const elements = useElements();

// const handleSubmitCheckout = async (e) => {
//     e.preventDefault();
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement)
//     });
//     !error ? console.log(paymentMethod) : console.log(error)
//     if (!error) {
//         const data = {//ESTO SERIA UN POST PARA EL BACK 
//             id: paymentMethod.id,
//             amount: totalAmount,
//             idCart: 'sdfasdfsdf4654',
//             email: "email@gmail.com",
//         }
//     }
// }
export default function PaymentGateways() {
    return (
        <Elements> stripe={stripePromise}
            <form>
                <CardElement />
            </form>
        </Elements>
    )
}

//USUARIO SIN REGISTRAR  //LOCALSTORAGE

//LOGEA --> 1° PREGUNTAR SI TIENE UN CARRITO ARMADO
// CART X PROD--> () 1 PROD
//1 PROD


//LOGEA --> 1° PREGUNTAR SI TIENE UN CARRITO ARMADO NADA
// CART X PROD--> ()



