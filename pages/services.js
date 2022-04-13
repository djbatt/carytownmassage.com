import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/services.module.scss";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import markdownToHtml from "../lib/markdownToHtml";
import { getPageContent } from "../lib/api";
const markdownFile = "services.md";

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
      <NextSeo
        title={props.data.seo_title}
        description={props.data.seo_description}
        canonical="https://carytownmassage.com/"
        openGraph={{
          url: "https://carytownmassage.com/",
          title: props.data.seo_title,
          description: props.data.seo_description,
          site_name: props.data.seo_site_name,
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
            alt="Lady getting a scalp massage"
          ></Image>
        </div>
        <div className={styles.container}>
          <div className={styles.servicesBody}>
            <h4 className={styles.indexHeading}>
              {props.data.heading}
            </h4>
            <h5>{props.data.sub_heading}</h5>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
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


export async function getServerSideProps({ params }) {
  const markdown = getPageContent(markdownFile);

  const data = markdown.data;
  const content = await markdownToHtml(markdown.content || '')

  //console.log(content);

  return {
    props: {
      data: data,
      content: content
    },
  }
}
