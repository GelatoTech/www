import Image from 'next/image';

export function HowItWorks({ deviceName }) {
  return(
    <>
      <section className="section" id="works">
        <div className="container">
          <h2 className="title is-3">How we operate</h2>
          <div className="columns">
            <div className="column">
              <figure className="image">
                <div style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}}>
                  <Image alt="Book your Google Pixel repair" src="/images/undraw-calendar-dutt.png" width="100%" height="50%" layout="responsive" objectFit="contain" />
                </div>
                <h2 className="title is-3center" data-aos="zoom-out" style={{textAlign: 'center'}}>Book Your {deviceName} Repair</h2>
                <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>To begin, schedule your appointment. Our team of skilled technicians will contact you via text message to confirm the specifics of your desired repair location, time, and {deviceName} model.</p>
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <div style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}}>
                  <Image alt="We repair your phone screen on-spot" src="/images/undraw-order-a-car-3tww.png" width="100%" height="50%" layout="responsive" objectFit="contain" />
                </div>
                <h2 className="title is-3 center" data-aos="zoom-out" style={{textAlign: 'center'}}>We Come to You!</h2>
                <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>Our skilled professionals will arrive at your preferred location with a fully equipped vehicle to provide you with excellent {deviceName} repair services promptly. You can be confident that we will take care of everything for you.</p>
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <div style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}}>
                  <Image alt="Google Pixel screen repair on-spot" src="/images/undraw-Credit-card-3ed6.png" width="100%" height="50%" layout="responsive" objectFit="contain" />
                </div>
                <h2 className="title is-3 center" data-aos="zoom-out" style={{textAlign: 'center'}}>Pay After the Repair</h2>
                <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>We completely understand the significance of owning an {deviceName} that functions flawlessly. That's precisely why we offer the option to pay after the repair, allowing you to test your device before making any payments. We accept multiple payment methods, including cash, Bitcoin, Venmo, CashApp, and Zelle. However, remember that if you prefer to pay with a debit or credit card, there is a 4% processing fee.</p>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}