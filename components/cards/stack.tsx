import React from 'react';
import Card from "@/components/ui/card";
import {stackData} from "@/data/stack";
import Tooltip from "@/components/ui/tooltip";

export default function StackCard(){
    return (
        <Card title={"My Tech stack"}>
            <div className={"flex flex-col gap-6 mt-2 "}>
                {
                    stackData.map((tech, i) => (
                        <div key={i} className={"grid items-center gap-[90px]"} style={{gridTemplateColumns: "50px 1fr"}}>
                            {/*Stack group name*/}
                        <div className="h-auto flex-none  wihitespace-pre"> <p className={"text-secondary-foreground "}>
                            {tech.title}
                        </p></div>
                            {/*Tooltip*/}
                            <div className="flex gap-4">
                                {tech.stack.map((tech) => (
                                    <Tooltip title={tech.title} key={tech.id} image={tech.image} bgColor={tech.bgColor}/>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </Card>
    );
};

