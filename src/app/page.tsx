import Hero from "@/app/components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="h-screen flex flex-col md:justify-evenly">
				<About />
				<Contact />
			</div>
		</>
	);
}
