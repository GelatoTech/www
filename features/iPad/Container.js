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

  return (
    <div>
      <Head>
        <title>On-Site iPad Screen & Charging Port Replacement</title>
        <meta name="description" content="Experience issues with your iPad or iPhone charging port & screen? Our expert technicians will confidently repair the problem at your preferred location." />
        <meta name="keywords" content="iPad Charging Port Repair, iPhone Screen Repair" />
        <meta itemProp="name" content="Mobile iPad Repair in San Francisco | Quick, Reliable Service" />
        <meta itemProp="description" content="Need your iPad fixed fast? Our mobile technicians offer screen, battery, and charging port replacements directly to your location. Book your same-day iPad repair in San Francisco today!" />
        <meta itemProp="image" content="/images/ipad-repair-service.png" />
        <meta property="og:url" content="https://www.gelatotech.com/ipad" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="iPad Repair Service in San Francisco | Gelatotech" />
        <meta property="og:description" content="Get your iPad repaired quickly with our mobile service. Offering screen, battery, and charging port replacements for all models. Contact us for same-day repairs in San Francisco." />
        <meta property="og:image" content="/images/ipad-repair-og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fast and Reliable iPad Repair in San Francisco | Gelatotech" />
        <meta name="twitter:description" content="Your iPad can be repaired today! Our technicians come to you for fast screen, battery, and port replacements. Book your iPad repair with Gelatotech now." />
        <meta name="twitter:image" content="/images/ipad-repair-twitter.png" />
        <meta name="google-site-verification" content="otWUpfaXKjZHurqJg8KCSsabxvEJ9380Jprvwzazg8g" />
        <link rel="stylesheet" href="/stylesheets/ipad.css" />
        <link rel="stylesheet" href="/stylesheets/device-card.css" />
        <link rel="alternate" href="https://gelatotech.com/ipad" hreflang="en" />
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
              onClick={() => {
                scrollToSection("repair");
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
      <section id="repair">
        <Form make="ipad" />
        <div className="section" id="get-started"
          style={{
            backgroundImage: `url('images/cracked-ipad.png')`
          }}
        >
          <div className="container">
            <h3 className="title is-1" data-aos="fade-right" style={{ color: 'white' }}>Ready to get started?</h3>
            <h3 className="subtitle is-4" data-aos="fade-right" style={{ color: 'white' }}>iPad Screen Repair only takes 15 minutes!</h3><br />
            <a
              className="button is-info is-large"
              onClick={() => {
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
          <a onClick={() => router.push('/?m=iphone#repair')}>have an iPhone?</a>
          <hr />
        </section>
      </section>
    </div>
  )
}
