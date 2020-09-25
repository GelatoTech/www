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

import dynamic from 'next/dynamic';

import '../public/javascripts/jquery.min';
import '../public/javascripts/all';
import '../public/javascripts/aos';
import '../public/javascripts/font-awesome-all';
// dynamic(import ('../public/javascripts/fbevents'), { ssr:false });
dynamic(import ('../public/javascripts/googletagmanager'), { ssr:false });
// dynamic(import ('../public/javascripts/xfbml.customerchat'), { ssr:false });
dynamic(import ('../public/javascripts/owl.carousel.min'), { ssr:false });

// import MessengerCustomerChat from 'react-messenger-customer-chat';


import Nav from '../components/Nav';

// import { useRef } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      {/* <div ref={useRef("customer-chat")}></div>
      <Component {...pageProps} />
      <MessengerCustomerChat
        pageId="1848657532048801"
        appId="gelato"
        htmlRef="customer-chat"
      /> */}
    </div>
  )
}




// TODO:
//    - uncomment fb customer chat
//    - add google tag manager (Google Analytics)