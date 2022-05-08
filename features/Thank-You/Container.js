import { useRouter } from "next/router";
import Head from 'next/head';
import moment from 'moment';
import { MailInSteps } from "../../components/mail-in";

export default function ThankYou() {

  let { query: { n, mail, c, d, t } } = useRouter(); // name, is mail-in, is carry-in, date, time

  t = decodeURIComponent(t).toString();

  return(
    <div style={{ marginTop: '4em' }}>
      {
        mail
          ? (
            <div style={{ overflow: 'scroll' }}>
              <MailInSteps step={3} />
            </div>
          )
          : null
      }
      <div style={{ backgroundColor: 'gainsboro', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
      <Head>
        <title>Thank You | Gelatotech iPhone Repair</title>
      </Head>

      <div style={{ textAlign: 'center', width: '90vw' }}>
        <h1 style={{ fontSize: '2rem' }}>Thank{n ? 's, ' + n : ' you'}!</h1>
        <p style={{ fontSize: '1em' }}>
          {!mail && (c=='false') && (
            <div>
              You booked an on-demand repair for <strong>{moment(`${d} ${t}`).calendar()}</strong>.<br />
              A repair technician will be in touch with you shortly. <br />
            </div>
          )}
          {(c=='true') && (
            <div>
              You booked a carry-in repair for <strong>{moment(`${d} ${t}`).calendar()}</strong>.<br />
              Bring your device to <strong><a target="_blank" href="https://www.google.com/maps/@37.7735602,-122.391504,3a,29.8y,289.35h,91.65t/data=!3m6!1e1!3m4!1s5b-8jCZm9i_ADTz_DOg5Uw!2e0!7i16384!8i8192">1180 4th St San Francisco, CA</a></strong><br />
            </div>
          )}
          {mail && (
            <div>
              Once we receive your device, a technician will reach out to you via email with a repair estimate. <br />
            </div>
          )}
          <div style={{ marginTop: '1em' }}>
            In the meantime, check out our <a target="_blank" href="https://www.google.com/maps/place/Mobile+iPhone+Repair+SF+%7C+Gelatotech/@37.7738263,-122.3939658,17z/data=!4m7!3m6!1s0x808f7fd0f5b28c95:0x7f621c4f11f36a76!8m2!3d37.7738221!4d-122.3917718!9m1!1b1">Google</a> &amp; <a target="_blank" href="https://yelp.com/biz/gelatotech-on-demand-iphone-repair-san-francisco-7">Yelp</a> reviews!
            </div>
        </p>
      </div>
      
    </div>
    </div>
  )
}