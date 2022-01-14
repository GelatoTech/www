import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Footer, Nav } from '../components';
import LinkedInTag from 'react-linkedin-insight';
import ReactGA from 'react-ga';
// import FBPixel from 'react-facebook-pixel';
import { googleSchemaData } from '../constants';
import '../public/stylesheets/bulma.min.css';
import '../public/stylesheets/main.css';
import '../public/stylesheets/phone-repair.css'
import '../public/stylesheets/booking.css'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'aos/dist/aos.css';
import '../public/stylesheets/stepper.css';

// import '../public/stylesheets/battery.css';
// import '../public/stylesheets/booking.css';
// import '../public/stylesheets/faq.css';
// import '../public/stylesheets/legal.css';
// import '../public/stylesheets/mainhero.css';
// import '../public/stylesheets/nav.css';
// import '../public/stylesheets/phone-repair.css';
// import '../public/stylesheets/screenrepairblog.css';
// import '../public/stylesheets/social.css';


export default function App({ Component, pageProps }) {

  const router = useRouter();

  // Google Analytics
  ReactGA.initialize('UA-121085071-1');

  useEffect(() => {
    // Facebook Tracking
    // FBPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID, {}, { debug: process.env.NODE_ENV === 'development' });

    import('react-facebook-pixel')
    .then(module => module.default)
    .then(ReactPixel => {
      ReactPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID, {}, { debug: process.env.NODE_ENV === 'development' })
      ReactPixel.pageView()
    })

    // LinkedIn Insight
    LinkedInTag.init(process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID, 'dc');
    LinkedInTag.track(process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_ID);

    // Google Analytics - Track initial page load
    ReactGA.pageview(window.location.pathname + window.location.search);
    // Google Analytics - Track each navigation
    router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    });
  }, []);

  return (
    <div>
      <Head>
        <link href="/images/logo-square.png" rel="shortcut icon" type="image/png" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(googleSchemaData) }}
        >
        </script>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}