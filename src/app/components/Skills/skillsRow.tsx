import SkillIcon from "./SkillIcon";

const skillsList = {
	Typescript:
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
	React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
	TailwindCSS:
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
	Vitest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
	Playwright:
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
	SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
	MongoDB:
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
	"C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
	Tauri: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tauri/tauri-original.svg",
};

const SkillsRow = () => {
	return (
		<div className="flex flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center">
			{Object.entries(skillsList).map(([skill, url]) => (
				<SkillIcon name={skill} url={url} key={skill} />
			))}
		</div>
	);
};

export default SkillsRow;
