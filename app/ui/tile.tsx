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
    info: ['text-[50px]! md:text-[52px]! lg:text-[65px]!','text-[20px]! lg:text-[20px]!','text-[20px]! md:text-[20px]! lg:text-[20px]!'],
    interests: ['text-[50px]! md:text-[55px]! lg:text-[65px]!','text-[20px]! lg:text-[20px]!','text-[20px]! md:text-[18px]! lg:text-[20px]!'],
    skills: ['text-[60px]! md:text-[80px]! lg:text-[90px]!','text-[24px]! lg:text-[24px]!', 'text-[20px]! md:text-[18px]! lg:text-[22px]!'],
    projects: ['text-[45px]! md:text-[50px]! lg:text-[60px]!','text-[20px]! lg:text-[20px]!','text-[20px]! md:text-[20px]! lg:text-[24px]!'],
    contact: ['text-[40px]! md:text-[38px]! lg:text-[43px]!','text-[18px]! lg:text-[18px]!', 'text-[18px]! md:text-[18px]! lg:text-[18px]!'],
    experience: ['text-[45px]! md:text-[50px]! lg:text-[60px]!','text-[20px]! lg:text-[20px]!','text-[20px]! md:text-[16px]! lg:text-[20px]!'],
    education: ['text-[55px]! md:text-[45px]! lg:text-[50px]!','text-[20px]! lg:text-[20px]!','text-[20px]! md:text-[20px]! lg:text-[15.5px]! xl:text-[18px]!'],
}

export default function Tile(props : PropType) {
    const { title, subTitle, background, height, data } = props;
    const [flip, setFlip] = React.useState(false);
    const bgColor = designPalette[background] || 'bg-gray-100';

    const links = [
        "https://www.mooseum.online/", 
        "https://github.com/Trixtoparadise/Inventori", 
        "https://github.com/Trixtoparadise/Odyssey"
    ];

    return (
        <Stack 
            className={`${height} md:basis-0! lg:basis-0! group perspective-[1000px] transition-transform hover:scale-[1.025]`}
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
                    <Stack className="text-center! text-primary!">
                        <p className={`font-annie! pb-3! ${fontSizes[background][0]}`}><b>{title}</b></p>
                        <p className={`font-light font-urbanist! ${fontSizes[background][1]}`}>{subTitle}</p>
                    </Stack>
                </Stack>

                <Stack 
                    className={`absolute inset-0 w-full h-full items-center justify-center p-6 backface-hidden transform-[rotateY(180deg)] rounded-md! ${bgColor}`}
                >
                    {background === "contact" ? (
                        <Stack className="text-primary! w-full">
                            <ul className='text-center! list-inside!'>
                                <Stack direction="row" className='justify-around! mx-10!'>
                                    <li className="font-light font-urbanist! text-[1.2rem] py-1 md:py-2 lg:py-4 transition-transform hover:scale-[1.25]"> 
                                        <a href="mailto:hlamolo.mhlanga7@gmail.com" onClick={(e) => e.stopPropagation()}>
                                            <EmailOutlined className="h-8! w-8! text-primary!" />
                                        </a>
                                    </li>
                                    <li className="font-light font-urbanist! text-[1.2rem] py-1 md:py-2 lg:py-4 transition-transform hover:scale-[1.25]"> 
                                        <a href="https://github.com/Trixtoparadise" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                            <Github className="h-8! w-8! text-primary!" />
                                        </a>
                                    </li>
                                    <li className="font-light font-urbanist! text-[1.2rem] py-1 md:py-2 lg:py-4 transition-transform hover:scale-[1.25]"> 
                                        <a href="tel:+27783482171" onClick={(e) => e.stopPropagation()}>
                                            <LocalPhoneOutLined className="h-8! w-8! text-primary!" />
                                        </a>
                                    </li>
                                </Stack>
                            </ul>
                            <ul className='text-center! list-inside!'>
                                {data.map((item, index) => (
                                    <li key={index} className={`font-light font-urbanist! ${fontSizes[background][2]} py-3 md:py-2 lg:py-4`} dangerouslySetInnerHTML={{ __html: item }}/>
                                ))}
                            </ul>
                        </Stack>
                    ) : background !== "projects" ? (
                        <Stack className="text-primary!">
                            <ul className='text-center! list-inside!'>
                                {data.map((item, index) => (
                                    <li key={index} className={`font-light font-urbanist! ${fontSizes[background][2]} py-1 md:py-2 lg:py-4 list-disc`} dangerouslySetInnerHTML={{ __html: item }}/>
                                ))}
                            </ul>
                        </Stack>
                    ) : (
                        <Stack className="text-primary! mx-6!">
                            <ul className='text-center! list-inside!'>
                                {data.map((item, index) => (
                                    <li key={index} className={`font-light font-urbanist! ${fontSizes[background][2]} py-1 md:py-2 lg:py-4 list-disc transition-transform hover:scale-[1.2]`}>
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
