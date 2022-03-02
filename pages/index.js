import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

import HeroImage from "../public/photos/hero-images/massage-therapy-richmond.jpg";

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
      <NextSeo
        title="Carytown Massage - Massage Richmond, VA"
        description="Carytown is located in the heart of Richmond, VA. Massage will help you escape from today's erratic and busy life. Massage Therapy Richmond VA."
        canonical="https://carytownmassage.com/"
        openGraph={{
          url: "https://carytownmassage.com/",
          title: "Carytown Massage - Massage Richmond, VA",
          description: "Carytown is located in the heart of Richmond, VA. Massage will help you escape from today's erratic and busy life. Massage Therapy Richmond VA.",
          site_name: "Carytown Massage",
        }}
      />
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
            alt="Candle lit in relaxing place"
          ></Image>
        </div>
        <div className={styles.container}>
          <div className={styles.indexBody}>
            <h4 className={styles.indexHeading}>
              Carytown Massage is located in the heart of Richmond, VA.
            </h4>
            <h5>Request an appointment online or over the phone.</h5>
            <p>
              We wish to provide you the most high-quality experience we can, in a safe, clean environment. Our licensed professionals will help you relax and integrate massage into a part of your preventative health routine.
            </p>
            <p>
              We can accommodate couples massage by request but require at least one week notice to book. Online booking is not available for this service.
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
                    alt="Picture of swedish massage"
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
                    alt="Picture of therapeutic massage"
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
                    alt="Picture of sports massage"
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
