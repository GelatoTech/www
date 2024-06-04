import Head from 'next/head';
import $ from 'jquery';
import { useEffect } from 'react';

export default function FAQ() {

  useEffect(() => {
    $('body').delegate('.c-faq', 'click', function () {
      $('.c-faq').removeClass('c-faq--active');
      $(this).addClass('c-faq--active');
    });
  });

  return (
    <div>
      <Head>
        <title>Discover the Most Common Questions About Repair Costs and Service Reservations</title>
        <meta name="description" content="Check out our FAQs page for quick answers to all your questions about repairing and booking services for iPhones, MacBooks, Google Pixels, and Samsung phones!" />
        <meta name="keywords" content="FAQ, Mobile Repair, iPhone Screen Repair, Booking Repair, Device Repair Questions, Gelatotech, San Francisco" />
        <meta itemProp="name" content="Gelatotech FAQs: Your Mobile Repair Questions Answered" />
        <meta itemProp="description" content="Looking for quick answers to your mobile repair queries? Check out Gelatotech's FAQ page for all your questions about iPhone and other device repairs." />
        <meta itemProp="image" content="images/faq-iphone-repair.png" />
        <meta property="og:url" content="https://www.gelatotech.com/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Frequently Asked Questions | Gelatotech Mobile Repair" />
        <meta property="og:description" content="Have questions about mobile device repairs? Gelatotech's FAQ page offers answers on iPhone repairs, service bookings, and much more." />
        <meta property="og:image" content="images/faq-iphone-repair.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gelatotech FAQ: Your Repair Questions Answered" />
        <meta name="twitter:description" content="Find quick answers to common mobile repair questions at Gelatotech. Learn about our services, booking process, and more." />
        <meta name="twitter:image" content="images/faq-iphone-repair.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/fonts/ABeeZee.css" rel="stylesheet" />
        <link rel="stylesheet" href="/stylesheets/reset.min.css" />
        <link rel="stylesheet prefetch" href="/stylesheets/animate.min.css" />
        <link rel="stylesheet" href="/stylesheets/faq.css" />
        <link rel="stylesheet" href="/stylesheets/w3.css" />
      </Head>
      
      <div className="section">
        <h1 className="section__headline">FAQs</h1>
        <h2 className="c-faqs__headline">Repairing my Device</h2>
        <ul className="c-faqs">
          <li className="c-faq c-faq--active">
            <span className="c-faq__title">How long does it take to repair my iPhone?</span>
            <div className="c-faq__answer">Our gelatotech technicians are ready and thoroughly trained to perform repairs in
              <b>15 minutes or less!</b></div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">Does gelatotech provide original parts?</span>
            <div className="c-faq__answer">Yes. Gelatotech does it's best to provide all customers with original parts with
              affordable pricing.</div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">Do I need to let the technician inside my home?</span>
            <div className="c-faq__answer">Fortunately, all gelatotech technicians are always equipped with the necessary tools
              to repair your device. We operate
              all repairs in our eco-friendly smart cars</div>
          </li>
        </ul> {/* /end c-faqs */}
        <h2 className="c-faqs__headline">Booking</h2>
        <ul className="c-faqs">
          <li className="c-faq">
            <span className="c-faq__title">How long does it take to set me up with a technician?</span>
            <div className="c-faq__answer">Once you book your appointment <a href="/#repair">here</a> we'll confirm your
              appointment in 1 hour or less</div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">How long does it take to book an appointment online?</span>
            <div className="c-faq__answer">Our booking system is fast and easy to complete in 2 minutes or less!
            </div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">After I set up my appointment, how can I contact gelatotech?</span>
            <div className="c-faq__answer">You could simply give us a call at <a href="tel:415-517-7897">415-517-7897</a></div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">How do I pay?</span>
            <div className="c-faq__answer">You could pay with a cash, venmo or any debit/credit card.</div>
          </li>
          <li className="c-faq c-faq">
            <span className="c-faq__title">My issue isn't listed as an option. Can you fix it?</span>
            <div className="c-faq__answer">Yes! We repair parts such as the charging port, headphone jack, batteries, and more.
              Simply press other in our booking system and describe your issue.</div>
          </li>
        </ul> {/* /end c-faqs */}
        <h2 className="c-faqs__headline">Other questions</h2>
        <ul className="c-faqs">
          <li className="c-faq">
            <span className="c-faq__title">Is there additional fees?</span>
            <div className="c-faq__answer">No additional or hidden fees are included with any gelatotech repair. And yes we come
              to you at no additional cost, isn't that sweet!
            </div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">Can I become a gelatotech technician?</span>
            <div className="c-faq__answer">We are always looking to add qualified technicians to gelatotech. We are opening
              applications Spring 2018.</div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">Can you repair other than apple devices?</span>
            <div className="c-faq__answer">Currently we only support apple devices. Samsung devices will be supported Spring
              2018</div>
          </li>
        </ul> {/* /end c-faqs */}
      </div>
    </div>
  );
}