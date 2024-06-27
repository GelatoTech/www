import Head from "next/head";

export default function Sitemap() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <link rel="alternate" href="https://gelatotech.com/sitemap" hreflang="en-us" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Gelatotech's Comprehensive Sitemap for Easy Navigation
                </title>
                <meta name="description" content="Explore Gelatotech's comprehensive sitemap, which provides easy navigation so you can quickly and efficiently find all the pages and resources you need." />
            </Head>
            <section style={{ marginTop: '10em', height: '90vh' }}>
                <div className="container">
                    <h1 className="title is-3">Sitemap</h1>
                    <div className="columns is-multiline">
                        <div className="column is-4">
                            <h2 className="subtitle is-4">Main Pages</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/faq">faq</a></li>
                                <li><a href="/legal">90 Day Warranty</a></li>
                                <li><a href="/sitemap">Sitemap</a></li>
                            </ul>
                        </div>
                        <div className="column is-4">
                            <h2 className="subtitle is-4">Service</h2>
                            <ul>
                                <li><a href="/mail-in">Mail-In Repair</a></li>
                                <li><a href="/microsoldering">Micro soldering</a></li>
                                <li><a href="/?m=iphone#repair">iPhone Repair</a></li>
                                <li><a href="/ipad">iPad Repair</a></li>
                                <li><a href="/apple-watch">Apple Watch Repair</a></li>
                                <li><a href="/samsung">Samsung Repair</a></li>
                                <li><a href="/google-pixel">Google Pixel Repair</a></li>
                            </ul>
                        </div>
                        <div className="column is-4">
                            <h2 className="subtitle is-4">Blog</h2>
                            <ul>
                                <li><a href="/blog/find-your-ipad-model">Find Your iPad Model</a></li>
                                <li><a href="/blog/quality-standards">Quality Standards</a></li>
                                <li><a href="/blog/battery-tips">Top 3 Battery Tips</a></li>
                                <li><a href="/blog/screen-repair">Cost of iPhone Repair in SF</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
