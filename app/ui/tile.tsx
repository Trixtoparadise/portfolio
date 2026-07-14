"use client"
import * as React from 'react';
import Github from "@mui/icons-material/GitHub";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutLined from "@mui/icons-material/LocalPhoneOutlined";
import { ButtonBase, Stack } from "@mui/material";

type PropType = {
    title: string;
	subTitle: string;
    background: string;
    height: string;
    data: string[];
}

const designPalette: Record<string, string> = {
    info: 'bg-[#E54848]!',
    interests: 'bg-[#325FBE]!',
    skills: 'bg-[#FCA311]!',
    projects: 'bg-[#53A548]!',
    contact: 'bg-[#5928AC]!',
    experience: 'bg-[#EC368D]!',
    education: 'bg-[#F26419]!',
};


export default function Tile(props : PropType) {
    const { title, subTitle, background, height, data } = props;
    const [flip, setFlip] = React.useState(false);
    const bgColor = designPalette[background] || 'bg-gray-100';

    return flip ? (
        <Stack 
            style={{ flexGrow: height, flexBasis: 0 }}
            className={`${bgColor} shadow-xl/40 rounded-md!`}
        >
            <ButtonBase
                onClick={() => setFlip(false)} 
                className={`flex grow py-2.5! px-6! overflow-hidden ${bgColor} rounded-md!`}    
            >
                {background == "contact" ? (
                    <Stack className="text-primary! mx-6!">
                        <ul className='text-center! list-inside!'>
                            <Stack direction="row" className='justify-around! mx-20 '>
                                <li className="font-light font-urbanist! text-[1.2rem] py-4 "> 
                                    <a href="mailto:hlamolo.mhlanga7@gmail.com" onClick={(e) => e.stopPropagation()}>
                                        <EmailOutlined className={`h-8! w-8! text-primary! hover:text-gray-200 transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80`} />
                                    </a>
                                </li>
                                <li className="font-light font-urbanist! text-[1.2rem] py-4"> 
                                    <a href="https://github.com/Trixtoparadise" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                        <Github className={`h-8! w-8! text-primary! hover:text-gray-200 transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80`} />
                                    </a>
                                </li>
                                <li className="font-light font-urbanist! text-[1.2rem] py-4"> 
                                    <a href="tel:+27783482171" onClick={(e) => e.stopPropagation()}>
                                        <LocalPhoneOutLined className={`h-8! w-8! text-primary! hover:text-gray-200 transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80`} />
                                    </a>
                                </li>
                            </Stack>
                        </ul>
                        <ul className='text-center! list-inside!'>
                            {data.map((item, index) => <li key={index}  className="font-light font-urbanist! text-[1.2rem] py-4" dangerouslySetInnerHTML={{ __html: item }}/>)}
                        </ul>
                    </Stack>
                ) : (
                    
                    <Stack className="text-primary! mx-6!">
                        <ul className='text-center! list-inside!'>
                            {data.map((item, index) => <li key={index}  className="font-light font-urbanist! text-[1.2rem] py-4 list-disc" dangerouslySetInnerHTML={{ __html: item }}/>)}
                        </ul>
                    </Stack>
                )}
            </ButtonBase>
        </Stack>
    ) : (
        <Stack 
            style={{ flexGrow: height, flexBasis: 0 }}
            className={`shadow-xl/40 rounded-md ${bgColor}`}
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