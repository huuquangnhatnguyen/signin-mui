import React from "react";

interface ICarouselItem {
    title: string;
    icon: {
        default: string;
    };
    description: string;
}

export const CarouselItem = ({ item, width }: { item: ICarouselItem; width: string }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            <img className="carousel-img" src={item.icon.default} />
            <div className="carousel-title">{item.title}</div>
            <div className="carousel-item-text">{item.description}</div>
        </div>
    );
};