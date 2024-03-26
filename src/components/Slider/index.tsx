import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwipeItem } from './SwipeItem/Index';

export default function ImageSwiper() {

    const items = [
        {
            title: "Welcome to TMA Innovation",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget blandit nisl.",
            icon: require("../../../src/assets/images/SLIDER_1.svg"),

        },
        {
            title: "Welcome to TMA Innovation",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget blandit nisl.",
            icon: require("../../../src/assets/images/SLIDER_2.svg"),
        },
        {
            title: "Welcome to TMA Innovation",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget blandit nisl.",
            icon: require("../../../src/assets/images/SLIDER_3.svg"),
        },
    ];

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {items.map((item) => {
                    return <SwiperSlide><SwipeItem item={item} width={'100%'} height={'100%'} /></SwiperSlide>
                })}
            </Swiper>
        </>
    );
}
