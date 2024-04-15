// TimeLine

import React from "react";
import {FiArrowUpRight} from "react-icons/fi";

interface TimelineProps {
    children?: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({children}) => {
    return <div className="flex flex-col gap-y-6">
        {children}
    </div>
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

export const TimelineItem: React.FC<TimelineItemProps> = ({date, title, subTitle, isCourse, link, tag}) => {
    return <div className="flex flex-wrap gap-12 min-h justify-start relative">
        {/*Date Timeline*/}
        <div className="h-auto flex-none break-words whitespace-pre"
             style={{width: `${isCourse ? "0" : ""}`}}>
            <p className="text-secondary-foreground">{date}</p>
        </div>
        {/*    Right side*/}
        <div className="flex gap-x-2" style={{transform: `${isCourse ? "translateX(-45px)" : ""}`}}>
            <div className="flex flex-col gam-0.5">
                {/*Title*/}
                <div className="text-primary-foreground break-words whitespace-pre">
                    <p className="leading-6 font-medium text-sm">{title}

                    </p>
                </div>
                {/*    Subtitle*/}
                <div
                    className="flex items-center gap-2 w-fit text-secondary-foreground hover:text-blue-joust cursor-pointer link">
                    {
                        link ? <a href={link} target="_blank">
                                <Body link={link} subTitle={subTitle} tag={tag}/></a> :
                            (
                                <Body subTitle={subTitle} tag={tag}/>
                            )
                    }
                </div>
            </div>

        </div>
    </div>

}


//Timeline item Body----------------------------------------------------------------------------------------

interface BodyProps {
    subTitle: string;
    tag?: string;
    link?: string;

}

const Body: React.FC<BodyProps> = ({subTitle, tag, link}) => {
    return (<div className="text-background-foreground flex items-center">
            <p className="text-md font-normal leading-6 mt-1">{subTitle}</p>
            {
                link ? <FiArrowUpRight/> : null
            }
            {tag ? <div className={"ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5"}>
                <p className={"text-[10px] font-normal text-secondary-foreground"}>
                    {tag}
                </p>
            </div> : null}
        </div>

    )
}