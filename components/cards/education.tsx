import React from 'react';
import Card from "@/components/ui/card";
import {Timeline, TimelineItem} from "@/components/ui/timeline";
import {educationData} from "@/data/education";

const EducationCard = () => {
    return (
        <Card title="My Education">
            <Timeline>
                {educationData.map((ex, i) => (
                    <TimelineItem key={i} date={ex.date} title={ex.title} subTitle={ex.subTitle}/>))
                }
            </Timeline>
        </Card>
    );
};

export default EducationCard;


