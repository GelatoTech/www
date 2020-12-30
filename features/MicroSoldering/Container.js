import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faEnvelope, faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import TrustedBy from '../../components/TrustedBy';
import scrollToSection from '../../helpers/scrollToSection';
import AOS from 'aos';
import MailInForm from '../../components/mail-in/MailInForm';
import MailInSteps from '../../components/mail-in/MailInSteps';

export default function MicroSoldering() {

  const router = useRouter();

  useEffect(() => {
    AOS.init();
  });

  const [service, setService] = useState(null);

  return(
    <div>
      <Head>
        <title>Micro Soldering Services - San Francisco | Gelatotech</title>

        {/* HTML Meta Tags */}
        <meta name="description" content="On-demand and mail-in iPhone/MacBook micro soldering services." />
        <meta name="keywords" content="motherboard, solder, soldering, micro soldering, ipad, ipad pro, ipad mini, screen repair, battery replacement, fix, on-demand, on demand, driver, technician, fast, quick, San Francisco, Bay Area, CA, sf" />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Micro soldering services - San Francisco | Gelatotech" />
        <meta itemProp="description" content="On-demand and mail-in iPhone/MacBook micro soldering services." />
        <meta itemProp="image" content="images/micro-soldering.jpg" />

        <link rel="stylesheet" href="../stylesheets/micro-soldering.css" />
      </Head>
      <section className="hero" id="hero">
        <div className="hero-body container">
          <h1 
            className="header-title" 
            style={{ 
              fontWeight: 'bold', 
              fontSize: '3em',
              marginLeft: 0, 
              paddingLeft: 0 
          }}>
            iPhone/MacBook Micro Soldering
          </h1>
          <h2 className="subtitle" style={{ textAlign: 'center' }}>
            Motherboard • Water Damage • Data Recovery
          </h2>
        </div>
        <div className="is-3 has-text-centered" style={{ marginBottom: '1em' }}>
          <a 
            className="button is-info is-large" 
            onClick={()=>{
              scrollToSection("serviceSelector");
            }}
          >
            Repair My Device
            <FontAwesomeIcon 
              icon={faScrewdriver} 
              style={{ height: '60%', marginLeft: '0.3em' }} 
            />
          </a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', color: 'white', fontSize: '0.7em' }}>
          <a style={{ color: 'white' }} onClick={()=>router.push('/#repair')}>for screen repair and other services, click here</a>
        </div>
      </section>
      <TrustedBy />
      <div id="serviceSelector" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3em', flexDirection: 'column' }}>
        <h1 className="heading" style={{ fontSize: '1em', marginBottom: '1em' }}>Select service</h1>
        <div className="tabs is-toggle" style={{ marginBottom: '4em' }}>
          <ul>
            <li 
              className={`${service === 'mail-in' ? 'is-active' : ''}`}
              onClick={() => {
                setService('mail-in');
              }}
              style={styles.tabLI}
            >
              <a style={styles.tabA}>
                <FontAwesomeIcon icon={faEnvelope} style={{ width: '3em'}} />
                <span className="heading" style={{ fontSize: '1em' }}>
                  Mail-In
                </span><hr style={{ width: '100%', height: '1px', margin: '0', marginBottom: '1em' }} />
                <span style={{ fontSize: "0.8em" }}>Send your device by mail to us for repair.</span>
              </a>
            </li>
            <li 
              className={`${service === 'on-demand' ? 'is-active' : ''}`}
              onClick={() => {
                setService('on-demand');
              }}
              style={styles.tabLI}
            >
               <a style={styles.tabA}>
                <FontAwesomeIcon icon={faCar} style={{ width: '3em'}} />
                <span className="heading" style={{ fontSize: '1em' }}>FREE Pickup</span><hr style={{ width: '100%', height: '1px', margin: '0', marginBottom: '1em' }} />
                <span style={{ fontSize: "0.8em" }}>Our <strong>San Francisco</strong> technicians drive to you.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {
        service === 'mail-in'
          ? (
            <div style={{marginTop: '3em', overflow: 'scroll'}}>
              <MailInSteps step={0} />
            </div>
          )
        : ''
      }
      {
        service !== null
          ? (<MailInForm serviceType={service} repairType={'micro-soldering'} />)
          : ''
      }
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

const styles = {
  tabLI: {
    width: '20em',
  },
  tabA: {
    padding: '2em',
    flexDirection: 'column'
  },
};
