"use client"
import Tile from './ui/tile';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Click from '@mui/icons-material/PanToolAlt';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

export default function Home() {
	const [open, setOpen] = React.useState(true);
        
    return (
        <main className="flex flex-1 w-full! h-full! px-3! py-3! justify-center! sm:items-start">
            <Box className="w-full! h-full!">
                <Stack 
                    spacing={{ xs: 1, sm: 3}}
                    direction="row"
                    className='h-full! relative'
                >
                    <Stack
                        spacing={{ xs: 1, sm: 3}}
                        className='w-2/7!'
                    >
                        <Tile 
                            title={`Hlamolo Mhlanga`}
                            subTitle="Web and Mobile Application Developer."
                            background="info"
                            height='4.5'
                            data={['<b><b>Age and Gender:</b></b> 25 years old , Male' , '<b><b>Address:</b></b> House No - 987, Mandlethu, 0458, Mpumalanga.']}
                        />
                        <Tile 
                            title="Interests"
                            subTitle="What I am passionate about and what I would like to learn."
                            background="interests"
                            height='5.5'
                            data={["Studying <b><b>design</b></b>, the foundation of every system known to mankind and applying the lessons on my <b><b>applications</b></b>, studying the balance relationship between <b><b>form</b></b> and <b><b>function</b></b>, and how it affects the <b><b>user experience</b></b> and <b><b>interaction</b></b>."]}
                        />
                    </Stack>
                    <Stack
                        spacing={{ xs: 1, sm: 3}}
                        className='w-3/7!'
                    >
                        <Tile 
                            title="Technical Skills"
                            subTitle="Languages, Frameworks, Stacks, databases."
                            background="skills"
                            height='6.5'
                            data={['<b><b>Languages:</b></b> C#, C++, Javascript, Typescript.', '<b><b>Backend Frameworks:</b></b> Node.js (Express), ASP.NET Core WebAPI.', '<b><b>Frontend Frameworks:</b></b> React.js, React Native, .NET MAUI', '<b><b>Databases:</b></b>  PostgresSQL, MongoDB Atlas.', '<b><b>Cloud Platforms:</b></b>  Amazon Web Services RDB, Microsoft Azure ASP NET Core Web API, Vercel Next.js application.']}
                        />
                        <Tile 
                            title="Projects"
                            subTitle="Applications, Databases, Demos, Websites."
                            background="projects"
                            height='3.5'
                            data={['<b><b>www.mooseum.online</b></b>', '<b><b>Inventori</b></b> (Link to source code)', '<b><b>Odyssey</b></b> (link to source code)']}
                        />
                    </Stack>
                    <Stack
                        spacing={{ xs: 1, sm: 3}}
                        className='w-2/7!'
                    >
                        <Tile 
                            title="Reach out"
                            subTitle="For an Interview, discussion or collaboration."
                            background="contact"
                            height='2'
                            data={['Choose how you want to connect.']}
                        />
                        <Tile 
                            title="Experience"
                            subTitle="Where I’ve worked and what I did there."
                            background="experience"
                            height='5'
                            data={['I worked at <b><b>Nkangala District Municipality</b></b> from July 2024 - June 2026 as an <b><b>Information and Communication Technology</b></b> intern. Rotating in different roles within the department as a service desk operator, assistant to the municipality technician or a reporting analyst.']}
                        />
                        <Tile 
                            title="Education"
                            subTitle="High school & University."
                            background="education"
                            height='3'
                            data={['I studied at <b><b>Phumzile Secondary School</b></b> and earned a <b><b>National Senior Certificate</b></b> in January 2018.', 'I went on to study <b><b>Computer Science and Applied Mathematics</b></b> at <b><b>Wits University</b></b> and earned a Bachelor of Science in April 2023.']}
                        />
                    </Stack>
                </Stack>
            </Box>
            <Dialog 
                open={open} 
                onClose={() => setOpen(false)}
            >
                <DialogTitle className='font-annie! font-bold! text-4xl! bg-[#283618] text-primary!'>
                    Welcome!
                </DialogTitle>
                <DialogContent className='bg-[#283618]'>
                    <DialogContentText className='font-urbanist! text-primary!'>
                        Try flipping some cards :)
                </DialogContentText>
                </DialogContent>
                <DialogActions className='bg-[#283618]'>
                    <Button onClick={() => setOpen(false)} className='font-urbanist! font-semibold! text-[#8ecae6]!'>
                        Got it
                    </Button>
                </DialogActions>
            </Dialog>
        </main>
	);
}
