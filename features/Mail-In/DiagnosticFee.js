import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';

// pk_test_2Cjx3du4k79QEq53UnOjVsNJ00iGsDQY8O
// pk_live_lpxMrRsh0fd6Lu9mIH7X2Wxb005L2828aV
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE);

export default function DiagnosticFee() {

  const [windowHeight, setWindowHeight] = useState(600);
  const router = useRouter();

  const goToStripe = async (event) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: process.env.NEXT_PUBLIC_STRIPE_ITEM, // price_1HzFXEKzes2Vr1ZLDgUnjWdF (TEST) | price_1HzDwFKzes2Vr1ZLkCvzWdMH (PROD)
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
    if(typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
    }
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
      <Image src='/images/spinner.gif' width="10em" height="10em" priority />
      <h2>Going to Stripe...</h2>
    </div>
  );

}
