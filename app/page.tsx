"use client";

import dynamic from "next/dynamic";
import useSound from 'use-sound';
import { useEffect } from "react";
import Button from "@/components/ui/button";  // Ensure this is the correct import path

import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";

const WaterWaveWrapper = dynamic(
    () => import("@/components/visualEffects/water-wave-wrapper"),
    { ssr: false }
);

export default function Home() {
    // const [play, { stop }] = useSound('/assets/music/TheWeeknd_AfterHours.mp3', {
    //     volume: 0.5,
    //     autoplay: true  // This will start playing the music automatically when the component mounts
    // });
    //
    // useEffect(() => {
    //     // Play the sound right away on component mount
    //     play();
    //
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
                // <div className="flex justify-center items-center mt-4">
                //     <Button onClick={stop}>Stop</Button>  {/* Only stop function is used here */}
                // </div>
                <div className="pb-8">
                    <LandingSection />
                    <FeaturedSection />
                    <AboutSection />
                    <ContactSection />

                </div>
            )}
        </WaterWaveWrapper>
    );
}
