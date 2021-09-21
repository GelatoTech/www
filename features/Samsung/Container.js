import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { Form, HowItWorks, TrustedBy, WhyUs } from '../../components';
import scrollToSection from '../../helpers/scrollToSection';
import AOS from 'aos';

export default function Samsung() {

  const router = useRouter();

  useEffect(() => {
    AOS.init();
  });

  return(
  <div>
    <Head>
      <title>Mobile Samsung Repair San Francisco - Screen, Battery & Charging port replacement | Gelatotech</title>

      {/* HTML Meta Tags */}
      <meta name="description" content="Our technicians drive to your preferred location on-demand to repair your Samsung device." />
      <meta name="keywords" content="samsung, screen repair, battery replacement, fix, on-demand, on demand, driver, technician, fast, quick, San Francisco, Bay Area, CA, sf" />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="Mobile Samsung Repair | We come to you, Same day Repair" />
      <meta itemProp="description" content="Samsung screen cracked? Our skilled technicians come to you and fix your phone screen within 45-60 mins. Same Day Repair, Book your phone repair today!" />
      <meta itemProp="image" content="images/samsung-bg.jpeg" />

      <link rel="stylesheet" href="../stylesheets/samsung.css" />
      <link rel="stylesheet" href="../stylesheets/device-card.css" />
    </Head>
    <section className="hero" id="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            Mobile Samsung Repair at Your Location
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
            Repair my Samsung
            <FontAwesomeIcon 
              icon={faMobile} 
              style={{ height: '60%', marginLeft: '0.3em' }} 
            />
          </a>
        </div>
      </div>
    </section>
    <TrustedBy />
    <HowItWorks deviceName="Samsung" />
    <WhyUs />
    <section>
      <Form make="samsung" />
      <div className="section" id="get-started"
        style={{
          backgroundImage: `url('images/samsung-cracked.jpeg')`
        }}
      >
        <div className="container">
          <h3 className="title is-1" data-aos="fade-right" style={{color: 'white'}}>Ready to get started?</h3>
          <h3 className="subtitle is-4" data-aos="fade-right" style={{color: 'white'}}>Samsung Screen Repair only takes 15 minutes!</h3><br />
          <a 
            className="button is-info is-large" 
            onClick={()=>{
              scrollToSection("repair");
            }}
          >
            Book Samsung Repair
            <FontAwesomeIcon 
              icon={faMobile} 
              style={{ height: '60%', marginLeft: '0.3em' }} 
            />
          </a>
        </div>
      </div>
      <section style={{ textAlign: 'center', margin: '2em' }}>
        <a onClick={()=> router.push('/?m=iphone#repair')}>have an iPhone?</a>
        <hr />
      </section>
    </section>
  </div>
  )
}
