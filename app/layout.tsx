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
			<body className="h-screen! w-full! flex flex-col bg-background!">{children}</body>
		</html>
	);
}
