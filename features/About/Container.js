import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BookRepairButton, TrustedBy } from '../../components';
import { faYelp } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return(
  <div>
    <Head>
      <title>About Gelatotech - Redefining Mobile Device Repair in San Francisco</title>

      {/* HTML Meta Tags */}
      <meta name="description" content="Learn about Gelatotech, the heart behind San Francisco's premier on-demand device repair service. Discover our commitment to convenience, quality, and rapid service, directly to your doorstep." />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="About Gelatotech - Our Story & Mission" />
      <meta itemProp="description" content="Gelatotech stands for more than just device repair; we're about providing peace of mind, with fast, reliable, and convenient repair services for all your mobile devices." />
      <meta itemProp="image" content="images/about-gelatotech.png" />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://www.gelatotech.com/about" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="About Gelatotech - Your Trusted Partner in Mobile Device Repair" />
      <meta property="og:description" content="Meet Gelatotech, your ally in navigating the hassles of device repair. We specialize in quick, reliable repairs, ensuring your life stays uninterrupted. Get to know our story." />
      <meta property="og:image" content="images/about-gelatotech.png" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Discover Gelatotech - Innovation in Device Repair" />
      <meta name="twitter:description" content="At Gelatotech, we do more than fix devices; we ensure your day runs smoothly. Find out how our San Francisco-based team makes technology repair convenient and efficient." />
      <meta name="twitter:image" content="images/about-gelatotech.png" />
      <meta name="keywords" content="About Gelatotech, Mobile Device Repair, On-Demand Repair Service, San Francisco, iPhone Repair, iPad Repair, Samsung Repair, Technology Repair Services" />
      <link rel="stylesheet" href="../stylesheets/about.css" />
    </Head>

    <section className="hero" id="hero" style={{
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '100%',
      padding: '3rem 0'
    }} >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            Phone Repair at Your Location
          </h1>
        </div>
        <div className="container has-text-centered">
          <h2 className="subtitle is-6">
            Providing You The Quality Service &amp; Parts
          </h2>
          <BookRepairButton />
        </div>
      </div>
    </section>
    <TrustedBy />
    {/* our technicians */}
    <section id="technician">
      <div className="container has-text-centered">
        <h1 className="title is-1">Our Technicians</h1>
        <div className="columns">
          <div className="column">
            <figure className="image">
              <div style={{width: '40%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '5px'}}>
                <Image src="/images/junior.png" alt="junior technician" width="100%" height="100%" layout="responsive" objectFit="contain" />
              </div>
            </figure>
            <h2 className="subtitle is-3">Junior S.</h2>
            <div className="notification">
              <center>
                <div style={{maxWidth: '200px'}}>
                  <Image src="/images/Anna-b.png" alt="customer anna iphone repair" width="100%" height="50%" layout="responsive" objectFit="contain" />
                </div>
              </center>
              <p>"Junior came to my location in just 20 minutes. Super friendly and he fixed my iPhone in 15 mininutes.” </p>
              <br />
              <a href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?start=20" target="_blank" className="button is-danger is-rounded">Read on Yelp <FontAwesomeIcon style={{marginLeft: '10px', width: '1em'}} icon={faYelp} /></a>
            </div>
          </div>
          <div className="column">
            <figure className="image">
              <div style={{width: '40%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '5px'}}>
                <Image src="/images/elbert.png" alt="Elbert O." width="100%" height="100%" layout="responsive" objectFit="contain" />
              </div>
            </figure>
            <h2 className="subtitle is-3">Elbert O.</h2>
            <div className="notification">
              <center>
                <div style={{maxWidth: '200px'}}>
                  <Image src="/images/Rishabh-P.png" width="100%" height="50%" layout="responsive" objectFit="contain" />
                </div>
              </center>
              <p>"Very quick and convenient. They came to me Same-Day, they fixed my iPhone in 15 minutes. Thanks to Elbert! ” </p>
              <br />
              <a href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?start=20" target="_blank" className="button is-danger is-rounded">Read on Yelp <FontAwesomeIcon style={{marginLeft: '5px', width: '1em'}} icon={faYelp} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" style={{ marginBottom: '3em' }}>
      <div className="container about-container">
        <h1 className="title is-1 has-text-centered" style={{color: 'white'}}>Our Philosophy</h1>
        <div className="columns is-vcentered is-center">
          <div className="column">
            <figure className="card-image is-large">
              <Image src="/images/pexels-photo-699122.jpeg" alt="iphone" width="100%" height="50%" layout="responsive" objectFit="contain" />
            </figure>
          </div>
          <div className="column">
            <p className="subtitle is-3"><b>Today’s</b> Fast-moving world should be easy to get your Phone Repair so you can focus on what matters 
              most. That’s where we come in. Our professional technicians come to you and fix your device at your location. </p>
          </div>
        </div>
      </div>
    </section>
    {/* get started banner */}
    <div className="section container" id="get-started" style={{ borderRadius: "8px", overflow: 'hidden', marginBottom: '5em' }}>
      <Image src="/images/iphones-bg.jpeg" layout="fill" objectFit='cover' />
      <div style={{ position: 'relative', marginBottom: '29px' }}>
        <h2 className="title is-1">Ready to get started?</h2>
        <h2 className="subtitle is-4">iPhone Screen Repair only takes 15 minutes!</h2>
      </div>
      <BookRepairButton />
    </div>
  </div>
  )
}
