# Portfolio – Jorge Márquez

My personal portfolio website: **[jorgemarquez05.github.io](https://jorgemarquez05.github.io/)**

It shows who I am, the projects I built at 42 Lisboa (Transcendence, WebServer, Inception, Minishell, Cub3D) and how to contact me.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** for development and builds
- **Tailwind CSS** for styling
- **ESLint** for code quality
- **GitHub Actions** for automatic deployment to **GitHub Pages**

## Run it locally

```bash
git clone https://github.com/JorgeMarquez05/jorgemarquez05.github.io.git
cd jorgemarquez05.github.io
npm install
npm run dev
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run build` | Type-checks and builds the site into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Deployment

Every push to `main` triggers the [deploy workflow](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.
