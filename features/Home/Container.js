import Head from 'next/head';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
import { useEffect } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faYelp } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';

import BookRepairButton from '../../components/BookRepairButton';
import TrustedBy from '../../components/TrustedBy';
import scrollToSection from '../../helpers/scrollToSection';
import Form from '../../components/Form';

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    AOS.init(); // animations
  });


  return(
    <div>
      <Head>
        <title>Mobile iPhone Repair in San Francisco | Gelatotech</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
        <meta content="San Francisco Mobile iPad Repair and iPhone Repair. We repair your device at your preferred time & location. Most iPhone Screen Repair Only takes 15 minutes." name="description" />
        <meta content="index" name="robots" />
        <meta content="Mobile iPhone Repair in San Francisco | Gelatotech" itemProp="name" />
        <meta content="San Francisco Mobile iPad Repair and iPhone Repair. We repair your device at your preferred time & location. Most iPhone Screen Repair Only takes 15 minutes." itemProp="description" />
        <meta content="images/iphone-repair.png" itemProp="image" />
        <meta content="https://www.gelatotech.com" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="Mobile iPhone Repair in SF | We come to you! Same-day repair" property="og:title" />
        <meta content="iPhone screen cracked? No worries, We come to you and fix your iPhone inside our car within 10-15 mins. Same Day repair, Book your iPhone repair today." property="og:description" />
        <meta content="images/iphone-repair.png" property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="Mobile iPhone Repair in San Francisco | Gelatotech" name="twitter:title" />
        <meta content="San Francisco Mobile iPad Repair and iPhone Repair. We repair your device at your preferred time & location. Most iPhone Screen Repair Only takes 15 minutes." name="twitter:description" />
        <meta content="images/iphone-repair.png" name="twitter:image" />
        <meta content=" iPhone Repair, iPhone Screen Repair, iPhone fix, iPhone Replacement On-demand, on, demand" name="keywords" />
        <meta content="otWUpfaXKjZHurqJg8KCSsabxvEJ9380Jprvwzazg8g" name="google-site-verification" />
      </Head>
      <section className="hero" id="hero" style={{
        backgroundImage: "url(../images/whats-icracked.jpg)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100%',
        padding: '3rem 0'
      }}>
        <div id="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">Mobile iPhone Repair<br />at Your Location</h1>
            <p className="subtitle is-3" style={{ color: 'white' }}>San Francisco, CA</p><br />
            <BookRepairButton />
          </div>
          <div className="container" id="reviews">
            {/* <div className="columns owl-carousel owl-theme" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '80px' }}> */}
            <OwlCarousel 
              margin={8} 
              autoplay={true} 
              loop 
              dots={false} 
              style={{ marginTop: '80px' }} 
              autoplayTimeout={8000}
              responsive={{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }}
            >  
            <div className="column">
                <div className="notification">
                  <img alt="customer lilly iphone repair review" src="images/testimonials/Lilly-H.png" style={{ maxWidth: '200px' }} />
                  <p>"Elbert is excellent! He is quick and responsive. And did a great job in repairing two of my iPhones. I contacted him Friday night and he came over Saturday. I highly recommend him to anyone.”</p><br />
                  <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
                </div>
              </div>
              <div className="column">
                <div className="notification">
                  <img alt="customer brooke iphone repair review" src="images/testimonials/Brooke.png" style={{ maxWidth: '200px' }} />
                  <p>"Elbert showed up literally 15 minutes from the time he first texted me back after my request, and repaired my iPhone in less than 15 minutes. He was professional, kind, patient (I kept him waiting a few more minutes while finishing a meeting), and the work was superb! I will absolutely call him again.”</p><br />
                  <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
                </div>
              </div>
              <div className="column">
                <div className="notification">
                  <img alt="customer iphone repair review" src="images/testimonials/Daniel-A.png" style={{ maxWidth: '200px' }} />
                  <p>"This is a truly unique and fantastic idea, well marketed and well executed. I put in a request on their extremely user friendly website and received a call right away and he was at my door just 30min later. He was super friendly and he fixed my iPhone in 20min. cant ask for more.”</p><br />
                  <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
                </div>
              </div>
              <div className="column">
                <div className="notification">
                  <img alt="customer lukas iphone repair review" src="images/testimonials/Lukas-B.png" style={{ maxWidth: '200px' }} />
                  <p>"These guys do great work, are friendly, and have super reasonable prices. I'd recommend them to anyone needing iPhone repair.”</p><br />
                  <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
                </div>
              </div>
              <div className="column">
                <div className="notification">
                  <img alt="customer brendan iphone repair review" src="images/testimonials/Brendan-D.png" style={{ maxWidth: '200px' }} />
                  <p>"If you are reading this just send him a message. Way better than apple store/support for less $$. He even comes to your house!”</p><br />
                  <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
                </div>
              </div>
            </OwlCarousel>
            {/* </div> */}
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
                <img alt="Book your iphone repair" src="images/undraw-calendar-dutt.png" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}} />
                <h2 className="title is-3center" data-aos="zoom-out" style={{textAlign: 'center'}}>Book Your Repair</h2>
                <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>Once you schedule your appointment, we will confirm your preferred time and location for us to repair your device.</p>
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <img alt="We repair your phone screen on-spot" src="images/undraw-order-a-car-3tww.png" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}} />
                <h2 className="title is-3 center" data-aos="zoom-out" style={{textAlign: 'center'}}>We Come To You</h2>
                <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>We Repair your iPhone On-Spot, usually inside our car or your preferred location.</p>
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <img alt="iPhone screen repair on-spot" src="images/undraw-Credit-card-3ed6.png" style={{width: '40%', marginRight: 'auto', marginLeft: 'auto'}} />
                <h2 className="title is-3 center" data-aos="zoom-out" style={{textAlign: 'center'}}>Pay After The Repair</h2>
                <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>Once the repair is done , we make sure to test everything before leaving. After the test you can pay with Cash, Venmo, Bitcoin or any credit card.</p>
              </figure>
            </div>
          </div>
        </div>
      </section>{/* why us */}
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
                    <p className="subtitle is-5">iPhone Screen Repairs take 15 minutes or less. Read our Customer Reviews on <a href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Yelp</a> or <a href="https://g.page/GelatotechiPhoneRepair?share" target="_blank">Google</a></p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                  <li>
                    <h2 className="title is-3">Risk Free</h2>
                    <p className="subtitle is-5">You only pay after the repair is done and fully tested. 90 day warranty is included on Any iPhone Screen Repair.</p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                </ul>
              </div>
            </div>
            <div className="column">
              <figure className="image">
                <img alt="On-Demand iPhone Screen Repair" src="images/technician-fixing.jpg" style={{borderRadius: '5px', height: '30%'}} />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <Form make={router.query.make} />
      {/* service include */}
      <section className="section" id="services">
        <div className="container has-text-centered">
          <h1 className="subtitle is-2">Service Includes</h1>
          <div className="columns">
            <div className="column">
              <h2>Same-Day iPhone Repair <FontAwesomeIcon icon={faCheck} style={{ height: '1em', marginLeft: '0.5rem', color: '#1ED760' }} /></h2>
            </div>
            <div className="column">
              <h2>Device Diagnostic <FontAwesomeIcon icon={faCheck} style={{ height: '1em', marginLeft: '0.5rem', color: '#1ED760' }} /></h2>
            </div>
            <div className="column">
              <h2>90 Day Warranty <FontAwesomeIcon icon={faCheck} style={{ height: '1em', marginLeft: '0.5rem', color: '#1ED760' }} /></h2>
            </div>
            <div className="column">
              <h2>Quality Parts <FontAwesomeIcon icon={faCheck} style={{ height: '1em', marginLeft: '0.5rem', color: '#1ED760' }} /></h2>
            </div>
          </div>
        </div>
      </section>
      <div className="section" id="get-started">
        <div className="container">
          <h3 className="title is-1" data-aos="fade-right" style={{color: 'white'}}>Ready to get started?</h3>
          <h3 className="subtitle is-4" data-aos="fade-right" style={{color: 'white'}}>iPhone Screen Repair only takes 15 minutes!</h3><br />
          <a className="button is-info is-large" onClick={()=>scrollToSection("repair")}>Book iPhone Repair <FontAwesomeIcon icon={faMobile} style={{ height: '1em', marginLeft: '0.3em' }} /></a>
        </div>
      </div>
    </div>
  )
}