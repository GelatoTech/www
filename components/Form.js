import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import NetlifyForm from 'react-ssg-netlify-forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser, faEnvelope, faHome, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

import scrollToSection from '../helpers/scrollToSection';
import formatDate from '../helpers/formatDate';
import { devices, devicesWithHomeButton } from '../public/javascripts/devices';



export default function Form({ make }) {

  const router = useRouter();

  const [repairFormValues, setRepairFormValues] = useState({
    deviceMake: make || router.make || 'default',
    deviceModel: 'default',
    deviceIssue: 'default',
    deviceHomeButtonColor: 'default',
    customerName: '',
    customerAddress: '',
    customerPhone: '',
    customerEmail: '',
    repairTime: '',
    repairDate: formatDate(new Date()),
  });

  useEffect(() => {
    AOS.init(); // animations
    const { m } = router.query;
    if (m && repairFormValues.deviceMake !== m) setRepairFormValues({...repairFormValues, deviceMake: m});
  });

  // Handle repair form state
  const handleChange = (e) => {
    setRepairFormValues({ ...repairFormValues, [e.target.name]: e.target.value });
  }

  // When repair form is submitted...
  const postSubmit = () => {
    console.log(repairFormValues)
    const { customerName } = repairFormValues;
    router.push({
      pathname: '/thank-you',
      query: { n: customerName.includes(' ') ? customerName.split(' ')[0] : customerName }
    });
    scrollToSection("hero");
  }

  console.log(repairFormValues);

  return(
    <section className="section" id="repair">
      <div className=" form-container container has-text-centered">
        <i><h1 className="title" style={{ fontSize: '3em' }} data-aos="fade-up">Schedule Repair</h1></i>
        <h2 className="subtitle" data-aos="fade-up">Pick your device model and problem.</h2>
        {
          repairFormValues.deviceMake !== 'default'
          ? (
            <figure>
              <img alt="iPhone Screen Repair" src={`images/devices/${repairFormValues.deviceMake}.png`} style={{ width: '500px' }} />
            </figure>
          )
          : null
        }
        {
          (
            (repairFormValues.deviceMake) &&
            repairFormValues.deviceModel &&
            repairFormValues.issue &&
            repairFormValues.issue !== 'default' &&
            devices[repairFormValues.deviceModel][repairFormValues.issue].price
          )
          ? (<p id="total-price-text" style={{ fontSize: '1.9em' }}>Estimated {devices[repairFormValues.deviceModel][repairFormValues.issue].price} repair</p>)
          : ''
        }
        {
          (
            (repairFormValues.deviceMake) &&
            repairFormValues.deviceModel &&
            repairFormValues.issue &&
            repairFormValues.issue !== 'default' &&
            devices[repairFormValues.deviceModel][repairFormValues.issue].warranty
          )
          ? (<p id="warranty-text" style={{ fontSize: '1.5em' }}><strong>{devices[repairFormValues.deviceModel][repairFormValues.issue].warranty}</strong> warranty</p>)
          : ''
        }
        {
          (
            (repairFormValues.deviceMake) &&
            repairFormValues.deviceModel &&
            repairFormValues.issue &&
            repairFormValues.issue !== 'default' &&
            devices[repairFormValues.deviceModel][repairFormValues.issue].duration
          )
          ? (<p id="repairtime-text" style={{ fontSize: '1.2em', marginBottom: '0.5em' }}>Estimated <strong>{devices[repairFormValues.deviceModel][repairFormValues.issue].duration}</strong> repair time</p>)
          : ''
        }
        <NetlifyForm formName="repair-form" formValues={repairFormValues} postSubmit={postSubmit} id="repair-form" name="repair-form">
          <input name="form-name" type="hidden" value="repair-form" />
          <div className="field">
            <div className="field">
              <div className="select is-info is-rounded">
                <select id="select-device" value={repairFormValues.deviceMake} name="deviceMake" onChange={handleChange} required>
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
            <div>
              {
                repairFormValues.deviceMake !== 'default'
                  ? (
                    <div className="field">
                      <div className="select is-info is-rounded">
                        <select value={ repairFormValues.deviceModel } id="deviceModel" name="deviceModel" onChange={handleChange}>
                          <option value="default" disabled>
                            Select Model
                          </option>
                          {
                            repairFormValues.deviceMake == "iphone"
                              ? (
                                <>
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
                                </>
                              )
                              : ''
                          }
                          {
                            repairFormValues.deviceMake == "google"
                              ? (
                                <>
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
                                </>
                              )
                              : ''
                          }
                          {
                            repairFormValues.deviceMake == "ipad"
                              ? (
                                <>
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
                                  <option value="ipadpro124">
                                    iPad Pro 12.9-inch (4th generation) (A2229)
                                  </option>
                                </>
                              )
                              : ''
                          }
                        </select>
                      </div>
                    </div>
                  )
                  : ''
              }
            </div>
            {
              repairFormValues.deviceModel !== 'default'
              ? (
                <div className="field">
                  <div className="select is-danger is-rounded" style={{ borderRadius: '3em' }}>
                    {/* <input style={{ display: 'none' }} type="text" name="issue" id="issue" value={repairFormValues.issue} /> */}
                    <select value={ repairFormValues.deviceIssue } name="deviceIssue" onChange={handleChange} required>
                      <option value="default" disabled>
                        Select Problem
                      </option>
                      {
                        (
                          devices[repairFormValues.deviceModel] &&
                          devices[repairFormValues.deviceModel]["screen"]
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
                          devices[repairFormValues.deviceModel] &&
                          devices[repairFormValues.deviceModel]["backglass"]
                        )
                        ? (
                          <option value="backglass">Back glass replacement</option>
                        )
                        : null
                      }
                      {
                        (
                          devices[repairFormValues.deviceModel] &&
                          devices[repairFormValues.deviceModel]["battery"]
                        )
                        ? (
                          <option value="battery">
                            Battery replacement
                          </option>
                        )
                        : null
                      }
                      {
                        devices[repairFormValues.deviceModel] &&
                        devices[repairFormValues.deviceModel]["charging"]
                        ? (
                          <option value="charging">
                            Charging port replacement
                          </option>
                        )
                        : null
                      }
                      {
                        devices[repairFormValues.deviceModel] &&
                        devices[repairFormValues.deviceModel]["water"]
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
              ) : null
            }
            {
              (devicesWithHomeButton.includes(repairFormValues.deviceModel))
              ? (
                <div className="field" id="homeButton">
                  <div className="select is-rounded">
                    <select value={repairFormValues.deviceHomeButtonColor} id="homeButtonColor" name="deviceHomeButtonColor" onChange={handleChange}>
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
                  <p className="control is-expanded has-icons-left"><input value={repairFormValues.customerName} className="input" name="customerName" placeholder="Name" required type="text" onChange={handleChange} /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faUser} style={{ height: '1em', marginLeft: '0.3em' }} /></span></p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right">
                      {/* <GooglePlacesAutocomplete 
                        apiKey={process.env.GOOGLE_PLACES_API_KEY} 
                        value={repairFormValues.address} 
                        onChange={handleChange} 
                        className="input" name="address" 
                        required 
                      /><span className="icon is-small is-left"><FontAwesomeIcon icon={faHome} style={{ height: '1em', marginLeft: '0.3em' }} /></span> */}
                      <input value={repairFormValues.customerAddress} onChange={handleChange} className="input" name="customerAddress" placeholder="Address" required type="text" /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faHome} style={{ height: '1em', marginLeft: '0.3em' }} /></span>
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right"><input value={repairFormValues.customerPhone} onChange={handleChange} className="input" name="customerPhone" placeholder="Cell #" required type="tel" /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faPhone} style={{ height: '1em', marginLeft: '0.3em' }} /></span></p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right"><input value={repairFormValues.customerEmail} onChange={handleChange} className="input" name="customerEmail" placeholder="Email" required type="email" /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faEnvelope} style={{ height: '1em', marginLeft: '0.3em' }} /></span></p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h2 className="title is-5 has-text-weight-light">Time &amp; Date <FontAwesomeIcon icon={faClock} style={{ height: '1em', marginLeft: '0.3em' }} /></h2>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <input value={repairFormValues.repairDate} onChange={handleChange} className="input" name="repairDate" required type="date" />
              </div>
              <div className="field">
                <input value={repairFormValues.repairTime} onChange={handleChange} className="input" max="22:00" min="09:00" name="repairTime" type="time" />
              </div>
            </div>
          </div><br />
          <button className="btn btn-action" type="submit">Book Repair Now</button>
        </NetlifyForm>
      </div>
    </section>
  )
}
