import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { Form, HowItWorks, TrustedBy, WhyUs } from '../../components';
import scrollToSection from '../../helpers/scrollToSection';
import AOS from 'aos';

export default function GooglePixel() {

  const router = useRouter();

  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <Head>
        <title>Expert Google Pixel Screen Repair - Trust Us With Your Phone's Screen</title>
        <meta name="description" content="Explore our comprehensive repair services for Google Pixel devices. Our expert solutions are designed to restore your Google Pixel to optimal performance." />
        <meta name="keywords" content=" Google Pixel Screen Repair, Google Pixel Phone Repair" />
        <meta itemProp="name" content="On-Site Google Pixel Repair | Gelatotech" />
        <meta itemProp="description" content="Need a Google Pixel repair in San Francisco? Our mobile technicians come to you for screen, battery, and charging port replacements. Fast, convenient service guaranteed." />
        <meta itemProp="image" content="/images/google-pixel-repair.jpg" />
        <meta property="og:url" content="https://www.gelatotech.com/google-pixel" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Expert Google Pixel Screen Repair - Trust Us With Your Phone's Screen" />
        <meta property="og:description" content="Explore our comprehensive repair services for Google Pixel devices. Our expert solutions are designed to restore your Google Pixel to optimal performance." />
        <meta property="og:image" content="/images/google-pixel-repair-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Google Pixel Screen Repair - Trust Us With Your Phone's Screen" />
        <meta name="twitter:description" content="Explore our comprehensive repair services for Google Pixel devices. Our expert solutions are designed to restore your Google Pixel to optimal performance." />
        <meta name="twitter:image" content="/images/google-pixel-repair-twitter.jpg" />
        <meta name="google-site-verification" content="otWUpfaXKjZHurqJg8KCSsabxvEJ9380Jprvwzazg8g" />
        <link rel="stylesheet" href="/stylesheets/pixel.css" />
        <link rel="stylesheet" href="/stylesheets/device-card.css" />
        <link rel="alternate" href="https://gelatotech.com/google-pixel" hreflang="en-us" />
        <link rel="canonical" href="https://gelatotech.com/google-pixel"/>
      </Head>
      <section className="hero" id="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">
              Mobile Google Pixel Repair at Your Location
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
              Repair my Pixel
              <FontAwesomeIcon
                icon={faMobile}
                style={{ height: '60%', marginLeft: '0.3em' }}
              />
            </a>
          </div>
        </div>
      </section>
      <TrustedBy />
      <HowItWorks deviceName="Google Pixel" />
      <WhyUs deviceName="Google Pixel" />
      <section id="repair">
        <Form make="google" />
        <div className="section" id="get-started"
          style={{
            backgroundImage: `url('images/cracked-pixel-bg.jpg')`
          }}
        >
          <div className="container">
            <h3 className="title is-1" data-aos="fade-right" style={{ color: 'white' }}>Ready to get started?</h3>
            <h3 className="subtitle is-4" data-aos="fade-right" style={{ color: 'white' }}>Google Pixel Screen Repair only takes 15 minutes!</h3><br />
            <a
              className="button is-info is-large"
              onClick={() => {
                scrollToSection("repair");
              }}
            >
              Book Pixel Repair
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
