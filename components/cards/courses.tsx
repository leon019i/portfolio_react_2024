import React from 'react';
import Card from "@/components/ui/card";
import {Timeline, TimelineItem} from "@/components/ui/timeline";
import certificationsData from "@/data/certifications";


const CertificationCard = () => {
    return (
        <Card title="My Certifications">
            <Timeline>
                {certificationsData.map((ex, i) => (
                    <TimelineItem key={i} date={ex.date} title={ex.title} subTitle={ex.subTitle}/>))
                }
            </Timeline>
        </Card>
    );
};

export default CertificationCard;


