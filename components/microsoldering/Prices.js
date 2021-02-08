import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const services = [
  {
    name: "Water / Liquid Damage",
    repairTypes: [
      {
        name: "Water/liquid damage data recovery",
        description: "If data recovery is possible, your device may or may not be usable after repair, no guarantees. No warranty on any water/liquid damaged device repairs. If you would like your device to be usable after liquid damage repair, we cannot offer any warranty on the device/repair. Liquid damage devices can be unpredictable, some repairs can last years, some last months and some can last only a few days. There is no way to predict the life span of any liquid damaged device.",
        price: "$150 - $350",
      },
    ],
  },
  {
    name: "iPhone X / XS / XS Max / XR / 11 / 11 Pro / 11 Pro Max - Motherboard Repair",
    repairTypes: [
      {
        name: "No Backlight / No image repair",
        description: "A no image failure can be caused by liquid, drops, technician error etc. Diagnostics can take a few hours to a few days.",
        price: "$100 - $250",
      },
      {
        name: "No power, not charging, not booting up repair",
        description: "No power can be caused by many things like liquid, impact, aftermarket chargers or most common are the external USB attachment fans being sold almost everywhere. The USB fans short the charge port IC chip in the phone which causes it to stop powering on. Diagnostics can take a few hours to a few days.",
        price: "$100 - $250",
      },
      {
        name: "Boot loop repair",
        description: "Constant apple logo boot-looping error can be caused by liquid, drops, technician error etc. Diagnostics can take a few hours to a few days.",
        price: "$100 - $250",
      },
      {
        name: "No touch",
        description: "Touch screen stops working after impact, liquid damage or any other reason.",
        price: "$100 - $250",
      },
      {
        name: "Other errors",
        description: "Other errors including iTunes errors can take a few hours to a few days to diagnose.",
        price: "$100 - $250",
      },
    ]
  },
  {
    name: "iPhone 7 / 7 Plus, 8 / 8 Plus Motherboard Repairs",
    repairTypes: [
      {
        name: "No power, not charging, not booting up repair",
        description: "No power can be caused by many things like liquid, impact, aftermarket chargers or most common are the USB fans being sold almost everywhere. The USB fans short the charge port IC chip in the phone which causes it to stop powering on. Diagnostics can take a few hours to a few days.",
        price: "$100 - $250",
      },
      {
        name: "No backlight repair",
        description: "This problem can happen by hard impact, water damage or inexperienced phone repair tech replacing your iPhone screen. If you shine a bright light to your screen you can usually still see an image but the display does not light up. This can usually be repaired the same day in about 1-2 hours depending on how busy I am with other repairs.",
        price: "$80 - $100",
      },
      {
        name: "No audio repair",
        description: `If you're experiencing one or more of these symptoms: Siri does not work, FaceTime/loud speaker grayed out during calls and you cannot hear through the ear speaker, you cannot record voice memos, phone takes about 5 minutes to power on, cannot hear anyone during calls.... any issues with audio might need an audio IC motherboard repair.

This repair is very common on all iphone 7 and 7 plus models. You can google "iPhone 7 no audio" to find a ton of information about this defect / repair.


*** Please note: The "no audio" repairs is a difficult repair and in very rare cases can cause a risk of losing cell service after audio IC repair.
Should this happen then we cannot fix the "no cell service" issue.

No fee will be charged for the attempted repair but WE WILL NOT reimburse or replace your device if this problem happens after we attempt to repair audio. Your device will not be able to connect to cell service anymore and if restored on iTunes you will not be able to get past the activation screen.`,
        price: "$80",
      },
      {
        name: "No image repair",
        description: "Usually caused by hard impact or liquid damage. The iPhone is able to power on and work but there is no backlight or image on the display. Sometimes a simple screen repair can fix this ($65.00 7/7 plus model) but many times it is a damaged backlight IC chip internally on the motherboard. One way to tell if your phone is working with no image is by connecting your iPhone to your computer and opening iTunes, iTunes should be able to detect that your phone is connected.",
        price: "$80 - $120",
      },
    ],
  },
  {
    name: "iPhone 6S / 6S Plus Board Repairs",
    repairTypes: [
      {
        name: "No Backlight repair",
        description: "The no backlight happens from hard impact, water damage or screen repair. Shinning a bright light to the screen can usually show a faint display but the screen does not light up.",
        price: "$60 - $100"
      },
      {
        name: "No image",
        description: "No image issues vary from phone to phone. Causes can be from hard impact, liquid damage, old age, over heating... the list goes on. Common symptoms would be your device is on, you can hear notifications and also vibrate. You plug into iTunes and iTunes can read your device but if you shine a bright light at your display you cannot see any faint image in the screen.",
        price: "$80 - $100"
      },
      {
        name: "No power, not charging",
        description: "No power can be caused by many things like liquid, impact, aftermarket chargers or most common are the USB fans being sold almost everywhere. The USB fans short the charge port IC chip in the phone which causes it to stop powering on.",
        price: "$90"
      },
    ]
  },
  {
    name: "iPhone 6 / 6 Plus Board Repairs",
    repairTypes: [
      {
        name: "Touch Screen Issues",
        description: "A.K.A Touch Disease. Fixes the touch display when it stops working and also gray flickering bars on the top part of the screen. This is a common issues with all iPhone 6 Plus models. Some causes for this issue are due to impact, flexing or bending of the frame which causes the touch IC controller chip to come loose from the board which stops the screens touch from working and also causes the top part of the screen to flicker with gray bars on power up, or when you slightly tap or bend the top right of the phones display.",
        price: "$60 - $80"
      },
      {
        name: "No power, not charging",
        description: "The half backlight display can happen with hard impact, water damage, screen repair and on very rare occasion sporadically on its own. This type of repair would take a few hours or a few days to find the problem and fix.",
        price: "$60 - $100",
      },
      {
        name: "Half backlight display",
        description: "The half backlight display can happen with hard impact, water damage, screen repair and on very rare occasion sporadically on its own. This type of repair would take a few hours or a few days to find the problem and fix.",
        price: "$60 - $100",
      },
      {
        name: "Touch ID failure after screen replacement",
        description: "If the home button cable is not torn or punctured and your Touch ID no longer works after you replaced your screen then I might be able to fix the problem. Most likely a shorted components on the motherboard when installing the new screen because you had the battery plugged in and phone was still powered on.",
        price: "$60 - $100",
      },
      {
        name: "No Image on Screen but phone still works",
        description: "This is a typical repair job on iPhone 6 models where the lcd display just goes out by itself or by impact. This is still a hard repair to diagnose but many times it is a backlight driver on the board that we can fix. Three main components make up the backlight driver which can take us a few hours just to diagnose.",
        price: "$60 - $100",
      },
    ],
  },
  {
    name: "Other micro-soldering repairs",
    repairTypes: [
      {
        name: "iPhones with no image after a screen repair",
        description: "*** MANY CASES, NOT REPAIRABLE *** Usually from long screw damage on the main board. This occurs when the technician replacing the screen on your iPhone mixes up the screws for the LCD shield and over-tightens the screws. The longer screw digs into the main board and causes all kinds of damage to the device because it breaks micro traces in the motherboard internally. This type of repair is usually a NO FIX for me. This is probably one of the hardest repair jobs. If I can determine that the issues is just a backlight driver complete rebuild then I can do the repair. This can happen from old age of the device or impact, but about 40% of the time it is from technician error (e.g. long screw damage).",
        price: "$80 - $150"
      },
      {
        name: "No power, not charging, etc",
        description: "Not charging, battery stays at 1% or 5%, rapid battery drain (1-5% battery drain per minute usually). This is a typical repair job on many iPhones due to aftermarket chargers with incorrect voltage burning out the charging IC chip in the iPhones but can also happen from old age of device.",
        price: "$80 - $150"
      },
      {
        name: "iPhone front and rear camera not working",
        description: "Some cases are from liquid damage which burns out a micro filter which controls the front and rear camera. Sometimes this can also occur from impact on the device.",
        price: "$80 - $150"
      },
      {
        name: "Nexus 5, Samsung Galaxy S3/S4 boot loop repair",
        description: "Boot loop repair on these devices are usually caused by a faulty home button module. I can remove and replace your home button module with a brand new part which should fix the problem.",
        price: "$40"
      },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <section className="section" id="why-us">
      <div className="container">
        <h1 className="title is-size-3">Micro Soldering Services</h1>
        <h1 className="subtitle has-text-grey" style={{ fontSize: '0.8em' }}>Macbook / iPhone Motherboard (Logic Board) repairs vary in price. Please <a href="mailto:support@gelatotech.com">contact us</a> for quote.</h1>
        <div className="columns">
          <div className="column">
            <div className="why-container">
              {Object.keys(services).map((service, i) => {
                return (
                  <div style={{ marginBottom: '2em' }} key={i}>
                    <h1 className="subtitle">{services[service].name}</h1>
                    <div className={classes.root}>
                      {services[service].repairTypes.map(({ name, description, price }) => {
                        return (
                          <>
                            <Accordion>
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                              >
                                <Typography className={classes.heading}>{name} <span class="has-text-grey" style={{ marginLeft: '0.5em' }}>{price}</span></Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography style={{ fontSize: '0.8em' }}>
                                  {description}
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          </>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
    


              
                <div 
                  style={{ 
                    height: '5em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <h1 className="heading">
                    All other motherboard repairs not listed here please contact me only during business hours for price quote *Fastest response through text or email.
                  </h1>
                </div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Typography className={classes.heading}>Terms &amp; Conditions</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Diagnostics for micro-soldering motherboard repairs takes a lot of time. I charge a $40.00 diagnostics fee if I cannot repair the device, no exceptions. There will not be a diagnostics fee for successful micro-soldering repair jobs, only the repairs I cannot fix will be charged a $40.00 diagnostics fee. <br />
                      If a device is not repairable, the customer has the option to donate their damaged device to "Gelatotech". If a device is donated then "Gelatotech" will waive the $40.00 diagnostics fee no matter the condition of the device. <br />
                      All successful micro-soldering repairs come with a 3 month warranty, excluding any water damaged device. <br /><br />
                      <font color="red">
                        ** Please note: micro-soldering work requires a lot of high heat from tools to complete a job. Not all devices are repairable and in rare cases high heat can cause further damage to a device. By getting your device repaired through "Gelatotech" you agree to all terms and conditions. <br />
                        <br />
                        Should your device become non-repairable or become further damaged during repair, "Gelatotech" will not be held responsible for further damages that may make your device become permanently damaged. "Gelatotech" will not reimburse or replace any device for any reason. The customer is fully responsible for their device and/or responsible for replacing their own device at their own expense. <br />
                      </font>
                      Permanent damage can cause you to lose all data on your device in which "Gelatotech" will not be responsible and cannot recover your data.<br />
                      <br />
                      "Gelatotech" cannot guarantee any motherboard work at all. "Gelatotech" cannot guarantee data recovery should your device become permanently damaged during repair. <br />
                      <br />
                      If your device was working but only had a minor issue that needed soldering work and your device becomes permanently damaged during repair "Gelatotech" will not be held responsible and will not reimburse or replace your device. All repairs are entirely at the customers own risk. <br />
                      <br />
                      <font size="+1">Board level repairs do not come cheap and are not a "quick" repair. It takes special equipment, software and skill to diagnose and do this type of repair. There are only a handful of people in the Bay Area who know how to do this type of work professionally! <br />
                      <br />
                      Repairs can take anywhere from 2-7 business days to repair and in rare cases 1-3 months. If you cannot wait that long, please do not contact me. I will not do rush jobs for anyone. Some repairs take longer than others and I do them all in the order I receive them.</font><br />
                      <br />
                      Prices above are only for "No Previous Repair Attempt" meaning the phone has never been opened by any third party before. 9/10 times when it is a previous repair attempt, I am left with a bigger mess than necessary and many times more damage to try and repair.<br />
                      <br />
                      I charge more for all "previous repair attempt" jobs (prices are not listed here). Even if it was just a simple screen replacement gone wrong, many times these are the worst types of damages to the phone (long screw damage). Contact me for quote.<br />
                      <br />
                      <br />
                      Cash, Credit, Cash App, Paypal and Venmo accepted<br />
                      Call or text <a href="tel:4155177897">(415) 517-7897</a> to set up appointment (fastest response is through text). Visit <a href="https://gelatotech.com">Gelatotech.com</a> for all other iPhone repairs and pricing <br />
                    </Typography>
                  </AccordionDetails>
                </Accordion>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}