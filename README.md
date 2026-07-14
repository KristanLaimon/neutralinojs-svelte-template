# Neutralinojs + Svelte + TypeScript + Vite Template

This is a template repository for building lightweight desktop applications using [Neutralinojs](https://neutralino.js.org/) and [Svelte](https://svelte.dev/) with [Vite](https://vite.dev/) and [TypeScript](https://www.typescriptlang.org/).

## Getting Started

### Prerequisites
Make sure you have [Neutralino CLI](https://neutralino.js.org/) installed globally:
```bash
npm install -g @neutralinojs/neu
```

### Installation
1. Install dependencies (this will automatically fetch the required Neutralino binaries via `postinstall`):
   ```bash
   bun install # or npm install / pnpm install
   ```

### Running in Development
To start the Vite server and launch the desktop application:
```bash
bun run dev # or npm run dev
```

### Building for Production
To bundle the frontend and generate platform-specific executables:
```bash
bun run build # or npm run build
```
Your final packages will be ready in `/dist/myapp`.
