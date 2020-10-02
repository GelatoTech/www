import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMobile } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  const router = useRouter();
  return(
    <div>
      <header className="is-fixed-top">
        <nav aria-label="main navigation" className="navbar testttt" id='nav' role="navigation">
          <div className="navbar-brand" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span>
              <a className="navbar-item"
              onClick={() => { router.push('/') }}
              >
                <img alt="iphone screen repair" height="30" src="images/nav-logo-gtech.png" width="150" />
              </a>
            </span> 
            <a aria-expanded="false" aria-label="menu" className="navbar-burger burger" data-target="navbarBasicExample" role="button">
              <span aria-hidden="true"></span> 
              <span aria-hidden="true"></span> 
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu has-dropdown" id="navbarBasicExample">
            <div className="navbar-end" id="nav-items">
              <div className="navbar-item">
                <a className="navbar-item" href="#works">How it Works</a> <a className="navbar-item" href="#repair">Repair my iPhone <FontAwesomeIcon icon={faMobile} style={{marginLeft: "1vh"}} /></a> <a className="navbar-item" 
                  onClick={() => { router.push('/about') } } 
                  target="_blank">About Us</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Blog</a>
                  <div className="navbar-dropdown">
                    <a className="navbar-item" 
                      onClick={() => { router.push('/blog') } } 
                      id="blog">3 iOS Battery Saving Tips</a> 
                    <a className="navbar-item" 
                      onClick={() => { router.push('/blog') } } 
                      id="blog2">How much will an iPhone screen repair cost you in San Francisco?</a>
                  </div>
                </div>
                <a className="navbar-item"
                  onClick={() => { router.push('/about') } } 
                >FAQ</a> <a className="navbar-item" 
                  onClick={() => { router.push('/legal') } } 
                  target="_blank">Lifetime Warranty</a> <a className="navbar-item" href="#business">Hours <FontAwesomeIcon icon={faClock} style={{ marginLeft:'0.3em' }} /></a> <a className="button is-info" href="tel:4155177897">(415) 517-7897 <FontAwesomeIcon icon={faMobile} style={{ marginLeft: "0.3em" }} /></a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}