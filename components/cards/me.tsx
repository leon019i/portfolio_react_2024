import React from 'react';
import Card from "@/components/ui/card"
import MyImage from "@/public/assets/images/me/About/img_2.jpeg"
import Image from "next/image"
import {cn} from "@/lib/utils";

const MeCard = () => {
    return (
        <Card className="2xl:h-[680px]">
            <div className="w-full h-[480px] sm:h-[500px] overflow-hidden">
                {/*background image*/}
                <Image src={MyImage} alt="Loay Fayez"
                       className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover rounded-2xl"/>
                {/*Tags*/}
                <div className="absolute top-[65%] space-y-2">
                    <Tag text={"Hello, universe👋"}
                         className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl "/>
                    <Tag text={"I'm Loay Fayez"}
                         className="rounded-tl-2xl  rounded-br-2xl rounded-bl-2xl "/>
                    <Tag text={"Software QA Engineer"}
                         className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl "/>
                    <Tag text={"Django Developer"}
                         className="rounded-3xl "/>
                </div>
            </div>
        </Card>
    );
};

const Tag = ({text, className}: { text: string, className?: string }) => {
    return (<div className={cn("bg-black/[0.7] w-fit py-1.5 px-3", className)}>
        <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
    </div>)

}

export default MeCard;