// TimeLine

import React from "react";
import {FiArrowUpRight} from "react-icons/fi";


interface TimelineProps {
    children?: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
    return (
        <div className="flex flex-col gap-y-6">
            {children}
        </div>
    );
}


//Timeline item----------------------------------------------------------------------------------------

interface TimelineItemProps {
    date: string;
    title: string;
    subTitle: string;
    link?: string;
    tag?: string;
    isCourse?: boolean;


}

export const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, subTitle, isCourse, link, tag }) => {
    return (
        <div className="flex flex-wrap gap-12 min-h justify-start relative text-base sm:text-md">
            {/* Date Timeline */}
            <div className="h-auto flex-none whitespace-pre" style={{ width: `${isCourse ? "0" : "auto"}` }}>
                <p className="text-secondary-foreground">{date}</p>
            </div>
            {/* Right side */}
            <div className="flex gap-x-2" style={{ transform: `${isCourse ? "translateX(-45px)" : "none"}` }}>
                <div className="flex flex-col gap-y-0.5">
                    {/* Title */}
                    <div className="break-words whitespace-pre">
                        <p className="leading-6 font-medium">{title}</p>
                    </div>
                    {/* Subtitle */}
                    <div className="flex items-center gap-2 w-fit text-secondary-foreground hover:text-blue-joust cursor-pointer link">
                        {link ? <a href={link} target="_blank" rel="noopener noreferrer">
                                <Body subTitle={subTitle} tag={tag} link={link} /></a> :
                            <Body subTitle={subTitle} tag={tag} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


//Timeline item Body----------------------------------------------------------------------------------------

interface BodyProps {
    subTitle: string;
    tag?: string;
    link?: string;
}

const Body: React.FC<BodyProps> = ({ subTitle, tag, link }) => {
    return (
        <div className="flex items-center">
            <p className="text-lg font-normal leading-6 mt-1">{subTitle}</p>
            {link && <FiArrowUpRight className="text-lg" />}
            {tag && (
                <div className="ml-2 rounded-full bg-white/5 py-0.5 px-1.5">
                    <p className="text-sm font-normal text-secondary-foreground">{tag}</p>
                </div>
            )}
        </div>
    );
}
