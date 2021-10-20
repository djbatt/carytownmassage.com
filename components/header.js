import Link from "next/link";
import Image from "next/image";
import MassageOnMainLogo from "../public/Massage-On-Main-Logo.svg";
import { forwardRef } from "react";
import styles from "../styles/header.module.scss";

export default function Header(props) {
  const Logo = forwardRef(({ onClick, href, children }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        style={{
          width: "fit-content",
          height: "fit-content",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div className={styles.logoContainer}>
          <Image
            src={MassageOnMainLogo}
            layout="responsive"
            height="100"
            width="291"
            priority
          ></Image>
        </div>
      </a>
    );
  });
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <Logo />
        </Link>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/">About</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/">Services</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/">
              <a className={styles.phoneNumber}>(804) 424-2607</a>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/">
              <a className={styles.booking}>Booking</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
