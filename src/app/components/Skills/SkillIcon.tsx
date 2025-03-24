import Image from "next/image";

const SkillIcon = ({ url, name }: { url: string; name: string }) => {
	return (
		<div className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-br from-gray-900/70 to-black/70 hover:from-gray-900/80 hover:to-black/80 backdrop-blur-sm rounded-xl p-2 sm:p-3 flex flex-col items-center justify-center shadow-sm hover:shadow-md border border-gray-700/50 w-24">
			<Image src={url} width={40} height={40} alt={name} className="mb-1" />
			<span className="text-xs sm:text-sm text-gray-300">{name}</span>
		</div>
	);
};

export default SkillIcon;
