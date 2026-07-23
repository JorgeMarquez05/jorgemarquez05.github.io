import type { Project } from "../types";

export const PROJECTS: Project[] = [
	{
		id: "transcendence",
		title: "Transcendence",
		description:
			"High-performance real-time multiplayer web platform with secure authentication, low-latency WebSockets communication, and state management.",
		technologies: ["NestJS", "PostgreSQL", "WebSockets", "React", "Docker"],
		githubUrl: "https://github.com/mistery5677/Trascendence",
	},
	{
		id: "webserver",
		title: "WebServer (C++)",
		description:
			"HTTP/1.1 non-blocking web server developed from scratch in C++. Handles HTTP parsing, multiplexing connections, and custom routing.",
		technologies: ["C++", "HTTP Protocol", "Sockets", "Linux"],
		githubUrl: "https://github.com/hbourlot/42-WebServer",
	},
	{
		id: "inception",
		title: "Inception (DevOps)",
		description:
			"Multi-container infrastructure using Docker Compose. Deployed isolated services (NGINX with TLS/SSL, MariaDB, WordPress) automated with Makefiles.",
		technologies: ["Docker", "Docker Compose", "NGINX", "MariaDB", "Alpine Linux"],
		githubUrl: "https://github.com/JorgeMarquez05/Inception",
	},
];
