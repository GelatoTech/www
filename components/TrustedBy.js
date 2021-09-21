import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGoogle, faYelp } from '@fortawesome/free-brands-svg-icons';

export function TrustedBy() {

  return(
    <div>
      <section className="section work-section">
        <div className="container">
          <nav className="level is-mobile">
            <div className="level-item has-text-centered">
              <div>
                <h3 className="title is-3 icon-item" style={{color: 'white'}}>Trusted By:</h3>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <a href="https://www.google.com/search?q=gelatotech.&oq=gelatotech.+&aqs=chrome..69i57j69i60l5.1879j0j4&sourceid=chrome&ie=UTF-8#lrd=0x808f7fd0f5b28c95:0x7f621c4f11f36a76,1,,," target="_blank"><FontAwesomeIcon icon={faGoogle} style={{ width: '24px' }} /></a>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <a href="https://www.yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-3?osq=gelatotech" target="_blank"><FontAwesomeIcon icon={faYelp} style={{ width: '24px' }} /></a>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <a href="https://www.facebook.com/Gelatotech/" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} style={{ width: '24px' }} /></a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );

}