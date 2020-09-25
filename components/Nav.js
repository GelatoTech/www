import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  return(
    <div>
      <header className="is-fixed-top">
        <nav aria-label="main navigation" className="navbar testttt" id='nav' role="navigation">
          <div className="navbar-brand">
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
                <a className="navbar-item" href="#works">How it Works</a> <a className="navbar-item" href="#repair">Repair my iPhone <i className="fa fa-mobile" style={{marginLeft: "1vh"}}></i></a> <a className="navbar-item" 
                  onClick={() => { router.push('/about') } } 
                  target="_blank">About Us</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Blog</a>
                  <div className="navbar-dropdown">
                    <a className="navbar-item" href='/batterytips' id="blog" target='_blank'>3 iOS Battery Saving Tips</a> <a className="navbar-item" href='/screenrepairblog' id="blog2" target='_blank'>How much will an iPhone screen repair cost you in San Francisco?</a>
                  </div>
                </div><a className="navbar-item" href="/faq" target="_blank">FAQ</a> <a className="navbar-item" href="/legal" target="_blank">Lifetime Warranty</a> <a className="navbar-item" href="#business">Hours <i className="fa fa-clock" style={{marginLeft: "5px"}}></i></a> <a className="button is-info" href="tel:4155177897">(415) 517-7897 <i className="fa fa-phone" style={{ marginLeft: "0.3em" }}></i></a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}