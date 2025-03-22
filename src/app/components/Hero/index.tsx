import Pattern from "./pattern";

const Hero = () => {
	return (
		<section
			className="bg-transparent relative overflow-hidden text-center h-screen flex flex-col items-center justify-center "
			id="Home"
		>
			{/* Background particle effect thing */}
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none border-red-500">
				<Pattern />
			</div>
			<h1 className="text-black text-7xl md:text-9xl uppercase select-none m-0 opacity-0 relative animate-fade-in animation-delay-1000 block my-8 font-medium">
				Tom Fielder
			</h1>
			<h2 className="opacity-0 text-6xl md:text-8xl select-none m-0 relative animate-fade-in animation-delay-2000 block my-3 font-medium">
				Software Engineer
			</h2>
			<a
				href="#About"
				className="opacity-0 relative w-40 bg-white p-2 no-underline text-black animate-fade-in animation-delay-3000 border-solid border-black border-2 rounded-xl hover:bg-black hover:text-white transition-colors duration-300 ease-in-out my-3"
			>
				Find out more
			</a>
		</section>
	);
};

export default Hero;
