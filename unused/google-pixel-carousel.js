import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export default function GooglePixelCarousel() {
  return (
    <div>
      <h1 style={{ fontSize: '2em', paddingTop: '1em', paddingLeft: '1em' }}>
        Choose your device
      </h1>
      <OwlCarousel 
        style={{ marginBottom: '2em' }}
        autoplay={true} 
        loop 
        dots={false} 
        autoplayTimeout={3000}
        responsive={{
          0:{
              items: 1
          },
          600:{
              items: 2
          },
          1000:{
              items: 3
          }
      }}
      >  
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel</h1>
              <button 
                style={buttonStyles}
                onClick={()=> {router.push('/?m=google&model=googlePixel#repair')}}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixelXL.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel XL</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?m=google&model=googlePixelXL#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel2.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 2</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?m=google&model=googlePixel2#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel2XL.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 2 XL</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?m=google&model=googlePixel2XL#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel3.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 3</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?m=google&model=googlePixel3#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel3XL.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 3 XL</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?m=google&model=googlePixel3XL#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel3.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 3A</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?m=google&model=googlePixel3a#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel4.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 4</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?m=google&model=googlePixel4#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
        <div className="card card-device">
          <div style={{ display: 'flex' }}>
            <img src="images/pixel4XL.png" style={{ width: "3em", height: '6em' }} />
            <div class="row">
              <h1>Google Pixel 4 XL</h1>
              <button 
                style={buttonStyles}
                onClick={()=> router.push('/?m=google&model=googlePixel4XL#repair')}
              >Repair Now</button>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  )
}