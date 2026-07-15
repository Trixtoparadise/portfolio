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
}

const fontSizes: Record<string, string[]> = {
    info: ['text-[65px]!','text-[20px]!'],
    interests: ['text-[65px]!','text-[20px]!'],
    skills: ['text-[90px]!','text-[24px]!'],
    projects: ['text-[60px]!','text-[20px]!'],
    contact: ['text-[43px]!','text-[18px]!'],
    experience: ['text-[60px]!','text-[20px]!'],
    education: ['text-[50px]!','text-[20px]!'],
}

export default function Tile(props : PropType) {
    const { title, subTitle, background, height, data } = props;
    const [flip, setFlip] = React.useState(false);
    const bgColor = designPalette[background] || 'bg-gray-100';

    const links = [
        "https://github.com/Trixtoparadise/mooseum", 
        "https://github.com/Trixtoparadise/Inventori", 
        "https://github.com/Trixtoparadise/Odyssey"
    ];

    return (
        <Stack 
            style={{ flexGrow: height, flexBasis: 0 }}
            className="group perspective-[1000px] transition-transform hover:scale-[1.025]"
        >
            <ButtonBase
                component="div"
                disableTouchRipple
                onClick={() => setFlip(!flip)} 
                className={`w-full h-full duration-700 transform-3d transition-transform rounded-md! shadow-xl/40 ${
                    flip ? 'transform-[rotateY(180deg)]' : ''
                }`}    
            >
                <Stack 
                    className={`absolute inset-0 w-full h-full items-center justify-center p-6 backface-hidden rounded-md! ${bgColor}`}
                >
                    <Stack className="text-center! text-primary! mx-6!">
                        <p className={`font-annie! mx-30! pb-3! ${fontSizes[background][0]}`}><b>{title}</b></p>
                        <p className={`font-light font-urbanist! mx-20! ${fontSizes[background][1]}`}>{subTitle}</p>
                    </Stack>
                </Stack>

                <Stack 
                    className={`absolute inset-0 w-full h-full items-center justify-center p-6 backface-hidden transform-[rotateY(180deg)] rounded-md! ${bgColor}`}
                >
                    {background === "contact" ? (
                        <Stack className="text-primary! mx-6! w-full">
                            <ul className='text-center! list-inside!'>
                                <Stack direction="row" className='justify-around! mx-10!'>
                                    <li className="font-light font-urbanist! text-[1.2rem] py-4 transition-transform hover:scale-[1.25]"> 
                                        <a href="mailto:hlamolo.mhlanga7@gmail.com" onClick={(e) => e.stopPropagation()}>
                                            <EmailOutlined className="h-8! w-8! text-primary!" />
                                        </a>
                                    </li>
                                    <li className="font-light font-urbanist! text-[1.2rem] py-4 transition-transform hover:scale-[1.25]"> 
                                        <a href="https://github.com/Trixtoparadise" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                            <Github className="h-8! w-8! text-primary!" />
                                        </a>
                                    </li>
                                    <li className="font-light font-urbanist! text-[1.2rem] py-4 transition-transform hover:scale-[1.25]"> 
                                        <a href="tel:+27783482171" onClick={(e) => e.stopPropagation()}>
                                            <LocalPhoneOutLined className="h-8! w-8! text-primary!" />
                                        </a>
                                    </li>
                                </Stack>
                            </ul>
                            <ul className='text-center! list-inside!'>
                                {data.map((item, index) => (
                                    <li key={index} className="font-light font-urbanist! text-[1.2rem] py-4" dangerouslySetInnerHTML={{ __html: item }}/>
                                ))}
                            </ul>
                        </Stack>
                    ) : background !== "projects" ? (
                        <Stack className="text-primary! mx-6!">
                            <ul className='text-center! list-inside!'>
                                {data.map((item, index) => (
                                    <li key={index} className="font-light font-urbanist! text-[1.2rem] py-4 list-disc" dangerouslySetInnerHTML={{ __html: item }}/>
                                ))}
                            </ul>
                        </Stack>
                    ) : (
                        <Stack className="text-primary! mx-6!">
                            <ul className='text-center! list-inside!'>
                                {data.map((item, index) => (
                                    <li key={index} className="font-light font-urbanist! text-[1.15rem] py-4 list-disc transition-transform hover:scale-[1.2]">
                                        <a 
                                            href={links[index]} 
                                            target="_blank" rel="noreferrer" 
                                            onClick={(e) => e.stopPropagation()} dangerouslySetInnerHTML={{ __html: item }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Stack>
                    )}
                </Stack>
            </ButtonBase>
        </Stack>
    );
}
