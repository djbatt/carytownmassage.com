import Link from "next/link";
import Image from "next/image";
import BrandLogo from "../public/Carytown-Massage-Logo.svg";
import { forwardRef, useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

//Styles
import styles from "../styles/header.module.scss";

export default function Header(props) {
  //Logo Anchor forwardRef
  const Logo = forwardRef(({ onClick, href, children }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref} className={styles.logoAnchor}>
        <Image
          src={BrandLogo}
          layout="responsive"
          width={291}
          height={100}
          priority
          alt=""
        ></Image>
      </a>
    );
  });

  Logo.displayName = "Logo";

  //Hamburger State
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoDiv}>
          <Link href="/" passHref>
            <Logo />
          </Link>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            label="Navigation Menu"
            color="#ff6f61"
          />
        </div>
        <div
          className={styles.collapsingDiv}
          style={isOpen ? { display: "flex" } : { display: "none" }}
        >
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/services">Services</Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/gift-cards">Gift Cards</Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="tel:804-424-2607">
                <a className={styles.phoneNumber}>(804) 424-2607</a>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link
                href="https://square.site/book/LH466QXPEW2KV/massage-on-main-llc-richmond-va"
                passHref
              >
                <a className={styles.booking}>Booking</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.contactList}>
            <li className={styles.contactListItem}>
              <div className={styles.spacer}></div>
            </li>
            <li className={styles.contactListItem}>
              <span>Anthony@carytownmassage.com</span>
            </li>
            <li className={styles.contactListItem}>
              <span>3316 West Cary St, StylePod, Unit 104</span>
            </li>
            <li className={styles.contactListItem}>
              <span>Richmond, Virginia 23221</span>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.mobileBookingDiv}>
        <Link
          href="https://square.site/book/LH466QXPEW2KV/massage-on-main-llc-richmond-va"
          passHref
        >
          <a className={styles.mobileBookingAnchor}>Booking</a>
        </Link>
      </div>
    </header>
  );
}
