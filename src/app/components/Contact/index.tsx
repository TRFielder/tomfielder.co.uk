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
					<div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
						<a
							href="https://github.com/tomfielder"
							target="_blank"
							rel="noopener noreferrer"
							className="group"
						>
							<div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
								<div className="flex items-center gap-3">
									<Image
										alt="GitHub"
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
										width={24}
										height={24}
										className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300 invert"
									/>
									<span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
										GitHub
									</span>
								</div>
							</div>
						</a>

						<a
							href="https://www.linkedin.com/in/tomfielder/"
							target="_blank"
							rel="noopener noreferrer"
							className="group"
						>
							<div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
								<div className="flex items-center gap-3">
									<Image
										alt="LinkedIn"
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
										width={24}
										height={24}
										className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300"
									/>
									<span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
										LinkedIn
									</span>
								</div>
							</div>
						</a>

						<a href="mailto:tom@tomfielder.co.uk" className="group">
							<div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
								<div className="flex items-center gap-3">
									<svg
										className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors duration-300"
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
									<span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
										Email
									</span>
								</div>
							</div>
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Contact;
