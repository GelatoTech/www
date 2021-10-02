export function HowItWorks({ deviceName }) {
  return(
    <>
      <section className="section" id="works">
        <div className="container">
          <h1 className="title is-1">How it Works</h1>
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img alt="Book your Google Pixel repair" src="images/undraw-calendar-dutt.png" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}} />
                <h2 className="title is-3center" data-aos="zoom-out" style={{textAlign: 'center'}}>Book Your {deviceName} Repair</h2>
                <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>First, schedule your appointment. After scheduling, our technician will send you a text confirmation to confirm your preferred time, location and {deviceName} repair.</p>
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <img alt="We repair your phone screen on-spot" src="images/undraw-order-a-car-3tww.png" style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}} />
                <h2 className="title is-3 center" data-aos="zoom-out" style={{textAlign: 'center'}}>We Come to Your Location</h2>
                <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>Our technicians repair your {deviceName} at your preferred location. We usually do the repair inside our car or your preferred location.</p>
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <img alt="Google Pixel screen repair on-spot" src="images/undraw-Credit-card-3ed6.png" style={{width: '40%', marginRight: 'auto', marginLeft: 'auto'}} />
                <h2 className="title is-3 center" data-aos="zoom-out" style={{textAlign: 'center'}}>Pay After the Repair</h2>
                <p className="subtitle is-5" data-aos="zoom-out" style={{margin: 'auto', textAlign: 'center'}}>Once your {deviceName} is fixed, we will test your device in-front of you before taking payment. After the test is done, for payment we accept: Cash, Bitcoin, Venmo, CashApp, Zelle, and any debit/credit card. For any credit card payment we charge a 4% processing fee.</p>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}