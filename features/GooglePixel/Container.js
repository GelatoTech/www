import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BookRepairButton from '../../components/BookRepairButton';
import TrustedBy from '../../components/TrustedBy';
import AOS from 'aos';

export default function GooglePixel() {

  const router = useRouter();

  useEffect(() => {
    AOS.init();
  });

  return(
  <div>
    <Head>
      <title>Mobile Google Pixel Repair San Francisco - Screen, Battery & Charging port replacement | Gelatotech</title>

      {/* HTML Meta Tags */}
      <meta name="description" content="Our technicians drive to your preferred location on-demand to repair your Google Pixel device." />
      <meta name="keywords" content="google, pixel, screen repair, battery replacement, fix, on-demand, on demand, driver, technician, fast, quick, XL, 3A, 4XL, 3XL, San Francisco, Bay Area, CA, sf" />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="Google Pixel Repair | Gelatotech" />
      <meta itemProp="description" content="Our technicians drive to your preferred location on-demand to repair your Google Pixel device." />
      <meta itemProp="image" content="images/pixel-bg.jpg" />

      <link rel="stylesheet" href="../stylesheets/pixel.css" />
      <link rel="stylesheet" href="../stylesheets/device-card.css" />
    </Head>
    <section className="hero" id="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            Mobile Google Pixel Repair
          </h1>
        </div>
        <div className="container has-text-centered">
          <h2 className="subtitle is-6">
            At your location
          </h2>
          <BookRepairButton text="Repair My Pixel" make="google" />
        </div>
      </div>
    </section>
    <TrustedBy />
    <section className="section" id="works">
      <div className="container">
        <h1 className="title is-1">How it Works</h1>
        <div className="columns">
          <div className="column">
            <figure className="image">
              <img alt="Book your Google Pixel repair" src="images/undraw-calendar-dutt.png" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}} />
              <h2 className="title is-3center" data-aos="zoom-out" style={{textAlign: 'center'}}>Book Your Repair</h2>
              <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>Once you schedule your appointment, we will confirm your preferred time and location for us to repair your device.</p>
            </figure>
          </div>
          <div className="column">
            <figure className="image">
              <img alt="We repair your phone screen on-spot" src="images/undraw-order-a-car-3tww.png" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}} />
              <h2 className="title is-3 center" data-aos="zoom-out" style={{textAlign: 'center'}}>We Come To You</h2>
              <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>We Repair your Google Pixel On-Spot, usually inside our car or your preferred location.</p>
            </figure>
          </div>
          <div className="column">
            <figure className="image">
              <img alt="Google Pixel screen repair on-spot" src="images/undraw-Credit-card-3ed6.png" style={{width: '40%', marginRight: 'auto', marginLeft: 'auto'}} />
              <h2 className="title is-3 center" data-aos="zoom-out" style={{textAlign: 'center'}}>Pay After The Repair</h2>
              <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>Once the repair is done , we make sure to test everything before leaving. After the test you can pay with Cash, Venmo, Bitcoin or any credit card.</p>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section>
      <section className="section" id="why-us">
        <div className="container">
          <h1 className="title is-1 has-text-centered">Why us?</h1>
          <div className="columns">
            <div className="column">
              <div className="why-container" style={{ textAlign: 'left' }}>
                <ul style={{listStyle: 'none'}}>
                  <li>
                    <h2 className="title is-3">Save Your Time</h2>
                    <p className="subtitle is-5">Our technician comes to you preferred location. We ensure you quality parts. </p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                  <li>
                    <h2 className="title is-3">Fast &amp; Reliable Service</h2>
                    <p className="subtitle is-5">Google Pixel Screen Repairs take 15 minutes or less. Read our Customer Reviews on <a href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Yelp</a> or <a href="https://g.page/GelatotechiPhoneRepair?share" target="_blank">Google</a></p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                  <li>
                    <h2 className="title is-3">Risk Free</h2>
                    <p className="subtitle is-5">You only pay after the repair is done and fully tested. Lifetime warranty is included on Any Google Pixel Screen Repair.</p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                </ul>
              </div>
            </div>
            <div className="column">
              <figure className="image">
                <img alt="On-Demand Google Pixel Screen Repair" src="images/technician-fixing.jpg" style={{borderRadius: '5px', height: '30%'}} />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <div className="section" id="get-started"
        style={{
          backgroundImage: `url('images/cracked-pixel-bg.jpg')`
        }}
      >
        <div className="container">
          <h3 className="title is-1" data-aos="fade-right" style={{color: 'white'}}>Ready to get started?</h3>
          <h3 className="subtitle is-4" data-aos="fade-right" style={{color: 'white'}}>Google Pixel Screen Repair only takes 15 minutes!</h3><br />
          <BookRepairButton text="Book Pixel Repair" make="google" />
        </div>
      </div>
      <section style={{ textAlign: 'center', margin: '2em' }}>
        <a onClick={()=> router.push('/?make=google#repair')}>have an iPhone?</a>
        <hr />
      </section>
    </section>
  </div>
  )
}

const buttonStyles = { 
  backgroundColor: '#1496ED', 
  border: 0, 
  padding: '0.5em', 
  color: 'white', 
  borderRadius: '6px',
  marginTop: '1.5em',
}