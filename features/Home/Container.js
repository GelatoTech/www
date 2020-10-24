import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
import { useState, useEffect } from 'react';
import { scroller } from "react-scroll";
import NetlifyForm from 'react-ssg-netlify-forms';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faCheck, faUsers, faEnvelope, faHome, faUser, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { faYelp } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';

import BookRepairButton from '../../components/BookRepairButton';
import TrustedBy from '../../components/TrustedBy';
import scrollToSection from '../../helpers/scrollToSection';

import { devices, devicesWithHomeButton } from '../../public/javascripts/devices';

export default function Home() {

  const router = useRouter();

  const [repairFormValues, setRepairFormValues] = useState({
    selectDevices: router.query.make ? router.query.make : '' ,
    chooseDeviceModel: router.query.model ? router.query.model : '' ,
    issue: '',
    color: '',
    name: '',
  });

  // Handle repair form state
  const handleChange = (e) => {
    if(e.target.name == "selectDevices") {
      setRepairFormValues(null);
    }
    setRepairFormValues({ ...repairFormValues, [e.target.name]: e.target.value });
  }

  // When repair form is submitted...
  const postSubmit = () => {
    const { name } = repairFormValues;
    router.push({
      pathname: '/thank-you',
      query: { n: name.includes(' ') ? name.split(' ')[0] : name }
    });
    scrollToSection("hero");
  }


  useEffect(() => {
    AOS.init();
    if (router.query.model && !repairFormValues.selectDevices) {
      setRepairFormValues({
        selectDevices: router.query.make,
        chooseDeviceModel: router.query.model
      });
    }
  });


  return(
    <div>
      <Head>
        <title>Mobile iPhone Repair in San Francisco | Gelatotech</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
        <meta content="San Francisco Mobile iPad Repair and iPhone Repair. We repair your device at your preferred time & location. Most iPhone Screen Repair Only takes 15 minutes." name="description" />
        <meta content="index" name="robots" />
        <meta content="Mobile iPhone Repair in San Francisco | Gelatotech" itemProp="name" />
        <meta content="San Francisco Mobile iPad Repair and iPhone Repair. We repair your device at your preferred time & location. Most iPhone Screen Repair Only takes 15 minutes." itemProp="description" />
        <meta content="images/iphone-repair.png" itemProp="image" />
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
      <section className="hero" id="hero" style={{
        backgroundImage: "url(../images/whats-icracked.jpg)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100%',
        padding: '3rem 0'
      }}>
        <div id="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">Mobile iPhone Repair<br />at Your Location</h1>
            <p className="subtitle is-3" style={{ color: 'white' }}>San Francisco, CA</p><br />
            <BookRepairButton />
          </div>
          <div className="container" id="reviews">
            {/* <div className="columns owl-carousel owl-theme" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '80px' }}> */}
            <OwlCarousel 
              margin={8} 
              autoplay={true} 
              loop 
              dots={false} 
              style={{ marginTop: '80px' }} 
              autoplayTimeout={8000}
              responsive={{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }}
            >  
            <div className="column">
                <div className="notification">
                  <img alt="customer lilly iphone repair review" src="images/testimonials/Lilly-H.png" style={{ maxWidth: '200px' }} />
                  <p>"Elbert is excellent! He is quick and responsive. And did a great job in repairing two of my iPhones. I contacted him Friday night and he came over Saturday. I highly recommend him to anyone.”</p><br />
                  <a className="button is-dangers is-rounded" href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Read on Yelp <FontAwesomeIcon icon={faYelp} style={{ height: '60%', marginLeft: '0.3em' }} /></a>
                </div>
              </div>
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
            </OwlCarousel>
            {/* </div> */}
          </div>
        </div>
      </section>
      <TrustedBy />
      <section className="section" id="works">
        <div className="container">
          <h1 className="title is-1">How it Works</h1>
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img alt="Book your iphone repair" src="images/undraw-calendar-dutt.png" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}} />
                <h2 className="title is-3center" data-aos="zoom-out" style={{textAlign: 'center'}}>Book Your Repair</h2>
                <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>Once you schedule your appointment, we will confirm your preferred time and location for us to repair your device.</p>
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <img alt="We repair your phone screen on-spot" src="images/undraw-order-a-car-3tww.png" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}} />
                <h2 className="title is-3 center" data-aos="zoom-out" style={{textAlign: 'center'}}>We Come To You</h2>
                <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>We Repair your iPhone On-Spot, usually inside our car or your preferred location.</p>
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <img alt="iPhone screen repair on-spot" src="images/undraw-Credit-card-3ed6.png" style={{width: '40%', marginRight: 'auto', marginLeft: 'auto'}} />
                <h2 className="title is-3 center" data-aos="zoom-out" style={{textAlign: 'center'}}>Pay After The Repair</h2>
                <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>Once the repair is done , we make sure to test everything before leaving. After the test you can pay with cash, Venmo, or any credit card.</p>
              </figure>
            </div>
          </div>
        </div>
      </section>{/* why us */}
      <section className="section" id="why-us">
        <div className="container">
          <h1 className="title is-1 has-text-centered">Why us?</h1>
          <div className="columns">
            <div className="column">
              <div className="why-container" style={{ textAlign: 'left' }}>
                <ul style={{listStyle: 'none'}}>
                  <li>
                    <h2 className="title is-3">Save Your Time</h2>
                    <p className="subtitle is-5">Our technician comes to you preferred location. We ensure you quality parts. </p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                  <li>
                    <h2 className="title is-3">Fast &amp; Reliable Service</h2>
                    <p className="subtitle is-5">iPhone Screen Repairs take 15 minutes or less. Read our Customer Reviews on <a href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Yelp</a> or <a href="https://g.page/GelatotechiPhoneRepair?share" target="_blank">Google</a></p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                  <li>
                    <h2 className="title is-3">Risk Free</h2>
                    <p className="subtitle is-5">You only pay after the repair is done and fully tested. Lifetime warranty is included on Any iPhone Screen Repair.</p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                </ul>
              </div>
            </div>
            <div className="column">
              <figure className="image">
                <img alt="On-Demand iPhone Screen Repair" src="images/technician-fixing.jpg" style={{borderRadius: '5px', height: '30%'}} />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="repair">
        <div className=" form-container container has-text-centered">
          <i><h1 className="title" style={{ fontSize: '3em' }} data-aos="fade-up">Schedule Repair</h1></i>
          <h2 className="subtitle" data-aos="fade-up">Pick your device model and problem.</h2>
          <figure>
            <img alt="iPhone Screen Repair" src="images/iphonex.png" style={{maxWidth: '80px'}} />
          </figure>
          {
            (
              repairFormValues.selectDevices &&
              repairFormValues.chooseDeviceModel &&
              repairFormValues.issue &&
              devices[repairFormValues.chooseDeviceModel][repairFormValues.issue].price
            )
            ? (<p id="total-price-text" style={{ fontSize: '1.9em' }}>Estimated {devices[repairFormValues.chooseDeviceModel][repairFormValues.issue].price} repair</p>)
            : ''
          }
          {
            (
              repairFormValues.selectDevices &&
              repairFormValues.chooseDeviceModel &&
              repairFormValues.issue &&
              devices[repairFormValues.chooseDeviceModel][repairFormValues.issue].warranty
            )
            ? (<p id="warranty-text" style={{ fontSize: '1.5em' }}><strong>{devices[repairFormValues.chooseDeviceModel][repairFormValues.issue].warranty}</strong> warranty</p>)
            : ''
          }
          {
            (
              repairFormValues.selectDevices &&
              repairFormValues.chooseDeviceModel &&
              repairFormValues.issue &&
              devices[repairFormValues.chooseDeviceModel][repairFormValues.issue].duration
            )
            ? (<p id="repairtime-text" style={{ fontSize: '1.2em', marginBottom: '0.5em' }}>Estimated <strong>{devices[repairFormValues.chooseDeviceModel][repairFormValues.issue].duration}</strong> repair time</p>)
            : ''
          }
          <NetlifyForm formName="repair-form" formValues={repairFormValues} postSubmit={postSubmit} id="repair-form" name="repair-form">
            {/* <input name="form-name" type="hidden" defaultValue="repair-form" /> */}
            <div className="field">
              <div className="field">
                <div className="select is-info is-rounded">
                  <select id="select-device" defaultValue={ router.query.make ? router.query.make : 'default' } name="selectDevices" onChange={handleChange} required>
                    <option value="default" disabled>
                      Select Device
                    </option>
                    <option value="iphone">
                      iPhone
                    </option>
                    <option value="ipad">
                      iPad
                    </option>
                    <option value="google">
                      Google
                    </option>
                  </select>
                </div>
              </div>
              {
                ((repairFormValues.selectDevices == "iphone") || 
                  (router.query.make == "iphone")) && !(
                    (repairFormValues.selectDevices == "google") ||
                    (repairFormValues.selectDevices == "ipad")
                  )
                 ? (
                  <div className="field">
                    <div className="select is-info is-rounded">
                      <select defaultValue={ router.query.model ? router.query.model : 'default' } id="select-device-model" name="chooseDeviceModel" onChange={handleChange}>
                        <option value="default" disabled>
                          Select Model
                        </option>
                        <option value="11proMax">
                          iPhone 11 Pro Max
                        </option>
                        <option value="11pro">
                          iPhone 11 Pro
                        </option>
                        <option value={11}>
                          iPhone 11
                        </option>
                        <option value="xsmax">
                          iPhone Xs Max
                        </option>
                        <option value="xs">
                          iPhone Xs
                        </option>
                        <option value="xr">
                          iPhone XR
                        </option>
                        <option value="x">
                          iPhone X
                        </option>
                        <option value="8plus">
                          iPhone 8 Plus
                        </option>
                        <option value={8}>
                          iPhone 8
                        </option>
                        <option value="7plus">
                          iPhone 7 Plus
                        </option>
                        <option value={7}>
                          iPhone 7
                        </option>
                        <option value="6splus">
                          iPhone 6s Plus
                        </option>
                        <option value="6s">
                          iPhone 6s
                        </option>
                        <option value="6plus">
                          iPhone 6 Plus
                        </option>
                        <option value={6}>
                          iPhone 6
                        </option>
                      </select>
                    </div>
                  </div>
                 )
                 : ''
              }
              {
                ((repairFormValues.selectDevices == "google") || 
                (router.query.make == "google")) && !(
                  (repairFormValues.selectDevices == "iphone") ||
                  (repairFormValues.selectDevices == "ipad")
                )
                 ? (
                    <div className="field" id="pixels">
                      <div className="select is-info is-rounded">
                        <select defaultValue={ router.query.model ? router.query.model : 'default' } id="select-pixel-model" name="chooseDeviceModel" onChange={handleChange}>
                          <option value="default" disabled>
                            Select Model
                          </option>
                          <option value="googlePixel">
                            Google Pixel
                          </option>
                          <option value="googlePixelXL">
                            Google Pixel XL
                          </option>
                          <option value="googlePixel2">
                            Google Pixel 2
                          </option>
                          <option value="googlePixel2XL">
                            Google Pixel 2 XL
                          </option>
                          <option value="googlePixel3">
                            Google Pixel 3
                          </option>
                          <option value="googlePixel3XL">
                            Google Pixel 3 XL
                          </option>
                          <option value="googlePixel3A">
                            Google Pixel 3A
                          </option>
                          <option value="googlePixel4">
                            Google Pixel 4
                          </option>
                          <option value="googlePixel4XL">
                            Google Pixel 4 XL
                          </option>
                        </select>
                      </div>
                    </div>
                 )
                 : ''
              }
              {
                ((repairFormValues.selectDevices == "ipad") || 
                (router.query.make == "ipad")) && !(
                  (repairFormValues.selectDevices == "iphone") ||
                  (repairFormValues.selectDevices == "google")
                )
                 ? (
                    <div className="field">
                      <div className="select is-info is-rounded">
                        <select defaultValue={ router.query.model ? router.query.model : 'default' } id="select-ipad-model" name="chooseDeviceModel" onChange={handleChange}>
                          <option value="default" disabled>
                            Select Model
                          </option>
                          <option value="ipadmini">
                            iPadmini (A1432, A1454 ,A1455)
                          </option>
                          <option value="ipadmini2">
                            iPad mini 2 (A1489, A1490, A1491)
                          </option>
                          <option value="ipadmini3">
                            iPad mini 3 (A1599, A1600)
                          </option>
                          <option value="ipadmini4">
                            iPad mini 4 (A1538, A1550)
                          </option>
                          <option value="ipadmini5">
                            iPad mini 5 (A2133, A2124, A2126, A2125)
                          </option>
                          <option value="ipad2">
                            iPad 2 (A1395, A1396)
                          </option>
                          <option value="ipad3">
                            iPad 3 (A1416, A1430, A1403)
                          </option>
                          <option value="ipad4">
                            iPad 4 (A1458, A1459, A1460)
                          </option>
                          <option value="ipad5">
                            iPad 5 (A1822, A1823)
                          </option>
                          <option value="ipad6">
                            iPad 6 (A1893, A1954)
                          </option>
                          <option value="ipad7">
                            iPad 7 (A2197, A2198, A2200)
                          </option>
                          <option value="ipadair">
                            iPad Air (A1474, A1475)
                          </option>
                          <option value="ipadair2">
                            iPad Air 2 (A1566, A1567)
                          </option>
                          <option value="ipadair3">
                            iPad Air 3 (A2152, A2123, A2153)
                          </option>
                          <option value="ipadpro9">
                            iPad Pro 9.7 inch (A1673, A1674)
                          </option>
                          <option value="ipadpro10">
                            iPad Pro (10.5-inch)(A1701, A1709)
                          </option>
                          <option value="ipadpro3">
                            iPad Pro 11-inch (A1980, A2013, A1934)
                          </option>
                          <option value="ipadpro121">
                            iPad Pro 12.9-inch (A1584, A1652)
                          </option>
                          <option value="ipadpro122">
                            iPad Pro 12.9-inch (2nd generation)(A1670, A1671)
                          </option>
                          <option value="ipadpro123">
                            iPad Pro 12.9-inch (3rd generation) (A1876, A2014, A1895)
                          </option>
                        </select>
                      </div>
                    </div>
                 )
                 : ''
              }
              <div className="field">
                <div className="select is-danger is-rounded">
                  <select defaultValue={ router.query.issue ? router.query.issue : 'default' } id="issue" name="issue" onChange={handleChange} required>
                    <option value="default" disabled>
                      Select Problem
                    </option>
                    {
                      (
                        devices[repairFormValues.chooseDeviceModel] &&
                        devices[repairFormValues.chooseDeviceModel]["screen"]
                      )
                      ? (
                        <option value="screen">
                          Screen replacement
                        </option>
                      )
                      : null
                    }
                    {
                      (
                        devices[repairFormValues.chooseDeviceModel] &&
                        devices[repairFormValues.chooseDeviceModel]["backglass"]
                      )
                      ? (
                        <option value="backglass">Back glass replacement</option>
                      )
                      : null
                    }
                    {
                      (
                        devices[repairFormValues.chooseDeviceModel] &&
                        devices[repairFormValues.chooseDeviceModel]["battery"]
                      )
                      ? (
                        <option value="battery">
                          Battery replacement
                        </option>
                      )
                      : null
                    }
                    {
                      devices[repairFormValues.chooseDeviceModel] &&
                      devices[repairFormValues.chooseDeviceModel]["charging"]
                      ? (
                        <option value="charging">
                          Charging port replacement
                        </option>
                      )
                      : null
                    }
                    {
                      devices[repairFormValues.chooseDeviceModel] &&
                      devices[repairFormValues.chooseDeviceModel]["water"]
                      ? (
                        <option value="water">
                          Water Damage
                        </option>
                      )
                      : null
                    }
                  </select>
                </div>
              </div>
              {
                (devicesWithHomeButton.includes(repairFormValues.chooseDeviceModel) ||
                (repairFormValues.selectDevices == "ipad") || 
                (router.query.make == "ipad"))
                ? (
                  <div className="field" id="homeButton">
                    <div className="select is-rounded">
                      <select defaultValue={'default'} id="select-color" name="color" onChange={handleChange}>
                        <option value="default" disabled>
                          Home Button Color
                        </option>
                        <option value="black">
                          Black
                        </option>
                        <option value="white">
                          White
                        </option>
                      </select>
                    </div>
                  </div>
                )
                : null
              }
            </div>
            <hr />
            <h2 className="title is-5 has-text-weight-light">Contact info <FontAwesomeIcon icon={faUsers} style={{ height: '1em', marginLeft: '0.3em' }} /></h2>
            <div className="field">
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left"><input value={repairFormValues.name} className="input" name="name" placeholder="Name" required type="text" onChange={handleChange} /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faUser} style={{ height: '1em', marginLeft: '0.3em' }} /></span></p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <div>
                        {/* <GooglePlacesAutocomplete 
                          apiKey={process.env.GOOGLE_PLACES_API_KEY} 
                          value={repairFormValues.address} 
                          onChange={handleChange} 
                          className="input" name="address" 
                          required 
                        /><span className="icon is-small is-left"><FontAwesomeIcon icon={faHome} style={{ height: '1em', marginLeft: '0.3em' }} /></span> */}
                        <input value={repairFormValues.address} onChange={handleChange} className="input" name="address" placeholder="Address" required type="text" /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faHome} style={{ height: '1em', marginLeft: '0.3em' }} /></span>
                      </div>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded has-icons-left has-icons-right"><input value={repairFormValues.cell} onChange={handleChange} className="input" name="cell" placeholder="Cell #" required type="tel" /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faPhone} style={{ height: '1em', marginLeft: '0.3em' }} /></span></p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded has-icons-left has-icons-right"><input value={repairFormValues.email} onChange={handleChange} className="input" name="email" placeholder="Email" required type="email" /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faEnvelope} style={{ height: '1em', marginLeft: '0.3em' }} /></span></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <h2 className="title is-5 has-text-weight-light">Time &amp; Date <FontAwesomeIcon icon={faClock} style={{ height: '1em', marginLeft: '0.3em' }} /></h2>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <input value={repairFormValues.time} onChange={handleChange} className="input" max="22:00" min="09:00" name="time" type="time" defaultValue="time" />
                </div>
                <div className="field">
                  <input value={repairFormValues.date} onChange={handleChange} className="input" name="date" required type="date" defaultValue="date" />
                </div>
              </div>
            </div><br />
            <button className="btn btn-action" type="submit">Book Repair Now</button>
          </NetlifyForm>
        </div>
      </section>{/* service include */}
      <section className="section" id="services">
        <div className="container has-text-centered">
          <h1 className="subtitle is-2">Service Includes</h1>
          <div className="columns">
            <div className="column">
              <h2>Same-Day iPhone Repair <FontAwesomeIcon icon={faCheck} style={{ height: '1em', marginLeft: '0.5rem', color: '#1ED760' }} /></h2>
            </div>
            <div className="column">
              <h2>Device Diagnostic <FontAwesomeIcon icon={faCheck} style={{ height: '1em', marginLeft: '0.5rem', color: '#1ED760' }} /></h2>
            </div>
            <div className="column">
              <h2>Lifetime Warranty <FontAwesomeIcon icon={faCheck} style={{ height: '1em', marginLeft: '0.5rem', color: '#1ED760' }} /></h2>
            </div>
            <div className="column">
              <h2>Quality Parts <FontAwesomeIcon icon={faCheck} style={{ height: '1em', marginLeft: '0.5rem', color: '#1ED760' }} /></h2>
            </div>
          </div>
        </div>
      </section>
      <div className="section" id="get-started">
        <div className="container">
          <h3 className="title is-1" data-aos="fade-right" style={{color: 'white'}}>Ready to get started?</h3>
          <h3 className="subtitle is-4" data-aos="fade-right" style={{color: 'white'}}>iPhone Screen Repair only takes 15 minutes!</h3><br />
          <a className="button is-info is-large" onClick={()=>scrollToSection("repair")}>Book iPhone Repair <FontAwesomeIcon icon={faMobile} style={{ height: '1em', marginLeft: '0.3em' }} /></a>
        </div>
      </div>
    </div>
  )
}