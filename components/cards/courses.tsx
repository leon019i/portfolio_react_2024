import React from 'react';
import Card from "@/components/ui/card";
import {Timeline, TimelineItem} from "@/components/ui/timeline";
import {coursesData} from "@/data/courses"


const CoursesCard = () => {
    return (
        <Card title="Online Courses">
            <Timeline>
                {coursesData.map((ex, i) => (
                    <TimelineItem key={i} date={ex.date} title={ex.title} subTitle={ex.subTitle}/>))
                }
            </Timeline>
        </Card>
    );
};

export default CoursesCard;


