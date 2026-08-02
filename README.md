# alexanderwalkeriii.github.io

Personal website built with [React Router](https://reactrouter.com/) and [Tailwind CSS](https://tailwindcss.com/).

## Pre-requisites

- **nvm** — Node version manager

  - **Mac:** Follow the [nvm installation instructions](https://github.com/nvm-sh/nvm).
  - **Windows (WSL):** Same as Mac.
  - **Windows (no WSL):** Use [nvm-windows](https://github.com/coreybutler/nvm-windows).

- **Node** — Install the latest version after nvm is set up:

  ```bash
  nvm install latest
  ```

## Installation

```bash
npm install
```

This also sets up the Git hooks (Husky runs automatically via the `prepare` script).

## Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

```bash
npm run build
```

## Linting

Run ESLint across all `.ts` and `.tsx` files:

```bash
npm run lint
```

To auto-fix issues (e.g. remove stray semicolons):

```bash
npm run lint:fix
```

## Contributing

Comprehensive overview can be found [here](./app/data/README.md), but a general overview below is provided.

### Content changes

All text content — bio, publications, research agenda, teaching, references, contact — lives in one file: `app/data/portfolio.ts`

See `app/data/README.md` for a detailed guide.

### Styling / layout changes

Visual and structural changes go in:

- `app/routes/home.tsx` — page layout and sections
- `app/components/Sidebar.tsx` — sidebar
- `app/app.css` — color theme and global styles

### Making a commit

When you run `git commit`, a pre-commit hook fires automatically and does two things:

1. **ESLint (`*.ts`, `*.tsx`)** — lints and auto-fixes staged TypeScript files. The only enforced rule right now is no semicolons; any unfixable errors will block the commit.
2. **Prettier (`*.md`)** — formats staged Markdown files.

If the hook fails, fix the reported errors and try committing again. You do **not** need to run these tools manually before committing — they run for you.

**Note**: if you ever need to get around the pre-commit hook add the flag `--no-verify` to the end of your commit and it'll skip it.

```bash
git commit -m "example" --no-verify
```
