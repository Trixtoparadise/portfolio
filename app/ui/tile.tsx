"use client"
import * as React from 'react';
import { ButtonBase, Stack } from "@mui/material";

type PropType = {
    title: string;
	subTitle: string;
    background: string;
    height: string;
    data: string[];
}

export default function Tile(props : PropType) {
    const { title, subTitle, background, height, data } = props;
    const [flip, setFlip] = React.useState(false);

    return flip ? (
        <Stack 
            style={{ flexGrow: height, flexBasis: 0 }}
            className={`shadow-xl/40 rounded-md bg-${background}!`}
        >
            <ButtonBase
                onClick={() => setFlip(false)} 
                className={`flex grow py-2.5! px-6! overflow-hidden`}    
            >
                <Stack className="text-center! text-primary! mx-6!">
                    <ul>
                        {data.map((item, index) => <li key={index} className="font-light font-urbanist! text-[1.2rem] list-disc">{item}</li> )}
                    </ul>
                </Stack>
            </ButtonBase>
        </Stack>
    ) : (
        <Stack 
            style={{ flexGrow: height, flexBasis: 0 }}
            className={`shadow-xl/40 rounded-md bg-${background}!`}
        >
            <ButtonBase
                onClick={() => setFlip(true)} 
                className={`flex grow py-2.5! px-6! overflow-hidden`}    
            >
                <Stack className="text-center! text-primary! mx-6!">
                    <p className="font-annie! font-bold! text-[4rem]">{title}</p>
                    <p className="font-light font-urbanist! text-[1.2rem]">{subTitle}</p>
                </Stack>
            </ButtonBase>
        </Stack>
    )
}