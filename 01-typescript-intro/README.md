# TypeScript Introduction

A hands-on collection of TypeScript exercises covering core language features, built with Vite. Part of the **Angular: De Cero a Experto** course.

## Topics Covered

| File                           | Topic                                                        |
| ------------------------------ | ------------------------------------------------------------ |
| `01-basic-types.ts`            | Primitive types (`string`, `number`, `boolean`), union types |
| `02-object-interface.ts`       | Interfaces and typed objects                                 |
| `03-functions.ts`              | Typed function parameters and return types                   |
| `04-homework-types.ts`         | Type exercises and practice                                  |
| `05-basic-destructuring.ts`    | Object and array destructuring                               |
| `06-function-destructuring.ts` | Destructuring in function parameters                         |
| `07-import-export.ts`          | ES Modules (`import` / `export`)                             |
| `08-classes.ts`                | Classes, access modifiers, and constructors                  |
| `09-generics.ts`               | Generic functions and types                                  |
| `10-decorators.ts`             | Class decorators                                             |
| `11-optional-chaining.ts`      | Optional chaining (`?.`) and nullish coalescing              |

## Requirements

- [Node.js](https://nodejs.org/) (v18+)
- npm

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Open `src/main.ts` and update the import to point to the topic you want to run:

   ```ts
   import "./topics/01-basic-types";
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and check the console output for results.

## Available Scripts

| Script            | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start Vite dev server               |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/) ~5.9
- [Vite](https://vitejs.dev/) ^7.3
