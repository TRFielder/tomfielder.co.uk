import "./globals.css";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const kanit = Kanit({ weight: ["200", "300", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tom Fielder",
	description: "Full Stack Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={kanit.className}>
				<Analytics />
				{children}
			</body>
		</html>
	);
}
