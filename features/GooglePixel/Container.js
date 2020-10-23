import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
import BookRepairButton from '../../components/BookRepairButton';
import TrustedBy from '../../components/TrustedBy';

export default function GooglePixel() {

  const router = useRouter();

  return(
  <div>
    <Head>
      <title>Google Pixel Repair San Francisco - Screen & Battery Replacement | Gelatotech </title>

      {/* HTML Meta Tags */}
      <meta name="description" content="Our technicians drive to your preferred location on-demand to repair your Google Pixel device." />
      <meta name="keywords" content="google, pixel, screen repair, battery replacement, fix, on-demand, on demand, driver, technician, fast, quick, XL, 3A, 4XL, 3XL, San Francisco, Bay Area, CA, sf" />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="Google Pixel Repair | Gelatotech" />
      <meta itemProp="description" content="Our technicians drive to your preferred location on-demand to repair your Google Pixel device." />
      <meta itemProp="image" content="images/pixel-bg.jpg" />

      <link rel="stylesheet" href="../stylesheets/pixel.css" />
      <link rel="stylesheet" href="../stylesheets/device-card.css" />
    </Head>
    <section className="hero" id="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            Google Pixel Repair
          </h1>
        </div>
        <div className="container has-text-centered">
          <h2 className="subtitle is-6">
            On-demand repair at your location!
          </h2>
          <BookRepairButton text="Repair My Pixel" make="google" />
        </div>
      </div>
    </section>
    <section>
      <h1 style={{ fontSize: '2em', paddingTop: '1em', paddingLeft: '1em' }}>
        Choose your device
      </h1>
      <OwlCarousel 
        style={{ marginBottom: '2em' }}
        autoplay={true} 
        loop 
        dots={false} 
        autoplayTimeout={3000}
        responsive={{
          0:{
              items: 1
          },
          600:{
              items: 2
          },
          1000:{
              items: 3
          }
      }}
      >  
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel</h1>
              <button 
                style={buttonStyles}
                onClick={()=> {router.push('/?make=google&model=googlePixel#repair')}}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixelXL.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel XL</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?make=google&model=googlePixelXL#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel2.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 2</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?make=google&model=googlePixel2#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel2XL.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 2 XL</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?make=google&model=googlePixel2XL#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel3.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 3</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?make=google&model=googlePixel3#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel3XL.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 3 XL</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?make=google&model=googlePixel3XL#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel3.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 3A</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?make=google&model=googlePixel3a#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel4.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 4</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?make=google&model=googlePixel4#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel4XL.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 4 XL</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?make=google&model=googlePixel4XL#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
      </OwlCarousel>
      <section style={{ textAlign: 'center', margin: '2em' }}>
        <a onClick={()=> router.push('/?make=iphone#repair')}>Repair my iPhone</a>
      </section>
    </section>
    <TrustedBy />
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