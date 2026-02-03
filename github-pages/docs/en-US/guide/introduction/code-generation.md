# Code Generation

::: warning Experimental Feature
This is an experimental feature and quite rudimentary. It may not accommodate various frameworks for quite some time. We look forward to your suggestions and code contributions.
:::

Supported languages:

- Java

- Kotlin

- C#

- Go

- TypeScript (not implemented)

## Usage

Run the GenCode script in your workspace and follow the interactive commands.

## Output Content

Assuming the project name is ProjectName and the workspace is the docs directory, the directory structure is:

```text
ProjectName
├─ docs // Workspace
│  ├─ .output // Output directory
│  │  ├─ esm
│  │  │  └─ example.mjs // Internal dependency files during code generation, containing module information
│  │  ├─ csharp // Generated C# code
│  │  ├─ go // Generated Go code
│  │  ├─ java // Generated Java code
│  │  ├─ kotlin // Generated Kotlin code
│  │  └─ typescript // Generated TypeScript code
│  └─ ...
└─ ...

```
