# Elementum

Elementum is a simple Markdown editor built with React. It supports GitHub Flavored Markdown (GFM), syntax highlighting, and mathematical expressions using KaTeX.

## Features

- **Markdown Editing**: Write and preview Markdown in real-time.
- **Syntax Highlighting**: Code blocks are highlighted using Prism.
- **Mathematical Expressions**: Supports LaTeX-style math using KaTeX.
- **GitHub Flavored Markdown**: Supports GFM features like tables, task lists, and strikethrough.

![Screenshot](assets/Elementum.png)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Levitifox/elementum.git
    cd elementum
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

### Development

To start the development server, run:

```sh
npm run dev
```

### Build

To build the project for production, run:

```sh
npm run build
```

### Preview

To preview the production build, run:

```sh
npm run serve
```

## Project Structure

```
.gitignore
.prettierrc.json
index.html
main.js
package.json
postcss.config.js
preload.js
README.md
src/
    App.css
    App.jsx
    index.css
    main.jsx
tailwind.config.js
vite.config.js
```
