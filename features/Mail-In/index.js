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
import { MailInForm, MailInSteps } from '../../components/mail-in';

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

  return (
    <div>
      <Head>
        <title>Mail-In Repair for Your Phones, MacBooks and Apple Watch</title>
        <meta name="description" content="You can conveniently browse and complete the mail-in form to send in your device for repair. Just submit your information and device details. Feel free to fill it out now!" />
        <meta name="keywords" content="Mail-In Repair, iPhone Repair, iPad Repair, MacBook Repair, Apple Watch Repair, Samsung Galaxy Repair, Google Pixel Repair, Nationwide Repair Service, Device Repair, Fast Turnaround" />
        <meta itemProp="name" content="Nationwide Mail-In Repair Service | iPhones, MacBooks & More" />
        <meta itemProp="description" content="Trust Gelatotech for all your device repair needs. Mail-in your iPhone, iPad, MacBook, or other devices from anywhere in the U.S. for quick, expert repairs." />
        <meta itemProp="image" content="/images/mail-in-service.jpeg" />
        <meta property="og:url" content="https://www.gelatotech.com/mail-in" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mail-In Repair Service for All Devices | Gelatotech" />
        <meta property="og:description" content="Expert mail-in repair service available nationwide for iPhones, iPads, MacBooks, and more. Fast, reliable repairs by Gelatotech, wherever you are." />
        <meta property="og:image" content="/images/mail-in-og.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Convenient Mail-In Device Repair | Nationwide Service by Gelatotech" />
        <meta name="twitter:description" content="Need device repair? Mail-in your iPhone, iPad, or MacBook from anywhere in the U.S. for fast, expert service by Gelatotech." />
        <meta name="twitter:image" content="/images/mail-in-twitter.jpeg" />
        <meta name="google-site-verification" content="otWUpfaXKjZHurqJg8KCSsabxvEJ9380Jprvwzazg8g" />
        <link rel="stylesheet" href="/stylesheets/mail-in.css" />
        <link rel="alternate" href="https://gelatotech.com/mail-in" hreflang="en-us" />
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
            <h3
              className="header-title has-text-centered"
              style={{
                fontWeight: 'bold',
                fontSize: '2em',
                marginTop: '-2.5em',
                color: 'white',
              }}>
              Mail-In Repair
            </h3>
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
            onClick={() => {
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
      <div style={{ marginTop: '3em', overflow: 'scroll' }}>
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
            <h3 className="title is-1" data-aos="fade-right" style={{ color: 'white' }}>Book On-Demand Repair</h3>
            <h3 className="subtitle is-4" data-aos="fade-right" style={{ color: 'white' }}>Our technicians drive to you!</h3><br />
            <a
              className="button is-info is-large"
              onClick={() => {
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
