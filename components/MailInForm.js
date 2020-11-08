import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import NetlifyForm from 'react-ssg-netlify-forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faUser, 
  faEnvelope, 
  faHome, 
  faPhone, 
  faInfoCircle, 
  faMobile, 
  faFingerprint, 
  faLock, 
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

import scrollToSection from '../helpers/scrollToSection';
import MailInTerms from '../components/MailInTerms';


export default function MailInForm() {

  const router = useRouter();

  const [repairFormValues, setRepairFormValues] = useState({});
  
  
  // Handle repair form state
  const handleChange = (e) => {
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
    AOS.init(); // animations
  });


  return(
    <section className="section" id="repair">
      <div className=" form-container container has-text-centered">
        <i><h1 className="title" style={{ fontSize: '3em' }} data-aos="fade-up">Mail-In Repair</h1></i>
        {/* <h2 className="subtitle" data-aos="fade-up">Pick your device model and problem.</h2> */}
        <NetlifyForm formName="mail-in-form" formValues={repairFormValues} postSubmit={postSubmit} id="mail-in-form" name="mail-in-form">
          {/* <input name="form-name" type="hidden" defaultValue="repair-form" /> */}
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
                      <input value={repairFormValues.address} onChange={handleChange} className="input" name="address" placeholder="Address" required type="address" /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faHome} style={{ height: '1em', marginLeft: '0.3em' }} /></span>
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
          <h2 className="title is-5 has-text-weight-light">Device Details <FontAwesomeIcon icon={faInfoCircle} style={{ height: '1em', marginLeft: '0.3em' }} /></h2>
          <div className="field">
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left"><input value={repairFormValues.model} className="input" name="model" placeholder="Device Model (ex: iPhone 11 Pro)" required type="text" onChange={handleChange} /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faMobile} style={{ height: '1em', marginLeft: '0.3em' }} /></span></p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left"><input value={repairFormValues.imeiOrSerial} className="input" name="imeiOrSerial" placeholder="IMEI/Serial # (optional)" type="text" onChange={handleChange} /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faFingerprint} style={{ height: '1em', marginLeft: '0.3em' }} /></span></p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left"><input value={repairFormValues.devicePassword} className="input" name="devicePassword" placeholder="Device Passcode (or remove)" type="text" onChange={handleChange} /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faLock} style={{ height: '1em', marginLeft: '0.3em' }} /></span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded"><textarea value={repairFormValues.issue} className="textarea" name="issue" placeholder="Describe the device issue(s)" required type="text" onChange={handleChange} /></p>
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <label for="photoOrVideo">or Upload Photo/Video of Issue</label><br />
                    <input id="photoOrVideo" name="photoOrVideo" type="file" />
                  </div>
                </div>
            </div>
          </div>
          <hr />
          <h2 className="title is-5 has-text-weight-light">Terms &amp; Conditions <FontAwesomeIcon icon={faCheckCircle} style={{ height: '1em', marginLeft: '0.3em' }} /></h2>
          <div className="field">
            <MailInTerms />
            <label>
            <input type="checkbox" name="acceptTerms" style={{ marginTop: '2rem' }} /> I Accept Terms and Conditions
            </label>
          </div>
          <br />
          <button className="btn btn-action" type="submit">Get Free Quote</button>
        </NetlifyForm>
      </div>
    </section>
  )


}