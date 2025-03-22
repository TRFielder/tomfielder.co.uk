import Image from "next/image";

const Contact = () => {
	return (
		<section
			id="contact"
			className="relative py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black"
		>
			<div className="container mx-auto px-4">
				<article className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700/50">
					<h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent">
						Get in Touch
					</h3>
					<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
						<div className="transform transition-all duration-300 hover:scale-110">
							<a
								href="http://linkedin.com/in/tom-fielder"
								className="block"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									alt="LinkedIn"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
									width={60}
									height={60}
									className="hover:opacity-80 transition-opacity"
								/>
							</a>
						</div>
						<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
							<a
								href="https://github.com/TRFielder/"
								target="_blank"
								rel="noopener noreferrer"
								className="transform transition-all duration-300 hover:scale-110 bg-gray-800/20 rounded-xl p-4 flex flex-col items-center justify-center"
							>
								<Image
									alt="GitHub"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
									width={50}
									height={50}
									className="mb-1 md:mb-2 invert"
								/>
								<span className="text-xs md:text-sm text-gray-300">GitHub</span>
							</a>
							<a
								href="mailto:tom.fielder97@gmail.com"
								className="transform transition-all duration-300 hover:scale-110 bg-gray-800/20 rounded-xl p-4 flex flex-col items-center justify-center"
							>
								<svg
									className="w-12 h-12 text-gray-300 mb-1 md:mb-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<span className="text-xs md:text-sm text-gray-300">Email</span>
							</a>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Contact;
