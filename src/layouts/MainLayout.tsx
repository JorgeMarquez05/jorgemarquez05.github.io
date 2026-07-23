import type React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface MainLayoutProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div>
			<Navbar />
			<main className="grow flex flex-col items-center justify-center container mx-auto px-4 py-8 max-w-4xl">
				{children}
			</main>
			<Footer />
		</div>
	);
}
