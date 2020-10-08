import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

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
      <link rel="stylesheet" href="stylesheets/about.css" />
    </Head>
    <section className="hero" id="hero">
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
          <a href="#repair" target="_blank" className="button is-info is-large" style={{ marginLeft: '1rem' }}>Book iPhone Repair<FontAwesomeIcon icon={faMobile} style={{ margin: '.5rem' }} /></a>
        </div>
      </div>
    </section>
  </div>
  )
}