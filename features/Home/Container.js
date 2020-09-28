import Head from 'next/head';
// import 'all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faYelp } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return(
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="ie=edge" http-equiv="X-UA-Compatible" />
      <link href="images/logo-square.png" rel="shortcut icon" type="image/png" />
      <meta content="San Francisco Mobile iPad Repair and iPhone Repair. We repair your device at your preferred time & location. Most iPhone Screen Repair Only takes 15 minutes." name="description" />
      <meta content="index" name="robots" />
      <meta content="Mobile iPhone Repair in San Francisco | Gelatotech" itemprop="name" />
      <meta content="San Francisco Mobile iPad Repair and iPhone Repair. We repair your device at your preferred time & location. Most iPhone Screen Repair Only takes 15 minutes." itemprop="description" />
      <meta content="images/iphone-repair.png" itemprop="image" />
      <meta content="https://www.gelatotech.com" property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="Mobile iPhone Repair in San Francisco | Gelatotech" property="og:title" />
      <meta content="San Francisco Mobile iPad Repair and iPhone Repair. We repair your device at your preferred time & location. Most iPhone Screen Repair Only takes 15 minutes." property="og:description" />
      <meta content="images/iphone-repair.png" property="og:image" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="Mobile iPhone Repair in San Francisco | Gelatotech" name="twitter:title" />
      <meta content="San Francisco Mobile iPad Repair and iPhone Repair. We repair your device at your preferred time & location. Most iPhone Screen Repair Only takes 15 minutes." name="twitter:description" />
      <meta content="images/iphone-repair.png" name="twitter:image" />
      <meta content=" iPhone Repair, iPhone Screen Repair, iPhone fix, iPhone Replacement On-demand, on, demand" name="keywords" />
      <meta content="otWUpfaXKjZHurqJg8KCSsabxvEJ9380Jprvwzazg8g" name="google-site-verification" />
    </Head>
    <section className="hero" id="hero">
      <div id="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Mobile iPhone Repair<br />at your location</h1>
          <p className="subtitle is-3" style={{ color: 'white' }}>San Francisco, CA</p><br />
          <a className="button is-info is-large" href="#repair">Book iPhone Repair <FontAwesomeIcon icon={faMobile} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
        </div>
        <div className="container" id="reviews">
          <div className="columns owl-carousel owl-theme" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '80px' }}>
            <div className="column">
              <div className="notification">
                <img alt="customer brooke iphone repair review" src="images/testimonials/Brooke.png" style={{ maxWidth: '200px' }} />
                <p>"Elbert showed up literally 15 minutes from the time he first texted me back after my request, and repaired my iPhone in less than 15 minutes. He was professional, kind, patient (I kept him waiting a few more minutes while finishing a meeting), and the work was superb! I will absolutely call him again.”</p><br />
                <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
              </div>
            </div>
            <div className="column">
              <div className="notification">
                <img alt="customer iphone repair review" src="images/testimonials/Daniel-A.png" style={{ maxWidth: '200px' }} />
                <p>"This is a truly unique and fantastic idea, well marketed and well executed. I put in a request on their extremely user friendly website and received a call right away and he was at my door just 30min later. He was super friendly and he fixed my iPhone in 20min. cant ask for more.”</p><br />
                <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
              </div>
            </div>
            <div className="column">
              <div className="notification">
                <img alt="customer lukas iphone repair review" src="images/testimonials/Lukas-B.png" style={{ maxWidth: '200px' }} />
                <p>"These guys do great work, are friendly, and have super reasonable prices. I'd recommend them to anyone needing iPhone repair.”</p><br />
                <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
              </div>
            </div>
            <div className="column">
              <div className="notification">
                <img alt="customer brendan iphone repair review" src="images/testimonials/Brendan-D.png" style={{ maxWidth: '200px' }} />
                <p>"If you are reading this just send him a message. Way better than apple store/support for less $$. He even comes to your house!”</p><br />
                <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
              </div>
            </div>
            <div className="column">
              <div className="notification">
                <img alt="customer lilly iphone repair review" src="images/testimonials/Lilly-H.png" style={{ maxWidth: '200px' }} />
                <p>"Elbert is excellent! He is quick and responsive. And did a great job in repairing two of my iPhones. I contacted him Friday night and he came over Saturday. I highly recommend him to anyone.”</p><br />
                <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}