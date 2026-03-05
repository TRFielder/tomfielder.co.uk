import SkillIcon from "./SkillIcon";

const skillsList = {
	Typescript:
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
	React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
	Remix: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/remix/remix-original.svg",
	TailwindCSS:
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
	Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
	Playwright:
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
	Storybook:
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg",
	"C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
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
