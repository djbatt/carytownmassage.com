import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/gift-cards.module.scss";
import Image from "next/image";
import Link from "next/link";

import HeroImage from "../public/photos/hero-images/good-vibes-only.jpg";

export default function Home(props) {
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
                    <div className={styles.giftCardsBody}>
                        <h4>
                            Gift Cards
                        </h4>
                        <h5>The gift of relaxation and wellness is great for any special occasion.</h5>
                        <p>
                            Send your love to your family and friends by giving them gift cards from Carytown Massage. It’s a sign of how much you care. Now, your friends and family can enjoy good health and happiness as they get treated to one of our custom massages.
                        </p>
                        <p>
                            To purchase a gift card you can click on the link below and choose any of our gift cards to fit the occasion.
                        </p>
                        <div className={styles.giftCardDiv}>
                            <Link
                                href="https://squareup.com/gift/ML8B3JG9401F6/order"
                                passHref
                            >
                                <a className={styles.giftCardAnchor}>Purchase Here</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
