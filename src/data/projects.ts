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
	{
		id: "minishell",
		title: "Minishell",
		description:
			"A minimalist Bash-like shell built from scratch in C. Implements command parsing, AST/tokenization, process management (fork, execve), pipes, redirection, and environment variable expansion.",
		technologies: ["C", "Unix/Linux", "Process Management", "Signals"],
		githubUrl: "https://github.com/hbourlot/42-Minishell",
	},
	{
		id: "cub3d",
		title: "Cub3D",
		description:
			"A 3D raycasting game engine inspired by Wolfenstein 3D developed in C. Features real-time rendering, texture mapping, player movement with collision detection, and window management via MLX.",
		technologies: ["C", "Raycasting", "MiniLibX", "Graphics Programming", "Math"],
		githubUrl: "https://github.com/hbourlot/42-Cub3d",
	},
];
