import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


export default function FindYourIpadModel() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Discover Your iPad Model Name or Number: The Ultimate Expert Guide</title>
        <meta
          name="description"
          content="Our comprehensive guide and step-by-step instructions will help you quickly and easily find your iPad's model number and other key details. Check out our blog!" />
        <meta
          itemProp="name"
          content="Identify Your iPad Model | Gelatotech"
        />
        <meta
          itemProp="description"
          content="Find out your iPad model quickly with our straightforward guide. Whether for repairs or curiosity, we make it easy to know your iPad inside and out."
        />
        <meta itemProp="image" content="/images/ipad-model-guide.jpeg" />
        <meta property="og:url" content="https://www.gelatotech.com/blog/find-your-ipad-model" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Discover Your iPad Model Name or Number: The Ultimate Expert Guide"
        />
        <meta
          property="og:description"
          content="Our comprehensive guide and step-by-step instructions will help you quickly and easily find your iPad's model number and other key details. Check out our blog!"
        />
        <meta property="og:image" content="/images/ipad-model-guide.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Discover Your iPad Model Name or Number: The Ultimate Expert Guide"
        />
        <meta
          name="twitter:description"
          content="Our comprehensive guide and step-by-step instructions will help you quickly and easily find your iPad's model number and other key details. Check out our blog!"
        />
        <meta name="twitter:image" content="/images/ipad-model-guide.jpeg" />
        <meta
          name="keywords"
          content="iPad Model, Identify iPad, iPad Repair, Gelatotech, Find iPad Model, iPad Guide, iPad Information"
        />
        <meta
          name="google-site-verification"
          content="otWUpfaXKjZHurqJg8KCSsabxvEJ9380Jprvwzazg8g"
        />
        <link rel="stylesheet" href="/stylesheets/battery.css" />
        <link rel="alternate" href="https://gelatotech.com/blog/find-your-ipad-model" hreflang="en-us" />

      </Head>
      <section id="blog">
        <div className="container blog-container">
          <h1 className="title is-3">How to find your iPad model number 🔎</h1>
          <p style={{ marginBottom: "2em", fontSize: "1em" }}>
            If you’re looking to repair your iPad you’ll quickly have to answer
            the question, “which iPad do I have?” It’s not always as simple as
            it might sound, so if you’re not sure which model you have, you’re
            not alone. Please note that we loathe the naming convention Apple
            has chosen for the iPads as much as you do. It’s difficult to be
            sure which iPad you have but if you need to look that information up
            here’s how to do so.
          </p>
          <h2 className="title is-4">Find your Model Name or Number</h2>
          <p style={{ fontSize: "1em", marginBottom: "1em" }}>
            The easiest way to determine your iPad model is to go to the
            Settings app > General > About. You’ll see the friendly name (eg,
            iPad mini 6, iPad Pro (11-inch)) on the line labeled Model Name.
            This is a recent addition to iOS, so if you don’t see this option
            you may be on an older version of iOS.
          </p>
          <img
            src="/images/ipad-model-1.jpeg"
            alt="iPad Settings app"
            width={800}
            className="blog-img"
          />
          <style jsx global>{`
            .blog-img {
              border-radius: 10px;
            }
          `}</style>
          <br />
          <p style={{ fontSize: "1em", marginTop: "1em", marginBottom: "1em" }}>
            If your Model name isn’t showing, or if you want to know exactly
            which iPad you have (beyond just the name), go down a line to the
            Model Number line. You’ll probably see something like MTFL2LL/A at
            first, which doesn’t help much. This is the Part Number, but what
            you really want is the Model Number (no, we aren’t joking, it really
            is this complicated). To see that, simply tap on the line:
          </p>
          <img
            src="/images/ipad-model-2.gif"
            alt="iPad Charging Port Repair"
            width={800}
            className="blog-img"
          />
          <h2 className="title is-4" style={{ marginTop: "2em" }}>
            How to find the serial number on your iPad without looking on the
            iPad settings?
          </h2>
          <h2 className="title is-5" style={{ marginBottom: "0.3em" }}>
            On the back of your iPad
          </h2>
          <ol style={{ marginLeft: "1.5em", marginBottom: "2em" }}>
            <li>Flip your iPad over</li>
            <li>
              Look for the serial number in small print as shown in the image
              below
            </li>
            <li>
              If it’s difficult to read or worn off, follow the steps below for
              finding your serial number in settings
            </li>
          </ol>
          <img
            src="/images/ipad-model-3.webp"
            alt="Fix iPadScreen San Francisco"
            width={800}
            className="blog-img"
          />
          <h2 className="title is-4" style={{ marginTop: "2em" }}>
            Find your iPad Model Name
          </h2>
          <p style={{ fontSize: "1em", marginBottom: "1em" }}>
            Once you’ve found your 5-digit iPad Model Mumber, reference this
            chart to find out which one it is.
          </p>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Introduced</th>
                <th>Model Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>iPad Mini (original)</td>
                <td>2012</td>
                <td>A1432 (WiFi) or A1454, A1455 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Mini (2nd Gen)</td>
                <td>2013</td>
                <td>A1489 (WiFi) or A1490, A1491 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Mini (3rd Gen)</td>
                <td>2014</td>
                <td>A1599 (WiFi) or A1600 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Mini (4th Gen)</td>
                <td>2015</td>
                <td>A1538 (WiFi) or A1550 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Mini (5th Gen)</td>
                <td>2019</td>
                <td>A2133(WiFi) or A2124, A2126, A2125 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Mini (6th Gen)</td>
                <td>2021</td>
                <td>A2567 (WiFi), A2568, A2569 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Air (original)</td>
                <td>2013</td>
                <td>A1474 (WiFi) or A1475, A1476 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Air (2nd Gen)</td>
                <td>2014</td>
                <td>A1566 (WiFi) or A1567 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Air (3rd Gen)</td>
                <td>2019</td>
                <td>A2152 (WiFi) or A2123, A2153, A2154 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Air (4th Gen)</td>
                <td>2020</td>
                <td>A2316 (WiFi) or A2324, A2325 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Air (5th Gen)</td>
                <td>2022</td>
                <td>A2588 (WiFi) or A2589, A2591 (cellular)</td>
              </tr>
              <tr>
                <td>iPad (original)</td>
                <td>2010</td>
                <td>A1219 (WiFi) or A1337 (cellular)</td>
              </tr>
              <tr>
                <td>iPad (2nd Gen)</td>
                <td>2011</td>
                <td>A1395 (WiFi) or A1396, A1397 (cellular)</td>
              </tr>
              <tr>
                <td>iPad (3rd Gen)</td>
                <td>2012</td>
                <td>A1416 (WiFi) or A1430, A1403 (cellular)</td>
              </tr>
              <tr>
                <td>iPad (4th Gen)</td>
                <td>2012</td>
                <td>A1458 (WiFi) or A1459, A1460 (cellular)</td>
              </tr>
              <tr>
                <td>iPad (5th Gen)</td>
                <td>2017</td>
                <td>A1822 (WiFi) or A1823 (cellular)</td>
              </tr>
              <tr>
                <td>iPad (6th Gen)</td>
                <td>2018</td>
                <td>A1893 (WiFi) or A1954 (cellular)</td>
              </tr>
              <tr>
                <td>iPad (7th Gen)</td>
                <td>2019</td>
                <td>A2197 (WiFi) or A2198, A2200 (cellular)</td>
              </tr>
              <tr>
                <td>iPad (8th Gen)</td>
                <td>2020</td>
                <td>A2270 (WiFi) or A2428, A2429, A2430 (cellular)</td>
              </tr>
              <tr>
                <td>iPad (9th Gen)</td>
                <td>2021</td>
                <td>A2602 (WiFi), A2604, A2603, A2605 (cellular)</td>
              </tr>
              <tr>
                <td>iPad (10th Gen)</td>
                <td>2022</td>
                <td>A2696 (WiFi), A2757, A2777 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Pro 9.7″ (original)</td>
                <td>2016</td>
                <td>A1673 (WiFi) or A1675 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Pro 10.5″ (original)</td>
                <td>2017</td>
                <td>A1701 (WiFi) or A1709, A1852 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Pro 11″ (original)</td>
                <td>2018</td>
                <td>A1980 (WiFi) or A2013, A1934, A1979 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Pro 11″ (2nd Gen)</td>
                <td>2020</td>
                <td>A22289 (WiFi) or A2068, A2230 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Pro 11″ (3rd Gen)</td>
                <td>2021</td>
                <td>A2377 (WiFi), A2459, A2301, A2460 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Pro 11" (4th Gen)</td>
                <td>2022</td>
                <td>A2759 (WiFi), A2435, A2761, A2762 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Pro 12.9" (original)</td>
                <td>2016</td>
                <td>A1584 (WiFi) or A1652 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Pro 12.9" (2nd Gen)</td>
                <td>2017</td>
                <td>A1670 (WiFi) or A1671, A1821 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Pro 12.9" (3rd Gen)</td>
                <td>2018</td>
                <td>A1876 (WiFi) or A2014, A1895, A1983 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Pro 12.9" (4th Gen)</td>
                <td>2020</td>
                <td>A2229 (WiFi) or A2069, A2232 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Pro 12.9" (5th Gen)</td>
                <td>2021</td>
                <td>A2378 (WiFi) or A2461, A2379, A2462 (cellular)</td>
              </tr>
              <tr>
                <td>iPad Pro 12.9" (6th Gen)</td>
                <td>2022</td>
                <td>A2436 (WiFi) or A2764, A2437, A2766 (cellular)</td>
              </tr>
            </tbody>
          </table>
          <h2 className="title is-4" style={{ marginTop: '3em', marginBottom: '0.3em' }}>Ready to repair your broken iPad?</h2>
          <p style={{ fontSize: "1em", marginTop: 0, parddingTop: 0 }}>
            iPad screen replacement only takes 30-60 minutes!
          </p>
          <div style={{ display: "flex", gap: '1em', marginTop: '1em' }}>
            <Link href="/ipad" passHref>
              <a className="btn btn-action">Book Online</a>
            </Link>
            <a className="btn btn-info" href="tel:4156219055">
              <FontAwesomeIcon style={{ width: '0.7em', marginRight: '0.3em' }} className="fas fa-phone" aria-hidden="true" icon={faPhone} />
              Book by Phone
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
