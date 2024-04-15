import React from 'react';
import Card from "@/components/ui/card";
import Image from "next/image";
import SignatureImg from "@/public/assets/images/me/signature.png";
import Button from "@/components/ui/button";
import {FaDownload} from "react-icons/fa";
import Socials from "@/components/ui/socials";

const ResumeCard = () => {
    return (
        <Card title="Resume" className="md:h-fit 2xl:h-fit">
            <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
                🔥 Who Am I?<br/>
                I'm your go-to software engineer, blending a fiery passion for backend technologies with a staunch
                commitment to software excellence. With a toolbox enriched by Python & Django, I specialize in sculpting
                scalable backend systems that are the backbone of complex web applications.
                <br/><br/>
                ✨ Ready to Elevate Your Web Experience?<br/>
                Let's infuse your projects with backend muscle, front-end sparkles, and a commitment to top-tier
                quality. Connect with me to bring precision, efficiency, and magic to your digital platforms.
                <br/><br/>
                🌐 Current Projects & Endeavors:<br/>
                My current venture involves a sophisticated Django web application that showcases my proficiency with
                advanced technologies & my dedication to continuous learning and improvement.
                <br/><br/>
            </p>
            <div >
                <Image
                    src={SignatureImg} alt="Loay Fayez">
                </Image>
            </div>
            {/*    Socials and resume btn*/}
            <div
                className="flex items-center justify-between absolute bottom-6 left-6 w-[calc(100%-3rem)] md:static md:w-full">
                {/*Socials*/}
                <Socials/>
                <Button className="text-xl xl:text-2xl font-medium text-primary-foreground mt-8 right-0 focus:outline-none focus:shadow-outline">
                    <FaDownload/>
                    Resume
                </Button>
            </div>
        </Card>
    );
};

export default ResumeCard;