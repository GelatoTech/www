import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import scrollToSection from '../../helpers/scrollToSection';
import AOS from 'aos';
const ReactRotatingText = require('react-rotating-text');
// import step1Img from '../../public/images/mail-1.png';
// import step2Img from '../../public/images/mail-2.png';
// import step3Img from '../../public/images/mail-3.png';
// import step4Img from '../../public/images/mail-4.png';
import { TrustedBy } from '../../components';
import { MailInForm, MailInSteps} from '../../components/mail-in';

const itemsWeService = [
  "iPhone",
  "Samsung",
  "iPad",
  "MacBook",
  "Google Pixel",
  "Apple Watch",
];

export default function MailIn() {

  const router = useRouter();

 useEffect(() => {
    AOS.init();
  })

  return(
    <div>
      <Head>
        <title>Mail-In Repair - San Francisco | Gelatotech</title>

        {/* HTML Meta Tags */}
        <meta name="description" content="Gelatotech offers mail-in repair service for all models of iPhone,  iPad, Macbook, Apple Watch,  Samsung, and Google pixel. We can fix any problem." />
        <meta name="keywords" content="ipad, ipad pro, ipad mini, screen repair, battery replacement, fix, on-demand, on demand, driver, technician, fast, quick, San Francisco, Bay Area, CA, sf" />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Mail-in iPhone & Macbook Repair | Fast turnaround" />
        <meta itemProp="description" content="Gelatotech offers mail-in repair service for all models of iPhone,  iPad, Macbook, Apple Watch,  Samsung, and Google pixel. We can fix any problem." />
        <meta itemProp="image" content="images/mail-in.jpeg" />

        <link rel="stylesheet" href="../stylesheets/mail-in.css" />
      </Head>
      <section className="hero" id="hero">
        <div className="hero-body container" style={{ display: 'flex' }}>
          {/* <div className="container"> */}
            <div className="is-hidden-mobile">
              <h1 
              className="header-title" 
              style={{ 
                fontWeight: 'bold', 
                fontSize: '3em',
                marginLeft: 0, 
                paddingLeft: 0 
              }}>
                Mail-In Repair for  
                <ReactRotatingText
                  style={{ marginLeft: '0.2em' }}
                  items={itemsWeService}
                  color="#FA2A51"
                />
              </h1>
            </div>
            <div className="is-hidden-desktop is-hidden-tablet has-text-centered">
              <h1 
                className="header-title has-text-centered" 
                style={{ 
                  fontWeight: 'bold', 
                  fontSize: '2em',
                  marginTop: '-2.5em', 
                  color: 'white',
                }}>
                  Mail-In Repair
                </h1>
                <h2
                style={{
                  fontSize: '1.5em',
                  marginTop: '-1.5em',
                  fontWeight: 'bold',
                }}
                >
                <ReactRotatingText
                  items={itemsWeService}
                  color="#FA2A51"
                />
              </h2>
            </div>
          {/* </div> */}
        </div>
        <div className="is-3 has-text-centered" style={{ marginBottom: '1em' }}>
          <a 
              className="button is-info is-large" 
              onClick={()=>{
                scrollToSection("repair");
              }}
            >
              Get Started
              <FontAwesomeIcon 
                icon={faEnvelope} 
                style={{ height: '60%', marginLeft: '0.3em' }} 
              />
            </a>
        </div>
      </section>
      <TrustedBy />
      <div style={{marginTop: '3em', overflow: 'scroll'}}>
        <MailInSteps step={0} />
      </div>
      {/* <section className="section" id="works">
        <div className="container">
          <center>
            <div className="columns">
              <img className="column" style={{ width: '15rem' }} src={step1Img} />
              <img className="column" style={{ width: '15rem' }} src={step2Img} />
              <img className="column" style={{ width: '15rem' }} src={step3Img} />
              <img className="column" style={{ width: '15rem' }} src={step4Img} />
            </div>
          </center>
        </div>
      </section> */}
      {/* <section>
        <div className="container">
          <div className="columns">
            <hr className="is-hidden-desktop-only" />
            <div className="column">
              <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginLeft: '1em' }}>We service</h1>
              <ul style={{ listStyle: 'revert', marginLeft: '4em' }}>
                <li>Samsung</li>
                <li>iPhone</li>
                <li>iPad</li>
                <li>MacBook</li>
                <li>Google Pixel</li>
                <li>Apple Watch</li>
              </ul>
            </div>
            <hr className="is-hidden-desktop-only" />
            <div className="column is-three-quarters">
              <MailInForm />
            </div>
          </div>
        </div>
      </section> */}
      <MailInForm />
      <section>
        <div className="section" id="get-started"
          style={{
            backgroundImage: `url('images/elbert-with-phones-dark.jpg')`
          }}
        >
          <div className="container">
            <h3 className="title is-1" data-aos="fade-right" style={{color: 'white'}}>Book On-Demand Repair</h3>
            <h3 className="subtitle is-4" data-aos="fade-right" style={{color: 'white'}}>Our technicians drive to you!</h3><br />
            <a 
              className="button is-info is-large" 
              onClick={()=>{
                router.push('/#repair');
              }}
            >
              Book On-Demand
              <FontAwesomeIcon 
                icon={faCar} 
                style={{ height: '60%', marginLeft: '0.3em' }} 
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
