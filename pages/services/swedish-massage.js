import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/swedish-massage.module.scss";
import Image from "next/image";

import HeroImage from "../../public/photos/hero-images/swedish-massage.jpg";

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
                    <div className={styles.swedishMassageBody}>
                        <h4>
                            Swedish Massage
                        </h4>
                        <h5>
                            Break free from your busy schedule with a Swedish Massage
                        </h5>
                        <p>
                            One of the most requested massage treatments is the Swedish Massage due to its advantageous properties. It is utterly relaxing and leaves the person feeling completely at ease. Swedish massage is the gentlest of all the massages. Its benefits include increased flexibility, stress relief, improved circulation, and skin nourishment.
                        </p>
                        <p>
                            Our licensed therapists ensure that every client is comfortable and thoroughly understands their needs before beginning a session. If you feel any discomfort then our therapist will adjust the pressure to what is right for you. We will do our very best to ensure that you experience a great Swedish massage. So, make an appointment and prepare yourself for the most popular and soothing massage.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
