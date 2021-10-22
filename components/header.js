import Link from "next/link";
import Image from "next/image";
import MassageOnMainLogo from "../public/Massage-On-Main-Logo.svg";
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
          src={MassageOnMainLogo}
          layout="responsive"
          width={291}
          height={100}
          priority
        ></Image>
      </a>
    );
  });

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
            color="#158ba8"
          />
        </div>
        <div className={styles.collapsingDiv} style={isOpen ? {display: "flex"} : {display: "none"}}>
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
              <span>Anthony@massageonmainrva.com</span>
            </li>
            <li className={styles.contactListItem}>
              <span>2602 West Main St.</span>
            </li>
            <li className={styles.contactListItem}>
              <span>Richmond, Virginia 23220</span>
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
