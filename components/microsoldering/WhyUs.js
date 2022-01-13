import Image from 'next/image';

export function WhyUs() {

  return (
    <section className="section" id="why-us">
      <div className="container">
        <h1 className="title is-size-2">Why us?</h1>
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="why-container" style={{ textAlign: 'left' }}>
              <ul style={{listStyle: 'none'}}>
                <li>
                  <h2 className="title is-3">Save Your Time</h2>
                  <p className="subtitle is-5">Our technicians have 10 years of repair experience. We make sure to provide you the best quality part and service.</p>
                </li>
                <li style={{listStyle: 'none'}}><br /></li>
                <li>
                  <h2 className="title is-3">Fast &amp; Reliable Service</h2>
                  <p className="subtitle is-5">Once we receive your device, we provide a same-day repair. Most repairs take 1-2 hours from start to finish. Read our customer reviews on Yelp and Google! </p>
                </li>
                <li style={{listStyle: 'none'}}><br /></li>
                <li>
                  <h2 className="title is-3">Risk Free</h2>
                  <p className="subtitle is-5">We dedicate our time to provide you the best service. You only pay after the repair is done and fully tested. We included a 90 day warranty on any repair we provide.</p>
                </li>
                <li style={{listStyle: 'none'}}><br /></li>
              </ul>
            </div>
          </div>
          <div className="column">
            <figure className="image" style={{borderRadius: '5px', overflow: 'hidden'}}>
              <Image alt="On-Demand Repair" src="/images/microsoldering-tech.jpeg" width="100%" height="100%" layout="responsive" objectFit="cover" />
            </figure>
            {/* <div style={{ marginTop: '2em' }}>
              <h1 className="subtitle">Read our Google &amp; Yelp reviews!</h1>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );

};