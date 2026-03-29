# AI Development Rules - Kinho Portfolio

## Tech Stack
- **Frontend Framework**: React 18 with Vite for high-performance builds and fast HMR.
- **Language**: TypeScript for end-to-end type safety (Frontend, Backend, and Shared schemas).
- **Styling**: Tailwind CSS for utility-first, responsive, and maintainable design.
- **UI Components**: shadcn/ui (built on Radix UI) for accessible and consistent interface elements.
- **Animations**: Framer Motion for smooth, declarative transitions and scroll-based interactions.
- **Icons**: Lucide React for a comprehensive and lightweight SVG icon library.
- **Backend**: Node.js with Express for API routing and serving the application.
- **Database & ORM**: Drizzle ORM with PostgreSQL for type-safe database management.
- **Validation**: Zod for schema-based validation and automatic TypeScript type inference.
- **Internationalization**: i18next for multi-language support (Portuguese, English, Spanish).

## Library Usage Rules
- **Styling**: Always use Tailwind CSS classes. Avoid custom CSS files or inline styles unless specifically required for complex dynamic calculations.
- **Icons**: Exclusively use `lucide-react`. Do not install other icon libraries.
- **Components**: Prioritize `shadcn/ui` components. If a component doesn't exist in the library, build it using Tailwind and Radix UI primitives.
- **State Management**: Use `React Context` for simple global state and `TanStack Query` (React Query) for all server-side data fetching and caching.
- **Forms**: Use `react-hook-form` combined with `zod` for form validation.
- **Internationalization**: Never hardcode strings in components. Always use the `useTranslation` hook from `react-i18next` and update `client/src/lib/i18n.ts`.
- **Animations**: Use `framer-motion` for all entry animations, hover effects, and layout transitions. Keep animations subtle and performant.
- **Database**: All database interactions must go through the `storage.ts` interface using Drizzle ORM. Never write raw SQL queries directly in routes.
- **Type Safety**: Avoid the `any` type. Define proper interfaces or use Zod schemas to infer types.