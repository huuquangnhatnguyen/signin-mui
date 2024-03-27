import React from "react";
import { Stack, Typography } from "@mui/material";

interface SwipeItem {
    title: string;
    icon: {
        default: string;
    };
    description: string;
}

export const SwipeItem = ({ item, width, height }: { item: SwipeItem; width: string, height: string }) => {
    return (

        <Stack
            className='Swipe-item'
            sx={{
                top: '10%',
                width: { width },
                height: '100vh',
                backgroundImage: `url(${item.icon.default})`,
                backgroundSize: '80% auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >

            <Typography variant="h4" sx={{ position: 'absolute', top: '90%', my: 2, color: '#FFF' }}>{item.title}</Typography>
            <Typography variant="body1" sx={{ position: 'absolute', top: '95%', my: 2, color: '#FFF' }}>{item.description}</Typography>

        </Stack>
    );
};