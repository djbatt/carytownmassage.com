import Header from "../components/header";
import styles from "../styles/index.module.scss";
import Image from "next/image";

import HeroImage from "../public/photos/hans-vivek-UiMkBvDQSAA-unsplash.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.heroImage}>
          {/* <Image src={HeroImage} layout="fill" objectFit="cover"></Image> */}
        </div>
      </main>
      <footer></footer>
    </>
  );
}
