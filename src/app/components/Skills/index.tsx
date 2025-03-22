import Image from "next/image";

const Skills = () => {
	return (
		<section
			id="Skills"
			className="relative py-12 md:py-20 bg-gradient-to-b from-black to-gray-900"
		>
			<div className="container mx-auto px-4">
				<article className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700/50">
					<h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
						My Tools
					</h3>
					<div className="grid grid-cols-3 gap-4 md:gap-8">
						<div className="transform transition-all duration-300 hover:scale-110 bg-gray-800/20 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
								width={50}
								height={50}
								alt="Typescript"
								className="mb-1 md:mb-2"
							/>
							<span className="text-xs md:text-sm text-gray-300">TypeScript</span>
						</div>
						<div className="transform transition-all duration-300 hover:scale-110 bg-gray-800/20 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
								width={50}
								height={50}
								alt="React"
								className="mb-1 md:mb-2"
							/>
							<span className="text-xs md:text-sm text-gray-300">React</span>
						</div>
						<div className="transform transition-all duration-300 hover:scale-110 bg-gray-800/20 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg"
								width={50}
								height={50}
								alt="Playwright"
								className="mb-1 md:mb-2"
							/>
							<span className="text-xs md:text-sm text-gray-300">Playwright</span>
						</div>
						<div className="transform transition-all duration-300 hover:scale-110 bg-gray-800/20 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
								width={50}
								height={50}
								alt="TailwindCSS"
								className="mb-1 md:mb-2"
							/>
							<span className="text-xs md:text-sm text-gray-300">TailwindCSS</span>
						</div>
						<div className="transform transition-all duration-300 hover:scale-110 bg-gray-800/20 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
								width={50}
								height={50}
								alt="Vitest"
								className="mb-1 md:mb-2"
							/>
							<span className="text-xs md:text-sm text-gray-300">Vitest</span>
						</div>
						<div className="transform transition-all duration-300 hover:scale-110 bg-gray-800/20 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
								width={50}
								height={50}
								alt="SQL"
								className="mb-1 md:mb-2"
							/>
							<span className="text-xs md:text-sm text-gray-300">SQL</span>
						</div>
						<div className="transform transition-all duration-300 hover:scale-110 bg-gray-800/20 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
								width={50}
								height={50}
								alt="MongoDB"
								className="mb-1 md:mb-2"
							/>
							<span className="text-xs md:text-sm text-gray-300">MongoDB</span>
						</div>
						<div className="transform transition-all duration-300 hover:scale-110 bg-gray-800/20 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
								width={50}
								height={50}
								alt="C Plus Plus"
								className="mb-1 md:mb-2"
							/>
							<span className="text-xs md:text-sm text-gray-300">C++</span>
						</div>
						<div className="transform transition-all duration-300 hover:scale-110 bg-gray-800/20 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tauri/tauri-original.svg"
								width={50}
								height={50}
								alt="Tauri"
								className="mb-1 md:mb-2"
							/>
							<span className="text-xs md:text-sm text-gray-300">Tauri</span>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Skills;
