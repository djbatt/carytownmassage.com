import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/privacy-policy.module.scss";
import Image from "next/image";
import { NextSeo } from "next-seo";

import HeroImage from "../public/photos/hero-images/candles-and-stones.jpg";

export default function Home(props) {
    return (
        <>
        <NextSeo
            title="Privacy Policy - Massage Richmond, VA"
            description="We have prepared this policy to give you notice. This notice applies only to Carytown Massage and not to any other sites with which we link."
            canonical="https://carytownmassage.com/"
            openGraph={{
                url: "https://carytownmassage.com/",
                title: "We have prepared this policy to give you notice. This notice applies only to Carytown Massage and not to any other sites with which we link.",
                description: "Privacy Policy - Massage Richmond, VA",
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
                        alt="Relaxing candles with hot stones and towel"
                    ></Image>
                </div>
                <div className={styles.container}>
                    <div className={styles.privacyPolicyBody}>
                        <h4>
                            Privacy Policy
                        </h4>
                        <p>
                            Carytown Massage respects your privacy. We have prepared this policy to give you notice of the information we collect, what we do with it, and how to review, correct, change or delete personally identifiable information that you provide to us. This notice applies only to Carytown Massage and not to any other sites with which we link. We may change this policy from time to time, so you should review this site for updates.
                        </p>
                        <h5>Information we collect</h5>
                        <p>
                            Carytown Massage may request a person or an entity applying for an account provide certain personal information (such as their name, email address, postal address etc.) in connection with various services offered on our site. If you contact us directly, we may keep a copy of the email and your email address.
                        </p>
                        <p>
                            We also collect anonymous user information such as the date and time of your visit, your browser type, the search terms you use, and the links that you click through. This information is accumulated anonymously and is used to analyze trends and gather aggregated user information.
                        </p>
                        <h5>What happens to your information</h5>
                        <p>
                            Our purpose in collecting information from you is to help us provide you with better service, such as notifications about Carytown Massage special offers and Carytown Massage promotions, and to improve the ease of use and efficiency of our services. We will not use or disclose this information except as stated in this policy. We may use the information to contact you directly. We may share information with companies that are affiliated with Carytown Massage and any such companies will follow privacy practices at least as protective as those described here.
                        </p>
                        <p>
                            We may hire other companies to provide certain services, and will only share the personal information they need to provide the services for which we contract. Such companies are required to maintain the confidentiality of any such information.
                        </p>
                        <p>
                            We may access and/or disclose your personal information if we deem it necessary to do so in order to: (a) comply with legal requirements or proceedings, (b) protect or defend our rights or property including without limitation compliance with our Terms of Use, or (c) protect personal or public safety. This action may include exchanging information with relevant organizations and authorities for the purposes of fraud detection or protection, or in other situations involving suspicious or illegal activities.
                        </p>
                        <h5>Cookies and web beacons</h5>
                        <p>
                            For account management purposes and like most sites, Carytown Massage uses cookies, web beacons, and related technology. Cookies are data files stored on your computer that identify you as a unique user. Cookies, web beacons and the like enable us to track user trends, preferences and patterns to better understand our user base and to improve the quality of our service. Cookies also store information on your computer to save you time by eliminating the need to repeat certain processes.
                        </p>
                        <p>
                            Carytown Massage web pages may contain content and ads from third parties that track users in ways that are different from those described above. You must review each such party’s privacy policy to determine what information they collect and how they use it.
                        </p>
                        <h5>Links to other sites</h5>
                        <p>
                            Carytown Massage web pages may contain links to other sites. These sites may send their own cookies to users. Since we do not control these sites; we are not responsible or liable for the privacy practices or content of such sites.
                        </p>
                        <p>
                            We may access and/or disclose your personal information if we deem it necessary to do so in order to: (a) comply with legal requirements or proceedings, (b) protect or defend our rights or property including without limitation compliance with our Terms of Use, or (c) protect personal or public safety. This action may include exchanging information with relevant organizations and authorities for the purposes of fraud detection or protection, or in other situations involving suspicious or illegal activities.
                        </p>
                        <h5>Busines transitions</h5>
                        <p>
                            If Carytown Massage goes through a business transition such as a merger, acquisition or sale of assets, it is very likely that your personal information will be included as a transferred asset.
                        </p>
                        <h5>Children under 13</h5>
                        <p>
                            Children under the age of 13 are not permitted to register with us. We do not knowingly collect personally identifiable information or offline personal contact information from users under 13 years old, or knowingly use or share with third parties information from users under 13 years old.
                        </p>
                        <h5>Additional Questions?</h5>
                        <p>
                            Contact us any time with any questions you may have regarding our privacy statement.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
