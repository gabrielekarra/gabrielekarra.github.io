import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Header } from "../sections/Header";
import "../app/styles/globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Salvatore Gabriele Karra",
	description: "Junior Softare Engineer and Computer Science Student",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="relative">
			<body
				className={twMerge(
					dmSans.className,
					"antialiased bg-black/95 text-white overflow-x-hidden",
				)}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
