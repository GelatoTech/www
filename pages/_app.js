import { useEffect, useRef } from 'react';
import ReactGA from 'react-ga';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import '../public/stylesheets/bulma.min.css';
import '../public/stylesheets/main.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import '../public/stylesheets/battery.css';
// import '../public/stylesheets/booking.css';
// import '../public/stylesheets/faq.css';
// import '../public/stylesheets/legal.css';
// import '../public/stylesheets/mainhero.css';
// import '../public/stylesheets/nav.css';
// import '../public/stylesheets/phone-repair.css';
// import '../public/stylesheets/screenrepairblog.css';
// import '../public/stylesheets/social.css';

import Nav from '../components/Nav';



// TODO:
//    - uncomment fb customer chat
//    - add google tag manager (Google Analytics)


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