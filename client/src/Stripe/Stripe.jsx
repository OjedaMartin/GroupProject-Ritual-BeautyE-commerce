import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeForm from './StripeForm';
const stripePromise = loadStripe('pk_test_51LL7tkB5ICzkw2FVhkHUH6dsRNZoW2MruQreFe0Fw0M4HZ8S6MTk5TmwoGaLdUkBdqFBaTJ6s7VfqW8aHpl63Ai800FaaiYRFC')

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
  