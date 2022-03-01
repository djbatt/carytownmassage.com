import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/sports-massage.module.scss";
import Image from "next/image";

import HeroImage from "../../public/photos/hero-images/sports-massage.jpg";

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
                    <div className={styles.sportsMassageBody}>
                        <h4>
                            Sports Massage
                        </h4>
                        <h5>Massage for runners, cyclists, and athletes</h5>
                        <p>
                            One of our most popular massages is the Sports massage for athletes and sports enthusiasts to promote better muscle performance.
                        </p>
                        <p>
                            Moreover, it helps to prevent injury, muscle damage, and progress quick recovery. We ensure that our clients are comfortable before beginning each session. Our professional therapists are equipped to release stiffness and muscle pain.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
