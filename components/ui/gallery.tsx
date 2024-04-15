import React, {FC} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import {Pagination, Autoplay} from "swiper/modules";
import {galleryImages} from "@/data";
import Image from "next/image";
import {cn} from "@/lib/utils";

interface GalleryProps {
    className?: string;
}

const Gallery: FC<GalleryProps> = ({className}) => {
    return (
        <div className={cn("h-[550px] sm:h-[650px] md:h-full 2xl:h-[750px] w-full", className)}>
            <Swiper
                modules={[Pagination, Autoplay, ]}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper rounded-2xl"
            >
                {
                    galleryImages.slice(1).map((image) => (
                        <SwiperSlide key={image.id}>
                            <Image src={image.img} alt=""
                                   className="object-cover h-full object-left-top"/>

                        </SwiperSlide>))
                }
            </Swiper>
        </div>
    );
};

export default Gallery;