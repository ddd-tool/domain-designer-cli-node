# AGENTS.md

## Critical Build Rule

After modifying `@ddd-tool/domain-designer-core` public API (adding/removing exports), you MUST rebuild it:

```bash
pnpm --filter @ddd-tool/domain-designer-core build
```

Other packages consume pre-built `dist/` files (via `package.json` → `module` field), not source TS. Without rebuilding you'll get: `The requested module does not provide an export named 'X'`

## Commands

```bash
pnpm build            # syncver + fmt + build all (use this for full builds)
pnpm verify           # run type checking across all packages
pnpm test             # run all tests
pnpm test:cli         # run CLI tests only
pnpm fmt              # prettier write on .vue/.ts/.mjs files
pnpm syncver          # sync versions across packages (zx script)
pnpm dev              # playground dev server
pnpm dev:ui           # UI component dev server
pnpm dev:page         # VitePress docs dev server
```

Run a single test file: `vitest run <test-file>`

## Monorepo Structure

| Package | Name | Notes |
|---------|------|-------|
| `packages/core/` | `@ddd-tool/domain-designer-core` | Must rebuild after API changes; `main` points to `lib/index.ts` but consumers use `dist/index.js` |
| `packages/generator/` | `@ddd-tool/domain-designer-generator` | Code generation for Java/Kotlin/C#/Go; uses `vue-fn` plugin system |
| `packages/cli/` | `cli` (private) | esbuild bundles to `bin/domain-designer-cli.cjs`; also copies core `.d.ts` into `templates/` |
| `packages/ui-component/` | `@ddd-tool/domain-designer-ui-component` | Vue 3 + PrimeVue; nomnoml UML rendering |
| `packages/playground/` | `playground` (private) | Dev-only; no-op build and test |
| `github-pages/` | `github-pages` (private) | VitePress documentation site |

## Core API Quick Reference

```typescript
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
const d = createDomainDesigner()
```

Methods: `d.actor()`, `d.command()`, `d.facadeCmd()`, `d.agg()`, `d.event()`, `d.system()`, `d.service()`, `d.policy()`, `d.readModel()`, `d.startWorkflow()`, `d.defineUserStory()`, `d.note()`, `d.info`

Info sub-methods: `d.info.id()`, `d.info.valueObj()`, `d.info.document()`, `d.info.func()`, `d.info.version()`

**Common mistakes**:
- `d.info.valueObject()` does NOT exist — it's `d.info.valueObj()`
- `d.func()` does NOT exist — it's `d.info.func()`
- `d.code()` does NOT exist — it's `d.system()`

## Generator API

Exported as `GeneratorPliginHelper` (typo is intentional, do not "fix"). Plugin registration required before use:

```typescript
GeneratorPliginHelper.registerPlugin(GENERATOR_JAVA_PLUGIN)
```

## Known Issues

- `packages/core/DEFECTS.md` and `packages/generator/DEFECTS.md` track design defects — consult when debugging unexpected behavior
- Generator uses regex-based type inference by field name (P0 defect) — generated code may have wrong types
- Generated code contains `// HACK` comments for unimplemented validation
- ReadModel code generation is not implemented (commented out in all plugins)

## Conventions

- pnpm workspaces (`pnpm-workspace.yaml`), `nodeLinker: hoisted`
- Vitest with globals enabled; tests in `**/__tests__/*.test.ts`
- TypeScript strict mode, ESNext target, bundler module resolution
- `isNever()` for exhaustive discriminated union checks (defined in each package's `globals.d.ts`)
- No comments in code unless explicitly requested
- Version sync via `scripts/sync-version.mjs` — all packages share one version
