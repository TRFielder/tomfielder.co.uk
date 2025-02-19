import Image from "next/image";

const Skills = () => {
	return (
		<section id="About" className="flex flex-col items-center font-extralight">
			<article className="text-white flex flex-col items-center justify-center w-2/3">
				<h3 className="text-2xl font-semibold mb-8">My tools</h3>
				<div className="grid grid-cols-3 gap-8">
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
						width={80}
						height={80}
						alt="Typescript"
					/>
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
						width={80}
						height={80}
						alt="React"
					/>
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg"
						width={80}
						height={80}
						alt="Playwright"
					/>
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
						width={80}
						height={80}
						alt="TailwindCSS"
					/>
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
						width={80}
						height={80}
						alt="C Plus Plus"
					/>
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
						width={80}
						height={80}
						alt="Vitest"
					/>
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
						width={80}
						height={80}
						alt="SQL"
					/>
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
						width={80}
						height={80}
						alt="MongoDB"
					/>
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
						width={80}
						height={80}
						alt="Python"
					/>
				</div>
			</article>
		</section>
	);
};

export default Skills;
