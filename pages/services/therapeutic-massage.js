import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/therapeutic-massage.module.scss";
import Image from "next/image";
import { NextSeo } from "next-seo";

import HeroImage from "../../public/photos/hero-images/therapeutic-massage.jpg";

export default function Home(props) {
    return (
        <>
            <NextSeo
                title="Best therapeutic massage in Richmond - Massage Richmond, VA"
                description="Therapeutic massage is extremely healing and refreshing. Take a break from your busy life to experience this blissful escape in Richmond VA."
                canonical="https://carytownmassage.com/"
                openGraph={{
                    url: "https://carytownmassage.com/",
                    title: "Best therapeutic massage in Richmond - Massage Richmond, VA",
                    description: "Therapeutic massage is extremely healing and refreshing. Take a break from your busy life to experience this blissful escape in Richmond VA.",
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
                        alt="Picture of therapeutic massage"
                    ></Image>
                </div>
                <div className={styles.container}>
                    <div className={styles.therapeuticMassageBody}>
                        <h4>
                            Therapeutic Massage
                        </h4>
                        <h5>Rejuvenate your body with massage therapy.</h5>
                        <p>
                            Our therapeutic massage reaches the deep layers of the targeted muscle and relaxes the body. The right therapeutic massage, paired with a peaceful setting will result in a heavenly experience. The benefits start almost instantly; the relaxing of muscles, better blood circulation, increase in oxygen levels, and the break down of knots.
                        </p>
                        <p>
                            A therapeutic massage is extremely healing and refreshing. Our goal is to melt away all of your muscle tension and increase blood flow.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
