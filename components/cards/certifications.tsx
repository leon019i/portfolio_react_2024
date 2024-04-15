import React from 'react';
import Card from "@/components/ui/card";
import {Timeline, TimelineItem} from "@/components/ui/timeline";

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


const educationData = [
    {
        date: "2019 - 2023",
        title: "BSc. Computer Science & Artificial intelligence",
        subTitle: "Cairo University",
    }, {
        date: "2016 - 2019",
        title: "Maths Science baccalaureate",
        subTitle: "Qawmit El Agouza Language school",
    }
];