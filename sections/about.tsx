import React from 'react';
import Heading from "@/components/heading/heading";
import MeCard from "@/components/cards/me";
import ResumeCard from "@/components/cards/resume";
import BackgroundCard from "@/components/cards/background";
import Gallery from "@/components/ui/gallery";
import ExperienceCard from "@/components/cards/experience";
import EducationCard from "@/components/cards/education";
import CertificationCard from "@/components/cards/certifications";
import CoursesCard from "@/components/cards/courses";
import StackCard from "@/components/cards/stack";

const AboutSection = () => {
    return (
        <div className="pt-24 px-3 lg:px-8">
            <Heading number="02" title_1="About" title_2="Me"/>
            <div className="space-y-4 py-8">
                <div className="space-y-4 grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
                    {/*My card*/}
                    <div className="space-y-4">
                        <MeCard/>
                        <ExperienceCard/>
                        <EducationCard/>
                        <div className="2xl:hidden"><Gallery/></div>
                        <CertificationCard/>
                    </div>
                    <div className="space-y-4">
                    <ResumeCard/>
                        <StackCard/>

                    </div>
                    <div className="space-y-4">
                        <BackgroundCard/>
                        <CoursesCard/>
                        <div className="hidden 2xl:flex ">
                            <Gallery/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;