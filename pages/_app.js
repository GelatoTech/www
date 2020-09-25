import { useEffect, useRef } from 'react';
import ReactGA from 'react-ga';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import '../public/stylesheets/about.css';
import '../public/stylesheets/aos.css';
import '../public/stylesheets/battery.css';
import '../public/stylesheets/booking.css';
import '../public/stylesheets/bulma.min.css';
import '../public/stylesheets/faq.css';
import '../public/stylesheets/font-awesome.min.css';
import '../public/stylesheets/legal.css';
import '../public/stylesheets/main.css';
import '../public/stylesheets/mainhero.css';
import '../public/stylesheets/nav.css';
import '../public/stylesheets/owl.carousel.min.css';
import '../public/stylesheets/phone-repair.css';
import '../public/stylesheets/screenrepairblog.css';
import '../public/stylesheets/social.css';

import Nav from '../components/Nav';



// TODO:
//    - uncomment fb customer chat
//    - add google tag manager (Google Analytics)
//    - find npm modules for:
//         - jquery
//         - all.js
//         - aos.js?
//         - font awesome
//         - owl carousel


// import '../public/javascripts/jquery.min';
// import '../public/javascripts/all';
// import '../public/javascripts/aos';
// import '../public/javascripts/font-awesome-all';
// import '../public/javascripts/owl.carousel.min';


export default function App({ Component, pageProps }) {

  useEffect(() => {
    // Google Analytics
    ReactGA.initialize('UA-121085071-1'); // GA ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div>
      <Nav />
      <div ref={useRef("customer-chat")}></div>
      <Component {...pageProps} />
      <MessengerCustomerChat
        pageId="1848657532048801"
        appId="gelato"
        htmlRef="customer-chat"
      />
    </div>
  )
}