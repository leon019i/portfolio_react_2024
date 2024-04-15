import Heading from '@/components/heading/heading';
import React from 'react';
import {featuredData} from "@/data";
import FeaturedCard from "@/components/cards/featured-card";
import ExpandableFeatured from "@/components/expandables/expandable-featured";


const MainFeatured = featuredData[0];

const FeaturedSection = () => {
    return (
        <div className="pt-24 px-3 lg:px-8">
        {/*Heading*/}
            <Heading number="01" title_1="Featured" title_2="Work" />
            {/*Main Featured Card*/}
            <FeaturedCard title={MainFeatured.title} tag={MainFeatured.tag} video={MainFeatured.video} active={true} />
            <div className="mt-24">
                <ExpandableFeatured/>
            </div>
        </div>
    );
};

export default FeaturedSection;