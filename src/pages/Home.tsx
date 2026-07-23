import About from "../components/About";
import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
	return (
		<MainLayout>
			{/* Hero Section */}
			<About />

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
