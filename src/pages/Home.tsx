import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
	return (
		<MainLayout>
			{/* Hero Section */}
			<section
				id="about"
				className="py-12 md:py-20 text-center md:text-left">
				<p className="text-sky-400 font-mono text-sm mb-2">Hi, my name is</p>
				<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Jorge Márquez</h1>
				<h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-400 mt-2">
					Software Engineer
				</h2>
				<p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
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
			</section>

			{/* Featured Projects Section */}
			<section
				id="projects"
				className="py-12 border-t border-slate-800">
				<h2 className="text-2xl font-bold mb-6 text-slate-200">Featured Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{PROJECTS.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
						/>
					))}
				</div>
			</section>
			{/* Contact Section */}
			<Contact />
		</MainLayout>
	);
}
