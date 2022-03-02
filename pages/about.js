import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/about.module.scss";
import Image from "next/image";
import { NextSeo } from "next-seo";

import HeroImage from "../public/photos/hero-images/candles-and-stones.jpg";

export default function Home(props) {
    return (
        <>
            <NextSeo
                title="About Carytown Massage  - Massage Richmond, VA"
                description="Established in 2020, we focus on providing Richmond with therapeutic massage services to help improve their health conditions and overall well-being."
                canonical="https://carytownmassage.com/"
                openGraph={{
                    url: "https://carytownmassage.com/",
                    title: "About Carytown Massage  - Massage Richmond, VA",
                    description: "Established in 2020, we focus on providing Richmond with therapeutic massage services to help improve their health conditions and overall well-being.",
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
                        alt=""
                    ></Image>
                </div>
                <div className={styles.container}>
                    <div className={styles.aboutBody}>
                        <h4>
                            About
                        </h4>
                        <h5>We focus on providing Richmond with massage services.</h5>
                        <p>
                            Carytown Massage will help you escape from today’s erratic and busy life. Our qualified team of licensed massage therapists offers a fully tailored treatment that is suitable for each client’s needs. Our experience enables us to create and deliver the right program for everyone. You can be confident that working with us will be easy and stress-free.
                        </p>
                        <p>
                            Massage therapy helps you relax and rejuvenate to the fullest and is part of a profound, relaxing experience. At the beginning of every appointment, we focus on the source of the problem and develop a personalized treatment plan for future sessions. Our goal is to make the most from the massage therapy we offer and help you reach your health goals as fast as possible, leaving you feeling renewed and full of energy.
                        </p>
                        <p>Established in 2020, we focus on providing people in Richmond with remedial and therapeutic massage services to help improve their health conditions and overall wellbeing. We offer an urban retreat to relax and rejuvenate your senses under the healing hands of our certified team of professionals. Our extensive variety of massage and therapeutic treatments are specifically designed to soothe the mind and body while creating a rejuvinating experience.</p>
                        <p>Each massage is tailored toward your needs specializing in Swedish, Therepeutic, Deep Tissue, Trigger-point, and Prenatal Massage!</p>
                        <span style={{ fontWeight: 600 }}>- Anthony Battiston, LMT/Owner</span>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
