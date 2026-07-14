# Neutralinojs + Svelte + TypeScript + Vite Template

This is a template repository for building lightweight desktop applications using [Neutralinojs](https://neutralino.js.org/) and [Svelte](https://svelte.dev/) with [Vite](https://vite.dev/) and [TypeScript](https://www.typescriptlang.org/).

## Prerequisites

- Install the Neutralinojs CLI globally:
  ```bash
  npm install -g @neutralinojs/neu
  ```

## Getting Started

### 1. Install Dependencies

You can use `bun` or `npm`:

```bash
bun install
# or
npm install
```

### 2. Run in Development Mode

Starts the Vite development server and launches Neutralinojs with hot reload and the web inspector enabled:

```bash
bun run dev
# or
npm run dev
```

### 3. Build the Application

Builds the frontend production assets and compiles/packages the Neutralinojs binaries:

```bash
bun run build
# or
npm run build
```

Production builds will be generated inside the `dist/` directory.
