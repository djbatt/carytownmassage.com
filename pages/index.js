import Header from "../components/header";
import styles from "../styles/index.module.scss";
import Image from "next/image";
import Link from "next/link";

import HeroImage from "../public/photos/massage-therapy-candle.jpg";

import SwedishMassageImage from "../public/photos/swedish-massage.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.heroImage}>
          <Image src={HeroImage} layout="responsive" objectFit="cover" placeholder="blur" priority></Image>
        </div>
        <div className={styles.container}>
          <div className={styles.bannerDiv}>
            <h4 className={styles.bannerHeading}>
              Massage On Main is located in the heart of Richmond, VA.
            </h4>
          </div>
          <div className={styles.indexBody}>
            <p>Request an appointment online or over the phone.</p>
            <p>
              We're located at 2602 West Main st. in the Imago Salon building!{" "}
            </p>
            <p>
              There is parking in the back and additional parking in the parking
              lot behind Main and Floyd and Robinson and Davis.{" "}
            </p>
            <p>
              Any missed calls will be returned usually within the hour, and
              feel free to text us about booking or with any questions as well!
            </p>
            <p>
              We wish to provide you the most high-quality experience we can in
              a safe, clean environment. Let our licensed professionals help you
              relax and be a part of your preventative health routine!
            </p>
            <p>Now Offering Sugar Foot Scrub as of 4/7/2021.</p>
            <p>
              We can accomadate Couples Massage by request but require at least
              a weeks notice so online booking is not availble for this service!
            </p>
            <p>
              Please call 804-424-2607 in order to book for a Couples Massage!
            </p>
            <p>Gift Cards Available on the booking page as of 8/20/2021.</p>
            <p>Check our "Booking" page for prices and full availability!</p>
          </div>
          <div className={styles.cardGrid}>
            <div className={styles.cardOne}>
              <Link href="/about"><a>
                <Image src={SwedishMassageImage} layout="fill" objectFit="cover" placeholder="blur">

                </Image>
                </a></Link>
            </div>
            <div className={styles.cardTwo}>
              <Link href="/services/therapeutic-massage"><a></a></Link>
            </div>
            <div className={styles.cardThree}>
              <Link href="/services/sports-massage"><a></a></Link>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
