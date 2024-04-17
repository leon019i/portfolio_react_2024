"use client";
import Head from 'next/head'
import dynamic from "next/dynamic";
import {SpeedInsights} from "@vercel/speed-insights/next"

import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import {Analytics} from "@vercel/analytics/react";
import Footer from "@/sections/footer";

const WaterWaveWrapper = dynamic(
    () => import("@/components/visualEffects/water-wave-wrapper"),
    {ssr: false}
);


export default function Home() {
    // const [play, { stop }] = useSound('/assets/music/TheWeeknd_AfterHours.mp3', {
    //     volume: 0.5,
    //     autoplay: true  // This will start playing the music automatically when the component mounts
    // });

    // useEffect(() => {
    //     // Play the sound right away on component mount
    //     play();

    //     // Cleanup function to stop the music when the component unmounts
    //     return () => stop();
    // }, [play, stop]);  // Dependency array includes play and stop

    return (<>
            <Head>
                <title>Loay Fayez | Software & QA Engineer | Portfolio</title>
                <meta name="description"
                      content="Discover Loay Fayez's journey from a BSc in Computer Science & AI at Cairo University through roles in software QA and Django development. Explore my projects, read about my experiences and view my certifications."/>
                <meta name="keywords"
                      content="Loay Fayez, Software QA Engineer, QA Engineer, ISTQB, Django Developer, Python, JavaScript, Software Engineer, Backend Developer, Freelance Developer, Cairo University, Computer Science, Artificial Intelligence, Web Development, QA Testing"/>
                <meta property="og:title" content="Loay Fayez - Software QA & Software Engineer"/>
                <meta property="og:description"
                      content="Portfolio of Loay Fayez, showcasing skills in Software Engineering, QA, Django, and backend development alongside projects that highlight continuous learning and proficiency in modern technologies."/>
                <meta property="og:url" content="https://www.louay.live"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="https://www.louay.live/favicon.ico"/>
                <link rel="canonical" href="https://www.louay.live"/>
                <link rel="icon" href="/favicon.ico"/>

                {/* Replace with your actual OG image URL */}
                {/*<meta name="twitter:card" content="summary_large_image" />*/}
                {/*<meta name="twitter:title" content="Loay Fayez - Portfolio" />*/}
                {/*<meta name="twitter:description" content="Discover Loay Fayez's professional and personal projects through his official portfolio website. Click to learn more!" />*/}
                {/*<meta name="twitter:image" content="https://www.louay.live/twitter-og-image.jpg" />  /!* Replace with your actual Twitter image URL *!/*/}
            </Head>
            <WaterWaveWrapper
                imageUrl=""
                dropRadius="3"
                perturbance="3"
                resolution="2048"
            >
                {() => (
                    <div className="pb-8">
                        <Analytics/>
                        <SpeedInsights/>
                        <LandingSection/>
                        <FeaturedSection/>
                        <AboutSection/>
                        <ContactSection/>
                        <Footer/>
                    </div>
                )}
            </WaterWaveWrapper>
        </>
    );
}
