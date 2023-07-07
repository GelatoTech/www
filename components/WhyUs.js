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
                    <p className="subtitle is-5">Skip the inconvenience of visiting a repair shop and save time and money. Our expert technicians will arrive at your location and carry out all essential repairs in the luxury of our mobile service vehicle.</p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                  <li>
                    <h2 className="title is-3">Fast &amp; Reliable Service</h2>
                    <p className="subtitle is-5">We provide fast and dependable services for common repairs such as screen replacement, battery replacement, and charging port replacement. These repairs are usually completed within 10 to 30 minutes. Our top priority is to provide excellent service to our customers every day. You can verify our reputation by checking our customer reviews on <a href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?uid=LGLdTFOmQQoTMF7LOnMKmg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Yelp</a> or <a href="https://g.page/GelatotechiPhoneRepair?share" target="_blank">Google</a></p>
                  </li>
                  <li style={{listStyle: 'none'}}><br /></li>
                  <li>
                    <h2 className="title is-3">Risk-Free</h2>
                    <p className="subtitle is-5">Rest easy knowing that there is no risk involved with our services. You will only be charged once your device has been fixed and thoroughly tested. Plus, we offer a 90-day warranty on all repairs, including screen replacement, battery replacement, charging port replacement, back glass replacement, logic board repair, and other fixes.</p>
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
