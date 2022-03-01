import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/services.module.scss";
import Image from "next/image";
import Link from "next/link";

import HeroImage from "../public/photos/hero-images/massage-therapy-services.jpg";

import SwedishMassageImage from "../public/photos/hero-images/swedish-massage.jpg";
import TherapeuticMassageImage from "../public/photos/hero-images/therapeutic-massage.jpg";
import SportsMassageImage from "../public/photos/hero-images/sports-massage.jpg";

import { forwardRef } from "react";

export default function Home(props) {
  const CardLink = forwardRef(({ onClick, href, children }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref} className={styles.cardLink}>
        {children}
      </a>
    );
  });

  CardLink.displayName = "CardLink";
  return (
    <>
      <Header />
      <main>
        <div className={styles.heroImage}>
          <Image
            src={HeroImage}
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
            width="100%"
            height="100%"
            priority
            alt=""
          ></Image>
        </div>
        <div className={styles.container}>
          <div className={styles.servicesBody}>
            <h4>
            Services
            </h4>
            <h5>We have a variety of massage services.</h5>
            <p>
            There are many benefits of massage, people enjoy a deep connection to their inner self, which allows for a new experience of self-awareness and comfort. In this modern-day technology-rich lifestyle of today, it is becoming increasingly necessary to learn to relax and regenerate. 
            </p>
          </div>
          <div className={styles.cardGrid}>
            <div className={styles.cardOne}>
              <Link href="/services/swedish-massage" passHref>
                <CardLink>
                  <Image
                    src={SwedishMassageImage}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    className={styles.cardImage}
                    alt=""
                  ></Image>
                  <p className={styles.cardBody}>Swedish Massage</p>
                </CardLink>
              </Link>
            </div>
            <div className={styles.cardTwo}>
              <Link href="/services/therapeutic-massage" passHref>
                <CardLink>
                  <Image
                    src={TherapeuticMassageImage}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    className={styles.cardImage}
                    alt=""
                  ></Image>
                  <p className={styles.cardBody}>Therapeutic Massage</p>
                </CardLink>
              </Link>
            </div>
            <div className={styles.cardThree}>
              <Link href="/services/sports-massage" passHref>
                <CardLink>
                  <Image
                    src={SportsMassageImage}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    className={styles.cardImage}
                    alt=""
                  ></Image>
                  <p className={styles.cardBody}>Sports Massage</p>
                </CardLink>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
