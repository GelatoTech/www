import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import TrustedBy from '../../components/TrustedBy';
import Form from '../../components/Form';
import scrollToSection from '../../helpers/scrollToSection';
import AOS from 'aos';
import step1Img from '../../public/images/mail-1.png';
import step2Img from '../../public/images/mail-2.png';
import step3Img from '../../public/images/mail-3.png';
import step4Img from '../../public/images/mail-4.png';
import MailInForm from '../../components/MailInForm';

export default function MailIn() {

  const router = useRouter();

  useEffect(() => {
    AOS.init();
  });

  return(
  <div>
    <Head>
      <title>Mail-In Repair - San Francisco | Gelatotech</title>

      {/* HTML Meta Tags */}
      <meta name="description" content="Mail your device(s) in for repair." />
      <meta name="keywords" content="ipad, ipad pro, ipad mini, screen repair, battery replacement, fix, on-demand, on demand, driver, technician, fast, quick, San Francisco, Bay Area, CA, sf" />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="Mail-In Repair - San Francisco | Gelatotech" />
      <meta itemProp="description" content="Mail your device(s) in for repair." />
      <meta itemProp="image" content="images/mail-in.jpeg" />

      <link rel="stylesheet" href="../stylesheets/mail-in.css" />
    </Head>
    <section className="hero" id="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            {/* Mail-In Repair */}
          </h1>
        </div>
        <div className="container has-text-centered">
          {/* <h2 className="subtitle is-6">
            At your location
          </h2> */}
          {/* <a 
            className="button is-info is-large" 
            onClick={()=>{
              scrollToSection("repair");
            }}
          >
            Repair my iPad
            <FontAwesomeIcon 
              icon={faMobile} 
              style={{ height: '60%', marginLeft: '0.3em' }} 
            />
          </a> */}
        </div>
      </div>
    </section>
    <TrustedBy />
    <section className="section" id="works">
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
    </section>
    <section>
      <MailInForm />
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

const buttonStyles = { 
  backgroundColor: '#1496ED', 
  border: 0, 
  padding: '0.5em', 
  color: 'white', 
  borderRadius: '6px',
  marginTop: '1.5em',
}