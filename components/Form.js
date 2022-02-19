import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import NetlifyForm from 'react-ssg-netlify-forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser, faEnvelope, faHome, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import scrollToSection from '../helpers/scrollToSection';
import formatDate from '../helpers/formatDate';
import { 
  devices, 
  devicesWithHomeButton, 
  devicesWithVersions,
  iphoneSixThroughEightPlus
} from '../public/javascripts/devices';

const screenReplacementTypes = [
  "AQ7",
  "OX7H",
  "OX7S",
  "OEML", 
  "OEMS", 
  "OEMT"
];


export function Form({ make }) {

  const router = useRouter();

  const [repairFormValues, setRepairFormValues] = useState({
    deviceMake: make || router.make || '',
    deviceModel: '',
    deviceIssue: '',
    deviceHomeButtonColor: '',
    deviceVersion: '',
    color: '',
    screenReplacementType: '',
    addScreenProtector: 'No',
    customerName: '',
    customerAddress: '',
    customerPhone: '',
    customerEmail: '',
    repairTime: '',
    repairDate: formatDate(new Date()),
  });

  useEffect(() => {
    if(repairFormValues.deviceIssue==='screen') {
      const availableScreens = screenReplacementTypes.filter(type => devices[repairFormValues.deviceModel].screen.price[type]);
      if (availableScreens.length === 1) {
        setRepairFormValues({ ...repairFormValues, screenReplacementType: availableScreens[0] })
      }
    }
    AOS.init(); // animations
    const { m } = router.query;
    if (m && repairFormValues.deviceMake !== m) setRepairFormValues({...repairFormValues, deviceMake: m});
  }, [repairFormValues.screenReplacementType]);

  // Handle repair form state
  const handleChange = (e) => {
    setRepairFormValues({ ...repairFormValues, [e.target.name]: e.target.value });
  }

  const hasTieredScreenPricing = (model) => {
    if(devices[model] && typeof devices[model]?.screen?.price === 'object') {
      return !Object.keys(devices[model].screen.price).every((tier) => devices[model].screen.price[tier] === null);
    }
  };

  const getFirstAvailableOEMType = (model) => { 
    // prioritize LG screens (OEML)
    return ["OEML", "OEMS", "OEMT"].filter(type => devices[model].screen.price[type])[0]
  };

  const getPrice = () => {
    if(typeof devices[repairFormValues.deviceModel][repairFormValues.deviceIssue].price === 'object') {
      if(hasTieredScreenPricing(repairFormValues.deviceModel)) {
        if(Object.values(devices[repairFormValues.deviceModel].screen.price).filter(type => type).length > 1) {
          return devices[repairFormValues.deviceModel][repairFormValues.deviceIssue].price[repairFormValues.screenReplacementType] 
        } else {
          return Object.values(devices[repairFormValues.deviceModel].screen.price).filter(type => type)[0]
        }
      }
      return devices[repairFormValues.deviceModel][repairFormValues.deviceIssue].price[repairFormValues.deviceVersion]
    } else {
      return devices[repairFormValues.deviceModel][repairFormValues.deviceIssue].price
    }
  }

  // After repair form is submitted...
  const postSubmit = () => {
    const { customerName } = repairFormValues;
    router.push({
      pathname: '/thank-you',
      query: { n: customerName.includes(' ') ? customerName.split(' ')[0] : customerName }
    });
    scrollToSection("hero");
  }

  return(
    <section className="section" id="repair">
      <div className="form-container container has-text-centered">
        <i><h1 className="title" style={{ fontSize: '3em' }} data-aos="fade-up">Schedule Repair</h1></i>
        <h2 className="subtitle" data-aos="fade-up">Pick your device model and problem.</h2>
        {
          repairFormValues.deviceMake !== ''
          ? (
            <center>
              <figure style={{ maxWidth: "400px", maxHeight: "300px" }}>
                <Image alt="iPhone Screen Repair" src={`/images/devices/${repairFormValues.deviceMake}.png`} width="100%" height="50%" layout="responsive" objectFit="contain" />
              </figure>
            </center>
          )
          : null
        }
        {
          (
            repairFormValues.screenReplacementType ||
            (repairFormValues.deviceMake) &&
            repairFormValues.deviceModel &&
            repairFormValues.deviceIssue &&
            repairFormValues.deviceIssue !== '' &&
            getPrice() // if there is a price
          ) && (<p id="total-price-text" style={{ fontSize: '1.9em' }}> 
                Estimated {getPrice()} repair</p>)
        }
        {
          (
            (repairFormValues.deviceMake) &&
            repairFormValues.deviceModel &&
            repairFormValues.deviceIssue &&
            repairFormValues.deviceIssue !== '' &&
            devices[repairFormValues.deviceModel][repairFormValues.deviceIssue].warranty
          )
          ? (<p id="warranty-text" style={{ fontSize: '1.5em' }}><strong>{devices[repairFormValues.deviceModel][repairFormValues.deviceIssue].warranty}</strong> warranty</p>)
          : ''
        }
        {
          (
            (repairFormValues.deviceMake) &&
            repairFormValues.deviceModel &&
            repairFormValues.deviceIssue &&
            repairFormValues.deviceIssue !== '' &&
            devices[repairFormValues.deviceModel][repairFormValues.deviceIssue].duration
          )
          ? (<p id="repairtime-text" style={{ fontSize: '1.2em', marginBottom: '0.5em' }}>Estimated <strong>{devices[repairFormValues.deviceModel][repairFormValues.deviceIssue].duration}</strong> repair time</p>)
          : ''
        }
        <NetlifyForm formName="repair-form" formValues={repairFormValues} postSubmit={postSubmit} id="repair-form" name="repair-form">
          <input name="form-name" type="hidden" value="repair-form" />
            <div className="field">
              <div className="select is-info is-rounded">
                <select id="select-device" value={repairFormValues.deviceMake} name="deviceMake" onChange={handleChange} required>
                  <option value="" disabled>
                    Select Device
                  </option>
                  <option value="iphone">
                    iPhone
                  </option>
                  <option value="ipad">
                    iPad
                  </option>
                  <option value="apple-watch">
                    Apple Watch
                  </option>
                  <option value="samsung">
                    Samsung
                  </option>
                  <option value="google">
                    Google
                  </option>
                </select>
              </div>
            </div>
            <input name="deviceModel" type="hidden" value={repairFormValues.deviceModel} />
            <input name="deviceIssue" type="hidden" value={repairFormValues.deviceIssue} />
            <input name="deviceHomeButtonColor" type="hidden" value={repairFormValues.deviceHomeButtonColor} />
            <input name="deviceVersion" type="hidden" value={repairFormValues.deviceVersion} />
            <input name="color" type="hidden" value={repairFormValues.color} />
            <input name="screenReplacementType" type="hidden" value={repairFormValues.screenReplacementType} />
            <input name="addScreenProtector" type="hidden" value={repairFormValues.addScreenProtector} />
            <div className="field">
              {
                repairFormValues.deviceMake !== ''
                  ? (
                    <div>
                      <div className="select is-info is-rounded">
                        <select value={ repairFormValues.deviceModel } onChange={(e)=>setRepairFormValues({ ...repairFormValues, deviceModel: e.target.value })}>
                          <option value="" disabled>
                            Select Model
                          </option>
                          {
                            repairFormValues.deviceMake == "iphone"
                              ? (
                                <>
                                  <option value="13proMax">
                                    iPhone 13 Pro Max
                                  </option>
                                  <option value="13pro">
                                    iPhone 13 Pro
                                  </option>
                                  <option value="13">
                                    iPhone 13
                                  </option>
                                  <option value="13mini">
                                    iPhone 13 Mini
                                  </option>
                                  <option value="12proMax">
                                    iPhone 12 Pro Max
                                  </option>
                                  <option value="1212pro">
                                    iPhone 12/12 Pro
                                  </option>
                                  <option value="12mini">
                                    iPhone 12 Mini
                                  </option>
                                  <option value="11proMax">
                                    iPhone 11 Pro Max
                                  </option>
                                  <option value="11pro">
                                    iPhone 11 Pro
                                  </option>
                                  <option value={11}>
                                    iPhone 11
                                  </option>
                                  <option value="xsmax">
                                    iPhone Xs Max
                                  </option>
                                  <option value="xs">
                                    iPhone Xs
                                  </option>
                                  <option value="xr">
                                    iPhone XR
                                  </option>
                                  <option value="x">
                                    iPhone X
                                  </option>
                                  <option value="8plus">
                                    iPhone 8 Plus
                                  </option>
                                  <option value={8}>
                                    iPhone 8
                                  </option>
                                  <option value="7plus">
                                    iPhone 7 Plus
                                  </option>
                                  <option value={7}>
                                    iPhone 7
                                  </option>
                                  <option value="6splus">
                                    iPhone 6s Plus
                                  </option>
                                  <option value="6s">
                                    iPhone 6s
                                  </option>
                                  <option value="6plus">
                                    iPhone 6 Plus
                                  </option>
                                  <option value="se2">
                                    iPhone SE (2nd Generation)
                                  </option>
                                  <option value={6}>
                                    iPhone 6
                                  </option>
                                </>
                              )
                              : ''
                          }
                          {
                            repairFormValues.deviceMake == "ipad"
                              ? (
                                <>
                                  <option value="ipadmini">
                                    iPadmini (A1432, A1454 ,A1455)
                                  </option>
                                  <option value="ipadmini2">
                                    iPad mini 2 (A1489, A1490, A1491)
                                  </option>
                                  <option value="ipadmini3">
                                    iPad mini 3 (A1599, A1600)
                                  </option>
                                  <option value="ipadmini4">
                                    iPad mini 4 (A1538, A1550)
                                  </option>
                                  <option value="ipadmini5">
                                    iPad mini 5 (A2133, A2124, A2126, A2125)
                                  </option>
                                  <option value="ipad2">
                                    iPad 2 (A1395, A1396)
                                  </option>
                                  <option value="ipad3">
                                    iPad 3 (A1416, A1430, A1403)
                                  </option>
                                  <option value="ipad4">
                                    iPad 4 (A1458, A1459, A1460)
                                  </option>
                                  <option value="ipad5">
                                    iPad 5 (A1822, A1823)
                                  </option>
                                  <option value="ipad6">
                                    iPad 6 (A1893, A1954)
                                  </option>
                                  <option value="ipad7">
                                    iPad 7 (A2197, A2198, A2200)
                                  </option>
                                  <option value="ipadair">
                                    iPad Air (A1474, A1475)
                                  </option>
                                  <option value="ipadair2">
                                    iPad Air 2 (A1566, A1567)
                                  </option>
                                  <option value="ipadair3">
                                    iPad Air 3 (A2152, A2123, A2153)
                                  </option>
                                  <option value="ipadpro9">
                                    iPad Pro 9.7 inch (A1673, A1674)
                                  </option>
                                  <option value="ipadpro10">
                                    iPad Pro (10.5-inch)(A1701, A1709)
                                  </option>
                                  <option value="ipadpro11">
                                    iPad Pro 11-inch (A1980, A2013, A1934)
                                  </option>
                                  <option value="ipadpro121">
                                    iPad Pro 12.9-inch (A1584, A1652)
                                  </option>
                                  <option value="ipadpro122">
                                    iPad Pro 12.9-inch (2nd generation)(A1670, A1671)
                                  </option>
                                  <option value="ipadpro123">
                                    iPad Pro 12.9-inch (3rd generation) (A1876, A2014, A1895)
                                  </option>
                                  <option value="ipadpro124">
                                    iPad Pro 12.9-inch (4th generation) (A2229)
                                  </option>
                                </>
                              )
                              : ''
                          }
                          {
                            repairFormValues.deviceMake == "google"
                              ? (
                                <>
                                  <option value="googlePixel">
                                    Google Pixel
                                  </option>
                                  <option value="googlePixelXL">
                                    Google Pixel XL
                                  </option>
                                  <option value="googlePixel2">
                                    Google Pixel 2
                                  </option>
                                  <option value="googlePixel2XL">
                                    Google Pixel 2 XL
                                  </option>
                                  <option value="googlePixel3">
                                    Google Pixel 3
                                  </option>
                                  <option value="googlePixel3XL">
                                    Google Pixel 3 XL
                                  </option>
                                  <option value="googlePixel3A">
                                    Google Pixel 3A
                                  </option>
                                  <option value="googlePixel4">
                                    Google Pixel 4
                                  </option>
                                  <option value="googlePixel4XL">
                                    Google Pixel 4 XL
                                  </option>
                                  <option value="googlePixel4a">
                                    Google Pixel 4a
                                  </option>
                                  <option value="googlePixel4a5g">
                                    Google Pixel 4a 5G
                                  </option>
                                  <option value="googlePixel5">
                                    Google Pixel 5
                                  </option>
                                  <option value="googlePixel5A">
                                    Google Pixel 5A
                                  </option>
                                  <option value="googlePixel5a5g">
                                    Google Pixel 5A 5G
                                  </option>
                                </>
                              )
                              : ''
                          }
                          {
                            repairFormValues.deviceMake == "samsung"
                              ? (
                                <>
                                  <optgroup label="Galaxy S Series"></optgroup>
                                  <option value="S21FE5G">
                                    S21 FE 5G
                                  </option>
                                  <option value="S21ultra">
                                    S21 Ultra
                                  </option>
                                  <option value="S21plus">
                                    S21 Plus
                                  </option>
                                  <option value="S21">
                                    S21
                                  </option>
                                  <option value="S20FE5G">
                                    S20 FE 5G
                                  </option>
                                  <option value="S20Ultra5g">
                                    S20 Ultra 5G
                                  </option>
                                  <option value="S20Plus5g">
                                    S20 Plus 5G
                                  </option>
                                  <option value="S205G">
                                    S20 5G
                                  </option>
                                  <option value="S10Lite">
                                    S10 Lite
                                  </option>
                                  <option value="S105G">
                                    S10 5G
                                  </option>
                                  <option value="S10Plus">
                                    S10 Plus
                                  </option>
                                  <option value="S10">
                                    S10
                                  </option>
                                  <option value="S10e">
                                    S10e
                                  </option>
                                  <option value="S9Plus">
                                    S9 Plus 
                                  </option>
                                  <option value="S9">
                                    S9 
                                  </option>
                                  <option value="S8Plus">
                                    S8 Plus
                                  </option>
                                  <option value="S8">
                                    S8
                                  </option>
                                  <optgroup label="Galaxy Note Series"></optgroup>
                                  <option value="Note20Ultra">
                                    Note 20 Ultra
                                  </option>
                                  <option value="Note205G">
                                    Note 20 5G
                                  </option>
                                  <option value="Note10Plus">
                                    Note 10 Plus
                                  </option>
                                  <option value="Note10Lite">
                                    Note 10 Lite
                                  </option>
                                  <option value="Note10">
                                    Note 10
                                  </option>
                                  <option value="Note9">
                                    Note 9
                                  </option>
                                  <option value="Note8">
                                    Note 8
                                  </option>
                                </>
                              )
                              : ''
                          }
                          {
                            repairFormValues.deviceMake == "apple-watch"
                              ? (
                                <>
                                  <option value="apple-watch-series-2-38mm">
                                    Series 2 (38MM)
                                  </option>
                                  <option value="apple-watch-series-2-42mm">
                                    Series 2 (42MM)
                                  </option>
                                  <option value="apple-watch-series-3-38mm">
                                    Series 3 (38MM)
                                  </option>
                                  <option value="apple-watch-series-3-42mm">
                                    Series 3 (42MM)
                                  </option>
                                  <option value="apple-watch-series-4-40mm">
                                    Series 4 (40MM)
                                  </option>
                                  <option value="apple-watch-series-4-44mm">
                                    Series 4 (44MM)
                                  </option>
                                  <option value="apple-watch-series-5-40mm">
                                    Series 5 (40MM)
                                  </option>
                                  <option value="apple-watch-series-5-44mm">
                                    Series 5 (44MM)
                                  </option>
                                  <option value="apple-watch-series-se-40mm">
                                    Series SE (40MM) 
                                  </option>
                                  <option value="apple-watch-series-se-44mm">
                                    Series SE (44MM)
                                  </option>
                                  <option value="apple-watch-series-6-40mm">
                                    Series 6 (40MM)
                                  </option>
                                  <option value="apple-watch-series-6-44mm">
                                    Series 6 (44MM)
                                  </option>
                                </>
                              )
                              : ''
                          }
                        </select>
                      </div>
                    </div>
                  )
                  : ''
              }
            </div>
            {
              Object.keys(devicesWithVersions).includes(repairFormValues.deviceModel)
              ? (
                <div className="field" id="deviceVersion">
                  <div className="select is-rounded">
                    <select value={repairFormValues.deviceVersion} onChange={(e)=>setRepairFormValues({ ...repairFormValues, deviceVersion: e.target.value })}>
                      <option value="" disabled>
                        Select Version
                      </option>
                      {
                        devicesWithVersions[repairFormValues.deviceModel].map((version, i) => (<option key={i} value={version}>{version}</option>))
                      }
                    </select>
                  </div>
                </div>
              )
              : null
            }
            {
              (devicesWithHomeButton.includes(repairFormValues.deviceModel))
              ? (
                <div className="field" id="homeButton">
                  <div className="select is-rounded">
                    <select value={repairFormValues.deviceHomeButtonColor} onChange={(e)=>setRepairFormValues({ ...repairFormValues, deviceHomeButtonColor: e.target.value })}>
                      <option value="" disabled>
                        Home Button Color
                      </option>
                      <option value="black">
                        Black
                      </option>
                      <option value="white">
                        White
                      </option>
                    </select>
                  </div>
                </div>
              )
              : null
            }
            {
              (devices[repairFormValues.deviceModel] && devices[repairFormValues.deviceModel]["colors"]) && (
                <div className="field">
                  <div className="select is-rounded">
                    <select value={repairFormValues.color} onChange={(e)=>setRepairFormValues({ ...repairFormValues, color: e.target.value })}>
                      <option value="" disabled>Select color</option>
                      {
                        devices[repairFormValues.deviceModel]["colors"].map((color) => {
                          return (<option value={color}>{color}</option>)
                        })
                      }
                    </select>
                  </div>
                </div>
              )
            }
            {
              repairFormValues.deviceModel !== ''
              ? (
                <div className="field">
                  <div className="select is-danger is-rounded" style={{ borderRadius: '3em' }}>
                    <select value={repairFormValues.deviceIssue} onChange={(e)=>setRepairFormValues({ ...repairFormValues, deviceIssue: e.target.value })} required>
                      <option value="" disabled>
                        Select Problem
                      </option>
                      {
                        (
                          devices[repairFormValues.deviceModel] &&
                          (
                            hasTieredScreenPricing(repairFormValues.deviceModel) ||
                            (
                              devices[repairFormValues.deviceModel]["screen"] &&
                              typeof devices[repairFormValues.deviceModel]["screen"].price !== 'object'
                            )
                          )
                        )
                        ? (
                          <option value="screen">
                            Screen replacement
                          </option>
                        )
                        : null
                      }
                      {
                        (
                          devices[repairFormValues.deviceModel] &&
                          devices[repairFormValues.deviceModel]["glassOnly"]
                        )
                        ? (
                          <option value="glassOnly">
                            Screen replacement (glass only)
                          </option>
                        )
                        : null
                      }
                      {
                        (
                          devices[repairFormValues.deviceModel] &&
                          devices[repairFormValues.deviceModel]["LCD"]
                        )
                        ? (
                          <option value="LCD">
                            OLED Screen Assembly Replacement
                          </option>
                        )
                        : null
                      }
                      {
                        (
                          devices[repairFormValues.deviceModel] &&
                          devices[repairFormValues.deviceModel]["glassTouch"]
                        )
                        ? (
                          <option value="glassTouch">
                            Screen replacement (glass + touch)
                          </option>
                        )
                        : null
                      }
                      {
                        (
                          devices[repairFormValues.deviceModel] &&
                          devices[repairFormValues.deviceModel]["backglass"]
                        )
                        ? (
                          <option value="backglass">Back glass replacement</option>
                        )
                        : null
                      }
                      {
                        (
                          devices[repairFormValues.deviceModel] &&
                          devices[repairFormValues.deviceModel]["battery"]
                        )
                        ? (
                          <option value="battery">
                            Battery replacement
                          </option>
                        )
                        : null
                      }
                      {
                        devices[repairFormValues.deviceModel] &&
                        devices[repairFormValues.deviceModel]["charging"]
                        ? (
                          <option value="charging">
                            Charging port replacement
                          </option>
                        )
                        : null
                      }
                      {
                        devices[repairFormValues.deviceModel] &&
                        devices[repairFormValues.deviceModel]["water"]
                        ? (
                          <option value="water">
                            Water Damage
                          </option>
                        )
                        : null
                      }
                      {
                        devices[repairFormValues.deviceModel] &&
                        devices[repairFormValues.deviceModel]["logic"]
                        ? (
                          <option value="logic">
                            Logic board repair
                          </option>
                        )
                        : null
                      }
                    </select>
                  </div>
                </div>
              ) : null
            }
            {
              repairFormValues.deviceIssue === 'screen' &&
              hasTieredScreenPricing(repairFormValues.deviceModel) &&
              Object.values(devices[repairFormValues.deviceModel].screen.price).filter(type => type).length > 1 &&
              (
                <div className="is-half" style={{ display:'flex',justifyContent:'center',flexDirection:'column', alignItems: 'center' }}>
                  <div className="column">
                    <h3><strong>Which type of screen would you like?</strong></h3>
                  </div>
                  <div className="control" style={{ marginBottom: '1em' }}>
                    {devices[repairFormValues.deviceModel].screen.price["AQ7"] &&
                      (<><label className="radio">
                      <input type="radio" name="screenReplacementType" value="AQ7" checked={repairFormValues.screenReplacementType === 'AQ7'} onChange={handleChange} style={{marginRight: '0.5em'}} />
                      Aftermarket screen: AQ7 LCD 
                    </label><br /></>)
                    }
                    {devices[repairFormValues.deviceModel].screen.price["OX7H"] &&
                      (<><label className="radio">
                          <input type="radio" name="screenReplacementType" value="OX7H" checked={repairFormValues.screenReplacementType === 'OX7H'} onChange={handleChange} style={{marginRight: '0.5em'}}/>
                          Aftermarket screen: OX7 {iphoneSixThroughEightPlus.includes(repairFormValues.deviceModel) ? 'LCD' : 'HARD OLED'}
                        </label><br /></>)
                    }
                    {devices[repairFormValues.deviceModel].screen.price["OX7S"] &&
                      (<><label className="radio">
                        <input type="radio" name="screenReplacementType" value="OX7S" checked={repairFormValues.screenReplacementType === 'OX7S'} onChange={handleChange} style={{marginRight: '0.5em'}}/>
                        Aftermarket screen: OX7 SOFT OLED
                      </label><br /></>)
                    }
                    {
                      getFirstAvailableOEMType(repairFormValues.deviceModel) &&
                      (<><label className="radio">
                        <input type="radio" name="screenReplacementType" value={getFirstAvailableOEMType(repairFormValues.deviceModel)} checked={repairFormValues.screenReplacementType === getFirstAvailableOEMType(repairFormValues.deviceModel)} onChange={handleChange} style={{marginRight: '0.5em'}}/>
                        Original Apple Screen
                      </label><br /></>)
                    }
                  </div>
                  <div className="column">
                    <h3><strong>Would you like to add a screen protector?</strong> <span style={{ color: "#32B610" }}>+$15</span></h3>
                  </div>
                  <div className="column buttons has-addons" style={{ marginTop: '-20px' }}>
                    <button 
                      className={`button ${repairFormValues.addScreenProtector === "Yes" && 'is-success'}`}
                      onClick={()=>handleChange({ target: { name: "addScreenProtector", value: "Yes" } })}
                      // onClick={()=>setAddScreenProtector(true)}
                    >
                      Yes
                    </button>
                    <button 
                      className={`button ${repairFormValues.addScreenProtector === "No" && 'is-dark'}`}
                      onClick={()=>handleChange({ target: { name: "addScreenProtector", value: "No" } })}
                      // onClick={()=>setAddScreenProtector(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
                )
            }
          <hr />
          <h2 className="title is-5 has-text-weight-light">Contact info <FontAwesomeIcon icon={faUsers} style={{ height: '1em', marginLeft: '0.3em' }} /></h2>
          <div className="field">
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left"><input value={repairFormValues.customerName} className="input" name="customerName" placeholder="Name" required type="text" onChange={handleChange} /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faUser} style={{ height: '1em', marginLeft: '0.3em' }} /></span></p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right">
                      {/* <GooglePlacesAutocomplete 
                        apiKey={process.env.GOOGLE_PLACES_API_KEY} 
                        value={repairFormValues.address} 
                        onChange={handleChange} 
                        className="input" name="address" 
                        required 
                      /><span className="icon is-small is-left"><FontAwesomeIcon icon={faHome} style={{ height: '1em', marginLeft: '0.3em' }} /></span> */}
                      <input value={repairFormValues.customerAddress} onChange={handleChange} className="input" name="customerAddress" placeholder="Address" required type="text" /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faHome} style={{ height: '1em', marginLeft: '0.3em' }} /></span>
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right"><input value={repairFormValues.customerPhone} onChange={handleChange} className="input" name="customerPhone" placeholder="Cell #" required type="tel" /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faPhone} style={{ height: '1em', marginLeft: '0.3em' }} /></span></p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right"><input value={repairFormValues.customerEmail} onChange={handleChange} className="input" name="customerEmail" placeholder="Email" required type="email" /> <span className="icon is-small is-left"><FontAwesomeIcon icon={faEnvelope} style={{ height: '1em', marginLeft: '0.3em' }} /></span></p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h2 className="title is-5 has-text-weight-light">Time &amp; Date <FontAwesomeIcon icon={faClock} style={{ height: '1em', marginLeft: '0.3em' }} /></h2>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <input value={repairFormValues.repairDate} onChange={handleChange} className="input" name="repairDate" required type="date" />
              </div>
              <div className="field">
                <input value={repairFormValues.repairTime} onChange={handleChange} className="input" max="22:00" min="09:00" name="repairTime" type="time" />
              </div>
            </div>
          </div><br />
          <button className="btn btn-action" type="submit">Book Repair Now</button>
        </NetlifyForm>
      </div>
    </section>
  )
}
