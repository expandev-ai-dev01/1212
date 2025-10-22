# Quiz Naruto - Frontend

Frontend application for Quiz Naruto built with React, TypeScript, and TailwindCSS.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **React Router** - Routing
- **TanStack Query** - Server state management
- **Zustand** - Client state management
- **Axios** - HTTP client
- **Zod** - Schema validation

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── assets/          # Static assets (styles, images)
├── core/            # Core components and utilities
│   ├── components/  # Reusable UI components
│   ├── hooks/       # Custom hooks
│   ├── lib/         # Library configurations
│   ├── types/       # Global TypeScript types
│   ├── utils/       # Utility functions
│   └── constants/   # Global constants
├── domain/          # Business domain modules
├── pages/           # Application pages
├── routes/          # Routing configuration
│   └── layouts/     # Layout components
├── App.tsx          # Root component
└── main.tsx         # Application entry point
```

## Architecture Principles

- **Domain-Driven Design**: Business logic organized by domain
- **Component-Based**: Reusable, composable components
- **Type Safety**: Full TypeScript coverage
- **Separation of Concerns**: Clear boundaries between layers
- **Performance**: Optimized rendering and code splitting

## Development Guidelines

### Component Structure

Each component follows this structure:

```
ComponentName/
├── main.tsx      # Component implementation
├── types.ts      # Type definitions
├── variants.ts   # Style variants (if applicable)
└── index.ts      # Exports
```

### Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useUserData`)
- **Files**: camelCase for directories, specific names for files
- **Types**: PascalCase with descriptive suffixes (e.g., `UserProfileProps`)

### Styling

- Use TailwindCSS utility classes
- Create variants for reusable styles
- Use `clsx` for conditional classes
- Follow mobile-first responsive design

## Contributing

Please follow the established patterns and conventions when adding new features or components.

## License

Private project - All rights reserved