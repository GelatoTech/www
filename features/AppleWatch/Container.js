import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import TrustedBy from '../../components/TrustedBy';
import Form from '../../components/Form';
import scrollToSection from '../../helpers/scrollToSection';
import AOS from 'aos';

export default function AppleWatch() {

  const router = useRouter();

  useEffect(() => {
    AOS.init();
  });

  return(
  <div>
    <Head>
      <title>Apple Watch Repair San Francisco - On-Demand Repair | Gelatotech</title>

      {/* HTML Meta Tags */}
      <meta name="description" content="Apple Watch Screen cracked? We provided glass only repair & OLED screen replacement for any Apple Watch model. We come to you, Same-day repair!" />
      <meta name="keywords" content="apple, watch, screen repair, battery replacement, fix, on-demand, on demand, driver, technician, fast, quick, San Francisco, Bay Area, CA, sf" />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="Apple Watch Repair SF | We come to you | Glass only repair" />
      <meta itemProp="description" content="Our technicians drive to your preferred location on-demand to repair your Apple Watch." />
      <meta itemProp="image" content="images/apple-watch.jpeg" />

      <link rel="stylesheet" href="../stylesheets/apple-watch.css" />
      <link rel="stylesheet" href="../stylesheets/device-card.css" />
    </Head>
    <section className="hero" id="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            Apple Watch Repair at Your Location
          </h1>
        </div>
        <div className="container has-text-centered">
          <h2 className="subtitle is-6">
            San Francisco, CA
          </h2>
          <a 
            className="button is-info is-large" 
            onClick={()=>{
              scrollToSection("repair");
            }}
          >
            Repair my Apple Watch
            <FontAwesomeIcon 
              icon={faScrewdriver} 
              style={{ height: '60%', marginLeft: '0.3em' }} 
            />
          </a>
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
              <img alt="Book your Apple Watch repair" src="images/undraw-calendar-dutt.png" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}} />
              <h2 className="title is-3center" data-aos="zoom-out" style={{textAlign: 'center'}}>Book Your Repair</h2>
              <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>Once you schedule your appointment, we will confirm your preferred time and location for us to repair your device.</p>
            </figure>
          </div>
          <div className="column">
            <figure className="image">
              <img alt="We repair your phone screen on-spot" src="images/undraw-order-a-car-3tww.png" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}} />
              <h2 className="title is-3 center" data-aos="zoom-out" style={{textAlign: 'center'}}>We Come To You</h2>
              <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>We Repair your Apple Watch On-Spot, usually inside our car or your preferred location.</p>
            </figure>
          </div>
          <div className="column">
            <figure className="image">
              <img alt="Apple Watch repair on-spot" src="images/undraw-Credit-card-3ed6.png" style={{width: '40%', marginRight: 'auto', marginLeft: 'auto'}} />
              <h2 className="title is-3 center" data-aos="zoom-out" style={{textAlign: 'center'}}>Pay After The Repair</h2>
              <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>Once the repair is done, we make sure to test everything before leaving. After the test you can pay with Cash, Venmo, Bitcoin or any credit card.</p>
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
                    <p className="subtitle is-5">Apple Watch Repairs take 15 minutes or less. Read our Customer Reviews on <a href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Yelp</a> or <a href="https://g.page/GelatotechiPhoneRepair?share" target="_blank">Google</a></p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                  <li>
                    <h2 className="title is-3">Risk Free</h2>
                    <p className="subtitle is-5">You only pay after the repair is done and fully tested. 90 day warranty is included on any Apple Watch repair.</p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                </ul>
              </div>
            </div>
            <div className="column">
              <figure className="image">
                <img alt="On-Demand Apple Watch Repair" src="images/technician-fixing.jpg" style={{borderRadius: '5px', height: '30%'}} />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <Form make="apple-watch" />
      <div className="section" id="get-started"
        style={{
          backgroundImage: `url('images/apple-watch-cracked.png')`
        }}
      >
        <div className="container">
          <h3 className="title is-1" data-aos="fade-right" style={{color: 'white'}}>Ready to get started?</h3>
          <h3 className="subtitle is-4" data-aos="fade-right" style={{color: 'white'}}>LCD screen assembly replacement only takes 20-30 minutes!</h3><br />
          <a 
            className="button is-info is-large" 
            onClick={()=>{
              scrollToSection("repair");
            }}
          >
            Book Apple Watch Repair
            <FontAwesomeIcon 
              icon={faScrewdriver} 
              style={{ height: '60%', marginLeft: '0.3em' }} 
            />
          </a>
        </div>
      </div>
      <section style={{ textAlign: 'center', margin: '2em' }}>
        <a onClick={()=> router.push('/#repair')}>repair a different device</a>
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