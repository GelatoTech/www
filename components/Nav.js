import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faPhone } from '@fortawesome/free-solid-svg-icons'

import scrollToSection from '../helpers/scrollToSection';

export function Nav() {

  const router = useRouter();
  
  const  [burgerOpen, setBurger] = useState(false);
  const  [ourServicesDropdownActive, setOurServicesDropdownActive] = useState(false);
  const  [blogDropdownActive, setBlogDropdownActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger animations after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return(
    <div>
      <header className="is-fixed-top">
        <nav aria-label="main navigation" className="navbar" id='nav' role="navigation">
          <div className="navbar-brand" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a className="navbar-item" href="/">
              <img alt="Emblem" width={50} src='/images/logo-square.svg' className={`logo-emblem ${isScrolled ? 'animate-bounce' : ''}`} />
              <img alt="Gelatotech Full Logo" width={150} src='/images/logo.svg' className={`logo-full ${isScrolled ? 'animate-wipe' : ''}`} />
            </a>
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
                >How We Operate</a> 
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
                      router.push('/');
                      }}>Carry-In Repair</a>
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
                      router.push('/apple-watch');
                      }}>Apple Watch Repair</a> 
                    <a className="navbar-item" onClick={() => {
                      setOurServicesDropdownActive(false);
                      setBurger(false);
                      router.push('/samsung');
                      }}>Samsung Repair</a>
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
                        router.push('/blog/find-your-ipad-model'); 
                      }} 
                      id="blog">Find Your iPad Model</a> 
                    <a className="navbar-item" 
                      onClick={() => {
                        setBlogDropdownActive(false);
                        setBurger(false);
                        scrollToSection("hero"); 
                        router.push('/blog/quality-standards'); 
                      }} 
                      id="blog">Quality Standards</a> 
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
                    router.push('/faq') 
                  }} 
                >FAQ</a> 
                <a className="navbar-item" 
                  onClick={() => { 
                    setBurger(false);
                    router.push('/legal') }} 
                  target="_blank">90 Day Warranty</a>
                <a className="navbar-item" onClick={()=>{
                  setBurger(false);
                  scrollToSection("business")
                  }}>Hours <FontAwesomeIcon icon={faClock} style={{ width: '1em', marginLeft:'0.3em' }} /></a> 
                  {/* Book Us button with calendar icon */}
                <a className="button is-primary" onClick={() => {
                  setBurger(false);
                  router.push('/#repair')
                }}>
                  <FontAwesomeIcon icon={faCalendar} style={{ marginRight: "0.3em", width: '1em' }} /> Book Us
                </a>
                  <a className="button is-info" href="tel:4156219055"><FontAwesomeIcon icon={faPhone} style={{ marginRight: "0.3em", width: '1em' }} /> (415) 621-9055</a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}