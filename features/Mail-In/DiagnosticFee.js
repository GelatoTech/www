import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import spinner from '../../public/images/spinner.gif';

// pk_test_2Cjx3du4k79QEq53UnOjVsNJ00iGsDQY8O
// pk_live_lpxMrRsh0fd6Lu9mIH7X2Wxb005L2828aV
const stripePromise = loadStripe('pk_live_lpxMrRsh0fd6Lu9mIH7X2Wxb005L2828aV');

export default function DiagnosticFee() {

  const [windowHeight, setWindowHeight] = useState(600);
  const router = useRouter();

  const goToStripe = async (event) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1HzDwFKzes2Vr1ZLkCvzWdMH', // price_1HzFXEKzes2Vr1ZLDgUnjWdF (TEST) | price_1HzDwFKzes2Vr1ZLkCvzWdMH (PROD)
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: `https://gelatotech.com/${router.query.onDemand ? 'thank-you' : 'mail-in/ship'}`,
      cancelUrl: 'https://gelatotech.com/mail-in/diagnostic-fee?err=1',
    });
    if (error.message) return alert(error.message);
  };

  useEffect(() => {
    // get window height when window is accessible
    setTimeout(() => {
      setWindowHeight(window.innerHeight);
    }, 10);
    // send to stripe
    setTimeout(() => {
      goToStripe();
    }, 3000);
  });

  // show spinner until sent to stripe
  return (
    <div style={{ 
      height: windowHeight,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img src={spinner} style={{ width: '10em' }} />
      <h2>Going to Stripe...</h2>
    </div>
  );

}
