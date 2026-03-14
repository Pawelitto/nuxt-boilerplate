# 🚀 Nuxt 4 Minimal Boilerplate

A clean, fast, and fully configured starter template for Nuxt 4 projects. This boilerplate is built with modern web development standards to provide a seamless developer experience right out of the box.

## ✨ Tech Stack

* **Framework:** Nuxt 4 & Vue 3
* **Package Manager:** pnpm
* **UI & Styling:** Nuxt UI & Tailwind CSS
* **Utilities:** VueUse
* **Validation:** Zod
* **Code Quality:** ESLint (via `@nuxt/eslint`) & TypeScript

## 🛠️ How to start a new project

This repository is set up as a GitHub Template. You do not need to clone it and manually delete the `.git` folder. Instead, let GitHub do the heavy lifting:

1. Click the green **Use this template** button at the top right of this repository.
2. Select **Create a new repository** from the dropdown menu.
3. Choose the account you want to own the repository (the **Owner** dropdown).
4. Type a name and an optional description for your new project.
5. Choose the repository visibility (Public or Private).
6. Click **Create repository from template**.

GitHub will generate a brand-new repository with all these files, starting with a clean, single commit!

## 💻 Local Setup

Once your new repository is created, clone it to your local machine and run the following commands in your terminal:

```bash
# 1. Install all dependencies
pnpm install

# 2. Start the development server
pnpm dev
```

> **Important Note:** Remember to open the `package.json` file in your new repository and change the `"name": "nuxt-boilerplate"` field to your actual project name!

## 📜 Available Scripts

You can run these commands using `pnpm <command>`:

* `dev` - Starts the development server on `http://localhost:3000`.
* `build` - Builds the application for production.
* `generate` - Pre-renders every route for static hosting.
* `preview` - Locally previews your production build.
* `lint` - Checks the codebase for ESLint errors.
* `lint:fix` - Automatically fixes code formatting and ESLint errors.
* `typecheck` - Runs TypeScript type checking across the project.
