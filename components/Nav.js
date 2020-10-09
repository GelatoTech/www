import { useState } from 'react';
import { useRouter } from 'next/router';
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {

  const router = useRouter();
  
  const  [burgerOpen, setBurger] = useState(false);

  const scrollToSection = (elementID) => {
    scroller.scrollTo(elementID, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return(
    <div>
      <header className="is-fixed-top">
        <nav aria-label="main navigation" className="navbar" id='nav' role="navigation">
          <div className="navbar-brand" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span>
              <a className="navbar-item"
              onClick={() => { router.push('/'); scrollToSection("hero") }}
              >
                <img alt="iphone screen repair" height="30" src="images/nav-logo-gtech.png" width="150" />
              </a>
            </span> 
            <a aria-expanded="false" aria-label="menu" className={`navbar-burger burger ${burgerOpen ? 'is-active' : ''}`} data-target="navbarBasicExample" role="button"
              onClick={() => { setBurger(!burgerOpen) }}
            >
              <span aria-hidden="true"></span> 
              <span aria-hidden="true"></span> 
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu has-dropdown" id="navbarBasicExample">
            <div className="navbar-end" id="nav-items">
              <div className="navbar-item">
                <a className="navbar-item" 
                  onClick={()=>{ 
                    router.pathname == '/' ? scrollToSection("works") : router.push('/#works');
                  }}
                >How it Works</a> 
                <a className="navbar-item"
                  onClick={()=>{ 
                    router.pathname == '/' ? scrollToSection("repair") : router.push('/#repair')
                  }}
                >Repair my iPhone <FontAwesomeIcon icon={faMobile} style={{ width: '0.7em', marginLeft: "1vh" }} /></a> <a className="navbar-item" 
                  onClick={()=>{
                    scrollToSection("hero");
                    router.push('/about');
                  }}
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
                  target="_blank">Lifetime Warranty</a> <a className="navbar-item" href="#business">Hours <FontAwesomeIcon icon={faClock} style={{ width: '1em', marginLeft:'0.3em' }} /></a> <a className="button is-info" href="tel:4155177897">(415) 517-7897 <FontAwesomeIcon icon={faPhone} style={{ marginLeft: "0.3em", width: '1em' }} /></a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}