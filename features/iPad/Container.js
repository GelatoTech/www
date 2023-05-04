import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { Form, HowItWorks, TrustedBy, WhyUs } from '../../components';
import scrollToSection from '../../helpers/scrollToSection';
import AOS from 'aos';

export default function iPad() {

  const router = useRouter();

  useEffect(() => {
    AOS.init();
  });

  return(
  <div>
    <Head>
      <title>Mobile iPad Repair San Francisco - Screen, Battery & Charging port replacement | Gelatotech</title>

      {/* HTML Meta Tags */}
      <meta name="description" content="Our technicians drive to your preferred location on-demand to repair your iPad." />
      <meta name="keywords" content="ipad, ipad pro, ipad mini, screen repair, battery replacement, fix, on-demand, on demand, driver, technician, fast, quick, San Francisco, Bay Area, CA, sf" />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="Mobile iPad Repair SF | We come to you! Same-day Repair" />
      <meta itemProp="description" content="iPad screen cracked? We can fix it same-day. Our skilled technicians come to you and fix your iPad within 45-60 mins. Book your iPad repair today." />
      <meta itemProp="image" content="images/ipad-bg.png" />

      <link rel="stylesheet" href="../stylesheets/ipad.css" />
      <link rel="stylesheet" href="../stylesheets/device-card.css" />
    </Head>
    <section className="hero" id="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            Mobile iPad Repair at Your Location
          </h1>
        </div>
        <div className="container has-text-centered">
          <h2 className="subtitle is-6">
            San Francisco, CA
          </h2>
          <a 
            className="button is-info is-large" 
            onClick={()=>{
              scrollToSection("form-section");
            }}
          >
            Repair my iPad
            <FontAwesomeIcon 
              icon={faMobile} 
              style={{ height: '60%', marginLeft: '0.3em' }} 
            />
          </a>
        </div>
      </div>
    </section>
    <TrustedBy />
    <HowItWorks deviceName="iPad" />
    <WhyUs />
    <section id="form-section">
      <Form make="ipad" />
      <div className="section" id="get-started"
        style={{
          backgroundImage: `url('images/cracked-ipad.png')`
        }}
      >
        <div className="container">
          <h3 className="title is-1" data-aos="fade-right" style={{color: 'white'}}>Ready to get started?</h3>
          <h3 className="subtitle is-4" data-aos="fade-right" style={{color: 'white'}}>iPad Screen Repair only takes 15 minutes!</h3><br />
          <a 
            className="button is-info is-large" 
            onClick={()=>{
              scrollToSection("repair");
            }}
          >
            Book iPad Repair
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
