# @ddd-tool/domain-designer-ui-component

> Vue 3 UI components for visualizing Domain-Driven Design models

**@ddd-tool/domain-designer-ui-component** provides interactive Vue 3 components for visualizing domain models created with `@ddd-tool/domain-designer-core`. Features event storming UML diagrams, user story displays, workflow animations, and completeness analysis.

[![Online Demo](https://img.shields.io/badge/Online%20Demo-StackBlitz-blue?style=for-the-badge&logo=stackblitz)](https://stackblitz.com/~/github.com/ddd-tool/vue-domain-ui?file=src/views/design.ts)

## Features

- **Interactive UML Diagrams**: Visualize event storming models with drag, zoom, and pan
- **Workflow Animation**: Animate domain workflows to understand business flow
- **User Story Explorer**: Browse and filter workflows by user stories
- **Node Details Panel**: Inspect domain elements with detailed information
- **Multi-Design Support**: Switch between multiple domain designs
- **Export to SVG**: Export diagrams for documentation
- **Bilingual Support**: English and Simplified Chinese (i18n)
- **Customizable Rendering**: Adjust layout, fonts, edges, and more

## Installation

```bash
npm install @ddd-tool/domain-designer-ui-component
```

```bash
pnpm add @ddd-tool/domain-designer-ui-component
```

```bash
bun add @ddd-tool/domain-designer-ui-component
```

### Peer Dependencies

This package requires **Vue 3** and **PrimeVue**:

```bash
npm install vue@>=3.5.27 primevue
```

## Quick Start

```vue
<script setup lang="ts">
import { Ui, PrimeVue, Aura, Tooltip } from '@ddd-tool/domain-designer-ui-component'
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

// Create your domain model
const d = createDomainDesigner()
const i = d.info

const orderId = i.id('OrderId')
const placeOrder = d.command('PlaceOrder', [orderId])
const order = d.agg('Order', [orderId])
const orderPlaced = d.event('OrderPlaced', [orderId])
const customer = d.actor('Customer')

const workflow = d.startWorkflow('Place Order')
customer.command(placeOrder).agg(order).event(orderPlaced)

d.defineUserStory('Customer places order', [workflow])

// Export as default for the UI component
export default d
</script>

<template>
  <PrimeVue :theme="Aura" :pt="{ tooltip: { modifiers: [Tooltip] } }">
    <Ui :designs="{ default: d }" />
  </PrimeVue>
</template>
```

## Components

### `<Ui>`

The main UI component that provides the complete visualization interface.

**Props:**

| Prop | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `designs` | `Record<string, DomainDesigner>` | Yes | Object containing one or more domain designer instances |

**Example:**

```vue
<template>
  <Ui :designs="{ 'Order Management': orderDesign, 'Inventory': inventoryDesign }" />
</template>
```

## Features Overview

### Interactive Diagram Navigation

- **Pan**: Click and drag to move around the diagram
- **Zoom**: Use mouse wheel or zoom controls to zoom in/out
- **Reset**: Reset position and zoom to default

### Workflow Animation

Animate through your domain workflows step by step:

1. Select a user story from the user story panel
2. Choose a workflow within that story
3. Click the play button to start animation
4. Adjust animation speed with the slider

### Node Details

Click on any node in the diagram to view detailed information:

- Node name and type (Actor, Command, Event, Aggregate, etc.)
- Type-specific information
- Associated notes and documentation

### Settings Panel

Customize the visualization:

- **Display Options**: Toggle read models and external systems
- **Language**: Switch between English and Chinese
- **Render Settings**:
  - Layout algorithm (Network Simplex, Tight Tree, Longest Path)
  - Padding and font size
  - Edge style (hard or rounded)
  - Bend size for rounded edges
- **Data Source**: Switch between multiple domain designs

## Render Settings

### Layout Algorithms

| Algorithm | Description |
| :--- | :--- |
| **NetworkSimplex** | Best overall layout quality |
| **TightTree** | Faster computation, good for large diagrams |
| **LongestPath** | Simple layered approach |

### Edge Styles

- **Hard**: Straight edges with sharp corners
- **Rounded**: Smooth curved edges with adjustable bend size

## Keyboard Shortcuts

| Action | Shortcut |
| :--- | :--- |
| Zoom in | `Ctrl` + `+` or `Mouse wheel up` |
| Zoom out | `Ctrl` + `-` or `Mouse wheel down` |
| Reset view | `Ctrl` + `0` |
| Pan | Click and drag |

## Styling

The components use PrimeVue's Aura theme by default. You can customize the appearance by:

1. Using a different PrimeVue theme
2. Overriding CSS variables
3. Customizing component styles via PrimeVue's `pt` (pass through) system

```vue
<template>
  <PrimeVue :theme="{ preset: Aura, options: { prefix: 'p', darkModeSelector: '.my-app-dark' } }">
    <Ui :designs="designs" />
  </PrimeVue>
</template>
```

## Export

Export your diagram as SVG for documentation or presentations:

1. Click the export button in the toolbar
2. The SVG file will be downloaded automatically

## Type Safety

Full TypeScript support with proper type definitions:

```typescript
import type { DomainDesigner } from '@ddd-tool/domain-designer-core'
import type { NonEmptyObject } from '@ddd-tool/domain-designer-ui-component'

interface Props {
  designs: NonEmptyObject<Record<string, DomainDesigner>>
}
```

## License

Apache-2.0

## Repository

[https://github.com/ddd-tool/domain-designer-core-ts](https://github.com/ddd-tool/domain-designer-core-ts)

## Author

AlphaFoxz ([https://github.com/AlphaFoxz](https://github.com/AlphaFoxz))
