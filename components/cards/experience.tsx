import React from 'react';
import Card from "@/components/ui/card";
import {Timeline, TimelineItem} from "@/components/ui/timeline";
import {experienceData} from "@/data/experience";

const ExperienceCard = () => {
    return (
        <Card title="My Experience">
            <Timeline>
                {experienceData.map((ex, i) => (
                    <TimelineItem key={i} date={ex.date} title={ex.title} subTitle={ex.subTitle}
                                  link={ex.link}
                                  tag={ex.tag}/>))
                }
            </Timeline>
        </Card>
    );
};

export default ExperienceCard;
