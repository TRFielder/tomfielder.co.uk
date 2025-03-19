const About = () => {
	return (
		<section id="About" className="mt-2 flex flex-col items-center font-extralight">
			<article className="text-white flex flex-col items-center justify-center w-2/3">
				<h3 className="text-2xl font-semibold mb-8">About Me</h3>
				<div className="flex flex-col items-center">
					<p className="my-5 mx-0 text-xl text-center">
						I am a software developer with a preference for full-stack web development,
						but definitely enjoy turning my hand to desktop applications.
					</p>

					<p className="my-5 mx-0 text-xl text-center">
						You might reasonably ask - how does someone end up working with a web stack
						and also C++/Rust? The answer lies in needing to adapt to a laboratory with
						a wide variety of needs my deepest knowledge (and the most fun!) is
						somewhere at the intersection of those two skillsets
					</p>

					<p className="my-5 mx-0 text-xl text-center">
						Currently I'm maintaining a collection of web apps with my full-stack skills
						using Node, React, and Typescript. I'm also working on modernising a legacy
						scientific application of critical national importance using Tauri to
						develop a cutting-edge user interface with good quality low-level systems
						behind it
					</p>

					<p className="my-5 mx-0 text-xl text-center">
						Outside that, I'm into building small hobby projects (both software and
						physical), and pretending I'm good at moving heavy circles at the local gym
					</p>
				</div>
			</article>
		</section>
	);
};

export default About;
