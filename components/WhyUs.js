import Image from 'next/image';

export function WhyUs() {

  return(
    <>
      <section className="section" id="why-us">
        <div className="container">
          <h1 className="title is-1 has-text-centered">Why us?</h1>
          <div className="columns">
            <div className="column">
              <div className="why-container" style={{ textAlign: 'left' }}>
                <ul style={{listStyle: 'none'}}>
                  <li>
                    <h2 className="title is-3">Save Time &amp; Money</h2>
                    <p className="subtitle is-5">Don’t waste your time &amp; money going to a repair shop. Our professional technicians travel to your location and fix your device inside our car.</p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                  <li>
                    <h2 className="title is-3">Fast &amp; Reliable Service</h2>
                    <p className="subtitle is-5">Most common repairs like screen replacement, battery replacement, and charging port replacement only take 10 to 30 minutes. Our goal every day is to provide you the best service we can. Don’t take our word, read our customer experience on <a href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Yelp</a> or <a href="https://g.page/GelatotechiPhoneRepair?share" target="_blank">Google</a></p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                  <li>
                    <h2 className="title is-3">Risk Free</h2>
                    <p className="subtitle is-5">Only pay after your device is fixed and tested. 90 day warranty included on all repairs: screen replacement, battery replacement, charging port replacement, back glass replacement, logic board repair and other repairs.</p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                </ul>
              </div>
            </div>
            <div className="column">
              <figure className="image" style={{borderRadius: '5px', overflow: 'hidden'}}>
                <Image alt="On-Demand Repair" src="/images/technician-fixing.jpg" width="100%" height="100%" layout="responsive" objectFit="cover" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
