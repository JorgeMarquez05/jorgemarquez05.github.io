import profilePhoto from "../assets/profile-photo.jpg";

export default function About() {
	return (
		<section
			id="about"
			className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
			<div className="relative shrink-0 group mx-auto md:mx-0">
				{/* Glow effect */}
				<div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-sky-500 to-indigo-500 opacity-30 blur group-hover:opacity-60 transition duration-500"></div>

				<div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-900">
					<img
						src={profilePhoto}
						alt="Jorge Márquez"
						className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
					/>
				</div>
			</div>

			<div className="flex-1 text-center md:text-left">
				<p className="text-sky-400 font-mono text-sm mb-2">Hi, my name is</p>
				<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Jorge Márquez</h1>
				<h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-400 mt-2">
					Software Engineer
				</h2>
				<p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto md:mx-0">
					42 Student with a strong foundation in <span className="text-slate-200 font-medium">C/C++</span>,
					low-level architecture, and infrastructure. Currently building scalable full-stack applications with{" "}
					<span className="text-slate-200 font-medium">React</span>,{" "}
					<span className="text-slate-200 font-medium">NestJS</span>, and{" "}
					<span className="text-slate-200 font-medium">Docker</span>.
				</p>

				{/* CTA Buttons */}
				<div className="mt-8 flex gap-4 justify-center md:justify-start">
					<a
						href="#projects"
						className="px-6 py-3 rounded-lg bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 transition">
						Check out my work
					</a>
					<a
						href="#contact"
						className="px-6 py-3 rounded-lg border border-slate-700 font-semibold hover:bg-slate-800 transition">
						Get in touch
					</a>
				</div>
			</div>
		</section>
	);
}
