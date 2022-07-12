import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeForm from './StripeForm';
const stripePromise = loadStripe('pk_test_51LII2ZAVboyClKcxFXfaLc0qLlBjZQFjRZlGSXRyn6UogVEiiO7WkhyrJrqwCR2x2X9GseVpI71Thr5LfqltIEVb00mgoR3sb5')

function Stripe() {
    return (
      <div>
        {/* Esto vendría a ser algo así como el componente de Stripe, y vendría a ser como el provider del form
        y le pasamos el loadStripe que habíamos guardado en una variable con anterioridad */}
        <Elements stripe={stripePromise}>
          <StripeForm />
        </Elements>
      </div>
    );
  }
  
  export default Stripe;
  