import Head from 'next/head';
import pexelsPhoto607812 from '/images/pexels-photo-607812.jpeg'

export default function FAQ() {
  return (
    <div>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>90 day warranty policy | Gelatotech Mobile iPhone Repair SF</title>
        {/* HTML Meta Tags */}
        <meta name="description" content="Gelatotech offers a 90 day warranty on all models of iPhone, iPad, Macbook, Apple Watch, Samsung, and Google Pixel repairs." />
        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="90 day warranty policy | Gelatotech Mobile iPhone Repair SF" />
        <meta itemProp="description" content="Gelatotech offers a 90 day warranty on all models of iPhone, iPad, Macbook, Apple Watch, Samsung, and Google Pixel repairs." />
        <meta itemProp="image" content={pexelsPhoto607812} />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.gelatotech.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="90 day warranty policy | Gelatotech Mobile iPhone Repair SF" />
        <meta property="og:description" content="Gelatotech offers a 90 day warranty on all models of iPhone, iPad, Macbook, Apple Watch, Samsung, and Google Pixel repairs." />
        <meta property="og:image" content={pexelsPhoto607812} />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="90 day warranty policy | Gelatotech Mobile iPhone Repair SF" />
        <meta name="twitter:description" content="Gelatotech offers a 90 day warranty on all models of iPhone, iPad, Macbook, Apple Watch, Samsung, and Google Pixel repairs." />
        <meta name="twitter:image" content={pexelsPhoto607812} />
        <meta name="keywords" content="iPhone Repair, iPhone Screen Repair, iPhone fix, iPhone Replacement On-demand, on, demand" />
        <meta name="google-site-verification" content="otWUpfaXKjZHurqJg8KCSsabxvEJ9380Jprvwzazg8g" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <meta property="og:image" content={pexelsPhoto607812} />
        {/* meta tag end! */}
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