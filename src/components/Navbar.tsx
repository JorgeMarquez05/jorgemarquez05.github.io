export default function Navbar() {
	return (
		<header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
			<div className="container mx-auto px-4 py-4 max-w-5xl flex justify-between items-center">
				<a
					href="#"
					className="text-xl font-bold text-sky-400 hover:text-sky-300 transition">
					Jorge Márquez
				</a>
				<nav className="flex gap-6 text-sm font-medium text-slate-300">
					<a
						href="#about"
						className="hover:text-sky-400 transition">
						About
					</a>
					<a
						href="#projects"
						className="hover:text-sky-400 transition">
						Projects
					</a>
					<a
						href="#contact"
						className="hover:text-sky-400 transition">
						Contact
					</a>
				</nav>
			</div>
		</header>
	);
}
