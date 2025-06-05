# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Auto-fix lint issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## Architecture Overview

This is a Next.js 15 starter template using the App Router with Shadcn UI components pre-configured.

### Tech Stack
- **Next.js 15** with App Router (React 19)
- **TypeScript 5** with strict mode
- **Tailwind CSS 4** with Shadcn UI (New York style)
- **React Hook Form** with Zod validation
- **Radix UI** primitives for accessible components

### Key Directories
- `/src/app/` - Next.js App Router pages and layouts
- `/src/registry/new-york-v4/ui/` - Shadcn UI component library
- `/src/components/` - Component demos (can be deleted for clean start)
- `/src/lib/` - Utilities including `cn()` for className merging

### Important Patterns

1. **Component Imports**: Always import Shadcn UI components from `@/registry/new-york-v4/ui/`
   ```tsx
   import { Button } from "@/registry/new-york-v4/ui/button"
   ```

2. **Styling**: Use Tailwind classes with the `cn()` utility from `@/lib/utils`
   ```tsx
   import { cn } from "@/lib/utils"
   className={cn("base-classes", conditional && "conditional-classes")}
   ```

3. **Theme Support**: The app has built-in dark/light theme support via `next-themes`

4. **Path Alias**: Use `@/` for imports from the `src/` directory

### Configuration Files
- `components.json` - Shadcn UI configuration
- `next.config.ts` - Standalone output, bundle analyzer, image optimization
- `tsconfig.json` - Strict TypeScript with `@/*` path alias

### Notes
- No test framework is configured - add Jest/Vitest if needed
- Two Docker configurations available: `Dockerfile` (Node.js) and `Dockerfile.bun`
- Bundle analyzer available: `npm run build:analyze`
- All Radix UI primitives and Lucide icons are pre-installed