import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import './carousel.css';

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
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
    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }

        setActiveIndex(newIndex);
    };
    return (
        <div className="carousel">
            <div
                className="inner"
                style={{
                    transform: `translate(-${activeIndex * 100}%)`
                }}
            >
                {items.map((item) => {
                    return <CarouselItem item={item} width={"100%"} />;
                })}
            </div>

            <div className="carousel-buttons">
                <button
                    className="button-arrow"
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    <span className="material-symbols-outlined">arrow_back_ios</span>{" "}
                </button>
                <div className="indicators">
                    {items.map((item, index) => {
                        return (
                            <button
                                className="indicator-buttons"
                                onClick={() => {
                                    updateIndex(index);
                                }}
                            >
                                <span
                                    className={`material-symbols-outlined ${index === activeIndex
                                        ? "indicator-symbol-active"
                                        : "indicator-symbol"
                                        }`}
                                >
                                    radio_button_checked
                                </span>
                            </button>
                        );
                    })}
                </div>
                <button
                    className="button-arrow"
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                </button>
            </div>
        </div>
    );
};