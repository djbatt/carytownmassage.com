import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/privacy-policy.module.scss";
import Image from "next/image";
import { NextSeo } from "next-seo";
import markdownToHtml from "../lib/markdownToHtml";
import { getPageContent } from "../lib/api";
const markdownFile = "privacy-policy.md";

import HeroImage from "../public/photos/hero-images/candles-and-stones.jpg";

export default function Home(props) {
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
                        alt="Relaxing candles with hot stones and towel"
                    ></Image>
                </div>
                <div className={styles.container}>
                    <div className={styles.privacyPolicyBody}>
                        <h4 className={styles.indexHeading}>
                            {props.data.heading}
                        </h4>
                        <div dangerouslySetInnerHTML={{ __html: props.content }} />
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
