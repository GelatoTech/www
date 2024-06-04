import Head from 'next/head';

export default function FAQ() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Terms and Conditions-  Support, and Repair Services</title>
        <meta name="description" content="Explore our legal policies page to familiarize yourself with our terms of service, privacy policy, and disclaimer and understand the governing conditions." />
        <meta itemProp="name" content="Legal & 90-Day Warranty Policy | Gelatotech - San Francisco's Mobile Repair" />
        <meta itemProp="description" content="Gelatotech offers a 90-day warranty, ensuring quality and satisfaction for all your mobile repair needs. Learn more about our commitment to excellence on our legal page." />
        <meta itemProp="image" content="/images/legal-warranty.jpeg" />
        <meta property="og:url" content="https://www.gelatotech.com/legal" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Legal & Warranty Info | Gelatotech - Your Trusted Repair Partner in SF" />
        <meta property="og:description" content="Discover Gelatotech's commitment to quality with our 90-day warranty on mobile device repairs. Visit our legal page for detailed policy information." />
        <meta property="og:image" content="/images/legal-og.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gelatotech's Legal & Warranty Policy | Ensuring Customer Satisfaction in SF" />
        <meta name="twitter:description" content="Gelatotech stands by our work with a 90-day warranty for all repairs. Visit our legal page for comprehensive policy details." />
        <meta name="twitter:image" content="/images/legal-twitter.jpeg" />
        <meta name="keywords" content="Legal, Warranty Policy, Mobile Repair Service, iPhone Repair, iPad Repair, MacBook Repair, San Francisco, Customer Satisfaction, Quality Guarantee" />
        <meta name="google-site-verification" content="otWUpfaXKjZHurqJg8KCSsabxvEJ9380Jprvwzazg8g" />
        <link rel="stylesheet" href="/stylesheets/legal.css" />
      </Head>
      <div className="content terms">
        <h1 className="title is-2" style={{textAlign: 'center'}}>Terms and Conditions</h1>
        <div className="first">
          <p>
            Gelatotech is on a mission to connect consumers with the best possible digital device install, support, and repair
            services, provided by our network of skilled Technicians using the top-quality replacement parts. We offer a
            90 day warranty on all parts and labor used for services booked through gelatotech, unless it conflicts with
            the below items.
            Please email us at <a href="mailto:support@gelatotech.com">support@gelatotech.com</a> with any questions.</p>
            
          <p>
            We at Gelatotech appreciate your business and value your trust in us. However, we want to make it clear that we cannot be held responsible for any loss or damage to your device if you leave it with us for more than 30 days.
            As a customer, it is your responsibility to retrieve your device within 30 days of leaving it with us. If you fail to do so, we will not be held responsible for any loss or damage that may occur to your device after that time.
            We understand that sometimes unforeseen circumstances can arise that prevent you from retrieving your device within the 30-day timeframe. In such cases, we encourage you to contact us as soon as possible to make arrangements for the safekeeping of your device.
            We take every precaution to ensure the safety and security of all devices left in our care, but we cannot guarantee their safety or condition after the 30-day period. Thank you for your understanding and cooperation.
          </p>
        </div>
        <h2>WHAT IS NOT INCLUDED IN THE GUARANTEE:</h2>
        <ul>
          <li>Any subsequent damage of any kind caused to the device after the repair</li>
          <li>Any mishandling that causes the frame to bend, twist, or crack</li>
          <li>Damage resulting from misuse of any kind</li>
          <li>Any kind of liquid damage</li>
          <li>Any software related issues</li>
          <li>Faults not relating to the original repair done (e.g. if a gelatotech Technician replaced the charging port
            the guarantee would not cover a faulty power button, or if a gelatotech Technician replaced a screen the
            guarantee will not cover the speakers)
          </li>
          <li>Loss of data (please backup your device before getting repaired)</li>
          <li>If a another repair is done on the device after our repair by someone other than a gelatotech Technician. This
            voids our guarantee
          </li>
          <li>Any pre-condition issues from original repair</li>
          <li>Cracked screens</li>
          <li>Any known manufacturing and/or performance issues related to the device separate from the repair, as
            noted prior to the repair.
          </li>
          <li>Jailbroken devices</li>
          <li>A non-working, damaged or severed home button/bio-metric scanner</li>
          <li>A non-working, damaged or severed face-id</li>
          <li>Notification of an related issue to repair must be done within 3 days of original service</li>
          <li>Changes to water resistance as it may be affected in repaired devices in rare cases</li>
        </ul>
        <div className="ourwarranty">
          <h2>Using our Warranty</h2>
          <li>90 day warranty only covers functionality problems like bad touch screen. </li>
          <li>If you wish to perform a warranty repair. Customer has to meet at a 3 mile radius from a drop off location. </li>
          <li>All warranty repairs include a $10 transportation fee or more if outside the Bay Area. Only when customer can’t meet at drop off location.</li>
          <br />
          <h5>THE GUARANTEE IS VALID EXCLUSIVELY TO THE CUSTOMER WHO PURCHASED THE REPAIR AND WHOSE NAME IS ON THE
            GUARANTEE/INVOICE. THE GUARANTEE WILL NOT BE TRANSFERABLE IF THE DEVICES OWNERSHIP IS DISTRIBUTED TO ANOTHER
            INDIVIDUAL OR BUSINESS.</h5>
        </div>
      </div>
    </div>
  );
}