"use client";

import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next"

import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import { Analytics } from "@vercel/analytics/react";

const WaterWaveWrapper = dynamic(
    () => import("@/components/visualEffects/water-wave-wrapper"),
    { ssr: false }
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

    return (
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
                    <LandingSection />
                    <FeaturedSection />
                    <AboutSection />
                    <ContactSection />
                </div>
            )}
        </WaterWaveWrapper>
    );
}
