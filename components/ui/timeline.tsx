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
        <div className="flex flex-wrap gap-4 sm:gap-12 min-h justify-start relative text-sm sm:text-base">
            {/* Date Timeline */}
            <div className="h-auto flex-none" style={{ minWidth: isCourse ? "0" : "auto" }}>
                <p className="text-secondary-foreground text-xs sm:text-sm">{date}</p>
            </div>
            {/* Right side */}
            <div className="flex gap-x-2" style={{ transform: isCourse ? "translateX(-45px)" : "none" }}>
                <div className="flex flex-col gap-y-1">
                    {/* Title */}
                    <div className="break-words">
                        <p className="leading-tight sm:leading-6 font-medium text-sm sm:text-md">{title}</p>
                    </div>
                    {/* Subtitle */}
                    <div className="flex items-center gap-1 sm:gap-2 w-fit text-secondary-foreground hover:text-blue-joust cursor-pointer link">
                        {link ?
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <Body subTitle={subTitle} tag={tag} link={link} />
                            </a> :
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
