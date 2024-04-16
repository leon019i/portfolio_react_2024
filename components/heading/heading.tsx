import React, { FC } from 'react';
import SvgCurve from "@/components/visualEffects/svg-curve";
import { HeadingAnimatedSvg } from "@/components/heading/heading-animated-svg";

interface HeadingProps {
    number: string;
    title_1: string;
    title_2: string;
}

const Heading: FC<HeadingProps> = ({ number, title_1, title_2 }) => {
    return (
        <div className="relative my-10 px-8 z-20">
            {/* Number */}
            <div
                className="outline-none flex flex-col justify-start shrink-0 opacity-5 transform top-[-8vw] lg:top-[-6vw] w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
                <h2 className="font-pixel text-[10vw] lg:text-[9vw] xl:text-[180px] text-center text-primary-foreground relative">
                    <span className="bg-clip-text text-transparent p-4">{number}</span>
                </h2>
            </div>
            {/* Heading text wrapper */}
            <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
                <p className="text-[17vw] sm:text-[12vw] md:text-[9vw]  leading-none text-primary-foreground mr-3">
                    {title_1}
                </p>
                <HeadingAnimatedSvg text="LEARN MORE ABOUT OUR FEATURED PROJECTS" />
                <p className="text-[17vw] sm:text-[12vw] md:text-[9vw] leading-none text-primary-foreground italic">
                    {title_2}
                </p>
            </div>
            {/* Svg curve */}
            <SvgCurve />
        </div>
    );
};

export default Heading;
