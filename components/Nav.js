import { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons'

import scrollToSection from '../helpers/scrollToSection';
import logo from '../public/images/nav-logo-gtech.png';

export default function Nav() {

  const router = useRouter();
  
  const  [burgerOpen, setBurger] = useState(false);
  const  [ourServicesDropdownActive, setOurServicesDropdownActive] = useState(false);
  const  [blogDropdownActive, setBlogDropdownActive] = useState(false);

  return(
    <div>
      <header className="is-fixed-top">
        <nav aria-label="main navigation" className="navbar" id='nav' role="navigation">
          <div className="navbar-brand" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span>
              <a className="navbar-item"
              onClick={() => { 
                setBurger(false);
                router.pathname == '/' ? scrollToSection("hero") : router.push('/'); 
              }}
              >
                <img alt="iphone screen repair" height="30" src={logo} width="150" />
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
          <div className={`navbar-menu has-dropdown ${burgerOpen ? 'is-active' : ''}`} id="navbarBasicExample">
            <div className="navbar-end" id="nav-items">
                <a className="navbar-item" 
                  onClick={()=>{ 
                    setBurger(false);
                    router.pathname == '/' ? scrollToSection("works") : router.push('/#works');
                  }}
                >How it Works</a> 
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link" onClick={()=>{
                    setOurServicesDropdownActive(!ourServicesDropdownActive);
                  }}>Our Services</a>
                  <div className={`navbar-dropdown ${
                    ourServicesDropdownActive
                    ? ''
                    : 'is-hidden-touch'
                  }`}>
                    <a className="navbar-item" onClick={() => {
                      setOurServicesDropdownActive(false);
                      setBurger(false);
                      router.push('/mail-in');
                      }}>Mail-In Repair</a>
                    <a className="navbar-item" onClick={() => {
                      setOurServicesDropdownActive(false);
                      setBurger(false);
                      router.push('/microsoldering');
                      }}>Micro Soldering</a>
                    <hr />
                    <a className="navbar-item" onClick={()=> {
                      setOurServicesDropdownActive(false);
                      setBurger(false);
                      router.push('/?m=iphone#repair');
                      }}>iPhone Repair</a> 
                    <a className="navbar-item" onClick={() => {
                      setOurServicesDropdownActive(false);
                      setBurger(false);
                      router.push('/ipad');
                      }}>iPad Repair</a> 
                    <a className="navbar-item" onClick={() => {
                      setOurServicesDropdownActive(false);
                      setBurger(false);
                      router.push('/google-pixel');
                      }}>Google Pixel Repair</a>
                  </div>
                </div>
                <a className="navbar-item" 
                  onClick={()=>{
                    setBurger(false);
                    router.push('/about');
                  }}
                  target="_blank">About Us</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link" onClick={()=>{
                    setBlogDropdownActive(!blogDropdownActive);
                  }}>Blog</a>
                  <div className={`navbar-dropdown ${
                    blogDropdownActive
                    ? ''
                    : 'is-hidden-touch'
                  }`}>
                    <a className="navbar-item" 
                      onClick={() => {
                        setBlogDropdownActive(false);
                        setBurger(false);
                        scrollToSection("hero"); 
                        router.push('/blog/battery-tips'); 
                      }} 
                      id="blog">3 iOS Battery Saving Tips</a> 
                    <a className="navbar-item" 
                      onClick={() => {
                        setBlogDropdownActive(false);
                        setBurger(false);
                        scrollToSection("hero"); 
                        router.push('/blog/screen-repair'); 
                      }} 
                      id="blog2">How much will an iPhone screen repair cost you in San Francisco?</a>
                  </div>
                </div>
                <a className="navbar-item"
                  onClick={() => { 
                    setBurger(false);
                    router.push('/FAQ') 
                  }} 
                >FAQ</a> <a className="navbar-item" 
                  onClick={() => { 
                    setBurger(false);
                    router.push('/legal') }} 
                  target="_blank">Lifetime Warranty</a>
                <a className="navbar-item" onClick={()=>{
                  setBurger(false);
                  scrollToSection("business")
                  }}>Hours <FontAwesomeIcon icon={faClock} style={{ width: '1em', marginLeft:'0.3em' }} /></a> <a className="button is-info" href="tel:4155177897">(415) 517-7897 <FontAwesomeIcon icon={faPhone} style={{ marginLeft: "0.3em", width: '1em' }} /></a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}