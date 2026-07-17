"use client"
import Tile from './ui/tile';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

export default function Home() {
	const [open, setOpen] = React.useState(true);
        
    return (
        <main className="flex flex-1 w-full! h-full! px-3! py-3! justify-center! sm:items-start">
            <Box className="w-full! h-full!">
                <Stack 
                    direction="row"
                    spacing={{sm: 3}}
                    className='h-full! relative hidden! md:hidden! lg:flex!'
                >
                    <Stack
                        spacing={{sm: 3}}
                        className='w-2/7!'
                    >
                        <Tile 
                            title={`Hlamolo Mhlanga`}
                            subTitle="Web and Mobile Application Developer."
                            background="info"
                            height='grow-[4.5]'
                            number='1'
                            data={['<b><b>Age and Gender:</b></b> 25 years old , Male' , '<b><b>Address:</b></b> House No - 987, Mandlethu, 0458, Mpumalanga.']}
                        />
                        <Tile 
                            title="Interests"
                            subTitle="What I am passionate about and what I would like to learn."
                            background="interests"
                            height='grow-[5.5]'
                            number='3'
                            data={["Studying <b><b>design</b></b>, the foundation of every system known to mankind and applying the lessons on my <b><b>applications</b></b>, studying the relationship between <b><b>form</b></b> and <b><b>function</b></b>, and how it affects the <b><b>user experience</b></b> and <b><b>interaction</b></b>."]}
                        />
                    </Stack>
                    <Stack
                        spacing={{sm: 3}}
                        className='w-3/7!'
                    >
                        <Tile 
                            title="Technical Skills"
                            subTitle="Languages, Frameworks, Stacks, databases."
                            background="skills"
                            height='grow-[6.5]'
                            number='2'
                            data={['<b><b>Languages:</b></b> C#, C++, Javascript, Typescript.', '<b><b>Backend Frameworks:</b></b> Node.js (Express), ASP.NET Core WebAPI.', '<b><b>Frontend Frameworks:</b></b> React.js, React Native, .NET MAUI', '<b><b>Databases:</b></b>  PostgresSQL, MongoDB Atlas.', '<b><b>Cloud Platforms:</b></b>  Amazon Web Services RDB, Microsoft Azure ASP NET Core Web API, Vercel Next.js application.']}
                        />
                        <Tile 
                            title="Projects"
                            subTitle="Applications, Databases, Demos, Websites."
                            background="projects"
                            height='grow-[3.5]'
                            number='4'
                            data={['<b><b>www.mooseum.online</b></b>', '<b><b>Inventori</b></b> (Link to source code)', '<b><b>Odyssey</b></b> (link to source code)']}
                        />
                    </Stack>
                    <Stack
                        spacing={{sm: 3}}
                        className='w-2/7!'
                    >
                        <Tile 
                            title="Reach out"
                            subTitle="For an Interview, discussion or collaboration."
                            background="contact"
                            height='grow-2'
                            number='7'
                            data={['Choose how you want to connect.']}
                        />
                        <Tile 
                            title="Experience"
                            subTitle="Where I’ve worked and what I did there."
                            background="experience"
                            height='grow-5'
                            number='6'
                            data={['I worked at <b><b>Nkangala District Municipality</b></b> from July 2024 - June 2026 as an <b><b>Information and Communication Technology</b></b> intern. Rotating in different roles within the department as a service desk operator, assistant to the municipality technician or a reporting analyst.']}
                        />
                        <Tile 
                            title="Education"
                            subTitle="High school & University."
                            background="education"
                            height='grow-3'
                            number='5'
                            data={['I studied at <b><b>Phumzile Secondary School</b></b> and earned a <b><b>National Senior Certificate</b></b> in January 2018.', 'I went on to study at <b><b>Wits University</b></b> and earned a Bachelor of Science in <b><b>Computer Science and Applied Mathematics</b></b>, June 2022.']}
                        />
                    </Stack>
                </Stack>
                <Stack 
                    direction="row"
                    spacing={{sm: 3}}
                    className='h-full! relative hidden! md:flex! lg:hidden!'
                >
                    <Stack
                        spacing={{sm: 3}}
                        className='w-3/7!'
                    >
                        <Tile 
                            title={`Hlamolo Mhlanga`}
                            subTitle="Web and Mobile Application Developer."
                            background="info"
                            height='grow-[2.25]'
                            number='1'
                            data={['<b><b>Age and Gender:</b></b> 25 years old , Male' , '<b><b>Address:</b></b> House No - 987, Mandlethu, 0458, Mpumalanga.']}
                        />
                        <Tile 
                            title="Interests"
                            subTitle="What I am passionate about and what I would like to learn."
                            background="interests"
                            height='grow-3'
                            number='3'
                            data={["Studying <b><b>design</b></b>, the foundation of every system known to mankind and applying the lessons on my <b><b>applications</b></b>, studying the relationship between <b><b>form</b></b> and <b><b>function</b></b>, and how it affects the <b><b>user experience</b></b> and <b><b>interaction</b></b>."]}
                        />
                        <Tile 
                            title="Experience"
                            subTitle="Where I’ve worked and what I did there."
                            background="experience"
                            height='grow-[2.75]'
                            number='6'
                            data={['I worked at <b><b>Nkangala District Municipality</b></b> from July 2024 - June 2026 as an <b><b>Information and Communication Technology</b></b> intern. Rotating in different roles within the department as a service desk operator, assistant to the municipality technician or a reporting analyst.']}
                        />
                        <Tile 
                            title="Reach out"
                            subTitle="For an Interview, discussion or collaboration."
                            background="contact"
                            height='grow-2'
                            number='7'
                            data={['Choose how you want to connect.']}
                        />
                    </Stack>
                    <Stack
                        spacing={{sm: 3}}
                        className='w-4/7!'
                    >
                        <Tile 
                            title="Technical Skills"
                            subTitle="Languages, Frameworks, Stacks, databases."
                            background="skills"
                            height='grow-5'
                            number='2'
                            data={['<b><b>Languages:</b></b> C#, C++, Javascript, Typescript.', '<b><b>Backend Frameworks:</b></b> Node.js (Express), ASP.NET Core WebAPI.', '<b><b>Frontend Frameworks:</b></b> React.js, React Native, .NET MAUI', '<b><b>Databases:</b></b>  PostgresSQL, MongoDB Atlas.', '<b><b>Cloud Platforms:</b></b>  Amazon Web Services RDB, Microsoft Azure ASP NET Core Web API, Vercel Next.js application.']}
                        />
                        <Tile 
                            title="Projects"
                            subTitle="Applications, Databases, Demos, Websites."
                            background="projects"
                            height='grow-2'
                            number='4'
                            data={['<b><b>www.mooseum.online</b></b>', '<b><b>Inventori</b></b> (Link to source code)', '<b><b>Odyssey</b></b> (link to source code)']}
                        />
                        <Tile 
                            title="Education"
                            subTitle="High school & University."
                            background="education"
                            height='grow-3'
                            number='5'
                            data={['I studied at <b><b>Phumzile Secondary School</b></b> and earned a <b><b>National Senior Certificate</b></b> in January 2018.', 'I went on to study at <b><b>Wits University</b></b> and earned a Bachelor of Science in <b><b>Computer Science and Applied Mathematics</b></b>, June 2022.']}
                        />
                    </Stack>
                </Stack>
                <Stack 
                    direction="row"
                    className='h-full! relative! md:hidden! lg:hidden!'
                >
                    <Stack
                        spacing={{xs: 4}}
                        className='w-full!'
                    >    
                        <Tile 
                            title={`Hlamolo Mhlanga`}
                            subTitle="Web and Mobile Application Developer."
                            background="info"
                            height='h-75'
                            number='1'
                            data={['<b><b>Age and Gender:</b></b> 25 years old , Male' , '<b><b>Address:</b></b> House No - 987, Mandlethu, 0458, Mpumalanga.']}
                        />
                        <Tile 
                            title="Interests"
                            subTitle="What I am passionate about and what I would like to learn."
                            background="interests"
                            height='h-95'
                            number='2'
                            data={["Studying <b><b>design</b></b>, the foundation of every system known to mankind and applying the lessons on my <b><b>applications</b></b>, studying the relationship between <b><b>form</b></b> and <b><b>function</b></b>, and how it affects the <b><b>user experience</b></b> and <b><b>interaction</b></b>."]}
                        />
                        <Tile 
                            title="Technical Skills"
                            subTitle="Languages, Frameworks, Stacks, databases."
                            background="skills"
                            height='h-115'
                            number='3'
                            data={['<b><b>Languages:</b></b> C#, C++, Javascript, Typescript.', '<b><b>Backend Frameworks:</b></b> Node.js (Express), ASP.NET Core WebAPI.', '<b><b>Frontend Frameworks:</b></b> React.js, React Native, .NET MAUI', '<b><b>Databases:</b></b>  PostgresSQL, MongoDB Atlas.', '<b><b>Cloud Platforms:</b></b>  Amazon Web Services RDB, Microsoft Azure ASP NET Core Web API, Vercel Next.js application.']}
                        />
                        <Tile 
                            title="Projects"
                            subTitle="Applications, Databases, Demos, Websites."
                            background="projects"
                            height='h-65'
                            number='4'
                            data={['<b><b>www.mooseum.online</b></b>', '<b><b>Inventori</b></b> (Link to source code)', '<b><b>Odyssey</b></b> (link to source code)']}
                        />
                        <Tile 
                            title="Education"
                            subTitle="High school & University."
                            background="education"
                            height='h-95'
                            number='5'
                            data={['I studied at <b><b>Phumzile Secondary School</b></b> and earned a <b><b>National Senior Certificate</b></b> in January 2018.', 'I went on to study at <b><b>Wits University</b></b> and earned a Bachelor of Science in <b><b>Computer Science and Applied Mathematics</b></b>, June 2022.']}
                        />
                        <Tile 
                            title="Experience"
                            subTitle="Where I’ve worked and what I did there."
                            background="experience"
                            height='h-90'
                            number='6'
                            data={['I worked at <b><b>Nkangala District Municipality</b></b> from July 2024 - June 2026 as an <b><b>Information and Communication Technology</b></b> intern. Rotating in different roles within the department as a service desk operator, assistant to the municipality technician and a reporting analyst.']}
                        />
                        
                        <Tile 
                            title="Reach out"
                            subTitle="For an Interview, discussion or collaboration."
                            background="contact"
                            height='h-45'
                            number='7'
                            data={['Choose how you want to connect.']}
                        />
                    </Stack>
                </Stack>
            </Box>
            <Dialog 
                open={open} 
                onClose={() => setOpen(false)}
                className='bg-[#000000]/70!'
            >
                <DialogTitle className={`font-annie! text-4xl! [-webkit-text-stroke:1.4px] bg-[url('https://www.transparenttextures.com/patterns/groovepaper.png')] bg-[#283618] text-primary!`}>
                    Welcome to my portfolio!
                </DialogTitle>
                <DialogContent className={`bg-[url('https://www.transparenttextures.com/patterns/groovepaper.png')] bg-[#283618]`}>
                    <DialogContentText className='font-urbanist! font-extralight! text-primary!'>
                        If you want to know something about me, <b><b>flip a card</b></b>. The 
                        numbers on the cards are just there to guide you on where to start and yes, 
                        you can start with any card you want, Enjoy <b><b>:)</b></b>.
                </DialogContentText>
                </DialogContent>
                <DialogActions className={`bg-[url('https://www.transparenttextures.com/patterns/groovepaper.png')] bg-[#283618]`}>
                    <Button onClick={() => setOpen(false)} className='font-urbanist! font-semibold! text-[#8ecae6]!'>
                        Got it
                    </Button>
                </DialogActions>
            </Dialog>
        </main>
	);
}
