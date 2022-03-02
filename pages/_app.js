// Google Analytics
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

// Default SEO
import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";
import DefaultSeoConfig from "../next-seo.config.js";

// Global CSS
import "../styles/global.scss";
// Inline this css

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...DefaultSeoConfig} />
      <LocalBusinessJsonLd
        type="HealthAndBeautyBusiness"
        id="https://carytownmassage.com"
        name="Carytown Massage"
        description="Massage therapy in Richmond, VA."
        url="https://carytownmassage.com"
        telephone="+18044242607"
        address={{
          streetAddress: '3316 West Cary Street',
          addressLocality: 'Richmond',
          addressRegion: 'VA',
          postalCode: '23221',
          addressCountry: 'US',
        }}
        geo={{
          latitude: "37.55462875256322",
          longitude: "-77.48456310462822",
        }}
        areaServed={[
          {
            geoMidpoint: {
              latitude: "37.55462875256322",
              longitude: "-77.48456310462822",
            },
            geoRadius: '40000',
          },
        ]}
      />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        id="gtagSrc"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtagDangerouslySet"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
