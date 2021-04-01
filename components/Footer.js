import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faGoogle, faYelp, faInstagram, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  const router = useRouter();

  return(
    <div>
      <footer style={{padding: '25px'}}>
        <div className="container">
          <div className="columns">
            <div className="column footer-menu"><a href="#"><img alt="gelatotech" src="https://i.imgur.com/ovz7ww7.png" /> </a>
              <h3>Mobile iPhone Repair SF </h3>
              {/* Begin Mailchimp Signup Form */}
              <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
              <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
              <div id="mc_embed_signup">
                <form action="https://gmail.us4.list-manage.com/subscribe/post?u=5de193c5500cab6f1b5857bbd&id=3f9c581218" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">
                    <label htmlFor="mce-EMAIL">Stay Connected</label>
                    <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_5de193c5500cab6f1b5857bbd_3f9c581218" tabIndex={-1} defaultValue /></div>
                    <div className="clear"><button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" style={{backgroundColor: '#209cee', paddingLeft: '1em', paddingRight: '1em'}}>Subscribe</button></div>
                  </div>
                </form>
              </div>
            </div>
            {/*End mc_embed_signup*/}
            <div className="column footer-menu">
              <h5>Service</h5>
              <ul className="list-unstyled">
                <li><a className="footer-item" onClick={() => { router.push('/mail-in') }} style={{color: '#A9A9A9'}}>Mail-In Repair</a></li>
                <li><a className="footer-item" onClick={() => { router.push('/microsoldering') }} style={{color: '#A9A9A9'}}>Micro soldering</a></li>
                <li><a className="footer-item" onClick={() => { router.push('/?m=iphone#repair') }} style={{color: '#A9A9A9'}}>iPhone Repair</a></li>
                <li><a className="footer-item" onClick={() => { router.push('/ipad') }} style={{color: '#A9A9A9'}}>iPad Repair</a></li>
                <li><a className="footer-item" onClick={() => { router.push('/samsung') }} style={{color: '#A9A9A9'}}>Samsung Repair</a></li>
                <li><a className="footer-item" onClick={() => { router.push('/google-pixel') }} style={{color: '#A9A9A9'}}>Google Pixel Repair</a></li>
                <li><a className="footer-item" onClick={() => { router.push('/faq') }} style={{color: '#A9A9A9'}}>FAQ</a></li>
                <li><a className="footer-item" onClick={() => { router.push('/about') }} style={{color: '#A9A9A9'}}>About us</a></li>
                <li><a className="footer-item" onClick={() => { router.push('/legal') }} style={{color: '#A9A9A9'}}>Lifetime Warranty</a></li>
              </ul>
            </div>
            <div className="column footer-menu">
              <h5 id="business">Business Hours</h5>
              <hr />
              <ul className="date">
                <li>Monday: 10:00 am - 6:00pm </li>
                <li>Tuesday:  10:00 am - 6:00pm </li>
                <li>Wednesday: 10:00 am - 6:00pm </li>
                <li>Thursday: 10:00 am - 6:00pm </li>
                <li>Friday: 10:00 am - 6:00pm </li>
                <li>Saturday: 10:00 am - 6:00pm </li>
                <li>Sunday: Closed </li>
              </ul>
            </div>
            <div className="column footer-menu">
              <h5 style={{color: '#212121'}}>Blog</h5>
              <ul>
                <li><a onClick={() => { router.push('/blog/battery-tips') }}>Top 3 Battery Tips</a></li>
                <br />
                <li><a onClick={() => { router.push('/blog/screen-repair') }}>How much will an iPhone screen repair cost you in San Francisco?</a></li>
              </ul>
              <hr />
              <h5 id="contact">Contact Us</h5>
              <p> <FontAwesomeIcon style={{ width: '1em' }} className="fas fa-phone" aria-hidden="true" icon={faPhone} />  <a href="tel:4155177897">(415) 517-7897</a></p>
              <br />
              <p> <FontAwesomeIcon style={{ width: '1em' }} className="fa fa-envelope" aria-hidden="true" icon={faEnvelope} /> <a href="mailto:support@gelatotech.com" target="_blank"> support@gelatotech.com</a></p>
              <br />
              <p><FontAwesomeIcon style={{ width: '1em', marginRight: '0.2em' }} className="fa fa-location-arrow" aria-hidden="true" icon={faLocationArrow} /><a href="https://g.page/GelatotechiPhoneRepair?we">1180 4th St
                  San Francisco, CA 94158</a></p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12614.767559056148!2d-122.3917718!3d37.7738221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f621c4f11f36a76!2sMobile%20iPhone%20Repair%20SF%20%7C%20Gelatotech!5e0!3m2!1sen!2sus!4v1583816693352!5m2!1sen!2sus" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
            </div> 
          </div>
          <hr />
          <div className="grid">
            <div>
              <a href="https://twitter.com/gelatotech?lang=en" target="_blank"><FontAwesomeIcon style={{ height: '34px' }} className="fab fa-twitter-square" id="twitter" icon={faTwitterSquare} /></a>
            </div>
            <div>
              <a href="https://www.google.com/search?sxsrf=ACYBGNRW0soodNIzft09KFwpePu3ebj1AQ:1569811253188&q=gelato+tech&spell=1&sa=X&ved=0ahUKEwiZgfHQwvfkAhVMnJ4KHROKB1AQBQgvKAA&biw=840&bih=367&dpr=2" target="_blank"><FontAwesomeIcon style={{ height: '34px' }} id="google" icon={faGoogle} /></a>
            </div>
            <div>
              <a href="https://yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?start=20" target="_blank"><FontAwesomeIcon style={{ height: '34px' }} className="fab fa-yelp" id="yelp" icon={faYelp} /></a>
            </div>
            <div>
              <a href="https://facebook.com/gelatotech" target="_blank"><FontAwesomeIcon id="facebook" style={{ height: '34px' }} icon={faFacebookF} /></a>
            </div>
            <div>
              <a href="https://instagram.com/gelatotech" target="_blank"><FontAwesomeIcon id="instagram" className="fab fa-instagram" style={{ height: '34px' }} icon={faInstagram} /></a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/gelatotech-on-demand-iphone-repair/?viewAsMember=true" target="_blank"><FontAwesomeIcon style={{ height: '34px' }} id="linkedin" className="fab fa-linkedin" icon={faLinkedin} /></a>
            </div>
          </div>
          <p className="has-text-centered copyright has-text-grey">Copyright © 2020 gelatotech.com. All rights reserved</p>
        </div></footer>
    </div>
  )
}