import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

interface ICarouselItem {
    title: string;
    icon: {
        default: string;
    };
    description: string;
}

export const CarouselItem = ({ item, width }: { item: ICarouselItem; width: string }) => {
    return (

        <Box
            className='carousel-item'
            sx={{
                display: 'inline-flex',
                flexDirection: 'column',
                height: '1000px',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img className="carousel-img" src={item.icon.default} />
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body2">{item.description}</Typography>

        </Box>
        // <div className="carousel-item" style={{ width: width }}>
        //     <img className="carousel-img" src={item.icon.default} />
        //     <div className="carousel-title">{item.title}</div>
        //     <div className="carousel-item-text">{item.description}</div>
        // </div>
    );
};