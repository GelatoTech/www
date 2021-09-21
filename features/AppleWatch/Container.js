import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import { Form, HowItWorks, TrustedBy } from '../../components';
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
    <HowItWorks deviceName="Apple Watch" />
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
  </div>
)}

const buttonStyles = { 
  backgroundColor: '#1496ED', 
  border: 0, 
  padding: '0.5em', 
  color: 'white', 
  borderRadius: '6px',
  marginTop: '1.5em',
}
