import Hero from "@/app/components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="h-screen flex flex-col md:justify-evenly">
				<About />
				<Skills />
				<Contact />
			</div>
		</>
	);
}
