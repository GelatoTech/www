import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEnvelope, 
  faArrowLeft, 
  faArrowRight,
  faPrint,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import { MailInSteps } from '../../components/mail-in';
import { useRouter } from 'next/router';
import NetlifyForm from 'react-ssg-netlify-forms';

export default function Ship() {

  const router = useRouter();
  const [shipFormValues, setShipFormValues] = useState({});
  const [carrierSite, setCarrierSite] = useState('');
  
  const handleSelectCarrier = (carrier) => {
    setShipFormValues({ ...shipFormValues, carrier });
  }

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
                  <Image 
                    src='/images/usps.png'
                    width={50}
                    height={50}
                    onClick={()=> {
                      handleSelectCarrier('USPS'); 
                      setCarrierSite('https://usps.com/ship');
                    }}
                  />
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
                  <Image 
                    src='/images/ups.png'
                    height={50}
                    width={50}
                    onClick={()=> {
                      handleSelectCarrier('UPS');
                      setCarrierSite('https://www.ups.com/ship/guided/origin');
                    }}
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
                  <Image 
                    src='/images/fedex.png'
                    height={50}
                    width={50}
                    onClick={()=> {
                      handleSelectCarrier('FedEx');
                      setCarrierSite('https://www.fedex.com/lite/lite-ship.html#address');
                    }}
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
                        <Link href={carrierSite} passHref>
                          <a 
                            target="_blank"
                            className="button is-link is-outlined"
                          >
                            <FontAwesomeIcon icon={faPrint} style={{ width: '1em', marginRight: '0.3em' }} /> Get Label
                          </a>
                        </Link>
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