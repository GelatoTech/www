import { useRouter } from "next/router";
import Head from 'next/head';
// import logo from '../../public/images/nav-logo-gtech.png'

export default function ThankYou() {

  const { query: { n } } = useRouter();

  return(
  <div style={{ backgroundColor: 'gainsboro', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
    <Head>
      <title>Thank You | Gelatotech iPhone Repair</title>
    </Head>

    <div style={{ textAlign: 'center', width: '90vw' }}>
      {/* <img src={logo} style={{ width: `20vh` }} /> */}
      <h1 style={{ fontSize: '2rem' }}>Thank{n ? 's, ' + n : ' you'}!</h1>
      <p style={{ fontSize: '1em' }}>A repair technician will be in touch with you shortly. <br />In the meantime, check out our <a target="_blank" href="https://www.google.com/maps/place/Mobile+iPhone+Repair+SF+%7C+Gelatotech/@37.7738263,-122.3939658,17z/data=!4m7!3m6!1s0x808f7fd0f5b28c95:0x7f621c4f11f36a76!8m2!3d37.7738221!4d-122.3917718!9m1!1b1">Google</a> &amp; <a target="_blank" href="https://yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-7">Yelp</a> reviews!</p>
    </div>
    
  </div>
  )
}