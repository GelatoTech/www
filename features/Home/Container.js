import Head from 'next/head';
import dynamic from "next/dynamic";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faCheck, faCar, faStore, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYelp } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import { BookRepairButton, Form, HowItWorks, TrustedBy, WhyUs } from '../../components';
import scrollToSection from '../../helpers/scrollToSection';
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
export default function Home() {

  const router = useRouter();

  const [isCarryIn, setIsCarryIn] = useState(false);

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
        backgroundImage: "url(/images/whats-icracked.jpg)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100%',
        padding: '3rem 0'
      }}>
        <div id="hero-body" style={{ paddingTop: '3em' }}>
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h1 className="title is-1">
                  Mobile iPhone Repair<br />at Your Location<br />
                  <p className="subtitle is-3" style={{ color: 'white', opacity: 0.7 }}>San Francisco, CA</p><br />
                  <div className="is-hidden-tablet" style={{ display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
                    <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => {
                      setIsCarryIn(false);
                      scrollToSection("repair");
                    }}>
                      <div style={{ backgroundColor: 'white', width: '1.5em', height: '1.5em', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesomeIcon icon={faCar} style={{ color: '#4A4A4A', width: '0.9em' }} />
                      </div>
                      <h2 className="subtitle" style={{ marginLeft: '0.4em' }}>On-demand</h2>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }} onClick={()=>{
                      setIsCarryIn(true);
                      scrollToSection("repair");
                    }}>
                      <div style={{ backgroundColor: 'white', width: '1.5em', height: '1.5em', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesomeIcon icon={faStore} style={{ color: '#4A4A4A', width: '0.8em' }} />
                      </div>
                      <h2 className="subtitle" style={{ marginLeft: '0.4em' }}>Carry In</h2>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }} onClick={()=>router.push('/mail-in')}>
                      <div style={{ backgroundColor: 'white', width: '1.5em', height: '1.5em', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#4A4A4A', width: '0.7em' }} />
                      </div>
                      <h2 className="subtitle" style={{ marginLeft: '0.4em' }}>Mail In</h2>
                    </div>
                  </div>
                  {/* <BookRepairButton /> */}
                </h1>
              </div>
              <div className="column columns is-desktop is-hidden-mobile is-half" style={{ alignItems: 'center'}}>
                {/* <div className="column is-flex" style={{ alignItems: 'center'}}> */}
                  <div className="column">
                    <div className="card repairType" onClick={()=>{
                      setIsCarryIn(false);
                      scrollToSection("repair");
                    }} style={{ borderRadius: '0.8em', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.7)'}}>
                      <div className="is-centered has-text-centered">
                        <FontAwesomeIcon icon={faCar} style={{ height: '3em', paddingTop: '1em' }} />
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="subtitle is-4 has-text-centered">On-Demand</p>
                          </div>
                        </div>
                        <div className="content has-text-centered">
                          We come to you
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card repairType" onClick={()=>{
                      setIsCarryIn(true);
                      scrollToSection("repair");
                    }} style={{ borderRadius: '0.8em', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.7)'}}>
                      <div className="is-centered has-text-centered">
                        <FontAwesomeIcon icon={faStore} style={{ height: '3em', paddingTop: '1em' }} />
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="subtitle is-4 has-text-centered">Carry In</p>
                          </div>
                        </div>
                        <div className="content has-text-centered">
                          Visit our location
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card repairType" onClick={()=>router.push('/mail-in')} style={{ borderRadius: '0.8em', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.7)'}}>
                      <div className="is-centered has-text-centered">
                        <FontAwesomeIcon icon={faEnvelope} style={{ height: '3em', paddingTop: '1em' }} />
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="subtitle is-4 has-text-centered">Mail-In</p>
                          </div>
                        </div>
                        <div className="content has-text-centered">
                          Ship us your device
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      <TrustedBy />
      <HowItWorks deviceName="iPhone" />
      <WhyUs />
      <div className="container" id="reviews">
        <OwlCarousel 
          margin={8} 
          autoplay={true} 
          loop 
          dots={false} 
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
                <Image alt="customer lilly iphone repair review" src="/images/testimonials/Lilly-H.png" width="200px" height="59.97px" />
                <p>"Elbert is excellent! He is quick and responsive. And did a great job in repairing two of my iPhones. I contacted him Friday night and he came over Saturday. I highly recommend him to anyone.”</p><br />
                <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
              </div>
            </div>
            <div className="column">
              <div className="notification">
                <Image alt="customer brooke iphone repair review" src="/images/testimonials/Brooke.png" width="200px" height="59.97px" />
                <p>"Elbert showed up literally 15 minutes from the time he first texted me back after my request, and repaired my iPhone in less than 15 minutes. He was professional, kind, patient (I kept him waiting a few more minutes while finishing a meeting), and the work was superb! I will absolutely call him again.”</p><br />
                <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
              </div>
            </div>
            <div className="column">
              <div className="notification">
                <Image alt="customer iphone repair review" src="/images/testimonials/Daniel-A.png" width="200px" height="59.97px" />
                <p>"This is a truly unique and fantastic idea, well marketed and well executed. I put in a request on their extremely user friendly website and received a call right away and he was at my door just 30min later. He was super friendly and he fixed my iPhone in 20min. cant ask for more.”</p><br />
                <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
              </div>
            </div>
            <div className="column">
              <div className="notification">
                <Image alt="customer lukas iphone repair review" src="/images/testimonials/Lukas-B.png" width="200px" height="59.97px" />
                <p>"These guys do great work, are friendly, and have super reasonable prices. I'd recommend them to anyone needing iPhone repair.”</p><br />
                <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
              </div>
            </div>
            <div className="column">
              <div className="notification">
                <Image alt="customer brendan iphone repair review" src="/images/testimonials/Brendan-D.png" width="200px" height="59.97px" />
                <p>"If you are reading this just send him a message. Way better than apple store/support for less $$. He even comes to your house!”</p><br />
                <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
              </div>
            </div>
          </OwlCarousel>
      </div>
      <span id="repair"></span>
      <div className="tabs is-centered is-hidden-tablet">
        <ul>
          <li className={!isCarryIn && 'is-active'} onClick={()=>setIsCarryIn(false)}>
            <a>
              <FontAwesomeIcon icon={faCar} style={{ height: '1em', paddingRight: '0.3em' }} />
              <span>On-Demand</span>
            </a>
          </li>
          <li className={isCarryIn && 'is-active'} onClick={()=>setIsCarryIn(true)}>
            <a>
              <FontAwesomeIcon icon={faStore} style={{ height: '1em', paddingRight: '0.3em' }} />
              <span>Carry In</span>
            </a>
          </li>
          <li onClick={()=>router.push('/mail-in')}>
            <a>
              <FontAwesomeIcon icon={faEnvelope} style={{ height: '1em', paddingRight: '0.3em' }} />
              <span>Mail In</span>
            </a>
          </li>
        </ul>
      </div>
      <Form make={router.query.make} isCarryIn={isCarryIn} />
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
      <div className="section container" id="get-started" style={{ borderRadius: "8px", overflow: 'hidden', padding: '5em', marginBottom: '5em' }}>
        <Image src="/images/iphones-bg.jpeg" layout="fill" objectFit='cover' />
        <div style={{ position: 'relative', marginBottom: '29px' }}>
          <h2 data-aos="fade-right" style={{color: 'white'}} className="title is-2">Ready to get started?</h2>
          <h2 data-aos="fade-right" style={{color: 'white'}} className="subtitle is-5">iPhone Screen Repair only takes 15 minutes!</h2>
        </div>
        <a className="button is-info is-large" onClick={()=>scrollToSection("repair")}>Book iPhone Repair <FontAwesomeIcon icon={faMobile} style={{ height: '1em', marginLeft: '0.3em' }} /></a>
      </div>
    </div>
  )
}