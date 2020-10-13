import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import TrustedBy from '../../components/TrustedBy';
import BookRepairButton from '../../components/BookRepairButton';
import { faYelp } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return(
  <div>
    <Head>
      <title>Gelatotech iPhone Repair | About Us </title>

      {/* HTML Meta Tags */}
      <meta name="description" content="Your Phone is Important To Us, Thats why we come to you and Repair your phone same-day! " />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="Mobile iPhone Repair | About Us | Gelatotech" />
      <meta itemProp="description" content="Your Phone is Important To Us, Thats why we come to you and Repair your phone same-day!" />
      <meta itemProp="image" content="images/iphone-repair.png" />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://www.gelatotech.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mobile iPhone Repair | About Us | Gelatotech" />
      <meta property="og:description" content="Your Phone is Important To Us, Thats why we come to you and Repair your phone same-day!" />
      <meta property="og:image" content="images/iphone-repair.png" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile iPhone Repair | About Us | Gelatotech" />
      <meta name="twitter:description" content="Your Phone is Important To Us, Thats why we come to you and Repair your phone same-day!" />
      <meta name="twitter:image" content="images/iphone-repair.png" />
      <meta name="keywords" content=" iPhone Repair, iPhone Screen Repair, iPhone fix, iPhone Replacement on-demand, on demand" />
      <link rel="stylesheet" href="../stylesheets/about.css" />
    </Head>
    <section className="hero" id="hero" style={{
      backgroundImage: "url(../images/imageonline-co-darkenimage.png)",
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
              <img src="../images/junior.png" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '5px'}} alt="junior technician" />
            </figure>
            <h2 className="subtitle is-3">Junior S.</h2>
            <div className="notification">
              <img src="../images/Anna-b.png" style={{maxWidth: '200px'}} alt="customer anna iphone repair" />
              <p>"Junior came to my location in just 20 minutes. Super friendly and he fixed my iPhone in 15 mininutes.” </p>
              <br />
              <a href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?start=20" target="_blank" className="button is-danger is-rounded">Read on Yelp <FontAwesomeIcon style={{marginLeft: '10px'}} icon={faYelp} /></a>
            </div>
          </div>
          <div className="column">
            <figure className="image">
              <img src="../images/elbert.png" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '5px'}} alt="" />
            </figure>
            <h2 className="subtitle is-3">Elbert O.</h2>
            <div className="notification">
              <img src="../images/Rishabh-P.png" style={{maxWidth: '200px'}} alt="" />
              <p>"Very quick and convenient. They came to me Same-Day, they fixed my iPhone in 15 minutes. Thanks to Elbert! ” </p>
              <br />
              <a href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?start=20" target="_blank" className="button is-danger is-rounded">Read on Yelp <FontAwesomeIcon style={{marginLeft: '5px'}} icon={faYelp} /></a>
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
              <img src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="iphone" />
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
    <div className="section" id="get-started" style={{
      backgroundImage: 'url(../images/macbook-iphone.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'left',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',
      padding: '5rem'
    }}>
      <div className="container">
        <h2 className="title is-1">Ready to get started?</h2>
        <h2 className="subtitle is-4">iPhone Screen Repair only takes 15 minutes!</h2>
        <BookRepairButton />
      </div>
    </div>
  </div>
  )
}