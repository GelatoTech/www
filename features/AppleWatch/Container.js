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

  return (
    <div>
      <Head>
        <title>On-Demand Repair for Apple Watch Screens in San Francisco, CA</title>
        <link rel="alternate" href="https://gelatotech.com/apple-watch" hreflang="en-us" />
        {/* HTML Meta Tags */}
        <meta name="description" content="Discover Gelatotech professional Apple Watch repair; our mechanics are experienced in repairing all Apple Watch models, ensuring that they are in good hands." />
        <meta name="keywords" content="Apple Watch Repair, Apple Watch Screen Repair" />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="On-Demand Apple Watch Repair in San Francisco | Gelatotech" />
        <meta itemProp="description" content="Need your Apple Watch fixed? Gelatotech offers mobile repair services for all models, including screen and battery replacements. We come to you for a hassle-free repair experience." />
        <meta itemProp="image" content="images/apple-watch-repair.jpeg" />

        {/* Twitter card Tag*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="On-Demand Repair for Apple Watch Screens in San Francisco, CA" />
        <meta name="twitter:description" content="Discover Gelatotech professional Apple Watch repair; our mechanics are experienced in repairing all Apple Watch models, ensuring that they are in good hands." />
        <meta name="twitter:image" content='/images/ ' />

        {/* Open Grap Tag */}
        <meta property="og:url" content="https://gelatotech.com/apple-watch" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="On-Demand Repair for Apple Watch Screens in San Francisco, CA" />
        <meta property="og:description" content="Discover Gelatotech professional Apple Watch repair; our mechanics are experienced in repairing all Apple Watch models, ensuring that they are in good hands." />
        <meta property="og:image" content='/images/logo.svg' />

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
              onClick={() => {
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
          <h3 className="title is-1" data-aos="fade-right" style={{ color: 'white' }}>Ready to get started?</h3>
          <h3 className="subtitle is-4" data-aos="fade-right" style={{ color: 'white' }}>LCD screen assembly replacement only takes 20-30 minutes!</h3><br />
          <a
            className="button is-info is-large"
            onClick={() => {
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
        <a onClick={() => router.push('/#repair')}>repair a different device</a>
        <hr />
      </section>
    </div>
  )
}
