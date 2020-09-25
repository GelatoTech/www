export default () => {
  return(
    <div>
      <header className="is-fixed-top">
        <nav aria-label="main navigation" class="navbar" id='nav' role="navigation">
          <div className="navbar-brand">
            <span>
              <a class="navbar-item" href="/">
                <img alt="iphone screen repair" height="30" src="images/nav-logo-gtech.png" width="150" />
              </a>
            </span> 
            <a aria-expanded="false" aria-label="menu" class="navbar-burger burger" data-target="navbarBasicExample" role="button">
              <span aria-hidden="true"></span> 
              <span aria-hidden="true"></span> 
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div class="navbar-menu has-dropdown" id="navbarBasicExample">
            <div class="navbar-end" id="nav-items">
              <div class="navbar-item">
                <a class="navbar-item" href="#works">How it Works</a> <a class="navbar-item" href="#repair">Repair my iPhone <i class="fas fa-mobile" style={{marginLeft: "1vh"}}></i></a> <a class="navbar-item" href="/about" target="_blank">About Us</a>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">Blog</a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item" href='/batterytips' id="blog" target='_blank'>3 iOS Battery Saving Tips</a> <a class="navbar-item" href='/screenrepairblog' id="blog2" target='_blank'>How much will an iPhone screen repair cost you in San Francisco?</a>
                  </div>
                </div><a class="navbar-item" href="/faq" target="_blank">FAQ</a> <a class="navbar-item" href="/legal" target="_blank">Lifetime Warranty</a> <a class="navbar-item" href="#business">Hours <i class="fas fa-clock" style={{marginLeft: "5px"}}></i></a> <a class="button is-info" href="tel:4155177897">(415) 517-7897 <i class="fas fa-phone"></i></a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}