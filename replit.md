# Full Stack Portfolio Application

## Overview

This is a modern full-stack portfolio application built for showcasing web development skills. The application is designed as a personal portfolio website for "Yukenthiran Yathu - Full Stack Developer" with a contact form functionality and modern UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Type-safe schema definitions with automatic TypeScript inference
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
1. **Portfolio Sections**: Hero, About, Projects, Skills, Contact, Footer
2. **UI Components**: Extensive shadcn/ui component library including forms, dialogs, toasts, and navigation
3. **Responsive Design**: Mobile-first approach with Tailwind CSS
4. **Contact Form**: Validated contact form with real-time feedback

### Backend Components
1. **API Routes**: Contact form submission and retrieval endpoints
2. **Storage Layer**: Abstracted storage interface with in-memory fallback
3. **Validation**: Zod schema validation for all API inputs
4. **Error Handling**: Centralized error handling middleware

### Shared Components
1. **Schema Definitions**: Shared TypeScript types and Zod validation schemas
2. **Database Models**: User and contact message models

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated using React Hook Form + Zod
3. Data sent to `/api/contact` endpoint via POST request
4. Backend validates data using shared Zod schema
5. Contact message stored in PostgreSQL database
6. Success/error response sent back to frontend
7. Toast notification displayed to user

### Development vs Production
- **Development**: Vite dev server with HMR, in-memory storage fallback
- **Production**: Static files served by Express, PostgreSQL database

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form with Zod resolver
- **HTTP Client**: Native fetch API with TanStack Query wrapper
- **Icons**: Font Awesome and Lucide React icons

### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type checking

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Development**: tsx for TypeScript execution, Replit-specific plugins

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public` directory
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Session Storage**: PostgreSQL-based session storage
- **Static Assets**: Served from `dist/public` in production

### Development Workflow
- **Local Development**: `npm run dev` starts development server with Vite HMR
- **Type Checking**: `npm run check` for TypeScript validation
- **Database Updates**: `npm run db:push` for schema synchronization

### Production Deployment
- **Build**: `npm run build` creates production assets
- **Start**: `npm start` runs production server
- **Database**: Automatic migration on deployment via environment variables

## Key Architectural Decisions

### Monorepo Structure
- **Problem**: Need to share types and schemas between frontend and backend
- **Solution**: Organized as monorepo with shared directory containing common code
- **Benefits**: Type safety across full stack, reduced code duplication
- **Trade-offs**: Slightly more complex build configuration

### Drizzle ORM Choice
- **Problem**: Need type-safe database access with good TypeScript integration
- **Solution**: Drizzle ORM with PostgreSQL, Zod integration for validation
- **Benefits**: Full type safety, automatic schema inference, lightweight
- **Trade-offs**: Newer ecosystem compared to alternatives like Prisma

### shadcn/ui Component Library
- **Problem**: Need consistent, accessible UI components
- **Solution**: shadcn/ui built on Radix primitives with Tailwind styling
- **Benefits**: Copy-paste components, full customization, accessibility built-in
- **Trade-offs**: Requires manual component installation

### In-Memory Storage Fallback
- **Problem**: Development environment may not have database access
- **Solution**: Storage abstraction with in-memory implementation
- **Benefits**: Simplified development setup, easy testing
- **Trade-offs**: Data doesn't persist in development mode