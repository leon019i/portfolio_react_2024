import React from 'react';
import Card from "@/components/ui/card";
import {Timeline, TimelineItem} from "@/components/ui/timeline";

const ExperienceCard = () => {
    return (
        <Card title="My Experience">
            <Timeline>
                {experiencesData.map((ex, i) => (
                    <TimelineItem key={i} date={ex.date} title={ex.title} subTitle={ex.subTitle}
                                  link={ex.link}
                                  tag={ex.tag}/>))
                }
            </Timeline>
        </Card>
    );
};

export default ExperienceCard;


const experiencesData = [
    {
        date: "2023 - Now",
        title: "Software QA Engineer",
        subTitle: "Inspire for Solutions Development",
        link: "https://inspirejo.com/",
        tag: "On-Site",
    }, {
        date: "2022 - Now",
        title: "Software Engineer (Django)",
        subTitle: "Freelance",
        link: "https : /",
        tag: "Remote",
    },{
        date: "2021 - 2022",
        title: "Wordpress Moderator ",
        subTitle: "ArtsNile",
        link: "https://",
        tag: "On-Site",

    }
];