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
      <title>Apple Watch Repair in San Francisco | On-Demand Service | Gelatotech</title>

      {/* HTML Meta Tags */}
      <meta name="description" content="Fast, reliable Apple Watch repair in San Francisco. From cracked screens to battery replacements, our on-demand service brings the fix to you, same day. Book now for expert Apple Watch glass and OLED screen repairs." />
      <meta name="keywords" content="Apple Watch Repair, Screen Repair, Battery Replacement, On-Demand Repair, San Francisco, Gelatotech, Quick, Professional, Apple Watch Series, OLED Replacement, Glass Repair, Technician, Mobile Service, SF Bay Area" />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="On-Demand Apple Watch Repair in San Francisco | Gelatotech" />
      <meta itemProp="description" content="Need your Apple Watch fixed? Gelatotech offers mobile repair services for all models, including screen and battery replacements. We come to you for a hassle-free repair experience." />
      <meta itemProp="image" content="images/apple-watch-repair.jpeg" />

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
    <section id="repair">
      <Form make="apple-watch" />
    </section>
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
