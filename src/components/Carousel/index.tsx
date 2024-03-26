import React, { useState, useRef, useLayoutEffect } from "react";
import { CarouselItem } from "./CarouselItem";

import { createTheme, ThemeProvider } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

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
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box>
                <Grid className="carousel"
                    container sx={{
                        overflow: 'hidden',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                    alignItems='center'
                >
                    <Grid
                        className="inner"
                        sx={{

                            display: "flex", flexDirection: 'row',
                            width: '800px',
                            height: '1000px',
                            whiteSpace: 'nowrap',
                            transition: 'transform 0.3s ease-in-ease-out',
                            color: '#ffffff',
                            transform: `translate(-${activeIndex * 100}%)`,
                        }}
                        alignItems='center'
                        justifyContent='left'                    >
                        {items.map((item) => {
                            return <CarouselItem item={item} width={'100 %'} />;
                        })}
                    </Grid>

                    <Grid className="carousel-buttons" sx={{ display: 'inline-flex', justifyContent: 'center' }}>

                        <IconButton
                            onClick={() => {
                                updateIndex(activeIndex - 1);
                            }} >
                            <ArrowBackIosIcon />
                        </IconButton>

                        <div className="indicators">
                            {items.map((item, index) => {
                                return (
                                    <IconButton>
                                        {activeIndex === index ? <FiberManualRecordIcon /> : <FiberManualRecordOutlinedIcon />}

                                    </IconButton>
                                );
                            })}
                        </div>
                        <IconButton
                            onClick={() => {
                                updateIndex(activeIndex + 1);
                            }} >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Grid>

                </Grid>
            </Box >
        </ThemeProvider >
    );
};