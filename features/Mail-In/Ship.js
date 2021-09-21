import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEnvelope, 
  faArrowLeft, 
  faArrowRight,
  faPrint,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons'
import { MailInSteps } from '../../components/mail-in';
import { useRouter } from 'next/router';
import NetlifyForm from 'react-ssg-netlify-forms';

import uspsLogo from '../../public/images/usps.png'
import upsLogo from '../../public/images/ups.png'
import fedExLogo from '../../public/images/fedex.png'

export default function Ship() {

  const router = useRouter();
  const [shipFormValues, setShipFormValues] = useState({});

  // Handle ship form state
  const handleChange = (e) => {
    setShipFormValues({ ...shipFormValues, [e.target.name]: e.target.value });
  }
  
  const handleSelectCarrier = (carrier) => {
    setShipFormValues({ ...shipFormValues, carrier });
  }

  const goToCarrierSite = () => {
    switch(shipFormValues.carrier) {
      case 'USPS':
        return window.open('https://usps.com/ship', '_ blank');
      case 'UPS':
        return window.open('https://www.ups.com/ship/guided/origin', '_ blank');
      case 'FedEx':
        return window.open('https://www.fedex.com/lite/lite-ship.html#address', '_blank');
      default:
        return;
    }
  }

  // When ship form is submitted...
  const postSubmit = () => {
    router.push('/thank-you?mail=1');
  }

  return (
    <div style={{ marginTop: '4em' }}>
      <div style={{ overflow: 'scroll' }}>
        <MailInSteps step={2} />
      </div>
      <div 
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#DCDCDC',
        }}
        className="column"
      >
        <NetlifyForm 
          formName="ship-form" 
          formValues={shipFormValues} 
          postSubmit={postSubmit} 
          id="ship-form" 
          name="ship-form"
        >
          <input name="form-name" type="hidden" value="ship-form" />
          <div className="card column" style={{
            marginTop: '3em',
            padding: '2rem',
            borderRadius: '8px',
          }}>
              <div style={{ display: 'flex' }}>
                <FontAwesomeIcon className="is-hidden-mobile" icon={faEnvelope} style={{ width: '2em', marginRight: '0.5em' }} />
                <h1 className="title">
                  Mail Your Items
                </h1>
              </div>
              <hr />
              <h1 className="subtitle">1. Select a mail carrier</h1>
              <div style={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <label style={{
                  ...carrierBorderStyles, 
                  borderWidth: `${shipFormValues.carrier === 'USPS' ? '1px' : 0}` 
                }}>
                  <input 
                    type="radio" 
                    value="USPS" 
                    style={{display: 'none'}}
                    checked={shipFormValues.carrier === 'USPS'}
                    onChange={(e) => setShipFormValues({ ...shipFormValues, carrier: e.target.value })}
                  />
                  <img 
                    src={uspsLogo} 
                    onClick={()=>{handleSelectCarrier('USPS')}}
                    style={{ 
                      width: 'auto', 
                      maxHeight: '7em' 
                    }} />
                </label>
                <label style={{ 
                  ...carrierBorderStyles, 
                  borderWidth: `${shipFormValues.carrier === 'UPS' ? '1px' : 0}` 
                }}>
                  <input 
                    type="radio" 
                    value="UPS" 
                    style={{display: 'none'}}
                    checked={shipFormValues.carrier === 'UPS'}
                    onChange={(e) => setShipFormValues({ ...shipFormValues, carrier: e.target.value })}
                  />
                  <img 
                    src={upsLogo} 
                    style={{ 
                      width: 'auto', 
                      maxHeight: '7em',
                    }} 
                    onClick={()=>handleSelectCarrier('UPS')}
                  />
                </label>
                <label style={{
                  ...carrierBorderStyles, 
                  borderWidth: `${shipFormValues.carrier === 'FedEx' ? '1px' : 0}` 
                }}>
                  <input 
                    type="radio" 
                    value="FedEx" 
                    style={{display: 'none'}}
                    checked={shipFormValues.carrier === 'FedEx'} 
                    onChange={(e) => setShipFormValues({ ...shipFormValues, carrier: e.target.value })}
                  />
                  <img 
                    src={fedExLogo} 
                    style={{ 
                      width: 'auto', 
                      maxHeight: '7em', 
                      marginLeft: '1em' 
                    }} 
                    onClick={()=>handleSelectCarrier('FedEx')}
                  />
                </label>
              </div>
              {
                shipFormValues.carrier
                  ? (
                    <div>
                      <h1 className="subtitle" style={{ marginTop: '3em' }}>2. Mail to address</h1>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <address style={{ fontWeight: 'bold' }}>
                          Gelatotech <br />
                          1180 4th St # 415 <br />
                          San Francisco, CA 94158
                        </address>
                        <a 
                          className="button is-link is-outlined"
                          onClick={()=>goToCarrierSite()}
                        >
                          <FontAwesomeIcon icon={faPrint} style={{ width: '1em', marginRight: '0.3em' }} /> Get Label
                        </a>
                      </div>
                      <h1 className="subtitle" style={{ marginTop: '3em' }}>3. Paste {shipFormValues.carrier} tracking number</h1>
                      <div className="field">
                        <p className="control has-icons-left">
                          <input 
                            required
                            className="input is-primary" 
                            type="text" 
                            placeholder="Tracking #"
                            value={shipFormValues.trackingNumber}
                            onChange={(e) => setShipFormValues({ ...shipFormValues, trackingNumber: e.target.value })}
                          />
                          <span className="icon is-small is-left">
                            <FontAwesomeIcon icon={faPlaneDeparture} style={{ width: '1em' }} />
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control has-icons-left">
                          <input 
                            required
                            className="input is-primary" 
                            type="email" 
                            placeholder="Email"
                            value={shipFormValues.email}
                            onChange={(e) => setShipFormValues({ ...shipFormValues, email: e.target.value })}
                          />
                          <span className="icon is-small is-left">
                            <FontAwesomeIcon icon={faEnvelope} style={{ width: '1em' }} />
                          </span>
                        </p>
                      </div>
                    </div>
                  )
                : null
              }
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '2em',
          }}>
            <button 
              className="button is-danger is-rounded" 
              style={{ margin: '2em 1em 0 0' }}
              onClick={() => {
                router.push('/mail-in/diagnostic-fee');
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} style={{ width: '1em', marginRight: '0.3em' }} />
              Back
            </button>
            {
              shipFormValues.carrier
                ? (
                  <button 
                    className="button is-info is-rounded" 
                    style={{ margin: '2em 1em 0 0' }}
                    type="submit"
                  >
                    Next
                    <FontAwesomeIcon icon={faArrowRight} style={{ width: '1em', marginLeft: '0.3em' }} />
                  </button>
                )
              : null
            }
          </div>
          <input name="email" type="hidden" value={shipFormValues.email} />
          <input name="carrier" type="hidden" value={shipFormValues.carrier} />
          <input name="trackingNumber" type="hidden" value={shipFormValues.trackingNumber} />
          </NetlifyForm>
      </div>
    </div>
  )
}

const carrierBorderStyles = {
  overflow: 'hidden',
  borderColor: '#3273DC',
  borderStyle: 'solid',
  borderRadius: '8px',
}