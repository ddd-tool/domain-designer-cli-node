# Getting Started

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher

- An IDE you're comfortable with (same as your actual project)

Install the CLI globally using your package manager:

::: code-group

```bash [npm]
npm i -g @ddd-tool/domain-designer-cli
```

```bash [pnpm]
pnpm i -g @ddd-tool/domain-designer-cli
```

```bash [yarn]
# Not supported - I don't like yarn
```

```bash [bun]
bun i -g @ddd-tool/domain-designer-cli
```

:::

After installation, run the following command to verify:

```bash
domain-designer-cli
```

```log
Repo Addr: https://github.com/ddd-tool/domain-designer-cli-node.git

Script Version: [version number]

Usage: domain-designer-cli [options] [command]
...
...
```

### Initialize Workspace

A workspace is a folder dedicated to storing design tool files. For example, if your actual project is called ProjectName, create an empty docs folder for design and run:

```bash
cd ProjectName/docs
domain-designer-cli init
```

For Linux / macOS users, also run:

```bash
chmod +x *.sh
```

## File Structure

Assuming the project name is ProjectName and the workspace is the docs directory, the workspace file structure is as follows:

```text
ProjectName
├─ docs // Workspace
│  ├─ .output // Code generation output directory, only created after running GenCode script
│  │  ├─ esm
│  │  │  └─ example.mjs
│  │  ├─ csharp
│  │  │  └─ ...
│  │  ├─ go
│  │  │  └─ ...
│  │  ├─ java
│  │  │  └─ ...
│  │  ├─ kotlin
│  │  │  └─ ...
│  │  └─ ts
│  │     └─ ...
│  ├─ node_modules // Only contains helper .d.ts files for IDE hints, safe for version control
│  │  ├─ @ddd-tool
│  │  │  └─ ...
│  │  └─ version.txt
│  ├─ .gitignore // Default git ignore configuration
│  ├─ example.ts // A sample module
│  ├─ GenCode.(bat|sh) // Code generation script
│  └─ RunWeb.(bat|sh) // Web server script
└─ ...
```

## Run Web Server

- Run the RunWeb script in your workspace and wait for dependencies to install.

- Open the URL printed in the console with your browser. (Default: `http://127.0.0.1:5173/`, auto-increments if port is occupied)

- For changes within ts files, refresh the page to see effects. For adding/removing ts files, restart the RunWeb script.
