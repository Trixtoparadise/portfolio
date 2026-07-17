import "./globals.css";
import type { Metadata } from "next";
import { Urbanist, Annie_Use_Your_Telescope } from 'next/font/google';

const urbanist = Urbanist({ 
    subsets: ['latin'],
    variable: '--font-urbanist'
});

const annieUseYourTelescope = Annie_Use_Your_Telescope({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-annie'
});

export const metadata: Metadata = {
    title: "Hlamolo Mhlanga's Portfolio",
    description: "A Fullstack developer portfolio for Hlamolo Mhlanga.",
};

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${annieUseYourTelescope.variable} ${urbanist.className} h-full antialiased`}
		>
			<body className="relative w-full h-auto md:h-screen lg:h-screen overflow-scroll md:overflow-hidden lg:overflow-hidden flex flex-col bg-primary!">
                <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/skulls.png')] invert! pointer-events-none" />
                <div className="relative z-10 flex flex-col flex-1">
                    {children}
                </div>
            </body>
		</html>
	);
}
