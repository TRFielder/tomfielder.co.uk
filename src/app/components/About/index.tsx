const About = () => {
	return (
		<section
			id="About"
			className="relative py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black"
		>
			<div className="container mx-auto px-4">
				<article className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700/50">
					<h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
						About Me
					</h3>
					<div className="space-y-6 md:space-y-8">
						<div className="transform transition-all duration-300 hover:scale-[1.02] bg-gray-800/20 rounded-xl p-6">
							<div className="flex items-center gap-3 mb-3">
								<svg
									className="w-6 h-6 text-blue-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<h4 className="text-lg font-semibold text-blue-400">
									Full-Stack Development
								</h4>
							</div>
							<p className="text-base md:text-lg text-gray-300 leading-relaxed">
								I am a software developer with a preference for full-stack web
								development, but definitely enjoy turning my hand to desktop
								applications.
							</p>
						</div>

						<div className="transform transition-all duration-300 hover:scale-[1.02] bg-gray-800/20 rounded-xl p-6">
							<div className="flex items-center gap-3 mb-3">
								<svg
									className="w-6 h-6 text-purple-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
								<h4 className="text-lg font-semibold text-purple-400">
									Diverse Tech Stack
								</h4>
							</div>
							<p className="text-base md:text-lg text-gray-300 leading-relaxed">
								You might reasonably ask - how does someone end up working with a
								web stack and also C++/Rust? The answer lies in needing to adapt to
								a laboratory with a wide variety of needs my deepest knowledge (and
								the most fun!) is somewhere at the intersection of those two
								skillsets
							</p>
						</div>

						<div className="transform transition-all duration-300 hover:scale-[1.02] bg-gray-800/20 rounded-xl p-6">
							<div className="flex items-center gap-3 mb-3">
								<svg
									className="w-6 h-6 text-indigo-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
									/>
								</svg>
								<h4 className="text-lg font-semibold text-indigo-400">
									Current Projects
								</h4>
							</div>
							<p className="text-base md:text-lg text-gray-300 leading-relaxed">
								Currently I'm maintaining a collection of web apps with my
								full-stack skills using Node, React, and Typescript. I'm also
								working on modernising a legacy scientific application of critical
								national importance using Tauri to develop a cutting-edge user
								interface with good quality low-level systems behind it
							</p>
						</div>

						<div className="transform transition-all duration-300 hover:scale-[1.02] bg-gray-800/20 rounded-xl p-6">
							<div className="flex items-center gap-3 mb-3">
								<svg
									className="w-6 h-6 text-pink-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
								<h4 className="text-lg font-semibold text-pink-400">Beyond Code</h4>
							</div>
							<p className="text-base md:text-lg text-gray-300 leading-relaxed">
								Outside that, I'm into building small hobby projects (both software
								and physical), and pretending I'm good at moving heavy circles at
								the local gym
							</p>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default About;
