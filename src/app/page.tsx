import Hero from "@/app/components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
	return (
		<>
			<Analytics />
			<Hero />
			<div className="h-screen flex flex-col gap-12 md:justify-evenly">
				<About />
				<Skills />
				<Contact />
			</div>
		</>
	);
}
