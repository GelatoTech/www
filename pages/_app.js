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

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';


import '../public/javascripts/jquery.min';
import '../public/javascripts/all';
import '../public/javascripts/aos';
import '../public/javascripts/font-awesome-all';
dynamic(import ('../public/javascripts/owl.carousel.min'), { ssr:false });

import ReactGA from 'react-ga';
import MessengerCustomerChat from 'react-messenger-customer-chat';


// Google Analytics
if (typeof window !== 'undefined') {
  ReactGA.initialize('UA-121085071-1'); // GA ID
  ReactGA.pageview(window.location.pathname + window.location.search);
}


import Nav from '../components/Nav';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <div ref={useRef("customer-chat")}></div>
      <Component {...pageProps} />
      {
        ()=>{
          if (typeof window !== 'undefined') {
            return(
              <div>
                <MessengerCustomerChat
                  pageId="1848657532048801"
                  appId="gelato"
                  htmlRef="customer-chat"
                />
              </div>
            )
          }
        }
      }
    </div>
  )
}




// TODO:
//    - uncomment fb customer chat
//    - add google tag manager (Google Analytics)