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

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}