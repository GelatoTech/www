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

  return (
    <div>
      <Head>
        <title>Experienced Experts for Samsung Phone Battery Replacement</title>
        <meta name="description" content="Discover our exceptional services for Samsung phone battery replacement, featuring high-quality parts, conveniently offered at your chosen location. Get in touch with us today!" />
        <meta name="keywords" content="Samsung Phone Battery Replacement" />
        <meta itemProp="name" content="Fast Samsung Device Repair | Gelatotech Comes to You" />
        <meta itemProp="description" content="Need a quick Samsung repair in San Francisco? Our mobile technicians specialize in screen, battery, and port repairs, offering same-day service for all Samsung models." />
        <meta itemProp="image" content="/images/samsung-repair-service.jpeg" />
        <meta property="og:url" content="https://gelatotech.com/samsung"/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Experienced Experts for Samsung Phone Battery Replacement" />
        <meta property="og:description" content="Looking for the best Samsung repair service? Our professionals will arrive at your location with fully equipped vehicle to provide you with excellent repair." />
        <meta property="og:image" content="/images/samsung-repair-og.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Experienced Experts for Samsung Phone Battery Replacement" />
        <meta name="twitter:description" content="Looking for the best Samsung repair service? Our professionals will arrive at your location with fully equipped vehicle to provide you with excellent repair." />
        <meta name="twitter:image" content="/images/samsung-repair-twitter.jpeg" />
        <meta name="google-site-verification" content="otWUpfaXKjZHurqJg8KCSsabxvEJ9380Jprvwzazg8g" />
        <link rel="stylesheet" href="/stylesheets/samsung.css" />
        <link rel="stylesheet" href="/stylesheets/device-card.css" />
        <link rel="alternate" href="https://gelatotech.com/samsung" hreflang="en-us" />
        <link rel="alternate" href="https://gelatotech.com/samsung" hreflang="x-default" />
        <link rel="canonical" href="https://gelatotech.com/samsung"/>
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
              onClick={() => {
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
      <section id="repair">
        <Form make="samsung" />
        <div className="section" id="get-started"
          style={{
            backgroundImage: `url('images/samsung-cracked.jpeg')`
          }}
        >
          <div className="container">
            <h3 className="title is-1" data-aos="fade-right" style={{ color: 'white' }}>Ready to get started?</h3>
            <h3 className="subtitle is-4" data-aos="fade-right" style={{ color: 'white' }}>Samsung Screen Repair only takes 15 minutes!</h3><br />
            <a
              className="button is-info is-large"
              onClick={() => {
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
          <a onClick={() => router.push('/?m=iphone#repair')}>have an iPhone?</a>
          <hr />
        </section>
      </section>
    </div>
  )
}
